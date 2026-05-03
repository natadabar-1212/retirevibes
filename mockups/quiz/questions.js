// questions.js — Vibe Quiz question data
// Edit this file to change copy, options, illustrations, or question order.
// Each question has: part, title, hint, type, cols, sceneKey, caption, options[].
// Optional: useImages (true → render as illustrated cards), max (multi-select cap).
// Option illustrations come from OPTION_SCENES (option-scenes.js) — reference via `svg` field.

const QUESTIONS = [
  {
    part: 'Part 1 — Your Vibe',
    title: 'What kind of weather feels like home?',
    hint: 'Pick the one that sounds most like you.',
    type: 'single',
    cols: 2,
    useImages: true,
    sceneKey: 'q1',
    caption: 'Algarve coast, Portugal — 300 days of sunshine',
    options: [
      { emoji: '☀️', label: 'Warm and sunny year round', svg: OPTION_SCENES.q1.sunny },
      { emoji: '🍂', label: 'Four seasons',                svg: OPTION_SCENES.q1.fourSeasons },
      { emoji: '🌤️', label: 'Mild and temperate',          svg: OPTION_SCENES.q1.mild },
      { emoji: '❄️', label: 'Cool and crisp',              svg: OPTION_SCENES.q1.crisp },
    ]
  },
  {
    part: 'Part 1 — Your Vibe',
    title: 'Where do you see yourself waking up every morning?',
    hint: 'Pick your top 1 or 2.',
    type: 'multi',
    max: 2,
    cols: 3,
    useImages: true,
    sceneKey: 'q2',
    caption: 'Dolomites, Italy — mountain mornings',
    options: [
      { emoji: '🏖️', label: 'On or near the beach',     svg: OPTION_SCENES.q2.beach },
      { emoji: '🛶', label: 'By a lake or river',        svg: OPTION_SCENES.q2.lake },
      { emoji: '⛰️', label: 'Mountains and nature',     svg: OPTION_SCENES.q2.mountain },
      { emoji: '🏙️', label: 'Vibrant city',              svg: OPTION_SCENES.q2.city },
      { emoji: '🏘️', label: 'Charming small town',      svg: OPTION_SCENES.q2.town },
      { emoji: '🌾', label: 'Wide open countryside',     svg: OPTION_SCENES.q2.country },
    ]
  },
  {
    part: 'Part 1 — Your Vibe',
    title: 'Where in the world are you open to retiring?',
    hint: 'Select all that apply.',
    type: 'multi',
    cols: 2,
    useImages: true,
    sceneKey: 'q4',
    caption: 'Stay open — the right place might surprise you',
    options: [
      { emoji: '🇺🇸', label: 'United States',            svg: OPTION_SCENES.q4.us },
      { emoji: '🇨🇦', label: 'Canada',                   svg: OPTION_SCENES.q4.canada },
      { emoji: '🌎', label: 'Mexico & Latin America',     svg: OPTION_SCENES.q4.latam },
      { emoji: '🏝️', label: 'The Caribbean',              svg: OPTION_SCENES.q4.caribbean },
      { emoji: '🏛️', label: 'Europe',                    svg: OPTION_SCENES.q4.europe },
      { emoji: '🇦🇺', label: 'Australia or New Zealand', svg: OPTION_SCENES.q4.australiaNZ },
      { emoji: '🏯', label: 'Asia',                       svg: OPTION_SCENES.q4.asia },
      { emoji: '🌍', label: 'Africa',                     svg: OPTION_SCENES.q4.africa },
    ]
  },
  {
    part: 'Part 1 — Your Vibe',
    title: "What's the pace of your ideal retirement?",
    hint: 'Pick the one that sounds most like you.',
    type: 'single',
    cols: 2,
    useImages: true,
    sceneKey: 'q3',
    caption: 'Alfama, Lisbon — slow mornings, great coffee',
    options: [
      { emoji: '🏃', label: 'Full throttle — I want to be out doing things most days', svg: OPTION_SCENES.q3.active },
      { emoji: '⚖️', label: 'A good mix — active stretches with slow days built in',  svg: OPTION_SCENES.q3.creative },
      { emoji: '🌿', label: 'Slow and easy — unhurried, no fixed agenda',             svg: OPTION_SCENES.q3.relaxed },
      { emoji: '🥂', label: 'Social first — my pace follows my people',               svg: OPTION_SCENES.q3.social },
    ]
  },
  {
    part: 'Part 2 — Your Reality',
    title: 'When you retire, what kind of lifestyle are you imagining?',
    hint: 'Be honest — no judgment.',
    type: 'single',
    cols: 2,
    useImages: true,
    sceneKey: 'q7',
    caption: 'Paros, Greece — luxury for less',
    options: [
      { emoji: '🌱', label: 'Simple and comfortable',          svg: OPTION_SCENES.q5.simple },
      { emoji: '☕', label: 'Comfortable with extras',          svg: OPTION_SCENES.q5.comfortable },
      { emoji: '🥂', label: 'Upscale and enjoyable',            svg: OPTION_SCENES.q5.upscale },
      { emoji: '💎', label: 'Luxury — the best of everything', svg: OPTION_SCENES.q5.luxury },
    ]
  },
  {
    part: 'Part 2 — Your Reality',
    title: 'Where do you see yourself living in retirement?',
    hint: 'Select all that apply.',
    type: 'multi',
    cols: 3,
    useImages: true,
    sceneKey: 'q8',
    caption: 'The "how" matters as much as the "where"',
    options: [
      { emoji: '🏡', label: 'Own my home',                       svg: OPTION_SCENES.q6.own },
      { emoji: '🔑', label: 'Open to renting',                   svg: OPTION_SCENES.q6.rent },
      { emoji: '🏖️', label: 'Resort or retirement community',    svg: OPTION_SCENES.q6.resort },
      { emoji: '🚐', label: 'Non-traditional (RV, boat, slow travel)', svg: OPTION_SCENES.q6.nontraditional },
      { emoji: '🤔', label: 'Not sure yet',                      svg: OPTION_SCENES.q6.notSure },
    ]
  },
  {
    part: 'Part 2 — Your Reality',
    title: 'What matters most?',
    hint: 'Pick your top 3.',
    type: 'multi',
    max: 3,
    cols: 3,
    useImages: true,
    sceneKey: 'q10',
    caption: 'Tuscany, Italy — la dolce vita',
    options: [
      { emoji: '🗺️', label: 'Adventure',           svg: OPTION_SCENES.q8.adventure },
      { emoji: '🫂', label: 'Community',             svg: OPTION_SCENES.q8.community },
      { emoji: '🕊️', label: 'Peace & simplicity',  svg: OPTION_SCENES.q8.peace },
      { emoji: '🎯', label: 'Purpose & passion',    svg: OPTION_SCENES.q8.purpose },
      { emoji: '🧘', label: 'Health & wellness',    svg: OPTION_SCENES.q8.health },
      { emoji: '🎭', label: 'Culture & creativity', svg: OPTION_SCENES.q8.culture },
    ]
  },
];
