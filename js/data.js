/* ============================================================
   The Rome Vintage Loop — walk data
   A full-day self-guided vintage fashion walk through Monti,
   the Centro Storico, the Jewish Ghetto, Trastevere and
   Porta Portese, returning past the Pantheon and Trevi.
   Coordinates are WGS84 [lat, lon]. routeTo = suggested path
   from the previous stop (ends at this stop's pin).
   ============================================================ */

const WALK = {
  title: "The Rome Vintage Loop",
  subtitle: "A full-day vintage fashion walk — Monti · Centro Storico · Ghetto · Trastevere · Porta Portese",
  city: "Rome, Italy",
  approxKm: 12.5,
  approxHours: "6–9 h with browsing & lunch",
  start: "Piazza della Madonna dei Monti (10 min walk from Cavour metro, line B)",

  guide: [
    {
      h: "How this walk works",
      p: [
        "This is one big loop — about 10.5 km as the dashed line measures, realistically 11–12 km once real streets, detours and shop-to-shop wandering are counted. You are strong walkers, so it is designed as a single glorious day — but it splits naturally into two halves at the Tiber (stops 1–17 and 18–23) if you'd rather spread it over two days.",
        "Numbered pins on the map are in walking order. The dashed line is a suggested route along the prettiest streets — central Rome is a maze, so treat it as a guide, not gospel. Getting slightly lost in the centro storico is a feature, not a bug.",
        "Tap any pin (or any card in the Stops list) for the full story, the address, and an insider tip. Tick stops off as you go — your progress is saved on the phone."
      ]
    },
    {
      h: "Late November in Rome",
      p: [
        "Daylight runs roughly 07:00–16:45, so start by 9:30 to enjoy the shops in daylight and save the Trevi finale for after dark, when the fountain is lit and the crowds thin.",
        "Expect 8–16 °C and a real chance of rain. Layers, a compact umbrella and waterproof shoes are the uniform. The upside: November is low season — you'll have the vintage racks largely to yourselves.",
        "Most independent vintage shops open around 10:30–11:00 and close 19:30–20:00. Many are CLOSED or open late on Sunday and Monday mornings — but Sunday is the only day for Porta Portese flea market, and Mercato Monti runs Saturday + Sunday. See the day-planner below."
      ]
    },
    {
      h: "Which day should we go?",
      p: [
        "SUNDAY is the big one: Porta Portese flea market (06:00–14:00, the largest in Europe) and Mercato Monti both run — but some boutiques on the route stay shut. Sunday strategy: flip the loop — start at Porta Portese by 8:30, then Trastevere, then cross to the centro and finish in Monti, where shops open from late morning.",
        "SATURDAY is the best all-round day: every shop open, plus Mercato Monti, plus the Campo de' Fiori market in full swing. Walk the loop exactly as numbered.",
        "WEEKDAYS are calmest: every boutique open (from ~10:30), no market crowds, but no Mercato Monti or Porta Portese. The walk still works beautifully — the two markets are simply marked as 'closed today'."
      ]
    },
    {
      h: "Vintage shopping in Rome — the ground rules",
      p: [
        "Cash is king at the markets (there is not a card reader in sight at Porta Portese) and useful for discounts in small shops. Carry €50–100 in smaller notes.",
        "Say 'buongiorno' walking into any small shop — it genuinely changes how you're treated. Haggling is normal at Porta Portese, gentle at Mercato Monti, and not done in boutiques.",
        "Italian sizing runs small and vintage sizing smaller. Ignore labels and try things on — every shop on this route has a changing corner. Quick reference, women's: IT 40 ≈ US 4 ≈ UK 8; IT 42 ≈ US 6 ≈ UK 10; IT 44 ≈ US 8 ≈ UK 12. Men's jackets: IT 50 ≈ US/UK 40.",
        "Quality tells: hand-finished buttonholes, 'Made in Italy' woven (not printed) labels, metal zips (pre-1970s), and union or boutique labels inside the collar. Rome is one of the last cities where serious 1960s–70s Italian tailoring still turns up on open racks."
      ]
    },
    {
      h: "Eat & drink along the way",
      p: [
        "Morning coffee: the bars on Piazza della Madonna dei Monti (stop 1) — order at the counter like a Roman, it's cheaper.",
        "Lunch: the Jewish Ghetto (stop 16) for carciofo alla giudìa (deep-fried artichoke) and fried baccalà, or grab pizza bianca from the Forno at Campo de' Fiori (stop 13) and eat it walking.",
        "Afternoon: Bar San Calisto in Trastevere (by stop 19) — scruffy, legendary, and the cheapest coffee in Rome. Aperitivo back in Monti at Ai Tre Scalini, the ivy-covered wine bar on Via Panisperna near stop 5.",
        "Water: Rome's cast-iron street fountains ('nasoni') run constantly with cold drinking water — refill freely, there's one in almost every piazza on the route."
      ]
    },
    {
      h: "Using the app offline",
      p: [
        "Before you leave the hotel wi-fi, open the Map tab and tap 'Save maps offline'. The app downloads every map tile along the route (about 5–10 MB) so the whole walk works in airplane mode.",
        "Add the app to your Home Screen (Share button → 'Add to Home Screen') — it then opens full-screen like a native app and keeps working with no connection.",
        "The blue locate button shows your live position on the map; GPS works fine offline. All stories, tips and your progress are stored on the phone."
      ]
    }
  ],

  stops: [
    {
      id: "monti-start",
      n: 1, kind: "start", emoji: "☕️",
      name: "Piazza della Madonna dei Monti",
      addr: "Piazza della Madonna dei Monti, Rione Monti",
      hours: "Piazza — always open",
      coords: [41.8946, 12.4913],
      routeTo: [],
      blurb: "Start here: espresso on the square in Rome's ancient slum turned vintage quarter.",
      story: [
        "Welcome to Monti, Rome's first rione and today its undisputed vintage capital. Two thousand years ago this valley was the Suburra — the ancient city's loudest, roughest slum, all taverns, laundries and five-storey tenements. Julius Caesar grew up here among the noise before he ever crossed a Rubicon. The emperors literally walled the Forum off from it (you'll see that firewall later at stop 9).",
        "That outsider energy never left. When rents in the centro rose in the 2000s, Rome's secondhand dealers, costume hunters and young designers settled these lanes, and Monti became the city's thrift heart — more vintage shops per block than anywhere in Italy south of Milan.",
        "The pretty fountain in the middle of the square is by Giacomo della Porta (1588), and the church it faces, the Madonna dei Monti, went up after a miracle-working image of the Virgin was found in a derelict convent on this spot in 1579. The square is Monti's living room: students, old men arguing football, dogs, guitars."
      ],
      tip: "Stand at the counter for your espresso (al banco) — sitting down can double the price. A cornetto and caffè should run about €3. Fill your water bottle at the nasone fountain on the square."
    },
    {
      id: "pifebo",
      n: 2, kind: "shop", emoji: "🧥",
      name: "Pifebo Vintage",
      addr: "Via dei Serpenti 135/136",
      hours: "Daily, roughly 10:30–20:00 (Sun from ~11:00)",
      coords: [41.8958, 12.4903],
      routeTo: [[41.8946, 12.4913], [41.8944, 12.4910], [41.8950, 12.4907], [41.8958, 12.4903]],
      blurb: "Rome's vintage institution — leather, denim and 70s–90s colour floor to ceiling.",
      story: [
        "Pifebo is the name Romans say first when you ask where to buy vintage. Founded by three friends and grown into a small empire (this Monti flagship plus branches and a famous pay-by-the-kilo outlet near San Giovanni), it is the city's great democratic vintage warehouse: tomato-red walls, sneakers dangling from the ceiling, and rack after rack of 1970s–1990s stock.",
        "This is the place for the classics of Italian secondhand: suede and leather jackets, Levi's by the metre, 80s sports jackets, Patagonia fleeces, cowboy boots, and a rotating wall of sunglasses. Stock turns over fast because buyers replenish from huge warehouse stores outside the centre — if you see it and love it, buy it.",
        "You're standing on Via dei Serpenti, 'street of the serpents' — the name probably comes from a long-gone fresco of the Virgin slaying a dragon. Look south down the street: that's the Colosseum closing the view. Not a bad backdrop for trying on a leather trench."
      ],
      tip: "Her first target here: the leather and suede wall. Italian 70s leather is the best value in the shop — check seams and zips, then ask 'C'è uno sconto?' (any discount?) if buying two or more pieces. They often say yes."
    },
    {
      id: "gallinelle",
      n: 3, kind: "shop", emoji: "🪡",
      name: "Le Gallinelle",
      addr: "Via Panisperna 61",
      hours: "Mon–Sat ~11:00–20:00; Oct–Jan also Sun ~12:00–20:00",
      coords: [41.8966, 12.4901],
      routeTo: [[41.8958, 12.4903], [41.8964, 12.4901], [41.8966, 12.4901]],
      blurb: "An atelier in a former poultry shop where vintage is rebuilt into one-off pieces.",
      story: [
        "Le Gallinelle — 'the little hens' — keeps the name of the poultry shop that occupied this space for decades; the marble counters stayed when designer Wilma Silvestri took it over in 1989. It's less a thrift store than a laboratory: Silvestri takes vintage fabric and dead-stock cloth and rebuilds it into new one-off garments, half tailoring, half theatre. Her work has dressed Italian film and stage productions, and the shop is a regular stop for costume designers raiding Rome for ideas.",
        "If your wife loves vintage as raw material — the cut, cloth and possibility of it — this is her shop. Pieces are unique, prices are fair for handmade, and Silvestri and her family are generous with stories if it's quiet.",
        "A nerdy bonus for the walk: Via Panisperna is one of the most famous street names in physics. At number 89a, up the hill, Enrico Fermi and the 'Via Panisperna boys' first split the atom's nucleus with slow neutrons in 1934 — work that won Fermi the Nobel Prize and changed the century. The street name itself likely comes from panis et perna — 'bread and ham' — which monks handed out here to the poor on the feast of St Lawrence."
      ],
      tip: "Ask to see the upcycled coats — reworked from vintage wool and impossible to find anywhere else on earth. A genuinely Roman souvenir that will never meet its twin at a party."
    },
    {
      id: "bluegoose",
      n: 4, kind: "shop", emoji: "🦢",
      name: "Blue Goose",
      addr: "Via del Boschetto 4",
      hours: "Roughly Tue–Sun 11:00–19:30 (often closed Mon)",
      coords: [41.8979, 12.4907],
      routeTo: [[41.8966, 12.4901], [41.8972, 12.4898], [41.8976, 12.4897], [41.8980, 12.4904], [41.8979, 12.4907]],
      blurb: "Curated designer vintage for women — the edited, no-rummage end of the spectrum.",
      story: [
        "After the joyful chaos of Pifebo, Blue Goose is the other school of Roman vintage: a small, calm, sharply edited boutique of women's designer pieces — silk scarves, structured 80s blazers, designer bags and jewellery — chosen one by one and priced honestly for what they are. Romans recommend it precisely because it's 'anything but musty': everything is cleaned, steamed and ready to wear to dinner the same night.",
        "It sits at the top of Via del Boschetto ('street of the little wood', after the gardens that once climbed the Viminal hill here), Monti's prettiest shopping lane — a corridor of independent ateliers, jewellers and one-room boutiques that you'll now walk top to bottom.",
        "You're a few steps from Via Nazionale and the Palazzo delle Esposizioni's giant neoclassical façade. Fun contrast: that pompous 1880s boulevard was driven straight through Monti's medieval fabric when Rome became Italy's capital — the quiet lane you're standing in is what the whole quarter looked like before."
      ],
      tip: "This is the stop for one investment piece — an Italian designer silk scarf or 80s leather bag here costs a fraction of London or New York vintage prices. Ask the owner what's newly arrived; the best pieces never reach the rail."
    },
    {
      id: "pulp",
      n: 5, kind: "shop", emoji: "🕺",
      name: "Pulp",
      addr: "Via del Boschetto 140",
      hours: "Mon–Sat ~10:30–20:00; Sun closed",
      coords: [41.8963, 12.4915],
      routeTo: [[41.8979, 12.4907], [41.8973, 12.4911], [41.8967, 12.4913], [41.8963, 12.4915]],
      blurb: "Monti's playful side: 60s–90s party pieces, loud shirts and club-era treasure.",
      story: [
        "Walking down Via del Boschetto you pass goldsmiths, a violin maker, ceramicists and one-room fashion studios — this lane is the last stretch of old artisan Monti, and window-shopping it is half the point of the walk.",
        "Pulp, near the bottom, has been here for over two decades and is Monti's id: racks of 1960s–90s with the dial turned up. Sequinned tops, loud 70s shirts, vinyl boots, 80s cocktail dresses, costume jewellery — the stock leans fun and wearable, prices stay reasonable, and the owners have a sharp eye for pieces with a wink.",
        "On the corner where Boschetto crosses Via Panisperna you'll spot Ai Tre Scalini, the ivy-drowned 1895 wine bar that is Monti's second living room. File it away: it opens in the afternoon and is the perfect aperitivo when you stagger home tonight (the loop ends ten minutes from here)."
      ],
      tip: "If you're in Rome over a weekend evening, Boschetto's boutiques stay open late and the street is at its most magical after dark — worth a re-stroll with your Tre Scalini wine."
    },
    {
      id: "kingsize",
      n: 6, kind: "shop", emoji: "🏀",
      name: "King Size Vintage",
      addr: "Via Leonina 78/79",
      hours: "Daily ~10:30–20:00",
      coords: [41.8943, 12.4928],
      routeTo: [[41.8963, 12.4915], [41.8956, 12.4920], [41.8952, 12.4924], [41.8946, 12.4932], [41.8943, 12.4928]],
      blurb: "The big one for menswear — rooms of sportswear, leather and 90s designer labels.",
      story: [
        "You arrive via Piazza degli Zingari, a tiny sloping square that was once the gathering place of Rome's Roma community (hence the old name), now one of Monti's most photographed corners.",
        "King Size feels enormous by Roman standards — room after room off Via Leonina stacked with vintage and secondhand, strongest on menswear and sportswear: fringe jackets, leather trousers, suede boots, bum bags, 90s Nike and Adidas, and a steady trickle of big Italian names (Versace, Moschino, Ferragamo) at non-Versace prices. Plenty for women too, especially outerwear and denim.",
        "Two minutes up the parallel Via Urbana stands Santa Pudenziana, holder of a quietly staggering record: its apse mosaic, from about AD 390, is the oldest surviving Christian apse mosaic anywhere — Christ in a gold toga among toga-wearing apostles, dressed exactly like Roman senators of the day. Fashion history in tesserae, free to visit, and almost always empty."
      ],
      tip: "His turn: the leather and varsity racks here are the best men's hunting on the walk. Check the designer rail by the till — mispriced gems surface weekly. Then take the 3-minute Santa Pudenziana detour; it's worth it.",
      detour: "Santa Pudenziana, Via Urbana 160 — oldest Christian apse mosaic in the world (c. 390 AD), 3 min away."
    },
    {
      id: "mercatomonti",
      n: 7, kind: "market", emoji: "🛍️",
      name: "Mercato Monti Urban Market",
      addr: "Via Leonina 46 (inside the Grand Hotel Palatino)",
      hours: "Sat & Sun ~10:00–20:00, September–June only",
      coords: [41.8943, 12.4921],
      routeTo: [[41.8943, 12.4928], [41.8943, 12.4921]],
      blurb: "Weekend indoor market: young designers, curated vintage stalls and accessories.",
      story: [
        "A few doors along Via Leonina, an unmarked hotel conference space transforms every autumn-to-spring weekend into Mercato Monti, the city's hippest small market. Thirty-odd stalls rotate: independent jewellery makers, illustrators, young Roman designers selling first collections, and — the reason it's on this walk — several of the city's best curated vintage dealers, strong on sunglasses, scarves, bags and mid-century dresses.",
        "It started in 2009 as a meeting point for Monti's creative scene and became the template for 'urban markets' all over Italy. Because stallholders are usually the designers and collectors themselves, every table comes with a conversation. Entry is free.",
        "In late November you're in luck — it runs every weekend, and the pre-Christmas editions are the year's liveliest. On a weekday, peek at the poster by the door and plan a weekend return; it's ten minutes from most of central Rome."
      ],
      tip: "Vintage sunglasses are the sleeper buy here — Italian 70s–80s frames from €20–40 that would be €150 in a curated shop back home. Gentle haggling is fine if you're buying two."
    },
    {
      id: "humana-monti",
      n: 8, kind: "shop", emoji: "♻️",
      name: "Humana Vintage (Monti)",
      addr: "Via Cavour 102",
      hours: "Mon–Sat ~10:00–19:30 (Sun varies)",
      coords: [41.8941, 12.4931],
      routeTo: [[41.8943, 12.4921], [41.8944, 12.4929], [41.8945, 12.4934], [41.8941, 12.4931]],
      blurb: "Charity-shop prices, genuine pre-90s stock — the bargain stop of the walk.",
      story: [
        "Humana is the thrift-store end of the Roman vintage food chain, and the most virtuous stop on the walk: it's run by Humana People to People Italia, and profits fund development projects in southern Africa and social programmes in Italy. The Rome branches are beloved because the sorting is real — what reaches these racks is genuinely vintage (mostly 1960s–90s), hand-picked from donation streams, yet priced like a charity shop: most pieces €5–25.",
        "This is where Roman fashion students dig. Wool coats, 70s dresses, knitwear, men's blazers — perfect for November layering finds you'll actually wear all winter. Stock changes constantly and there are frequent colour-tag discount weeks; the further into the month, the deeper the markdowns.",
        "There's a second, larger branch right on this walk at stop 12 (Corso Vittorio Emanuele II 199), so if a size fails here, fate gives you another roll of the dice in an hour."
      ],
      tip: "Go straight to the coats in November — Italian wool overcoats for under €30 are routine here. Check the tag colour against the discount poster at the till; that 'meh' price might already be half off."
    },
    {
      id: "fori",
      n: 9, kind: "landmark", emoji: "🏛️",
      name: "Largo Corrado Ricci — the Imperial Fora",
      addr: "Via dei Fori Imperiali, at Largo Corrado Ricci",
      hours: "Street viewpoint — always open",
      coords: [41.8927, 12.4878],
      routeTo: [[41.8941, 12.4931], [41.8936, 12.4915], [41.8932, 12.4895], [41.8927, 12.4878]],
      blurb: "Walk out of the thrift quarter and straight into ancient Rome — fashion included.",
      story: [
        "Via Cavour spills you out of Monti and 2,000 years backwards: before you spreads the Forum of Augustus, and to the left, the Colosseum closes the avenue. The giant grey stone wall behind Augustus's forum was built for one purpose — to screen the emperor's gleaming marble from the Suburra's slums and fires. You have just walked, in five minutes, the exact social distance that wall was built to enforce.",
        "Since you're on a fashion pilgrimage, consider ancient Rome's: the toga was a semicircle of wool up to six metres long, so difficult to drape that the rich kept a slave (the vestiplicus) trained purely to fold it. Colour was law, not taste — Tyrian purple, milked drop by drop from sea snails, cost more than gold by weight, and under the empire wearing an all-purple garment was a crime reserved for the emperor. Status was literally woven in: senators wore a broad purple stripe (the latus clavus), knights a narrow one. Sumptuary laws policing who could wear what lasted into the Renaissance — the rules vintage fashion now gleefully ignores.",
        "If neither of you has stood close to the Colosseum, take the 450 m detour down the avenue for the full reveal; otherwise the view from here is the postcard."
      ],
      tip: "The light on the Forum is best from this north side. For the classic photo, walk 100 m along Via dei Fori Imperiali and shoot down the avenue to the Colosseum — in November you may have it nearly to yourselves.",
      detour: "Colosseum exterior — 450 m down Via dei Fori Imperiali, 12 min there and back."
    },
    {
      id: "trajan",
      n: 10, kind: "landmark", emoji: "🏬",
      name: "Trajan's Market & Piazza Venezia",
      addr: "Via dei Fori Imperiali at Piazza Venezia",
      hours: "Street viewpoint — always open",
      coords: [41.8956, 12.4828],
      routeTo: [[41.8927, 12.4878], [41.8937, 12.4861], [41.8947, 12.4843], [41.8956, 12.4828]],
      blurb: "Say hello to the world's first shopping mall, 1,900 years before the food court.",
      story: [
        "Walking up Via dei Fori Imperiali, the great brick hemicycle climbing the hill on your right is Trajan's Market (c. AD 110) — a multi-level complex of more than 150 vaulted shop units, offices and a covered market hall, routinely called the world's first shopping mall. Romans browsed spices, silk from China, wine and fish sauce on dedicated retail levels with a covered arcade. Your vintage crawl today stands in an extremely long local tradition.",
        "Beside it rises Trajan's Column (AD 113), with a 200-metre comic strip of 2,662 figures spiralling to the top, carved to celebrate the Dacian wars — and, incidentally, one of our best sources for how ancient Romans actually dressed in the field: look for the soldiers' care-worn cloaks and the segmented armour.",
        "Ahead is Piazza Venezia, Rome's roaring traffic heart, dominated by the white Vittoriano ('the typewriter' to Romans). The balcony on the smaller brown palazzo to its right is where Mussolini harangued crowds; today the palazzo is a quiet museum and the square's most famous performer is whichever white-gloved traffic policeman is conducting cars like an orchestra from the central podium."
      ],
      tip: "Cross Piazza Venezia at the official crossings only — and watch the traffic cop on the podium if one's on duty: the balletic hand signals are a genuine, dying Roman art form."
    },
    {
      id: "argentina",
      n: 11, kind: "landmark", emoji: "🐈",
      name: "Largo di Torre Argentina",
      addr: "Largo di Torre Argentina",
      hours: "Square always open; walkway & cat sanctuary daytime",
      coords: [41.8956, 12.4769],
      routeTo: [[41.8956, 12.4828], [41.8957, 12.4806], [41.8956, 12.4788], [41.8956, 12.4769]],
      blurb: "Caesar was stabbed here — today it's run by cats and restored with fashion money.",
      story: [
        "This sunken square of four Republican temples is where, on the Ides of March 44 BC, Julius Caesar was stabbed 23 times at the foot of Pompey's senate hall — not at the Forum, as the movies have it, but right here, in what is now a cat sanctuary. The boy from the Suburra you met at stop 1 ended his story 800 metres from where it began.",
        "And the fashion connection is real: the elegant raised walkways that since 2023 let you descend among the ruins were paid for by Bulgari, the Roman jeweller — part of a quiet tradition of fashion houses adopting monuments (you'll meet Fendi's fountain at the finale). The resident cat colony, around 130 strong, is protected by city law and tended by volunteers; the cats sun themselves on 2,000-year-old column stumps with complete entitlement.",
        "From here the route enters the true centro storico — the tangle of Renaissance streets where Rome's secondhand trade has run, in one form or another, for five centuries."
      ],
      tip: "The cat sanctuary entrance is at the southwest corner, down the stairs — free, donation welcome, and a guaranteed hit if you need a sit-down. November cats are maximally sun-seeking and photogenic."
    },
    {
      id: "humana-centro",
      n: 12, kind: "shop", emoji: "♻️",
      name: "Humana Vintage (Centro)",
      addr: "Corso Vittorio Emanuele II 199",
      hours: "Mon–Sat ~10:00–19:30 (Sun varies)",
      coords: [41.8963, 12.4744],
      routeTo: [[41.8956, 12.4769], [41.8960, 12.4756], [41.8963, 12.4744]],
      blurb: "The bigger Humana — fresh racks, charity prices, second chance at that coat.",
      story: [
        "The Corso Vittorio branch is the larger and busier of the two Humanas on this walk — a proper sales floor of true vintage at charity prices on one of Rome's main baroque thoroughfares. Same virtuous model as stop 8 (profits to development projects), different donation stream, so the stock is genuinely different: this branch tends to be stronger on dresses, knitwear and accessories.",
        "It's also simply a great pit-stop position: you're two minutes from Campo de' Fiori and the prettiest stretch of the old city. The contrast is very Roman — fast-fashion-priced 1970s wool under frescoed cornices, between a baroque church and a palazzo.",
        "A note on why Rome is so good at this: Italians kept their clothes. Multi-generational apartments, formal dress culture, and a tailoring tradition meant wardrobes were maintained for decades, and when those wardrobes are cleared, the good stuff enters exactly these channels. The 'nonna's closet' pipeline is real, and November (post-summer house clear-outs) is a strong season for it."
      ],
      tip: "Scan the new-arrivals rack first (usually by the door). If you saw something at the Monti branch and hesitated, the same tag colour discounts apply here — and prices drop further on midweek promo days."
    },
    {
      id: "campo",
      n: 13, kind: "landmark", emoji: "🌼",
      name: "Campo de' Fiori",
      addr: "Piazza Campo de' Fiori",
      hours: "Market Mon–Sat until ~14:00; square always open",
      coords: [41.8957, 12.4722],
      routeTo: [[41.8963, 12.4744], [41.8960, 12.4737], [41.8955, 12.4729], [41.8957, 12.4722]],
      blurb: "Market square, pizza bianca, and the medieval fashion district hiding in the street names.",
      story: [
        "Campo de' Fiori — 'field of flowers' — has hosted Rome's rowdiest market since 1869 and public life for far longer: the brooding hooded statue in the centre is Giordano Bruno, the philosopher burned here for heresy in 1600, deliberately facing the Vatican. By morning the square is all market stalls and clementines; by night, all spritz.",
        "For your purposes, read the street signs around the square — they are a map of Renaissance Rome's fashion industry, when every trade had its lane: Via dei Cappellari (hat-makers), Via dei Giubbonari (jacket- and doublet-makers — giubbe), Via dei Baullari (trunk-makers), Via dei Chiavari (key-makers). You are standing in the original garment district, 500 years before anyone said the word 'vintage'. Peer down Cappellari especially: workshop doors, washing lines, barely changed.",
        "Mandatory refuelling: the Forno Campo de' Fiori, in the corner of the square, has baked since 1419 on this site by some counts and makes Rome's definitive pizza bianca — hot, oily, salted flatbread sold by weight. Eat it standing in the square like everyone else for 600 years."
      ],
      tip: "Pizza bianca plain is the connoisseur's order, but in November ask for it 'con mortazza' (stuffed with mortadella) — the great Roman street lunch, about €5. The market wraps up by 14:00, so if it's morning, browse the spice and flower stalls now."
    },
    {
      id: "cinzia",
      n: 14, kind: "shop", emoji: "🕶️",
      name: "Vestiti Usati Cinzia",
      addr: "Via del Governo Vecchio 45",
      hours: "Mon–Sat ~10:30–19:30 (Sun varies)",
      coords: [41.8981, 12.4713],
      routeTo: [[41.8957, 12.4722], [41.8963, 12.4719], [41.8969, 12.4718], [41.8976, 12.4722], [41.8980, 12.4722], [41.8981, 12.4713]],
      blurb: "The queen of Rome's original vintage street — 60s/70s/80s, picked for 40 years.",
      story: [
        "Via del Governo Vecchio is where Roman vintage was born. This crooked medieval street — once part of the Via Papalis, the papal procession route, and named for the 'old government' palace at No. 39 that ran papal Rome until 1741 — filled with secondhand dealers in the 1970s, decades before 'vintage' was a marketing word. A handful of the originals survive, and Cinzia's is the most loved.",
        "Cinzia herself has stood behind this counter for some forty years, and her stock is classic Governo Vecchio: 1960s–80s, strong on suede and leather coats, French and Italian dresses, denim, and one of the city's best walls of original vintage sunglasses. Prices remain famously fair for the location — this street's rents have evicted lesser shops.",
        "On your way in you passed Piazza di Pasquino. The battered marble torso on the corner is Pasquino, Rome's 'talking statue': since 1501, Romans have pasted anonymous satirical verses ('pasquinades' — the word entered English) on his plinth to roast popes and politicians. They still do — read today's crop of notes as you pass."
      ],
      tip: "The sunglasses are the signature buy — original (not re-issued) 60s–80s frames. Try the suede coats too; Cinzia has an uncanny eye for cuts that work on modern shoulders. Greet her — regulars get shown the back stock."
    },
    {
      id: "omero",
      n: 15, kind: "shop", emoji: "🎩",
      name: "Omero & Cecilia — Vestiti Usati",
      addr: "Via del Governo Vecchio 110",
      hours: "Mon–Sat ~10:30–19:30 (Sun varies)",
      coords: [41.8986, 12.4699],
      routeTo: [[41.8981, 12.4713], [41.8984, 12.4707], [41.8986, 12.4699]],
      blurb: "Deep-stock vintage den: tweed, military, 40s–80s — give it time, it gives back.",
      story: [
        "A few doors along, Omero e Cecilia is the street's other institution — older-school, deeper-stocked, and the one that rewards patience. Inside is a long burrow of rooms with a bit of everything from the 1940s onward: Harris tweed and British military coats (Omero's famous obsessions), 50s dresses, leather satchels, waistcoats, hats. Nothing is over-curated; everything wants ten minutes of digging.",
        "It's the shop where stylists pull for Italian film productions and where you understand the difference between a vintage boutique and a vintage archive. If she's the dress hunter and he's the tweed hunter, you'll lose each other in here happily for half an hour.",
        "When you surface: Piazza Navona, Bernini's baroque masterpiece built on a Roman stadium (the square is the racetrack's exact shape), is literally two minutes' walk behind the shop. In late November its Christmas market is usually being assembled — touristy, but the fountains floodlit at dusk are unbeatable. Take the five-minute detour, then return here to continue the loop."
      ],
      tip: "Men's overcoats and tweed are the best-value category in the shop — frequently under €100 for pieces that would be triple that in a London vintage dealer. Check inside pockets for decades-old tailor labels with the original owner's name: provenance for free.",
      detour: "Piazza Navona — 150 m behind the shop. Bernini's Four Rivers fountain, the racetrack-shaped square, and (late Nov) the Christmas market going up."
    },
    {
      id: "ghetto",
      n: 16, kind: "food", emoji: "🍴",
      name: "The Jewish Ghetto — Via del Portico d'Ottavia",
      addr: "Via del Portico d'Ottavia",
      hours: "Streets always open; restaurants ~12:00–15:00 lunch",
      coords: [41.8921, 12.4777],
      routeTo: [[41.8986, 12.4699], [41.8980, 12.4722], [41.8969, 12.4722], [41.8957, 12.4722], [41.8950, 12.4738], [41.8944, 12.4752], [41.8938, 12.4760], [41.8929, 12.4768], [41.8921, 12.4777]],
      blurb: "Lunch stop — and the 450-year-old origin story of Rome's secondhand clothes trade.",
      story: [
        "You arrive by walking the full length of Via dei Giubbonari — the jacket-makers' street — which is the perfect overture, because this stop is the historical heart of your whole theme. When Pope Paul IV walled Rome's Jews into the Ghetto in 1555, his edict barred them from nearly every profession. One of the few trades permitted was the strazzaria — dealing in rags and secondhand clothes. For three centuries, Rome's used-clothing trade WAS the Ghetto: Romans of every class bought, sold and pawned their wardrobes here. Every vintage shop you've visited today stands downstream of this street.",
        "The Ghetto's gates fell in 1870, but the community — the oldest Jewish community in Western Europe, here since before Julius Caesar — remained, and this is now one of Rome's warmest quarters. The broken marble colonnade at the street's end is the Portico d'Ottavia, built by Augustus for his sister, later the city's fish market for 600 years. Set into the cobbles you'll see small brass plaques (pietre d'inciampo, 'stumbling stones') with names and dates: memorials to residents deported on 16 October 1943, each placed outside the door they were taken from. Pause for one.",
        "And it's lunchtime. The Roman-Jewish kitchen born inside these walls is one of Italy's great cuisines: carciofo alla giudìa (a whole artichoke deep-fried into a crisp bronze flower — in season from late autumn, i.e. exactly now), fried baccalà, anchovy-and-endive pie. Any of the trattorie along the street will do you proud."
      ],
      tip: "Order the carciofo alla giudìa without fail — late November is the start of artichoke season in Lazio. If queues are long, the fried-food counters sell baccalà fillets and supplì to eat standing, Roman-style."
    },
    {
      id: "tiberisland",
      n: 17, kind: "landmark", emoji: "🌉",
      name: "Tiber Island & Ponte Fabricio",
      addr: "Isola Tiberina, via Ponte Fabricio",
      hours: "Always open",
      coords: [41.8907, 12.4776],
      routeTo: [[41.8921, 12.4777], [41.8915, 12.4781], [41.8911, 12.4779], [41.8907, 12.4776]],
      blurb: "Cross the oldest bridge in Rome onto the island that hid people with a fake disease.",
      story: [
        "The footbridge you're crossing, Ponte Fabricio, was built in 62 BC and has carried traffic ever since — the oldest bridge in Rome still standing in its original form. Lucius Fabricius, the road commissioner who built it, made sure you'd know: his name is carved into it four times. The four-headed stone herms on the parapet gave it its nickname, 'bridge of the four heads'.",
        "Tiber Island has been Rome's island of healing for 2,300 years — legend says a sacred snake from the sanctuary of Asclepius leapt ashore here in 293 BC, choosing the site of the god's temple. A hospital, the Fatebenefratelli, still operates on the island, and in 1943 its doctors pulled off one of the war's great rescues: they admitted Jews fleeing the Ghetto raid you just read about and diagnosed them with 'Syndrome K' — a terrifying, entirely invented contagious disease. German inspectors declined to enter the ward. Dozens survived.",
        "Cross the second bridge (Ponte Cestio) into Trastevere — 'across the Tiber' — the old workers' quarter that is the walk's final act: tighter lanes, ochre walls, washing lines, and two last shopping targets."
      ],
      tip: "Walk down to the island's lower embankment point for the best river view of the day — the Tiber splitting around the travertine 'ship's prow' the Romans carved the island into."
    },
    {
      id: "smtrastevere",
      n: 18, kind: "landmark", emoji: "✨",
      name: "Piazza di Santa Maria in Trastevere",
      addr: "Piazza di Santa Maria in Trastevere",
      hours: "Church ~07:30–21:00; piazza always open",
      coords: [41.8895, 12.4693],
      routeTo: [[41.8907, 12.4776], [41.8901, 12.4768], [41.8897, 12.4757], [41.8896, 12.4736], [41.8895, 12.4716], [41.8895, 12.4703], [41.8895, 12.4693]],
      blurb: "Golden mosaics, the village square of Trastevere, and the home stretch begins.",
      story: [
        "You've walked in along Via della Lungaretta — the old Via Aurelia's urban stretch, now a ribbon of small shops and (on weekends) street vendors with jewellery and secondhand bric-a-brac spread on cloths, in the finest strazzaria tradition.",
        "Santa Maria in Trastevere is plausibly the oldest church in Rome dedicated to Mary — founded in the 200s, rebuilt in the 1140s — and its façade and apse mosaics are the neighbourhood's golden crown. Step inside (free): the 12th- and 13th-century mosaics glow like a jewellery box, the nave columns are recycled from ancient Roman baths, and at dusk the gold catches the last light. Local legend says a fountain of oil sprang from the ground here the night Christ was born; the spot is marked 'fons olei' by the altar steps.",
        "The piazza outside, around what may be Rome's oldest working fountain, is Trastevere's village square — kids, accordion players, students on the fountain steps. The bars here are pricey postcard seats; the real one is 100 m away at stop 19."
      ],
      tip: "Put €1 in the light box to illuminate the apse mosaics — the best euro you'll spend today. In November the church is blissfully quiet on weekday afternoons."
    },
    {
      id: "twice",
      n: 19, kind: "shop", emoji: "👗",
      name: "Twice Vintage Shop",
      addr: "Via di San Francesco a Ripa 105/a",
      hours: "Roughly daily 10:30–20:00 (Sun from ~11:00)",
      coords: [41.8881, 12.4709],
      routeTo: [[41.8895, 12.4693], [41.8890, 12.4698], [41.8886, 12.4703], [41.8881, 12.4709]],
      blurb: "Trastevere's loveliest vintage shop — 1920s to 1990s, famously well-kept.",
      story: [
        "Founded by two sisters, Twice is Trastevere's standard-bearer for vintage done with care: a bright, tidy shop (reviewers' favourite detail: 'no musty smell') whose stock runs all the way from the 1920s to the 1990s — printed dresses, designer handbags, well-worn denim, silk scarves, costume jewellery, with menswear too. Pieces are repaired and cleaned before they hit the rail, and prices stay fair for the quality.",
        "It's the right final boutique of the day: small enough not to exhaust you, good enough that something usually comes home. If a special piece for her is still missing — the 60s cocktail dress, the structured 80s bag — odds are decent it's here.",
        "You're around the corner from Bar San Calisto, Trastevere's gloriously unreformed institution: scuffed tables, one-euro-something espresso, chess players, poets, postmen, the odd celebrity hiding in plain sight. It has resisted every renovation since 1969 and is the most democratic bar in Rome. This is your afternoon-coffee (or first-spritz) stop."
      ],
      tip: "Ask the sisters what's new in — turnover is fast and the best designer bags sell within days. Then do San Calisto: order at the till first, take the receipt to the counter, and drink your €1.20 coffee among the chess players."
    },
    {
      id: "portaportese",
      n: 20, kind: "market", emoji: "🎪",
      name: "Porta Portese Flea Market",
      addr: "Piazza di Porta Portese / Via Ippolito Nievo",
      hours: "SUNDAY ONLY, ~06:00–14:00",
      coords: [41.8838, 12.4757],
      routeTo: [[41.8881, 12.4709], [41.8873, 12.4719], [41.8864, 12.4729], [41.8856, 12.4737], [41.8848, 12.4750], [41.8838, 12.4757]],
      blurb: "Europe's biggest flea market — 1,000 stalls of chaos, treasure and €1 clothing piles.",
      story: [
        "Behind the baroque city gate of Porta Portese (Urban VIII, 1644) lies Rome's Sunday cathedral of secondhand: a kilometre and a half of street swallowed by up to a thousand stalls, from dawn to 14:00, every Sunday since 1945 — it began as the post-war black market, when Romans sold whatever survived the war, and it never stopped. Antiques, bikes, records, telescopes, chandeliers and, crucially for you, mountains of clothing.",
        "Vintage strategy, distilled from people who go weekly: head for the Via Ippolito Nievo end, where the curated vintage and Y2K dealers hang their best on rails (good stock, slightly proud prices) — then work the tables with handwritten 'vintage' signs and the €1–5 piles nearby, which is where the real scores live. Cash only, small notes, haggling expected and friendly: open at half the asking price, settle around 60–70%. Keep bags zipped and in front — pickpockets work the crowds.",
        "If today isn't Sunday, the gate and the empty boulevard are still worth the look from here — and you have a cast-iron reason to come back to Rome. If it IS Sunday, you flipped the loop and started here at 8:30 like a professional, didn't you?"
      ],
      tip: "Best window: 08:30–10:30 (dealers' picks not yet gone, crowds not yet crushing). Bring a tote, €50 in fives and tens, and agree a 'walk away' budget with each other first — the piles are hypnotic."
    },
    {
      id: "pontesisto",
      n: 21, kind: "landmark", emoji: "🌅",
      name: "Ponte Sisto & Via Giulia",
      addr: "Ponte Sisto",
      hours: "Always open",
      coords: [41.8923, 12.4710],
      routeTo: [[41.8838, 12.4757], [41.8848, 12.4760], [41.8868, 12.4752], [41.8888, 12.4738], [41.8905, 12.4722], [41.8918, 12.4712], [41.8923, 12.4710]],
      blurb: "Recross the Tiber on the Renaissance footbridge with the dome of St Peter's in view.",
      story: [
        "The home leg. Ponte Sisto, the graceful pedestrian bridge built for Pope Sixtus IV for the Jubilee of 1475 (the first new Tiber bridge since antiquity), is Rome's golden-hour spot: lean on the parapet and look downriver — that's the dome of St Peter's rising over the plane trees. In late November the sun sets around 16:40, and if your timing is right, this is where to be when it does.",
        "Across the bridge, glance left up Via Giulia: the dead-straight kilometre Bramante laid out for Pope Julius II in the 1500s, Rome's first Renaissance street and for centuries its most aristocratic address. Today it's the antiques dealers' row — the furniture-and-paintings end of the secondhand spectrum you've been walking all day. The ivy-draped arch crossing the street midway was meant to link Palazzo Farnese to the river; Michelangelo had a hand in the plan and it was never finished. Rome's most beautiful unfinished sentence.",
        "From here the route threads back through Campo de' Fiori and Piazza Farnese (peek at the twin fountains made from Caracalla's bath tubs) towards two final treats around the Pantheon."
      ],
      tip: "Golden hour on Ponte Sisto (≈16:10–16:45 in late November) is the photo of the trip. The street musicians here at dusk are usually the city's better ones."
    },
    {
      id: "gammarelli",
      n: 22, kind: "landmark", emoji: "🧦",
      name: "Gammarelli — Tailors to the Popes (& the Pantheon)",
      addr: "Via di Santa Chiara 34",
      hours: "Shopfront viewable anytime; shop Mon–Fri ~9–13 & 14:30–19, Sat morning",
      coords: [41.8973, 12.4771],
      routeTo: [[41.8923, 12.4710], [41.8931, 12.4716], [41.8946, 12.4712], [41.8951, 12.4719], [41.8957, 12.4722], [41.8964, 12.4742], [41.8961, 12.4757], [41.8967, 12.4766], [41.8973, 12.4771]],
      blurb: "The oldest fashion house on the walk: papal tailors since 1798. Red socks, anyone?",
      story: [
        "Behind the Pantheon, an unassuming wooden shopfront announces 'Gammarelli — Sartoria per Ecclesiastici'. This tiny family firm has dressed the popes since 1798 — six generations of Gammarellis cutting white watered-silk cassocks, scarlet mozzettas and the famous red shoes. Before each conclave they traditionally prepare the white cassock in three sizes, displayed in this window, so the new pope can step onto the balcony dressed within the hour, whoever he turns out to be. It is, by any sane definition, the oldest couture house you'll see today — and the ultimate proof that in Rome, fashion and history are the same subject.",
        "Civilians can and do buy here: the famous knee-high socks in cardinal red or bishop purple, hand-finished in fine cotton lisle, make the single best fashion souvenir in Rome (≈€20, ask politely; the shop is small and serious but used to the request).",
        "You're 100 metres from the Pantheon — 1,900 years old, still holding the largest unreinforced concrete dome on earth, its only light a 9-metre open eye to the sky. If you've never stood under the oculus, do it now (last entry ~18:30 most days; small entry fee). Then on to the finale."
      ],
      tip: "The red socks ('calze cardinalizie') come in cotton or wool — get the wool for November. If the shop is closed, the conclave window display is still worth the stop.",
      detour: "The Pantheon, Piazza della Rotonda — 100 m north. The dome that taught every other dome. Entry ticket ~€5."
    },
    {
      id: "trevi",
      n: 23, kind: "finale", emoji: "⛲️",
      name: "Trevi Fountain — La Dolce Vita Finale",
      addr: "Piazza di Trevi",
      hours: "Always open — best after dark",
      coords: [41.9009, 12.4833],
      routeTo: [[41.8973, 12.4771], [41.8986, 12.4769], [41.8990, 12.4781], [41.8994, 12.4799], [41.9000, 12.4815], [41.9005, 12.4824], [41.9009, 12.4833]],
      blurb: "End where Italian fashion, cinema and Rome pour into one basin. Throw the coin.",
      story: [
        "Finish here, after dark, when the travertine glows. The Trevi is where this walk's threads tie together: in 1960 Anita Ekberg waded in wearing that strapless black dress in 'La Dolce Vita' — the scene that sold Italian glamour to the world (Fellini shot it in winter; Mastroianni wore a wetsuit under his clothes, Ekberg toughed it out). The look came from the world of the Sorelle Fontana, the three sisters whose nearby atelier invented Italian high fashion for Ava Gardner, Audrey Hepburn and Hollywood's Roman years — they even created the scandalous 'pretino' (little priest) dress Ekberg wears earlier in the film. And in 'Roman Holiday' (1953), the barber shop where Audrey Hepburn gets her life-changing pixie cut was set right beside the fountain on Via della Stamperia.",
        "The fashion world repaid the debt: Fendi, the Roman house founded as a leather workshop in 1925, funded the fountain's full restoration in 2015 (€2.2 million) and in 2016 staged its 90th-anniversary haute couture show ON the fountain — models walking a transparent runway over the water at sunset. Monuments and maisons keep each other alive here.",
        "Now the ritual, properly: right hand over left shoulder, one coin — returns you to Rome. (Two coins: a new romance; three: marriage. You two are covered, but no harm reinforcing.) The fountain swallows about €1.5 million a year, all collected for the Caritas food programme — your toss feeds someone. From here it's a 15-minute stroll home: up past the Quirinal palace, down Via Nazionale, and back into the lanes of Monti — where a table at Ai Tre Scalini and a glass of Cesanese are waiting. Cin cin: you've earned it twelve kilometres ago."
      ],
      tip: "Come at 21:00+ and the crowds thin dramatically; November nights can leave you nearly alone with the lit fountain by 22:00. The classic first view is approaching from Via delle Muratte — the roar arrives before the sight."
    }
  ]
};

/* Optional return-to-start path drawn after the last stop (closes the loop to Monti). */
const RETURN_LEG = [
  [41.9009, 12.4833], [41.9004, 12.4843], [41.8997, 12.4855],
  [41.8990, 12.4866], [41.8977, 12.4870], [41.8965, 12.4872],
  [41.8970, 12.4886], [41.8976, 12.4896], [41.8966, 12.4900],
  [41.8958, 12.4903], [41.8948, 12.4908], [41.8946, 12.4913]
];

const KIND_META = {
  start:    { label: "Start",     color: "#2a9d8f" },
  shop:     { label: "Vintage shop", color: "#8e2f48" },
  market:   { label: "Market",    color: "#d4772f" },
  landmark: { label: "Landmark",  color: "#33658a" },
  food:     { label: "Food stop", color: "#6a8d3f" },
  finale:   { label: "Finale",    color: "#7b5ea7" }
};
