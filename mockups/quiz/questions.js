// questions.js — Vibe Quiz question data
// Edit this file to change copy, options, illustrations, or question order.
// Each question has: part, title, hint, type, cols, sceneKey, caption, options[].
// Optional: useImages (true → render as illustrated cards), max (multi-select cap).
// Option illustrations come from OPTION_SCENES (option-scenes.js) — reference via `svg` field.

const QUESTIONS = [
  {
    part: 'Part 1 — Your Vibe',
    title: 'What kind of weather feels like home?',
    hint: 'Pick the one that feels right.',
    type: 'single',
    cols: 2,
    useImages: true,
    sceneKey: 'q1',
    caption: 'Algarve coast, Portugal — 300 days of sunshine',
    options: [
      { emoji: '☀️', label: 'Warm & sunny',    svg: OPTION_SCENES.q1.sunny },
      { emoji: '🍂', label: 'Four seasons',    svg: OPTION_SCENES.q1.fourSeasons },
      { emoji: '🌤️', label: 'Mild & temperate', svg: OPTION_SCENES.q1.mild },
      { emoji: '❄️', label: 'Cool & crisp',    svg: OPTION_SCENES.q1.crisp },
    ]
  },
  {
    part: 'Part 1 — Your Vibe',
    title: 'Where do you see yourself waking up every morning?',
    hint: 'Pick the ones that feel like yours — up to 2.',
    type: 'multi',
    max: 2,
    cols: 3,
    useImages: true,
    sceneKey: 'q2',
    caption: 'Dolomites, Italy — mountain mornings',
    options: [
      { emoji: '🏖️', label: 'The beach',        svg: OPTION_SCENES.q2.beach },
      { emoji: '🛶', label: 'Lakes & rivers',   svg: OPTION_SCENES.q2.lake },
      { emoji: '⛰️', label: 'Mountains',        svg: OPTION_SCENES.q2.mountain },
      { emoji: '🏙️', label: 'Vibrant city',     svg: OPTION_SCENES.q2.city },
      { emoji: '🏘️', label: 'Charming small town', svg: OPTION_SCENES.q2.town },
      { emoji: '🌾', label: 'Countryside',      svg: OPTION_SCENES.q2.country },
    ]
  },
  {
    part: 'Part 1 — Your Vibe',
    title: 'Where in the world are you open to retiring?',
    hint: 'Select all that apply — stay open, the right place might surprise you.',
    type: 'multi',
    cols: 2,
    options: [
      { emoji: '🇺🇸', label: 'United States',           value: 0 },
      { emoji: '🇨🇦', label: 'Canada',                  value: 1 },
      { emoji: '🌎', label: 'Mexico & Latin America',    value: 2 },
      { emoji: '🏝️', label: 'The Caribbean',             value: 3 },
      { emoji: '🏛️', label: 'Europe',                   value: 4 },
      { emoji: '🦘', label: 'Australia & New Zealand',   value: 5 },
      { emoji: '🏯', label: 'Asia',                      value: 6 },
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
      { emoji: '🏃', label: 'On the go',    svg: OPTION_SCENES.q3.active },
      { emoji: '☕', label: 'Mix it up',    svg: OPTION_SCENES.q3.creative },
      { emoji: '🌿', label: 'Take it slow', svg: OPTION_SCENES.q3.relaxed },
      { emoji: '🥂', label: 'Socialite',    svg: OPTION_SCENES.q3.social },
    ]
  },
  {
    part: 'Part 2 — How You Live',
    title: 'When you retire, what kind of lifestyle are you imagining?',
    hint: 'Dream a little.',
    type: 'single',
    cols: 2,
    useImages: true,
    sceneKey: 'q7',
    caption: 'Paros, Greece — whitewashed walls, deep blue calm',
    options: [
      { emoji: '🌱', label: 'Simple & comfortable', svg: OPTION_SCENES.q5.simple },
      { emoji: '☕', label: 'Comfortable with extras', svg: OPTION_SCENES.q5.comfortable },
      { emoji: '🥂', label: 'Upscale',               svg: OPTION_SCENES.q5.upscale },
      { emoji: '💎', label: 'Pure luxury',            svg: OPTION_SCENES.q5.luxury },
    ]
  },
  {
    part: 'Part 2 — How You Live',
    title: 'Where do you see yourself living in retirement?',
    hint: 'Pick everything that feels right — or that you\'re open to.',
    type: 'multi',
    cols: 3,
    useImages: true,
    sceneKey: 'q8',
    caption: 'The "how" matters as much as the "where"',
    options: [
      { emoji: '🏡', label: 'Own my home',       svg: OPTION_SCENES.q6.own },
      { emoji: '🔑', label: 'Open to renting',   svg: OPTION_SCENES.q6.rent },
      { emoji: '🏖️', label: 'Resort community',  svg: OPTION_SCENES.q6.resort },
      { emoji: '🚐', label: 'Nomadic lifestyle',  svg: OPTION_SCENES.q6.nontraditional },
      { emoji: '🤔', label: 'Not sure yet',       svg: OPTION_SCENES.q6.notSure },
    ]
  },
  {
    part: 'Part 2 — How You Live',
    title: 'What matters most?',
    hint: 'Choose the 3 that matter most to you right now.',
    type: 'multi',
    max: 3,
    cols: 3,
    useImages: true,
    sceneKey: 'q10',
    caption: 'Tuscany, Italy — la dolce vita',
    options: [
      { emoji: '🗺️', label: 'Adventure',           svg: OPTION_SCENES.q8.adventure },
      { emoji: '🫂', label: 'Community',            svg: OPTION_SCENES.q8.community },
      { emoji: '🕊️', label: 'Peace & simplicity',  svg: OPTION_SCENES.q8.peace },
      { emoji: '🎯', label: 'Purpose & passion',   svg: OPTION_SCENES.q8.purpose },
      { emoji: '🧘', label: 'Health & wellness',   svg: OPTION_SCENES.q8.health },
      { emoji: '🎭', label: 'Culture & creativity', svg: OPTION_SCENES.q8.culture },
    ]
  },
];
