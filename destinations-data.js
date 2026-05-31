// destinations-data.js — RetireVibes destination profiles + quiz scoring weights
// Each destination defines how well it matches each quiz answer.
// Scoring weights are used by results-matcher.js.
//
// Quiz answer index map (mirrors questions.js order):
//   Q[0] weather:    0=warm/sunny  1=four seasons  2=mild/temperate  3=cool/crisp
//   Q[1] setting:    0=beach  1=lake/river  2=mountains  3=city  4=small town  5=countryside
//   Q[2] geography:  0=US  1=Canada  2=Mexico/LatAm  3=Caribbean  4=Europe  5=Australia/NZ  6=Asia  7=Africa
//   Q[3] pace:       0=full-throttle  1=mixed  2=slow/easy  3=social-first
//   Q[4] lifestyle:  0=simple/comfortable  1=comfortable+extras  2=upscale  3=luxury
//   Q[5] housing:    0=own  1=rent  2=resort/community  3=non-traditional  4=not sure
//   Q[6] priorities: 0=adventure  1=community  2=peace/simplicity  3=purpose  4=health  5=culture/arts

const DESTINATIONS = [

  // ─── EXISTING FULL PAGES ───────────────────────────────────────────

  {
    id: 'porto',
    name: 'Porto',
    country: 'Portugal',
    region: 'Northern Portugal',
    flag: '🇵🇹',
    photo: 'images/porto.jpg',
    photoCap: 'Ribeira waterfront, Porto',
    tagline: 'Cobblestone streets, world-class wine, and a slower kind of European cool.',
    tags: ['Coastal city', 'Mild year-round', 'Walkable', 'Vibrant culture', 'Excellent healthcare', 'Strong expat scene'],
    costPerMonth: { 0: 1600, 1: 2200, 2: 3200, 3: 4800 },
    housing: { buy: '~$280K', buyDesc: '2BR in a beachside residential neighborhood', rent: '~$1,100/mo' },
    compare: "That's about <strong>half</strong> what the same lifestyle costs in coastal California — with a walkable old city, a 90-minute drive to wine country, and one of Europe's best public health systems.",
    page: 'destination-detail.html?id=porto',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    weatherMatch: [2, 1],        // mild (primary), some four-seasons feel
    settingMatch: [0, 3, 4],     // coastal, city, small-town neighborhoods
    paceMatch: [1, 2, 3],        // creative, relaxed, social
    geographyOptions: [4],        // Europe
    lifestyleMatch: [1, 2],      // comfortable, upscale
    priorityMatch: [1, 2, 5],    // community, peace, culture/arts
    // Scouting
    scoutingBestMonths: 'September–May',
    scoutingAvoidMonths: 'July–August (peak tourist crowds, higher prices)',
    neighborhoods: [
      { name: 'Ribeira', desc: "The historic waterfront — start here. Walk it at different times of day to understand the city\'s rhythm. The energy shifts dramatically from morning to evening." },
      { name: 'Foz do Douro', desc: "Where many long-term expats actually live — quieter residential streets by the Atlantic, walkable to services, and a more accurate picture of what a Porto life costs day to day." },
      { name: 'Bonfim & Campanhã', desc: "Up-and-coming, more affordable, genuinely local. Spend a morning here to understand Porto beyond the postcard — and to see where prices are still realistic." },
    ],
  },

  {
    id: 'merida',
    name: 'Mérida',
    country: 'Mexico',
    region: 'Yucatán, Mexico',
    flag: '🇲🇽',
    photo: 'images/merida.jpg',
    photoCap: 'Plaza Grande, Mérida',
    tagline: 'Colonial pastels, mariachi nights, and a cost of living that almost feels like a typo.',
    tags: ['Colonial city', 'Warm year-round', 'Walkable', 'Vibrant culture', 'Growing expat scene', 'Low cost of living'],
    costPerMonth: { 0: 1200, 1: 1800, 2: 2400, 3: 3600 },
    housing: { buy: '~$220K', buyDesc: '2BR colonial home', rent: '~$900/mo' },
    compare: "One of the most affordable retirement cities in the Americas — a fully staffed upscale life here costs less than a modest apartment in many US cities.",
    page: 'destination-detail.html?id=merida',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    weatherMatch: [0],            // warm/sunny year-round
    settingMatch: [3, 4],         // city, small-town feel
    paceMatch: [2, 3, 1],         // relaxed, social, creative
    geographyOptions: [2],         // Mexico & Latin America
    lifestyleMatch: [0, 1],       // simple, comfortable
    priorityMatch: [1, 2, 5],     // community, peace, culture/arts
    // Scouting
    scoutingBestMonths: 'November–March',
    scoutingAvoidMonths: 'May–September (extreme heat and humidity — 100°F+ is common)',
    neighborhoods: [
      { name: 'Centro Histórico', desc: "The beating heart of the city — start here. Walk the streets around Plaza Grande at different times of day. The early morning and evening paseo tell you everything about the social life here." },
      { name: 'Colonia México & García Ginerés', desc: "Where many expats actually settle — quieter residential streets, walkable to restaurants and services, with a comfortable mix of locals and international residents. Spend a morning here." },
      { name: 'Paseo de Montejo', desc: "Mérida\'s elegant boulevard — restored mansions, good restaurants, the Anthropology Museum. Helps you understand the city\'s scale and how locals use its public spaces." },
    ],
  },

  {
    id: 'asheville',
    name: 'Asheville',
    country: 'United States',
    region: 'North Carolina, USA',
    flag: '🇺🇸',
    photo: 'images/asheville.jpg',
    photoCap: 'Blue Ridge Parkway, Asheville',
    tagline: 'Mountain air, indie bookshops, and a creative scene that somehow makes four seasons feel like a feature.',
    tags: ['Mountain town', 'Four seasons', 'Arts & culture', 'Walkable downtown', 'Farm-to-table food', 'English-speaking'],
    costPerMonth: { 0: 2200, 1: 3000, 2: 3800, 3: 5500 },
    housing: { buy: '~$420K', buyDesc: '2BR home in West Asheville', rent: '~$1,800/mo' },
    compare: "A creative, mountain lifestyle without leaving the US — costs run higher than international options but you keep your routines, your doctors, and your Medicare.",
    page: 'destination-detail.html?id=asheville',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    weatherMatch: [1, 2],         // four seasons (primary), mild
    settingMatch: [2, 4, 3],      // mountains, small town, city
    paceMatch: [0, 1, 2],         // active, creative, relaxed
    geographyOptions: [0],         // United States
    lifestyleMatch: [1, 2],       // comfortable, upscale
    priorityMatch: [0, 5, 4, 1],  // adventure, culture/arts, health, community
    // Scouting
    scoutingBestMonths: 'April–June or September–October',
    scoutingAvoidMonths: 'January–February (ice and snow — mountain roads can be difficult)',
    neighborhoods: [
      { name: 'West Asheville', desc: "The most livable residential neighborhood — eclectic, walkable, more affordable than downtown. Great coffee shops, local restaurants, and a genuine community feel. Spend a weekday morning here." },
      { name: 'Downtown & River Arts District', desc: "Start here to understand the creative energy the city is known for. The River Arts District shows you how an old industrial strip becomes a cultural anchor. Walk it on a weekend afternoon." },
      { name: 'North Asheville & Kenilworth', desc: "Quieter, more established residential areas popular with retirees. Good for understanding what daily life looks like outside the tourist core — and what housing stock and prices actually look like." },
    ],
  },

  {
    id: 'sarasota',
    name: 'Sarasota',
    country: 'United States',
    region: 'Florida, USA',
    flag: '🇺🇸',
    photo: 'images/sarasota.jpg',
    photoCap: 'Lido Key, Sarasota',
    tagline: 'Powdery sand, year-round sunshine, and a cultural scene that punches well above its weight.',
    tags: ['Coastal', 'Warm year-round', 'Walkable downtown', 'Arts & culture', 'English-speaking', 'Active lifestyle'],
    costPerMonth: { 0: 2800, 1: 3600, 2: 4800, 3: 7000 },
    housing: { buy: '~$520K', buyDesc: '2BR condo near the beach', rent: '~$3,200/mo' },
    compare: "The familiar choice — Florida sunshine without leaving the country. Costs run higher than international options, but you keep everything domestic life offers.",
    page: 'destination-detail.html?id=sarasota',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    weatherMatch: [0],            // warm/sunny
    settingMatch: [0, 3],         // beach, city
    paceMatch: [0, 3, 1],         // active, social, creative
    geographyOptions: [0],         // United States
    lifestyleMatch: [1, 2, 3],    // comfortable, upscale, luxury
    priorityMatch: [4, 1, 0],     // health, community, adventure
    // Scouting
    scoutingBestMonths: 'October–April',
    scoutingAvoidMonths: 'June–September (intense heat, humidity, and hurricane season)',
    neighborhoods: [
      { name: 'Downtown & Rosemary District', desc: "The cultural and social core — walkable, restaurant-dense, close to the art museum and theaters. Gives you the best sense of day-to-day city life and whether you\'d actually use it." },
      { name: 'Southside Village & Gulf Gate', desc: "Where long-term residents actually live — more affordable than the barrier islands, walkable to dining, and a realistic baseline for what housing costs look like without the beach premium." },
      { name: 'Siesta Key & Lido Key', desc: "The barrier island neighborhoods. Walk the strips, see the condos, talk to residents. More expensive, but critical to visit if beach access is a priority — see what you\'re actually paying for." },
    ],
  },

  // ─── COMING-SOON PAGES ─────────────────────────────────────────────

  {
    id: 'chiang-mai',
    name: 'Chiang Mai',
    country: 'Thailand',
    region: 'Northern Thailand',
    flag: '🇹🇭',
    photo: 'images/chiang-mai.jpg',
    photoCap: 'Doi Suthep temple, Chiang Mai',
    tagline: 'Ancient temples, mountain mist, and a cost of living that turns retirement into a daily luxury.',
    tags: ['Mountain city', 'Warm & dry season', 'Expat-friendly', 'World-class food', 'Wellness hub', 'Low cost of living'],
    costPerMonth: { 0: 900, 1: 1400, 2: 2000, 3: 3200 },
    housing: { buy: '~$120K', buyDesc: '2BR condo in the main expat neighborhood', rent: '~$600/mo' },
    compare: "One of the world's most popular retirement destinations for a reason — a comfortable, wellness-focused life costs less here than a studio apartment in most US cities.",
    page: 'destination-detail.html?id=chiang-mai',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Nimmanhaemin & Suthep', desc: "The most popular district for long-term expats — boutique hotels, third-wave coffee, international restaurants. The closest thing to a Western lifestyle infrastructure outside Bangkok. The most expensive neighborhood and consistently most in demand." },
      { name: 'Old City & Riverside', desc: "The historic moated center and Ping River corridor — temples, traditional markets, the Night Bazaar. More atmospheric than Nimmanhaemin and less expensive, but noisier and more tourist-adjacent." },
      { name: 'Hang Dong & South Chiang Mai', desc: "The expat residential corridor south of the city — larger houses, private pools, international schools, significantly more space for the price. Where most families land once they trade location for space." },
    ],
    // Scoring
    weatherMatch: [0, 2],         // warm/sunny (primary), mild in cool season
    settingMatch: [2, 3, 4],      // mountains, city, small-town neighborhoods
    paceMatch: [2, 1, 0],         // relaxed, creative, active
    geographyOptions: [6],         // Asia
    lifestyleMatch: [0, 1],       // simple, comfortable
    priorityMatch: [2, 4, 0, 5],  // peace, health, adventure, culture/arts
  },

  {
    id: 'medellin',
    name: 'Medellín',
    country: 'Colombia',
    region: 'Antioquia, Colombia',
    flag: '🇨🇴',
    photo: 'images/medellin.jpg',
    photoCap: 'El Poblado neighborhood, Medellín',
    tagline: 'Eternal spring, cable-car city views, and a creative energy that once had to be earned.',
    tags: ['Eternal spring climate', 'Mountain city', 'Creative scene', 'Modern infrastructure', 'Expat community', 'Affordable'],
    costPerMonth: { 0: 1100, 1: 1700, 2: 2400, 3: 3800 },
    housing: { buy: '~$160K', buyDesc: '2BR in the main expat neighborhood', rent: '~$700/mo' },
    compare: "A city that is completely reinvented itself — modern metro system, world-class restaurants, and a spring climate 365 days a year at 5,000 feet elevation.",
    page: 'destination-detail.html?id=medellin',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'El Poblado', desc: "The premium expat district — international restaurants, reliable infrastructure, English-speaking services. More expensive than anywhere else in Medellín but still a fraction of comparable neighborhoods in Mexico City or Bogotá. Where most Americans start and many stay." },
      { name: 'Laureles & Estadio', desc: "The established middle-class neighborhood west of the river — genuinely walkable, more Colombian in character than El Poblado, excellent food scene, and prices 20-30% lower. Where people migrate toward after their first year." },
      { name: 'Envigado & Sabaneta', desc: "The municipalities immediately south — lower prices than El Poblado, good infrastructure, quieter residential character. Popular with buyers who want space and value once they have established their footing in the city." },
    ],
    // Scoring
    weatherMatch: [2, 0],         // mild/temperate (primary - eternal spring), warm
    settingMatch: [3, 2],         // city, mountains
    paceMatch: [0, 3, 1],         // active, social, creative
    geographyOptions: [2],         // Mexico & Latin America
    lifestyleMatch: [0, 1, 2],    // simple, comfortable, upscale
    priorityMatch: [0, 1, 5, 3],  // adventure, community, culture/arts, purpose
  },

  // ─── US DESTINATIONS (additional) ─────────────────────────────────

  {
    id: 'santa-fe',
    name: 'Santa Fe',
    country: 'United States',
    region: 'New Mexico, USA',
    flag: '🇺🇸',
    photo: 'images/santa-fe.jpg',
    photoCap: 'Plaza Historic District, Santa Fe',
    tagline: 'Adobe walls, world-class galleries, and a high-desert light that turns everything golden at dusk.',
    tags: ['Arts capital', 'High desert', 'Mountain air', 'Walkable downtown', 'Culinary scene', 'English-speaking'],
    costPerMonth: { 0: 2400, 1: 3200, 2: 4200, 3: 6200 },
    housing: { buy: '~$480K', buyDesc: '2BR adobe home near Canyon Road', rent: '~$2,000/mo' },
    compare: "The arts capital of the Southwest — more gallery space per capita than nearly any US city, with Taos and the mountain wilderness an hour away.",
    page: 'destination-detail.html?id=santa-fe',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Historic Eastside & Canyon Road', desc: "The most atmospheric part of the city — adobe homes, gallery-lined streets, walking distance to the Plaza. This is what people picture when they imagine Santa Fe. It commands the highest prices in the market. Walk it on a weekday morning before you decide." },
      { name: 'Museum Hill & Old Santa Fe Trail', desc: "Quieter and slightly more residential than the Eastside, easy access to the major museums and a short drive to the Plaza. Popular with retirees who want the Santa Fe experience without being directly on the tourist circuit." },
      { name: 'Southside & Baca Street Arts District', desc: "Where most Santa Fe residents actually live — more affordable, more diverse, and closer to everyday services. The Baca Street area has studios and galleries that give it genuine character without the Canyon Road prices." },
    ],
    weatherMatch: [1, 3],          // four seasons (primary — cold snowy winters at 7,000ft), cool/crisp
    settingMatch: [2, 4, 3],       // mountains, small town, city
    paceMatch: [1, 2, 0],          // creative, relaxed, active
    geographyOptions: [0],          // United States
    lifestyleMatch: [1, 2, 3],     // comfortable, upscale, luxury
    priorityMatch: [5, 2, 3, 0],   // culture/arts, peace, purpose, adventure
  },

  {
    id: 'bend',
    name: 'Bend',
    country: 'United States',
    region: 'Oregon, USA',
    flag: '🇺🇸',
    photo: 'images/bend.jpg',
    photoCap: 'Deschutes River and Cascade peaks, Bend',
    tagline: 'Volcanic peaks, 300 sunny days, and a craft beer scene that somehow keeps pace with the mountain trails.',
    tags: ['Outdoor mecca', 'High desert & mountains', 'Four seasons', 'Active lifestyle', 'Craft culture', 'English-speaking'],
    costPerMonth: { 0: 2500, 1: 3400, 2: 4400, 3: 6500 },
    housing: { buy: '~$560K', buyDesc: '2BR home in NW Bend', rent: '~$2,100/mo' },
    compare: "One of the most outdoor-obsessed cities in America — world-class skiing, fly fishing, mountain biking, and hiking all within 30 minutes, with 300+ days of sunshine to actually use them.",
    page: 'destination-detail.html?id=bend',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Old Mill District & Downtown', desc: "The walkable urban core along the Deschutes River — the Old Mill shopping and restaurant district, Sawyer Park, the river trail system. The most in-demand location in Bend and the most expensive." },
      { name: 'Northwest Crossing', desc: "The nationally-recognized new urbanist neighborhood — a real neighborhood center with cafés and shops, tree-lined streets, and a community feel unusual in a city this size." },
      { name: 'Southeast Bend & Eastside', desc: "The value zone — newer construction at lower price points, closer to the medical center and major retail. Less character than the Old Mill area but significantly more house for the money." },
    ],
    weatherMatch: [1, 2],          // four seasons, mild/temperate
    settingMatch: [2, 1, 5],       // mountains, lake/river, countryside
    paceMatch: [0, 2, 1],          // active, relaxed, creative
    geographyOptions: [0],          // United States
    lifestyleMatch: [1, 2],        // comfortable, upscale
    priorityMatch: [0, 4, 2, 3],   // adventure, health, peace, purpose
  },

  {
    id: 'greenville-sc',
    name: 'Greenville',
    country: 'United States',
    region: 'South Carolina, USA',
    flag: '🇺🇸',
    photo: 'images/greenville.jpg',
    photoCap: 'Falls Park on the Reedy, Greenville',
    tagline: 'A waterfall in the middle of downtown, a walkable Main Street, and a cost of living that still feels like 2015.',
    tags: ['Walkable downtown', 'Mountain proximity', 'Mild four seasons', 'Growing food scene', 'Affordable', 'English-speaking'],
    costPerMonth: { 0: 2000, 1: 2700, 2: 3500, 3: 5200 },
    housing: { buy: '~$380K', buyDesc: '2BR home in Augusta Road area', rent: '~$1,600/mo' },
    compare: "One of the South's most underrated cities — a nationally recognized downtown, a waterfall park, and easy access to Blue Ridge mountain trails, at costs well below Asheville.",
    page: 'destination-detail.html?id=greenville-sc',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Downtown & West End', desc: "The walkable core — Falls Park, Main Street dining, the Peace Center. If you want to walk to everything, this is it. Prices reflect the demand but remain accessible compared to coastal alternatives." },
      { name: 'North Main', desc: "The established residential neighborhood just north of downtown — craftsman homes, tree-lined streets, walkable to the food and arts scene. Consistently one of the most desirable neighborhoods in the city." },
      { name: 'Augusta Road', desc: "South of downtown, Augusta Road is the corridor for independent shops and restaurants with a neighborhood feel. Genuinely walkable without the downtown premium." },
    ],
    weatherMatch: [1, 2],          // four seasons, mild
    settingMatch: [4, 3, 2],       // small town, city, mountains
    paceMatch: [0, 3, 1, 2],       // active, social, creative, relaxed
    geographyOptions: [0],          // United States
    lifestyleMatch: [0, 1],        // simple, comfortable
    priorityMatch: [1, 4, 0, 5],   // community, health, adventure, culture/arts
  },

  {
    id: 'sedona',
    name: 'Sedona',
    country: 'United States',
    region: 'Arizona, USA',
    flag: '🇺🇸',
    photo: 'images/sedona.jpg',
    photoCap: 'Red rock country, Sedona',
    tagline: 'Red rock cathedrals, world-class spas, and a spiritual quiet that the desert does better than anywhere else.',
    tags: ['Desert red rocks', 'Wellness hub', 'Warm & sunny', 'Arts galleries', 'Outdoor hiking', 'English-speaking'],
    costPerMonth: { 0: 2800, 1: 3800, 2: 5000, 3: 7500 },
    housing: { buy: '~$650K', buyDesc: '2BR home with red rock views', rent: '~$2,500/mo' },
    compare: "One of America's most spectacular natural settings — the same landscape that draws millions of tourists each year is also available as your backyard, year-round.",
    page: 'destination-detail.html?id=sedona',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],          // warm/sunny, mild
    settingMatch: [2, 5, 4],       // mountains/desert, countryside, small town
    paceMatch: [2, 0, 1],          // relaxed, active, creative
    geographyOptions: [0],          // United States
    lifestyleMatch: [2, 3],        // upscale, luxury
    priorityMatch: [4, 2, 0, 5],   // health, peace, adventure, culture/arts
  },

  {
    id: 'st-augustine',
    name: 'St. Augustine',
    country: 'United States',
    region: 'Florida, USA',
    flag: '🇺🇸',
    photo: 'images/st-augustine.jpg',
    photoCap: 'Castillo de San Marcos, St. Augustine',
    tagline: 'America\'s oldest city — cobblestone streets, Spanish forts, beaches, and Florida sunshine without the Miami price tag.',
    tags: ['Historic city', 'Coastal', 'Warm year-round', 'Walkable', 'Affordable for Florida', 'English-speaking'],
    costPerMonth: { 0: 2300, 1: 3100, 2: 4000, 3: 5800 },
    housing: { buy: '~$440K', buyDesc: '2BR home near the Historic District', rent: '~$1,900/mo' },
    compare: "All the Florida sunshine and beaches of Sarasota at meaningfully lower costs — plus the character of 500 years of history in a walkable colonial grid.",
    page: 'destination-detail.html?id=st-augustine',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Historic District & Downtown', desc: "America's oldest city at its most atmospheric — cobblestone streets, Spanish colonial architecture, Flagler College, the bayfront. Living here is genuinely special and increasingly expensive. Weekday mornings are as peaceful as anywhere in Florida." },
      { name: 'Anastasia Island', desc: "Cross the Bridge of Lions and you\'re on barrier island time — St. Augustine Beach, quieter streets with genuine neighborhood character. A short drive to the historic center but a different pace entirely." },
      { name: 'Vilano Beach & Ponte Vedra Corridor', desc: "North of the historic center — a real beach, less foot traffic, and prices that have softened from recent highs. More inventory and a slightly different coastal lifestyle." },
    ],
    weatherMatch: [0, 2],          // warm/sunny, mild
    settingMatch: [0, 4, 3],       // beach, small town, city
    paceMatch: [2, 1, 3],          // relaxed, creative, social
    geographyOptions: [0],          // United States
    lifestyleMatch: [0, 1, 2],     // simple, comfortable, upscale
    priorityMatch: [5, 2, 1, 4],   // culture/arts, peace, community, health
  },

  // ─── CANADA ────────────────────────────────────────────────────────

  {
    id: 'victoria-bc',
    name: 'Victoria',
    country: 'Canada',
    region: 'British Columbia, Canada',
    flag: '🇨🇦',
    photo: 'images/victoria.jpg',
    photoCap: 'Inner Harbour, Victoria BC',
    tagline: 'The mildest winters in Canada, whale-watching from the harbour, and a walkability score most US cities envy.',
    tags: ['Island city', 'Mildest winters in Canada', 'Walkable', 'Ocean views', 'Strong expat scene', 'English-speaking'],
    costPerMonth: { 0: 2800, 1: 3700, 2: 4800, 3: 7000 },
    housing: { buy: '~$620K', buyDesc: '2BR condo near downtown', rent: '~$2,400/mo' },
    compare: "The most temperate climate in Canada — daffodils in February, ocean kayaking in summer, and a compact walkable city where a car is genuinely optional.",
    page: 'destination-detail.html?id=victoria-bc',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Victoria',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Fairfield & Gonzales', desc: "The most walkable neighborhood in Victoria — Beacon Hill Park, Cook Street Village cafés, the Dallas Road waterfront. Consistently ranked the best place to live in the city and priced to reflect it." },
      { name: 'James Bay', desc: "The peninsula south of the inner harbor — flat, walkable, heritage homes and condos popular with retirees. The Dallas Road cliffs give you ocean views and a daily walking route that most cities would charge admission for." },
      { name: 'Oak Bay & Saanich East', desc: "The established residential areas east of the city center — larger lots, quieter streets, strong community infrastructure skewing heavily toward retirees. Less walking-distance convenience than Fairfield but excellent housing stock." },
    ],
    weatherMatch: [2, 1],          // mild/temperate (primary), some seasons
    settingMatch: [0, 3, 4],       // coastal, city, small town
    paceMatch: [2, 0, 3, 1],       // relaxed, active, social, creative
    geographyOptions: [1],          // Canada
    lifestyleMatch: [1, 2],        // comfortable, upscale
    priorityMatch: [4, 2, 1, 0],   // health, peace, community, adventure
  },

  {
    id: 'halifax',
    name: 'Halifax',
    country: 'Canada',
    region: 'Nova Scotia, Canada',
    flag: '🇨🇦',
    photo: 'images/halifax.jpg',
    photoCap: 'Halifax Waterfront, Nova Scotia',
    tagline: 'Lobster on the wharf, Nova Scotia fog rolling in at dusk, and a Maritime warmth that makes strangers into neighbors.',
    tags: ['Atlantic coast', 'Waterfront city', 'Four seasons', 'University town', 'Affordable for Canada', 'English-speaking'],
    costPerMonth: { 0: 2200, 1: 2900, 2: 3800, 3: 5600 },
    housing: { buy: '~$420K', buyDesc: '2BR home in South End', rent: '~$1,800/mo' },
    compare: "Canada's east coast gem — university town energy, a vibrant waterfront, and real maritime culture at costs far below Vancouver or Toronto.",
    page: 'destination-detail.html?id=halifax',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Halifax',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],          // four seasons, cool/crisp
    settingMatch: [0, 3, 1],       // coastal, city, lake/river
    paceMatch: [2, 3, 1],          // relaxed, social, creative
    geographyOptions: [1],          // Canada
    lifestyleMatch: [0, 1],        // simple, comfortable
    priorityMatch: [1, 2, 5, 4],   // community, peace, culture/arts, health
  },

  // ─── CARIBBEAN ─────────────────────────────────────────────────────

  {
    id: 'puerto-rico',
    name: 'Puerto Rico',
    country: 'United States Territory',
    region: 'Puerto Rico, USA',
    flag: '🇵🇷',
    photo: 'images/puerto-rico.jpg',
    photoCap: 'Old San Juan, Puerto Rico',
    tagline: 'A Caribbean island with US citizenship, Medicare, Social Security — and a tax structure that has turned heads worldwide.',
    tags: ['US territory', 'Tropical beaches', 'No passport needed', 'Act 22/60 tax incentives', 'Bilingual', 'Ocean lifestyle'],
    costPerMonth: { 0: 1800, 1: 2500, 2: 3500, 3: 5500 },
    housing: { buy: '~$300K', buyDesc: '2BR condo in the beach or arts district', rent: '~$1,400/mo' },
    compare: "A US territory with Caribbean beaches — no passport required, Medicare still applies, and unique Act 60 tax incentives that make it one of the most financially interesting retirement destinations in the Americas.",
    page: 'destination-detail.html?id=puerto-rico',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],             // warm/sunny (tropical)
    settingMatch: [0, 3],          // beach, city
    paceMatch: [3, 0, 2],          // social, active, relaxed
    geographyOptions: [0, 3],       // US and Caribbean
    lifestyleMatch: [1, 2],        // comfortable, upscale
    priorityMatch: [1, 0, 4, 3],   // community, adventure, health, purpose
  },

  {
    id: 'roatan',
    name: 'Roatán',
    country: 'Honduras',
    region: 'Bay Islands, Honduras',
    flag: '🇭🇳',
    photo: 'images/roatan.jpg',
    photoCap: 'West Bay Beach, Roatán',
    tagline: 'World-class diving on the Mesoamerican Barrier Reef, English-speaking expat community, and costs that make everything feel like a deal.',
    tags: ['Barrier reef diving', 'English-speaking island', 'Tropical', 'Strong expat community', 'Very low cost of living', 'Beach lifestyle'],
    costPerMonth: { 0: 1200, 1: 1800, 2: 2600, 3: 4000 },
    housing: { buy: '~$180K', buyDesc: '2BR home in West End', rent: '~$800/mo' },
    compare: "The Caribbean's best-kept retirement secret — English is the first language, the second-largest barrier reef in the world is steps from shore, and the cost of living is among the lowest in the Caribbean.",
    page: 'destination-detail.html?id=roatan',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],             // warm/sunny (tropical)
    settingMatch: [0, 4],          // beach, small town
    paceMatch: [0, 2, 3],          // active, relaxed, social
    geographyOptions: [3],          // Caribbean
    lifestyleMatch: [0, 1],        // simple, comfortable
    priorityMatch: [0, 4, 2, 1],   // adventure, health, peace, community
  },

  // ─── NEW DESTINATIONS ──────────────────────────────────────────────

  {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    region: 'Central Portugal',
    flag: '🇵🇹',
    photo: 'images/lisbon.jpg',
    photoCap: 'Alfama district, Lisbon',
    tagline: 'Seven hills, 300 days of sun, and a tram-car city where fado fills the evening air.',
    tags: ['Coastal capital', 'Sunny & mild', 'Walkable', 'World cuisine', 'Easy flight connections', 'Strong expat scene'],
    costPerMonth: { 0: 1800, 1: 2600, 2: 3600, 3: 5500 },
    housing: { buy: '~$380K', buyDesc: '2BR in an upscale central neighborhood', rent: '~$1,400/mo' },
    compare: "More sun than Porto, bigger city energy, and still one of Western Europe's most affordable capitals — with direct flights to dozens of US cities.",
    page: 'destination-detail.html?id=lisbon',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    neighborhoods: [
      { name: "Estrela, Lapa & Campo de Ourique", desc: "The most established residential neighborhoods in Lisbon — wide streets, local cafes, excellent daily infrastructure, and a quieter pace than the tourist-heavy center. Where long-term expats who know the city well tend to settle. Campo de Ourique has one of the best markets in the city." },
      { name: "Alvalade & Avenidas Novas", desc: "The leafy middle-class neighborhoods north of the Avenida da Liberdade — proper residential character, good transit, and a mix of families and professionals. More affordable than Estrela and less tourist-adjacent. Where Lisbon actually lives." },
      { name: "Arroios & Intendente", desc: "The gentrifying eastern neighborhoods that still offer genuine value — diverse, walkable, close to the city center, and changing fast. Where buyers who want Lisbon authenticity without Alfama prices tend to look. Arroios has among the best rental yields in the city." },
    ],
    weatherMatch: [2, 0],         // mild/temperate (primary), warm/sunny
    settingMatch: [0, 3],         // coastal, city
    paceMatch: [1, 3, 0, 2],      // creative, social, active, relaxed
    geographyOptions: [4],         // Europe
    lifestyleMatch: [1, 2],       // comfortable, upscale
    priorityMatch: [5, 1, 0, 3],  // culture/arts, community, adventure, purpose
  },

  {
    id: 'valencia',
    name: 'Valencia',
    country: 'Spain',
    region: 'Eastern Spain',
    flag: '🇪🇸',
    photo: 'images/valencia.jpg',
    photoCap: 'City of Arts and Sciences, Valencia',
    tagline: 'Paella birthplace, blue-flag beaches, and a Mediterranean pace that makes everywhere else feel rushed.',
    tags: ['Mediterranean coast', 'Warm & sunny', 'Beaches', 'World-class food', 'Bikeable city', 'Affordable for Europe'],
    costPerMonth: { 0: 1700, 1: 2400, 2: 3400, 3: 5200 },
    housing: { buy: '~$260K', buyDesc: '2BR in a trendy central neighborhood', rent: '~$1,100/mo' },
    compare: "Spain's most livable city — sun and beaches without Barcelona prices, a city-bike culture that makes a car optional, and food that people travel across continents to eat.",
    page: 'destination-detail.html?id=valencia',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    neighborhoods: [
      { name: "Eixample & El Pla del Remei", desc: "The elegant central grid — wide boulevards, the Modernist market, excellent restaurants and transit. The most desirable address in Valencia for international buyers and priced accordingly. Where most American expats start and where many stay." },
      { name: "Ruzafa & Russafa", desc: "The creative neighborhood south of the center — independent cafes, street art, the best brunch scene in the city. Increasingly popular with younger expats and long-term residents who want neighborhood energy without the Eixample premium." },
      { name: "Cabanyal & The Beach District", desc: "The historic fishing neighborhood stretching to the Mediterranean — under significant renovation, improving fast, and still meaningfully more affordable than the center. Beach access without the resort pricing. Worth a morning visit before you decide." },
    ],
    weatherMatch: [0, 2],         // warm/sunny (primary), mild
    settingMatch: [0, 3],         // beach, city
    paceMatch: [2, 3, 0, 1],      // relaxed, social, active, creative
    geographyOptions: [4],         // Europe
    lifestyleMatch: [1, 2],       // comfortable, upscale
    priorityMatch: [4, 1, 5, 2],  // health, community, culture/arts, peace
  },

  {
    id: 'oaxaca',
    name: 'Oaxaca',
    country: 'Mexico',
    region: 'Oaxaca, Mexico',
    flag: '🇲🇽',
    photo: 'images/oaxaca.jpg',
    photoCap: 'Santo Domingo church, Oaxaca',
    tagline: 'Mezcal mornings, mole that takes three days to make, and an art scene that draws people from around the world.',
    tags: ['Highlands city', 'Mild year-round', 'World-renowned food', 'Indigenous arts', 'Walkable centro', 'Small expat community'],
    costPerMonth: { 0: 1000, 1: 1500, 2: 2100, 3: 3200 },
    housing: { buy: '~$180K', buyDesc: '2BR colonial in Centro', rent: '~$700/mo' },
    compare: "Mexico's cultural heartland — a highland city with spring-like weather year-round, some of the world's most celebrated cuisine, and a creative energy that attracts artists and writers from every continent.",
    page: 'destination-detail.html?id=oaxaca',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    neighborhoods: [
      { name: "Centro Historico & Jalatlaco", desc: "The colonial center and the most beautiful small neighborhood in the city — cobblestone lanes, bougainvillea on every corner, the zocalo a short walk away. Jalatlaco is what most people picture when they dream of Oaxaca: quiet, colorful, genuine. Also the most expensive and most in demand." },
      { name: "Colonia Reforma & Ninos Heroes", desc: "The residential neighborhoods extending north from the historic center — practical, walkable to the markets and the zocalo, better value per square meter. Where long-term expat residents tend to live once they know the city well enough to prioritize daily convenience over maximum atmosphere." },
      { name: "San Felipe del Agua & Colonia del Valle", desc: "The quieter residential neighborhoods at the base of the mountains north of the city — cooler temperatures, larger properties, more green space. Popular with buyers who want the Oaxaca lifestyle with more space and less urban density." },
    ],
    weatherMatch: [2, 0],         // mild (highland), warm
    settingMatch: [3, 4],         // city, small town
    paceMatch: [1, 2],            // creative/cultural (primary), relaxed
    geographyOptions: [2],         // Mexico & Latin America
    lifestyleMatch: [0, 1],       // simple, comfortable
    priorityMatch: [5, 2, 3, 1],  // culture/arts, peace, purpose, community
  },

  {
    id: 'chattanooga',
    name: 'Chattanooga',
    country: 'United States',
    region: 'Tennessee, USA',
    flag: '🇺🇸',
    photo: 'images/chattanooga.jpg',
    photoCap: 'Tennessee River and Lookout Mountain',
    tagline: 'River gorges, mountain biking, and a mid-sized city that somehow has a James Beard–nominated food scene.',
    tags: ['River & mountains', 'Four seasons', 'Outdoor lifestyle', 'Affordable', 'Growing arts scene', 'English-speaking'],
    costPerMonth: { 0: 1900, 1: 2600, 2: 3400, 3: 5000 },
    housing: { buy: '~$340K', buyDesc: '2BR in North Shore', rent: '~$1,500/mo' },
    compare: "One of the South's most surprising cities — outdoor recreation rivaling cities twice its size, a revitalized downtown, and costs well below most coastal alternatives.",
    page: 'destination-detail.html?id=chattanooga',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'NorthShore', desc: "The walkable riverfront neighborhood that most clearly explains why people are moving to Chattanooga. Independent restaurants, the pedestrian bridge to downtown, access to the Tennessee Riverwalk. The most desirable address in the city and priced accordingly." },
      { name: 'St. Elmo', desc: "The hillside neighborhood at the base of Lookout Mountain — restored Victorian homes, the Incline Railway, a genuine small-town main street. Popular with buyers who want character and easy mountain access." },
      { name: 'Highland Park', desc: "The value play — centrally located, genuinely walkable, and the fastest-appreciating neighborhood in the city. Where people buy when NorthShore prices feel too high, and feel smug about it a year later." },
    ],
    // Scoring
    weatherMatch: [1, 2],         // four seasons, mild
    settingMatch: [2, 1, 3, 4],   // mountains, lake/river, city, small town
    paceMatch: [0, 1, 3],         // active, creative, social
    geographyOptions: [0],         // United States
    lifestyleMatch: [0, 1],       // simple, comfortable
    priorityMatch: [0, 4, 1, 3],  // adventure, health, community, purpose
  },

  {
    id: 'tucson',
    name: 'Tucson',
    country: 'United States',
    region: 'Arizona, USA',
    flag: '🇺🇸',
    photo: 'images/tucson.jpg',
    photoCap: 'Saguaro National Park, Tucson',
    tagline: 'Saguaro sunsets, 350 days of sunshine, and a University of Arizona energy that keeps it young.',
    tags: ['Desert sunshine', 'Mountain trails', 'University town', 'Affordable', 'Strong arts scene', 'English-speaking'],
    costPerMonth: { 0: 2000, 1: 2700, 2: 3500, 3: 5200 },
    housing: { buy: '~$360K', buyDesc: '2BR home in Midtown', rent: '~$1,600/mo' },
    compare: "Arizona sunshine without Phoenix prices — a university town with serious trail systems, an emerging food scene, and winters that draw snowbirds from across the country.",
    page: 'destination-detail.html?id=tucson',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    weatherMatch: [0],            // warm/sunny
    settingMatch: [2, 5, 3],      // mountains/desert, open countryside, city
    paceMatch: [0, 2, 1],         // active, relaxed, creative
    geographyOptions: [0],         // United States
    lifestyleMatch: [0, 1, 2],    // simple, comfortable, upscale
    priorityMatch: [4, 0, 2, 3],  // health, adventure, peace, purpose
  },

  {
    id: 'panama-city',
    name: 'Panama City',
    country: 'Panama',
    region: 'Panama City, Panama',
    flag: '🇵🇦',
    photo: 'images/panama-city.jpg',
    photoCap: 'Casco Viejo and city skyline, Panama City',
    tagline: 'A gleaming modern skyline, a walkable old city, and the most retiree-friendly visa in the Americas.',
    tags: ['Tropical climate', 'Modern city', 'USD economy', 'Pensionado visa', 'English widely spoken', 'Hub airport'],
    costPerMonth: { 0: 1500, 1: 2200, 2: 3000, 3: 4800 },
    housing: { buy: '~$200K', buyDesc: '2BR in an upscale residential district', rent: '~$1,100/mo' },
    compare: "The only country in Latin America where the dollar is the official currency — with the Pensionado visa offering discounts on everything from flights to medical care.",
    page: 'destination-detail.html?id=panama-city',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    // Scoring
    weatherMatch: [0],            // warm/sunny (tropical)
    settingMatch: [3, 0, 4],      // city, beach access, small-town Casco
    paceMatch: [3, 0, 2],         // social, active, relaxed
    geographyOptions: [2],         // Mexico & Latin America
    lifestyleMatch: [1, 2],       // comfortable, upscale
    priorityMatch: [0, 1, 4],     // adventure, community, health
  },


  // ─── EUROPE (additional) ──────────────────────────────────────────

  {
    id: 'malaga',
    name: 'Málaga',
    country: 'Spain',
    region: 'Andalusia, Spain',
    flag: '🇪🇸',
    photo: 'images/malaga.jpg',
    photoCap: 'Málaga cathedral and harbour, Spain',
    tagline: 'Picasso\'s birthplace, 320 days of sun, and a beachfront promenade that puts even the French Riviera to shame for value.',
    tags: ['Mediterranean beach city', 'Warm & sunny', 'Walkable', 'World cuisine', 'Emerging arts scene', 'Affordable for Spain'],
    costPerMonth: { 0: 1600, 1: 2300, 2: 3200, 3: 4900 },
    housing: { buy: '~$240K', buyDesc: '2BR in Soho/Centro', rent: '~$1,000/mo' },
    compare: "The sunniest city in continental Europe — more sunshine than the Canaries, with a transformed arts district, a stunning historic center, and beaches that do not require a vacation to reach.",
    page: 'destination-detail.html?id=malaga',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Centro Histórico', desc: "The revitalized city center — the Picasso Museum, Calle Larios, the Alcazaba fortress above. Walkable, dense, increasingly expensive as international demand has driven prices up. The most atmospheric place to live but also the noisiest and most tourist-adjacent." },
      { name: 'Malagueta & El Limonar', desc: "Malagueta sits along the beachfront promenade east of the port — sea views, good restaurants, upscale apartments. El Limonar further east is quieter with larger properties and a more residential pace." },
      { name: 'Pedregalejo & El Palo', desc: "The old fishing neighborhoods east of the city — authentic, local, affordable relative to the center. Walk the chiringuito strip any evening and see why long-term expats end up here rather than the pricier tourist zones." },
    ],
    weatherMatch: [0, 2],          // warm/sunny (primary), mild
    settingMatch: [0, 3],          // beach, city
    paceMatch: [2, 3, 1, 0],       // relaxed, social, creative, active
    geographyOptions: [4],          // Europe
    lifestyleMatch: [0, 1, 2],     // simple, comfortable, upscale
    priorityMatch: [4, 1, 5, 2],   // health, community, culture/arts, peace
  },

  {
    id: 'algarve',
    name: 'Algarve',
    country: 'Portugal',
    region: 'Southern Portugal',
    flag: '🇵🇹',
    photo: 'images/algarve.jpg',
    photoCap: 'Ponta da Piedade, Lagos, Algarve',
    tagline: 'Sea-carved golden cliffs, 300 days of sunshine, and the most beloved stretch of coastline in all of Europe.',
    tags: ['Dramatic coastline', 'Warm & sunny', 'Beach lifestyle', 'Golf mecca', 'Strong British expat scene', 'English widely spoken'],
    costPerMonth: { 0: 1700, 1: 2400, 2: 3400, 3: 5100 },
    housing: { buy: '~$320K', buyDesc: '2BR villa near Lagos or Tavira', rent: '~$1,200/mo' },
    compare: "Europe's favorite stretch of coastline — cliffs and beaches that look like screensavers, 300+ days of sun, and a well-established English-speaking expat infrastructure that makes the transition simple.",
    page: 'destination-detail.html?id=algarve',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Lagos & Western Algarve', desc: "The western Algarve draws buyers who want dramatic Atlantic coastline and a more genuine local character. Lagos has a real town center, good restaurants, and a younger expat community. Prices are rising faster here than anywhere else in the region." },
      { name: 'Vilamoura, Loulé & The Golden Triangle', desc: "The most established part of the Algarve for international buyers — marina lifestyle, golf, excellent infrastructure. Prices are the highest in the region, but so is the resale market depth." },
      { name: 'Tavira & Eastern Algarve', desc: "The quietest and most affordable part of the Algarve — genuine Portuguese town life, beautiful river estuary. Tavira consistently ranks as one of the most livable towns in Portugal for retirees who want to actually integrate." },
    ],
    weatherMatch: [0, 2],          // warm/sunny, mild
    settingMatch: [0, 5, 4],       // beach, countryside, small town
    paceMatch: [2, 0, 3],          // relaxed, active, social
    geographyOptions: [4],          // Europe
    lifestyleMatch: [1, 2, 3],     // comfortable, upscale, luxury
    priorityMatch: [4, 2, 0, 1],   // health, peace, adventure, community
  },

  {
    id: 'athens',
    name: 'Athens',
    country: 'Greece',
    region: 'Attica, Greece',
    flag: '🇬🇷',
    photo: 'images/athens.jpg',
    photoCap: 'The Acropolis, Athens',
    tagline: 'Civilization\'s greatest ruins as your daily backdrop — and an underrated modern city that\'s having a serious moment.',
    tags: ['Ancient history', 'Mediterranean climate', 'Walkable neighborhoods', 'Seafood & cuisine', 'Affordable for Europe', 'Island access'],
    costPerMonth: { 0: 1500, 1: 2100, 2: 3000, 3: 4500 },
    housing: { buy: '~$200K', buyDesc: '2BR in a central residential neighborhood', rent: '~$900/mo' },
    compare: "One of Europe's most affordable capital cities — steps from the Acropolis, an hour from island-hopping, and one of the sunniest capitals in Europe, with costs roughly half of Lisbon.",
    page: 'destination-detail.html?id=athens',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],          // warm/sunny, mild
    settingMatch: [3, 0],          // city, coastal access
    paceMatch: [1, 3, 2],          // creative, social, relaxed
    geographyOptions: [4],          // Europe
    lifestyleMatch: [0, 1, 2],     // simple, comfortable, upscale
    priorityMatch: [5, 1, 0, 2],   // culture/arts, community, adventure, peace
  },

  {
    id: 'florence',
    name: 'Florence',
    country: 'Italy',
    region: 'Tuscany, Italy',
    flag: '🇮🇹',
    photo: 'images/florence.jpg',
    photoCap: 'Ponte Vecchio and Arno River, Florence',
    tagline: 'The Uffizi, the Duomo, Chianti wines at dusk — and a life so beautiful it explains why the Renaissance happened here.',
    tags: ['Art capital of the world', 'Mild year-round', 'Walkable', 'World cuisine', 'River city', 'Strong expat community'],
    costPerMonth: { 0: 2000, 1: 2800, 2: 4000, 3: 6200 },
    housing: { buy: '~$380K', buyDesc: '2BR in a central riverside neighborhood', rent: '~$1,500/mo' },
    compare: "Living in Florence means living inside the world's greatest art museum — only without the crowds, the ticket prices, or the closing times. Tuscan wine country starts 20 minutes from your door.",
    page: 'destination-detail.html?id=florence',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Oltrarno", desc: "The left bank neighborhood south of the Arno — artisan workshops, local restaurants, a genuine Florentine community that has resisted full gentrification. The most livable part of the historic city for long-term residents who want authenticity without the tourist density of the center." },
      { name: "Campo di Marte & Gavinana", desc: "The residential neighborhoods east of the center — good transit, local markets, reasonable prices compared to the historic core. Where Florentines live. Less atmospheric than Oltrarno but significantly more practical for daily life and meaningfully more affordable." },
      { name: "Rifredi & Novoli", desc: "The northwestern residential areas near the university hospital — the best rental yields in the city, newer building stock, and a diverse community. The value end of the Florence market for buyers who want income potential alongside personal use." },
    ],
    weatherMatch: [2, 1],          // mild/temperate, four seasons
    settingMatch: [3, 1],          // city, river
    paceMatch: [1, 2, 3],          // creative, relaxed, social
    geographyOptions: [4],          // Europe
    lifestyleMatch: [1, 2, 3],     // comfortable, upscale, luxury
    priorityMatch: [5, 2, 1, 3],   // culture/arts, peace, community, purpose
  },

  {
    id: 'split',
    name: 'Split',
    country: 'Croatia',
    region: 'Dalmatia, Croatia',
    flag: '🇭🇷',
    photo: 'images/split.jpg',
    photoCap: "Diocletian's Palace and harbor, Split",
    tagline: 'A Roman emperor built his retirement palace here. Two thousand years later, you can see why.',
    tags: ['Adriatic coast', 'Warm & sunny', 'Historic city', 'Island access', 'Emerging expat scene', 'Affordable for Europe'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 2900, 3: 4400 },
    housing: { buy: '~$220K', buyDesc: '2BR in a central or seafront neighborhood', rent: '~$900/mo' },
    compare: "The Adriatic's most dramatic city — you literally live inside a Roman palace — with dozens of islands a short ferry ride away, and costs still well below Western Europe.",
    page: 'destination-detail.html?id=split',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],          // warm/sunny, mild
    settingMatch: [0, 3, 4],       // coastal, city, small town
    paceMatch: [0, 2, 3],          // active, relaxed, social
    geographyOptions: [4],          // Europe
    lifestyleMatch: [0, 1],        // simple, comfortable
    priorityMatch: [0, 5, 1, 2],   // adventure, culture/arts, community, peace
  },

  // ─── MEXICO / LATIN AMERICA (additional) ──────────────────────────

  {
    id: 'san-miguel',
    name: 'San Miguel de Allende',
    country: 'Mexico',
    region: 'Guanajuato, Mexico',
    flag: '🇲🇽',
    photo: 'images/san-miguel-de-allende.jpg',
    photoCap: 'Parroquia de San Miguel Arcángel, San Miguel de Allende',
    tagline: 'A UNESCO World Heritage colonial city where the American expat art scene has been going for 70 years — and shows no signs of stopping.',
    tags: ['UNESCO Heritage city', 'Mild highland climate', 'Arts colony', 'Large expat community', 'Walkable', 'Low cost of living'],
    costPerMonth: { 0: 1300, 1: 1900, 2: 2800, 3: 4200 },
    housing: { buy: '~$280K', buyDesc: '2BR colonial home near Centro', rent: '~$1,000/mo' },
    compare: "The most established American expat destination in Mexico — 70+ years of expat community infrastructure, a thriving arts colony, and highland spring weather year-round.",
    page: 'destination-detail.html?id=san-miguel',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Centro Historico", desc: "The cobblestone colonial heart — the Parroquia church, the Jardin, the best restaurants and galleries in the city. The most expensive neighborhood and the most atmospheric. Where most new arrivals want to be and where the weekend energy is highest. Walk it on a Tuesday morning to see the pace that most residents actually live." },
      { name: "Colonia Guadalupe & Ojo de Agua", desc: "The residential neighborhoods adjacent to the historic center — quieter streets, local markets, a genuine community feel. More affordable than the Centro while remaining walkable to everything. Where the expat community that has been in San Miguel for a decade tends to settle." },
      { name: "Los Frailes & Salida a Celaya", desc: "The newer developments east of the historic center — more space, lower prices, newer construction. Less character than the colonial neighborhoods but practical for buyers who want a San Miguel address with more modern infrastructure." },
    ],
    weatherMatch: [2, 0],          // mild (highland spring), warm
    settingMatch: [3, 4],          // city, small town feel
    paceMatch: [1, 2, 3],          // creative, relaxed, social
    geographyOptions: [2],          // Mexico & Latin America
    lifestyleMatch: [0, 1, 2],     // simple, comfortable, upscale
    priorityMatch: [5, 1, 2, 3],   // culture/arts, community, peace, purpose
  },

  {
    id: 'puerto-vallarta',
    name: 'Puerto Vallarta',
    country: 'Mexico',
    region: 'Jalisco, Mexico',
    flag: '🇲🇽',
    photo: 'images/puerto-vallarta.jpg',
    photoCap: 'Malecón boardwalk, Puerto Vallarta',
    tagline: 'Jungle-backed cobblestone streets, a golden Pacific beach, and a lively expat scene that turns happy hour into a social institution.',
    tags: ['Pacific coast', 'Warm year-round', 'Beach & jungle', 'Established expat scene', 'LGBTQ-welcoming', 'Good infrastructure'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 2900, 3: 4500 },
    housing: { buy: '~$240K', buyDesc: '2BR condo near the Romantic Zone', rent: '~$950/mo' },
    compare: "Mexico's most beloved Pacific coast city — beaches backed by Sierra Madre jungle, a famously welcoming LGBTQ+ community, and one of the most organized expat scenes in the country.",
    page: 'destination-detail.html?id=puerto-vallarta',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],             // warm/sunny year-round
    settingMatch: [0, 3, 2],       // beach, city, mountains/jungle
    paceMatch: [3, 0, 2],          // social, active, relaxed
    geographyOptions: [2],          // Mexico & Latin America
    lifestyleMatch: [0, 1, 2],     // simple, comfortable, upscale
    priorityMatch: [1, 0, 4, 5],   // community, adventure, health, culture/arts
  },

  {
    id: 'cuenca',
    name: 'Cuenca',
    country: 'Ecuador',
    region: 'Azuay, Ecuador',
    flag: '🇪🇨',
    photo: 'images/cuenca.jpg',
    photoCap: 'Historic center, Cuenca',
    tagline: 'A UNESCO colonial gem at 8,500 feet — spring weather year-round, first-class private healthcare, and a cost of living that makes even Mérida seem expensive.',
    tags: ['UNESCO city', 'Highland spring climate', 'Affordable', 'Top expat destination', 'Private healthcare hub', 'Walkable'],
    costPerMonth: { 0: 900, 1: 1300, 2: 2000, 3: 3200 },
    housing: { buy: '~$150K', buyDesc: '2BR apartment in El Centro', rent: '~$600/mo' },
    compare: "Consistently ranked as one of the world's best retirement destinations — world-class private hospitals, spring weather every day of the year, and monthly costs that are a fraction of any US city.",
    page: 'destination-detail.html?id=cuenca',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 3],          // mild/temperate (primary — 2,550m highland spring), cool/crisp secondary
    settingMatch: [3, 4, 2],       // city, small town, mountains
    paceMatch: [2, 1, 3],          // relaxed, creative, social
    geographyOptions: [2],          // Mexico & Latin America
    lifestyleMatch: [0, 1],        // simple, comfortable
    priorityMatch: [4, 2, 1, 5],   // health, peace, community, culture/arts
  },

  {
    id: 'costa-rica',
    name: 'Central Valley, Costa Rica',
    country: 'Costa Rica',
    region: 'Central Valley, Costa Rica',
    flag: '🇨🇷',
    photo: 'images/costa-rica.jpg',
    photoCap: 'Cloud forest, Costa Rica Central Valley',
    tagline: 'Pura vida isn\'t just a saying — it\'s what happens when you wake up to a volcano view, howler monkeys, and a healthcare system that actually works.',
    tags: ['Pura vida lifestyle', 'Mountain & cloud forest', 'Mild year-round', 'Best healthcare in LatAm', 'Nature immersion', 'Established expat scene'],
    costPerMonth: { 0: 1300, 1: 1900, 2: 2700, 3: 4300 },
    housing: { buy: '~$200K', buyDesc: '2BR home in a popular expat suburb or mountain town', rent: '~$800/mo' },
    compare: "The gold standard of Latin American retirement — Costa Rica's CAJA healthcare is rated among the best in the world, its political stability is exceptional, and the Central Valley has spring weather 365 days a year.",
    page: 'destination-detail.html?id=costa-rica',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 0],          // mild/temperate (Central Valley), warm in coastal areas
    settingMatch: [2, 5, 4],       // mountains, countryside, small town
    paceMatch: [0, 2, 1],          // active, relaxed, creative
    geographyOptions: [2],          // Mexico & Latin America
    lifestyleMatch: [0, 1],        // simple, comfortable
    priorityMatch: [4, 0, 2, 1],   // health, adventure, peace, community
  },

  // ─── ASIA (additional) ─────────────────────────────────────────────

  {
    id: 'penang',
    name: 'Penang',
    country: 'Malaysia',
    region: 'Penang, Malaysia',
    flag: '🇲🇾',
    photo: 'images/penang.jpg',
    photoCap: 'George Town historic district, Penang',
    tagline: 'Asia\'s food capital, a UNESCO heritage city, and a Malaysia My Second Home visa that makes it one of the easiest places in the world to retire legally.',
    tags: ['Street food paradise', 'UNESCO Heritage', 'Tropical island', 'MM2H visa friendly', 'English widely spoken', 'Excellent healthcare'],
    costPerMonth: { 0: 1000, 1: 1500, 2: 2200, 3: 3500 },
    housing: { buy: '~$130K', buyDesc: '2BR condo in George Town area', rent: '~$550/mo' },
    compare: "Asia's most food-obsessed city — Michelin-recommended hawker stalls, a UNESCO heritage quarter, an English-speaking population, and a government program specifically designed to make retirement here easy.",
    page: 'destination-detail.html?id=penang',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "George Town & Pulau Tikus", desc: "The UNESCO heritage city and the adjacent residential neighborhood that most expats call home — Pulau Tikus has the best daily infrastructure, good healthcare access, and the comfortable balance of local and international that makes Penang work. George Town itself is the most atmospheric but increasingly tourist-heavy on weekends." },
      { name: "Tanjong Tokong & Tanjong Bungah", desc: "The northern coastal neighborhoods — expat-friendly condos, sea views, good schools, and access to the beaches of Batu Ferringhi further north. Popular with families and professional expats. More suburban than George Town but with better space for the price." },
      { name: "Batu Ferringhi", desc: "The beach strip on the north coast — resort hotels, independent guesthouses, and a beachside pace that is genuinely different from the city. Further from the urban infrastructure of George Town but the right choice for buyers who want to wake up with the South China Sea outside their window." },
    ],
    weatherMatch: [0],             // warm/sunny (tropical)
    settingMatch: [0, 3, 4],       // coastal, city, small town
    paceMatch: [1, 2, 3],          // creative, relaxed, social
    geographyOptions: [6],          // Asia
    lifestyleMatch: [0, 1],        // simple, comfortable
    priorityMatch: [5, 4, 1, 2],   // culture/arts, health, community, peace
  },

  {
    id: 'da-nang',
    name: 'Da Nang',
    country: 'Vietnam',
    region: 'Central Vietnam',
    flag: '🇻🇳',
    photo: 'images/da-nang.jpg',
    photoCap: 'My Khe Beach, Da Nang',
    tagline: 'Long white sand beaches, the ancient town of Hội An thirty minutes south, and a cost of living that feels almost implausible.',
    tags: ['Long white beaches', 'Mountain backdrop', 'Tropical', 'Growing expat scene', 'Very affordable', 'Near Hội An'],
    costPerMonth: { 0: 800, 1: 1200, 2: 1800, 3: 3000 },
    housing: { buy: 'Restricted for foreigners', buyDesc: 'Long-term apartment lease', rent: '~$450/mo' },
    compare: "Vietnam's beach city — 30km of white sand on one side, the Marble Mountains on the other, and Hội An's ancient streets 30 minutes south, at costs that are among the lowest of any destination in this list.",
    page: 'destination-detail.html?id=da-nang',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],          // warm/sunny, mild in some months
    settingMatch: [0, 2, 3],       // beach, mountains, city
    paceMatch: [0, 2, 1],          // active, relaxed, creative
    geographyOptions: [6],          // Asia
    lifestyleMatch: [0, 1],        // simple, comfortable
    priorityMatch: [0, 2, 4, 5],   // adventure, peace, health, culture/arts
  },

  // ─── US ADDITIONAL ─────────────────────────────────────────────────

  {
    id: 'naples-fl',
    name: 'Naples',
    country: 'United States',
    region: 'Florida, USA',
    flag: '🇺🇸',
    photo: 'images/naples.jpg',
    photoCap: 'Fifth Avenue South, Naples',
    tagline: 'The Gulf Coast\'s most refined city — powdery white sand, world-class dining, and a slower, more elegant take on Florida sunshine.',
    tags: ['Gulf Coast', 'Warm year-round', 'Upscale downtown', 'World-class dining', 'Beach lifestyle', 'English-speaking'],
    costPerMonth: { 0: 3000, 1: 4000, 2: 5500, 3: 8000 },
    housing: { buy: '~$580K', buyDesc: '2BR condo near 5th Ave South', rent: '~$2,800/mo' },
    compare: "Florida's most refined beach city — quieter and more upscale than Sarasota, with some of the best shelling beaches in the country and a dining scene that draws chefs from Miami.",
    page: 'destination-detail.html?id=naples-fl',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 3],
    paceMatch: [2, 3, 0],
    geographyOptions: [0],
    lifestyleMatch: [2, 3],
    priorityMatch: [4, 1, 0, 5],
  },

  {
    id: 'boise',
    name: 'Boise',
    country: 'United States',
    region: 'Idaho, USA',
    flag: '🇺🇸',
    photo: 'images/boise.jpg',
    photoCap: 'Boise Foothills Trail System',
    tagline: 'A mid-sized city with a river running through it, 100 miles of foothills trails, and a downtown food scene that keeps winning national attention.',
    tags: ['Outdoor lifestyle', 'River city', 'Four seasons', 'Affordable for West Coast', 'Fast-growing', 'English-speaking'],
    costPerMonth: { 0: 1900, 1: 2600, 2: 3400, 3: 5000 },
    housing: { buy: '~$380K', buyDesc: '2BR home in the North End', rent: '~$1,600/mo' },
    compare: "Idaho's capital punches well above its size — mountain biking trails from downtown, a river greenbelt, Sun Valley ski country two hours away, and costs well below comparably outdoorsy Western cities.",
    page: 'destination-detail.html?id=boise',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 0],
    settingMatch: [2, 1, 3],
    paceMatch: [0, 1, 2],
    geographyOptions: [0],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 4, 3, 1],
  },

  {
    id: 'fort-collins',
    name: 'Fort Collins',
    country: 'United States',
    region: 'Colorado, USA',
    flag: '🇺🇸',
    photo: 'images/fort-collins.jpg',
    photoCap: 'Cache la Poudre River canyon, Fort Collins',
    tagline: 'A Colorado State University town where craft beer was practically invented — and where the Rockies are close enough to feel like a daily presence.',
    tags: ['University town', 'Mountain proximity', 'Four seasons', 'Craft beer capital', 'Walkable Old Town', 'English-speaking'],
    costPerMonth: { 0: 2200, 1: 3000, 2: 3900, 3: 5800 },
    housing: { buy: '~$450K', buyDesc: '2BR home near Old Town', rent: '~$1,800/mo' },
    compare: "Colorado mountain access without Denver prices — a genuinely walkable Old Town, Rocky Mountain National Park an hour away, and a creative energy that comes from having a large university in the mix.",
    page: 'destination-detail.html?id=fort-collins',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],          // four seasons (primary — cold snowy winters at 5,000ft), cool/crisp
    settingMatch: [2, 4, 3],
    paceMatch: [0, 1, 3],
    geographyOptions: [0],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 4, 1, 5],
  },

  {
    id: 'scottsdale',
    name: 'Scottsdale',
    country: 'United States',
    region: 'Arizona, USA',
    flag: '🇺🇸',
    photo: 'images/scottsdale.jpg',
    photoCap: 'McDowell Sonoran Preserve, Scottsdale',
    tagline: '330 days of sun, world-class golf and spas, and a desert landscape that manages to feel both dramatic and serene.',
    tags: ['Desert sunshine', 'World-class golf & spas', 'Warm year-round', 'Walkable Old Town', 'Arts scene', 'English-speaking'],
    costPerMonth: { 0: 3000, 1: 4000, 2: 5500, 3: 8000 },
    housing: { buy: '~$650K', buyDesc: '2BR condo near Old Town', rent: '~$2,500/mo' },
    compare: "Tucson's more upscale neighbor — resort-quality living, a world-class spa scene, 200+ golf courses, and the kind of desert sunrise that makes the cost feel reasonable.",
    page: 'destination-detail.html?id=scottsdale',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [2, 5, 3],
    paceMatch: [0, 2, 3],
    geographyOptions: [0],
    lifestyleMatch: [2, 3],
    priorityMatch: [4, 0, 1, 5],
  },

  {
    id: 'burlington-vt',
    name: 'Burlington',
    country: 'United States',
    region: 'Vermont, USA',
    flag: '🇺🇸',
    photo: 'images/burlington.jpg',
    photoCap: 'Lake Champlain waterfront, Burlington',
    tagline: 'Vermont\'s lakeside gem — a walkable Church Street, Lake Champlain at your doorstep, and the kind of genuine four seasons that reminds you autumn is real.',
    tags: ['Lakeside city', 'Dramatic four seasons', 'Walkable', 'Progressive culture', 'Farm-to-table food', 'English-speaking'],
    costPerMonth: { 0: 2400, 1: 3200, 2: 4200, 3: 6200 },
    housing: { buy: '~$480K', buyDesc: '2BR home on the Hill Section', rent: '~$2,000/mo' },
    compare: "New England's most livable small city — a true walkable downtown on Lake Champlain, Vermont ski resorts 30 minutes away, and the kind of four seasons that people move states to experience.",
    page: 'destination-detail.html?id=burlington-vt',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],
    settingMatch: [1, 2, 4],
    paceMatch: [0, 1, 3],
    geographyOptions: [0],
    lifestyleMatch: [1, 2],
    priorityMatch: [0, 5, 1, 4],
  },

  {
    id: 'fredericksburg-tx',
    name: 'Fredericksburg',
    country: 'United States',
    region: 'Texas Hill Country, USA',
    flag: '🇺🇸',
    photo: 'images/fredericksburg.jpg',
    photoCap: 'Texas Hill Country vineyards, Fredericksburg',
    tagline: 'Bluebonnet fields, a German heritage Main Street, and 50+ wineries within 30 minutes — Texas wine country done exactly right.',
    tags: ['Texas wine country', 'Small town charm', 'Warm year-round', 'German heritage', 'Arts & antiques', 'English-speaking'],
    costPerMonth: { 0: 2000, 1: 2700, 2: 3500, 3: 5000 },
    housing: { buy: '~$420K', buyDesc: '2BR home near downtown', rent: '~$1,700/mo' },
    compare: "The heart of Texas wine country — a genuinely charming Main Street with a German heritage, wildflower fields in spring, and 50+ wineries within easy driving distance.",
    page: 'destination-detail.html?id=fredericksburg-tx',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [5, 4],
    paceMatch: [2, 1, 3],
    geographyOptions: [0],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [2, 5, 1, 3],
  },

  // ─── CANADA ────────────────────────────────────────────────────────

  {
    id: 'vancouver',
    name: 'Vancouver',
    country: 'Canada',
    region: 'British Columbia, Canada',
    flag: '🇨🇦',
    photo: 'images/vancouver.jpg',
    photoCap: 'Stanley Park and downtown skyline, Vancouver',
    tagline: 'Mountains meet ocean in North America\'s most cosmopolitan Pacific city — and somehow, it manages to feel both world-class and deeply livable.',
    tags: ['Ocean & mountains', 'Mild winters', 'World-class food', 'Cosmopolitan', 'English-speaking', 'Outdoor lifestyle'],
    costPerMonth: { 0: 3500, 1: 4800, 2: 6500, 3: 9500 },
    housing: { buy: '~$820K', buyDesc: '2BR condo in a desirable residential neighborhood', rent: '~$3,200/mo' },
    compare: "One of the world's most desirable cities — ski mountains you can see from the seawall, the mildest winters in Canada, and a Pacific Rim food scene that rivals anywhere in North America.",
    page: 'destination-detail.html?id=vancouver',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Vancouver',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 1],
    settingMatch: [0, 2, 3],
    paceMatch: [0, 1, 3],
    geographyOptions: [1],
    lifestyleMatch: [2, 3],
    priorityMatch: [4, 0, 1, 5],
  },

  {
    id: 'kelowna',
    name: 'Kelowna',
    country: 'Canada',
    region: 'British Columbia, Canada',
    flag: '🇨🇦',
    photo: 'images/kelowna.jpg',
    photoCap: 'Okanagan Lake and vineyards, Kelowna',
    tagline: 'Canada\'s wine country on a warm Okanagan lake — more sunshine than Vancouver, a thriving food scene, and ski hills within an hour.',
    tags: ['Okanagan wine country', 'Lakeside city', 'Canada\'s sunniest interior', 'Outdoor recreation', 'Growing food scene', 'English-speaking'],
    costPerMonth: { 0: 2600, 1: 3500, 2: 4500, 3: 6500 },
    housing: { buy: '~$580K', buyDesc: '2BR home in a lakeside residential area', rent: '~$2,200/mo' },
    compare: "British Columbia's best-kept secret — more sunshine than Vancouver, a world-class wine region on a warm inland lake, and ski hills an hour away in each direction.",
    page: 'destination-detail.html?id=kelowna',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Kelowna',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 0],          // four seasons (primary — cold winters, hot dry summers), warm
    settingMatch: [1, 2, 4],
    paceMatch: [0, 2, 1],
    geographyOptions: [1],
    lifestyleMatch: [1, 2],
    priorityMatch: [0, 4, 5, 2],
  },

  {
    id: 'quebec-city',
    name: 'Québec City',
    country: 'Canada',
    region: 'Québec, Canada',
    flag: '🇨🇦',
    photo: 'images/quebec-city.jpg',
    photoCap: 'Old Québec City and Château Frontenac',
    tagline: 'A UNESCO World Heritage walled city with the energy of Paris and the safety of Canada — where French culture runs so deep it\'s been here since 1608.',
    tags: ['UNESCO walled city', 'French culture & cuisine', 'Four seasons', 'Walkable Old Town', 'Bilingual', 'Low crime rate'],
    costPerMonth: { 0: 2400, 1: 3200, 2: 4200, 3: 6000 },
    housing: { buy: '~$420K', buyDesc: '2BR condo in a central residential neighborhood', rent: '~$1,700/mo' },
    compare: "The most European city in North America — a walled city with a château on the cliffs, 400-year-old French culture, a world-famous Winter Carnival, and costs well below Montréal.",
    page: 'destination-detail.html?id=quebec-city',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Qu%C3%A9bec%20City',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],
    settingMatch: [3, 4],
    paceMatch: [1, 3, 2],
    geographyOptions: [1],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 1, 2, 3],
  },

  {
    id: 'ottawa',
    name: 'Ottawa',
    country: 'Canada',
    region: 'Ontario, Canada',
    flag: '🇨🇦',
    photo: 'images/ottawa.jpg',
    photoCap: 'Parliament Hill and Rideau Canal, Ottawa',
    tagline: 'Canada\'s capital city — world-class museums free to enter, the Rideau Canal for skating in winter and cycling in summer, and a bilingual culture that keeps it interesting.',
    tags: ['National capital', 'World-class museums', 'Bilingual city', 'Rideau Canal', 'Four seasons', 'English-speaking'],
    costPerMonth: { 0: 2600, 1: 3500, 2: 4500, 3: 6500 },
    housing: { buy: '~$520K', buyDesc: '2BR home in a desirable central neighborhood', rent: '~$2,100/mo' },
    compare: "Canada's most underrated capital — national museums all free to enter, the world's longest naturally frozen skating rink in winter, and costs well below Toronto or Vancouver.",
    page: 'destination-detail.html?id=ottawa',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Ottawa',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],
    settingMatch: [3, 1],
    paceMatch: [1, 0, 3],
    geographyOptions: [1],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 1, 3, 4],
  },

  {
    id: 'canmore',
    name: 'Canmore',
    country: 'Canada',
    region: 'Alberta, Canada',
    flag: '🇨🇦',
    photo: 'images/canmore.jpg',
    photoCap: 'Canadian Rockies, Canmore, Alberta',
    tagline: 'Banff National Park on your doorstep, the Canadian Rockies as your wallpaper, and a mountain town that somehow feels both adventurous and grounded.',
    tags: ['Canadian Rockies', 'Gateway to Banff', 'Four seasons', 'Mountain lifestyle', 'Outdoor mecca', 'English-speaking'],
    costPerMonth: { 0: 2800, 1: 3800, 2: 5000, 3: 7200 },
    housing: { buy: '~$680K', buyDesc: '2BR townhome near downtown', rent: '~$2,600/mo' },
    compare: "Banff's slightly more affordable neighbor — the same jaw-dropping Rocky Mountain scenery at a fraction of the park's tourist prices, with real community infrastructure and year-round outdoor access.",
    page: 'destination-detail.html?id=canmore',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Canmore',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],
    settingMatch: [2, 5],
    paceMatch: [0, 2],
    geographyOptions: [1],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [0, 4, 2, 3],
  },

  {
    id: 'charlottetown',
    name: 'Charlottetown',
    country: 'Canada',
    region: 'Prince Edward Island, Canada',
    flag: '🇨🇦',
    photo: 'images/charlottetown.jpg',
    photoCap: 'Charlottetown harbor, Prince Edward Island',
    tagline: 'Red sand beaches, lobster suppers, Anne of Green Gables country, and the kind of island unhurriedness that coastal living was always supposed to feel like.',
    tags: ['Island lifestyle', 'Red sand beaches', 'Maritime culture', 'Four seasons', 'Small city', 'English-speaking'],
    costPerMonth: { 0: 2000, 1: 2700, 2: 3500, 3: 5000 },
    housing: { buy: '~$360K', buyDesc: '2BR home near Victoria Park', rent: '~$1,500/mo' },
    compare: "Canada's most charming provincial capital — an island province with red sand beaches, world-famous lobster, and the most affordable housing of any Canadian city its size.",
    page: 'destination-detail.html?id=charlottetown',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Charlottetown',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],
    settingMatch: [0, 4, 5],
    paceMatch: [2, 3, 1],
    geographyOptions: [1],
    lifestyleMatch: [0, 1],
    priorityMatch: [1, 2, 5, 4],
  },

  {
    id: 'niagara-on-the-lake',
    name: 'Niagara-on-the-Lake',
    country: 'Canada',
    region: 'Ontario, Canada',
    flag: '🇨🇦',
    photo: 'images/niagara-on-the-lake.jpg',
    photoCap: 'Wine country, Niagara-on-the-Lake',
    tagline: 'Ontario wine country in a perfectly preserved 19th-century town — weekend theater, world-class Icewine, and the Falls twenty minutes away when guests visit.',
    tags: ['Ontario wine country', 'Historic small town', 'Shaw Festival theater', 'Lake Ontario views', 'Four seasons', 'English-speaking'],
    costPerMonth: { 0: 2400, 1: 3200, 2: 4200, 3: 6000 },
    housing: { buy: '~$520K', buyDesc: '2BR home in Old Town', rent: '~$2,000/mo' },
    compare: "One of Canada's most beautiful small towns — perfectly preserved Victorian streets, 30+ estate wineries within cycling distance, and the Shaw Festival theater for cultural programming year-round.",
    page: 'destination-detail.html?id=niagara-on-the-lake',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Niagara-on-the-Lake',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 2],
    settingMatch: [1, 4, 5],
    paceMatch: [2, 1, 3],
    geographyOptions: [1],
    lifestyleMatch: [1, 2],
    priorityMatch: [5, 2, 1, 3],
  },

  {
    id: 'nanaimo',
    name: 'Nanaimo',
    country: 'Canada',
    region: 'Vancouver Island, Canada',
    flag: '🇨🇦',
    photo: 'images/nanaimo.jpg',
    photoCap: 'Departure Bay, Nanaimo, Vancouver Island',
    tagline: 'Vancouver Island living at half the price of Victoria — ocean kayaking, old-growth rainforests, and a ferry ride from the city when you need it.',
    tags: ['Vancouver Island', 'Ocean lifestyle', 'Mild year-round', 'Old-growth forest', 'Affordable for BC', 'English-speaking'],
    costPerMonth: { 0: 2200, 1: 3000, 2: 3900, 3: 5600 },
    housing: { buy: '~$480K', buyDesc: '2BR home in a quiet residential neighborhood', rent: '~$1,900/mo' },
    compare: "Vancouver Island\'s most affordable gateway — the same mild Pacific climate and old-growth forests as Victoria at meaningfully lower costs, with the full island lifestyle.",
    page: 'destination-detail.html?id=nanaimo',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Nanaimo',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 1],
    settingMatch: [0, 2, 4],
    paceMatch: [0, 2, 1],
    geographyOptions: [1],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 4, 2, 1],
  },

  // ─── CARIBBEAN ─────────────────────────────────────────────────────

  {
    id: 'ambergris-caye',
    name: 'Ambergris Caye',
    country: 'Belize',
    region: 'Belize District, Belize',
    flag: '🇧🇿',
    photo: 'images/ambergris-caye.jpg',
    photoCap: 'Belize Barrier Reef, Ambergris Caye',
    tagline: 'English-speaking, US dollar, world-class reef diving — and a Belizean island life so easy it has a dedicated retirement visa program.',
    tags: ['English-speaking', 'USD economy', 'Barrier Reef diving', 'QRP visa program', 'Expat community', 'Caribbean island'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 2900, 3: 4500 },
    housing: { buy: '~$220K', buyDesc: '2BR condo near San Pedro Town', rent: '~$900/mo' },
    compare: "Belize's most popular expat island — English is the official language, the USD is widely accepted, the barrier reef starts a short swim from shore, and the QRP visa makes it one of the easiest Caribbean retirements to organize.",
    page: 'destination-detail.html?id=ambergris-caye',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 4],
    paceMatch: [0, 2, 3],
    geographyOptions: [3],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [0, 4, 2, 1],
  },

  {
    id: 'las-terrenas',
    name: 'Las Terrenas',
    country: 'Dominican Republic',
    region: 'Samaná Peninsula, Dominican Republic',
    flag: '🇩🇴',
    photo: 'images/las-terrenas.jpg',
    photoCap: 'Playa Cosón, Las Terrenas',
    tagline: 'A French-inflected Caribbean town on the Samaná Peninsula — coconut-lined beaches, whale-watching season, and a creative European expat scene.',
    tags: ['Caribbean beach town', 'French expat community', 'Whale watching', 'Tropical', 'Low cost of living', 'Fishing village charm'],
    costPerMonth: { 0: 1000, 1: 1500, 2: 2200, 3: 3500 },
    housing: { buy: '~$160K', buyDesc: '2BR villa near the beach', rent: '~$650/mo' },
    compare: "The Dominican Republic's most sophisticated beach town — a strong French expat community, some of the most beautiful beaches on the island, and a slower, more European vibe than Punta Cana.",
    page: 'destination-detail.html?id=las-terrenas',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Las%20Terrenas',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 4, 5],
    paceMatch: [2, 3, 1],
    geographyOptions: [3],
    lifestyleMatch: [0, 1],
    priorityMatch: [2, 0, 1, 4],
  },

  {
    id: 'barbados',
    name: 'Barbados',
    country: 'Barbados',
    region: 'Caribbean',
    flag: '🇧🇧',
    photo: 'images/barbados.jpg',
    photoCap: 'Crane Beach, Barbados',
    tagline: 'The Caribbean\'s most established English-speaking island — cricket, rum punch, pink sand beaches, and a Barbados Welcome Stamp that makes long stays easy.',
    tags: ['English-speaking', 'Pink sand beaches', 'Strong infrastructure', 'Caribbean culture', 'Welcome Stamp visa', 'Upscale expat scene'],
    costPerMonth: { 0: 2200, 1: 3000, 2: 4200, 3: 6500 },
    housing: { buy: '~$380K', buyDesc: '2BR home in Christ Church or St. James', rent: '~$1,600/mo' },
    compare: "The Caribbean's most polished island — English, stable democracy, excellent hospitals, and the Barbados Welcome Stamp long-stay visa, with an expat infrastructure that is been building for generations.",
    page: 'destination-detail.html?id=barbados',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 4],
    paceMatch: [2, 3, 0],
    geographyOptions: [3],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [1, 4, 2, 0],
  },

  {
    id: 'st-croix',
    name: 'St. Croix',
    country: 'US Virgin Islands',
    region: 'US Virgin Islands',
    flag: '🇻🇮',
    photo: 'images/st-croix.jpg',
    photoCap: 'Caribbean waters, St. Croix, USVI',
    tagline: 'All the Caribbean — turquoise water, reef snorkeling, rum culture — with the full rights and infrastructure of a US territory.',
    tags: ['US territory', 'No passport needed', 'Caribbean beaches', 'Medicare applies', 'Tax incentives', 'Laid-back lifestyle'],
    costPerMonth: { 0: 2000, 1: 2700, 2: 3600, 3: 5500 },
    housing: { buy: '~$320K', buyDesc: '2BR home in Christiansted area', rent: '~$1,400/mo' },
    compare: "The Caribbean's most underrated US territory — no passport, Medicare still applies, real Caribbean beaches and culture, and significant tax incentives for new residents under the Economic Development Commission program.",
    page: 'destination-detail.html?id=st-croix',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 4, 3],
    paceMatch: [2, 3, 0],
    geographyOptions: [0, 3],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [2, 1, 0, 4],
  },

  {
    id: 'turks-caicos',
    name: 'Turks & Caicos',
    country: 'Turks and Caicos Islands',
    region: 'British Overseas Territory, Caribbean',
    flag: '🇹🇨',
    photo: 'images/turks-caicos.jpg',
    photoCap: 'Grace Bay Beach, Providenciales',
    tagline: 'Consistently rated the world\'s best beach — Grace Bay\'s turquoise water is not an exaggeration, and the Permanent Residency by Investment program opens the door.',
    tags: ['World\'s best beach', 'USD economy', 'Ultra-clear water', 'Low crime', 'British territory', 'Upscale island living'],
    costPerMonth: { 0: 3000, 1: 4000, 2: 5500, 3: 8500 },
    housing: { buy: '~$550K', buyDesc: '2BR condo on Providenciales', rent: '~$2,500/mo' },
    compare: "Grace Bay has been voted the world's best beach more times than any other — the water genuinely looks the way it does in photos, and there is no income tax for residents.",
    page: 'destination-detail.html?id=turks-caicos',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Turks%20%26%20Caicos',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0],
    paceMatch: [2, 0, 3],
    geographyOptions: [3],
    lifestyleMatch: [2, 3],
    priorityMatch: [4, 0, 2, 1],
  },

  {
    id: 'grenada',
    name: 'Grenada',
    country: 'Grenada',
    region: 'Eastern Caribbean',
    flag: '🇬🇩',
    photo: 'images/grenada.jpg',
    photoCap: 'Grand Anse Beach, Grenada',
    tagline: 'The Spice Isle — nutmeg, cocoa, and a retiree-friendly island that\'s both genuinely beautiful and genuinely unhurried.',
    tags: ['The Spice Isle', 'Caribbean beaches', 'English-speaking', 'Lower cost for Caribbean', 'Friendly locals', 'Tropical rainforest interior'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 2800, 3: 4200 },
    housing: { buy: '~$200K', buyDesc: '2BR home near the main beach', rent: '~$900/mo' },
    compare: "One of the Caribbean's most affordable English-speaking islands — Grand Anse Beach ranks among the region's best, costs run significantly below Barbados, and it produces the world's finest nutmeg.",
    page: 'destination-detail.html?id=grenada',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Grenada',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 2, 5],
    paceMatch: [2, 0, 3],
    geographyOptions: [3],
    lifestyleMatch: [0, 1],
    priorityMatch: [2, 0, 4, 1],
  },

  {
    id: 'st-kitts',
    name: 'St. Kitts',
    country: 'Saint Kitts and Nevis',
    region: 'Leeward Islands, Caribbean',
    flag: '🇰🇳',
    photo: 'images/saint-kitts.jpg',
    photoCap: 'Southeast Peninsula, St. Kitts',
    tagline: 'A volcanic island with a UNESCO fortress, a narrow-gauge railway, and a citizenship by investment program that\'s been trusted by expats for 40 years.',
    tags: ['English-speaking', 'Volcanic landscape', 'UNESCO Brimstone Fortress', 'Citizenship by investment', 'Small island feel', 'Caribbean charm'],
    costPerMonth: { 0: 1600, 1: 2200, 2: 3200, 3: 5000 },
    housing: { buy: '~$280K', buyDesc: '2BR home near the capital or beach district', rent: '~$1,100/mo' },
    compare: "One of the Caribbean's most respected citizenship and residency programs — a UNESCO World Heritage fortress, a stunning volcanic interior, and a small-island intimacy that makes it easy to build real community.",
    page: 'destination-detail.html?id=st-kitts',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=St.%20Kitts',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 2, 4],
    paceMatch: [2, 3, 0],
    geographyOptions: [3],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [1, 2, 0, 5],
  },

  {
    id: 'cayman-islands',
    name: 'Cayman Islands',
    country: 'Cayman Islands',
    region: 'British Overseas Territory, Caribbean',
    flag: '🇰🇾',
    photo: 'images/cayman-islands.jpg',
    photoCap: 'Seven Mile Beach, Grand Cayman',
    tagline: 'Seven Mile Beach, zero income tax, and an island with the financial infrastructure to match its crystal-clear water.',
    tags: ['Zero income tax', 'Seven Mile Beach', 'USD economy', 'World-class diving', 'English-speaking', 'Upscale expat scene'],
    costPerMonth: { 0: 3500, 1: 4800, 2: 6500, 3: 9500 },
    housing: { buy: '~$750K', buyDesc: '2BR condo near Seven Mile Beach', rent: '~$3,000/mo' },
    compare: "The Caribbean's financial capital — zero income tax for residents, one of the world's best diving destinations, a stable British territory infrastructure, and Seven Mile Beach consistently ranked among the world's best.",
    page: 'destination-detail.html?id=cayman-islands',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Cayman%20Islands',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 3],
    paceMatch: [0, 3, 2],
    geographyOptions: [3],
    lifestyleMatch: [2, 3],
    priorityMatch: [0, 4, 1, 3],
  },

  // ─── MEXICO / LATIN AMERICA (additional) ──────────────────────────

  {
    id: 'playa-del-carmen',
    name: 'Playa del Carmen',
    country: 'Mexico',
    region: 'Quintana Roo, Mexico',
    flag: '🇲🇽',
    photo: 'images/playa-del-carmen.jpg',
    photoCap: 'Fifth Avenue and Caribbean coast, Playa del Carmen',
    tagline: 'A walkable Fifth Avenue, Caribbean turquoise at your doorstep, cenotes an hour inland, and a Riviera Maya lifestyle at a fraction of what it costs to visit.',
    tags: ['Caribbean beach', 'Walkable Fifth Avenue', 'Expat community', 'Cenote access', 'Warm year-round', 'Good infrastructure'],
    costPerMonth: { 0: 1300, 1: 1900, 2: 2700, 3: 4200 },
    housing: { buy: '~$220K', buyDesc: '2BR condo near 5th Ave', rent: '~$900/mo' },
    compare: "The Riviera Maya's most livable city — far more infrastructure and community than Tulum, better beaches and nightlife than Cancún, and cenote access that the rest of the world flies in for.",
    page: 'destination-detail.html?id=playa-del-carmen',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "5th Avenue Corridor & Centro", desc: "The walkable pedestrian spine of the city — restaurants, boutiques, access to the beach. The most tourist-adjacent neighborhood and the most in demand for short-term rentals. Long-term residents find it noisy but the convenience is real. Worth a full week before deciding whether the energy works for you year-round." },
      { name: "Playacar", desc: "The gated community south of the town center — all-inclusive resorts and private residential sections, good security, golf course, beach club access. The resort-living option within Playa. More expensive than the center but with a quieter, more controlled environment that many retirees specifically seek." },
      { name: "Calle 38 Norte & Colonia Centro Norte", desc: "The residential blocks north of the tourist center — more local, more affordable, still walkable to the beach and the 5th Avenue. Where long-term residents and expats who have found their footing in Playa tend to live once they move past the tourist-zone experience." },
    ],
    weatherMatch: [0],
    settingMatch: [0, 3],
    paceMatch: [3, 0, 2],
    geographyOptions: [2],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [0, 1, 4, 5],
  },

  {
    id: 'ajijic',
    name: 'Ajijic & Lake Chapala',
    country: 'Mexico',
    region: 'Jalisco, Mexico',
    flag: '🇲🇽',
    photo: 'images/ajijic.jpg',
    photoCap: 'Lake Chapala shore, Ajijic',
    tagline: 'Mexico\'s largest freshwater lake, perfect spring-like weather, and the largest American expat community in Mexico — all in a sleepy lakeside village.',
    tags: ['Lakeside village', 'Largest expat community in Mexico', 'Spring climate year-round', 'Arts scene', 'Low cost of living', 'Close to Guadalajara'],
    costPerMonth: { 0: 1000, 1: 1500, 2: 2200, 3: 3400 },
    housing: { buy: '~$200K', buyDesc: '2BR home with lake views', rent: '~$750/mo' },
    compare: "Mexico's most established expat destination — a lakeside village with permanent spring weather, Mexico's largest lake, and the deepest American expat infrastructure in the country, built over 70+ years.",
    page: 'destination-detail.html?id=ajijic',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 0],
    settingMatch: [1, 4],
    paceMatch: [2, 3, 1],
    geographyOptions: [2],
    lifestyleMatch: [0, 1],
    priorityMatch: [1, 2, 4, 5],
  },

  {
    id: 'cartagena',
    name: 'Cartagena',
    country: 'Colombia',
    region: 'Bolívar, Colombia',
    flag: '🇨🇴',
    photo: 'images/cartagena.jpg',
    photoCap: 'Walled City and Caribbean coast, Cartagena',
    tagline: 'A UNESCO Caribbean port city where bougainvillea spills over colonial walls and the cumbia plays until dawn — Colombia\'s most romantic city.',
    tags: ['UNESCO Walled City', 'Caribbean coast', 'Warm year-round', 'Colonial architecture', 'Vibrant nightlife', 'Growing expat scene'],
    costPerMonth: { 0: 1200, 1: 1800, 2: 2600, 3: 4000 },
    housing: { buy: '~$180K', buyDesc: '2BR apartment in the beach or old city district', rent: '~$750/mo' },
    compare: "Colombia's Caribbean crown jewel — a UNESCO walled city with one of the most photogenic old towns in the Americas, year-round tropical heat, and costs well below Medellín.",
    page: 'destination-detail.html?id=cartagena',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 3],
    paceMatch: [3, 1, 2],
    geographyOptions: [2],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 1, 0, 4],
  },

  {
    id: 'montevideo',
    name: 'Montevideo',
    country: 'Uruguay',
    region: 'Montevideo, Uruguay',
    flag: '🇺🇾',
    photo: 'images/montevideo.jpg',
    photoCap: 'Rambla coastal boulevard, Montevideo',
    tagline: 'South America\'s most progressive capital — a 22km coastal promenade, world-class asado culture, and a stability that makes Uruguay the Switzerland of the region.',
    tags: ['22km coastal rambla', 'Most stable country in LatAm', 'Mild four seasons', 'Wine & beef culture', 'Low crime', 'Strong expat scene'],
    costPerMonth: { 0: 1500, 1: 2100, 2: 3000, 3: 4600 },
    housing: { buy: '~$230K', buyDesc: '2BR apartment in a beachside residential neighborhood', rent: '~$950/mo' },
    compare: "South America's most underrated capital — Uruguay consistently ranks as Latin America's most stable, most democratic, and least corrupt country, with a sophisticated coastal city that punches well above its size.",
    page: 'destination-detail.html?id=montevideo',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 2],          // four seasons (primary — hot summers, cool winters), mild
    settingMatch: [0, 3],
    paceMatch: [2, 3, 1],
    geographyOptions: [2],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [2, 1, 5, 4],
  },

  {
    id: 'buenos-aires',
    name: 'Buenos Aires',
    country: 'Argentina',
    region: 'Buenos Aires, Argentina',
    flag: '🇦🇷',
    photo: 'images/buenos-aires.jpg',
    photoCap: 'La Boca and Palermo neighborhoods, Buenos Aires',
    tagline: 'Tango, Malbec, steak at midnight, and a European-style capital so large and layered that you could spend years still discovering it.',
    tags: ['Paris of South America', 'Tango culture', 'Mild four seasons', 'World-class restaurants', 'Massive arts scene', 'Very affordable right now'],
    costPerMonth: { 0: 900, 1: 1400, 2: 2000, 3: 3200 },
    housing: { buy: 'Variable (see note)', buyDesc: '2BR apartment in a desirable residential neighborhood', rent: '~$600/mo' },
    compare: "South America's most culturally rich city — world-class opera, tango culture, extraordinary steakhouses and wine, and due to Argentina's economic situation, currently among the most affordable major capitals on earth for dollar-holders.",
    page: 'destination-detail.html?id=buenos-aires',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 2],          // four seasons (primary — hot humid summers, cool winters), mild
    settingMatch: [3],
    paceMatch: [1, 3, 2],
    geographyOptions: [2],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 1, 3, 0],
  },

  {
    id: 'lake-atitlan',
    name: 'Lake Atitlán',
    country: 'Guatemala',
    region: 'Sololá, Guatemala',
    flag: '🇬🇹',
    photo: 'images/lake-atitlan.jpg',
    photoCap: 'Lake Atitlán and volcanic peaks, Guatemala',
    tagline: 'Aldous Huxley called it "the most beautiful lake in the world." The three volcanoes on its shore haven\'t changed. The cost of living still hasn\'t caught up.',
    tags: ['World\'s most beautiful lake', 'Volcanic scenery', 'Mild highland climate', 'Indigenous Mayan culture', 'Artists & writers community', 'Very affordable'],
    costPerMonth: { 0: 800, 1: 1200, 2: 1800, 3: 3000 },
    housing: { buy: '~$120K', buyDesc: '2BR home in one of the lakeside villages', rent: '~$500/mo' },
    compare: "One of the most spectacular natural settings in the Americas — a caldera lake ringed by three volcanoes, with indigenous Mayan villages, a global artistic community, and costs among the lowest on this entire list.",
    page: 'destination-detail.html?id=lake-atitlan',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Lake%20Atitl%C3%A1n',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2],
    settingMatch: [1, 2, 4],
    paceMatch: [2, 1],
    geographyOptions: [2],
    lifestyleMatch: [0, 1],
    priorityMatch: [2, 5, 3, 0],
  },

  {
    id: 'boquete',
    name: 'Boquete',
    country: 'Panama',
    region: 'Chiriquí, Panama',
    flag: '🇵🇦',
    photo: 'images/boquete.jpg',
    photoCap: 'Cloud forest above Boquete, Panama',
    tagline: 'Cloud forest coffee country at 4,000 feet — Panama\'s pensionado visa discounts, perpetual spring weather, and a hiking scene the whole expat world knows about.',
    tags: ['Cloud forest highlands', 'Famous Pensionado visa', 'Spring climate year-round', 'World-class coffee', 'Active expat community', 'USD economy'],
    costPerMonth: { 0: 1100, 1: 1700, 2: 2400, 3: 3800 },
    housing: { buy: '~$160K', buyDesc: '2BR home with mountain views', rent: '~$650/mo' },
    compare: "Panama's highland alternative to Panama City — a cloud forest town at 4,000 feet with perfect spring weather, the USD, and the same legendary Pensionado visa that makes Panama one of the easiest retirement destinations to navigate legally.",
    page: 'destination-detail.html?id=boquete',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 3],
    settingMatch: [2, 5, 4],
    paceMatch: [0, 2, 3],
    geographyOptions: [2],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 4, 2, 1],
  },

  // ─── EUROPE (additional) ───────────────────────────────────────────

  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    region: 'Catalonia, Spain',
    flag: '🇪🇸',
    photo: 'images/barcelona.jpg',
    photoCap: 'Gothic Quarter and La Sagrada Família, Barcelona',
    tagline: 'Gaudí\'s city — where the architecture is surreal, the food is world-class, the beaches are a 20-minute walk from the Gothic Quarter, and the lifestyle simply does not exist anywhere else.',
    tags: ['World-class architecture', 'Mediterranean beach city', 'Warm year-round', 'Culinary capital', 'Walkable neighborhoods', 'Cosmopolitan'],
    costPerMonth: { 0: 2200, 1: 3000, 2: 4200, 3: 6500 },
    housing: { buy: '~$420K', buyDesc: '2BR in a central residential neighborhood', rent: '~$1,700/mo' },
    compare: "One of Europe's most magnetic cities — Gaudí's buildings, the Boqueria market, La Barceloneta beach, and a food scene that has consistently produced Michelin stars for 30 years, at costs significantly below London or Paris.",
    page: 'destination-detail.html?id=barcelona',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Eixample', desc: "The modernist grid district at the center of the city — Gaudí buildings, wide boulevards, excellent transit. The most practical neighborhood for a new arrival and the most expensive. Most American expats who stay long-term start here." },
      { name: 'Gràcia', desc: "The neighborhood that feels like a village — narrow streets, squares with terrace cafés, local markets, a genuine community. Where people who have lived in Barcelona for a year tend to migrate toward." },
      { name: 'Poblenou & Sant Martí', desc: "The old industrial district turned creative quarter — more space, newer buildings, better value per square meter than Eixample. Direct beach access and a growing restaurant scene." },
    ],
    weatherMatch: [0, 2],
    settingMatch: [0, 3],
    paceMatch: [1, 3, 0, 2],
    geographyOptions: [4],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [5, 1, 0, 4],
  },

  {
    id: 'alicante',
    name: 'Alicante',
    country: 'Spain',
    region: 'Costa Blanca, Spain',
    flag: '🇪🇸',
    photo: 'images/alicante.jpg',
    photoCap: 'Postiguet Beach and castle, Alicante',
    tagline: '320 days of sun, a castle on the hill, palm-lined beach promenades, and a cost of living that remains among the lowest of any Mediterranean city.',
    tags: ['Costa Blanca', 'Very sunny', 'Beach & city', 'Most affordable Spanish coast', 'Large expat community', 'Good infrastructure'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 2900, 3: 4400 },
    housing: { buy: '~$200K', buyDesc: '2BR in a central or upscale residential neighborhood', rent: '~$850/mo' },
    compare: "Spain's sunniest and most affordable Mediterranean city — more sunshine than Valencia, better beaches than Madrid, and costs roughly half of Barcelona, with a well-established British and Northern European expat scene.",
    page: 'destination-detail.html?id=alicante',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Alicante',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Playa de San Juan & El Campello", desc: "The long beach strip north of the city — modern residential towers, a genuine coastal lifestyle, excellent infrastructure for retirees. One of the most popular areas for long-term international residents in the Costa Blanca. Good restaurants, easy transit to the city center, and the Mediterranean outside your door." },
      { name: "El Ensanche & Centro", desc: "The walkable city center — the castle hill above, the Explanada palm promenade below. More urban than the beach strip but with everything walkable. Prices are rising as Valencia-priced-out buyers discover Alicante. Still meaningfully more affordable than anywhere comparable on the Spanish coast." },
      { name: "San Vicente & Santa Barbara", desc: "The residential inland neighborhoods — more affordable, more local, good everyday services without the beach premium. Where most long-term Alicante residents actually live. An honest look at daily life in the city before committing to a beach-view premium." },
    ],
    weatherMatch: [0, 2],
    settingMatch: [0, 3],
    paceMatch: [2, 3, 0],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [4, 2, 1, 0],
  },

  {
    id: 'prague',
    name: 'Prague',
    country: 'Czech Republic',
    region: 'Bohemia, Czech Republic',
    flag: '🇨🇿',
    photo: 'images/prague.jpg',
    photoCap: 'Charles Bridge and Old Town, Prague',
    tagline: 'Arguably the most beautiful city in Europe — medieval towers, a river lined with baroque palaces, world-class opera for next to nothing, and a beer culture that\'s both serious and joyful.',
    tags: ['Most beautiful European city', 'Gothic & baroque architecture', 'Four seasons', 'World-class opera & music', 'Beer culture', 'Growing expat scene'],
    costPerMonth: { 0: 1700, 1: 2400, 2: 3400, 3: 5200 },
    housing: { buy: '~$300K', buyDesc: '2BR in a central residential neighborhood', rent: '~$1,200/mo' },
    compare: "Central Europe's most spectacular city — a completely intact medieval center with Gothic towers and baroque churches, world-class opera and classical music at a fraction of Western European prices, and a thriving expat community.",
    page: 'destination-detail.html?id=prague',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Vinohrady & Zizkov", desc: "The most popular neighborhoods for long-term expats — Art Nouveau apartment buildings, excellent restaurants and cafes, walkable to the center without being in it. Vinohrady is the more established and expensive; Zizkov is grittier, cheaper, and increasingly sought after by buyers who got priced out of Vinohrady." },
      { name: "Dejvice & Bubenec", desc: "The leafy diplomatic quarter northwest of the center — embassies, larger apartments, quieter streets, and a more international community. Popular with families and established expats who want space and greenery without sacrificing city access." },
      { name: "Karlin & Holesovice", desc: "The eastern neighborhoods undergoing the fastest transformation in the city — Karlin has risen dramatically in both price and quality over the past decade; Holesovice is where the arts scene and creative energy has moved. Where buyers who want value and upside tend to look." },
    ],
    weatherMatch: [1, 3],
    settingMatch: [3, 1],
    paceMatch: [1, 3, 2],
    geographyOptions: [4],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 1, 2, 0],
  },

  {
    id: 'budapest',
    name: 'Budapest',
    country: 'Hungary',
    region: 'Central Hungary',
    flag: '🇭🇺',
    photo: 'images/budapest.jpg',
    photoCap: 'Chain Bridge and Buda Castle, Budapest',
    tagline: 'A city split by the Danube — Buda\'s castle on one side, Pest\'s ruin bars and Art Nouveau grandeur on the other — with world-famous thermal baths in between.',
    tags: ['Grand thermal baths', 'Danube river city', 'Four seasons', 'Art Nouveau architecture', 'Ruin bar culture', 'Very affordable for Europe'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 2900, 3: 4500 },
    housing: { buy: '~$240K', buyDesc: '2BR in a central residential district', rent: '~$980/mo' },
    compare: "Central Europe's most dramatically beautiful capital — a Danube-split city with thermal baths, Art Nouveau grandeur, an extraordinary food scene, and costs roughly half of Vienna across the border.",
    page: 'destination-detail.html?id=budapest',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "District V & VII (Inner City & Jewish Quarter)", desc: "The historic center and the ruin bar district — the most atmospheric part of Budapest and the most in-demand for short-term rentals. Long-term residents find it noisy, but the architecture and walkability are genuinely exceptional. Worth a full week before deciding whether the energy suits daily life." },
      { name: "District II & XII (Buda Hills)", desc: "The residential hillside neighborhoods across the Danube — larger apartments, green surroundings, quieter streets, and the most established expat community in the city. More expensive than Pest but the quality of daily life is high and the views from the hills are worth it." },
      { name: "District IX & XI (South Pest & Buda Flatlands)", desc: "The more affordable residential alternatives — District IX around Ferencvaros has gentrified significantly, District XI offers good value near the technical university. Where buyers who want Budapest lifestyle at lower prices tend to look." },
    ],
    weatherMatch: [1, 3],          // four seasons (primary — cold winters -2°C avg Jan), cool/crisp
    settingMatch: [3, 1],
    paceMatch: [1, 3, 2],
    geographyOptions: [4],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 4, 1, 0],
  },

  {
    id: 'funchal',
    name: 'Funchal',
    country: 'Portugal',
    region: 'Madeira, Portugal',
    flag: '🇵🇹',
    photo: 'images/funchal.jpg',
    photoCap: 'Pico do Arieiro, Madeira',
    tagline: 'An island of eternal spring in the Atlantic — volcanic peaks, laurel forest hikes, levada walks, and a warmth that draws everyone from Churchill to modern retirees.',
    tags: ['Eternal spring climate', 'Volcanic island', 'Madeira wine', 'Levada walks', 'Atlantic island', 'Portuguese EU citizenship path'],
    costPerMonth: { 0: 1500, 1: 2100, 2: 3000, 3: 4600 },
    housing: { buy: '~$260K', buyDesc: '2BR apartment in a hillside residential neighborhood', rent: '~$1,000/mo' },
    compare: "Portugal's island paradise in the Atlantic — volcanic mountains and lush laurel forests, mild temperatures year-round, and lower costs than Lisbon or Porto, with the same access to Portugal's Non-Habitual Resident tax program.",
    page: 'destination-detail.html?id=funchal',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'São Martinho & Santo António', desc: "The most popular residential areas for expats and long-term residents — quieter than the city center, good supermarkets and services, better value per square meter. Most people who move to Funchal and stay end up here." },
      { name: 'Historic Center & Zona Velha', desc: "The character-rich old town — mosaic pavements, tile-fronted buildings, the famous cable car. Higher rents and weekend tourist noise, but the quality of daily life in the lanes around the Sé cathedral is genuinely hard to replicate." },
      { name: 'Marina & Lido Strip', desc: "The modern waterfront zone — good for a rental base while you explore the island, but most people who settle long-term migrate to quieter neighborhoods after a year." },
    ],
    weatherMatch: [2, 0],
    settingMatch: [2, 0, 4],
    paceMatch: [0, 2, 1],
    geographyOptions: [4],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [0, 4, 2, 5],
  },

  {
    id: 'krakow',
    name: 'Kraków',
    country: 'Poland',
    region: 'Lesser Poland, Poland',
    flag: '🇵🇱',
    photo: 'images/krakow.jpg',
    photoCap: 'Main Market Square and Cloth Hall, Kraków',
    tagline: 'Europe\'s most intact medieval market square, a royal castle, jazz clubs that run all night, and a cost of living that makes other European cities look expensive.',
    tags: ['Medieval old town', 'Royal Wawel Castle', 'Four seasons', 'Jazz & arts scene', 'Very affordable', 'University city'],
    costPerMonth: { 0: 1200, 1: 1700, 2: 2500, 3: 4000 },
    housing: { buy: '~$180K', buyDesc: '2BR in a central or riverside neighborhood', rent: '~$750/mo' },
    compare: "Europe's most affordable medieval city — a UNESCO old town with Europe's largest medieval market square, a thriving contemporary arts scene, and costs roughly a third of Prague at comparable quality of life.",
    page: 'destination-detail.html?id=krakow',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Krak%C3%B3w',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Stare Miasto & Kazimierz", desc: "The Old Town and the former Jewish quarter — one of the best-preserved medieval city centers in Europe, and Kazimierz is the cultural and nightlife hub that has attracted international residents for two decades. The most expensive part of Krakow but still remarkably affordable by Western European standards." },
      { name: "Podgorze & Zablocie", desc: "The south bank neighborhood across the Vistula — the most active gentrification zone in the city, with new restaurants, galleries, and converted industrial spaces. Where buyers who want Krakow value with upside tend to look. Prices are rising but still accessible." },
      { name: "Krowodrza & Bronowice", desc: "The residential western neighborhoods — quieter, more local, good transit connections to the center. Popular with academics and long-term residents who want neighborhood life without the tourist density of the Old Town or the nightlife energy of Kazimierz." },
    ],
    weatherMatch: [1, 3],
    settingMatch: [3, 1],
    paceMatch: [1, 3, 2],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [5, 1, 2, 3],
  },

  {
    id: 'tbilisi',
    name: 'Tbilisi',
    country: 'Georgia',
    region: 'Tbilisi, Georgia',
    flag: '🇬🇪',
    photo: 'images/tbilisi.jpg',
    photoCap: 'Old Town Tbilisi and Metekhi Church, Georgia',
    tagline: 'A Silk Road city where natural wine was invented, sulphur baths have been running for 500 years, and you can stay for a full year with zero visa requirements.',
    tags: ['Natural wine birthplace', 'Sulphur baths', '360-day visa-free for Americans', 'Four seasons', 'Thriving arts scene', 'Very affordable'],
    costPerMonth: { 0: 900, 1: 1400, 2: 2000, 3: 3200 },
    housing: { buy: '~$120K', buyDesc: '2BR apartment in a central or upscale neighborhood', rent: '~$500/mo' },
    compare: "One of Europe's most exciting emerging destinations — Americans can stay 365 days a year with no visa, Georgia invented natural wine 8,000 years ago, and the cost of living rivals Southeast Asia at roughly a third of Western European prices.",
    page: 'destination-detail.html?id=tbilisi',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 2],
    settingMatch: [3, 2],
    paceMatch: [1, 3, 2],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [5, 0, 1, 3],
  },

  {
    id: 'paphos',
    name: 'Paphos',
    country: 'Cyprus',
    region: 'Paphos, Cyprus',
    flag: '🇨🇾',
    photo: 'images/paphos.jpg',
    photoCap: 'Paphos coastline, Cyprus',
    tagline: 'Where Aphrodite was born — a Mediterranean island with 340 days of sun, EU membership, and a retirement visa program that\'s been welcoming British and American expats for decades.',
    tags: ['340 days of sunshine', 'EU member state', 'English widely spoken', 'Mediterranean beaches', 'Retirement visa', 'Low cost for Mediterranean'],
    costPerMonth: { 0: 1600, 1: 2200, 2: 3100, 3: 4800 },
    housing: { buy: '~$220K', buyDesc: '2BR apartment near the harbor', rent: '~$950/mo' },
    compare: "The Mediterranean island with the most sunshine — 340 sunny days a year, English as a widely-spoken second language (British colonial legacy), EU citizenship path, and a long-established expat scene that makes the logistics straightforward.",
    page: 'destination-detail.html?id=paphos',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Paphos',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Tala & Peyia Hills', desc: "The hillside villages above Paphos — panoramic views over Coral Bay, a strong established expat community, villas with pools at prices that feel reasonable compared to comparable Mediterranean alternatives. Where most long-term international residents end up." },
      { name: 'Universal & Chloraka', desc: "The residential neighborhoods between the old town and the sea — practical, walkable to services, popular with year-round residents. The most livable part of Paphos for daily life without the tourist noise of the waterfront." },
      { name: 'Kato Paphos Waterfront', desc: "The harbor area — the most tourist-adjacent but also the most convenient for restaurants and sea access. Good for a rental base while you scout the area; most buyers migrate to the hills once they know where they want to be." },
    ],
    weatherMatch: [0, 2],
    settingMatch: [0, 3, 4],
    paceMatch: [2, 3, 0],
    geographyOptions: [4],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [4, 2, 1, 0],
  },

  {
    id: 'valletta',
    name: 'Valletta',
    country: 'Malta',
    region: 'Valletta, Malta',
    flag: '🇲🇹',
    photo: 'images/valletta.jpg',
    photoCap: 'Grand Harbour, Valletta, Malta',
    tagline: 'Europe\'s smallest capital is also one of its most beautiful — a baroque UNESCO city on a Mediterranean island where English is an official language and the Grand Harbour never gets old.',
    tags: ['UNESCO Capital', 'English official language', 'EU member state', 'Mediterranean climate', 'Grand Harbour views', 'Malta Retirement Programme'],
    costPerMonth: { 0: 1700, 1: 2400, 2: 3400, 3: 5200 },
    housing: { buy: '~$260K', buyDesc: '2BR apartment in Sliema or St. Julian\'s', rent: '~$1,100/mo' },
    compare: "Europe's smallest and arguably most dramatic capital — a fortified baroque city on a Mediterranean island where English is co-official, the Grand Harbour is one of Europe's great views, and the Malta Retirement Programme offers a formal residency path.",
    page: 'destination-detail.html?id=valletta',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Valletta',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 3],
    paceMatch: [1, 2, 3],
    geographyOptions: [4],
    lifestyleMatch: [1, 2],
    priorityMatch: [5, 2, 1, 0],
  },

  {
    id: 'ljubljana',
    name: 'Ljubljana',
    country: 'Slovenia',
    region: 'Ljubljana, Slovenia',
    flag: '🇸🇮',
    photo: 'images/ljubljana.jpg',
    photoCap: 'Ljubljana Castle and Old Town bridges',
    tagline: 'Europe\'s greenest capital — a car-free medieval center, a castle on the hill, the Julian Alps an hour away, and an outdoor culture that puts the rest of Europe to shame.',
    tags: ['Car-free old town', 'Green capital of Europe', 'Four seasons', 'Julian Alps access', 'Growing arts scene', 'Safe & walkable'],
    costPerMonth: { 0: 1600, 1: 2200, 2: 3100, 3: 4800 },
    housing: { buy: '~$260K', buyDesc: '2BR in the city center or a residential neighborhood', rent: '~$1,050/mo' },
    compare: "One of Europe's most livable capitals — a car-free medieval center, Europe's greenest city credentials, Lake Bled and the Triglav mountains an hour away, and costs well below neighboring Austria or Italy.",
    page: 'destination-detail.html?id=ljubljana',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 2],
    settingMatch: [3, 1, 2],
    paceMatch: [0, 1, 2],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [4, 0, 5, 2],
  },

  {
    id: 'kotor',
    name: 'Kotor',
    country: 'Montenegro',
    region: 'Bay of Kotor, Montenegro',
    flag: '🇲🇪',
    photo: 'images/kotor.jpg',
    photoCap: 'Walled city of Kotor and Bay of Kotor, Montenegro',
    tagline: 'A medieval walled city inside a fjord-like bay — Montenegro\'s hidden gem where the Adriatic meets the mountains and everything still feels genuinely discovered.',
    tags: ['Walled medieval city', 'Fjord bay setting', 'Adriatic coast', 'Warm year-round', 'Emerging destination', 'Very affordable'],
    costPerMonth: { 0: 1100, 1: 1600, 2: 2400, 3: 3800 },
    housing: { buy: '~$160K', buyDesc: '2BR apartment in the bay area', rent: '~$700/mo' },
    compare: "Europe's newest emerging retirement destination — a UNESCO walled city inside a dramatic fjord, the dramatic Adriatic coast, costs roughly half of Croatia's Dalmatian coast next door, and a Montenegro citizenship-by-investment program.",
    page: 'destination-detail.html?id=kotor',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 2, 3],
    paceMatch: [0, 2, 1],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 5, 2, 4],
  },

  {
    id: 'abruzzo',
    name: 'Abruzzo',
    country: 'Italy',
    region: 'Abruzzo, Italy',
    flag: '🇮🇹',
    photo: 'images/abruzzo.jpg',
    photoCap: 'Hill villages and Apennine mountains, Abruzzo',
    tagline: 'Italy at half the price of Tuscany — medieval hill villages, Apennine ski slopes, Adriatic beaches, and some of Italy\'s least-discovered wine country.',
    tags: ['Medieval hill villages', 'Mountains & beaches', 'Italy\'s best kept secret', 'Very affordable for Italy', 'Outdoor lifestyle', 'Authentic Italian life'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 2900, 3: 4500 },
    housing: { buy: '~$140K', buyDesc: 'Renovated 2BR in a coastal or hilltop town', rent: '~$650/mo' },
    compare: "Italy's most affordable region — medieval hill towns, ski slopes in the Apennines, Adriatic beaches within 45 minutes, and costs roughly half of Tuscany or Rome, with some of the best pasta you have never heard of.",
    page: 'destination-detail.html?id=abruzzo',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 2],
    settingMatch: [2, 0, 5],
    paceMatch: [2, 0, 1],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [2, 5, 4, 0],
  },

  // ─── ASIA (additional) ─────────────────────────────────────────────

  {
    id: 'hua-hin',
    name: 'Hua Hin',
    country: 'Thailand',
    region: 'Prachuap Khiri Khan, Thailand',
    flag: '🇹🇭',
    photo: 'images/hua-hin.jpg',
    photoCap: 'Hua Hin beach and night market, Thailand',
    tagline: 'Thailand\'s royal resort town — a more refined alternative to Pattaya, a quieter pace than Bangkok, and a golf-and-beach lifestyle that has attracted Thai royalty for a century.',
    tags: ['Thai royal resort town', 'Beach lifestyle', 'Warm year-round', 'Golf mecca', 'Easy Bangkok access', 'Long-term expat community'],
    costPerMonth: { 0: 850, 1: 1300, 2: 1900, 3: 3100 },
    housing: { buy: '~$110K', buyDesc: '2BR condo near the beach', rent: '~$500/mo' },
    compare: "Thailand's most established resort town — quieter and more elegant than Pattaya, with 100 years of Thai royal family history, world-class golf courses, and a train to Bangkok for when you need the city.",
    page: 'destination-detail.html?id=hua-hin',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Hua%20Hin',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 4],
    paceMatch: [2, 0, 3],
    geographyOptions: [6],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [4, 2, 0, 1],
  },

  {
    id: 'kuala-lumpur',
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    region: 'Kuala Lumpur, Malaysia',
    flag: '🇲🇾',
    photo: 'images/kuala-lumpur.jpg',
    photoCap: 'Petronas Towers and city skyline, Kuala Lumpur',
    tagline: 'A world-class cosmopolitan city with the cost of a small one — Petronas Towers, incredible street food, English-speaking, and the Malaysia My Second Home visa literally built for retirees.',
    tags: ['Modern Asian metropolis', 'English widely spoken', 'MM2H visa for retirees', 'World-class food', 'Excellent healthcare', 'Tropical'],
    costPerMonth: { 0: 1100, 1: 1700, 2: 2500, 3: 4000 },
    housing: { buy: '~$150K', buyDesc: '2BR condo in a popular expat neighborhood', rent: '~$650/mo' },
    compare: "Asia's most underrated major city for retirees — English is widely spoken, the Malaysia My Second Home program is specifically designed for long-term retirement stays, and the food scene (Malay, Chinese, Indian, and fusion) rivals any city in the world.",
    page: 'destination-detail.html?id=kuala-lumpur',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Kuala%20Lumpur',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Mont Kiara & Dutamas", desc: "The primary expat enclave — international schools, Western restaurants, high-specification condos, and an English-speaking community. The most practical place to land as a new arrival and the most expensive. Where most American expats in KL start and where families tend to stay." },
      { name: "KLCC & Bukit Bintang", desc: "The city center around the Petronas Towers and the main shopping and entertainment corridor — walkable, central, spectacular skyline. More urban and less residential than Mont Kiara but excellent for buyers who want city energy and transit access." },
      { name: "Bangsar & Damansara Heights", desc: "The established upscale residential neighborhoods south of the city center — good restaurants, local feel, excellent healthcare access. Popular with long-term expats who want to live more like Kuala Lumpur residents and less like they are in an expat bubble." },
    ],
    weatherMatch: [0],
    settingMatch: [3],
    paceMatch: [1, 3, 0],
    geographyOptions: [6],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 4, 1, 0],
  },

  {
    id: 'taipei',
    name: 'Taipei',
    country: 'Taiwan',
    region: 'Taipei, Taiwan',
    flag: '🇹🇼',
    photo: 'images/taipei.jpg',
    photoCap: 'Taipei 101 and city skyline, Taiwan',
    tagline: 'Asia\'s most livable city — extraordinary night markets, mountain hiking from the city center, world-class public transit, and a safety record that makes it one of the most comfortable cities on earth.',
    tags: ['Safest major Asian city', 'Night market culture', 'Mountain access from city', 'Excellent public transit', 'World-class healthcare', 'Subtropical climate'],
    costPerMonth: { 0: 1200, 1: 1800, 2: 2600, 3: 4100 },
    housing: { buy: '~$280K', buyDesc: '2BR apartment in a central upscale district', rent: '~$1,100/mo' },
    compare: "Consistently ranked Asia's most livable city — extraordinary safety record, world-class healthcare, night markets that would take months to fully explore, and hiking trails that begin at MRT stations.",
    page: 'destination-detail.html?id=taipei',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 0],          // mild/temperate (primary — cool winters ~15°C), warm humid summers
    settingMatch: [3, 2],
    paceMatch: [1, 3, 0],
    geographyOptions: [6],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 4, 1, 2],
  },

  {
    id: 'hoi-an',
    name: 'Hội An',
    country: 'Vietnam',
    region: 'Quảng Nam, Vietnam',
    flag: '🇻🇳',
    photo: 'images/hoi-an.jpg',
    photoCap: 'Ancient Town lanterns, Hội An',
    tagline: 'A UNESCO ancient town where paper lanterns reflect on the river at night, the tailor shops turn around bespoke clothing in 24 hours, and the food is among the best in all of Southeast Asia.',
    tags: ['UNESCO Ancient Town', 'Lantern-lit streets', 'World-class Vietnamese cuisine', 'Bespoke tailoring', 'Beach nearby', 'Slow pace'],
    costPerMonth: { 0: 700, 1: 1100, 2: 1700, 3: 2800 },
    housing: { buy: 'Restricted for foreigners', buyDesc: 'Long-term house rental', rent: '~$400/mo' },
    compare: "Vietnam's most atmospheric small town — a UNESCO-listed Ancient Town where lanterns light the streets at night, cooking classes fill the mornings, and the cost of living is among the lowest on this entire list.",
    page: 'destination-detail.html?id=hoi-an',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=H%E1%BB%99i%20An',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 4, 1],
    paceMatch: [2, 1, 3],
    geographyOptions: [6],
    lifestyleMatch: [0, 1],
    priorityMatch: [5, 2, 4, 1],
  },

  {
    id: 'galle',
    name: 'Galle',
    country: 'Sri Lanka',
    region: 'Southern Province, Sri Lanka',
    flag: '🇱🇰',
    photo: 'images/galle.jpg',
    photoCap: 'Galle Fort and Indian Ocean, Sri Lanka',
    tagline: 'A Dutch colonial fort city on the southern tip of Sri Lanka — boutique hotels in 400-year-old buildings, whale-watching season, and an island that feels genuinely undiscovered.',
    tags: ['Dutch colonial fort', 'Indian Ocean coast', 'Warm year-round', 'Emerging expat scene', 'Whale watching', 'Very affordable'],
    costPerMonth: { 0: 700, 1: 1100, 2: 1700, 3: 2800 },
    housing: { buy: '~$130K', buyDesc: '2BR home near a popular beach town', rent: '~$450/mo' },
    compare: "Sri Lanka's most atmospheric coastal city — a UNESCO Dutch fort town on the Indian Ocean, with some of the world's best whale-watching just offshore and costs among the lowest of any destination in this list.",
    page: 'destination-detail.html?id=galle',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Galle',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 3, 4],
    paceMatch: [2, 0, 1],
    geographyOptions: [6],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 2, 5, 4],
  },

  {
    id: 'cebu',
    name: 'Cebu',
    country: 'Philippines',
    region: 'Cebu, Philippines',
    flag: '🇵🇭',
    photo: 'images/cebu.jpg',
    photoCap: 'Mactan Island and Cebu coast, Philippines',
    tagline: 'The Philippines\' most livable city — English spoken everywhere, some of the clearest diving water in Asia, a Special Retiree\'s Resident Visa, and an island-hopping scene you\'d pay thousands to visit on vacation.',
    tags: ['English official language', 'SRRV visa for retirees', 'Island hopping', 'World-class diving', 'Warm year-round', 'Very affordable'],
    costPerMonth: { 0: 900, 1: 1400, 2: 2000, 3: 3200 },
    housing: { buy: '~$130K', buyDesc: '2BR condo in a central residential area', rent: '~$500/mo' },
    compare: "The Philippines' most established expat city — English is an official language, the SRRV retirement visa is one of Asia's most generous, and the Visayas island chain surrounding Cebu is world-class diving and island-hopping territory.",
    page: 'destination-detail.html?id=cebu',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Cebu',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 3],
    paceMatch: [3, 0, 2],
    geographyOptions: [6],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 1, 4, 2],
  },

  // ─── AUSTRALIA / NEW ZEALAND ───────────────────────────────────────

  {
    id: 'gold-coast',
    name: 'Gold Coast',
    country: 'Australia',
    region: 'Queensland, Australia',
    flag: '🇦🇺',
    photo: 'images/gold-coast.jpg',
    photoCap: 'Surfers Paradise Beach, Gold Coast',
    tagline: 'The Aussie dream made real — 57km of white beach, 300 days of sunshine, world-class healthcare, and a lifestyle that puts outdoor living at the center of everything.',
    tags: ['57km of beaches', 'Warm & sunny', 'Outdoor lifestyle', 'World-class healthcare', 'English-speaking', 'Modern city'],
    costPerMonth: { 0: 3200, 1: 4200, 2: 5500, 3: 8000 },
    housing: { buy: '~$620K', buyDesc: '2BR apartment near the beach', rent: '~$2,400/mo' },
    compare: "Australia's beach capital — 57km of uninterrupted white sand, universal healthcare (with residency), and an outdoor lifestyle that genuinely shapes daily life, not just weekends.",
    page: 'destination-detail.html?id=gold-coast',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Gold%20Coast',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],          // warm/sunny, mild
    settingMatch: [0, 3],          // beach, city
    paceMatch: [0, 3, 2],          // active, social, relaxed
    geographyOptions: [5],          // Australia/NZ
    lifestyleMatch: [1, 2, 3],     // comfortable, upscale, luxury
    priorityMatch: [4, 0, 1, 2],   // health, adventure, community, peace
  },

  {
    id: 'nelson-nz',
    name: 'Nelson',
    country: 'New Zealand',
    region: 'South Island, New Zealand',
    flag: '🇳🇿',
    photo: 'images/nelson-nz.jpg',
    photoCap: 'Tasman Bay coastline, Nelson NZ',
    tagline: 'New Zealand\'s sunniest city — where golden beaches meet apple orchards, and the Marlborough wine country is an hour away.',
    tags: ['Sunniest city in NZ', 'Arts & crafts community', 'Coastal & mountains', 'World-class hiking', 'Clean & safe', 'English-speaking'],
    costPerMonth: { 0: 2800, 1: 3800, 2: 5000, 3: 7200 },
    housing: { buy: '~$550K', buyDesc: '2BR home near the waterfront', rent: '~$2,200/mo' },
    compare: "New Zealand's sunniest and most artistic city — gateway to Abel Tasman National Park, Marlborough wine country, and some of the southern hemisphere's most spectacular hiking.",
    page: 'destination-detail.html?id=nelson-nz',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-nelson.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 1],          // mild/temperate, some seasons
    settingMatch: [0, 2, 4],       // coastal, mountains, small town
    paceMatch: [0, 1, 2],          // active, creative, relaxed
    geographyOptions: [5],          // Australia/NZ
    lifestyleMatch: [1, 2],        // comfortable, upscale
    priorityMatch: [0, 4, 5, 2],   // adventure, health, culture/arts, peace
  },

  {
    id: 'byron-bay',
    name: 'Byron Bay',
    country: 'Australia',
    region: 'New South Wales, Australia',
    flag: '🇦🇺',
    photo: 'images/byron-bay.jpg',
    photoCap: 'Cape Byron and lighthouse, Byron Bay NSW',
    tagline: 'Australia\'s most magnetic beach town — a creative, wellness-first culture, the country\'s most easterly lighthouse, and a laid-back pace that has been pulling people off the corporate treadmill for decades.',
    tags: ['Iconic beach town', 'Wellness & yoga culture', 'Warm year-round', 'Arts & music scene', 'Hinterland rainforest', 'Strong community feel'],
    costPerMonth: { 0: 3000, 1: 4000, 2: 5200, 3: 7500 },
    housing: { buy: '~$820K', buyDesc: '2BR home near the beach', rent: '~$2,800/mo' },
    compare: "Australia's most beloved alternative lifestyle destination — a creative and wellness-focused community, world-class surf breaks, lush hinterland rainforest behind the town, and a social culture that makes it easy to build a new community.",
    page: 'destination-detail.html?id=byron-bay',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Byron%20Bay',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 5, 4],
    paceMatch: [2, 0, 1],
    geographyOptions: [5],
    lifestyleMatch: [1, 2],
    priorityMatch: [4, 2, 1, 0],
  },

  {
    id: 'adelaide',
    name: 'Adelaide',
    country: 'Australia',
    region: 'South Australia, Australia',
    flag: '🇦🇺',
    photo: 'images/adelaide.jpg',
    photoCap: 'Adelaide city centre and River Torrens',
    tagline: 'Australia\'s festival city and wine capital — McLaren Vale and the Barossa Valley on your doorstep, beaches twenty minutes from downtown, and costs well below Sydney or Melbourne.',
    tags: ['Festival city', 'Barossa & McLaren Vale wine', 'Beach access', 'Most affordable major Australian city', 'Walkable city', 'World-class food scene'],
    costPerMonth: { 0: 2800, 1: 3700, 2: 4900, 3: 7000 },
    housing: { buy: '~$540K', buyDesc: '2BR home in a beachside suburb or central neighborhood', rent: '~$2,100/mo' },
    compare: "Australia's most underrated city — the Barossa Valley and McLaren Vale wine regions within an hour, Glenelg beach twenty minutes from the CBD, and costs roughly 20–30% below Sydney or Melbourne.",
    page: 'destination-detail.html?id=adelaide',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Adelaide',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [3, 0, 5],
    paceMatch: [1, 3, 2],
    geographyOptions: [5],
    lifestyleMatch: [1, 2],
    priorityMatch: [5, 4, 1, 2],
  },

  {
    id: 'hobart',
    name: 'Hobart',
    country: 'Australia',
    region: 'Tasmania, Australia',
    flag: '🇦🇺',
    photo: 'images/hobart.jpg',
    photoCap: 'Salamanca Place and Mount Wellington, Hobart',
    tagline: 'A compact harbour city at the edge of the world — MONA museum, Salamanca market, Mount Wellington hiking from the city, and a cool-climate creativity that gives Hobart a personality entirely its own.',
    tags: ['MONA museum & arts', 'Cool mountain backdrop', 'Salamanca Market', 'Harbour city', 'Affordable for Australia', 'Emerging food scene'],
    costPerMonth: { 0: 2400, 1: 3200, 2: 4200, 3: 6200 },
    housing: { buy: '~$480K', buyDesc: '2BR home in a historic or waterfront neighborhood', rent: '~$1,900/mo' },
    compare: "Australia's most surprising city — home to MONA, one of the world's most talked-about art museums, a legendary Saturday market, direct trailhead access to wilderness from the city centre, and costs well below the mainland capitals.",
    page: 'destination-detail.html?id=hobart',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Hobart',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Battery Point & Sandy Bay', desc: "The heritage heart of the city — Victorian cottages, harbor views, Salamanca Market a short walk away. One of the best-preserved historic neighborhoods in Australia and priced accordingly." },
      { name: 'Lindisfarne & Rosny', desc: "The eastern shore across the Derwent — a marina, a village shopping strip, river views, and prices meaningfully lower than the western shore. Consistently the best value neighborhood in greater Hobart." },
      { name: 'North Hobart & Glebe', desc: "The inner-city alternative — a genuine restaurant and bar strip on Elizabeth Street, proximity to the hospital and university, walkable character with a mix of period homes and newer apartments." },
    ],
    weatherMatch: [1, 3],
    settingMatch: [2, 0, 3],
    paceMatch: [1, 0, 2],
    geographyOptions: [5],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 0, 2, 4],
  },

  {
    id: 'cairns',
    name: 'Cairns',
    country: 'Australia',
    region: 'Queensland, Australia',
    flag: '🇦🇺',
    photo: 'images/cairns.jpg',
    photoCap: 'Great Barrier Reef, Cairns, Queensland',
    tagline: 'The Great Barrier Reef on one side, the Daintree Rainforest on the other — Cairns sits between two of the world\'s great natural wonders, and somehow still feels unhurried.',
    tags: ['Great Barrier Reef access', 'Daintree Rainforest', 'Tropical year-round', 'Outdoor adventure hub', 'Relaxed pace', 'Affordable for Queensland'],
    costPerMonth: { 0: 2400, 1: 3200, 2: 4200, 3: 6000 },
    housing: { buy: '~$420K', buyDesc: '2BR home in a quiet residential suburb', rent: '~$1,700/mo' },
    compare: "One of the world's great natural access points — 30 minutes from the Great Barrier Reef, 45 minutes from the Daintree, the world's oldest living rainforest, and a genuinely tropical pace of life at costs well below the Gold Coast.",
    page: 'destination-detail.html?id=cairns',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Cairns',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 2, 5],
    paceMatch: [0, 2, 3],
    geographyOptions: [5],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 4, 2, 1],
  },

  {
    id: 'sunshine-coast',
    name: 'Sunshine Coast',
    country: 'Australia',
    region: 'Queensland, Australia',
    flag: '🇦🇺',
    photo: 'images/sunshine-coast.jpg',
    photoCap: 'Noosa Heads, Sunshine Coast Queensland',
    tagline: 'Queensland\'s most livable stretch of coast — Noosa\'s national park walks, patrolled surf beaches, a genuine food culture, and an hour from Brisbane when city life calls.',
    tags: ['Noosa National Park', 'Patrolled surf beaches', 'Warm year-round', 'Hinterland villages', 'Good food scene', 'Affordable for Queensland coast'],
    costPerMonth: { 0: 2600, 1: 3500, 2: 4600, 3: 6800 },
    housing: { buy: '~$600K', buyDesc: '2BR home in a hinterland village or coastal suburb', rent: '~$2,300/mo' },
    compare: "Queensland coast living without Gold Coast prices — Noosa Heads National Park walks, excellent surf beaches, a thriving food scene from Montville to Noosaville, and an easy hour's drive to Brisbane.",
    page: 'destination-detail.html?id=sunshine-coast',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-sunshine-coast.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 5, 2],
    paceMatch: [0, 2, 3],
    geographyOptions: [5],
    lifestyleMatch: [1, 2],
    priorityMatch: [4, 0, 2, 1],
  },

  {
    id: 'queenstown-nz',
    name: 'Queenstown',
    country: 'New Zealand',
    region: 'South Island, New Zealand',
    flag: '🇳🇿',
    photo: 'images/queenstown-nz.jpg',
    photoCap: 'The Remarkables and Lake Wakatipu, Queenstown',
    tagline: 'The adventure capital of the world — bungee jumping, ski fields, lake cruises, and fjords within reach, in a setting so dramatic it still doesn\'t look quite real.',
    tags: ['Adventure capital of the world', 'Ski & snow in winter', 'Lake & mountain setting', 'Four seasons', 'Outdoor lifestyle', 'Tourism infrastructure'],
    costPerMonth: { 0: 3200, 1: 4300, 2: 5600, 3: 8000 },
    housing: { buy: '~$780K', buyDesc: '2BR home or apartment in a lakeside suburb', rent: '~$2,800/mo' },
    compare: "New Zealand's most dramatic setting — The Remarkables mountain range, Lake Wakatipu, and Fiordland National Park within reach, in a town built around outdoor adventure across every season.",
    page: 'destination-detail.html?id=queenstown-nz',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-queenstown.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],
    settingMatch: [2, 1],
    paceMatch: [0, 2],
    geographyOptions: [5],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [0, 4, 2, 3],
  },

  {
    id: 'tauranga',
    name: 'Tauranga',
    country: 'New Zealand',
    region: 'Bay of Plenty, New Zealand',
    flag: '🇳🇿',
    photo: 'images/tauranga.jpg',
    photoCap: 'Mount Maunganui beach, Tauranga',
    tagline: 'New Zealand\'s sunniest and fastest-growing retirement city — a harbour, Mount Maunganui\'s surf beach, kiwifruit country, and a warm community that keeps drawing Kiwis back from Auckland.',
    tags: ['Sunniest NZ city', 'Mount Maunganui beach', 'Harbour lifestyle', 'Warm year-round for NZ', 'Growing expat & retiree community', 'English-speaking'],
    costPerMonth: { 0: 2600, 1: 3500, 2: 4600, 3: 6600 },
    housing: { buy: '~$560K', buyDesc: '2BR home in a beachside suburb', rent: '~$2,100/mo' },
    compare: "New Zealand's fastest-growing retirement destination — the sunniest city in the country, a world-class surf beach at Mount Maunganui, and a harbour city that consistently attracts New Zealanders seeking a warmer, more relaxed pace.",
    page: 'destination-detail.html?id=tauranga',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-tauranga.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Mount Maunganui', desc: "The beach strip at the harbor entrance — surf beach, the Mount walking track, excellent cafés. The most desirable address in the Bay of Plenty and the most expensive. Worth visiting first to understand what the Tauranga lifestyle looks like at its best." },
      { name: 'Bethlehem & The Lakes', desc: "The established retirement-friendly suburbs west of the city center — good shopping, multiple retirement villages, easy access to the hospital. Where most retirees who have done their research end up." },
      { name: 'Papamoa', desc: "The long beach suburb stretching south — newer development, more space, lower prices than the Mount, and direct beach access. A quieter lifestyle with good everyday services." },
    ],
    weatherMatch: [2, 0],
    settingMatch: [0, 1, 4],
    paceMatch: [2, 0, 3],
    geographyOptions: [5],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [4, 2, 1, 0],
  },

  {
    id: 'wanaka',
    name: 'Wānaka',
    country: 'New Zealand',
    region: 'Otago, New Zealand',
    flag: '🇳🇿',
    photo: 'images/wanaka.jpg',
    photoCap: 'Lake Wānaka and Mount Aspiring, New Zealand',
    tagline: 'Queenstown without the crowds — a glacial lake town in the Southern Alps where the hiking trails start at the waterfront and the pace of life is deliberately, beautifully slow.',
    tags: ['Glacial lake town', 'Southern Alps', 'Four seasons', 'World-class hiking', 'Small mountain community', 'English-speaking'],
    costPerMonth: { 0: 2800, 1: 3700, 2: 4900, 3: 7000 },
    housing: { buy: '~$680K', buyDesc: '2BR home near the lake', rent: '~$2,400/mo' },
    compare: "Queenstown's quieter, more intimate neighbour — the same jaw-dropping Southern Alps scenery and world-class ski fields, in a town that is deliberately kept its small-community feel and slower pace.",
    page: 'destination-detail.html?id=wanaka',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-wanaka.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],
    settingMatch: [1, 2, 4],
    paceMatch: [0, 2, 1],
    geographyOptions: [5],
    lifestyleMatch: [1, 2],
    priorityMatch: [0, 2, 4, 3],
  },

  // ─── FRANCE ────────────────────────────────────────────────────────

  {
    id: 'nice',
    name: 'Nice',
    country: 'France',
    region: 'Côte d\'Azur, France',
    flag: '🇫🇷',
    photo: 'images/nice.jpg',
    photoCap: 'Promenade des Anglais and Baie des Anges, Nice',
    tagline: 'The crown jewel of the French Riviera — Belle Époque promenades, Mediterranean beaches, and a climate so perfect the British aristocracy named a road after their habit of walking in it.',
    tags: ['French Riviera', 'Mediterranean beach city', 'Warm & sunny', 'Art museums', 'Easy travel hub', 'Strong expat scene'],
    costPerMonth: { 0: 2200, 1: 3200, 2: 4500, 3: 6800 },
    housing: { buy: '~$380K', buyDesc: '2BR apartment in a central or hilltop neighborhood', rent: '~$1,600/mo' },
    compare: "The Mediterranean at its most glamorous — Nice sits between Monaco and Cannes with its own world-class art scene (Matisse and Chagall museums), a famous open-air market on the Cours Saleya, and more sunshine than almost anywhere in France.",
    page: 'destination-detail.html?id=nice',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=nice',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Vieux-Nice & the Old Town", desc: "The Baroque Italian-influenced old quarter — daily market on the Cours Saleya, narrow painted streets, the best food in the city. Noisy and tourist-adjacent but genuinely special. Where you want to spend your first week to understand what Nice is." },
      { name: "Carre d'Or & Mont Boron", desc: "The premium addresses — the Golden Square around Avenue de la Californie for grand Belle Epoque apartments, Mont Boron for hillside villas with sea views. The most expensive real estate on the French Riviera outside Monaco. Worth knowing even if you will not buy here, to calibrate what you are comparing against." },
      { name: "Liberation & Carre de Riquier", desc: "The residential neighborhoods north and east of the center — more affordable than the seafront, genuine local markets, good transit. Where long-term Nice residents live when they want real neighborhood life without the tourist-zone pricing." },
    ],
    weatherMatch: [0, 2],           // warm/sunny, mild
    settingMatch: [0, 3],            // beach, city
    paceMatch: [1, 3, 2],            // creative, social, relaxed
    geographyOptions: [4],            // Europe
    lifestyleMatch: [1, 2, 3],       // comfortable, upscale, luxury
    priorityMatch: [5, 4, 1, 0],     // culture/arts, health, community, adventure
  },

  {
    id: 'bordeaux',
    name: 'Bordeaux',
    country: 'France',
    region: 'Nouvelle-Aquitaine, France',
    flag: '🇫🇷',
    photo: 'images/bordeaux.jpg',
    photoCap: 'Place de la Bourse and the Garonne, Bordeaux',
    tagline: 'The world\'s wine capital remade itself into one of France\'s most livable cities — grand 18th-century limestone architecture, the Garonne River, and 300 wine châteaux within an hour\'s drive.',
    tags: ['Wine capital of the world', 'UNESCO 18th-century city', 'Mild year-round', 'World-class cuisine', 'River city', 'Walkable'],
    costPerMonth: { 0: 2000, 1: 2800, 2: 4000, 3: 6000 },
    housing: { buy: '~$340K', buyDesc: '2BR apartment in a central riverside neighborhood', rent: '~$1,400/mo' },
    compare: "France's most transformed city — once dismissed as 'sleeping beauty,' Bordeaux is now ranked among Europe's most livable cities, with an entire UNESCO-listed 18th-century waterfront, a wine culture that draws visitors from every continent, and direct TGV connections to Paris in 2 hours.",
    page: 'destination-detail.html?id=bordeaux',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=bordeaux',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Chartrons & Bacalan", desc: "The wine merchant quarter along the Garonne — Sunday market, wine bars, antique shops, a village atmosphere within the city. Chartrons is the most popular neighborhood for long-term expats in Bordeaux, with good restaurants and a walkable pace. Bacalan to the north is the more affordable and still-gentrifying alternative." },
      { name: "Saint-Pierre & Vieux Bordeaux", desc: "The historic UNESCO-listed center — Place de la Bourse, the water mirror, the pedestrian shopping streets. The most atmospheric part of the city and the most expensive. Worth spending a full week here to understand whether the central energy suits long-term living." },
      { name: "Nansouty & Saint-Genès", desc: "The established residential neighborhoods south of the center — larger apartments, local markets, quieter streets, and prices that are more accessible than the historic core. Where Bordeaux families live. The honest choice for buyers who want the Bordeaux lifestyle at a sustainable price." },
    ],
    weatherMatch: [2, 1],            // mild/temperate, some seasons
    settingMatch: [3, 1, 5],         // city, river, countryside
    paceMatch: [1, 2, 3],            // creative, relaxed, social
    geographyOptions: [4],
    lifestyleMatch: [1, 2],
    priorityMatch: [5, 2, 1, 3],     // culture/arts, peace, community, purpose
  },

  {
    id: 'montpellier',
    name: 'Montpellier',
    country: 'France',
    region: 'Occitanie, France',
    flag: '🇫🇷',
    photo: 'images/montpellier.jpg',
    photoCap: 'Place de la Comédie, Montpellier',
    tagline: 'Southern France\'s sunniest city — 300 days of sunshine, a 30-minute tram to the Mediterranean, one of Europe\'s oldest universities, and costs a third below Paris.',
    tags: ['Southern sunshine', 'Near Mediterranean beaches', 'University city', 'Affordable for France', 'Excellent healthcare', 'Walkable'],
    costPerMonth: { 0: 1900, 1: 2700, 2: 3800, 3: 5800 },
    housing: { buy: '~$290K', buyDesc: '2BR apartment in a central neighborhood', rent: '~$1,300/mo' },
    compare: "France's most overlooked southern city — more sunshine than Nice at lower costs, beach access in under 30 minutes via tram, and one of Europe's oldest medical faculties ensuring healthcare standards remain world-class.",
    page: 'destination-detail.html?id=montpellier',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=montpellier',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "L'Écusson Historic Center", desc: "The fully pedestrianized medieval core — Place de la Comédie, the covered market, centuries-old architecture. Atmospheric and walkable but dense and noisy. The most expensive neighborhood per square meter." },
      { name: 'Boutonnet & Les Beaux-Arts', desc: "The residential neighborhoods north of the Écusson — quieter streets, genuine neighborhood character, some of the best rental yields in France. Popular with academics and long-term expats who want proximity without being in the middle of it." },
      { name: 'Port Marianne & Antigone', desc: "The modern eastern quarter — wider streets, newer buildings with elevators and parking. More practical than atmospheric, excellent value and well connected by tram to the rest of the city." },
    ],
    weatherMatch: [0, 2],
    settingMatch: [3, 0, 4],
    paceMatch: [1, 3, 2],
    geographyOptions: [4],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [4, 5, 1, 2],
  },

  // ─── SWITZERLAND ───────────────────────────────────────────────────

  {
    id: 'lugano',
    name: 'Lugano',
    country: 'Switzerland',
    region: 'Ticino, Switzerland',
    flag: '🇨🇭',
    photo: 'images/lugano.jpg',
    photoCap: 'Lake Lugano and Monte Brè, Ticino',
    tagline: 'Switzerland\'s Italian soul — a palm-lined lake city in the Italian-speaking canton, where Swiss precision meets Mediterranean dolce vita and the Alps rise behind the bougainvillea.',
    tags: ['Italian-speaking Switzerland', 'Alpine lake city', 'Mild year-round', 'Most affordable Swiss city', 'Swiss healthcare & safety', 'Lakefront lifestyle'],
    costPerMonth: { 0: 3500, 1: 4800, 2: 6500, 3: 9000 },
    housing: { buy: '~$680K', buyDesc: '2BR apartment near the lakefront', rent: '~$2,800/mo' },
    compare: "The most accessible entry point to Switzerland — Italian language and cuisine, a palm-lined lake promenade, Swiss world-class healthcare and infrastructure, at costs roughly 20% below Zurich or Geneva.",
    page: 'destination-detail.html?id=lugano',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=lugano',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 0],            // mild/temperate (warmest in Switzerland)
    settingMatch: [1, 2, 3],         // lake, mountains, city
    paceMatch: [2, 1, 3],
    geographyOptions: [4],
    lifestyleMatch: [2, 3],          // upscale, luxury
    priorityMatch: [2, 5, 4, 1],     // peace, culture/arts, health, community
  },

  // ─── ITALY (additional) ────────────────────────────────────────────

  {
    id: 'puglia',
    name: 'Puglia',
    country: 'Italy',
    region: 'Apulia, Southern Italy',
    flag: '🇮🇹',
    photo: 'images/puglia.jpg',
    photoCap: 'Trulli houses of Alberobello and Valle d\'Itria, Puglia',
    tagline: 'Italy\'s heel — Baroque cities of honey-gold stone, trulli houses in the Valle d\'Itria, two coastlines, masseria farmhouse living, and the most affordable corner of the Bel Paese.',
    tags: ['Baroque Lecce & Ostuni', 'Two coastlines', 'Trulli houses', 'Very affordable for Italy', 'Olive oil & wine culture', 'Emerging expat scene'],
    costPerMonth: { 0: 1600, 1: 2200, 2: 3100, 3: 4800 },
    housing: { buy: '~$180K', buyDesc: '2BR apartment in a hilltop or coastal town', rent: '~$750/mo' },
    compare: "Italy's most underrated region — two coastlines (Adriatic and Ionian), Baroque Lecce carved from golden limestone called the 'Florence of the South,' trulli stone houses unique to this region, and costs roughly 40% below Tuscany.",
    page: 'destination-detail.html?id=puglia',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=puglia',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 5, 4],         // beach, countryside, small town
    paceMatch: [2, 1, 0],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [2, 5, 4, 0],     // peace, culture/arts, health, adventure
  },

  {
    id: 'sicily',
    name: 'Sicily',
    country: 'Italy',
    region: 'Sicily, Southern Italy',
    flag: '🇮🇹',
    photo: 'images/sicily.jpg',
    photoCap: 'Valley of the Temples, Agrigento, Sicily',
    tagline: 'The Mediterranean\'s largest island — Greek temples, Baroque towns rebuilt after volcanic earthquakes, Mount Etna visible from the coast, and the lowest cost of living in all of Italy.',
    tags: ['Greek & Baroque heritage', 'Mediterranean island', 'Warm year-round', 'Italy\'s most affordable region', 'Mount Etna', 'World-class cuisine'],
    costPerMonth: { 0: 1500, 1: 2100, 2: 3000, 3: 4600 },
    housing: { buy: '~$150K', buyDesc: '2BR apartment in a coastal city', rent: '~$650/mo' },
    compare: "Italy at its most ancient and most affordable — Greek temples in Agrigento older than the Colosseum, Baroque Noto and Ragusa, Mount Etna as a constant backdrop, and costs well below the Italian mainland.",
    page: 'destination-detail.html?id=sicily',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=sicily',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 2, 3],
    paceMatch: [2, 1, 3],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [5, 2, 0, 4],     // culture/arts, peace, adventure, health
  },

  // ─── GREECE (additional) ───────────────────────────────────────────

  {
    id: 'crete',
    name: 'Crete',
    country: 'Greece',
    region: 'Crete, Greece',
    flag: '🇬🇷',
    photo: 'images/crete.jpg',
    photoCap: 'Chania Venetian harbor, Crete',
    tagline: 'Greece\'s largest island — Venetian harbors, Europe\'s longest gorge, olive groves that have been producing oil for 4,000 years, and a Cretan culture so rich it has its own dialect and its own music.',
    tags: ['Largest Greek island', 'Venetian harbor towns', 'Warm & sunny', 'Samaria Gorge hiking', 'Cretan diet & wine', 'Established expat scene'],
    costPerMonth: { 0: 1600, 1: 2200, 2: 3100, 3: 4700 },
    housing: { buy: '~$210K', buyDesc: '2BR apartment or village house near Chania', rent: '~$850/mo' },
    compare: "Greece's most complete island — Chania's Venetian harbor is one of the Mediterranean's most beautiful settings, the Samaria Gorge is Europe's longest canyon hike, and Cretan olive oil and wine culture goes back to the Bronze Age.",
    page: 'destination-detail.html?id=crete',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=crete',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 2, 4],
    paceMatch: [0, 2, 1],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [4, 0, 2, 5],     // health, adventure, peace, culture/arts
  },

  // ─── SPAIN (additional) ────────────────────────────────────────────

  {
    id: 'seville',
    name: 'Seville',
    country: 'Spain',
    region: 'Andalusia, Spain',
    flag: '🇪🇸',
    photo: 'images/seville.jpg',
    photoCap: 'Plaza de España and the Guadalquivir, Seville',
    tagline: 'Andalusia\'s passionate capital — flamenco, tapas culture, orange-blossom streets, and 300 days of sun in Spain\'s most exuberant and genuinely beautiful city.',
    tags: ['Flamenco capital', 'Warm & sunny', 'Tapas culture', 'Gothic cathedral', 'Walkable', 'Affordable for Spain'],
    costPerMonth: { 0: 1800, 1: 2500, 2: 3500, 3: 5200 },
    housing: { buy: '~$250K', buyDesc: '2BR apartment in a historic or riverside neighborhood', rent: '~$1,000/mo' },
    compare: "Spain's most characterful city — flamenco in the tablaos, orange trees lining every street, a Gothic cathedral with the world's largest nave, and costs well below Madrid or Barcelona, with Portugal's Algarve two hours away.",
    page: 'destination-detail.html?id=seville',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=seville',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Triana & Los Remedios", desc: "Triana across the Guadalquivir is the most authentically Sevillano neighborhood — flamenco roots, ceramics workshops, riverside tapas bars. Los Remedios is the more residential version next door: quieter streets, lower tourist density, excellent daily life. The two together make the strongest case for living west of the river." },
      { name: "El Arenal & Santa Cruz", desc: "The historic center adjacent to the cathedral and the Alcazar — the most atmospheric and most tourist-adjacent neighborhoods in the city. Santa Cruz in particular is beautiful but crowded. Worth walking extensively before deciding whether the weekend noise works for you." },
      { name: "Nervion & San Pablo", desc: "The residential middle ground east of the center — practical, well-connected, home to the football stadium and good everyday services. More affordable than the historic center with a genuinely local character. Where families and long-term residents tend to live." },
    ],
    weatherMatch: [0, 2],
    settingMatch: [3, 1],            // city, river
    paceMatch: [1, 3, 2],
    geographyOptions: [4],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 1, 0, 3],     // culture/arts, community, adventure, purpose
  },

  {
    id: 'granada',
    name: 'Granada',
    country: 'Spain',
    region: 'Andalusia, Spain',
    flag: '🇪🇸',
    photo: 'images/granada.jpg',
    photoCap: 'The Alhambra palace and Sierra Nevada, Granada',
    tagline: 'The Alhambra palace rises above a city where Moorish culture, university energy, and free tapas with every drink create a quality of life that laughs at its own price tag.',
    tags: ['Alhambra palace', 'Sierra Nevada skiing nearby', 'Free tapas culture', 'University city', 'Very affordable', 'Moorish heritage'],
    costPerMonth: { 0: 1700, 1: 2300, 2: 3200, 3: 4800 },
    housing: { buy: '~$220K', buyDesc: '2BR apartment in a historic hilltop neighborhood', rent: '~$900/mo' },
    compare: "Spain at its most affordable and most beautiful — the Alhambra is one of the world's great buildings, Sierra Nevada skiing starts 45 minutes away, and Granada is the last Spanish city where every drink still comes with a free tapa by tradition.",
    page: 'destination-detail.html?id=granada',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=granada',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: "Albaicin & Sacromonte", desc: "The Moorish quarter climbing the hill opposite the Alhambra — whitewashed lanes, cave houses in Sacromonte, the best views in the city. The most atmospheric neighborhood in Granada and increasingly expensive. Worth spending several days here before deciding whether the steep streets work for daily life." },
      { name: "El Realejo & Centro", desc: "The former Jewish quarter at the base of the Alhambra hill — more residential than the tourist-heavy Santa Ana, good restaurants, walkable to everything. The practical alternative to the Albaicin with most of the atmosphere and better everyday access." },
      { name: "Zaidin & Armilla", desc: "The southern residential neighborhoods where Granada actually lives — local markets, genuine neighborhood character, and prices well below the historic center. Less atmospheric but far more affordable and practical for long-term living. Worth a visit to understand the real cost of Granada life." },
    ],
    weatherMatch: [1, 0],          // four seasons (primary — hot summers 40°C+, cold winters at 738m), warm
    settingMatch: [3, 2, 4],
    paceMatch: [1, 2, 3],
    geographyOptions: [4],
    lifestyleMatch: [0, 1],
    priorityMatch: [5, 2, 1, 0],     // culture/arts, peace, community, adventure
  },

  // ─── US (additional) ───────────────────────────────────────────────

  {
    id: 'charleston-sc',
    name: 'Charleston',
    country: 'United States',
    region: 'South Carolina, USA',
    flag: '🇺🇸',
    photo: 'images/charleston.jpg',
    photoCap: 'Rainbow Row and historic waterfront, Charleston',
    tagline: 'America\'s most beautiful historic city — cobblestone streets, antebellum architecture, Atlantic beaches, and a culinary scene that put Lowcountry cooking on every serious food map.',
    tags: ['Historic colonial city', 'Coastal', 'Mild year-round', 'World-class dining', 'Walkable downtown', 'English-speaking'],
    costPerMonth: { 0: 2800, 1: 3700, 2: 5000, 3: 7200 },
    housing: { buy: '~$560K', buyDesc: '2BR home on James Island or West Ashley', rent: '~$2,300/mo' },
    compare: "Consistently ranked among America's most beautiful and livable cities — Rainbow Row's pastel mansions, barrier island beaches 20 minutes from downtown, and a food scene that helped define modern American Southern cuisine.",
    page: 'destination-detail.html?id=charleston-sc',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'The Peninsula & Historic District', desc: "The most iconic and expensive part of Charleston — Rainbow Row, the Battery, Church Street. Living here means immersion in one of America's great historic cities. It also means tourist foot traffic, limited parking, and prices that reflect the demand." },
      { name: 'Mount Pleasant', desc: "The most popular suburb for people who want the Charleston lifestyle with more space. Good amenities and a short bridge ride to downtown. The fastest-growing part of the metro for a reason." },
      { name: 'James Island & West Ashley', desc: "More affordable than the peninsula, with genuine community character and quick access to Folly Beach. Where many long-term Charleston residents actually live." },
    ],
    weatherMatch: [0, 2],
    settingMatch: [0, 3, 4],
    paceMatch: [2, 1, 3],
    geographyOptions: [0],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [5, 1, 2, 4],     // culture/arts, community, peace, health
  },

  {
    id: 'palm-springs',
    name: 'Palm Springs',
    country: 'United States',
    region: 'California, USA',
    flag: '🇺🇸',
    photo: 'images/palm-springs.jpg',
    photoCap: 'San Jacinto Mountains and mid-century modern Palm Springs',
    tagline: 'Mid-century modern architecture, 350 days of sun, mountain-ringed desert glamour, and a retirement community that has been perfecting the art of the good life since the Rat Pack era.',
    tags: ['Desert sunshine', 'Mid-century modern architecture', 'LGBTQ-welcoming', 'Golf & world-class spas', 'Arts scene', 'English-speaking'],
    costPerMonth: { 0: 2900, 1: 4000, 2: 5500, 3: 8000 },
    housing: { buy: '~$580K', buyDesc: '2BR home with pool in South Palm Springs', rent: '~$2,400/mo' },
    compare: "The Coachella Valley's crown jewel — 350 sunny days, world-class spa resorts, a mid-century modern architectural heritage unlike anywhere else in America, and one of the country's most LGBTQ+-welcoming communities with deep retirement roots.",
    page: 'destination-detail.html?id=palm-springs',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [2, 5, 3],
    paceMatch: [2, 3, 1],
    geographyOptions: [0],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [4, 1, 2, 5],     // health, community, peace, culture/arts
  },

  {
    id: 'prescott-az',
    name: 'Prescott',
    country: 'United States',
    region: 'Arizona, USA',
    flag: '🇺🇸',
    photo: 'images/prescott.jpg',
    photoCap: 'Granite Dells and ponderosa pines, Prescott',
    tagline: 'Arizona\'s mile-high escape — a Victorian courthouse square, ponderosa pine forests, four mild seasons with no desert heat, and one of the most active retirement communities in the entire Southwest.',
    tags: ['Mile-high altitude', 'Four mild seasons', 'Victorian downtown', 'Pine forest setting', 'Very active retiree scene', 'English-speaking'],
    costPerMonth: { 0: 2200, 1: 3000, 2: 4000, 3: 5800 },
    housing: { buy: '~$460K', buyDesc: '2BR home near Courthouse Plaza', rent: '~$1,800/mo' },
    compare: "Arizona's best-kept retirement secret — at 5,400 feet elevation, Prescott escapes the desert heat entirely, with ponderosa pine forests, mild four-season weather, and a Courthouse Plaza Victorian downtown that has been drawing retirees for decades.",
    page: 'destination-detail.html?id=prescott-az',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 3],          // four seasons (primary — cold winters at 5,400ft), cool/crisp
    settingMatch: [2, 4],
    paceMatch: [0, 2, 3],
    geographyOptions: [0],
    lifestyleMatch: [0, 1],
    priorityMatch: [4, 1, 2, 0],
  },

  {
    id: 'wilmington-nc',
    name: 'Wilmington',
    country: 'United States',
    region: 'North Carolina, USA',
    flag: '🇺🇸',
    photo: 'images/wilmington.jpg',
    photoCap: 'Cape Fear riverfront and historic district, Wilmington',
    tagline: 'North Carolina\'s coastal gem — a walkable riverfront historic district, award-winning beaches at Wrightsville and Carolina, and a cost of living that is one of the Southeast\'s best surprises.',
    tags: ['Coastal city', 'Historic riverfront', 'Warm year-round', 'Award-winning beaches', 'Growing film & arts scene', 'English-speaking'],
    costPerMonth: { 0: 2300, 1: 3100, 2: 4100, 3: 6000 },
    housing: { buy: '~$440K', buyDesc: '2BR home in Midtown or Ogden', rent: '~$1,800/mo' },
    compare: "The Southeast's most underrated coastal city — Wrightsville Beach is consistently ranked among America's best, the Cape Fear riverfront is genuinely walkable, and costs run meaningfully below comparable coastal cities in Florida or South Carolina.",
    page: 'destination-detail.html?id=wilmington-nc',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Historic Downtown & Brooklyn Arts District', desc: "The walkable heart of Wilmington — Cape Fear riverfront, independent restaurants, the arts district. The most atmospheric part of the city and increasingly popular with retirees who want an urban lifestyle. Inventory is limited and moves fast." },
      { name: 'Wrightsville Beach & Landfall', desc: "The coastal premium — Wrightsville Beach is one of the best barrier island communities on the East Coast. Both command significantly higher prices than the mainland, but the beach access is genuine." },
      { name: "Midtown & Porter's Neck", desc: "The practical middle ground — good access to downtown and the beach without the premium of either. Midtown has the services and daily infrastructure that makes a city livable." },
    ],
    weatherMatch: [1, 2],          // four seasons (primary — cold winters, hot humid summers), mild
    settingMatch: [0, 3, 4],
    paceMatch: [2, 1, 3],
    geographyOptions: [0],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [4, 1, 5, 2],
  },

  {
    id: 'st-george-ut',
    name: 'St. George',
    country: 'United States',
    region: 'Utah, USA',
    flag: '🇺🇸',
    photo: 'images/st-george.jpg',
    photoCap: 'Red rock canyon country, St. George',
    tagline: 'Utah\'s sun belt — red rock canyon country with 300 days of sunshine, Zion National Park 45 minutes away, and consistently the fastest-growing retirement city in America.',
    tags: ['Red rock desert', '300 days of sunshine', 'Zion National Park nearby', 'Golf mecca', 'Fastest-growing retirement city in US', 'English-speaking'],
    costPerMonth: { 0: 2400, 1: 3200, 2: 4200, 3: 6200 },
    housing: { buy: '~$480K', buyDesc: '2BR home in a quiet residential neighborhood', rent: '~$1,900/mo' },
    compare: "America's fastest-growing retirement destination — Zion and Bryce Canyon within an hour, more sunshine than Phoenix, world-class golf courses set against dramatic red rock, and a desert landscape that makes every drive feel cinematic.",
    page: 'destination-detail.html?id=st-george-ut',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Downtown & Ancestor Square', desc: "The historic heart of the city — walkable, genuinely charming, with the best restaurant and arts scene St. George has to offer. Older homes with character at prices below the new development communities." },
      { name: 'Desert Color & SunRiver', desc: "The master-planned resort communities at the southern end of the metro — pools, pickleball, golf, trails. Built specifically for the lifestyle most retirees are seeking." },
      { name: 'Bloomington Hills & Green Valley', desc: "Established residential neighborhoods with red-rock views and good trail access. More affordable than the newer resort communities with a quieter, more settled character." },
    ],
    weatherMatch: [0, 2],
    settingMatch: [2, 5, 3],
    paceMatch: [0, 2, 3],
    geographyOptions: [0],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [0, 4, 2, 1],     // adventure, health, peace, community
  },

  // ─── CARIBBEAN (additional) ────────────────────────────────────────

  {
    id: 'st-lucia',
    name: 'St. Lucia',
    country: 'Saint Lucia',
    region: 'Eastern Caribbean',
    flag: '🇱🇨',
    photo: 'images/saint-lucia.jpg',
    photoCap: 'The Pitons and Soufrière Bay, St. Lucia',
    tagline: 'The Pitons rise from the sea like twin volcanic cathedrals — St. Lucia\'s twin UNESCO peaks, black sand beaches, rainforest hiking, and an English-speaking island that is somehow still underpriced for how beautiful it is.',
    tags: ['UNESCO Piton peaks', 'Volcanic beaches', 'English-speaking', 'Tropical rainforest', 'Warm year-round', 'Growing expat community'],
    costPerMonth: { 0: 1800, 1: 2600, 2: 3800, 3: 5800 },
    housing: { buy: '~$280K', buyDesc: '2BR home near the main marina or hillside resort area', rent: '~$1,200/mo' },
    compare: "One of the Caribbean's most dramatically beautiful islands — the twin Piton peaks are among the world's most photographed natural landmarks, the volcanic spa baths are unique to the region, and the cost of living runs meaningfully below Barbados.",
    page: 'destination-detail.html?id=st-lucia',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=st-lucia',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 2, 4],
    paceMatch: [2, 0, 3],
    geographyOptions: [3],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [0, 4, 2, 1],     // adventure, health, peace, community
  },

  {
    id: 'antigua',
    name: 'Antigua',
    country: 'Antigua and Barbuda',
    region: 'Leeward Islands, Caribbean',
    flag: '🇦🇬',
    photo: 'images/antigua.jpg',
    photoCap: 'English Harbour and Nelson\'s Dockyard, Antigua',
    tagline: '365 beaches — one for every day of the year — with English as the first language, zero income tax, and a sailing culture so serious it hosts the Caribbean\'s premier regatta every April.',
    tags: ['365 beaches', 'English-speaking', 'Zero income tax', 'Sailing capital of Caribbean', 'Historic Nelson\'s Dockyard', 'Good infrastructure'],
    costPerMonth: { 0: 2200, 1: 3000, 2: 4200, 3: 6500 },
    housing: { buy: '~$320K', buyDesc: '2BR home near a marina or beachside village', rent: '~$1,400/mo' },
    compare: "The Caribbean's sailing capital — English Harbour's Georgian dockyard is a UNESCO site where tall ships still race each April, 365 beaches ring the island, and no income tax, capital gains tax, or inheritance tax makes it one of the region's most financially attractive options.",
    page: 'destination-detail.html?id=antigua',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=antigua',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 4],
    paceMatch: [0, 2, 3],
    geographyOptions: [3],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [0, 1, 4, 2],
  },

  // ─── MEXICO / LATIN AMERICA (additional) ──────────────────────────

  {
    id: 'los-cabos',
    name: 'Los Cabos',
    country: 'Mexico',
    region: 'Baja California Sur, Mexico',
    flag: '🇲🇽',
    photo: 'images/los-cabos.jpg',
    photoCap: 'El Arco and Land\'s End, Cabo San Lucas',
    tagline: 'Where the desert meets the sea at the tip of Baja — world-class sport fishing, the Arch at Land\'s End, the Sea of Cortés on one side and Pacific surf on the other.',
    tags: ['Pacific & Sea of Cortés', 'Desert & ocean', 'World-class sport fishing', 'Warm year-round', 'Strong expat scene', 'US-friendly infrastructure'],
    costPerMonth: { 0: 2200, 1: 3100, 2: 4500, 3: 7000 },
    housing: { buy: '~$360K', buyDesc: '2BR condo in San José del Cabo', rent: '~$1,500/mo' },
    compare: "The most US-accessible international beach retirement — direct flights from dozens of US cities, English widely spoken, world-class sport fishing and golf, and a Baja landscape where the desert mountains drop straight into turquoise water.",
    page: 'destination-detail.html?id=los-cabos',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=los-cabos',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 2, 4],
    paceMatch: [0, 2, 3],
    geographyOptions: [2],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [0, 4, 1, 2],
  },

  {
    id: 'mazatlan',
    name: 'Mazatlán',
    country: 'Mexico',
    region: 'Sinaloa, Mexico',
    flag: '🇲🇽',
    photo: 'images/mazatlán.jpg',
    photoCap: 'Malecón boardwalk and Old Town, Mazatlán',
    tagline: 'Mexico\'s most authentic Pacific city — a magnificently restored historic district, 21km of beach, a world-class malecón, and Pacific coast prices at a fraction of Los Cabos.',
    tags: ['Pacific coast', 'Restored Old Town', '21km beach', 'Malecón boardwalk', 'Large established expat community', 'Very affordable'],
    costPerMonth: { 0: 1300, 1: 1900, 2: 2700, 3: 4200 },
    housing: { buy: '~$220K', buyDesc: '2BR condo in the beach zone or old town', rent: '~$900/mo' },
    compare: "The Pacific coast's most livable city — a UNESCO-recognized historic center that rivals San Miguel's architecture, 21km of beach, and Mexico's best value for Pacific ocean retirement living.",
    page: 'destination-detail.html?id=mazatlan',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=mazatlan',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 3, 4],
    paceMatch: [2, 3, 1],
    geographyOptions: [2],
    lifestyleMatch: [0, 1],
    priorityMatch: [1, 2, 0, 4],     // community, peace, adventure, health
  },

  {
    id: 'guadalajara',
    name: 'Guadalajara',
    country: 'Mexico',
    region: 'Jalisco, Mexico',
    flag: '🇲🇽',
    photo: 'images/guadalajara.jpg',
    photoCap: 'Historic centro, Guadalajara, Jalisco',
    tagline: 'Mexico\'s second city and cultural heart — tequila, mariachi, and lucha libre were all born here, and a highland spring climate and world-class hospitals make it Mexico\'s medical tourism capital.',
    tags: ['Mexico\'s cultural capital', 'Highland spring climate', 'Medical tourism hub', 'Tequila & mariachi birthplace', 'Large expat scene', 'Modern infrastructure'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 2900, 3: 4500 },
    housing: { buy: '~$240K', buyDesc: '2BR apartment in an upscale suburb or central neighborhood', rent: '~$950/mo' },
    compare: "Mexico's cultural capital — the country's top medical tourism destination, a thriving arts and tech scene, gateway to Lake Chapala and Ajijic 45 minutes away, and a highland spring climate that makes year-round outdoor living easy.",
    page: 'destination-detail.html?id=guadalajara',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=guadalajara',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 0],
    settingMatch: [3, 4],
    paceMatch: [1, 3, 2],
    geographyOptions: [2],
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [4, 1, 5, 3],     // health, community, culture/arts, purpose
  },

  // ─── ASIA (additional) ─────────────────────────────────────────────

  {
    id: 'phuket',
    name: 'Phuket',
    country: 'Thailand',
    region: 'Southern Thailand',
    flag: '🇹🇭',
    photo: 'images/phuket.jpg',
    photoCap: 'Phang Nga Bay limestone karsts, Phuket',
    tagline: 'Thailand\'s island legend — limestone karsts jutting from turquoise Andaman water, the world\'s most recognized tropical scenery, and a resort lifestyle that can be as simple or as lavish as you want.',
    tags: ['Andaman Sea beaches', 'Limestone karst scenery', 'World-class diving', 'Strong expat infrastructure', 'Warm year-round', 'All price ranges'],
    costPerMonth: { 0: 1200, 1: 1900, 2: 2800, 3: 4500 },
    housing: { buy: 'Lease only', buyDesc: 'Villa or condo lease in a quieter beach area', rent: '~$800/mo' },
    compare: "Thailand's most famous retirement island — the Andaman's limestone karsts are among the world's most recognizable landscapes, Phuket's expat infrastructure spans every budget from backpacker to resort, and private hospitals are world-class.",
    page: 'destination-detail.html?id=phuket',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=phuket',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [0, 2],            // beach, island/mountains
    paceMatch: [2, 0, 3],
    geographyOptions: [6],
    lifestyleMatch: [0, 1, 2, 3],
    priorityMatch: [0, 4, 2, 1],     // adventure, health, peace, community
  },

  {
    id: 'ho-chi-minh-city',
    name: 'Ho Chi Minh City',
    country: 'Vietnam',
    region: 'Southern Vietnam',
    flag: '🇻🇳',
    photo: 'images/ho-chi-minh-city.jpg',
    photoCap: 'Saigon skyline and Ben Thanh market district',
    tagline: 'The city that reinvented itself — French colonial boulevards, street food that challenges all assumptions about what a meal can cost, a speed and energy that feels unmistakably alive, and costs that rewrite what comfortable living needs.',
    tags: ['French colonial heritage', 'Street food paradise', 'Tropical', 'Growing expat scene', 'Very affordable', 'Modern & fast-moving city'],
    costPerMonth: { 0: 1000, 1: 1500, 2: 2200, 3: 3600 },
    housing: { buy: 'Restricted for foreigners', buyDesc: 'Long-term apartment in the expat district', rent: '~$550/mo' },
    compare: "Vietnam's most cosmopolitan city — French boulevards lined with coffee shops, a food scene of extraordinary depth, one of the most affordable major cities in Asia, and a pace of reinvention that makes it feel like a city in permanent creative bloom.",
    page: 'destination-detail.html?id=ho-chi-minh-city',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=ho-chi-minh-city',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],
    settingMatch: [3],
    paceMatch: [1, 3, 0],
    geographyOptions: [6],
    lifestyleMatch: [0, 1],
    priorityMatch: [5, 1, 0, 3],     // culture/arts, community, adventure, purpose
  },

  // ─── AUSTRALIA / NEW ZEALAND (additional) ─────────────────────────

  {
    id: 'melbourne',
    name: 'Melbourne',
    country: 'Australia',
    region: 'Victoria, Australia',
    flag: '🇦🇺',
    photo: 'images/melbourne.jpg',
    photoCap: 'Yarra River and city skyline, Melbourne',
    tagline: 'Australia\'s cultural capital — legendary coffee, hidden laneway bars, world-class galleries, a food scene that tops global rankings, and a European soul transplanted to the Southern Hemisphere.',
    tags: ['Cultural capital of Australia', 'World-class food & coffee', 'Four seasons', 'Arts & gallery scene', 'Walkable neighborhoods', 'Excellent healthcare'],
    costPerMonth: { 0: 3500, 1: 4700, 2: 6200, 3: 9000 },
    housing: { buy: '~$680K', buyDesc: '2BR apartment in a trendy inner-city neighborhood', rent: '~$2,700/mo' },
    compare: "Australia's cultural and culinary capital — consistently ranked one of the world's most livable cities, with the Yarra River walkways, the National Gallery of Victoria, and a coffee and food culture that Sydney is quietly envious of.",
    page: 'destination-detail.html?id=melbourne',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=melbourne',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 2],
    settingMatch: [3, 1],
    paceMatch: [1, 3, 0],
    geographyOptions: [5],
    lifestyleMatch: [1, 2, 3],
    priorityMatch: [5, 1, 4, 3],     // culture/arts, community, health, purpose
  },

  {
    id: 'perth',
    name: 'Perth',
    country: 'Australia',
    region: 'Western Australia, Australia',
    flag: '🇦🇺',
    photo: 'images/perth.jpg',
    photoCap: 'Swan River and Perth city skyline, Western Australia',
    tagline: 'The world\'s most isolated major city — and because of that isolation, one of its most self-sufficient, with 3,000 hours of sunshine, Indian Ocean beaches, the Swan Valley wine region, and an outdoor quality of life that consistently polls as Australia\'s happiest.',
    tags: ['Most sunshine in Australia', 'Indian Ocean beaches', 'Margaret River wine region', 'Outdoor lifestyle', 'Clean & safe', 'English-speaking'],
    costPerMonth: { 0: 3000, 1: 4000, 2: 5300, 3: 7800 },
    housing: { buy: '~$580K', buyDesc: '2BR home in a beachside suburb', rent: '~$2,300/mo' },
    compare: "Western Australia's sun-drenched capital — more sunshine hours than Sydney or Melbourne, Indian Ocean beaches 20 minutes from the CBD, Margaret River wine and surf country 3 hours south, and a lifestyle that consistently surveys as Australia's happiest.",
    page: 'destination-detail.html?id=perth',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=perth',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0, 2],
    settingMatch: [0, 3, 5],
    paceMatch: [0, 2, 3],
    geographyOptions: [5],
    lifestyleMatch: [1, 2],
    priorityMatch: [4, 0, 2, 1],     // health, adventure, peace, community
  },

  {
    id: 'christchurch-nz',
    name: 'Christchurch',
    country: 'New Zealand',
    region: 'South Island, New Zealand',
    flag: '🇳🇿',
    photo: 'images/christchurch-nz.jpg',
    photoCap: 'Avon River Punting and regenerated city centre, Christchurch',
    tagline: 'The garden city rebuilt — Christchurch\'s remarkable post-earthquake reinvention created one of the Southern Hemisphere\'s most thoughtfully designed cities, with Canterbury Plains, ski fields, and the Akaroa peninsula within an hour.',
    tags: ['Garden city', 'Post-earthquake renewal', 'Flat & bikeable', 'Canterbury wine country', 'Southern Alps access', 'English-speaking'],
    costPerMonth: { 0: 2600, 1: 3500, 2: 4600, 3: 6600 },
    housing: { buy: '~$520K', buyDesc: '2BR home in a central or garden neighborhood', rent: '~$2,000/mo' },
    compare: "New Zealand's most surprisingly livable city — Christchurch's post-earthquake rebuild created a city that blends heritage charm with world-class urban design, with Akaroa's French-heritage harbor 90 minutes south and ski fields an hour away.",
    page: 'destination-detail.html?id=christchurch-nz',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?id=christchurch-nz',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [1, 2],
    settingMatch: [3, 2, 5],
    paceMatch: [0, 1, 2],
    geographyOptions: [5],
    lifestyleMatch: [0, 1],
    priorityMatch: [0, 4, 2, 5],     // adventure, health, peace, culture/arts
  },

  // ─── INDONESIA ────────────────────────────────────────────────────

  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Bali, Indonesia',
    flag: '🇮🇩',
    photo: 'images/bali.jpg',
    photoCap: 'Rice terraces and jungle temple, Ubud, Bali',
    tagline: 'The world\'s most romanticized island — terraced rice paddies, Hindu temple smoke, Ubud\'s art galleries and healing culture, and a way of life so distinctive it makes everywhere else feel a little ordinary.',
    tags: ['Iconic rice terraces', 'Hindu spiritual culture', 'World-class yoga & wellness', 'Warm year-round', 'Strong expat community', 'All budgets'],
    costPerMonth: { 0: 1200, 1: 1800, 2: 2600, 3: 4200 },
    housing: { buy: 'Leasehold only', buyDesc: '25–30 year villa lease in a beach or cultural village', rent: '~$600/mo' },
    compare: "One of the world's great retirement destinations — Ubud's rice paddy views and world-class wellness retreats, Canggu's beach club culture and digital-nomad energy, and Seminyak's upscale restaurant scene, all at costs that run a fraction of comparable lifestyle destinations.",
    page: 'destination-detail.html?id=bali',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],               // tropical year-round
    settingMatch: [2, 5, 0],         // mountains/terraces, countryside, beach
    paceMatch: [2, 1, 0],            // relaxed, creative, active
    geographyOptions: [6],            // Asia
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [2, 5, 4, 0],     // peace, culture/arts, health, adventure
  },

  // ─── JAPAN ───────────────────────────────────────────────────────

  {
    id: 'fukuoka',
    name: 'Fukuoka',
    country: 'Japan',
    region: 'Kyushu, Japan',
    flag: '🇯🇵',
    photo: 'images/fukuoka.jpg',
    photoCap: 'Nakasu island and Hakata waterfront, Fukuoka',
    tagline: 'Japan\'s most livable city — a compact waterfront, Hakata ramen that people fly in for, a hot spring an hour away, and the most relaxed pace of any major Japanese city, without the crowds of Tokyo or Kyoto.',
    tags: ['Japan\'s most livable city', 'World-famous ramen', 'Compact & walkable', 'Warm climate for Japan', 'Gateway to Korea & China', 'Note: Japan has no retirement visa'],
    costPerMonth: { 0: 1800, 1: 2800, 2: 4000, 3: 6200 },
    housing: { buy: '~$280K', buyDesc: '2BR apartment in a central city district', rent: '~$900/mo' },
    compare: "Japan's most approachable major city — smaller and warmer than Tokyo, more international than Kyoto, with a waterfront food scene centered on Hakata ramen, access to Beppu's famous hot springs by train, and ferry connections to South Korea. Note: Japan currently has no straightforward long-term retirement visa — most expats use long-stay tourist entries, a spouse visa, or a cultural/language visa.",
    page: 'destination-detail.html?name=Fukuoka',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Fukuoka',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [2, 1],            // mild/temperate, four seasons
    settingMatch: [3, 0],             // city, coastal
    paceMatch: [1, 3, 2],            // creative, social, relaxed
    geographyOptions: [6],            // Asia
    lifestyleMatch: [1, 2],
    priorityMatch: [5, 4, 1, 2],     // culture/arts, health, community, peace
  },

  // ─── AFRICA ──────────────────────────────────────────────────────

  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Marrakech-Safi, Morocco',
    flag: '🇲🇦',
    photo: 'images/marrakech.jpg',
    photoCap: 'Koutoubia Mosque and Jemaa el-Fna, Marrakech',
    tagline: 'The Red City — ancient medina lanes, riads with courtyard fountains, the Atlas Mountains on the horizon, and a sensory richness that rewards slow living more than anywhere in the Mediterranean world.',
    tags: ['Ancient medina & souks', 'Riad courtyard lifestyle', 'Atlas Mountains views', 'Warm & sunny year-round', 'Growing expat community', 'Foreigners can buy property'],
    costPerMonth: { 0: 1200, 1: 1800, 2: 2800, 3: 4500 },
    housing: { buy: '~$140K', buyDesc: 'Restored traditional home in the old city or a palm grove villa', rent: '~$700/mo' },
    compare: "Africa's most celebrated expat destination — a UNESCO-listed medina where 1,000-year-old architecture meets a thriving arts scene, the Atlas Mountains an hour away for skiing or trekking, and a cost of living that runs well below comparable Mediterranean cities.",
    page: 'destination-detail.html?id=marrakech',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Marrakech',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],               // warm/sunny (hot summers, mild winters)
    settingMatch: [3, 4, 2],         // city, small-town medina feel, mountains nearby
    paceMatch: [1, 2, 3],            // creative, relaxed, social
    geographyOptions: [7],            // Africa
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [5, 0, 2, 1],     // culture/arts, adventure, peace, community
  },

  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Western Cape, South Africa',
    flag: '🇿🇦',
    photo: 'images/cape-town.jpg',
    photoCap: 'Table Mountain and waterfront, Cape Town',
    tagline: 'One of the world\'s most dramatically beautiful cities — Table Mountain above, the Atlantic and False Bay below, world-class wine country forty minutes away, and an English-speaking culture that makes it immediately livable.',
    tags: ['Table Mountain', 'Atlantic & False Bay beaches', 'English-speaking', 'Winelands nearby', 'Mediterranean climate', 'South Africa Retired Person Permit'],
    costPerMonth: { 0: 1400, 1: 2000, 2: 3000, 3: 5000 },
    housing: { buy: '~$220K', buyDesc: '2BR home in a coastal or hillside neighborhood', rent: '~$900/mo' },
    compare: "One of the world's truly great cities — Table Mountain as your permanent backdrop, a Mediterranean wine region (Stellenbosch and Franschhoek) 40 minutes away, world-class beaches on both the Atlantic and False Bay sides, and an English-speaking city where the cost of living runs well below comparable lifestyle cities in Europe or the US. Note: like any major city, Cape Town warrants thoughtful neighbourhood selection for security.",
    page: 'destination-detail.html?id=cape-town',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Cape%20Town',
    scoutingPage: 'scouting-trip.html',
    neighborhoods: [
      { name: 'Sea Point & Green Point', desc: "The Atlantic Seaboard urban strip — the Sea Point Promenade, excellent restaurants, walkable and genuinely cosmopolitan. The most popular area for expats and long-term international residents." },
      { name: 'Claremont & Newlands', desc: "The established Southern Suburbs — leafy, spacious, excellent healthcare access. More car-dependent than Sea Point but significantly more space for the price. Where many long-term international residents end up." },
      { name: "Muizenberg & Simon's Town", desc: "The False Bay coast — the bohemian surf neighborhood of Muizenberg and the historic naval village of Simon's Town. Meaningfully lower prices than the Atlantic Seaboard and a different kind of Cape Town character." },
    ],
    weatherMatch: [2, 0],            // mild Mediterranean, warm
    settingMatch: [0, 2, 3],         // beach, mountains, city
    paceMatch: [0, 1, 2],            // active, creative, relaxed
    geographyOptions: [7],            // Africa
    lifestyleMatch: [0, 1, 2],
    priorityMatch: [0, 5, 4, 2],     // adventure, culture/arts, health, peace
  },

  {
    id: 'accra',
    name: 'Accra',
    country: 'Ghana',
    region: 'Greater Accra, Ghana',
    flag: '🇬🇭',
    photo: 'images/accra.jpg',
    photoCap: 'Labadi Beach and the Atlantic coast, Accra',
    tagline: 'West Africa\'s most livable capital — English-speaking, politically stable, and home to one of the world\'s most warmly welcoming cultures.',
    tags: ['English-speaking', 'Atlantic coastline', 'Warm year-round', 'Stable democracy', 'Growing expat hub', 'Diaspora-friendly'],
    costPerMonth: { 0: 1100, 1: 1700, 2: 2600, 3: 4200 },
    housing: { buy: '~$180K', buyDesc: '2BR apartment in an upscale residential area', rent: '~$900/mo' },
    compare: "One of West Africa's most established expat destinations — English-speaking, democratically stable, with an Atlantic coastline, a vibrant arts scene, and a diaspora community that has made the city feel increasingly international.",
    page: 'destination-detail.html?id=accra',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'destination-detail.html?name=Accra',
    scoutingPage: 'scouting-trip.html',
    weatherMatch: [0],               // warm/sunny tropical year-round
    settingMatch: [3, 0, 4],         // city, beach/coast, small-town neighborhoods
    paceMatch: [3, 1, 2],            // social first, creative, relaxed
    geographyOptions: [7],            // Africa
    lifestyleMatch: [0, 1, 2],       // simple, comfortable, upscale
    priorityMatch: [1, 5, 0, 3],     // community, culture/arts, adventure, purpose
  },

  // ─── GAP-FILLING ADDITIONS ─────────────────────────────────────────────
  // Targeting: cool/crisp weather (index 3), countryside setting (index 5), Africa region (index 7)

  // ── Cool/crisp US ──────────────────────────────────────────────────────

  {
    id: 'flagstaff',
    name: 'Flagstaff',
    country: 'United States',
    region: 'Northern Arizona',
    flag: '🇺🇸',
    photo: 'images/flagstaff.jpg',
    photoCap: 'Ponderosa pines and San Francisco Peaks, Flagstaff',
    tagline: 'Mile-high Arizona with four seasons, ponderosa pine forests, and outdoor adventure — the Southwest without the scorching heat.',
    tags: ['Four seasons', 'Mountain town', 'Outdoor adventure', 'University town', 'Cool summers', 'Route 66 history'],
    costPerMonth: { 0: 2200, 1: 2900, 2: 3900, 3: 5600 },
    housing: { buy: '~$440K', buyDesc: '2BR in central Flagstaff', rent: '~$1,700/mo' },
    compare: "Arizona retirement without the Phoenix heat — Flagstaff sits at 7,000 feet, gets actual snow, and has the outdoor culture of a Colorado mountain town at lower price points.",
    page: 'destination-detail.html?id=flagstaff',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Historic Downtown & Southside', desc: "The walkable urban core — Route 66, independent restaurants and breweries, the Amtrak station. The most atmospheric part of the city and the most expensive. Where you want to spend a weekend before deciding if Flagstaff is your city." },
      { name: 'University Heights & Sunnyside', desc: "Established residential neighborhoods close to downtown with mature trees and a genuine neighborhood feel. More affordable than new construction and closer to daily amenities." },
      { name: 'Continental Country Club & East Side', desc: "The more suburban eastern neighborhoods — newer construction, more space, lower price per square foot. Less walkable but quieter, with easy access to the national forest trails that define outdoor life in Flagstaff." },
    ],
    weatherMatch: [3, 1],            // cool/crisp (primary — 7,000ft elevation), four seasons
    settingMatch: [2, 4, 5],         // mountains, small town, countryside/forest
    paceMatch: [0, 1, 2],            // active, mixed, slow/easy
    geographyOptions: [0],           // US
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [0, 4, 2, 3],     // adventure, health, peace, purpose
  },

  {
    id: 'ashland-or',
    name: 'Ashland',
    country: 'United States',
    region: 'Southern Oregon',
    flag: '🇺🇸',
    photo: 'images/ashland-or.jpg',
    photoCap: 'Lithia Park and Ashland Creek, Oregon',
    tagline: 'A world-class Shakespeare festival, organic farms, Crater Lake an hour away, and a small-town arts scene that punches well above its size.',
    tags: ['Oregon Shakespeare Festival', 'Arts community', 'Farm-to-table', 'Mild summers', 'Small town', 'Progressive community'],
    costPerMonth: { 0: 2400, 1: 3100, 2: 4200, 3: 6000 },
    housing: { buy: '~$490K', buyDesc: '2BR craftsman in central Ashland', rent: '~$1,900/mo' },
    compare: "The cultural density of a much larger city in a town of 20,000 — the Oregon Shakespeare Festival draws 100,000 visitors a year, and the surrounding Rogue Valley wine country adds a quiet richness to everyday life.",
    page: 'destination-detail.html?id=ashland-or',
    isInternational: false,
    advisorPage: 'advisor-domestic.html',
    browseHomesPage: 'browse-homes-domestic.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Historic Core & Lithia Park', desc: "The walkable heart of Ashland — the Oregon Shakespeare Festival theaters, the Lithia Park creek corridor, independent restaurants and bookshops. The most atmospheric part of the city and the most expensive." },
      { name: 'Hillside Neighborhoods & North Mountain', desc: "The elevated residential streets above the downtown core — views of the valley, mature landscaping, and the quiet that a small mountain city should have. Where long-term Ashland residents tend to live." },
      { name: 'Mountain Meadows & South Ashland', desc: "The purpose-built 55+ community and surrounding southern neighborhoods — newer construction, single-level options, community amenities, and easy access to the hospital." },
    ],
    weatherMatch: [2, 3],            // mild/temperate (primary), cool/crisp winters
    settingMatch: [4, 2, 5],         // small town (primary), mountains, countryside
    paceMatch: [1, 2, 3],            // mixed, slow/easy, social
    geographyOptions: [0],           // US
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [5, 3, 2, 1],     // culture/arts, purpose, peace, community
  },

  // ── Cool/crisp + Countryside — Europe ──────────────────────────────────

  {
    id: 'douro-valley',
    name: 'Douro Valley',
    country: 'Portugal',
    region: 'Trás-os-Montes, Portugal',
    flag: '🇵🇹',
    photo: 'images/douro-valley.jpg',
    photoCap: 'Terraced vineyards above the Douro River, Portugal',
    tagline: 'UNESCO-listed wine country along a serpentine river — terraced vineyards, quintas to rent, and a silence that Porto and Lisbon can\'t offer.',
    tags: ['Wine country', 'UNESCO landscape', 'River views', 'Rural Portugal', 'Slow pace', 'Quinta living'],
    costPerMonth: { 0: 1100, 1: 1700, 2: 2600, 3: 4200 },
    housing: { buy: '~$190K', buyDesc: '2BR village home or country cottage', rent: '~$650/mo' },
    compare: "Portugal's wine country at a fraction of Tuscany or Bordeaux prices — a UNESCO landscape, a slower pace than Lisbon, and the NHR tax regime still applies.",
    page: 'destination-detail.html?id=douro-valley',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Pinhão & Upper Douro', desc: "The heart of port wine country — the most dramatic section of the valley, surrounded by terraced vineyards. Properties here are typically quintas and rural estates. Spend a week before you decide the isolation suits your lifestyle." },
      { name: 'Lamego & Peso da Régua', desc: "The largest towns in the valley — real services, a hospital, weekly markets. More accessible than the upper valley and popular with buyers who want the Douro setting with practical infrastructure." },
      { name: 'Lower Douro & Baião', desc: "The transition zone between wine country and Porto — more affordable, still beautiful, and within an hour of the city. Where buyers who want the landscape without full rural isolation tend to look." },
    ],
    weatherMatch: [2, 1],            // mild/temperate, four seasons (hot summers, cool winters)
    settingMatch: [5, 1, 4],         // countryside (primary), river/lake, small town
    paceMatch: [2, 1, 3],            // slow/easy (primary), mixed, social
    geographyOptions: [4],           // Europe
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [2, 0, 5, 4],     // peace, adventure, culture/arts, health
  },

  {
    id: 'alentejo',
    name: 'Alentejo',
    country: 'Portugal',
    region: 'Alentejo, Portugal',
    flag: '🇵🇹',
    photo: 'images/alentejo.jpg',
    photoCap: 'Cork oaks and wildflowers, Alentejo plains',
    tagline: 'Portugal\'s vast golden interior — cork forests, whitewashed villages, some of the world\'s best olive oil, and a quiet that feels genuinely restorative.',
    tags: ['Wide open landscape', 'Whitewashed villages', 'Cork forests', 'Wine & olive oil', 'Very low cost', 'Off the beaten path'],
    costPerMonth: { 0: 1000, 1: 1500, 2: 2200, 3: 3500 },
    housing: { buy: '~$150K', buyDesc: 'Village home or rural country house', rent: '~$500/mo' },
    compare: "Among the most affordable corners of Western Europe — a 2-hour drive from Lisbon, with a landscape of rolling plains, medieval castles, and a pace of life that hasn't changed much in decades.",
    page: 'destination-detail.html?id=alentejo',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    weatherMatch: [2, 0],            // mild/temperate, warm summers
    settingMatch: [5, 4, 2],         // countryside (primary), small town, open landscape
    paceMatch: [2, 1],               // slow/easy (primary), mixed
    geographyOptions: [4],           // Europe
    lifestyleMatch: [0, 1],          // simple, comfortable
    priorityMatch: [2, 4, 0, 3],     // peace, health, adventure, purpose
  },

  {
    id: 'galicia',
    name: 'Galicia',
    country: 'Spain',
    region: 'Galicia, Northwestern Spain',
    flag: '🇪🇸',
    photo: 'images/galicia.jpg',
    photoCap: 'Green coastline and ría, Galicia',
    tagline: 'The Spain nobody expects — lush, green, rainy, Celtic-inflected, with dramatic Atlantic coastline and some of Spain\'s best seafood at the lowest prices.',
    tags: ['Green Spain', 'Atlantic coast', 'Camino de Santiago', 'Low cost', 'Seafood culture', 'Celtic heritage'],
    costPerMonth: { 0: 1200, 1: 1800, 2: 2700, 3: 4200 },
    housing: { buy: '~$150K', buyDesc: '2BR apartment in a coastal city', rent: '~$600/mo' },
    compare: "Spain's most affordable and most underrated region — the green, rainy Atlantic northwest that feels nothing like Andalusia, with costs well below the Costa del Sol and a genuine slow-food culture.",
    page: 'destination-detail.html?id=galicia',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    weatherMatch: [2, 3],            // mild/temperate (primary — green, rainy, Atlantic), cool/crisp secondary
    settingMatch: [5, 0, 4],         // countryside, coastal, small town
    paceMatch: [2, 1, 3],            // slow/easy, mixed, social
    geographyOptions: [4],           // Europe
    lifestyleMatch: [0, 1],          // simple, comfortable
    priorityMatch: [2, 0, 1, 4],     // peace, adventure, community, health
  },

  {
    id: 'county-clare',
    name: 'County Clare',
    country: 'Ireland',
    region: 'County Clare, West Ireland',
    flag: '🇮🇪',
    photo: 'images/county-clare.jpg',
    photoCap: 'Cliffs of Moher, County Clare, Ireland',
    tagline: 'The Cliffs of Moher, the Burren limestone plateau, trad music in every pub, and the English-speaking ease of Ireland — genuinely wild Atlantic landscape.',
    tags: ['English-speaking', 'Wild Atlantic Way', 'Cliffs of Moher', 'Traditional music', 'Rural Ireland', 'EU access'],
    costPerMonth: { 0: 2100, 1: 2900, 2: 4100, 3: 6200 },
    housing: { buy: '~$320K', buyDesc: '2BR cottage or townhouse in Ennis', rent: '~$1,300/mo' },
    compare: "English-speaking EU living with one of Europe's most dramatic landscapes — the Cliffs of Moher are 20 minutes from Ennis, Galway city is an hour away, and Shannon Airport connects directly to the US.",
    page: 'destination-detail.html?id=county-clare',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Ennis & Surrounds', desc: "The county town with proper city infrastructure — good shops, restaurants, a hospital, and bus connections to Limerick and Galway. The most practical place to base yourself while you explore the county." },
      { name: 'Lahinch & Doolin Coast', desc: "The wild Atlantic west — surf beach at Lahinch, the Cliffs of Moher nearby, traditional music sessions in Doolin. Beautiful and increasingly popular. Isolated from services; honest about that trade-off." },
      { name: 'Killaloe & Lough Derg', desc: "The quieter southeast on the Shannon river — watersports, pubs with river views, a genuinely local community. More affordable than coastal Clare and closer to Limerick city for urban infrastructure." },
    ],
    weatherMatch: [3, 2],            // cool/crisp (primary — Atlantic), mild
    settingMatch: [5, 0, 4],         // countryside (primary), coastal, small town
    paceMatch: [2, 3, 1],            // slow/easy, social, mixed
    geographyOptions: [4],           // Europe
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [2, 1, 0, 5],     // peace, community, adventure, culture/arts
  },

  {
    id: 'cotswolds',
    name: 'The Cotswolds',
    country: 'United Kingdom',
    region: 'Gloucestershire & Oxfordshire, England',
    flag: '🇬🇧',
    photo: 'images/cotswolds.jpg',
    photoCap: 'Bourton-on-the-Water, The Cotswolds',
    tagline: 'Honey-stone villages, rolling English countryside, centuries-old pubs, and market towns that look almost exactly as they did 300 years ago.',
    tags: ['English countryside', 'Honey-stone villages', 'English-speaking', 'Heritage towns', 'Antique markets', 'Walking country'],
    costPerMonth: { 0: 2900, 1: 3900, 2: 5600, 3: 8500 },
    housing: { buy: '~$650K', buyDesc: '2BR Cotswold stone cottage', rent: '~$2,400/mo' },
    compare: "The English countryside retirement dream — picture-perfect villages, slow walks along ancient footpaths, and London 90 minutes by train when you want a city fix. The most expensive region on this list, but unmatched for its specific charm.",
    page: 'destination-detail.html?id=cotswolds',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Chipping Campden & Northern Cotswolds', desc: "Arguably the best-preserved high street in England, walking distance to the Cotswold Way, a genuine community year-round. One of the most sought-after addresses in the region. Visit on a weekday in November to see what daily life looks like off-season." },
      { name: 'Bourton-on-the-Water & Central Cotswolds', desc: "The most visited villages in the region — beautiful but heavily tourist-adjacent from Easter to October. Lower prices than the north but more seasonal noise. Easy access to Cheltenham or Oxford." },
      { name: 'Stroud & The Five Valleys', desc: "The working alternative — a genuinely independent town with a strong arts scene and the best farmers market in the southwest. More affordable than the famous villages with better everyday amenities." },
    ],
    weatherMatch: [3, 1],            // cool/crisp (primary), four seasons
    settingMatch: [5, 4, 2],         // countryside (primary), small town, gentle hills
    paceMatch: [2, 1, 3],            // slow/easy, mixed, social
    geographyOptions: [4],           // Europe
    lifestyleMatch: [1, 2, 3],       // comfortable through luxury
    priorityMatch: [2, 1, 5, 0],     // peace, community, culture/arts, adventure
  },

  {
    id: 'dordogne',
    name: 'Dordogne',
    country: 'France',
    region: 'Périgord, Dordogne, France',
    flag: '🇫🇷',
    photo: 'images/dordogne.jpg',
    photoCap: 'Château de Beynac and Dordogne River, France',
    tagline: 'Prehistoric cave art, medieval bastide villages, foie gras, Bordeaux wines nearby, and a long-established British expat community that\'s made the infrastructure work.',
    tags: ['Medieval villages', 'French countryside', 'Bordeaux wine nearby', 'Expat community', 'Cave art sites', 'French rural life'],
    costPerMonth: { 0: 1800, 1: 2500, 2: 3800, 3: 5800 },
    housing: { buy: '~$280K', buyDesc: 'Stone farmhouse or village home', rent: '~$900/mo' },
    compare: "France's most accessible rural retirement — a long-established English-speaking expat community, close enough to Bordeaux for world-class wine, and farmhouses that would cost four times as much in Provence.",
    page: 'destination-detail.html?id=dordogne',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    weatherMatch: [2, 1],            // mild/temperate, four seasons (warm summers, cool winters)
    settingMatch: [5, 4, 1],         // countryside (primary), small town, river
    paceMatch: [2, 1],               // slow/easy (primary), mixed
    geographyOptions: [4],           // Europe
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [2, 5, 1, 0],     // peace, culture/arts, community, adventure
  },

  {
    id: 'umbria',
    name: 'Umbria',
    country: 'Italy',
    region: 'Umbria, Central Italy',
    flag: '🇮🇹',
    photo: 'images/umbria.jpg',
    photoCap: 'Rolling hills and hilltop towns, Umbria',
    tagline: 'Tuscany without the tourists — hilltop medieval towns, olive groves, truffles, and a pace of life that genuinely slows you down.',
    tags: ['Green heart of Italy', 'Hilltop villages', 'Truffle country', 'Perugia university town', 'Off the tourist trail', 'Medieval heritage'],
    costPerMonth: { 0: 1500, 1: 2200, 2: 3300, 3: 5200 },
    housing: { buy: '~$220K', buyDesc: '2BR in a hilltop medieval city', rent: '~$750/mo' },
    compare: "The Tuscan countryside experience without the Tuscany prices or crowds — hilltop towns like Orvieto and Spoleto are among Italy's most beautiful, and the food (truffles, lentils, cured meats) rivals anywhere in the country.",
    page: 'destination-detail.html?id=umbria',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Perugia & Surrounds', desc: "The regional capital — a proper city with a university, good hospital, airport connections, and a lively cultural scene. The right base if you want real city infrastructure with the Umbrian countryside 20 minutes away." },
      { name: 'Lake Trasimeno & Panicale', desc: "The western lake district — gentle landscape, good cycling, and a long-established foreign resident community that has quietly made this one of Italy's best-kept secrets." },
      { name: 'Assisi, Spoleto & Southern Umbria', desc: "The spiritual and festival corridor — Assisi for extraordinary frescoes, Spoleto for the arts festival and dramatic aqueduct. More tourist-adjacent but with genuine historic depth." },
    ],
    weatherMatch: [2, 1],            // mild/temperate, four seasons
    settingMatch: [5, 4, 2],         // countryside (primary), small town, gentle hills
    paceMatch: [2, 1, 3],            // slow/easy, mixed, social
    geographyOptions: [4],           // Europe
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [2, 5, 1, 4],     // peace, culture/arts, community, health
  },

  // ── Africa — gap-filling ────────────────────────────────────────────────

  {
    id: 'stellenbosch',
    name: 'Stellenbosch',
    country: 'South Africa',
    region: 'Western Cape, South Africa',
    flag: '🇿🇦',
    photo: 'images/stellenbosch.jpg',
    photoCap: 'Cape Winelands and Stellenbosch University, South Africa',
    tagline: 'South Africa\'s wine capital — oak-lined streets, Cape Dutch architecture, world-class Cabernet, and a university town energy 45 minutes from Cape Town.',
    tags: ['Wine capital', 'Cape Dutch architecture', 'University town', 'Outdoor lifestyle', 'Afrikaans culture', 'World-class food scene'],
    costPerMonth: { 0: 1300, 1: 1900, 2: 2900, 3: 4800 },
    housing: { buy: '~$260K', buyDesc: '2BR home in central Stellenbosch', rent: '~$950/mo' },
    compare: "Cape Town's wine-country neighbor — a third of the price of comparable European wine towns, with better weather, world-class restaurants, and the same dramatic mountain backdrop.",
    page: 'destination-detail.html?id=stellenbosch',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Historic Town Center & Dorp Street', desc: "The oak-lined core — Cape Dutch architecture, the best restaurants in the winelands, walking distance to everything. Expensive by South African standards but extraordinary value by international ones." },
      { name: 'Paradyskloof & De Zalze', desc: "The premium residential and estate communities south of the town center — security, golf, walking trails through the vineyards. Where most international buyers who relocate long-term end up." },
      { name: 'Franschhoek Valley', desc: "Twenty minutes from Stellenbosch — arguably better restaurants and a smaller town center. Consider both before committing." },
    ],
    weatherMatch: [2, 0],            // mild/temperate Mediterranean (primary), warm sunny summers
    settingMatch: [5, 4, 2],         // countryside/wine country, small town, mountains
    paceMatch: [1, 2, 3],            // mixed, slow/easy, social
    geographyOptions: [7],           // Africa
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [5, 2, 0, 4],     // culture/arts, peace, adventure, health
  },

  {
    id: 'nairobi',
    name: 'Nairobi',
    country: 'Kenya',
    region: 'Nairobi, Kenya',
    flag: '🇰🇪',
    photo: 'images/nairobi.jpg',
    photoCap: 'Nairobi skyline with Nairobi National Park',
    tagline: 'A cosmopolitan East African capital at 5,500 feet — mild year-round, wildlife in the city\'s backyard, and one of Africa\'s most established expat communities.',
    tags: ['Mild year-round', 'Wildlife nearby', 'Safari gateway', 'Expat hub', 'East African culture', 'Good healthcare'],
    costPerMonth: { 0: 1200, 1: 1900, 2: 2900, 3: 5000 },
    housing: { buy: '~$160K', buyDesc: '2BR apartment in an upscale expat neighborhood', rent: '~$900/mo' },
    compare: "The only major city in the world where you can watch lions roam a national park from the urban skyline — Nairobi sits at highland altitude with year-round spring weather and a surprisingly sophisticated expat infrastructure.",
    page: 'destination-detail.html?id=nairobi',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    weatherMatch: [2],               // mild/temperate year-round (highland climate, ~70°F)
    settingMatch: [3, 4, 5],         // city, small-town neighborhoods, open landscape nearby
    paceMatch: [0, 1, 3],            // active, mixed, social
    geographyOptions: [7],           // Africa
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [0, 1, 3, 4],     // adventure, community, purpose, health
  },

  {
    id: 'zanzibar',
    name: 'Zanzibar',
    country: 'Tanzania',
    region: 'Zanzibar Archipelago, Tanzania',
    flag: '🇹🇿',
    photo: 'images/zanzibar.jpg',
    photoCap: 'Turquoise waters and Stone Town, Zanzibar',
    tagline: 'Spice-scented Stone Town, turquoise Indian Ocean, and a slow island pace that feels genuinely removed from the world — at a fraction of the Caribbean\'s cost.',
    tags: ['Indian Ocean island', 'Stone Town UNESCO site', 'Spice Island', 'Warm year-round', 'Low cost', 'Swahili culture'],
    costPerMonth: { 0: 1000, 1: 1600, 2: 2600, 3: 4200 },
    housing: { buy: '~$180K', buyDesc: 'Apartment or villa near a beach village', rent: '~$700/mo' },
    compare: "Indian Ocean island living at a fraction of Maldives or Bali prices — a UNESCO old town, powder-white beaches, and a Swahili culture that is entirely its own.",
    page: 'destination-detail.html?id=zanzibar',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    weatherMatch: [0],               // warm/sunny tropical year-round
    settingMatch: [0, 4, 3],         // beach (primary), small town Stone Town, city character
    paceMatch: [2, 3, 1],            // slow/easy (primary), social, mixed
    geographyOptions: [7],           // Africa
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [2, 0, 1, 5],     // peace, adventure, community, culture/arts
  },

  {
    id: 'mauritius',
    name: 'Mauritius',
    country: 'Mauritius',
    region: 'Indian Ocean Island',
    flag: '🇲🇺',
    photo: 'images/mauritius.jpg',
    photoCap: 'Lagoon and Le Morne Peninsula, Mauritius',
    tagline: 'The Indian Ocean\'s most polished island — English and French-speaking, world-class infrastructure, a Retired Non-Citizen permit, and lagoons that look like screensavers.',
    tags: ['English & French speaking', 'Retired Non-Citizen permit', 'World-class infrastructure', 'Indian Ocean', 'Multicultural', 'Tax friendly'],
    costPerMonth: { 0: 2500, 1: 3600, 2: 5200, 3: 8500 },
    housing: { buy: '~$400K', buyDesc: 'Apartment or villa in a popular beachside area', rent: '~$1,900/mo' },
    compare: "The Indian Ocean's most sophisticated retirement destination — English-speaking, politically stable, with a dedicated Retired Non-Citizen residency permit and an island lifestyle that blends African, Indian, French, and British influences.",
    page: 'destination-detail.html?id=mauritius',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Grand Baie & The North', desc: "The most developed part of the island for international residents — best restaurant and shopping infrastructure, largest expat community, widest range of approved foreign-buyer developments. The most practical base for daily life." },
      { name: 'Tamarin & Black River', desc: "The west coast surf community — more relaxed and local-feeling than Grand Baie. The Black River Gorges national park nearby and a growing food and wellness scene." },
      { name: 'Beau Champ & East Coast', desc: "The quieter windward side — more affordable developments, less tourist infrastructure. Rewards buyers who want space, privacy, and lower entry prices than the north and west." },
    ],
    weatherMatch: [0, 2],            // warm/sunny (primary), mild in winter months
    settingMatch: [0, 4, 5],         // beach (primary), small town, open countryside
    paceMatch: [2, 1, 3],            // slow/easy, mixed, social
    geographyOptions: [7],           // Africa
    lifestyleMatch: [1, 2, 3],       // comfortable through luxury
    priorityMatch: [2, 0, 1, 4],     // peace, adventure, community, health
  },

  // ── Cool/crisp + Countryside — Australia/NZ ────────────────────────────

  {
    id: 'marlborough-nz',
    name: 'Marlborough',
    country: 'New Zealand',
    region: 'Marlborough, South Island, New Zealand',
    flag: '🇳🇿',
    photo: 'images/marlborough-nz.jpg',
    photoCap: 'Marlborough Sounds and vineyard, New Zealand',
    tagline: 'Sauvignon Blanc country at the top of the South Island — inland vineyards, the fjord-like Sounds, and a rural New Zealand pace that\'s hard to find anywhere else.',
    tags: ['Wine country', 'Marlborough Sounds', 'Rural New Zealand', 'Outdoor lifestyle', 'English-speaking', 'Four seasons'],
    costPerMonth: { 0: 2100, 1: 2900, 2: 4100, 3: 6300 },
    housing: { buy: '~$390K', buyDesc: '2BR in Blenheim or rural Marlborough', rent: '~$1,500/mo' },
    compare: "New Zealand wine country without the Queenstown price tag — Marlborough produces 80% of NZ's Sauvignon Blanc, the Sounds are a short drive away, and the pace is genuinely rural in a country that does rural remarkably well.",
    page: 'destination-detail.html?id=marlborough-nz',
    isInternational: true,
    advisorPage: 'advisor-international.html',
    browseHomesPage: 'browse-homes-international.html',
    scoutingPage: 'scouting-trips.html',
    neighborhoods: [
      { name: 'Blenheim Town', desc: "The regional service center — good hospital, shops, easy access to the vineyards. The most practical place to base daily life in Marlborough with among the most accessible prices in the South Island." },
      { name: 'Picton & Queen Charlotte Sound', desc: "The ferry gateway and entry to the Marlborough Sounds — a genuine small-town waterfront with good restaurants and a year-round community. Properties have water views at prices lower than comparable waterfront in the North Island." },
      { name: 'Marlborough Sounds', desc: "Remote waterfront properties accessible by boat — genuinely unique in New Zealand. Road-accessible Sounds properties offer a practical middle ground for buyers who want the setting without full isolation." },
    ],
    weatherMatch: [1, 3],            // four seasons (primary), cool/crisp winters
    settingMatch: [5, 1, 4],         // countryside/wine country (primary), water/sounds, small town
    paceMatch: [2, 1, 0],            // slow/easy, mixed, active
    geographyOptions: [5],           // Australia/NZ
    lifestyleMatch: [0, 1, 2],       // simple through upscale
    priorityMatch: [2, 0, 4, 1],     // peace, adventure, health, community
  },

];
