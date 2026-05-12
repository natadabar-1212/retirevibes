// scouting-data.js — RetireVibes per-destination scouting trip content
// One source of truth for the scouting-trip-detail.html template.
// Each entry: bestMonths (string), avoidMonths (string|null),
// neighborhoods (array of 3 objects with `name` and `desc`).
//
// Porto has its own dedicated page (scouting-trip.html); the entry here
// is a fallback in case someone lands on scouting-trip-detail.html?id=porto.

window.SCOUTING_DATA = {

  // ─── PORTUGAL ────────────────────────────────────────────────────────────
  'porto': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'November–February (cool, gray, frequently wet)',
    neighborhoods: [
      { name: 'Cedofeita & Bonfim', desc: 'Two next-door districts that show what a normal expat\'s daily life looks like — cafés, bookshops, weekday foot traffic, but not the riverfront tourist crush. Walk Rua do Almada and the side streets off Rua de Costa Cabral on a weekday morning. This is the realistic price band for nice apartments outside the bachelorette-party zone.' },
      { name: 'Foz do Douro & Nevogilde', desc: 'Where Porto goes coastal. Quieter, residential, and noticeably more expensive — but with a totally different rhythm: morning beach walks, dinner overlooking the Atlantic, easy bus to the center. Walk Avenida do Brasil. Ask agents about the difference between "Foz Velha" (older charm) and "Foz Nova" (modern apartments).' },
      { name: 'Vila Nova de Gaia (across the river)', desc: 'Technically a separate municipality, but five minutes from central Porto by metro and roughly 25–35% cheaper for comparable space. Walk Avenida da República and the streets behind it. Many long-term expats end up here once they understand the river crossings well enough to stop romanticizing the Ribeira.' }
    ]
  },

  // ─── MEXICO ──────────────────────────────────────────────────────────────
  'merida': {
    bestMonths: 'November–March',
    avoidMonths: 'May–September (extreme heat, humidity, and hurricane season)',
    neighborhoods: [
      { name: 'Centro Histórico', desc: 'The colonial core — pastel facades, Plaza Grande, Sunday street markets. Walk it on a weekday before 10am to feel the rhythm of locals running errands, not Saturday\'s tourist energy. Look at restored colonial homes for sale and rent prices on the side streets, not the main plazas. This is where a lot of expats start and many stay.' },
      { name: 'García Ginerés', desc: 'Tree-lined, mostly local, with mid-century Mexican modernist homes and quiet weekday mornings. About 15 minutes\' walk from Centro. Spend a morning at Parque de las Américas, do a grocery run at a local Chedraui or Soriana, and notice how few tourists you see. This is what daily life looks like outside the postcard.' },
      { name: 'Itzimná & Norte', desc: 'Newer, more suburban, with American-style amenities — bigger supermarkets, dental clinics, English-speaking medical practices. Many North American retirees gravitate here for the practicality. Drive Paseo de Montejo north and the streets off it. Trade-off: less colonial charm, more car dependency, more recognizable retail.' }
    ]
  },

  'oaxaca': {
    bestMonths: 'October–April',
    avoidMonths: 'June–September (heaviest rains; some flooding)',
    neighborhoods: [
      { name: 'Centro Histórico', desc: 'The UNESCO core — Zócalo, Santo Domingo, the Mercado 20 de Noviembre. Walk it on a weekday morning to see locals running errands, not Día de Muertos crowds. Rents on the streets between Reforma and Crespo are higher than they look online; check listings on Inmuebles24 against what an agent quotes in person.' },
      { name: 'Reforma & Jalatlaco', desc: 'Reforma is the upscale residential belt north of Centro — quieter streets, more upper-middle-class Oaxaqueño families, fewer tourists. Jalatlaco is its smaller artsy neighbor with murals and craft cafés. Spend a Saturday morning here doing what you\'d normally do: gym, café, grocery store. Notice the noise level and the dog-walking crowd.' },
      { name: 'San Felipe del Agua', desc: 'Foothills above the city — newer construction, cooler microclimate, suburban feel. This is where many expats and wealthier locals end up for the views and quiet. Trade-off is real: you\'ll need a car for almost everything, and the daily Oaxaca culture is something you visit rather than live in. Drive it before deciding it\'s the right fit.' }
    ]
  },

  'san-miguel': {
    bestMonths: 'October–April',
    avoidMonths: 'June–August (rainy season, daily afternoon storms)',
    neighborhoods: [
      { name: 'Centro & San Antonio', desc: 'Centro is the postcard — cobblestones, La Parroquia, the rooftop bars. San Antonio is the residential extension just south of it, where many expats actually live. Walk both, mid-week, in the morning. The hills are real; if knees are an issue, factor that in honestly. This is also the priciest part of town.' },
      { name: 'Guadiana', desc: 'Flatter, leafier, popular with North American retirees who want walking distance to Centro without the cobblestones underfoot. Quieter, with more 1960s–70s villas and modern remodels. Walk Calle Hidalgo and the surrounding streets on a weekday morning. Rents here have moved up significantly — verify with a local agent, not just listing sites.' },
      { name: 'Los Frailes & Atascadero', desc: 'Newer, more suburban developments on the edges of town — gated communities, larger lots, much lower density. Trade-off: car-dependent, removed from the cultural energy that brought you here in the first place. Drive both before assuming "newer is better." Many people who move here regret giving up walkability after a year.' }
    ]
  },

  'puerto-vallarta': {
    bestMonths: 'November–April',
    avoidMonths: 'August–October (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'Zona Romántica (Old Town)', desc: 'Compact, walkable, with Los Muertos Beach, the Malecón, and a strong long-term expat community — including a sizable LGBTQ+ presence. Walk it weekday mornings to feel the residential rhythm. Real-life trade-offs: cruise-ship surges, beach noise, and a price premium for the walkability. Rents on Olas Altas are a different category from one street back.' },
      { name: 'Versalles', desc: 'Inland, quieter, mostly Mexican families with a growing expat contingent. Tree-lined streets, neighborhood taquerías, and walkable to the Malecón. This is where many people land after their first year in Zona Romántica when they want more local life and lower rent. Spend a Saturday morning at a local mercado and a weekday morning at a café here.' },
      { name: 'Marina & Hotel Zone', desc: 'North of town — high-rise condos, a marina, modern shopping, easy airport access. Predictable, more American in feel, and better for car-dependent lifestyles. Trade-off: less of the Mexican character that drew you here. Drive the Hotel Zone\'s side streets, not just the main strip, to see what residential life actually looks like beyond the towers.' }
    ]
  },

  'playa-del-carmen': {
    bestMonths: 'November–April',
    avoidMonths: 'June–October (hurricane season, sargassum on beaches, peak humidity)',
    neighborhoods: [
      { name: 'Centro / Quinta Avenida corridor', desc: 'The pedestrian heart of town — restaurants, shops, beach access. Tourist energy is real, especially after 5pm. Walk it weekday mornings to see what daily life feels like before the crowds. If your fantasy includes living above 5th Avenue, do it for a week before signing a year lease — the noise wakes most people up.' },
      { name: 'Playacar Phase 2', desc: 'A gated, golf-course-built residential area just south of Centro. Quieter, more suburban, popular with North American retirees who want predictability. Drive it. Walk a weekend morning. The trade-off: you\'re inside a gate and away from the local rhythm that makes Mexico Mexico. Many people don\'t realize that until year two.' },
      { name: 'Colosio & beyond (Calle 38–46 area)', desc: 'Inland from the tourist strip — much more local, much lower rents, far better picture of the city\'s actual demographic. Spend a weekday morning at a neighborhood mercado and a coffee shop here. This is where you\'ll find the kind of community most people came to Mexico to find but never quite reach if they live behind a gate.' }
    ]
  },

  'guadalajara': {
    bestMonths: 'October–May',
    avoidMonths: 'June–September (rainy season, daily storms)',
    neighborhoods: [
      { name: 'Colonia Americana', desc: 'The hippest neighborhood in the country, by some measures — Art Deco apartments, café culture, a young creative crowd. Walk Avenida Chapultepec and the streets off it. Rents have climbed sharply; verify with a local agent rather than relying on six-month-old listings. This is the most "European feeling" pocket of GDL and it commands a premium.' },
      { name: 'Providencia', desc: 'A leafier, upper-middle-class residential district with a strong expat presence. Quieter than Americana, more car-friendly, with good restaurants and a Whole-Foods-like Mexican equivalent (La Gran Plaza area). Walk a weekday morning around Avenida Pablo Neruda. Many long-term retirees end up here after their second year.' },
      { name: 'Tlaquepaque', desc: 'Technically a separate municipality on the south side — colonial center, art galleries, the most "Mexican village" feel within metro Guadalajara. Spend a full weekday morning. Trade-off: the tourist day-trip crowd shows up by lunch on weekends. Talk to people who live here, not vendors, about what evenings are like.' }
    ]
  },

  'ajijic': {
    bestMonths: 'October–May',
    avoidMonths: 'June–September (rainy season, though typically afternoons only)',
    neighborhoods: [
      { name: 'Ajijic Centro & La Floresta', desc: 'The walkable lakeside core — cobblestones, the Plaza, and the long-established expat community. La Floresta is the leafier residential extension just east. Walk Constitución and the side streets between Centro and the lake. Verify pricing in person; the gap between listing-site numbers and what you\'ll actually pay is wider here than most people expect.' },
      { name: 'San Antonio Tlayacapan & Riberas', desc: 'Just east of Ajijic along the carretera — newer construction, slightly lower density, popular with Canadian retirees. Walkable to Walmart, more car-friendly than Centro, but you\'ll lose some of the village texture. Drive the Carretera Chapala-Ajijic at rush hour before deciding. The traffic is the trade-off no one mentions on YouTube tours.' },
      { name: 'Chapala (the town itself)', desc: 'The county seat, larger, more Mexican, less expat-saturated than Ajijic. Spend a weekday morning at the mercado and walk the malecón. Many people who want lakeside life without the bubble end up living here and visiting Ajijic for the social scene. Worth seeing both sides before assuming Ajijic is the only option.' }
    ]
  },

  'los-cabos': {
    bestMonths: 'November–April',
    avoidMonths: 'August–October (hurricane season, peak heat)',
    neighborhoods: [
      { name: 'San José del Cabo', desc: 'The quieter, more colonial of the two Cabo towns — an actual town center, an arts district, a Thursday night Art Walk that reveals a real community. Walk the streets off Plaza Mijares on a weekday morning. This is where most expat retirees who want texture (not just resorts) land. Rents are far lower than Cabo San Lucas for comparable quality.' },
      { name: 'The Corridor (Tourist Corridor)', desc: 'The 20-mile stretch of resorts, gated communities, and golf courses between the two towns. Beautiful, predictable, increasingly expensive, and you will need a car. Drive the Corridor at three different times of day. The places that look idyllic in photos can feel isolating if you don\'t fit into a specific country-club rhythm.' },
      { name: 'Cabo San Lucas (residential side, off the marina)', desc: 'The marina is the postcard — and the part you should walk away from for residential research. Drive into the residential hills above the harbor (Pedregal, El Tezal). Different vibe entirely: quieter, family-oriented, with more long-term residents. The marina is where you visit; the hills are where people actually live.' }
    ]
  },

  'mazatlan': {
    bestMonths: 'November–April',
    avoidMonths: 'July–October (hurricane season, intense humidity)',
    neighborhoods: [
      { name: 'Centro Histórico (Old Town)', desc: 'Restored 19th-century buildings, Plaza Machado, the Pacific malecón. Walkable, full of café-restaurants, and a growing expat community. Walk it weekday mornings to feel the residential rhythm before the evening dinner crowd arrives. Many old buildings have been beautifully renovated; many haven\'t. Tour a few rentals in person before fixating on listing photos.' },
      { name: 'Golden Zone (Zona Dorada)', desc: 'The 1970s-era resort strip — high-rise condos, beach access, a more car-dependent rhythm. Predictable, with American-style retail, but less character than Centro. Drive it and walk a weekday morning along Avenida Camarón Sábalo. This is the safer, more familiar choice for people who don\'t want to be far from a Walmart.' },
      { name: 'Cerritos & Marina', desc: 'The newer northern stretch — modern condo developments, quieter beaches, mostly snowbirds. The infrastructure (medical, retail) is still catching up to the construction. Drive it before assuming "new" equals "better." Some areas feel polished; some feel half-built. Walk what you\'d actually rent and ask neighbors how the dry-season days really feel.' }
    ]
  },

  // ─── PORTUGAL (rest) ─────────────────────────────────────────────────────
  'lisbon': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (peak tourist crowds and heat)',
    neighborhoods: [
      { name: 'Príncipe Real & Estrela', desc: 'The leafy, slightly upscale center — small parks, antique shops, a strong gay community in Príncipe Real. Walk Rua da Escola Politécnica and Rua de Santo Amaro. This is where many long-term expats land. Pricing has moved sharply; verify with an agent rather than relying on listing sites that lag three to six months behind.' },
      { name: 'Campo de Ourique', desc: 'A residential plateau north of the center — quieter, family-oriented, with a daily mercado that locals actually use. Walkable, with trams to anywhere central. Spend a Tuesday morning here. This is what Lisbon looks like for people who live in it rather than visit it. Rents are significantly lower than Príncipe Real for comparable quality.' },
      { name: 'Alvalade', desc: 'Further north, a 1940s–50s planned neighborhood with wide avenues, mid-century modern buildings, and a calm, mostly Portuguese rhythm. Connected by metro to anywhere in the city. Walk it on a weekday morning. This is where many expats end up after their first lease in the city center expires and they realize they want quieter daily life.' }
    ]
  },

  'algarve': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'July–August (peak European holiday crowds, doubled prices)',
    neighborhoods: [
      { name: 'Lagos & Praia da Luz', desc: 'The lively western Algarve hub — historic walls, beach access, a strong British and Northern European expat presence. Walk the old town and the residential streets up the hill behind the marina. Praia da Luz, just west, is quieter and more residential. Drive between the two at lunchtime and at sunset to see how different they feel.' },
      { name: 'Tavira', desc: 'The eastern Algarve\'s gem — Roman bridge, salt pans, a slower rhythm and a more Portuguese demographic than the western beaches. Walkable, with daily markets and a less seasonal pace. Spend a weekday morning at the mercado and a Saturday by the river. This is where many people who don\'t want the resort feel of the west coast end up.' },
      { name: 'Loulé & Alte (interior villages)', desc: 'Inland from the coast — whitewashed villages, almond groves, real Portuguese community life that the beach towns lost decades ago. Drive the area, walk Loulé\'s Saturday market, talk to locals. Trade-off: fewer English-speakers, fewer expats, and you\'ll need a car. But it\'s the most "real Portugal" Algarve experience available.' }
    ]
  },

  'funchal': {
    bestMonths: 'Year-round; sweet spot is March–May or September–November',
    avoidMonths: null,
    neighborhoods: [
      { name: 'Sé / Old Town', desc: 'The historic center — cobblestones, painted doors, the cathedral, and the cable car to Monte. Walk it before 10am to see the local rhythm. The waterfront is touristed; one street back, life is normal. Rents on the side streets are surprisingly reasonable, but verify with a local agent — the listing sites lag the actual market by months.' },
      { name: 'São Martinho', desc: 'Above and west of the center — residential, leafy, with sea views and a slower pace. Walkable to the lido area, easily bused to Sé. This is where many expats end up after a first year in Old Town. Walk a weekday morning along Rua da Casa Branca. Notice how few tourists you see.' },
      { name: 'Garajau & Caniço (just east of the city)', desc: 'Cliffside villages with strong British and German communities, lower rents, and dramatic views. Slightly removed from the action, so a car helps. Drive the coastal road between Funchal and Caniço at three times of day. This is where the math works for retirees who want sea views without paying central Funchal prices.' }
    ]
  },

  // ─── SPAIN ───────────────────────────────────────────────────────────────
  'valencia': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (peak heat and humidity, peak tourism)',
    neighborhoods: [
      { name: 'Ruzafa', desc: 'The reformed-bohemian heart — cafés, design shops, Friday night street life, a young-but-aging-up demographic. Walkable, lively, and pricing has gone up sharply over the past five years. Walk the streets between Calle Cuba and Calle Sueca. Verify rent with an agent because online listings here are usually six months behind.' },
      { name: 'El Carmen & Ciutat Vella', desc: 'The medieval old town — narrow streets, carved stone facades, a tourist-heavy core but residential pockets just back from the main squares. Walk it on a weekday morning before the cruise crowd arrives. Many beautifully renovated apartments hide on quiet calles; ask agents to show you what\'s a block off the tourist path.' },
      { name: 'Cabanyal & Playa de la Malvarrosa', desc: 'The historic fishermen\'s neighborhood by the beach — colorful tiled facades, an ongoing gentrification arc, and a 20-minute tram to the center. Walk it weekday mornings to feel the local rhythm before the weekend beach crowd. This is where many expats land when they want sea air and lower rent than the center.' }
    ]
  },

  'malaga': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (extreme heat and peak crowds)',
    neighborhoods: [
      { name: 'Centro Histórico', desc: 'The walkable cultural core — Picasso Museum, the cathedral, narrow Andalusian streets. Walk it on a weekday morning before the cruise passengers disembark. Rentals here are tight and pricey; verify with an agent. The streets between Calle Larios and the cathedral are touristed, but residential pockets just east (around Mundo Nuevo) feel different.' },
      { name: 'El Limonar & La Caleta', desc: 'East of the center — leafy, mostly residential, with sea views and walkable distance to the beach. Older, more Spanish, less expat-saturated than the city center. Drive Paseo de Sancha and walk the side streets above the boulevard. This is where many long-term residents settle once they understand the city.' },
      { name: 'Pedregalejo & El Palo', desc: 'Old fishing villages absorbed into the city — chiringuitos on the beach, a working-class Spanish rhythm, and rents that drop sharply as you move east from the center. Spend a Sunday afternoon at a chiringuito and a Monday morning at the local mercado. This is the most authentic-feeling residential strip on the city\'s coast.' }
    ]
  },

  'barcelona': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (peak tourist density and heat)',
    neighborhoods: [
      { name: 'Eixample (Esquerra & Dreta)', desc: 'The grid heart of modern Barcelona — wide avenues, modernist buildings, easy metro access. Esquerra is more residential and Spanish; Dreta is closer to the Gaudí tourist axis. Walk both on a weekday morning. Rentals here are tight; verify with a local agent and understand that the city\'s rent-control rules have shifted the market significantly.' },
      { name: 'Gràcia', desc: 'A former village absorbed into the city — small plazas, neighborhood bars, a strong sense of local identity. Walkable, with a more bohemian-progressive demographic. Walk Plaça del Sol on a weeknight and the streets above it on a weekday morning. This is where many long-term residents land for the village-within-the-city feel.' },
      { name: 'Sant Antoni & Poble-sec', desc: 'Just south of Eixample — gentrified-but-still-mixed, with a recently renovated mercado and easy access to Montjuïc. Walk the streets between Avinguda del Paral·lel and Carrer de Sepúlveda. Pricing has climbed but is still below central Eixample. Many design and creative professionals end up here.' }
    ]
  },

  'alicante': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (extreme heat, peak tourism)',
    neighborhoods: [
      { name: 'Casco Antiguo (Santa Cruz)', desc: 'The whitewashed old town climbing toward Santa Bárbara castle — narrow streets, cobblestones, a Mediterranean village feel inside a city. Walk it on a weekday morning to feel the residential rhythm before evening. Steep streets are real; if mobility is a factor, factor it in. Pricing varies widely between renovated and unrenovated units.' },
      { name: 'Centro & Mercado area', desc: 'The flat commercial core — Plaza de los Luceros, Mercado Central, broad avenues. More daily-life-functional than Casco Antiguo: pharmacies, banks, weekday foot traffic. Walk Avenida de la Constitución and the streets off Mercado Central on a weekday. Many expats end up here for the practicality and the metro/tram links.' },
      { name: 'Playa de San Juan', desc: 'The long northern beach corridor — tower-block residential, family-oriented, with a strong Northern European retiree presence. Drive the beach road at two times of day and walk a weekday morning at one of the residential pockets behind the beach. Trade-off: it\'s a tram ride from "real" Alicante daily life.' }
    ]
  },

  'seville': {
    bestMonths: 'March–May or October–November',
    avoidMonths: 'July–August (genuinely brutal heat, often above 40°C)',
    neighborhoods: [
      { name: 'Santa Cruz & El Arenal', desc: 'The whitewashed historic core — orange trees, narrow streets, the cathedral and Alcázar. Tourist-saturated by midday; residential and quiet at 8am and after 11pm. Walk both rhythms before fixating. Rentals here come at a tourist premium; ask agents what\'s available one block off the postcard streets.' },
      { name: 'Triana', desc: 'Across the Guadalquivir — the historic flamenco and gypsy quarter, working-class roots, river views, and a different rhythm than the old town. Walk Calle Betis at sunset and the residential streets behind it on a weekday morning. Many long-term expats end up here for the local life and the lower rents than the Cathedral side.' },
      { name: 'Nervión', desc: 'East of the center — modern Seville, with a major shopping center, the football stadium, and broad residential avenues. Less charming, more functional, easier for car-dependent retirees and far cooler in summer. Walk Calle Luis Montoto on a weekday morning. This is where the daily grind of Sevillano life happens.' }
    ]
  },

  'granada': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (extreme heat) and December–January (genuinely cold at altitude)',
    neighborhoods: [
      { name: 'Albaicín', desc: 'The Moorish hillside facing the Alhambra — narrow whitewashed streets, jasmine, dramatic views. Walk it weekday mornings when locals are doing errands and the tour groups haven\'t arrived. Steep cobblestones are real; if knees or asthma are concerns, factor them in. Rents range widely between renovated carmenes and basic apartments.' },
      { name: 'Realejo', desc: 'The old Jewish quarter, just below the Alhambra — leafier, less touristed than Albaicín, with a strong neighborhood identity. Walk Cuesta del Realejo and the side streets. This is where many long-term expats and academics end up. Closer to Granada\'s daily life than the photogenic Albaicín, with similar architectural texture.' },
      { name: 'Centro & Plaza Nueva area', desc: 'The flat commercial core, walkable to the cathedral, the university, and most daily services. Less photographed but far more practical for everyday life. Walk Calle Reyes Católicos and Calle Recogidas on a weekday. Many people who romance the Albaicín end up here once they realize what living on a hillside actually means day to day.' }
    ]
  },

  // ─── ITALY ───────────────────────────────────────────────────────────────
  'florence': {
    bestMonths: 'April–May or September–October',
    avoidMonths: 'July–August (peak heat, peak tourism)',
    neighborhoods: [
      { name: 'Oltrarno (San Frediano & Santo Spirito)', desc: 'Across the river from the postcard Florence — artisan workshops, neighborhood trattorias, local foot traffic. Walkable, beautiful, and increasingly expat-popular. Walk Via Sant\'Agostino and the streets around Piazza Santo Spirito on a weekday morning. Rents have moved up sharply; verify in person.' },
      { name: 'San Niccolò & Belvedere', desc: 'East of Oltrarno, climbing toward Piazzale Michelangelo — residential, leafy, with stone walls and stunning views. Quieter than central Florence, with a more local rhythm. Walk Via di San Niccolò and the streets above it. This is where many writers and academics end up; pricing reflects that.' },
      { name: 'Campo di Marte', desc: 'East-northeast, beyond the historic walls — broad avenues, mid-century buildings, far less tourism, and prices roughly half of the historic center for comparable space. Walk Viale dei Mille on a weekday morning. Trade-off: you\'re a 25-minute walk or short tram from the photogenic Florence. Practical for full-time living.' }
    ]
  },

  'puglia': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'July–August (peak Italian holiday crowds and extreme heat)',
    neighborhoods: [
      { name: 'Lecce', desc: 'The "Florence of the South" — baroque limestone, university energy, walkable historic center. Walk Via Vittorio Emanuele II and the side streets on a weekday morning. Pricing here is significantly lower than Tuscany or central Italy for comparable architectural beauty, and the expat scene is small but established.' },
      { name: 'Ostuni & the Itria Valley villages (Cisternino, Locorotondo, Martina Franca)', desc: 'White-washed hilltop towns with trulli and olive groves between them. Drive between Ostuni, Cisternino, and Locorotondo over two days; walk each one\'s historic core on a weekday morning. Trade-off: you\'ll need a car for everything, and full-time residents here are mostly elderly Italians.' },
      { name: 'Polignano a Mare & Monopoli (coastal)', desc: 'Cliff-top towns on the Adriatic — postcard-pretty, walkable, with growing expat communities. Walk both on a weekday morning. Rentals are tighter and pricier than the inland Itria Valley villages. Consider how the summer tourist surge changes the rhythm — many people only live here from September to June.' }
    ]
  },

  'sicily': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (peak heat, peak crowds, peak prices)',
    neighborhoods: [
      { name: 'Ortigia (Syracuse)', desc: 'A small island connected to mainland Syracuse — walkable, golden-stone, with a daily mercato and a strong local rhythm. Walk it weekday mornings to feel residential life before the day-trip tour buses. This is many expats\' favorite Sicilian residential pick. Pricing has climbed but remains below Italian mainland equivalents.' },
      { name: 'Catania (centro storico)', desc: 'A bigger, grittier, very alive Baroque city in the shadow of Etna — university energy, cheaper rents than Palermo, real daily Sicilian life. Walk Via Etnea and the streets around the Pescheria mercato. Trade-off: bureaucracy, traffic, and the chaos that comes with a real Italian city. Pricing reflects the rough edges.' },
      { name: 'Cefalù & the Madonie villages', desc: 'Cefalù is the postcard coastal town an hour east of Palermo; the Madonie villages inland are quieter, more local, much cheaper. Drive both areas. Walk Cefalù\'s Corso Ruggero on a weekday morning. Many people imagine living in Cefalù and end up choosing a Madonie village for actual daily life.' }
    ]
  },

  'abruzzo': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'November–March (cold, gray, especially in mountain villages)',
    neighborhoods: [
      { name: 'Sulmona', desc: 'A medieval city in a high mountain valley — walkable historic center, real daily Italian life, no significant expat bubble. Walk Corso Ovidio on a weekday morning and the Wednesday market. Pricing is dramatically lower than Tuscany or coastal Italy for similar architectural texture. The trade-off is real winters and limited English-speaking infrastructure.' },
      { name: 'Lanciano & Vasto (coastal Abruzzo)', desc: 'Lanciano is inland-medieval, Vasto is coastal-Adriatic. Drive between them and walk each one\'s old town on a weekday morning. Both are workaday Italian cities with real residential life. Rents are a fraction of Tuscany\'s for comparable quality. Connectivity (Rome–Pescara train) is good for occasional trips out.' },
      { name: 'Rural villages (Scanno, Pacentro, Castel del Monte)', desc: 'Stone villages in the mountains, many half-emptied as young people moved to cities. Some sell renovated homes for under €100K. Walk one or two on a weekday morning to feel how quiet the Italian countryside actually is. Trade-off: significant isolation, you\'ll need a car, and English is genuinely scarce.' }
    ]
  },

  // ─── GREECE ──────────────────────────────────────────────────────────────
  'athens': {
    bestMonths: 'April–May or September–October',
    avoidMonths: 'July–August (extreme heat, peak tourist density)',
    neighborhoods: [
      { name: 'Koukaki & Pangrati', desc: 'Two of the most expat-friendly neighborhoods just south and east of the Acropolis — walkable, café-rich, with strong daily rhythms. Koukaki is closer to the Acropolis tourist edge; Pangrati feels more residential and Athenian. Walk both on a weekday morning. Many digital nomads and retirees land in one and migrate to the other.' },
      { name: 'Kolonaki & Lycabettus', desc: 'The upscale residential center — designer shops, the embassy district, leafy streets climbing Lycabettus Hill. Quieter, pricier, and more polished than the rest of central Athens. Walk Skoufa Street on a weekday morning and have coffee in Kolonaki Square. This is where the Athenian professional class lives.' },
      { name: 'Glyfada (coastal)', desc: 'A 25-minute tram south of the center — sea views, the Athenian Riviera, a more suburban-American feel. Walkable, with beach access and an established expat community. Drive the coastal road and walk Metaxa Street on a weekday morning. Trade-off: significantly removed from the cultural core that drew you to Athens.' }
    ]
  },

  'crete': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (peak heat and tourist crowds, especially in Chania and Heraklion)',
    neighborhoods: [
      { name: 'Chania (old town and surrounds)', desc: 'A Venetian-era port with a walkable old town and a strong expat community in the surrounding villages (Akrotiri, Kounoupidiana). Walk the old town on a weekday morning and drive into the residential hills above it. Many long-term expats live just outside Chania for the lower rent and quieter pace.' },
      { name: 'Rethymno', desc: 'A smaller, less touristy old town between Chania and Heraklion — Venetian fortress, walkable historic core, university energy. Walk it on a weekday morning. Pricing is lower than Chania for similar architectural texture and a similar expat-friendly rhythm. Better fit for someone who wants the texture without the tourist scale.' },
      { name: 'Apokoronas region (inland villages)', desc: 'The hills southeast of Chania — Vamos, Almyrida, Kalyves. A strong, established Northern European retiree community, lower rents, slower pace. Drive several villages over two days and walk one on a weekday morning. Trade-off: you\'ll need a car for everything, and full Greek immersion is harder when half the village speaks English.' }
    ]
  },

  // ─── CROATIA / MONTENEGRO / SLOVENIA ─────────────────────────────────────
  'split': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'July–August (extreme tourism, with cruise crowds taking over the old town)',
    neighborhoods: [
      { name: 'Diocletian\'s Palace & Varoš', desc: 'The walled core — apartments inside Roman walls, narrow alleys, daily life among ancient stones. Walk it before 9am to see locals, after 9am to see tourists. Apartments inside the walls are charming but tight; just outside, the residential quality improves and rents drop. Pricing has moved up sharply post-COVID.' },
      { name: 'Bačvice & Manuš', desc: 'Just east and northeast of the old town — apartment blocks, family-oriented, with the popular Bačvice beach. Walkable to the center, more practical for daily life, dramatically cheaper. Walk a weekday morning along Šetalište Petra Preradovića. Many long-term residents recommend living here and visiting the old town on foot.' },
      { name: 'Žnjan & Meje (coastal east and west)', desc: 'Newer residential neighborhoods along the coast — sea views, modern buildings, quieter. You\'ll want a car or comfort with city buses. Drive both. The trade-off vs. the old town is real: you gain space and quiet, you lose the walking-old-town daily rhythm. Many people don\'t realize what they\'ll miss until year two.' }
    ]
  },

  'kotor': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'July–August (cruise season turns the old town into a tour-group corridor)',
    neighborhoods: [
      { name: 'Stari Grad (Kotor\'s walled old town)', desc: 'A small medieval walled city on the bay — extraordinarily photogenic, packed during cruise hours, quiet at night and early morning. Walk it before 9am and after 7pm to feel the residential pulse. Apartments inside are limited and pricey; just outside the walls (Dobrota direction), the daily life and rentals get more sustainable.' },
      { name: 'Dobrota', desc: 'The coastal strip immediately north of the walled town — houses with gardens, local cafés, real residential rhythm. Walkable to Kotor proper. This is where many long-term expats end up. Walk the waterfront promenade on a weekday morning. Pricing is a fraction of comparable Italian or Croatian coast.' },
      { name: 'Tivat & Porto Montenegro', desc: 'A 20-minute drive across the bay — a yacht harbor with surrounding residential developments, much more "international Mediterranean luxury" in feel. Drive the loop. Trade-off: less authentic Montenegrin texture, more transactional polish. Some expats prefer it; some find it sterile after a year.' }
    ]
  },

  'ljubljana': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'November–February (cool, gray, often foggy)',
    neighborhoods: [
      { name: 'Center (Center & Stare Mesto)', desc: 'Walkable, riverfront, with the castle on the hill and bridges across the Ljubljanica. Spotless, low-key, more like a small Austrian town than a typical Slavic capital. Walk Stritarjeva Street and the streets behind the cathedral on a weekday morning. Pricing is lower than Western European capitals and noticeably higher than the rest of Slovenia.' },
      { name: 'Trnovo & Krakovo', desc: 'Just south of the center — old market gardens, low-density, with brick streets and a village-within-a-city feel. Walk it on a weekday morning. Many long-term expats end up here for the quiet plus walkability. Rents are below the absolute center but above the outer rings. The compromise that often wins.' },
      { name: 'Bežigrad & Šiška', desc: 'Northern residential districts — apartment blocks, parks, more daily Slovenian life. Connected by bus to anywhere central, much cheaper, less photogenic. Walk a weekday morning around Drama or in a residential street near Park Tivoli. Practical for full-time living, especially if a car or bike is in the picture.' }
    ]
  },

  // ─── FRANCE ──────────────────────────────────────────────────────────────
  'nice': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'July–August (peak Riviera crowds and heat)',
    neighborhoods: [
      { name: 'Vieux Nice', desc: 'The old town — narrow streets, the Cours Saleya market, ochre facades. Walk it before 9am and after 8pm to feel the residential rhythm. Tourist-heavy midday. Apartments inside are charming but cramped, often without elevators. Just outside (toward Place Garibaldi), the daily-life infrastructure improves and rents drop.' },
      { name: 'Cimiez', desc: 'Up the hill north of the center — leafy, residential, with the Matisse Museum and Roman ruins. Quieter, mostly French, with a strong Italian-rooted bourgeois feel. Walk Boulevard de Cimiez on a weekday morning. This is where many long-term expats and academics end up. Trade-off: removed from beach walkability.' },
      { name: 'Le Port & Mont Boron', desc: 'East of Vieux Nice along the coast — the working harbor, then climbing toward residential hills with Mediterranean views. Walk Rue Cassini and the streets above the port. Mont Boron offers panoramic views and a quieter rhythm. Pricing varies wildly between the working-port pockets and the view-heavy hill streets.' }
    ]
  },

  'bordeaux': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'November–February (gray, wet, short days)',
    neighborhoods: [
      { name: 'Centre Historique (Saint-Pierre & Triangle d\'Or)', desc: 'The 18th-century stone heart — Place de la Bourse, Rue Sainte-Catherine, the cathedral. Walk it weekday mornings to feel the residential rhythm before the lunchtime shopping crowd. Pricing inside the historic core has moved up sharply; verify with a local agent. Many beautiful apartments come without elevators.' },
      { name: 'Chartrons', desc: 'The historic wine merchants\' quarter — antique shops, riverside walks, a more bohemian-residential feel than the absolute center. Walk Rue Notre-Dame and the streets toward the river on a weekday morning. This is where many expats and creative professionals settle. Pricing is below the Triangle d\'Or but above the outer arrondissements.' },
      { name: 'Bastide (across the Garonne)', desc: 'The right bank — newer, quieter, more residential, with the Jardin Botanique and easy tram access to the center. Walk Avenue Thiers on a weekday morning. Many long-term residents end up here for the trade-off: significantly lower rent and more space, with a 10-minute tram to the historic core.' }
    ]
  },

  'montpellier': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (extreme heat, peak Mediterranean tourism)',
    neighborhoods: [
      { name: 'Écusson (Old Town)', desc: 'The medieval shield-shaped center — narrow streets, the Place de la Comédie, daily markets. Walk it weekday mornings to feel the residential rhythm. Tourist-heavy midday. Many beautiful but elevator-less apartments hide on the upper floors of medieval buildings. Verify in person; the climb-up matters at 70 in a way it doesn\'t at 40.' },
      { name: 'Antigone', desc: 'A neoclassical 1980s development just east of the old town — wide pedestrian boulevards, modern apartments with elevators, quieter. Walkable to the historic center via tram. Walk Esplanade de l\'Europe on a weekday morning. This is where many practical-minded expats end up after a first year in the Écusson.' },
      { name: 'Beaux-Arts & Aiguelongue', desc: 'North of the center — leafy residential streets, university energy, family-oriented, lower rents than the absolute center. Walk Avenue Saint-Lazare on a weekday morning. Connected by tram to anywhere central. Many academics and long-term residents settle here for the daily quality of life.' }
    ]
  },

  // ─── EASTERN EUROPE ──────────────────────────────────────────────────────
  'prague': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'November–February (gray, cold, short days; tourism still continues year-round)',
    neighborhoods: [
      { name: 'Vinohrady', desc: 'A late-19th-century residential neighborhood east of the center — leafy parks, art nouveau facades, a strong expat community of long-termers. Walk Náměstí Míru and the streets around Riegrovy sady on a weekday morning. This is where most long-term expats land and stay. Pricing is significantly above the outer districts and below the absolute center.' },
      { name: 'Karlín & Holešovice', desc: 'Two formerly industrial districts now in active gentrification — Karlín east of the river, Holešovice north. Walkable, café-rich, mostly Czech with a young creative crowd. Walk Sokolovská on a weekday morning. Pricing has climbed but remains below Vinohrady. Many people end up here for the lower rent and the active arts scene.' },
      { name: 'Žižkov', desc: 'The old working-class neighborhood east of Vinohrady — pubs, the iconic TV tower, an irreverent local rhythm. More mixed, scrappier, cheaper. Walk a weekday morning along Seifertova. Many long-term residents prefer Žižkov\'s authenticity to Vinohrady\'s polish. Trade-off: it\'s rougher around the edges and the apartment quality is more variable.' }
    ]
  },

  'budapest': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'November–February (gray, cold, short days)',
    neighborhoods: [
      { name: 'District V (Belváros & Lipótváros)', desc: 'The Pest-side downtown core — Parliament, the Danube embankment, the basilica. Walkable, central, full of restaurants and metro stops. Tourist-heavy along the river; quieter on the inner streets. Walk Király utca and Nagymező on a weekday morning. Pricing is highest here and most listings show it.' },
      { name: 'District VII (Erzsébetváros)', desc: 'The old Jewish quarter and the heart of the ruin-bar scene — energetic, café-rich, full of long-term expats. Walk Klauzál tér and the streets around it on a weekday morning. Trade-off: nightlife noise on weekends. The apartments inside the inner streets often have stunning courtyards.' },
      { name: 'District XIII & II (Buda side)', desc: 'XIII (Pest side) is more residential and family-oriented; District II (Buda side, hills above the Danube) is leafy, quieter, and far more upscale. Walk Pozsonyi út in XIII on a weekday morning, then drive Rózsadomb in II. Many long-term expats migrate to one of these for the practical rhythm of daily Hungarian life.' }
    ]
  },

  'krakow': {
    bestMonths: 'May–June or September',
    avoidMonths: 'November–February (cold, gray, snowy)',
    neighborhoods: [
      { name: 'Stare Miasto (Old Town)', desc: 'The walled medieval core — Rynek Główny, Wawel Castle, narrow stone streets. Walk it before 9am and after 8pm to see local life rather than tour groups. Apartments inside are charming and pricey; many lack elevators. Just outside the Planty (the green ring around the old town), the daily-life infrastructure shifts and rents drop.' },
      { name: 'Kazimierz', desc: 'The old Jewish quarter just south of the old town — restored synagogues, café culture, a young creative crowd. Walkable to anywhere central. Walk Plac Nowy and Szeroka on a weekday morning. Many long-term expats end up here. Pricing has climbed but is still below the absolute old town.' },
      { name: 'Podgórze (across the Vistula)', desc: 'Krakow\'s right bank, undergoing the same gentrification arc Kazimierz finished a decade ago — quieter, more residential, much cheaper. Walk Rynek Podgórski and the streets around it on a weekday morning. Easy tram access to anywhere central. Many people who don\'t want to live in postcard-Krakow choose here.' }
    ]
  },

  'tbilisi': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'July–August (extreme heat, especially in the city basin)',
    neighborhoods: [
      { name: 'Sololaki & Vera', desc: 'Two of the most central, walkable, expat-popular neighborhoods. Sololaki is full of crumbling-elegant 19th-century courtyards; Vera is leafier and slightly more upscale. Walk both on a weekday morning. Pricing is climbing fast as Georgia\'s digital-nomad scene matures. Verify with an agent rather than online listings.' },
      { name: 'Vake', desc: 'The upscale residential district west of the center — leafy avenues, embassies, the city\'s biggest park (Vake Park). Mostly Georgian, family-oriented, with a strong long-term-expat presence. Walk Chavchavadze Avenue on a weekday morning. Many people end up here after a first year in Sololaki when they want quiet and consistent infrastructure.' },
      { name: 'Saburtalo', desc: 'A major residential district further out — apartment blocks, metro access, real daily Georgian life. Much cheaper than Vake or Sololaki, less photogenic, more practical. Walk a weekday morning along Pekini Street. Trade-off: less of the historic charm, more of the everyday Tbilisi.' }
    ]
  },

  // ─── CYPRUS / MALTA ──────────────────────────────────────────────────────
  'paphos': {
    bestMonths: 'April–May or October–November',
    avoidMonths: 'July–August (peak heat, peak British holiday crowds)',
    neighborhoods: [
      { name: 'Kato Paphos (Lower Paphos)', desc: 'The coastal tourist core — harbor, archaeological park, hotels, restaurants. Walkable, full of Northern European retirees, very seasonal. Walk Poseidonos Avenue weekday mornings to feel the residential pulse before the lunch crowds. Apartments here lean toward holiday-rental quality; verify long-term rentals with a local agent.' },
      { name: 'Pano Paphos (Upper Paphos)', desc: 'The original town, climbing the hill above the coast — more Cypriot, less touristed, with a daily mercato and real local life. Walk Apostolou Pavlou Avenue on a weekday morning. Pricing is significantly below the coast for similar quality. Many long-term expats prefer the daily texture of life up here.' },
      { name: 'Tala, Konia, Tremithousa (inland villages)', desc: 'Stone villages in the hills above Paphos — strong British retiree communities, lower rents, slower pace. Drive several over two days. Walk one on a weekday morning. Trade-off: you\'ll need a car, and many days you\'ll have to drive into Paphos for any errand. Weighs more for some retirees than they expect.' }
    ]
  },

  'valletta': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (extreme heat, cruise crowds, peak humidity)',
    neighborhoods: [
      { name: 'Valletta proper', desc: 'A walled UNESCO city on a peninsula — entirely walkable, golden limestone, daily life in one square kilometer. Walk Republic Street and the side streets on a weekday morning. Tourist-heavy midday. Apartments inside the walls vary wildly in renovation quality; many need significant work. Verify in person and consider stairs (most are walk-ups).' },
      { name: 'Sliema & Gzira', desc: 'Across the harbor from Valletta — modern, walkable, with a strong expat community and seafront promenades. More polished, more international, with high-rise condos and English-friendly daily infrastructure. Walk Tower Road on a weekday morning. Pricing has climbed sharply over the past decade; verify with an agent.' },
      { name: 'Three Cities (Birgu/Vittoriosa, Senglea, Cospicua)', desc: 'Across the Grand Harbour from Valletta — the older Maltese maritime quarters, deeply local, with the Birgu marina increasingly drawing expats. Walk Birgu\'s waterfront and the streets around it on a weekday morning. Pricing is below Valletta and Sliema for comparable historic texture.' }
    ]
  },

  // ─── UK & IRELAND not in dataset; skip ──

  // ─── ASIA ────────────────────────────────────────────────────────────────
  'chiang-mai': {
    bestMonths: 'November–February',
    avoidMonths: 'March–April (burning season smoke) and July–September (heaviest rains)',
    neighborhoods: [
      { name: 'Old City (Phra Singh / Si Phum)', desc: 'The walled square moat-bordered historic core — temples, walkable streets, tourist-heavy at the south gate (Tha Phae) and quieter on the inner residential lanes. Walk it weekday mornings before 9am. Apartments inside vary widely; many tourist-oriented buildings rent better short-term than long-term. Ask agents what locals rent.' },
      { name: 'Nimmanhaemin (Nimman)', desc: 'The hipster-academic neighborhood near Chiang Mai University — café culture, design shops, a young expat and Thai professional crowd. Walkable, condo-heavy. Walk Nimman Soi 1 and Soi 11 on a weekday morning. Pricing is the highest in the city for a single neighborhood; Westerners often start here.' },
      { name: 'Santitham & Chang Phueak', desc: 'Just north of the Old City moat — much more local Thai daily life, lower rents, real markets, and a less expat-saturated rhythm. Walk Santitham Road on a weekday morning. Many long-term expats end up here after a year in Nimman when they want a quieter, more authentic neighborhood for half the rent.' }
    ]
  },

  'hua-hin': {
    bestMonths: 'November–February',
    avoidMonths: 'May–October (rainy season, peak humidity)',
    neighborhoods: [
      { name: 'Hua Hin Town Center & Khao Takiap', desc: 'The walkable beach-town core — night market, beachfront condos, a long-established farang (foreign) community of mostly Northern European retirees. Walk the Soi 88 area and the night market in the evening, then walk the same area at 7am to feel the local rhythm. Pricing is far below Phuket for similar coastal lifestyle.' },
      { name: 'Cha-Am (just north)', desc: 'A quieter, more Thai beach town 25 minutes north — less expat-saturated, more weekend Thai families, and significantly cheaper. Drive between the two over an afternoon and walk Cha-Am\'s beach road on a weekday morning. Many long-term residents prefer Cha-Am\'s authenticity once Hua Hin\'s small-town tourism gets repetitive.' },
      { name: 'Hua Hin Soi 102 & beyond (south)', desc: 'The southern residential strip — newer condos, gated villa developments, more car-dependent, mostly retiree-driven. Drive Phetkasem Road south and stop at three different soi entries to walk in. Trade-off: removed from the walkable beach-town life that drew people to Hua Hin in the first place.' }
    ]
  },

  'phuket': {
    bestMonths: 'November–March',
    avoidMonths: 'May–October (monsoon season, choppy seas, heavy afternoon storms)',
    neighborhoods: [
      { name: 'Rawai & Nai Harn (south)', desc: 'A long-established expat retiree corridor on the quieter southern coast — beach access, walkable village rhythm, real daily community. Walk Rawai\'s sea promenade on a weekday morning. Pricing is significantly below Patong\'s tourist core. Many long-term Phuket retirees end up here.' },
      { name: 'Phuket Town (Old Town)', desc: 'Inland from the beaches — Sino-Portuguese shophouses, real Thai daily life, a slower rhythm than the beach towns, and a small but growing expat community. Walk Thalang Road and Soi Romanee on a weekday morning. Pricing is the lowest in Phuket for comparable infrastructure and a far more authentic daily life.' },
      { name: 'Surin / Bang Tao (west coast)', desc: 'Upscale beach communities on the central west coast — luxury villas, high-end resorts, a wealthier expat demographic. Drive Bang Tao Road and walk Surin Beach on a weekday morning. Trade-off: the coast where prices have climbed most aggressively, and where some areas still see seasonal sargassum-like cleanup issues.' }
    ]
  },

  'kuala-lumpur': {
    bestMonths: 'June–August (driest stretch)',
    avoidMonths: 'October–March (heavier rains and haze risk from regional fires)',
    neighborhoods: [
      { name: 'Bangsar & Bangsar South', desc: 'A long-established expat-friendly neighborhood — leafy streets, café culture, a strong Malaysian-Chinese and international demographic. Walkable in pockets, car-dependent in others. Walk Lorong Maarof on a weekday morning. Pricing is high relative to KL averages but reasonable compared to other Asian capitals.' },
      { name: 'Mont Kiara', desc: 'A high-rise expat-heavy enclave with international schools, gym-heavy condos, and a predictable, polished daily life. More transactional than textural; many people enjoy it for ease of living, others find it sterile. Drive the area and walk a single tower\'s common areas. Pricing is among KL\'s highest.' },
      { name: 'KLCC / Bukit Bintang', desc: 'The city center — towers, malls, the Petronas Towers, dense urban life. Walkable in pockets but most daily life happens via skybridges and Grab. Walk Jalan Raja Chulan and Jalan Bukit Bintang on a weekday morning. Trade-off: more hotel-tourist energy, less neighborhood feel. Some retirees love the metropolitan rhythm.' }
    ]
  },

  'penang': {
    bestMonths: 'December–March',
    avoidMonths: 'August–November (heavy rains, occasional flooding)',
    neighborhoods: [
      { name: 'George Town (UNESCO core)', desc: 'A walled-feeling colonial heart — shophouses, food culture, walkable. Tourist-heavy in the postcard streets, residential one block back. Walk Lebuh Carnarvon and Lebuh Cintra on a weekday morning. Apartments inside the UNESCO core are limited and often need work; just outside, the renovated condos are plentiful.' },
      { name: 'Pulau Tikus & Gurney Drive', desc: 'A 15-minute drive from George Town — café-rich, walkable in stretches, with a strong Malaysian-Chinese family demographic and good daily-life infrastructure. Walk Burma Road on a weekday morning. Many long-term expats end up here for the trade-off of texture-plus-practicality.' },
      { name: 'Tanjung Tokong & Tanjung Bungah (north coast)', desc: 'Coastal residential strips north of George Town — high-rise condos, sea views, family-oriented. Less walkable, more car-dependent. Drive the coast road and walk a single condo complex\'s common areas. Pricing varies sharply based on view and renovation; verify with an agent.' }
    ]
  },

  'da-nang': {
    bestMonths: 'February–May',
    avoidMonths: 'September–November (typhoon season and heavy rains)',
    neighborhoods: [
      { name: 'My Khe Beach corridor (An Thượng / Mỹ An)', desc: 'The expat-favored stretch behind My Khe Beach — café culture, walkable streets, a young digital-nomad and retiree mix. Walk An Thượng 1, 2, and 3 on a weekday morning. Pricing has climbed but is still well below regional capitals. Verify with a local agent because online listings often show short-term Airbnb rates.' },
      { name: 'Hai Chau (city center)', desc: 'Inland from the beach — real daily Vietnamese life, markets, weekday traffic. Less expat-saturated, dramatically cheaper, more textural. Walk a weekday morning around Hàn Market. Many long-term residents prefer this for the daily texture; the trade-off is no beach within walking distance.' },
      { name: 'Son Tra peninsula', desc: 'The dramatic peninsula east of the city — quieter, more residential, with sea views and access to the mountain reserve. Drive the peninsula and walk a residential street on a weekday morning. Trade-off: significantly removed from city daily life, often requiring a scooter or car. Suits people who want quiet over walkability.' }
    ]
  },

  'hoi-an': {
    bestMonths: 'February–May',
    avoidMonths: 'September–December (rainy season with regular flooding in the old town)',
    neighborhoods: [
      { name: 'Ancient Town (UNESCO core)', desc: 'The lantern-lit historic heart — stone bridges, yellow-walled shophouses, daily tourist crowds from 10am. Walk it before 8am to feel residential life. Long-term apartments inside the core are scarce; most are short-term rentals. Just across the river or one block back, daily life and rentals normalize.' },
      { name: 'An Bang Beach', desc: 'A 10-minute scooter ride from the old town — walkable beach village, expat-popular cafés, more digital nomads and retirees. Walk the beach road and the inland streets on a weekday morning. Pricing has climbed but is still very low by Western standards. The trade-off of distance from the old town is real but small.' },
      { name: 'Cẩm Châu & Cẩm Thanh (palm-grove districts)', desc: 'Inland, surrounded by rice paddies and palm groves — quieter, much more local, with a small but established expat presence. Drive both on a weekday morning. Trade-off: a scooter is essentially required, and you\'ll be away from the daily urban rhythm. Many long-term residents prefer this for the village quiet.' }
    ]
  },

  'taipei': {
    bestMonths: 'October–December or March–April',
    avoidMonths: 'July–August (extreme heat and typhoons) and February–March (cold, gray, persistent rain)',
    neighborhoods: [
      { name: 'Da\'an & Xinyi (central)', desc: 'The walkable, café-rich center — Da\'an is older and leafier, Xinyi is the newer financial-shopping district with Taipei 101. Walk Yongkang Street and the Da\'an Forest Park area on a weekday morning. Pricing is highest here. Many long-term expats start in Da\'an and stay for the daily-life convenience.' },
      { name: 'Zhongshan & Datong', desc: 'North of the train station — older, more local, with great food and a slower pace than Da\'an. Walkable, with the Shuanglian and Zhongshan MRT stops connecting everything. Walk Chifeng Street on a weekday morning. Pricing is significantly below Da\'an for comparable square footage. Many long-term expats settle here.' },
      { name: 'Tianmu (north)', desc: 'A longer-established expat enclave at the foot of Yangmingshan — leafier, more suburban, with international schools and a strong American/European retiree presence. Drive the area and walk Zhongshan North Road on a weekday morning. Trade-off: 25-minute commute to central Taipei. Many people love the trade-off; some get bored after a year.' }
    ]
  },

  'fukuoka': {
    bestMonths: 'April–May or October–November',
    avoidMonths: 'July–August (peak heat and humidity, plus typhoon risk)',
    neighborhoods: [
      { name: 'Tenjin & Daimyo', desc: 'The shopping and dining heart of the city — walkable, dense, café-rich. Daimyo, just south of Tenjin, is a more design-forward residential pocket within walking distance of everything. Walk Daimyo\'s side streets on a weekday morning. Pricing is highest in this corridor. Many short-term expats start here.' },
      { name: 'Yakuin & Hirao', desc: 'A quieter residential district just south — leafy, family-oriented, with a strong Japanese long-term-resident demographic and a small but growing expat community. Walk Yakuin Odori on a weekday morning. Pricing is below the Tenjin core for comparable quality. Many long-term residents prefer Yakuin\'s daily rhythm.' },
      { name: 'Momochihama (Momochi seaside)', desc: 'A planned 1980s waterfront district — modern towers, parks, the iconic Fukuoka Tower. Walkable in stretches, with sea air and a calmer family-oriented rhythm. Walk a weekday morning along the Momochi seaside park. Trade-off: less of the central walkable life; suits those who prioritize quiet and views.' }
    ]
  },

  'cebu': {
    bestMonths: 'January–April',
    avoidMonths: 'June–November (typhoon season, heavy rains)',
    neighborhoods: [
      { name: 'Cebu IT Park & Lahug', desc: 'The walkable expat-friendly core — high-rise condos, café culture, a strong digital-nomad and Filipino-professional demographic. Walk the IT Park perimeter and the streets around Ayala Center on a weekday morning. Pricing is highest in Cebu City for this corridor.' },
      { name: 'Banawa & Capitol Site', desc: 'Older residential districts inland — more local Filipino daily life, lower rents, real markets, less polish. Walk a weekday morning around Capitol Site. Many long-term expats end up here once they understand the city, for the trade-off of authentic life and dramatically lower cost.' },
      { name: 'Mactan Island (Lapu-Lapu)', desc: 'Connected by bridges to Cebu — beach resorts, condo developments, the airport, more tourist-resort feel. Drive across the bridge and walk the resort/condo area on a weekday morning. Trade-off: removed from real Cebu City daily life, more transactional. Some retirees love it; others find it hollow.' }
    ]
  },

  'galle': {
    bestMonths: 'December–March',
    avoidMonths: 'May–September (southwest monsoon, heavy rains)',
    neighborhoods: [
      { name: 'Galle Fort (UNESCO core)', desc: 'The Dutch-colonial walled town on a small peninsula — walkable, photogenic, with a strong long-term expat community of writers, artists, and retirees. Walk Pedlar Street and Lighthouse Street on a weekday morning. Apartments inside the walls are limited, with few rentals; most homes are owned. Pricing is highest in Sri Lanka for this corridor.' },
      { name: 'Unawatuna & Talpe (just east of Galle)', desc: 'Beach villages with a long-established Northern European retiree presence — walkable, café-rich, with an easy connection to Galle Fort. Drive between Unawatuna and Talpe and walk each on a weekday morning. Pricing is below the Fort but rising. Many long-term expats prefer the beach proximity.' },
      { name: 'Habaraduwa & Ahangama (further east)', desc: 'A growing surfer-and-creative coast — quieter, more local, much cheaper. Drive the coast road and walk a residential lane on a weekday morning. Trade-off: less daily infrastructure, more car-dependent, fewer English speakers. Many people who started in Galle Fort migrate here for the lower cost and quieter texture.' }
    ]
  },

  'ho-chi-minh-city': {
    bestMonths: 'December–February',
    avoidMonths: 'May–October (rainy season, peak humidity)',
    neighborhoods: [
      { name: 'District 1 (Bến Nghé & Bến Thành)', desc: 'The walkable, café-rich tourist-meets-business core — Notre Dame, Ben Thanh Market, riverfront. Walkable, dense, expensive by Vietnamese standards. Walk Ngo Duc Ke and Le Thanh Ton on a weekday morning. Many short-term expats start here. Pricing is the highest in the city for this corridor.' },
      { name: 'District 3', desc: 'Just north of District 1 — more residential, leafier, with a slower rhythm and many of the city\'s best restaurants. Walkable, dense, quieter than District 1. Walk Tran Quoc Toan on a weekday morning. Many long-term expats end up in District 3 for the trade-off of central life with less tourist energy.' },
      { name: 'Thảo Điền (District 2 / Thủ Đức)', desc: 'A leafy expat enclave across the river — international schools, café culture, a more suburban-American feel. Walkable in pockets, with a strong long-term family-and-retiree expat community. Drive the area and walk Xuan Thuy on a weekday morning. Trade-off: removed from the dense urban Vietnam many people came for.' }
    ]
  },

  'bali': {
    bestMonths: 'May–September (dry season)',
    avoidMonths: 'December–February (wettest months, including ceremony-heavy stretches that close roads)',
    neighborhoods: [
      { name: 'Ubud (central)', desc: 'The cultural-spiritual heart — rice paddies, yoga studios, café culture, a long-established expat community of artists and retirees. Walkable in pockets, with a daily mercato and easy scooter access to villages around it. Walk Hanoman Street and Monkey Forest Road on a weekday morning. Pricing has climbed sharply.' },
      { name: 'Sanur (east coast)', desc: 'A long-established quieter beach town with a strong older-expat demographic — flat, walkable, family-oriented, with a calm beach and a daily promenade. Walk the beach path and Jalan Danau Tamblingan on a weekday morning. Many long-term retirees prefer Sanur\'s calm rhythm over Ubud\'s spiritual-tourism intensity.' },
      { name: 'Canggu & Pererenan (south coast)', desc: 'The hipster-creative coast — surf culture, café-rich, dense scooter traffic, a young digital-nomad demographic that has aged into more retiree-friendly amenities. Walk Batu Bolong and Berawa on a weekday morning. Pricing is highest here for many categories. Trade-off: traffic that has become genuinely difficult.' }
    ]
  },

  // ─── AUSTRALIA / NEW ZEALAND ─────────────────────────────────────────────
  'gold-coast': {
    bestMonths: 'March–May or September–November (Australian autumn and spring)',
    avoidMonths: 'December–February (Australian summer school holidays, peak crowds and humidity)',
    neighborhoods: [
      { name: 'Burleigh Heads', desc: 'A walkable beach village south of Surfers Paradise — surf culture aging into café culture, leafy, family-oriented. Walk James Street and the Burleigh headland on a weekday morning. Pricing has moved up sharply over the last decade as the GC professionalized. Many long-term residents prefer Burleigh to anywhere else on the coast.' },
      { name: 'Broadbeach', desc: 'Just south of Surfers Paradise — high-rise condos, walkable, with a strong retiree demographic and good daily-life infrastructure. Walk Albert Avenue and the beachfront on a weekday morning. Trade-off: more transactional polish, less village character than Burleigh. Many people pick it for the practical walkable density.' },
      { name: 'Coolangatta & Kirra (southern end)', desc: 'The southernmost beach towns, on the NSW border — quieter, less developed, with a more local-Australian rhythm. Walk Marine Parade on a weekday morning. Pricing is below Burleigh and Broadbeach but climbing. Many long-term retirees prefer the quieter southern end of the coast.' }
    ]
  },

  'sunshine-coast': {
    bestMonths: 'March–May or September–November',
    avoidMonths: 'December–February (peak humidity and Australian school holidays)',
    neighborhoods: [
      { name: 'Noosa Heads & Noosaville', desc: 'The walkable, upscale heart — Hastings Street shops and restaurants, the headland walking trails, a leafier residential rhythm. Walk Hastings Street on a weekday morning and Noosa Junction on the same morning to compare. Pricing is the highest on the Sunshine Coast for this corridor and continues to climb.' },
      { name: 'Mooloolaba & Maroochydore', desc: 'The more practical mid-coast — walkable beaches, a working harbor, daily-life infrastructure (medical, retail) that\'s denser than Noosa\'s. Walk the Mooloolaba Esplanade and Ocean Street in Maroochydore on a weekday morning. Pricing is significantly below Noosa for comparable lifestyle.' },
      { name: 'Hinterland villages (Maleny, Montville)', desc: 'Cool-climate hill villages 30 minutes inland — green, leafy, much quieter, with a creative-craft community. Drive several over an afternoon and walk Montville\'s main street on a weekday morning. Trade-off: car-dependent, removed from the coast. Many long-term residents prefer the hinterland\'s calm to the coast\'s rhythm.' }
    ]
  },

  'byron-bay': {
    bestMonths: 'March–May or September–November',
    avoidMonths: 'December–February (school holidays and peak summer crowds)',
    neighborhoods: [
      { name: 'Byron Bay town', desc: 'The walkable beach-village heart — Jonson Street, the lighthouse walk, café culture aging into a wealthier creative-retiree demographic. Walk Jonson and Lawson on a weekday morning. Pricing has gone genuinely extreme over the past decade; verify with a local agent. The town\'s rhythm changes sharply in school holidays.' },
      { name: 'Suffolk Park & Tallow Beach', desc: 'A 5-minute drive south — quieter, more residential, with beach access without the town crowds. Walk a weekday morning along Clifford Street. Pricing is below Byron proper but still high. Many long-term residents prefer this for the lifestyle without the tourist surge.' },
      { name: 'Hinterland villages (Bangalow, Mullumbimby)', desc: 'Inland villages with creative communities, quieter pace, lower rents than the coast. Drive Bangalow and Mullumbimby and walk each main street on a weekday morning. Trade-off: car-dependent, removed from the beach. Many long-term residents prefer the hinterland\'s daily quiet.' }
    ]
  },

  'adelaide': {
    bestMonths: 'March–May or September–November',
    avoidMonths: 'January–February (peak heat, often above 40°C)',
    neighborhoods: [
      { name: 'CBD & North Adelaide', desc: 'A grid-planned center surrounded by a green ring — walkable, full of restaurants, cultural infrastructure, and a leafy old-money residential pocket in North Adelaide. Walk Rundle Street and O\'Connell Street on a weekday morning. Pricing is highest here. Many short-term expats start in the CBD.' },
      { name: 'Glenelg & Brighton (coastal)', desc: 'The beachside western suburbs — walkable, family-oriented, with strong retiree communities and a tram to the city. Walk Jetty Road in Glenelg on a weekday morning. Trade-off: 25 minutes from the CBD. Pricing has climbed but is below CBD for comparable space.' },
      { name: 'Adelaide Hills (Stirling, Hahndorf)', desc: 'Cool-climate villages 25 minutes east of the city — leafy, German-Australian heritage, a quieter rhythm. Drive both on an afternoon and walk Stirling\'s Mount Barker Road on a weekday morning. Trade-off: car-dependent, removed from beach and city. Many long-term residents love the cool-climate seasonality.' }
    ]
  },

  'hobart': {
    bestMonths: 'November–April (Australian summer; though even peak summer is mild)',
    avoidMonths: 'June–August (cold, gray, short days)',
    neighborhoods: [
      { name: 'Battery Point & Sandy Bay', desc: 'The walkable historic core — Battery Point\'s 19th-century cottages, Sandy Bay\'s leafy university-area streets. Walk Hampden Road and the Salamanca waterfront on a weekday morning. Pricing has climbed sharply post-COVID; verify with a local agent. This is where most people who romance Hobart end up.' },
      { name: 'North Hobart (NoHo)', desc: 'A café-rich strip just north of the city — walkable, creative, mostly Tasmanian with a small expat presence. Walk Elizabeth Street on a weekday morning. Pricing is below Battery Point for comparable quality. Many long-term residents prefer NoHo\'s daily food-and-coffee culture.' },
      { name: 'Eastern shore (Bellerive, Lindisfarne)', desc: 'Across the bridge from central Hobart — quieter, family-oriented, with views back across the Derwent to the city. Drive both and walk Cambridge Road on a weekday morning. Trade-off: a bridge crossing for almost everything. Many people choose it for the views and the calmer daily rhythm.' }
    ]
  },

  'cairns': {
    bestMonths: 'May–October (dry season)',
    avoidMonths: 'December–March (wet season with cyclones and extreme humidity)',
    neighborhoods: [
      { name: 'Cairns CBD & Esplanade', desc: 'The walkable waterfront core — restaurants, the Lagoon (since the bay is too jellyfish-prone for swimming), and easy reef-trip access. Walk Shields Street and the Esplanade on a weekday morning. Pricing is high relative to the city\'s small size; verify with a local agent. Tourist energy is real but recedes from the CBD\'s residential streets.' },
      { name: 'Edge Hill & Whitfield', desc: 'A 5-minute drive west of the CBD — leafier, more residential, mostly Australian families with a small expat presence. Walk Collins Avenue on a weekday morning. Pricing is below the CBD for comparable space. Many long-term residents prefer this for the trade-off of quiet plus close proximity.' },
      { name: 'Northern beaches (Palm Cove, Trinity Beach)', desc: 'A 25-minute drive north — beach villages with strong retiree communities, walkable in pockets, with daily-life infrastructure that\'s denser than the small size suggests. Drive between them and walk Palm Cove\'s Williams Esplanade on a weekday morning. Many people choose the beach over the CBD.' }
    ]
  },

  'perth': {
    bestMonths: 'March–May or September–November',
    avoidMonths: 'December–February (extreme heat, often 40°C+ stretches)',
    neighborhoods: [
      { name: 'Subiaco & West Leederville', desc: 'A walkable inner-west neighborhood with leafy streets, a Saturday market, and a young-professional-into-retiree demographic. Walk Rokeby Road on a weekday morning. Pricing is high relative to the rest of the city; this is one of Perth\'s most established residential pockets.' },
      { name: 'Cottesloe & Mosman Park (coastal)', desc: 'Beachside western suburbs — walkable, family-oriented, with a strong retiree community and easy access to the train into the city. Walk Marine Parade on a weekday morning. Pricing is among Perth\'s highest. Trade-off: 20-minute commute to central Perth, which is rarely an issue for retirees.' },
      { name: 'Fremantle', desc: 'A separate port city 30 minutes south of central Perth — bohemian, walkable, full of converted warehouse housing and a different cultural rhythm than Perth proper. Walk South Terrace and the Cappuccino Strip on a weekday morning. Many long-term expats prefer Fremantle for the daily texture and the slightly lower pricing.' }
    ]
  },

  'melbourne': {
    bestMonths: 'March–May or September–November',
    avoidMonths: 'June–August (cold, gray, persistently rainy)',
    neighborhoods: [
      { name: 'Fitzroy & Carlton', desc: 'The bohemian-historic inner north — Brunswick Street, Lygon Street, terrace houses, café culture. Walkable, dense, full of long-term residents. Walk both on a weekday morning. Pricing has moved up sharply over the past decade; verify with a local agent. Many long-term expats end up in this corridor.' },
      { name: 'St Kilda & Elwood (bayside south)', desc: 'A walkable beachside corridor — leafier and more residential than the inner north, with sea air and a calmer rhythm. Walk Acland Street and Ormond Road on a weekday morning. Trade-off: 25-minute tram or train into the CBD. Many long-term retirees prefer the bayside for the daily walks.' },
      { name: 'South Yarra & Toorak', desc: 'The leafy upscale southeast — designer shops, embassies, leafy streets, the Royal Botanic Gardens. Walk Toorak Road on a weekday morning. Pricing is among Melbourne\'s highest. Trade-off: less of the bohemian texture that draws people to Melbourne, more of the international-luxury polish.' }
    ]
  },

  'queenstown-nz': {
    bestMonths: 'March–May (autumn) or November–December (early summer)',
    avoidMonths: 'June–August (peak winter ski crowds and extreme prices) and January (peak summer)',
    neighborhoods: [
      { name: 'Queenstown Central & Frankton', desc: 'The walkable lakeside town — restaurants, lake walks, the gondola. Tourist-saturated in peak months, quieter in shoulder. Walk Beach Street on a weekday morning out of peak season. Pricing has gone genuinely extreme; verify with a local agent. Many short-term residents start here and migrate as they understand costs.' },
      { name: 'Arrowtown', desc: 'A 20-minute drive northeast — gold-rush historic village, walkable, with a leafier and more local rhythm. Walk Buckingham Street on a weekday morning. Pricing has climbed but remains below Queenstown for comparable quality. Many long-term residents prefer Arrowtown\'s historic-village feel and quieter daily life.' },
      { name: 'Kelvin Heights & Jack\'s Point', desc: 'Newer residential developments across the bay — golf-course residential, modern construction, more suburban. Drive both and walk Jack\'s Point\'s village center on a weekday morning. Trade-off: car-dependent, removed from town. Suits people who prioritize space and views over walkability.' }
    ]
  },

  'wanaka': {
    bestMonths: 'March–April (autumn) or November–December (early summer)',
    avoidMonths: 'June–August (winter ski crowds) and December–January (school-holiday peak)',
    neighborhoods: [
      { name: 'Wanaka Town Centre', desc: 'The compact lakeside town — restaurants, lake walks, the iconic #ThatWanakaTree. Walkable, with a small but established community. Walk Ardmore Street and Helwick Street on a weekday morning. Pricing is high for the town size; verify with a local agent. Most short-term residents and visitors stay here.' },
      { name: 'Albert Town & the residential outskirts', desc: 'A 5-minute drive northeast along the river — quieter, mostly residential, with a more local rhythm. Walk a weekday morning through Albert Town\'s village center. Pricing is below central Wanaka for comparable space. Many long-term residents prefer this for the daily calm.' },
      { name: 'Cardrona Valley & Hawea', desc: 'Surrounding rural-residential areas — Cardrona toward the ski field, Hawea around the smaller second lake. Drive both on an afternoon and walk Hawea\'s village center on a weekday morning. Trade-off: car-dependent, removed from town. Suits people who want full quiet over walkability.' }
    ]
  },

  'tauranga': {
    bestMonths: 'November–April',
    avoidMonths: 'June–August (wettest stretch)',
    neighborhoods: [
      { name: 'Mount Maunganui (The Mount)', desc: 'A walkable beach-town peninsula — walking trails on the iconic mountain, café culture, a strong retiree community alongside the holiday surge. Walk Maunganui Road on a weekday morning. Pricing has climbed sharply over the past decade. Many long-term residents prefer the Mount\'s daily walkability over Tauranga\'s suburban grid.' },
      { name: 'Tauranga CBD & Waterfront', desc: 'The more practical commercial center — daily-life infrastructure, walkable in pockets, less holiday-village energy. Walk The Strand on a weekday morning. Pricing is below the Mount for comparable space. Many long-term retirees end up here for the trade-off of practicality.' },
      { name: 'Papamoa & Bay of Plenty coast (south)', desc: 'A long beachside residential strip south of the Mount — newer developments, mostly retirees, more car-dependent. Drive Papamoa Beach Road and walk a weekday morning at the Papamoa village center. Trade-off: less walkability, more space, lower density. Suits people who want a quieter beach village rhythm.' }
    ]
  },

  'nelson-nz': {
    bestMonths: 'November–April',
    avoidMonths: 'June–August (cool and wet)',
    neighborhoods: [
      { name: 'Nelson Central', desc: 'The walkable city heart — Trafalgar Street, the Saturday market, café culture, and a strong creative-and-retiree community. Walk Trafalgar Street and Hardy Street on a weekday morning. Pricing has climbed sharply post-COVID; verify with a local agent. Many long-term residents prefer central Nelson for the daily walking life.' },
      { name: 'Tahunanui & Stoke', desc: 'Coastal and inland residential strips just south of the center — quieter, more family-oriented, with beach access at Tahunanui. Walk Tahunanui Drive on a weekday morning. Pricing is below the center for comparable space. Many long-term retirees end up in Tahunanui for the trade-off of beach and quiet.' },
      { name: 'Mapua & Motueka (west of Nelson)', desc: 'Smaller villages along the coast west of the city — walkable, with strong creative-and-retiree communities. Drive both and walk Mapua\'s wharf area on a weekday morning. Trade-off: 30+ minutes to Nelson for hospital and major shopping. Many long-term residents prefer the village rhythm.' }
    ]
  },

  'christchurch-nz': {
    bestMonths: 'November–April',
    avoidMonths: 'June–August (cool, frequent gray days)',
    neighborhoods: [
      { name: 'Riccarton & Merivale', desc: 'Two of the most walkable inner suburbs — Riccarton west of the central park, Merivale leafier and more upscale north. Walk Papanui Road in Merivale on a weekday morning. Pricing has climbed steadily as the post-earthquake rebuild progressed; verify with a local agent.' },
      { name: 'Sumner & Redcliffs (coastal)', desc: 'Beachside southeastern suburbs — walkable village rhythm, surf culture, with a strong retiree community. Walk Marriner Street in Sumner on a weekday morning. Trade-off: 20-minute drive to the city center. Many long-term residents prefer the seaside daily rhythm.' },
      { name: 'CBD (rebuilt city center)', desc: 'The post-earthquake rebuild — newer construction, walkable in pockets, with a calmer residential rhythm than pre-2011. Walk New Regent Street and the Avon River corridor on a weekday morning. Pricing varies sharply between the rebuilt buildings and the older surviving stock. Some retirees love the new center; others miss the old texture.' }
    ]
  },

  // ─── CARIBBEAN ───────────────────────────────────────────────────────────
  'puerto-rico': {
    bestMonths: 'December–April',
    avoidMonths: 'August–October (peak hurricane season)',
    neighborhoods: [
      { name: 'Old San Juan', desc: 'The walled colonial heart — cobblestones, pastel facades, a tourist-heavy but residential daily rhythm. Walk Calle del Cristo and Calle Norzagaray on a weekday morning. Apartments inside the walls are limited and pricey; verify with a local agent. Many short-term expats start here. Tourist crowds peak with cruise arrivals.' },
      { name: 'Condado & Ocean Park', desc: 'The walkable beachfront strip just east of the airport — high-rise condos, beach access, a strong long-term-expat community. Walk Ashford Avenue and Calle McLeary on a weekday morning. Pricing has climbed sharply. Many retirees end up here for the walkability and beach proximity.' },
      { name: 'Rincón & the west coast', desc: 'A 2-hour drive west — surf culture, lower density, a different rhythm from San Juan. Drive the coast and walk Rincón\'s beach road on a weekday morning. Trade-off: removed from San Juan\'s medical and cultural infrastructure. Many long-term retirees prefer Rincón for the laid-back daily rhythm.' }
    ]
  },

  'roatan': {
    bestMonths: 'December–April',
    avoidMonths: 'September–November (peak hurricane season and heaviest rains)',
    neighborhoods: [
      { name: 'West End', desc: 'A walkable beach village on the western tip — bars, restaurants, dive shops, a strong long-term-expat community. Walk the village on a weekday morning. Pricing has climbed steadily as the cruise port expanded. Many short-term expats start here. The trade-off of cruise crowds is real but receded after the dock area.' },
      { name: 'West Bay', desc: 'A 10-minute drive west of West End — the postcard beach, more resort-feeling, with condo developments and a calmer daily rhythm. Drive between West End and West Bay and walk a weekday morning at West Bay\'s beach road. Trade-off: less village rhythm, more transactional polish.' },
      { name: 'Sandy Bay & French Harbour (east)', desc: 'The more local stretches of the island — Sandy Bay just east of West End, French Harbour further east. Drive both and walk a residential street on a weekday morning. Pricing is significantly below West End for comparable space. Many long-term retirees prefer the more local daily life.' }
    ]
  },

  'ambergris-caye': {
    bestMonths: 'December–April',
    avoidMonths: 'August–October (peak hurricane season)',
    neighborhoods: [
      { name: 'San Pedro Town', desc: 'The compact, walkable heart of the island — sand streets, beachfront, a strong expat community with a deep North American presence. Walk Front Street, Middle Street, and Back Street on a weekday morning. Pricing has climbed sharply. Many long-term residents and visitors anchor in San Pedro.' },
      { name: 'North of San Pedro (along the beach road)', desc: 'A long stretch of beachfront condos and gated communities — quieter than town, more residential, golf-cart-dependent. Drive the road from San Pedro to Cayo Espanto turnoff. Trade-off: removed from town\'s daily life, more isolated. Many people prefer this for the calmer daily rhythm and beach access.' },
      { name: 'South of San Pedro', desc: 'Older residential developments with a more local Belizean-and-expat mix — quieter, with daily-life infrastructure that\'s less polished than the north. Drive south of town and walk a residential lane on a weekday morning. Pricing is below the north strip. Many long-term residents prefer the south for the local-Belizean texture.' }
    ]
  },

  'st-croix': {
    bestMonths: 'December–April',
    avoidMonths: 'August–October (hurricane season)',
    neighborhoods: [
      { name: 'Christiansted', desc: 'The walkable Danish-colonial harbor town — boardwalk restaurants, historic forts, a long-established community. Walk King Street and the boardwalk on a weekday morning. Pricing has climbed steadily; verify with a local agent. Many short-term residents anchor in Christiansted for the walkability.' },
      { name: 'Frederiksted (west end)', desc: 'A quieter, more local-feeling town on the west side — sunset beach access, a Sunday-jazz scene, less tourist energy. Drive between the two towns and walk Frederiksted\'s waterfront on a weekday morning. Pricing is below Christiansted for comparable space. Many long-term residents prefer Frederiksted\'s daily rhythm.' },
      { name: 'East End (Teague Bay, Cane Bay)', desc: 'Residential strips along the east end — beach access, a strong retiree community, more car-dependent. Drive the east end road and walk a residential lane on a weekday morning. Trade-off: 20+ minutes to either town for major shopping. Many long-term residents prefer the daily quiet and the shore.' }
    ]
  },

  'turks-caicos': {
    bestMonths: 'December–April',
    avoidMonths: 'August–October (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'Grace Bay (Providenciales)', desc: 'The walkable resort-and-condo strip behind the famous beach — high-end, polished, transactional. Walk a weekday morning along Grace Bay Road. Pricing has gone genuinely extreme; this is one of the most expensive Caribbean real estate markets. Suits retirees who prioritize predictability and beach over local texture.' },
      { name: 'Leeward (Providenciales)', desc: 'A gated residential peninsula east of Grace Bay — quieter, more residential, with marina access. Drive into Leeward and walk a residential lane on a weekday morning. Pricing is among the highest on the island. Trade-off: removed from any walkable town life — Provo\'s infrastructure is car-dependent.' },
      { name: 'Long Bay & Chalk Sound', desc: 'Quieter residential strips on the south side of Provo — beach access, fewer tourists, a more local rhythm. Drive both and walk a beach lane on a weekday morning. Pricing varies sharply by view. Trade-off: more car-dependent, removed from Grace Bay\'s daily-life infrastructure.' }
    ]
  },

  'grenada': {
    bestMonths: 'December–April',
    avoidMonths: 'July–November (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'St. George\'s & Lance aux Épines', desc: 'St. George\'s is the walkable horseshoe-harbor capital; Lance aux Épines is the long-established expat residential peninsula 10 minutes south. Drive between the two and walk St. George\'s waterfront on a weekday morning. Pricing in Lance aux Épines is among the highest; many retirees end up here.' },
      { name: 'Grand Anse & Morne Rouge', desc: 'The walkable beach corridor just south of St. George\'s — condo developments, restaurants, daily-life infrastructure. Walk Grand Anse Beach and the Morne Rouge area on a weekday morning. Pricing varies sharply by beach access. Many short-term residents start here.' },
      { name: 'Westerhall & St. David\'s (south coast)', desc: 'Quieter residential strips along the south coast — beach access, more local rhythm, lower rents. Drive the south coast road and walk a residential lane on a weekday morning. Trade-off: 20+ minutes to St. George\'s for major shopping. Many long-term residents prefer the daily calm.' }
    ]
  },

  'st-kitts': {
    bestMonths: 'December–April',
    avoidMonths: 'July–November (hurricane season)',
    neighborhoods: [
      { name: 'Basseterre', desc: 'The walkable colonial-harbor capital — Independence Square, the Circus, daily mercado. Walk Fort Street and the harbor on a weekday morning. Pricing has been steadier than other Caribbean islands. Tourist energy is real on cruise days but recedes.' },
      { name: 'Frigate Bay & South Peninsula', desc: 'Resort-and-condo strips on the south end — Frigate Bay\'s twin beaches, the South Peninsula\'s newer developments. Drive both and walk Frigate Bay South on a weekday morning. Pricing varies sharply by view and beach access. Many retirees end up here for the resort infrastructure.' },
      { name: 'Old Road & Sandy Point (west coast)', desc: 'Quieter, more local beach villages along the west coast — fishing villages aging into mixed local-and-expat communities. Drive the west coast and walk Sandy Point on a weekday morning. Trade-off: 30 minutes to Basseterre for major shopping. Many long-term residents prefer the local rhythm.' }
    ]
  },

  'cayman-islands': {
    bestMonths: 'December–April',
    avoidMonths: 'August–October (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'Seven Mile Beach (West Bay Road)', desc: 'The walkable resort-condo strip along the iconic beach — polished, high-end, transactional. Walk West Bay Road on a weekday morning. Pricing is among the highest in the Caribbean. Suits retirees who want predictability, banking infrastructure, and beach over local texture.' },
      { name: 'George Town', desc: 'The walkable banking-and-cruise capital — historic harbor, daily mercado, a more local-and-international-business rhythm. Walk Harbour Drive on a weekday morning. Pricing is high but below Seven Mile. Trade-off: cruise-ship surges in season, more transactional than residential.' },
      { name: 'East End & North Side', desc: 'Quieter residential strips on the eastern half of the island — beach access, fewer tourists, much more local rhythm. Drive the East End and walk a residential lane on a weekday morning. Trade-off: 30+ minutes to George Town for major shopping. Many long-term residents prefer the calm.' }
    ]
  },

  'barbados': {
    bestMonths: 'December–May',
    avoidMonths: 'July–October (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'Holetown & Sandy Lane (West Coast)', desc: 'The walkable upscale corridor along the calm west coast — restaurants, beach clubs, a long-established expat community. Walk First Street in Holetown on a weekday morning. Pricing on the west coast is among the Caribbean\'s highest. Many retirees end up here for the calm-water beaches and the daily-life polish.' },
      { name: 'Hastings & Worthing (South Coast)', desc: 'The more lively south coast — walkable beach strip, restaurants, a younger and more mixed expat-and-local rhythm. Walk Hastings Main Road on a weekday morning. Pricing is below the west coast for comparable beach access. Many long-term residents prefer the south for daily rhythm and value.' },
      { name: 'Bridgetown & Garrison', desc: 'The capital and the old British military district — historic, walkable in pockets, more local. Walk the Garrison Savannah on a weekday morning. Pricing is below both coasts for comparable space. Trade-off: less of the beach-resort feel, more of the daily Bajan life.' }
    ]
  },

  'st-lucia': {
    bestMonths: 'December–April',
    avoidMonths: 'July–November (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'Rodney Bay & Gros Islet (north)', desc: 'The walkable expat-and-tourist corridor in the north — marina, restaurants, the Friday night street party in Gros Islet, daily-life infrastructure. Walk Rodney Bay\'s Reduit Beach Avenue on a weekday morning. Pricing has climbed steadily. Many retirees end up here.' },
      { name: 'Cap Estate (far north)', desc: 'A gated residential peninsula at the island\'s north tip — golf, condos, expat-heavy. Drive into Cap Estate and walk a residential lane on a weekday morning. Pricing is among St. Lucia\'s highest. Trade-off: car-dependent, removed from any walkable town.' },
      { name: 'Soufrière & the Pitons (south)', desc: 'The dramatic south end — twin volcanic peaks, resort-heavy, less expat-residential. Drive the west coast road south and walk Soufrière\'s waterfront on a weekday morning. Trade-off: 90 minutes to Rodney Bay for major shopping. Some retirees love the south\'s drama; few make it their daily life.' }
    ]
  },

  'antigua': {
    bestMonths: 'December–April',
    avoidMonths: 'July–November (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'St. John\'s & Falmouth Harbour', desc: 'St. John\'s is the walkable colonial capital; Falmouth Harbour is the yachting-and-expat corridor 30 minutes south. Drive between the two and walk St. John\'s heritage quarter on a weekday morning. Pricing varies sharply between the two. Many retirees anchor near Falmouth.' },
      { name: 'English Harbour & Nelson\'s Dockyard', desc: 'The historic naval harbor at the south end — Georgian architecture, yachting culture, a strong long-established expat community. Walk Nelson\'s Dockyard on a weekday morning. Pricing has climbed steadily; this is one of Antigua\'s most established expat corridors.' },
      { name: 'Jolly Harbour & Hodges Bay', desc: 'Resort-and-condo strips on the west and northwest coasts — beach access, more transactional, with mostly winter-resident demographics. Drive both and walk Jolly Harbour\'s marina village on a weekday morning. Trade-off: less daily-local life, more polished resort infrastructure.' }
    ]
  },

  'las-terrenas': {
    bestMonths: 'December–April',
    avoidMonths: 'August–October (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'Pueblo de Las Terrenas (Town)', desc: 'The walkable beachfront town — French-Italian-Quebecois expat community, a daily-life rhythm with mercados and bakeries. Walk Calle Libertad and the beach road on a weekday morning. Pricing has climbed but is well below Caribbean averages. Many long-term expats anchor in town.' },
      { name: 'Playa Bonita & Punta Popy', desc: 'Beach corridors east and west of town — quieter, more residential, with a strong international expat community. Drive between the two and walk a beachfront lane on a weekday morning. Pricing varies sharply by beach access. Many retirees prefer the calm daily rhythm.' },
      { name: 'Coson Bay (further west)', desc: 'A quieter, undeveloped beach — gated developments, very low density, much more isolated. Drive west and walk a residential lane on a weekday morning. Trade-off: 15 minutes to town for any errand. Suits people who want full quiet over walkability.' }
    ]
  },

  // ─── COLOMBIA / ECUADOR / OTHERS ─────────────────────────────────────────
  'medellin': {
    bestMonths: 'December–March',
    avoidMonths: 'April–May or October–November (heaviest rain stretches)',
    neighborhoods: [
      { name: 'El Poblado', desc: 'The walkable upscale heart of expat Medellín — Parque Lleras, restaurants, café culture, a long-established international community. Walk Calle 10 and the streets around Provenza on a weekday morning. Pricing has climbed sharply over the past five years; verify with a local agent. Many short-term expats anchor here.' },
      { name: 'Laureles', desc: 'A leafier, more local-Paisa neighborhood west of the river — walkable, family-oriented, with daily mercados and a calmer rhythm. Walk Avenida Nutibara and the Primer Parque on a weekday morning. Pricing is below El Poblado for comparable quality. Many long-term expats end up here.' },
      { name: 'Envigado & Sabaneta', desc: 'Suburbs to the south — quieter, more local, with traditional Paisa culture intact. Walk Envigado\'s Parque Principal on a weekday morning. Pricing is significantly below El Poblado. Trade-off: a metro ride into central Medellín for cultural events. Many long-term residents prefer the daily calm.' }
    ]
  },

  'cartagena': {
    bestMonths: 'December–April',
    avoidMonths: 'May–November (rainy season, peak humidity, hurricane risk peripheral)',
    neighborhoods: [
      { name: 'Centro Histórico (Walled City)', desc: 'The UNESCO walled colonial heart — pastel facades, plazas, daily tourist-and-local rhythm. Walk it before 9am to feel residential life. Apartments inside the walls are limited and pricey; many lack elevators. Pricing has gone genuinely extreme; verify with a local agent.' },
      { name: 'Getsemaní', desc: 'Just outside the walls — formerly working-class, now intensely gentrified, with murals, café culture, and a strong young-international demographic. Walk Calle de la Sierpe on a weekday morning. Pricing has climbed sharply but is still below the walled city. Trade-off: nightlife noise on weekends.' },
      { name: 'Bocagrande & Castillogrande', desc: 'The walkable high-rise peninsula south of the old city — beach access, polished, more international and transactional. Walk Avenida San Martín on a weekday morning. Pricing is high but below the historic core. Trade-off: less of the colonial texture that draws people to Cartagena.' }
    ]
  },

  'cuenca': {
    bestMonths: 'June–September (driest stretch)',
    avoidMonths: 'February–April (heaviest rains)',
    neighborhoods: [
      { name: 'Centro Histórico', desc: 'The UNESCO colonial core — colonial churches, the Tomebamba River walks, daily mercados. Walkable, with a strong long-established expat community. Walk Calle Larga and Gran Colombia on a weekday morning. Apartments inside the historic core vary widely; verify with a local agent.' },
      { name: 'Gringolandia (Avenida Solano corridor)', desc: 'The popular expat strip just south of the river — walkable, café-rich, with a dense North American retiree presence. Walk Avenida Solano on a weekday morning. Pricing is moderate by international standards but at the upper end for Cuenca. Many retirees end up here for the established expat infrastructure.' },
      { name: 'San Joaquín & rural outskirts', desc: 'Smaller villages just outside the city — quieter, much more local, with traditional Ecuadorian rural rhythms. Drive several over an afternoon and walk one\'s village center on a weekday morning. Trade-off: car-dependent, removed from city services. Many long-term retirees prefer the village calm.' }
    ]
  },

  'lake-atitlan': {
    bestMonths: 'November–April',
    avoidMonths: 'May–October (rainy season, frequent landslide risk)',
    neighborhoods: [
      { name: 'Panajachel', desc: 'The walkable lakeside hub — boats to other villages, daily mercado, a long-established expat community of multiple generations. Walk Calle Santander on a weekday morning. Pricing has climbed steadily; verify with a local agent. Many short-term expats anchor here for infrastructure.' },
      { name: 'San Pedro La Laguna & San Marcos', desc: 'Two of the most expat-popular villages on the western shore — San Pedro is the more party-and-language-school oriented; San Marcos is the spiritual-yoga-retreat heart. Take the boat to both and walk each on a weekday morning. Pricing is below Panajachel for comparable space.' },
      { name: 'Santa Cruz & Jaibalito', desc: 'Quieter, more isolated villages on the northern shore — accessible only by boat, with a strong long-term-expat community of writers and artists. Take the boat to both and walk a lakeside lane on a weekday morning. Trade-off: full boat dependency, removed from infrastructure. Many long-term residents prefer the isolation.' }
    ]
  },

  'panama-city': {
    bestMonths: 'December–April',
    avoidMonths: 'May–November (rainy season, daily afternoon storms)',
    neighborhoods: [
      { name: 'Casco Antiguo (Casco Viejo)', desc: 'The restored UNESCO colonial core — walkable, café-rich, with restored 19th-century architecture and a strong creative-and-expat demographic. Walk Calle 8a on a weekday morning. Pricing has climbed sharply; verify with a local agent. Many short-term expats anchor in Casco.' },
      { name: 'El Cangrejo & Bella Vista', desc: 'The walkable mid-rise residential corridors — daily-life infrastructure, banks, restaurants, a more practical long-term-expat rhythm. Walk Calle Eusebio A. Morales on a weekday morning. Pricing is moderate by Panama City standards. Many retirees end up here for the practicality.' },
      { name: 'Punta Pacifica & San Francisco', desc: 'The high-rise oceanfront corridors — modern condos, malls, a polished international-finance feel. Walk Avenida Balboa on a weekday morning. Pricing is among the highest in Panama City. Trade-off: less of the texture that draws people to Latin America, more of the international-luxury polish.' }
    ]
  },

  'boquete': {
    bestMonths: 'December–April',
    avoidMonths: 'May–November (rainy season; afternoons are wet but mornings are usually clear)',
    neighborhoods: [
      { name: 'Bajo Boquete (Town)', desc: 'The walkable town center — restaurants, daily mercado, a long-established North American retiree community. Walk Avenida Central on a weekday morning. Pricing has climbed steadily over the past decade. Many short-term expats anchor in town.' },
      { name: 'Alto Quiel & Volcancito', desc: 'Higher-elevation residential strips above town — cooler, with stunning Volcán Barú views, mostly retiree-oriented gated developments. Drive both over an afternoon and walk a residential lane on a weekday morning. Trade-off: car-dependent, removed from town\'s walking life.' },
      { name: 'Caldera & Palmira', desc: 'Lower-elevation residential strips below town — warmer, more local, with a smaller expat community. Drive both and walk a residential lane on a weekday morning. Pricing is below the higher-elevation strips for comparable space. Many long-term residents prefer the warmer climate and the local rhythm.' }
    ]
  },

  'montevideo': {
    bestMonths: 'October–April (Southern Hemisphere spring through autumn)',
    avoidMonths: 'June–August (cool, gray, persistent dampness)',
    neighborhoods: [
      { name: 'Pocitos & Punta Carretas', desc: 'The walkable coastal residential corridor — Rambla beachfront walks, café culture, a strong long-established middle-and-upper-class Uruguayan demographic. Walk the Rambla and Avenida Brasil on a weekday morning. Pricing is among the city\'s highest. Many short-term expats start here.' },
      { name: 'Ciudad Vieja & Centro', desc: 'The walkable historic core — restored colonial buildings, daily mercato, a more textural and gritty rhythm than Pocitos. Walk Calle Sarandí and Plaza Independencia on a weekday morning. Pricing is below Pocitos for comparable space. Many long-term expats end up here.' },
      { name: 'Carrasco', desc: 'A leafier upscale residential district near the airport — broad avenues, quiet streets, a strong embassy-and-old-money demographic. Walk Avenida Arocena on a weekday morning. Pricing is among Montevideo\'s highest. Trade-off: 25-minute drive to the city center for cultural life.' }
    ]
  },

  'buenos-aires': {
    bestMonths: 'October–November or March–May (Southern Hemisphere spring and autumn)',
    avoidMonths: 'January–February (extreme heat) and June–August (gray and damp)',
    neighborhoods: [
      { name: 'Recoleta & Palermo', desc: 'Two of the most walkable upscale neighborhoods — Recoleta\'s Belle Époque elegance and Palermo\'s café-and-design-district vibrancy. Walk Avenida Quintana in Recoleta and Plaza Serrano in Palermo on a weekday morning. Pricing varies sharply with currency dynamics; verify with a local agent given Argentina\'s volatile peso.' },
      { name: 'San Telmo & Monserrat', desc: 'The walkable historic core — cobblestones, the Sunday Feria de San Telmo, a more bohemian-creative rhythm. Walk Defensa Street and the streets around Plaza Dorrego on a weekday morning. Pricing is below Recoleta and Palermo for comparable space. Many long-term expats prefer the daily texture.' },
      { name: 'Belgrano', desc: 'A leafier, more residential district north of the center — Chinese community, daily mercados, a calmer rhythm. Walk Cabildo Avenue on a weekday morning. Pricing is below Recoleta for comparable quality. Many long-term retirees end up here for the practical daily life.' }
    ]
  },

  'costa-rica': {
    bestMonths: 'December–April (dry season)',
    avoidMonths: 'September–October (peak rainy season)',
    neighborhoods: [
      { name: 'Escazú & Santa Ana', desc: 'The walkable upscale Central Valley suburbs west of San José — café culture, malls, a strong long-established North American retiree community. Walk Escazú\'s Multiplaza area and Santa Ana\'s Plaza Itskatzú on a weekday morning. Pricing has climbed; verify with a local agent. Many retirees anchor here for the infrastructure.' },
      { name: 'Atenas & Grecia (western valley)', desc: 'Smaller mountain towns 45 minutes west of San José — cooler climate, walkable centers, a strong long-term-expat community. Drive between Atenas and Grecia and walk each town\'s plaza on a weekday morning. Pricing is below Escazú for comparable quality. Many long-term retirees prefer the small-town rhythm.' },
      { name: 'San José Centro & Barrio Escalante', desc: 'The walkable historic core of the capital — Barrio Escalante\'s café-and-design-district renaissance, central San José\'s mercados and daily-life infrastructure. Walk Avenida Central and Calle 33 on a weekday morning. Pricing is below Escazú. Trade-off: more urban density, more practical for car-free living.' }
    ]
  },

  // ─── CANADA ─────────────────────────────────────────────────────────────
  'victoria-bc': {
    bestMonths: 'May–September',
    avoidMonths: 'November–February (gray, wet, short days)',
    neighborhoods: [
      { name: 'James Bay & Inner Harbour', desc: 'The walkable historic core — Empress Hotel, the harbor, leafy residential streets. Walk Government Street and Menzies Street on a weekday morning. Pricing has moved up sharply post-COVID. Many short-term residents start here for the walkability.' },
      { name: 'Fairfield & Cook Street Village', desc: 'A walkable residential neighborhood east of the center — leafy streets, daily-life infrastructure, the Cook Street Village café strip. Walk Cook Street and the streets toward Beacon Hill Park on a weekday morning. Pricing is below the Inner Harbour for comparable quality. Many long-term retirees end up here.' },
      { name: 'Oak Bay', desc: 'A leafier upscale residential district east of Fairfield — Oak Bay Village walking strip, sea views, a strong British-Canadian retiree demographic. Walk Oak Bay Avenue on a weekday morning. Pricing is among Victoria\'s highest. Many long-term residents prefer Oak Bay\'s village-within-a-city feel.' }
    ]
  },

  'vancouver': {
    bestMonths: 'May–September',
    avoidMonths: 'November–February (gray, wet, short days)',
    neighborhoods: [
      { name: 'Kitsilano (Kits)', desc: 'The walkable beach-and-café-culture neighborhood west of downtown — leafy, family-oriented, with strong daily-life infrastructure. Walk West 4th Avenue on a weekday morning. Pricing is among Vancouver\'s highest, and Vancouver\'s prices are among the highest in North America. Verify with a local agent.' },
      { name: 'West End & Yaletown', desc: 'The walkable downtown core — high-rise condos, the seawall, café culture. Walk Davie Street in the West End and Mainland Street in Yaletown on a weekday morning. Pricing is among Vancouver\'s highest. Many short-term residents start here for the walkability.' },
      { name: 'North Vancouver & White Rock', desc: 'North Vancouver across the inlet — quieter, family-oriented, with mountain access. White Rock 45 minutes south — small beach town, popular retiree community. Drive both regions and walk Lonsdale Avenue in North Van on a weekday morning. Pricing varies sharply.' }
    ]
  },

  'kelowna': {
    bestMonths: 'May–September',
    avoidMonths: 'November–February (cold, gray, snowy)',
    neighborhoods: [
      { name: 'Downtown Kelowna & Pandosy Village', desc: 'The walkable lakefront core — Bernard Avenue, the boardwalk, café culture. Walk Bernard Avenue and Pandosy on a weekday morning. Pricing has climbed steadily as Kelowna has emerged as a wine-and-tech destination. Many short-term residents anchor downtown.' },
      { name: 'Mission & Lower Mission', desc: 'A leafier residential strip south of downtown — lakefront, Okanagan Mission Beach, family-oriented, with daily-life infrastructure. Walk a weekday morning around Lakeshore Road. Pricing is among Kelowna\'s highest. Many long-term retirees end up here for the calm.' },
      { name: 'West Kelowna & Lake Country', desc: 'Across the lake (West Kelowna) and to the north (Lake Country) — quieter, more vineyard-and-orchard-residential, with a slower rhythm. Drive both regions and walk West Kelowna\'s Boucherie Road on a weekday morning. Trade-off: car-dependent. Many long-term residents prefer the rural-residential mix.' }
    ]
  },

  'quebec-city': {
    bestMonths: 'May–September',
    avoidMonths: 'December–March (genuinely cold, often -20°C and snowy)',
    neighborhoods: [
      { name: 'Vieux-Québec (Old Quebec)', desc: 'The walled UNESCO core — narrow streets, the Château Frontenac, daily life among 17th-century stone. Walk Rue Saint-Jean and Rue du Trésor on a weekday morning. Tourist-saturated midday in summer; quieter in winter. Apartments inside the walls are limited and quirky; verify with a local agent.' },
      { name: 'Saint-Roch & Saint-Sauveur (Lower Town)', desc: 'The walkable creative-and-residential lower town — cafés, design shops, a strong young-and-creative demographic. Walk Rue Saint-Joseph on a weekday morning. Pricing is below Old Quebec for comparable space. Many long-term residents prefer the daily rhythm.' },
      { name: 'Sillery & Montcalm', desc: 'Leafier residential districts west of the center — older homes, parks, a strong upper-middle-class Quebecois demographic. Walk Avenue Cartier on a weekday morning. Pricing varies. Many long-term retirees end up in this corridor for the practical residential life.' }
    ]
  },

  'ottawa': {
    bestMonths: 'May–September',
    avoidMonths: 'December–March (genuinely cold winters)',
    neighborhoods: [
      { name: 'The Glebe & Old Ottawa South', desc: 'Walkable inner-city neighborhoods south of downtown — Bank Street\'s café-and-shop strip, leafy streets, family-and-retiree demographics. Walk Bank Street and Bronson Avenue on a weekday morning. Pricing has climbed steadily; this is one of Ottawa\'s most established residential corridors.' },
      { name: 'ByWard Market & Centretown', desc: 'The walkable downtown core — the historic ByWard Market, the canal, government district. Walk William Street and Sussex Drive on a weekday morning. Pricing varies sharply between the touristic core and the residential pockets. Many short-term residents start here for the walkability.' },
      { name: 'Westboro & Hintonburg', desc: 'A walkable strip west of downtown — Wellington Street West\'s café-and-shop renaissance, family-oriented, with daily-life infrastructure. Walk Wellington West on a weekday morning. Pricing has climbed but remains below the Glebe. Many long-term residents prefer this for the value.' }
    ]
  },

  'halifax': {
    bestMonths: 'June–September',
    avoidMonths: 'November–March (cold, gray, often snowy)',
    neighborhoods: [
      { name: 'Downtown & North End', desc: 'The walkable harbor-facing core — the boardwalk, restaurants, the Public Gardens. North End just inland is the more creative-residential strip. Walk Spring Garden Road and Agricola Street on a weekday morning. Pricing has climbed sharply post-COVID; verify with a local agent.' },
      { name: 'South End & West End', desc: 'Leafier residential districts surrounding the universities — older homes, parks, family-oriented, with a strong long-established demographic. Walk Quinpool Road and South Park Street on a weekday morning. Pricing is among Halifax\'s highest. Many long-term retirees end up here.' },
      { name: 'Dartmouth (across the harbor)', desc: 'The smaller city across the water — connected by two bridges and a ferry, more local-feeling, with a renovated downtown core. Walk Portland Street on a weekday morning. Pricing is below the Halifax peninsula for comparable space. Many long-term residents prefer Dartmouth\'s daily calm.' }
    ]
  },

  'canmore': {
    bestMonths: 'June–September (summer) or January–March (ski season, with bookings essential)',
    avoidMonths: 'October–November and April–May (shoulder seasons; many businesses close)',
    neighborhoods: [
      { name: 'Downtown Canmore', desc: 'The walkable mountain-town heart — Main Street, café culture, mountain views in every direction. Walk Main Street on a weekday morning. Pricing has gone genuinely extreme as Calgary money has flowed into Canmore over the past decade. Many short-term residents anchor downtown.' },
      { name: 'Three Sisters & Cougar Creek', desc: 'Newer residential strips on the south and east — modern construction, larger homes, a strong retiree-and-second-home demographic. Drive Three Sisters Parkway and walk a residential lane on a weekday morning. Trade-off: car-dependent, removed from downtown\'s walking life.' },
      { name: 'Banff & Exshaw (just outside town)', desc: 'Banff is 25 minutes west (but pricing is even higher); Exshaw is the small village just east, much cheaper, more local. Drive both and walk Exshaw\'s village on a weekday morning. Many long-term residents prefer Exshaw\'s rural-residential rhythm and the lower prices.' }
    ]
  },

  'charlottetown': {
    bestMonths: 'June–September',
    avoidMonths: 'December–March (cold, gray, snowy, often genuinely isolated)',
    neighborhoods: [
      { name: 'Downtown Charlottetown', desc: 'The walkable harbor-facing core — the historic Province House, Victoria Row, café culture, daily mercado. Walk Queen Street and University Avenue on a weekday morning. Pricing is moderate by Canadian standards. Many short-term residents anchor downtown.' },
      { name: 'Brighton & Sherwood', desc: 'Leafier residential districts west and north of downtown — older homes, parks, family-oriented. Walk Brighton Road on a weekday morning. Pricing is below downtown for comparable space. Many long-term retirees end up here for the daily calm.' },
      { name: 'Cavendish & North Shore (rural)', desc: 'A 30-minute drive north — the iconic red sand beaches, Anne of Green Gables country, much more rural and seasonal. Drive the North Shore over an afternoon and walk Cavendish\'s main strip on a weekday morning. Trade-off: car-dependent, very seasonal infrastructure. Many people love the calm.' }
    ]
  },

  'niagara-on-the-lake': {
    bestMonths: 'May–October',
    avoidMonths: 'December–February (cold, gray, low visitor density)',
    neighborhoods: [
      { name: 'Old Town', desc: 'The walkable heritage village — Queen Street, the Shaw Festival theatres, leafy residential streets. Walk Queen Street and the streets toward the Niagara River on a weekday morning. Pricing has climbed sharply; this is one of Ontario\'s most expensive small towns. Verify with a local agent.' },
      { name: 'Virgil & St. Davids', desc: 'Smaller villages within the larger Niagara-on-the-Lake municipality — quieter, more local, with vineyard-and-orchard surroundings. Drive both and walk St. Davids\' village center on a weekday morning. Pricing is below Old Town for comparable space. Many long-term residents prefer the rural quiet.' },
      { name: 'Niagara Falls & St. Catharines (nearby cities)', desc: 'For comparison — Niagara Falls is 15 minutes south, far more touristic; St. Catharines is 20 minutes west, a real city with daily-life infrastructure. Drive both and walk St. Catharines\' downtown on a weekday morning. Many people who romance NOTL end up choosing St. Catharines for the practical daily life.' }
    ]
  },

  'nanaimo': {
    bestMonths: 'May–September',
    avoidMonths: 'November–February (gray, wet, short days)',
    neighborhoods: [
      { name: 'Old City & Departure Bay', desc: 'The walkable harbor core — Old City Quarter\'s heritage buildings, the seawall, daily-life infrastructure. Walk Commercial Street on a weekday morning. Pricing has climbed steadily as Vancouver buyers have moved across the strait. Many short-term residents anchor here.' },
      { name: 'North Nanaimo', desc: 'A leafier residential district north of downtown — newer homes, the ferry to Vancouver, a strong retiree demographic. Drive North Nanaimo and walk the streets near Departure Bay on a weekday morning. Pricing is among Nanaimo\'s highest. Many long-term retirees end up here.' },
      { name: 'South Nanaimo & Cedar', desc: 'Older residential and rural-edge strips south of downtown — more local-feeling, lower density, a slower rhythm. Drive both and walk a residential lane on a weekday morning. Pricing is below the north end for comparable space. Many long-term residents prefer the rural-residential mix.' }
    ]
  },

  // ─── REST OF DESTINATIONS ────────────────────────────────────────────────
  'lugano': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'November–February (gray, sometimes foggy, cool)',
    neighborhoods: [
      { name: 'Centro & Paradiso', desc: 'The walkable lakeside core — Piazza della Riforma, Lake Lugano promenade, daily-life infrastructure. Walk Via Nassa on a weekday morning. Pricing is among the highest in Switzerland (which makes it among the highest in the world). Verify with a local agent. Tourist energy is real but recedes.' },
      { name: 'Castagnola & Cassarate', desc: 'Leafy residential strips east of the center along the lake — mountainside homes, sea views, a quieter rhythm. Walk a weekday morning along Via Castagnola. Pricing varies sharply by view. Many long-term retirees end up here for the practical residential life.' },
      { name: 'Italian-side villages (Campione d\'Italia, Porto Ceresio)', desc: 'Italian villages on the same lake — much cheaper, with different bureaucracy. Drive into Italy on a weekday morning. Trade-off: tax and residency complexity if you live in one country and use services across the border. Many long-term residents arbitrage the geography deliberately.' }
    ]
  },

  // ─── REMAINING US DOMESTIC ───────────────────────────────────────────────
  'asheville': {
    bestMonths: 'April–June or September–October',
    avoidMonths: 'July–August (peak tourist crowds and humidity)',
    neighborhoods: [
      { name: 'Downtown & Montford', desc: 'The walkable arts district — galleries, cafés, the Grove Arcade. Montford, just north, is a leafy historic residential neighborhood. Walk Wall Street and Montford Avenue on a weekday morning. Pricing has climbed sharply; verify with a local agent. Many short-term residents anchor downtown.' },
      { name: 'West Asheville (West End / Haywood Road)', desc: 'A walkable creative-residential strip west of the river — Haywood Road\'s café-and-shop renaissance, leafy bungalow streets, a strong creative demographic. Walk Haywood Road on a weekday morning. Pricing has climbed but is below downtown for comparable quality.' },
      { name: 'North Asheville & Beaver Lake', desc: 'Leafier residential districts north of downtown — older homes, the Beaver Lake walking loop, a strong retiree demographic. Walk a weekday morning around the lake. Pricing varies. Many long-term retirees end up in this corridor for the practical residential life with mountain proximity.' }
    ]
  },

  'sarasota': {
    bestMonths: 'November–April',
    avoidMonths: 'June–October (hurricane season, peak humidity, peak storms)',
    neighborhoods: [
      { name: 'Downtown & Burns Court', desc: 'The walkable urban core — Main Street, the bayfront, the historic Burns Court bungalows. Walk Main Street and the bayfront on a weekday morning. Pricing has climbed sharply; verify with a local agent. Many short-term residents anchor downtown for the walkability.' },
      { name: 'Siesta Key & Lido Key', desc: 'The walkable barrier-island beaches — Siesta\'s famous quartz sand, Lido\'s quieter resort feel. Drive both and walk Siesta Village on a weekday morning. Pricing is among Sarasota\'s highest. Trade-off: car-dependent for most errands, removed from downtown\'s daily life.' },
      { name: 'Gulf Gate & The Meadows', desc: 'Leafier inland residential districts — established neighborhoods, daily-life infrastructure, family-and-retiree demographics. Walk Gulf Gate Drive on a weekday morning. Pricing is below the islands and downtown. Many long-term retirees end up here for the practical residential life.' }
    ]
  },

  'santa-fe': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'July–August (peak tourist crowds and monsoon afternoons)',
    neighborhoods: [
      { name: 'Historic Downtown & East Side', desc: 'The walkable adobe core — the Plaza, Canyon Road galleries, leafy residential streets. Walk Canyon Road and Old Santa Fe Trail on a weekday morning. Pricing has been historically high and continues; verify with a local agent. Many short-term residents anchor here for the walkability.' },
      { name: 'Eastside & Museum Hill', desc: 'Leafy residential districts climbing toward Museum Hill — older adobe homes, sweeping views, a strong long-established demographic. Walk a weekday morning along Old Santa Fe Trail. Pricing is among Santa Fe\'s highest. Many long-term retirees end up here.' },
      { name: 'South Side & Eldorado', desc: 'Newer residential districts south and east of the city — more affordable, more car-dependent, with a strong retiree demographic. Drive Eldorado and walk a residential lane on a weekday morning. Pricing is below the historic core. Many long-term residents prefer the value and the space.' }
    ]
  },

  'bend': {
    bestMonths: 'June–September',
    avoidMonths: 'December–February (cold, snowy)',
    neighborhoods: [
      { name: 'Downtown & Old Mill District', desc: 'The walkable Deschutes River core — Wall Street\'s café strip, the Old Mill\'s shopping-and-park development, daily-life infrastructure. Walk Wall Street on a weekday morning. Pricing has climbed sharply post-COVID; verify with a local agent. Many short-term residents anchor here for the walkability.' },
      { name: 'Westside & Awbrey Butte', desc: 'Leafy residential districts west of downtown — older homes, butte views, a strong outdoor-and-retiree demographic. Walk a weekday morning along Mt. Washington Drive. Pricing is among Bend\'s highest. Many long-term retirees end up here for the views and the calm.' },
      { name: 'Northwest Crossing & Tetherow', desc: 'Newer planned-community developments — walkable in pockets, modern construction, a strong outdoor-active demographic. Walk Northwest Crossing\'s village center on a weekday morning. Trade-off: more transactional polish, less of the historic Bend texture. Many people love the new-build infrastructure.' }
    ]
  },

  'greenville-sc': {
    bestMonths: 'April–May or September–October',
    avoidMonths: 'July–August (peak heat and humidity)',
    neighborhoods: [
      { name: 'Downtown Greenville', desc: 'The walkable Main Street core — the Falls Park bridge, café culture, daily-life infrastructure. Walk Main Street and Falls Park on a weekday morning. Pricing has climbed sharply as Greenville has emerged from its post-industrial chrysalis. Many short-term residents anchor downtown.' },
      { name: 'North Main & Augusta Road', desc: 'Leafier historic residential districts — older homes, parks, family-and-retiree demographics. Walk a weekday morning along Augusta Road. Pricing is among Greenville\'s highest. Many long-term retirees end up here for the practical residential life.' },
      { name: 'Travelers Rest & Greer', desc: 'Smaller surrounding towns — Travelers Rest 15 minutes north (the Swamp Rabbit Trail anchor), Greer 20 minutes east (a real small-town downtown). Drive both and walk Travelers Rest\'s Main Street on a weekday morning. Pricing is below central Greenville. Many long-term residents prefer the small-town rhythm.' }
    ]
  },

  'sedona': {
    bestMonths: 'March–May or September–October',
    avoidMonths: 'June–August (peak heat and tourist crowds)',
    neighborhoods: [
      { name: 'Uptown Sedona', desc: 'The walkable tourist-and-residential core — café culture, art galleries, the iconic red rock views. Walk Highway 89A through Uptown on a weekday morning. Tourist energy is real and constant; pricing reflects that. Verify with a local agent for residential rentals beyond the tourist strip.' },
      { name: 'West Sedona', desc: 'A more practical residential district west of Uptown — daily-life infrastructure, grocery stores, a strong retiree demographic. Walk a weekday morning along Coffee Pot Drive. Pricing is below Uptown for comparable space. Many long-term retirees end up here for the practical residential life.' },
      { name: 'Village of Oak Creek (south)', desc: 'A residential village 6 miles south — quieter, more residential, with a strong retiree community. Drive Highway 179 south and walk the village on a weekday morning. Pricing is below central Sedona. Trade-off: 15-minute drive to Uptown for cultural events. Many long-term residents prefer the calm.' }
    ]
  },

  'st-augustine': {
    bestMonths: 'October–April',
    avoidMonths: 'June–September (peak humidity and hurricane risk)',
    neighborhoods: [
      { name: 'Old City (Historic District)', desc: 'The walkable Spanish-colonial core — St. George Street, the Castillo, Aviles Street\'s European feel. Walk Aviles Street on a weekday morning. Tourist-saturated midday; quieter early. Apartments inside the historic core are limited and pricey. Many short-term residents anchor here for the walkability.' },
      { name: 'Anastasia Island & Crescent Beach', desc: 'The barrier-island beaches just east — walkable village rhythm, beach access, a strong retiree demographic. Drive across the Bridge of Lions and walk Anastasia\'s residential lanes on a weekday morning. Pricing varies sharply by beach access. Many long-term retirees end up here.' },
      { name: 'Davis Shores & Lincolnville', desc: 'Inland residential neighborhoods — Davis Shores just south of the historic district, Lincolnville west of the central city. Walk Lincolnville\'s Martin Luther King Avenue on a weekday morning. Pricing is below the historic district for comparable space. Many long-term residents prefer the daily texture.' }
    ]
  },

  'naples-fl': {
    bestMonths: 'November–April',
    avoidMonths: 'June–October (hurricane season, peak humidity)',
    neighborhoods: [
      { name: 'Old Naples & Fifth Avenue South', desc: 'The walkable upscale core — Fifth Avenue\'s shopping-and-dining strip, the historic pier, leafy residential streets. Walk Fifth Avenue South on a weekday morning. Pricing is among the highest in Florida. Many short-term residents anchor here for the walkability.' },
      { name: 'Park Shore & Pelican Bay', desc: 'Beachfront and inland residential strips north of Old Naples — high-rise condos, gated communities, a strong retiree demographic. Drive Park Shore Drive and walk a weekday morning along Vanderbilt Beach. Pricing is among the highest in Florida.' },
      { name: 'Marco Island', desc: 'A barrier-island community 30 minutes south — walkable in pockets, with a strong retiree demographic and beach access. Drive across the bridge and walk Collier Boulevard on a weekday morning. Pricing varies. Many long-term residents prefer Marco\'s slower rhythm to Naples\' polish.' }
    ]
  },

  'boise': {
    bestMonths: 'May–September',
    avoidMonths: 'December–February (cold, snowy, occasional inversion smog)',
    neighborhoods: [
      { name: 'Downtown & North End', desc: 'The walkable historic core — the Capitol, the Boise River Greenbelt, the North End\'s leafy bungalow streets. Walk 13th Street in Hyde Park and the streets between Hill Road and the river on a weekday morning. Pricing has climbed sharply since 2020; verify with a local agent.' },
      { name: 'Northwest & Boise Bench', desc: 'Established residential districts northwest and south of downtown — older homes, family-oriented, daily-life infrastructure. Walk a weekday morning along State Street or Vista Avenue. Pricing is below the North End for comparable quality. Many long-term retirees end up here.' },
      { name: 'Eagle & Meridian (suburbs)', desc: 'Surrounding suburbs — Eagle is more upscale, Meridian is more family-oriented and growing. Drive both and walk Eagle\'s downtown on a weekday morning. Pricing varies. Many people who arrive in Boise end up moving outward as the central city has gotten expensive.' }
    ]
  },

  'fort-collins': {
    bestMonths: 'May–September',
    avoidMonths: 'December–February (cold, snowy)',
    neighborhoods: [
      { name: 'Old Town & River District', desc: 'The walkable historic core — Old Town Square, the Poudre River Trail, café culture. Walk Old Town\'s Linden Street on a weekday morning. Pricing has climbed steadily as Fort Collins has emerged as a Front Range destination. Many short-term residents anchor here for the walkability.' },
      { name: 'Old Town North & Avery Park', desc: 'Leafier residential districts — older homes, parks, family-and-retiree demographics. Walk a weekday morning along Mountain Avenue. Pricing is among Fort Collins\' highest. Many long-term residents prefer this corridor for the practical residential life.' },
      { name: 'South Fort Collins & Loveland', desc: 'Newer residential strips south and Loveland 15 minutes south — more affordable, more car-dependent, with a strong retiree demographic. Drive both and walk Loveland\'s downtown on a weekday morning. Pricing is below central Fort Collins. Many people who arrive end up moving south for value.' }
    ]
  },

  'scottsdale': {
    bestMonths: 'November–April',
    avoidMonths: 'June–August (genuinely extreme heat, often above 110°F)',
    neighborhoods: [
      { name: 'Old Town Scottsdale', desc: 'The walkable arts-and-restaurants core — galleries, restaurants, the historic Western façade. Walk Main Street and Marshall Way on a weekday morning. Pricing has climbed sharply; verify with a local agent. Many short-term residents anchor here for the walkability.' },
      { name: 'McCormick Ranch & Gainey Ranch', desc: 'Leafier planned-community residential districts — golf, lakes, gated developments, a strong retiree demographic. Drive both and walk a residential lane on a weekday morning. Pricing is among Scottsdale\'s highest. Many long-term retirees end up here for the predictable daily life.' },
      { name: 'North Scottsdale & DC Ranch', desc: 'Newer upscale residential developments — large lots, mountain views, more car-dependent. Drive North Scottsdale and walk DC Ranch\'s village center on a weekday morning. Trade-off: more transactional polish, less walkable. Many people choose the trade-off for the views.' }
    ]
  },

  'burlington-vt': {
    bestMonths: 'June–September',
    avoidMonths: 'December–March (cold, snowy, often genuinely brutal)',
    neighborhoods: [
      { name: 'Downtown & Hill Section', desc: 'The walkable Lake Champlain core — Church Street\'s pedestrian mall, the waterfront, the leafy Hill Section\'s Victorian residential streets. Walk Church Street and South Willard Street on a weekday morning. Pricing has climbed sharply; verify with a local agent. Many short-term residents anchor downtown.' },
      { name: 'New North End & Old North End', desc: 'Residential districts north of downtown — Old North End is denser and more historic, New North End is leafier and more suburban. Walk North Avenue and a weekday morning in the Old North End. Pricing varies. Many long-term residents prefer the practical residential life.' },
      { name: 'South End & Shelburne', desc: 'The arts-and-design South End just south of downtown, and the small village of Shelburne 10 minutes further south. Walk Pine Street and Shelburne\'s village center on a weekday morning. Pricing in the South End has climbed; Shelburne remains more affordable. Many long-term retirees end up in Shelburne.' }
    ]
  },

  'fredericksburg-tx': {
    bestMonths: 'October–April',
    avoidMonths: 'June–September (peak heat and humidity)',
    neighborhoods: [
      { name: 'Main Street & Historic District', desc: 'The walkable German-heritage core — Main Street\'s shop-and-restaurant strip, the National Museum of the Pacific War, leafy residential streets. Walk Main Street on a weekday morning. Tourist-heavy on weekends; quieter weekdays. Pricing has climbed sharply with wine-country tourism.' },
      { name: 'North & East Fredericksburg', desc: 'Leafier residential districts surrounding the historic core — older homes, family-oriented, with a strong retiree-and-second-home demographic. Walk a weekday morning along North Adams Street. Pricing varies. Many long-term residents prefer this for the practical residential life.' },
      { name: 'Wine Road 290 & surrounding villages (Stonewall, Comfort)', desc: 'The wine-country corridor along Highway 290, plus smaller villages — Stonewall (Lyndon B. Johnson territory) and Comfort 15 minutes south. Drive the corridor and walk Comfort\'s historic district on a weekday morning. Many long-term retirees prefer the smaller villages.' }
    ]
  },

  'chattanooga': {
    bestMonths: 'April–May or September–October',
    avoidMonths: 'July–August (peak heat and humidity)',
    neighborhoods: [
      { name: 'Downtown & North Shore', desc: 'The walkable Tennessee River core — the riverfront, Walnut Street Bridge, the North Shore\'s café-and-shop renaissance. Walk Walnut Street and Frazier Avenue on a weekday morning. Pricing has climbed sharply as Chattanooga has emerged as a Tennessee destination. Many short-term residents anchor downtown.' },
      { name: 'St. Elmo & Lookout Mountain', desc: 'A leafy residential district at the foot of Lookout Mountain — historic homes, the incline railway, a strong retiree demographic. Walk a weekday morning along Tennessee Avenue. Pricing varies sharply by view. Many long-term retirees end up in this corridor for the mountain proximity.' },
      { name: 'Highland Park & Southside', desc: 'Mixed historic-and-creative residential districts south of downtown — older bungalows, café culture, a younger creative demographic alongside retirees. Walk Main Street and Market Street on a weekday morning. Pricing is below the North Shore for comparable quality.' }
    ]
  },

  'tucson': {
    bestMonths: 'October–April',
    avoidMonths: 'June–August (peak heat, often 100°F+ and the monsoon afternoon storms)',
    neighborhoods: [
      { name: 'Downtown & Sam Hughes', desc: 'The walkable historic core — Congress Street\'s café-and-music strip, the El Presidio district\'s adobes, and the leafy Sam Hughes residential neighborhood east of the university. Walk Congress Street on a weekday morning. Pricing varies. Many short-term residents anchor in this corridor.' },
      { name: 'Foothills & Catalina', desc: 'Residential districts climbing into the Catalina Foothills — desert landscaping, mountain views, a strong retiree demographic. Drive River Road and walk a residential lane on a weekday morning. Pricing is among Tucson\'s highest. Many long-term retirees end up in this corridor for the views.' },
      { name: 'Oro Valley & Tubac', desc: 'Northern suburb (Oro Valley) and southern artists\' village (Tubac, 30 minutes south). Drive both and walk Tubac\'s historic district on a weekday morning. Trade-off: car-dependent. Many long-term residents prefer Tubac\'s small-town rhythm to central Tucson\'s suburban grid.' }
    ]
  },

  'palm-springs': {
    bestMonths: 'November–April',
    avoidMonths: 'June–September (peak heat, often 110°F+ stretches)',
    neighborhoods: [
      { name: 'Downtown Palm Springs & Movie Colony', desc: 'The walkable mid-century-modern core — Palm Canyon Drive\'s shop-and-restaurant strip, leafy residential streets full of restored 1950s and \'60s homes. Walk Palm Canyon Drive on a weekday morning. Pricing has climbed sharply; verify with a local agent. Many short-term residents anchor here.' },
      { name: 'Deepwell, Vista Las Palmas, & Twin Palms', desc: 'Historic mid-century-modern residential pockets — restored Steel Houses, Butterfly Houses, and other architectural landmarks. Drive each and walk a weekday morning. Pricing is among Palm Springs\' highest. Many design-loving retirees end up in these pockets.' },
      { name: 'Cathedral City & Palm Desert', desc: 'Surrounding desert cities — Cathedral City just east, Palm Desert 15 minutes further. Drive El Paseo in Palm Desert and walk on a weekday morning. Pricing is below central Palm Springs. Many long-term residents prefer the value and the daily-life infrastructure.' }
    ]
  },

  'prescott-az': {
    bestMonths: 'May–June or September–October',
    avoidMonths: 'December–February (cold, occasionally snowy at altitude)',
    neighborhoods: [
      { name: 'Downtown & Whiskey Row', desc: 'The walkable Western-historic core — Whiskey Row\'s saloons, the courthouse square, leafy residential streets. Walk Cortez Street on a weekday morning. Pricing has climbed steadily; verify with a local agent. Many short-term residents anchor downtown for the walkability.' },
      { name: 'Country Club & Ponderosa Park', desc: 'Leafier residential districts — older homes, golf course access, a strong retiree demographic. Walk a weekday morning along Country Club Drive. Pricing is among Prescott\'s highest. Many long-term retirees end up in this corridor.' },
      { name: 'Prescott Valley & Chino Valley', desc: 'Surrounding towns — Prescott Valley 10 minutes east (more suburban), Chino Valley 15 minutes north (more rural). Drive both and walk Prescott Valley\'s downtown on a weekday morning. Pricing is below central Prescott. Many long-term residents prefer the value.' }
    ]
  },

  'wilmington-nc': {
    bestMonths: 'April–May or September–October',
    avoidMonths: 'July–August (peak humidity) and September (hurricane risk)',
    neighborhoods: [
      { name: 'Downtown & Riverwalk', desc: 'The walkable Cape Fear River core — the historic district, the riverwalk, café culture, daily-life infrastructure. Walk Front Street on a weekday morning. Pricing has climbed sharply; verify with a local agent. Many short-term residents anchor downtown for the walkability.' },
      { name: 'Wrightsville Beach & Carolina Beach', desc: 'Two barrier-island beach towns just east — Wrightsville is the more upscale, Carolina Beach is more family-and-retiree. Drive across the bridges and walk each town on a weekday morning. Pricing varies sharply between the two. Many long-term retirees end up at the beaches.' },
      { name: 'Forest Hills & Landfall', desc: 'Leafier inland residential districts — older homes (Forest Hills), gated newer development (Landfall). Walk a weekday morning around Forest Hills Drive. Pricing varies. Many long-term residents prefer this corridor for the practical residential life with beach access.' }
    ]
  },

  'st-george-ut': {
    bestMonths: 'March–May or September–November',
    avoidMonths: 'June–August (peak heat, often 100°F+ stretches)',
    neighborhoods: [
      { name: 'Downtown & Bloomington', desc: 'The walkable historic core — the Mormon temple, café culture, leafy residential streets. Bloomington is the established southern suburb with golf and a strong retiree demographic. Walk Main Street on a weekday morning. Pricing has climbed sharply; verify with a local agent.' },
      { name: 'Snow Canyon & Entrada', desc: 'Newer residential developments north and west — red rock views, gated communities, a strong retiree demographic. Drive Snow Canyon Parkway and walk Entrada\'s village center on a weekday morning. Pricing is among St. George\'s highest.' },
      { name: 'Washington & Hurricane', desc: 'Surrounding smaller towns — Washington just east, Hurricane 20 minutes northeast. Drive both and walk Hurricane\'s Main Street on a weekday morning. Pricing is below central St. George. Many long-term residents prefer the value and the small-town rhythm.' }
    ]
  },

  'charleston-sc': {
    bestMonths: 'March–May or October–November',
    avoidMonths: 'July–August (peak heat and humidity) and August–September (peak hurricane risk)',
    neighborhoods: [
      { name: 'South of Broad & Harleston Village', desc: 'The walkable historic peninsula\'s most iconic residential core — antebellum architecture, leafy streets, the Battery. Walk Tradd Street and South Battery on a weekday morning. Pricing has gone genuinely extreme over the past decade; verify with a local agent.' },
      { name: 'Mount Pleasant & Sullivan\'s Island', desc: 'Across the Cooper River — Mount Pleasant\'s upscale residential neighborhoods, Sullivan\'s Island\'s walkable beach community. Drive across the bridge and walk Sullivan\'s Island\'s Middle Street on a weekday morning. Pricing is among the region\'s highest.' },
      { name: 'West Ashley & James Island', desc: 'Suburban areas just west and south — more affordable, family-oriented, with daily-life infrastructure. Drive both and walk a weekday morning along West Ashley\'s Avondale strip. Pricing is below the peninsula. Many long-term residents prefer the value and the practical residential life.' }
    ]
  },

  // ─── AFRICA ──────────────────────────────────────────────────────────────
  'marrakech': {
    bestMonths: 'March–May or September–November',
    avoidMonths: 'June–August (extreme heat, often above 40°C/104°F)',
    neighborhoods: [
      { name: 'Medina (Old City)', desc: 'The walled UNESCO core — Jemaa el-Fna, the souks, riads on hidden derbs. Walk it before 10am and after the dinner-hour to feel the residential rhythm. Riads (traditional courtyard homes) are the iconic accommodation; many for sale need significant work. Verify legal residency and ownership rules with a local lawyer before any commitment.' },
      { name: 'Gueliz & Hivernage', desc: 'The walkable French-colonial new city — broad avenues, café culture, a more international and practical daily-life infrastructure. Walk Avenue Mohammed V on a weekday morning. Pricing is moderate by international standards. Many long-term expats end up here for the trade-off of practicality and proximity to the Medina.' },
      { name: 'Palmeraie & surrounding villas', desc: 'A leafier, lower-density area outside the city — palm groves, gated villa developments, a more international-residential rhythm. Drive the Palmeraie and walk a residential lane on a weekday morning. Trade-off: car-dependent, removed from the cultural core that drew you to Marrakech in the first place.' }
    ]
  },

  'cape-town': {
    bestMonths: 'October–April (Southern Hemisphere spring through autumn)',
    avoidMonths: 'June–August (cool, wet, gray; not unbearable, but Cape Town\'s appeal dims)',
    neighborhoods: [
      { name: 'City Bowl (Gardens, Tamboerskloof, Oranjezicht)', desc: 'The walkable historic core under Table Mountain — leafy streets, café culture, a strong long-established expat community. Walk Kloof Street and the streets toward the Company\'s Garden on a weekday morning. Pricing has climbed steadily; verify with a local agent. Many short-term expats anchor here.' },
      { name: 'Sea Point & Green Point', desc: 'Walkable Atlantic-coast residential strips just west of the city — promenade walks, café culture, a strong international demographic. Walk the Sea Point Promenade and Main Road on a weekday morning. Pricing varies sharply by view. Many long-term residents prefer the daily ocean rhythm.' },
      { name: 'Constantia & Hout Bay', desc: 'Leafier suburban residential districts — Constantia\'s wine estates and large lots, Hout Bay\'s harbor village. Drive both and walk Hout Bay\'s harbor on a weekday morning. Trade-off: car-dependent, removed from City Bowl\'s walkable life. Many long-term retirees end up here for the space and the calm.' }
    ]
  },

  'accra': {
    bestMonths: 'November–February (dry season, Harmattan winds keep humidity down)',
    avoidMonths: 'May–July (peak rainy season) and August (occasional flooding)',
    neighborhoods: [
      { name: 'Cantonments & Airport Residential', desc: 'The leafy diplomatic-and-expat residential heart — embassies, large compounds, a strong long-established international community. Drive Cantonments and walk a residential lane on a weekday morning. Pricing is high relative to Accra averages but moderate internationally. Many short-term expats anchor here for security and infrastructure.' },
      { name: 'Osu & Labone', desc: 'The walkable mixed commercial-and-residential corridors — Osu\'s Oxford Street is the city\'s café-and-restaurant strip, Labone is the leafier residential extension. Walk Oxford Street and the Labone side streets on a weekday morning. Pricing is below Cantonments for comparable quality. Many long-term residents prefer the daily texture.' },
      { name: 'East Legon & Trasacco Valley', desc: 'Newer, more suburban residential developments north and east — gated communities, larger lots, more car-dependent. Drive East Legon and walk a residential lane on a weekday morning. Trade-off: removed from central Accra\'s daily life, more transactional polish. Many long-term residents end up here for the security and the space.' }
    ]
  }

};
