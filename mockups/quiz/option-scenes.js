// option-scenes.js — inline SVG illustrations for image-based answer cards.
// Each scene is a small 4:3 vignette (viewBox 400x300) using the brand palette.
// No external dependencies; always renders.
// Edit a single illustration without touching anything else.

const OPTION_SCENES = {
  // ---------- Q1: Weather ----------
  q1: {
    sunny: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#F2A365"/>
      <circle cx="290" cy="90" r="50" fill="#F9E1B0"/>
      <circle cx="290" cy="90" r="75" fill="#F9E1B0" opacity="0.2"/>
      <path d="M0,230 Q200,200 400,220 L400,300 L0,300 Z" fill="#C9674F"/>
      <g transform="translate(90,200)" fill="#1F3A2A">
        <rect x="-3" y="0" width="6" height="55"/>
        <path d="M0,5 Q-40,-10 -60,-30 Q-30,-22 0,0 Z"/>
        <path d="M0,5 Q40,-10 60,-30 Q30,-22 0,0 Z"/>
        <path d="M0,5 Q-20,-30 -8,-58 Q5,-30 0,-5 Z"/>
        <path d="M0,5 Q20,-30 8,-58 Q-5,-30 0,-5 Z"/>
      </g>
    </svg>`,
    fourSeasons: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#D4A574"/>
      <rect y="220" width="400" height="80" fill="#8A6E3F"/>
      <g transform="translate(200,150)">
        <rect x="-8" y="0" width="16" height="90" fill="#5C4A2A"/>
        <circle cx="0" cy="-10" r="55" fill="#C9674F"/>
        <circle cx="-30" cy="-25" r="38" fill="#E07A5F"/>
        <circle cx="30" cy="-20" r="38" fill="#D4A574"/>
        <circle cx="0" cy="-50" r="30" fill="#F2A365"/>
      </g>
      <ellipse cx="80" cy="200" rx="9" ry="4" fill="#C9674F" transform="rotate(30 80 200)"/>
      <ellipse cx="320" cy="220" rx="9" ry="4" fill="#E07A5F" transform="rotate(-15 320 220)"/>
      <ellipse cx="60" cy="245" rx="7" ry="3" fill="#F2A365"/>
    </svg>`,
    mild: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="#E8C9A0"/>
      <rect y="200" width="400" height="100" fill="#F2E8DC"/>
      <circle cx="80" cy="60" r="28" fill="#F9E1B0"/>
      <g fill="#FAF4ED">
        <path d="M60,200 L60,140 Q60,100 100,100 Q140,100 140,140 L140,200 Z"/>
        <path d="M180,200 L180,120 Q180,80 220,80 Q260,80 260,120 L260,200 Z"/>
        <path d="M300,200 L300,140 Q300,100 340,100 Q380,100 380,140 L380,200 Z"/>
      </g>
      <rect y="195" width="400" height="6" fill="#D4A574"/>
    </svg>`,
    crisp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#D4E4EA"/>
      <path d="M0,180 L120,80 L240,140 L400,90 L400,300 L0,300 Z" fill="#6A8CAF"/>
      <path d="M0,230 Q120,200 240,220 Q360,210 400,225 L400,300 L0,300 Z" fill="#FAF4ED"/>
      <g transform="translate(120,180)" fill="#1F4550">
        <polygon points="0,-40 -22,30 22,30"/>
        <polygon points="0,-15 -28,42 28,42"/>
      </g>
      <rect x="115" y="222" width="10" height="18" fill="#5C4A2A"/>
      <g transform="translate(280,200)" fill="#1F4550">
        <polygon points="0,-50 -28,40 28,40"/>
      </g>
      <rect x="275" y="240" width="10" height="20" fill="#5C4A2A"/>
      <circle cx="60" cy="50" r="3" fill="white"/><circle cx="320" cy="40" r="3" fill="white"/><circle cx="180" cy="30" r="2" fill="white"/><circle cx="350" cy="100" r="2" fill="white"/>
    </svg>`,
  },

  // ---------- Q2: Landscape (where you wake up) ----------
  q2: {
    beach: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="170" fill="#B8CBD4"/>
      <rect y="170" width="400" height="50" fill="#2D5F6C"/>
      <rect y="220" width="400" height="80" fill="#F2E8DC"/>
      <circle cx="320" cy="60" r="32" fill="#F9E1B0"/>
      <g transform="translate(80,210)" fill="#1F3A2A">
        <rect x="-3" y="0" width="6" height="50"/>
        <path d="M0,5 Q-35,-10 -55,-25 Q-25,-20 0,0 Z"/>
        <path d="M0,5 Q35,-10 55,-25 Q25,-20 0,0 Z"/>
        <path d="M0,5 Q-15,-25 -8,-50 Q5,-25 0,-5 Z"/>
      </g>
    </svg>`,
    lake: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="170" fill="#B8CBD4"/>
      <rect y="170" width="400" height="130" fill="#4A8BA8"/>
      <path d="M0,170 L0,90 L80,40 L160,90 L240,30 L320,80 L400,50 L400,170 Z" fill="#3D5A6C"/>
      <path d="M0,170 L0,150 L80,120 L160,150 L240,110 L320,140 L400,120 L400,170 Z" fill="#1F4550" opacity="0.55"/>
      <rect x="60" y="210" width="120" height="2" fill="#F9E1B0" opacity="0.6"/>
      <rect x="220" y="240" width="100" height="2" fill="#F9E1B0" opacity="0.5"/>
      <circle cx="60" cy="60" r="20" fill="#F9E1B0" opacity="0.85"/>
    </svg>`,
    mountain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#B8CBD4"/>
      <path d="M0,210 L80,110 L150,170 L230,70 L320,160 L400,120 L400,300 L0,300 Z" fill="#3D5A6C"/>
      <path d="M0,260 L60,200 L130,240 L210,180 L300,230 L400,210 L400,300 L0,300 Z" fill="#1F4550"/>
      <path d="M230,70 L213,105 L247,105 Z" fill="#FAF4ED"/>
      <path d="M80,110 L70,135 L90,135 Z" fill="#FAF4ED"/>
      <circle cx="350" cy="50" r="22" fill="#F9E1B0" opacity="0.85"/>
    </svg>`,
    city: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#3D5A6C"/>
      <circle cx="320" cy="60" r="28" fill="#F9E1B0" opacity="0.75"/>
      <g fill="#1F2D3D">
        <rect x="20" y="180" width="40" height="120"/>
        <rect x="70" y="140" width="35" height="160"/>
        <rect x="115" y="200" width="50" height="100"/>
        <rect x="175" y="100" width="45" height="200"/>
        <rect x="230" y="160" width="40" height="140"/>
        <rect x="280" y="120" width="50" height="180"/>
        <rect x="340" y="180" width="50" height="120"/>
      </g>
      <g fill="#F9E1B0">
        <rect x="35" y="200" width="6" height="6"/><rect x="80" y="160" width="6" height="6"/><rect x="130" y="220" width="6" height="6"/><rect x="190" y="120" width="6" height="6"/><rect x="245" y="180" width="6" height="6"/><rect x="300" y="160" width="6" height="6"/><rect x="190" y="200" width="6" height="6"/><rect x="80" y="220" width="6" height="6"/>
      </g>
    </svg>`,
    town: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E8C9A0"/>
      <rect y="225" width="400" height="75" fill="#8A6E3F"/>
      <g>
        <rect x="50" y="170" width="55" height="60" fill="#FAF4ED"/>
        <polygon points="50,170 77,140 105,170" fill="#C9674F"/>
        <rect x="68" y="195" width="20" height="35" fill="#5C4A2A"/>
        <rect x="125" y="150" width="80" height="80" fill="#E8D9C4"/>
        <polygon points="125,150 165,115 205,150" fill="#C9674F"/>
        <polygon points="160,115 165,95 170,115" fill="#5C4A2A"/>
        <rect x="155" y="190" width="20" height="40" fill="#5C4A2A"/>
        <rect x="180" y="185" width="15" height="15" fill="#F2A365"/>
        <rect x="225" y="170" width="60" height="60" fill="#FAF4ED"/>
        <polygon points="225,170 255,140 285,170" fill="#C9674F"/>
        <rect x="305" y="180" width="50" height="50" fill="#E8D9C4"/>
        <polygon points="305,180 330,155 355,180" fill="#C9674F"/>
      </g>
      <circle cx="340" cy="60" r="22" fill="#F9E1B0"/>
    </svg>`,
    country: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#B8CBD4"/>
      <path d="M0,180 Q100,140 200,170 Q300,200 400,160 L400,300 L0,300 Z" fill="#A8B888"/>
      <path d="M0,230 Q150,190 300,220 L400,210 L400,300 L0,300 Z" fill="#7A8A60"/>
      <g transform="translate(265,160)">
        <rect x="0" y="0" width="55" height="42" fill="#C9674F"/>
        <polygon points="0,0 27,-22 55,0" fill="#8A4A38"/>
        <rect x="22" y="15" width="13" height="27" fill="#5C4A2A"/>
      </g>
      <circle cx="60" cy="50" r="20" fill="#FAF4ED" opacity="0.75"/>
      <circle cx="95" cy="50" r="26" fill="#FAF4ED" opacity="0.75"/>
      <circle cx="200" cy="40" r="18" fill="#FAF4ED" opacity="0.65"/>
    </svg>`,
  },

  // ---------- Q3: Pace ----------
  q3: {
    active: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#F2A365"/>
      <path d="M0,200 L130,90 L240,160 L400,110 L400,300 L0,300 Z" fill="#C9674F"/>
      <g transform="translate(200,180)" stroke="#1F2D3D" stroke-width="5" fill="none">
        <circle cx="-35" cy="50" r="25"/>
        <circle cx="35" cy="50" r="25"/>
        <path d="M-35,50 L-5,15 L35,50"/>
        <line x1="-5" y1="15" x2="-15" y2="-12"/>
      </g>
      <circle cx="183" cy="158" r="9" fill="#1F2D3D"/>
    </svg>`,
    creative: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <!-- Mix it up: left = café morning, right = outdoor afternoon -->
      <rect width="400" height="300" fill="#D4A574"/>
      <circle cx="340" cy="58" r="28" fill="#F9E1B0" opacity="0.9"/>
      <!-- Mountains backdrop -->
      <path d="M0,260 L90,150 L180,220 L260,130 L340,195 L400,160 L400,300 L0,300 Z" fill="#4A8BA8" opacity="0.8"/>
      <path d="M0,265 L90,170 L180,235 L400,265 L400,300 L0,300 Z" fill="#3D7A8A"/>
      <!-- Left: café table -->
      <rect x="28" y="196" width="110" height="7" rx="3" fill="#5C4A2A"/>
      <rect x="52" y="203" width="8" height="38" fill="#5C4A2A"/>
      <rect x="120" y="203" width="8" height="38" fill="#5C4A2A"/>
      <!-- Coffee cup -->
      <rect x="68" y="170" width="24" height="28" rx="3" fill="#FAF4ED"/>
      <path d="M92,178 Q103,178 103,186 Q103,194 92,194" fill="none" stroke="#FAF4ED" stroke-width="3.5"/>
      <path d="M75,165 Q77,157 75,149" stroke="#FAF4ED" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M83,163 Q85,154 83,146" stroke="#FAF4ED" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <!-- Right: hiker figure -->
      <circle cx="290" cy="148" r="11" fill="#FAF4ED"/>
      <line x1="290" y1="159" x2="290" y2="193" stroke="#FAF4ED" stroke-width="5" stroke-linecap="round"/>
      <line x1="290" y1="172" x2="275" y2="185" stroke="#FAF4ED" stroke-width="4" stroke-linecap="round"/>
      <line x1="290" y1="172" x2="305" y2="185" stroke="#FAF4ED" stroke-width="4" stroke-linecap="round"/>
      <line x1="290" y1="193" x2="277" y2="218" stroke="#FAF4ED" stroke-width="4" stroke-linecap="round"/>
      <line x1="290" y1="193" x2="303" y2="218" stroke="#FAF4ED" stroke-width="4" stroke-linecap="round"/>
      <line x1="305" y1="168" x2="318" y2="222" stroke="#FAF4ED" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
    </svg>`,
    relaxed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E8C9A0"/>
      <rect y="220" width="400" height="80" fill="#8A6E3F"/>
      <g transform="translate(70,180)">
        <rect x="-3" y="0" width="6" height="60" fill="#5C4A2A"/>
      </g>
      <g transform="translate(330,180)">
        <rect x="-3" y="0" width="6" height="60" fill="#5C4A2A"/>
      </g>
      <path d="M70,200 Q200,260 330,200" stroke="#FAF4ED" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M75,200 Q200,250 325,200" stroke="#E8D9C4" stroke-width="3" fill="none"/>
      <circle cx="200" cy="232" r="12" fill="#1F2D3D"/>
      <ellipse cx="200" cy="232" rx="22" ry="6" fill="#1F2D3D" opacity="0.4"/>
      <circle cx="340" cy="60" r="25" fill="#F9E1B0"/>
    </svg>`,
    social: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <!-- Socialite: warm evening terrace dinner scene -->
      <rect width="400" height="300" fill="#C9674F"/>
      <rect width="400" height="130" fill="#A8503E" opacity="0.45"/>
      <!-- Terrace floor -->
      <rect y="242" width="400" height="58" fill="#5C4A2A"/>
      <rect y="237" width="400" height="7" fill="#7A5C3A"/>
      <!-- Long dining table -->
      <rect x="55" y="188" width="290" height="10" rx="3" fill="#F2E8DC"/>
      <rect x="68" y="198" width="9" height="42" fill="#C8A87A"/>
      <rect x="323" y="198" width="9" height="42" fill="#C8A87A"/>
      <!-- Wine glasses -->
      <g fill="none" stroke="#FAF4ED" stroke-width="2.5">
        <path d="M118,188 Q118,174 109,167 L127,167 Q118,174 118,188"/>
        <line x1="118" y1="167" x2="118" y2="159"/><line x1="110" y1="159" x2="126" y2="159"/>
      </g>
      <g fill="none" stroke="#FAF4ED" stroke-width="2.5">
        <path d="M185,188 Q185,174 176,167 L194,167 Q185,174 185,188"/>
        <line x1="185" y1="167" x2="185" y2="159"/><line x1="177" y1="159" x2="193" y2="159"/>
      </g>
      <g fill="none" stroke="#FAF4ED" stroke-width="2.5">
        <path d="M252,188 Q252,174 243,167 L261,167 Q252,174 252,188"/>
        <line x1="252" y1="167" x2="252" y2="159"/><line x1="244" y1="159" x2="260" y2="159"/>
      </g>
      <g fill="none" stroke="#FAF4ED" stroke-width="2.5">
        <path d="M318,188 Q318,174 309,167 L327,167 Q318,174 318,188"/>
        <line x1="318" y1="167" x2="318" y2="159"/><line x1="310" y1="159" x2="326" y2="159"/>
      </g>
      <!-- Candle -->
      <rect x="196" y="162" width="8" height="26" fill="#F9E1B0"/>
      <ellipse cx="200" cy="160" rx="7" ry="5" fill="#F2A365"/>
      <ellipse cx="200" cy="157" rx="3.5" ry="4.5" fill="#F9E1B0" opacity="0.85"/>
      <!-- Figures (heads + shoulders) -->
      <circle cx="100" cy="162" r="13" fill="#FAF4ED" opacity="0.92"/>
      <path d="M86,176 Q100,194 114,176" fill="#FAF4ED" opacity="0.7"/>
      <circle cx="200" cy="157" r="13" fill="#FAF4ED" opacity="0.92"/>
      <path d="M186,171 Q200,189 214,171" fill="#FAF4ED" opacity="0.7"/>
      <circle cx="310" cy="162" r="13" fill="#FAF4ED" opacity="0.92"/>
      <path d="M296,176 Q310,194 324,176" fill="#FAF4ED" opacity="0.7"/>
      <!-- Stars -->
      <circle cx="48" cy="38" r="2" fill="#F9E1B0" opacity="0.7"/>
      <circle cx="155" cy="22" r="2" fill="#F9E1B0" opacity="0.7"/>
      <circle cx="355" cy="32" r="2" fill="#F9E1B0" opacity="0.65"/>
      <circle cx="382" cy="62" r="1.5" fill="#F9E1B0" opacity="0.6"/>
    </svg>`,
    mix: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#D4A574"/>
      <g transform="translate(200,150)">
        <g opacity="0.85">
          <line x1="0" y1="0" x2="0" y2="-100" stroke="#FAF4ED" stroke-width="3"/>
          <line x1="0" y1="0" x2="70" y2="-70" stroke="#FAF4ED" stroke-width="3"/>
          <line x1="0" y1="0" x2="100" y2="0" stroke="#FAF4ED" stroke-width="3"/>
          <line x1="0" y1="0" x2="70" y2="70" stroke="#FAF4ED" stroke-width="3"/>
          <line x1="0" y1="0" x2="0" y2="100" stroke="#FAF4ED" stroke-width="3"/>
          <line x1="0" y1="0" x2="-70" y2="70" stroke="#FAF4ED" stroke-width="3"/>
          <line x1="0" y1="0" x2="-100" y2="0" stroke="#FAF4ED" stroke-width="3"/>
          <line x1="0" y1="0" x2="-70" y2="-70" stroke="#FAF4ED" stroke-width="3"/>
        </g>
        <circle cx="0" cy="0" r="25" fill="#E07A5F"/>
        <circle cx="0" cy="0" r="14" fill="#F9E1B0"/>
      </g>
    </svg>`,
  },

  // ---------- Q5: Lifestyle ----------
  q5: {
    simple: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#B8CBD4"/>
      <rect y="220" width="400" height="80" fill="#A8B888"/>
      <g transform="translate(170,140)">
        <rect x="0" y="20" width="70" height="60" fill="#FAF4ED"/>
        <polygon points="0,20 35,-10 70,20" fill="#C9674F"/>
        <rect x="28" y="48" width="14" height="32" fill="#5C4A2A"/>
        <rect x="10" y="35" width="12" height="12" fill="#F2A365"/>
      </g>
      <path d="M120,250 Q140,235 160,250" stroke="#5C4A2A" stroke-width="2" fill="none"/>
      <path d="M260,260 Q280,245 300,260" stroke="#5C4A2A" stroke-width="2" fill="none"/>
      <circle cx="60" cy="60" r="22" fill="#F9E1B0" opacity="0.8"/>
    </svg>`,
    comfortable: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="#E8C9A0"/>
      <rect y="200" width="400" height="100" fill="#D4A574"/>
      <g transform="translate(80,150)">
        <rect width="100" height="100" fill="#F2E8DC"/>
        <polygon points="0,0 50,-30 100,0" fill="#C9674F"/>
        <rect x="40" y="55" width="20" height="45" fill="#5C4A2A"/>
        <rect x="15" y="20" width="20" height="25" fill="#F2A365"/>
        <rect x="65" y="20" width="20" height="25" fill="#F2A365"/>
      </g>
      <g transform="translate(245,210)">
        <rect width="55" height="40" fill="#FAF4ED"/>
        <circle cx="15" cy="20" r="5" fill="#5C4A2A"/>
        <circle cx="40" cy="20" r="5" fill="#5C4A2A"/>
        <line x1="0" y1="40" x2="55" y2="40" stroke="#1F2D3D" stroke-width="2"/>
      </g>
      <ellipse cx="240" cy="195" rx="14" ry="16" fill="#7A8A60"/>
    </svg>`,
    upscale: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="170" fill="#E8C9A0"/>
      <rect y="170" width="400" height="60" fill="#4A8BA8"/>
      <rect y="230" width="400" height="70" fill="#F2E8DC"/>
      <g transform="translate(120,90)">
        <rect width="160" height="80" fill="#FAF4ED"/>
        <rect width="160" height="12" y="-12" fill="#D4A574"/>
        <rect x="20" y="15" width="22" height="50" fill="#4A8BA8"/>
        <rect x="55" y="15" width="22" height="50" fill="#4A8BA8"/>
        <rect x="90" y="15" width="22" height="50" fill="#4A8BA8"/>
        <rect x="125" y="15" width="22" height="50" fill="#4A8BA8"/>
      </g>
      <g transform="translate(70,210)" fill="#1F3A2A">
        <rect x="-2" y="0" width="4" height="30"/>
        <path d="M0,0 Q-18,-8 -28,-18 Q-12,-12 0,0 Z"/>
        <path d="M0,0 Q18,-8 28,-18 Q12,-12 0,0 Z"/>
      </g>
      <g transform="translate(330,210)" fill="#1F3A2A">
        <rect x="-2" y="0" width="4" height="30"/>
        <path d="M0,0 Q-18,-8 -28,-18 Q-12,-12 0,0 Z"/>
        <path d="M0,0 Q18,-8 28,-18 Q12,-12 0,0 Z"/>
      </g>
    </svg>`,
    luxury: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="160" fill="#F2A365"/>
      <rect y="160" width="400" height="60" fill="#C9674F"/>
      <rect y="220" width="400" height="80" fill="#1F4550"/>
      <circle cx="320" cy="70" r="35" fill="#F9E1B0"/>
      <g transform="translate(80,140)">
        <rect width="180" height="80" fill="#1F2D3D"/>
        <rect width="180" height="6" y="-6" fill="#D4A574"/>
        <rect x="15" y="12" width="22" height="55" fill="#F2A365"/>
        <rect x="45" y="12" width="22" height="55" fill="#F2A365"/>
        <rect x="75" y="12" width="22" height="55" fill="#F2A365"/>
        <rect x="105" y="12" width="22" height="55" fill="#F2A365"/>
        <rect x="135" y="12" width="22" height="55" fill="#F2A365"/>
      </g>
      <rect x="0" y="220" width="400" height="20" fill="#4A8BA8" opacity="0.6"/>
      <rect x="60" y="240" width="280" height="6" fill="#F9E1B0" opacity="0.6"/>
    </svg>`,
  },

  // ---------- Q6: Where you live ----------
  q6: {
    own: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#B8CBD4"/>
      <rect y="220" width="400" height="80" fill="#A8B888"/>
      <g transform="translate(130,110)">
        <rect width="140" height="110" fill="#FAF4ED"/>
        <polygon points="0,0 70,-40 140,0" fill="#C9674F"/>
        <rect x="60" y="55" width="20" height="55" fill="#5C4A2A"/>
        <rect x="15" y="20" width="22" height="22" fill="#F2A365"/>
        <rect x="103" y="20" width="22" height="22" fill="#F2A365"/>
      </g>
      <line x1="40" y1="270" x2="60" y2="270" stroke="#FAF4ED" stroke-width="3"/>
      <line x1="60" y1="270" x2="60" y2="255" stroke="#FAF4ED" stroke-width="3"/>
      <line x1="60" y1="255" x2="80" y2="255" stroke="#FAF4ED" stroke-width="3"/>
      <line x1="80" y1="255" x2="80" y2="270" stroke="#FAF4ED" stroke-width="3"/>
      <line x1="80" y1="270" x2="100" y2="270" stroke="#FAF4ED" stroke-width="3"/>
      <circle cx="60" cy="60" r="20" fill="#F9E1B0" opacity="0.8"/>
    </svg>`,
    rent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#3D5A6C"/>
      <g transform="translate(120,40)" fill="#1F2D3D">
        <rect width="160" height="260"/>
      </g>
      <g fill="#F9E1B0">
        <rect x="135" y="60" width="22" height="22"/><rect x="170" y="60" width="22" height="22"/><rect x="205" y="60" width="22" height="22"/><rect x="240" y="60" width="22" height="22"/>
        <rect x="135" y="100" width="22" height="22"/><rect x="170" y="100" width="22" height="22"/><rect x="205" y="100" width="22" height="22" opacity="0.3"/><rect x="240" y="100" width="22" height="22"/>
        <rect x="135" y="140" width="22" height="22" opacity="0.3"/><rect x="170" y="140" width="22" height="22"/><rect x="205" y="140" width="22" height="22"/><rect x="240" y="140" width="22" height="22"/>
        <rect x="135" y="180" width="22" height="22"/><rect x="170" y="180" width="22" height="22" opacity="0.3"/><rect x="205" y="180" width="22" height="22"/><rect x="240" y="180" width="22" height="22"/>
        <rect x="135" y="220" width="22" height="22"/><rect x="170" y="220" width="22" height="22"/><rect x="205" y="220" width="22" height="22"/><rect x="240" y="220" width="22" height="22" opacity="0.3"/>
      </g>
      <rect x="180" y="260" width="40" height="40" fill="#C9674F"/>
    </svg>`,
    resort: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="180" fill="#B8CBD4"/>
      <rect y="180" width="400" height="50" fill="#4A8BA8"/>
      <rect y="230" width="400" height="70" fill="#F2E8DC"/>
      <circle cx="320" cy="60" r="28" fill="#F9E1B0"/>
      <g transform="translate(140,135)">
        <rect width="120" height="40" fill="#FAF4ED"/>
        <polygon points="0,0 60,-25 120,0" fill="#D4A574"/>
        <rect x="50" y="15" width="20" height="25" fill="#4A8BA8"/>
      </g>
      <ellipse cx="180" cy="270" rx="60" ry="14" fill="#4A8BA8"/>
      <g transform="translate(60,200)" fill="#1F3A2A">
        <rect x="-2" y="0" width="4" height="50"/>
        <path d="M0,0 Q-25,-10 -38,-25 Q-15,-18 0,0 Z"/>
        <path d="M0,0 Q25,-10 38,-25 Q15,-18 0,0 Z"/>
      </g>
      <g transform="translate(340,200)" fill="#1F3A2A">
        <rect x="-2" y="0" width="4" height="50"/>
        <path d="M0,0 Q-25,-10 -38,-25 Q-15,-18 0,0 Z"/>
        <path d="M0,0 Q25,-10 38,-25 Q15,-18 0,0 Z"/>
      </g>
    </svg>`,
    nontraditional: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#F2A365"/>
      <rect y="220" width="400" height="80" fill="#8A6E3F"/>
      <g transform="translate(110,140)">
        <rect width="180" height="65" rx="10" fill="#E07A5F"/>
        <rect x="10" y="10" width="50" height="30" fill="#B8CBD4"/>
        <rect x="70" y="10" width="40" height="30" fill="#B8CBD4"/>
        <rect width="180" height="10" y="-10" rx="3" fill="#FAF4ED"/>
        <rect x="155" y="40" width="20" height="20" fill="#5C4A2A"/>
        <circle cx="35" cy="80" r="14" fill="#1F2D3D"/>
        <circle cx="155" cy="80" r="14" fill="#1F2D3D"/>
        <circle cx="35" cy="80" r="6" fill="#FAF4ED"/>
        <circle cx="155" cy="80" r="6" fill="#FAF4ED"/>
      </g>
      <circle cx="60" cy="50" r="22" fill="#F9E1B0" opacity="0.8"/>
    </svg>`,
    notSure: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E8C9A0"/>
      <g transform="translate(200,170)">
        <rect x="-6" y="0" width="12" height="80" fill="#5C4A2A"/>
        <rect x="-50" y="-50" width="100" height="40" fill="#FAF4ED" stroke="#5C4A2A" stroke-width="3"/>
        <rect x="-50" y="-100" width="100" height="40" fill="#FAF4ED" stroke="#5C4A2A" stroke-width="3"/>
        <rect x="-50" y="-150" width="100" height="40" fill="#FAF4ED" stroke="#5C4A2A" stroke-width="3"/>
        <text x="0" y="-122" text-anchor="middle" font-family="serif" font-size="22" font-weight="bold" fill="#5C4A2A">?</text>
        <text x="0" y="-72" text-anchor="middle" font-family="serif" font-size="22" font-weight="bold" fill="#5C4A2A">?</text>
        <text x="0" y="-22" text-anchor="middle" font-family="serif" font-size="22" font-weight="bold" fill="#5C4A2A">?</text>
      </g>
    </svg>`,
  },

  // ---------- Q4: Geography (where in the world) ----------
  q4: {
    us: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#B8CBD4"/>
      <rect y="230" width="400" height="70" fill="#C9674F"/>
      <path d="M0,230 L0,150 L80,150 L120,230 Z" fill="#8A4A38"/>
      <path d="M140,230 L165,105 L265,105 L285,230 Z" fill="#A85840"/>
      <rect x="165" y="105" width="100" height="16" fill="#C9674F"/>
      <path d="M300,230 L315,145 L400,145 L400,230 Z" fill="#8A4A38"/>
      <circle cx="60" cy="60" r="28" fill="#F9E1B0"/>
      <path d="M195,300 L178,230 L218,230 Z" fill="#D4A574" opacity="0.5"/>
    </svg>`,
    canada: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#B8CBD4"/>
      <path d="M0,185 L75,90 L155,145 L235,65 L315,125 L400,90 L400,300 L0,300 Z" fill="#3D5A6C"/>
      <path d="M235,65 L222,92 L248,92 Z" fill="#FAF4ED"/>
      <path d="M75,90 L66,110 L84,110 Z" fill="#FAF4ED"/>
      <path d="M0,245 L80,175 L160,215 L240,165 L320,205 L400,175 L400,300 L0,300 Z" fill="#1F4550"/>
      <rect y="235" width="400" height="65" fill="#4A8BA8" opacity="0.65"/>
      <g fill="#1F2D3D">
        <polygon points="50,245 60,208 70,245"/>
        <polygon points="340,248 350,208 360,248"/>
        <polygon points="170,250 178,215 186,250"/>
      </g>
    </svg>`,
    latam: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="180" fill="#F2A365"/>
      <rect y="240" width="400" height="60" fill="#8A6E3F"/>
      <rect y="200" width="400" height="40" fill="#D4A574"/>
      <rect x="30" y="80" width="340" height="165" fill="#F2E8DC"/>
      <path d="M60,245 L60,148 Q60,108 98,108 Q136,108 136,148 L136,245 Z" fill="#C9674F"/>
      <path d="M168,245 L168,138 Q168,98 206,98 Q244,98 244,138 L244,245 Z" fill="#3D5A6C"/>
      <path d="M276,245 L276,148 Q276,108 314,108 Q352,108 352,148 L352,245 Z" fill="#D4A574"/>
      <path d="M68,245 L68,152 Q68,116 98,116 Q128,116 128,152 L128,245 Z" fill="#E8C9A0"/>
      <path d="M176,245 L176,142 Q176,106 206,106 Q236,106 236,142 L236,245 Z" fill="#E8C9A0"/>
      <path d="M284,245 L284,152 Q284,116 314,116 Q344,116 344,152 L344,245 Z" fill="#E8C9A0"/>
      <circle cx="340" cy="48" r="24" fill="#F9E1B0" opacity="0.9"/>
    </svg>`,
    caribbean: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="#B8CBD4"/>
      <rect y="185" width="400" height="115" fill="#4A8BA8"/>
      <path d="M0,200 Q200,188 400,200 L400,218 Q200,208 0,218 Z" fill="#6AA8C0"/>
      <ellipse cx="200" cy="212" rx="100" ry="20" fill="#D4A574"/>
      <g transform="translate(162,192)">
        <rect x="-3" y="-48" width="5" height="52" fill="#5C4A2A" transform="rotate(-10 0 0)"/>
        <path d="M-3,-42 Q-48,-65 -58,-86 Q-30,-62 -3,-38 Z" fill="#7A8A60"/>
        <path d="M-3,-42 Q28,-56 38,-76 Q18,-56 -3,-38 Z" fill="#7A8A60"/>
        <path d="M-3,-42 Q-8,-76 5,-96 Q6,-66 -3,-38 Z" fill="#A8B888"/>
      </g>
      <g transform="translate(240,196)">
        <rect x="-3" y="-42" width="5" height="46" fill="#5C4A2A" transform="rotate(8 0 0)"/>
        <path d="M-3,-36 Q-38,-58 -46,-76 Q-24,-55 -3,-33 Z" fill="#7A8A60"/>
        <path d="M-3,-36 Q32,-52 42,-70 Q22,-52 -3,-33 Z" fill="#A8B888"/>
      </g>
      <circle cx="316" cy="58" r="30" fill="#F9E1B0"/>
    </svg>`,
    europe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E8C9A0"/>
      <path d="M0,205 Q100,175 200,195 Q300,210 400,185 L400,300 L0,300 Z" fill="#A8B888"/>
      <rect x="245" y="82" width="105" height="185" fill="#FAF4ED"/>
      <path d="M252,84 Q297,42 342,84" fill="#C9674F"/>
      <ellipse cx="297" cy="84" rx="44" ry="20" fill="#C9674F"/>
      <rect x="293" y="30" width="6" height="24" fill="#5C4A2A"/>
      <rect x="286" y="36" width="20" height="5" fill="#5C4A2A"/>
      <rect x="18" y="132" width="82" height="145" fill="#F2E8DC"/>
      <rect x="110" y="112" width="68" height="165" fill="#FAF4ED"/>
      <rect x="188" y="142" width="48" height="145" fill="#F2E8DC"/>
      <rect x="18" y="120" width="82" height="14" fill="#C9674F"/>
      <rect x="110" y="100" width="68" height="14" fill="#E07A5F"/>
      <rect x="188" y="130" width="48" height="14" fill="#C9674F"/>
      <rect x="38" y="148" width="14" height="18" fill="#4A8BA8"/>
      <rect x="66" y="148" width="14" height="18" fill="#4A8BA8"/>
      <rect x="120" y="128" width="14" height="18" fill="#4A8BA8"/>
      <rect x="148" y="128" width="14" height="18" fill="#4A8BA8"/>
    </svg>`,
    australiaNZ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#B8CBD4"/>
      <rect y="182" width="400" height="118" fill="#4A8BA8"/>
      <g transform="translate(218,182)">
        <path d="M0,0 Q-18,-58 -48,-50 Z" fill="#FAF4ED"/>
        <path d="M0,0 Q18,-76 58,-52 Z" fill="#FAF4ED"/>
        <path d="M0,0 Q38,-48 78,-38 Z" fill="#F2E8DC"/>
        <rect x="-52" y="-5" width="148" height="6" fill="#D4A574"/>
      </g>
      <path d="M0,172 Q75,95 152,172" stroke="#1F2D3D" stroke-width="10" fill="none"/>
      <rect x="0" y="158" width="12" height="28" fill="#1F2D3D"/>
      <rect x="140" y="158" width="12" height="28" fill="#1F2D3D"/>
      <circle cx="328" cy="60" r="28" fill="#F9E1B0"/>
      <path d="M0,198 Q200,208 400,198" stroke="#F9E1B0" stroke-width="2" fill="none" opacity="0.4"/>
    </svg>`,
    asia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E8C9A0"/>
      <rect y="182" width="400" height="118" fill="#D4A574"/>
      <path d="M0,182 L55,128 L115,165 L195,105 L275,152 L400,132 L400,200 L0,200 Z" fill="#A8B888" opacity="0.55"/>
      <rect x="172" y="245" width="56" height="38" fill="#1F2D3D"/>
      <rect x="162" y="215" width="76" height="34" fill="#1F4550"/>
      <path d="M152,217 L200,196 L248,217 Z" fill="#C9674F"/>
      <rect x="174" y="188" width="52" height="30" fill="#1F4550"/>
      <path d="M165,190 L200,170 L235,190 Z" fill="#C9674F"/>
      <rect x="183" y="162" width="34" height="30" fill="#1F4550"/>
      <path d="M175,164 L200,146 L225,164 Z" fill="#C9674F"/>
      <line x1="200" y1="146" x2="200" y2="130" stroke="#5C4A2A" stroke-width="4"/>
      <circle cx="200" cy="127" r="5" fill="#D4A574"/>
      <circle cx="308" cy="68" r="28" fill="#F9E1B0" opacity="0.9"/>
    </svg>`,
    africa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#F2A365"/>
      <path d="M0,202 L65,128 L138,172 L218,92 L298,152 L400,132 L400,300 L0,300 Z" fill="#C9674F"/>
      <path d="M0,242 L78,192 L158,222 L238,182 L338,212 L400,200 L400,300 L0,300 Z" fill="#8A4A38"/>
      <rect x="140" y="182" width="120" height="100" fill="#D4A574"/>
      <path d="M178,282 L178,224 Q178,204 200,204 Q222,204 222,224 L222,282 Z" fill="#C9674F"/>
      <ellipse cx="200" cy="218" rx="22" ry="22" fill="#C9674F"/>
      <path d="M183,282 L183,228 Q183,210 200,210 Q217,210 217,228 L217,282 Z" fill="#8A4A38"/>
      <g fill="#D4A574">
        <rect x="140" y="167" width="18" height="16"/>
        <rect x="165" y="167" width="18" height="16"/>
        <rect x="217" y="167" width="18" height="16"/>
        <rect x="242" y="167" width="18" height="16"/>
      </g>
      <circle cx="48" cy="60" r="30" fill="#F9E1B0" opacity="0.9"/>
      <g transform="translate(342,225)">
        <rect x="-3" y="-38" width="5" height="42" fill="#5C4A2A" transform="rotate(-5 0 0)"/>
        <path d="M-3,-32 Q-32,-52 -42,-70 Q-21,-50 -3,-28 Z" fill="#7A8A60"/>
        <path d="M-3,-32 Q22,-45 32,-65 Q14,-48 -3,-28 Z" fill="#7A8A60"/>
      </g>
    </svg>`,
  },

  // ---------- Q8: Priorities (what matters most) ----------
  q8: {
    adventure: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#B8CBD4"/>
      <path d="M0,225 L95,108 L175,165 L272,62 L395,132 L400,300 L0,300 Z" fill="#3D5A6C"/>
      <path d="M272,62 L258,96 L286,96 Z" fill="#FAF4ED"/>
      <path d="M0,262 L115,202 L238,245 L395,212 L400,300 L0,300 Z" fill="#1F4550"/>
      <g transform="translate(200,228)">
        <circle cx="0" cy="-35" r="9" fill="#F9E1B0"/>
        <path d="M-10,-26 L10,-26 L12,2 L-12,2 Z" fill="#C9674F"/>
        <line x1="0" y1="-26" x2="-20" y2="4" stroke="#C9674F" stroke-width="3" stroke-linecap="round"/>
        <line x1="0" y1="-22" x2="20" y2="-4" stroke="#C9674F" stroke-width="3" stroke-linecap="round"/>
        <line x1="-3" y1="2" x2="-10" y2="34" stroke="#C9674F" stroke-width="3" stroke-linecap="round"/>
        <line x1="3" y1="2" x2="10" y2="34" stroke="#C9674F" stroke-width="3" stroke-linecap="round"/>
        <line x1="20" y1="-4" x2="28" y2="34" stroke="#5C4A2A" stroke-width="2"/>
      </g>
      <circle cx="336" cy="52" r="22" fill="#F9E1B0" opacity="0.85"/>
    </svg>`,
    community: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#D4A574"/>
      <rect width="400" height="190" fill="#F2E8DC"/>
      <rect y="248" width="400" height="52" fill="#8A6E3F"/>
      <rect x="20" y="42" width="72" height="82" fill="#B8CBD4"/>
      <rect x="308" y="42" width="72" height="82" fill="#B8CBD4"/>
      <ellipse cx="200" cy="230" rx="92" ry="18" fill="#5C4A2A"/>
      <rect x="182" y="230" width="36" height="28" fill="#5C4A2A"/>
      <rect x="158" y="216" width="18" height="14" rx="2" fill="#FAF4ED"/>
      <rect x="224" y="216" width="18" height="14" rx="2" fill="#FAF4ED"/>
      <g transform="translate(122,192)">
        <circle cx="0" cy="-28" r="13" fill="#F9E1B0"/>
        <path d="M-13,-17 Q0,-21 13,-17 L16,38 L-16,38 Z" fill="#C9674F"/>
      </g>
      <g transform="translate(278,192)">
        <circle cx="0" cy="-28" r="13" fill="#F9E1B0"/>
        <path d="M-13,-17 Q0,-21 13,-17 L16,38 L-16,38 Z" fill="#3D5A6C"/>
      </g>
      <g transform="translate(200,172)">
        <circle cx="0" cy="-28" r="13" fill="#F9E1B0"/>
        <path d="M-13,-17 Q0,-21 13,-17 L14,30 L-14,30 Z" fill="#D4A574"/>
      </g>
    </svg>`,
    peace: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#EAD0A6"/>
      <rect y="188" width="400" height="112" fill="#5E93A8"/>
      <circle cx="205" cy="150" r="30" fill="#F9E1B0"/>
      <circle cx="205" cy="150" r="46" fill="#F9E1B0" opacity="0.18"/>
      <rect x="193" y="188" width="24" height="96" fill="#F9E1B0" opacity="0.30"/>
      <path d="M118,214 Q205,221 292,214" stroke="#EAF2F0" stroke-width="2.5" fill="none" opacity="0.5"/>
      <path d="M140,238 Q205,244 270,238" stroke="#EAF2F0" stroke-width="2.5" fill="none" opacity="0.4"/>
      <path d="M0,188 Q55,181 108,188 L108,201 Q54,195 0,201 Z" fill="#7A8A60"/>
      <rect x="52" y="150" width="5" height="40" fill="#3D5A6C"/>
      <circle cx="54" cy="150" r="16" fill="#5E7350"/>
      <circle cx="45" cy="158" r="11" fill="#6E845C"/>
      <circle cx="63" cy="156" r="11" fill="#6E845C"/>
      <path d="M300,78 q7,-6 14,0 q7,-6 14,0" stroke="#5C4A2A" stroke-width="2.5" fill="none" opacity="0.7"/>
      <path d="M332,98 q5,-4 10,0 q5,-4 10,0" stroke="#5C4A2A" stroke-width="2" fill="none" opacity="0.55"/>
    </svg>`,
    purpose: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#FAF4ED"/>
      <rect width="400" height="215" fill="#F2E8DC"/>
      <rect x="220" y="32" width="144" height="120" fill="#B8CBD4"/>
      <path d="M220,152 L260,102 L300,132 L358,88 L400,112 L400,152 Z" fill="#3D5A6C" opacity="0.55"/>
      <rect x="20" y="42" width="82" height="175" fill="#D4A574"/>
      <g fill="#C9674F">
        <rect x="28" y="56" width="11" height="48"/><rect x="43" y="62" width="10" height="42"/>
        <rect x="57" y="54" width="13" height="50"/><rect x="74" y="60" width="10" height="44"/>
        <rect x="28" y="118" width="11" height="44"/><rect x="43" y="112" width="10" height="50"/>
        <rect x="57" y="116" width="13" height="46"/><rect x="74" y="120" width="10" height="42"/>
      </g>
      <rect x="102" y="188" width="254" height="12" fill="#8A6E3F"/>
      <rect x="112" y="200" width="12" height="48" fill="#8A6E3F"/>
      <rect x="332" y="200" width="12" height="48" fill="#8A6E3F"/>
      <rect x="158" y="163" width="102" height="26" rx="3" fill="#1F2D3D"/>
      <rect x="152" y="187" width="114" height="6" rx="2" fill="#3D5A6C"/>
      <circle cx="210" cy="148" r="15" fill="#F9E1B0"/>
      <path d="M197,163 Q210,158 223,163 L226,188 L194,188 Z" fill="#3D5A6C"/>
      <rect x="280" y="164" width="4" height="24" fill="#5C4A2A"/>
      <path d="M260,163 L284,161 L284,170 L260,172 Z" fill="#D4A574"/>
      <circle cx="265" cy="167" r="7" fill="#F9E1B0" opacity="0.8"/>
    </svg>`,
    health: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E8C9A0"/>
      <rect y="172" width="400" height="128" fill="#4A8BA8"/>
      <path d="M0,186 Q100,182 200,186 Q300,192 400,186" stroke="#F9E1B0" stroke-width="2" fill="none" opacity="0.48"/>
      <rect x="80" y="162" width="240" height="24" fill="#D4A574"/>
      <rect x="90" y="186" width="220" height="96" fill="#C9A070"/>
      <rect x="80" y="142" width="240" height="6" fill="#FAF4ED" rx="3"/>
      <rect x="85" y="142" width="5" height="20" fill="#FAF4ED"/>
      <rect x="310" y="142" width="5" height="20" fill="#FAF4ED"/>
      <g transform="translate(200,157)">
        <line x1="0" y1="0" x2="0" y2="-28" stroke="#F9E1B0" stroke-width="7" stroke-linecap="round"/>
        <line x1="0" y1="-14" x2="-14" y2="-5" stroke="#F9E1B0" stroke-width="5" stroke-linecap="round"/>
        <line x1="0" y1="-28" x2="0" y2="-55" stroke="#C9674F" stroke-width="7" stroke-linecap="round"/>
        <line x1="0" y1="-46" x2="-22" y2="-65" stroke="#C9674F" stroke-width="5" stroke-linecap="round"/>
        <line x1="0" y1="-46" x2="22" y2="-65" stroke="#C9674F" stroke-width="5" stroke-linecap="round"/>
        <circle cx="0" cy="-63" r="11" fill="#F9E1B0"/>
      </g>
      <circle cx="318" cy="55" r="28" fill="#F9E1B0"/>
      <ellipse cx="318" cy="174" rx="44" ry="12" fill="#3D5A6C" opacity="0.55"/>
      <ellipse cx="80" cy="176" rx="30" ry="10" fill="#3D5A6C" opacity="0.48"/>
    </svg>`,
    culture: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#F2E8DC"/>
      <rect x="58" y="0" width="284" height="242" fill="#FAF4ED"/>
      <path d="M128,242 L128,102 Q128,52 200,52 Q272,52 272,102 L272,242 Z" fill="#E8C9A0"/>
      <rect x="128" y="52" width="144" height="190" fill="#F2A365" opacity="0.75"/>
      <rect x="133" y="152" width="134" height="90" fill="#C9674F" opacity="0.48"/>
      <rect x="18" y="52" width="92" height="72" fill="#D4A574"/>
      <rect x="23" y="57" width="82" height="62" fill="#FAF4ED"/>
      <rect x="28" y="62" width="36" height="52" fill="#3D5A6C"/>
      <rect x="68" y="77" width="30" height="30" fill="#C9674F"/>
      <rect x="290" y="62" width="92" height="72" fill="#D4A574"/>
      <rect x="295" y="67" width="82" height="62" fill="#FAF4ED"/>
      <circle cx="336" cy="98" r="22" fill="#F2A365"/>
      <circle cx="336" cy="98" r="14" fill="#C9674F"/>
      <g transform="translate(100,202)">
        <circle cx="0" cy="-28" r="12" fill="#F9E1B0"/>
        <path d="M-12,-18 Q0,-22 12,-18 L14,26 L-14,26 Z" fill="#3D5A6C"/>
        <ellipse cx="22" cy="0" rx="14" ry="10" fill="#D4A574"/>
        <circle cx="18" cy="-4" r="4" fill="#C9674F"/>
        <circle cx="26" cy="4" r="3" fill="#3D5A6C"/>
        <line x1="12" y1="-5" x2="32" y2="-18" stroke="#5C4A2A" stroke-width="2"/>
      </g>
      <rect y="240" width="400" height="12" fill="#D4A574"/>
    </svg>`,
  },

  // ---------- Q7: Solo or with partner ----------
  q7: {
    solo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E07A5F"/>
      <circle cx="200" cy="120" r="55" fill="#F9E1B0"/>
      <rect y="220" width="400" height="80" fill="#1F2D3D"/>
      <path d="M0,220 Q200,235 400,220 L400,235 Q200,250 0,235 Z" fill="#C9674F"/>
      <g fill="#1F2D3D" transform="translate(200,225)">
        <ellipse cx="0" cy="50" rx="22" ry="6"/>
        <circle cx="0" cy="-65" r="14"/>
        <path d="M-18,-50 Q0,-55 18,-50 L22,50 L-22,50 Z"/>
      </g>
    </svg>`,
    partner: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#E07A5F"/>
      <circle cx="200" cy="120" r="55" fill="#F9E1B0"/>
      <rect y="220" width="400" height="80" fill="#1F2D3D"/>
      <path d="M0,220 Q200,235 400,220 L400,235 Q200,250 0,235 Z" fill="#C9674F"/>
      <g fill="#1F2D3D" transform="translate(165,225)">
        <ellipse cx="0" cy="50" rx="20" ry="6"/>
        <circle cx="0" cy="-60" r="13"/>
        <path d="M-15,-46 Q0,-50 15,-46 L20,50 L-20,50 Z"/>
      </g>
      <g fill="#1F2D3D" transform="translate(235,225)">
        <ellipse cx="0" cy="50" rx="20" ry="6"/>
        <circle cx="0" cy="-55" r="13"/>
        <path d="M-15,-42 Q0,-46 15,-42 L20,50 L-20,50 Z"/>
      </g>
      <path d="M180,180 Q200,170 220,180" stroke="#1F2D3D" stroke-width="3" fill="none"/>
    </svg>`,
    notSure: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#D4A574"/>
      <circle cx="200" cy="120" r="55" fill="#F9E1B0" opacity="0.85"/>
      <rect y="220" width="400" height="80" fill="#5C4A2A"/>
      <g fill="#1F2D3D" transform="translate(200,225)">
        <ellipse cx="0" cy="50" rx="22" ry="6"/>
        <circle cx="0" cy="-65" r="14"/>
        <path d="M-18,-50 Q0,-55 18,-50 L22,50 L-22,50 Z"/>
      </g>
      <text x="280" y="120" font-family="serif" font-size="64" font-weight="bold" fill="#FAF4ED" opacity="0.85">?</text>
    </svg>`,
  },
};
