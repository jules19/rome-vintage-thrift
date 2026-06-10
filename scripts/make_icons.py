#!/usr/bin/env python3
"""Generate PWA icons (coat-hanger mark on burgundy) without external deps."""
import struct, zlib, math, os

BG_TOP = (142, 47, 72)     # #8e2f48
BG_BOT = (109, 34, 55)     # #6d2237
FG = (250, 246, 239)       # cream

def dist_seg(px, py, ax, ay, bx, by):
    vx, vy = bx - ax, by - ay
    wx, wy = px - ax, py - ay
    c1 = vx * wx + vy * wy
    if c1 <= 0:
        return math.hypot(px - ax, py - ay)
    c2 = vx * vx + vy * vy
    if c2 <= c1:
        return math.hypot(px - bx, py - by)
    t = c1 / c2
    return math.hypot(px - (ax + t * vx), py - (ay + t * vy))

def hanger_alpha(u, v):
    """Coverage 0..1 of the hanger mark at unit coords (u,v)."""
    aa = 0.006  # anti-alias band
    stroke = 0.040
    d = 1e9
    # hook ring: circle r=0.085 centered (0.5, 0.265), open at bottom-left
    dc = abs(math.hypot(u - 0.5, v - 0.265) - 0.085)
    ang = math.degrees(math.atan2(v - 0.265, u - 0.5))  # -180..180, y down
    if not (95 < ang < 175):  # gap of the hook
        d = min(d, dc)
    # neck
    d = min(d, dist_seg(u, v, 0.5, 0.345, 0.5, 0.41))
    # shoulders
    d = min(d, dist_seg(u, v, 0.5, 0.41, 0.175, 0.655))
    d = min(d, dist_seg(u, v, 0.5, 0.41, 0.825, 0.655))
    # bottom bar
    d = min(d, dist_seg(u, v, 0.175, 0.655, 0.825, 0.655))
    x = (stroke / 2 - d) / aa
    return max(0.0, min(1.0, 0.5 + x / 2))

def make_icon(size, path, supersample=3):
    rows = []
    ss = supersample
    for y in range(size):
        row = bytearray()
        for x in range(size):
            acc = 0.0
            for sy in range(ss):
                for sx in range(ss):
                    u = (x + (sx + 0.5) / ss) / size
                    v = (y + (sy + 0.5) / ss) / size
                    acc += hanger_alpha(u, v)
            a = acc / (ss * ss)
            t = y / size
            bg = tuple(round(BG_TOP[i] + (BG_BOT[i] - BG_TOP[i]) * t) for i in range(3))
            px = tuple(round(bg[i] + (FG[i] - bg[i]) * a) for i in range(3))
            row += bytes(px)
        rows.append(bytes(row))
    write_png(path, size, size, rows)
    print("wrote", path)

def write_png(path, w, h, rows):
    raw = b"".join(b"\x00" + r for r in rows)
    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
    png = (b"\x89PNG\r\n\x1a\n"
           + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0))
           + chunk(b"IDAT", zlib.compress(raw, 9))
           + chunk(b"IEND", b""))
    with open(path, "wb") as f:
        f.write(png)

if __name__ == "__main__":
    out = os.path.join(os.path.dirname(__file__), "..", "icons")
    os.makedirs(out, exist_ok=True)
    make_icon(192, os.path.join(out, "icon-192.png"))
    make_icon(512, os.path.join(out, "icon-512.png"), supersample=2)
    make_icon(180, os.path.join(out, "apple-touch-icon.png"))
