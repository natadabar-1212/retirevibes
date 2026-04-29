// scenes.js — inline SVG illustrations for the Vibe Quiz right-panel hero
// One scene per question + welcome + processing. Travel-poster style, on-brand palette.
// No external dependencies. Swap for curated photos before launch if desired.

const SCENES = {
  // Welcome — expansive horizon with sun and distant landmass
  welcome: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="wsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E07A5F"/><stop offset="0.5" stop-color="#C9674F"/><stop offset="1" stop-color="#3D2B3D"/></linearGradient></defs>
    <rect width="800" height="500" fill="url(#wsky)"/>
    <circle cx="400" cy="270" r="70" fill="#F2D4A0" opacity="0.95"/>
    <circle cx="400" cy="270" r="110" fill="#F2D4A0" opacity="0.15"/>
    <path d="M0,350 Q200,320 400,340 T800,335 L800,500 L0,500 Z" fill="#2D5F6C" opacity="0.7"/>
    <path d="M0,380 Q150,360 300,375 Q500,390 800,370 L800,500 L0,500 Z" fill="#1F4550" opacity="0.8"/>
    <path d="M0,420 Q250,410 500,420 T800,415 L800,500 L0,500 Z" fill="#0F2A33"/>
  </svg>`,

  // Q1 — Warm and sunny: palm silhouette, bright sun, coastline
  q1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q1s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2A365"/><stop offset="1" stop-color="#E07A5F"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q1s)"/>
    <circle cx="420" cy="280" r="90" fill="#F9E1B0"/>
    <circle cx="420" cy="280" r="130" fill="#F9E1B0" opacity="0.2"/>
    <path d="M0,560 Q150,540 300,555 T600,550 L600,800 L0,800 Z" fill="#2D5F6C" opacity="0.85"/>
    <path d="M0,640 Q200,620 400,635 T600,630 L600,800 L0,800 Z" fill="#1F4550"/>
    <g transform="translate(140,540)">
      <rect x="-4" y="0" width="8" height="100" rx="4" fill="#2A1F1A"/>
      <path d="M0,10 Q-60,-10 -90,-40 Q-50,-30 0,-5 Z" fill="#1F3A2A"/>
      <path d="M0,10 Q60,-10 90,-40 Q50,-30 0,-5 Z" fill="#1F3A2A"/>
      <path d="M0,10 Q-30,-40 -10,-80 Q10,-50 5,-10 Z" fill="#1F3A2A"/>
      <path d="M0,10 Q30,-40 10,-80 Q-10,-50 -5,-10 Z" fill="#1F3A2A"/>
    </g>
  </svg>`,

  // Q2 — Mountains and nature: layered peaks, distant sun
  q2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q2s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B8CBD4"/><stop offset="0.6" stop-color="#6A8CAF"/><stop offset="1" stop-color="#2D5F6C"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q2s)"/>
    <circle cx="420" cy="220" r="50" fill="#F2D4A0" opacity="0.95"/>
    <path d="M0,560 L180,360 L280,460 L380,320 L520,500 L600,420 L600,800 L0,800 Z" fill="#3D5A6C"/>
    <path d="M0,640 L120,520 L240,600 L340,500 L460,620 L600,560 L600,800 L0,800 Z" fill="#1F4550"/>
    <path d="M0,720 L100,660 L220,700 L340,660 L480,710 L600,680 L600,800 L0,800 Z" fill="#0F2A33"/>
  </svg>`,

  // Q3 — Days feel: arched window with morning light
  q3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q3s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D4A574"/><stop offset="1" stop-color="#C9674F"/></linearGradient>
    <linearGradient id="q3w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FAE8CE"/><stop offset="1" stop-color="#F2A365"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q3s)"/>
    <path d="M150,200 Q150,120 300,120 Q450,120 450,200 L450,700 L150,700 Z" fill="url(#q3w)"/>
    <path d="M300,120 L300,700 M150,380 L450,380" stroke="#C9674F" stroke-width="6" opacity="0.4"/>
    <circle cx="300" cy="260" r="40" fill="#F9E1B0" opacity="0.9"/>
    <path d="M180,640 L180,700 L240,700 L240,640 Z M200,600 Q200,560 210,600 Q220,560 220,600 Z" fill="#2A1F1A" opacity="0.6"/>
  </svg>`,

  // Q4 — World: abstract globe with continents
  q4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q4s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A8BA8"/><stop offset="1" stop-color="#1F4550"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q4s)"/>
    <circle cx="300" cy="400" r="220" fill="#2D5F6C" stroke="#D4A574" stroke-width="3"/>
    <circle cx="300" cy="400" r="220" fill="none" stroke="#D4A574" stroke-width="1" opacity="0.3"/>
    <ellipse cx="300" cy="400" rx="220" ry="60" fill="none" stroke="#D4A574" stroke-width="1" opacity="0.3"/>
    <ellipse cx="300" cy="400" rx="220" ry="120" fill="none" stroke="#D4A574" stroke-width="1" opacity="0.3"/>
    <path d="M180,330 Q210,310 240,340 Q230,380 200,385 Q185,370 180,330 Z" fill="#E07A5F"/>
    <path d="M280,290 Q340,280 360,320 Q350,370 300,365 Q270,340 280,290 Z" fill="#D4A574"/>
    <path d="M380,370 Q420,365 430,410 Q400,440 370,420 Q365,395 380,370 Z" fill="#E07A5F"/>
    <path d="M240,450 Q290,445 310,490 Q290,520 250,500 Q230,475 240,450 Z" fill="#D4A574"/>
    <circle cx="120" cy="180" r="3" fill="#F9E1B0"/><circle cx="480" cy="160" r="2" fill="#F9E1B0"/><circle cx="520" cy="250" r="2" fill="#F9E1B0"/><circle cx="80" cy="280" r="2" fill="#F9E1B0"/>
  </svg>`,

  // Q5 — Setting sun over water (formerly retire age)
  q5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q5s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2A365"/><stop offset="0.5" stop-color="#C9674F"/><stop offset="1" stop-color="#3D2B3D"/></linearGradient>
    <linearGradient id="q5w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9674F"/><stop offset="1" stop-color="#1F2D3D"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q5s)"/>
    <circle cx="300" cy="420" r="85" fill="#F9E1B0"/>
    <rect y="440" width="600" height="360" fill="url(#q5w)"/>
    <rect x="100" y="470" width="400" height="2" fill="#F9E1B0" opacity="0.7"/>
    <rect x="150" y="510" width="300" height="2" fill="#F9E1B0" opacity="0.5"/>
    <rect x="200" y="560" width="200" height="2" fill="#F9E1B0" opacity="0.3"/>
  </svg>`,

  // Q6 — Coastal town skyline silhouette
  q6: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q6s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D4E4EA"/><stop offset="1" stop-color="#6A8CAF"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q6s)"/>
    <circle cx="450" cy="250" r="60" fill="#F2D4A0" opacity="0.8"/>
    <g fill="#2D5F6C">
      <rect x="60" y="480" width="60" height="140"/>
      <rect x="130" y="440" width="50" height="180"/>
      <rect x="190" y="500" width="70" height="120"/>
      <rect x="270" y="420" width="60" height="200"/>
      <polygon points="270,420 300,390 330,420"/>
      <rect x="340" y="460" width="55" height="160"/>
      <rect x="405" y="500" width="45" height="120"/>
      <rect x="460" y="440" width="70" height="180"/>
      <polygon points="460,440 495,400 530,440"/>
      <rect x="540" y="490" width="60" height="130"/>
    </g>
    <rect y="620" width="600" height="180" fill="#1F4550"/>
    <rect x="80" y="540" width="8" height="8" fill="#F9E1B0"/><rect x="150" y="490" width="8" height="8" fill="#F9E1B0"/><rect x="290" y="470" width="8" height="8" fill="#F9E1B0"/><rect x="485" y="490" width="8" height="8" fill="#F9E1B0"/>
  </svg>`,

  // Q7 — Mediterranean arches
  q7: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q7s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2E8DC"/><stop offset="1" stop-color="#D4A574"/></linearGradient>
    <linearGradient id="q7a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2A365"/><stop offset="1" stop-color="#C9674F"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q7s)"/>
    <rect y="660" width="600" height="140" fill="#E8D9C4"/>
    <g fill="url(#q7a)">
      <path d="M80,660 L80,400 Q80,340 140,340 Q200,340 200,400 L200,660 Z"/>
      <path d="M240,660 L240,380 Q240,310 300,310 Q360,310 360,380 L360,660 Z"/>
      <path d="M400,660 L400,400 Q400,340 460,340 Q520,340 520,400 L520,660 Z"/>
    </g>
    <rect y="660" width="600" height="8" fill="#3D2B3D" opacity="0.3"/>
  </svg>`,

  // Q8 — House on hillside
  q8: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q8s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2E8DC"/><stop offset="1" stop-color="#D4A574"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q8s)"/>
    <circle cx="460" cy="220" r="50" fill="#F9E1B0" opacity="0.9"/>
    <path d="M0,620 Q200,560 400,600 T600,580 L600,800 L0,800 Z" fill="#8A6E3F"/>
    <path d="M0,680 Q250,640 500,670 T600,660 L600,800 L0,800 Z" fill="#5C4A2A"/>
    <g transform="translate(220,440)">
      <polygon points="80,0 0,70 160,70" fill="#C9674F"/>
      <rect x="10" y="70" width="140" height="120" fill="#E8D9C4"/>
      <rect x="60" y="120" width="40" height="70" fill="#2A1F1A"/>
      <rect x="25" y="95" width="25" height="25" fill="#6A8CAF"/>
      <rect x="110" y="95" width="25" height="25" fill="#6A8CAF"/>
    </g>
    <path d="M120,540 Q110,490 130,480 Q150,490 140,540 Z" fill="#2D5F6C"/>
    <path d="M460,560 Q450,510 470,500 Q490,510 480,560 Z" fill="#2D5F6C"/>
  </svg>`,

  // Q9 — Two figures on beach at sunset
  q9: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q9s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E07A5F"/><stop offset="0.6" stop-color="#C9674F"/><stop offset="1" stop-color="#3D2B3D"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q9s)"/>
    <circle cx="300" cy="380" r="75" fill="#F9E1B0"/>
    <rect y="440" width="600" height="360" fill="#2A1F1A"/>
    <path d="M0,440 Q300,460 600,440 L600,470 Q300,490 0,470 Z" fill="#F2A365" opacity="0.4"/>
    <g fill="#0F0A08" transform="translate(240,440)">
      <ellipse cx="30" cy="170" rx="22" ry="6"/>
      <path d="M30,30 Q40,20 45,30 Q45,50 35,55 Q30,60 25,55 Q15,50 15,30 Q20,20 30,30 Z"/>
      <path d="M18,60 Q30,55 42,60 L46,170 L14,170 Z"/>
    </g>
    <g fill="#0F0A08" transform="translate(310,440)">
      <ellipse cx="30" cy="170" rx="22" ry="6"/>
      <path d="M30,40 Q38,32 42,40 Q42,56 34,60 Q30,64 26,60 Q18,56 18,40 Q22,32 30,40 Z"/>
      <path d="M20,64 Q30,60 40,64 L44,170 L16,170 Z"/>
    </g>
  </svg>`,

  // Q10 — Sunrise with radiating rays
  q10: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="q10s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D4A574"/><stop offset="0.5" stop-color="#C9674F"/><stop offset="1" stop-color="#3D5A6C"/></linearGradient></defs>
    <rect width="600" height="800" fill="url(#q10s)"/>
    <g opacity="0.2" stroke="#F9E1B0" stroke-width="2" fill="none" transform="translate(300,500)">
      <line x1="0" y1="0" x2="-300" y2="-250"/><line x1="0" y1="0" x2="-200" y2="-320"/>
      <line x1="0" y1="0" x2="-100" y2="-360"/><line x1="0" y1="0" x2="0" y2="-380"/>
      <line x1="0" y1="0" x2="100" y2="-360"/><line x1="0" y1="0" x2="200" y2="-320"/>
      <line x1="0" y1="0" x2="300" y2="-250"/>
    </g>
    <path d="M0,500 Q150,440 300,460 Q450,480 600,450 L600,500 Z" fill="#8A6E3F"/>
    <path d="M0,500 L600,500 L600,800 L0,800 Z" fill="#3D2B3D"/>
    <circle cx="300" cy="500" r="80" fill="#F9E1B0"/>
    <path d="M220,500 A80,80 0 0,0 380,500 Z" fill="#F2D4A0"/>
  </svg>`,

  // Processing — dreamy layered landscape
  processing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="ps" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2D5F6C"/><stop offset="0.5" stop-color="#C9674F"/><stop offset="1" stop-color="#D4A574"/></linearGradient></defs>
    <rect width="1600" height="1000" fill="url(#ps)"/>
    <circle cx="800" cy="500" r="140" fill="#F9E1B0" opacity="0.95"/>
    <circle cx="800" cy="500" r="200" fill="#F9E1B0" opacity="0.15"/>
    <path d="M0,700 Q400,660 800,690 T1600,680 L1600,1000 L0,1000 Z" fill="#1F4550" opacity="0.8"/>
    <path d="M0,820 Q400,790 800,810 T1600,800 L1600,1000 L0,1000 Z" fill="#0F2A33"/>
    <g fill="#F9E1B0" opacity="0.8">
      <circle cx="200" cy="200" r="2"/><circle cx="400" cy="150" r="2"/><circle cx="1200" cy="180" r="2"/><circle cx="1400" cy="250" r="2"/><circle cx="1500" cy="120" r="2"/><circle cx="300" cy="280" r="1.5"/><circle cx="1100" cy="280" r="1.5"/>
    </g>
  </svg>`,
};

// Warm gradient fallbacks per screen
const GRADIENTS = {
  welcome:    'linear-gradient(135deg, #E07A5F 0%, #D4A574 60%, #2D5F6C 100%)',
  q1:         'linear-gradient(135deg, #F2A365 0%, #E07A5F 100%)',
  q2:         'linear-gradient(160deg, #6A8CAF 0%, #2D5F6C 100%)',
  q3:         'linear-gradient(135deg, #D4A574 0%, #C9674F 100%)',
  q4:         'linear-gradient(135deg, #4A8BA8 0%, #2D5F6C 100%)',
  q5:         'linear-gradient(135deg, #F2A365 0%, #C9674F 60%, #3D2B3D 100%)',
  q6:         'linear-gradient(160deg, #8DB4C2 0%, #2D5F6C 100%)',
  q7:         'linear-gradient(135deg, #E8C9A0 0%, #D4A574 100%)',
  q8:         'linear-gradient(135deg, #F2E8DC 0%, #D4A574 100%)',
  q9:         'linear-gradient(135deg, #E07A5F 0%, #C9674F 60%, #3D2B3D 100%)',
  q10:        'linear-gradient(135deg, #D4A574 0%, #8A6E3F 60%, #3D5A6C 100%)',
  processing: 'linear-gradient(135deg, #2D5F6C 0%, #C9674F 60%, #D4A574 100%)',
};
