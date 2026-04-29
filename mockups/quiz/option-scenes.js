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
      <rect width="400" height="300" fill="#D4A574"/>
      <ellipse cx="200" cy="170" rx="120" ry="70" fill="#FAF4ED"/>
      <ellipse cx="155" cy="155" r="14" fill="#E07A5F"/>
      <circle cx="200" cy="140" r="14" fill="#2D5F6C"/>
      <circle cx="245" cy="155" r="14" fill="#D4A574"/>
      <circle cx="175" cy="190" r="14" fill="#C9674F"/>
      <circle cx="225" cy="190" r="14" fill="#3D5A6C"/>
      <rect x="280" y="80" width="6" height="100" fill="#5C4A2A" transform="rotate(20 283 130)"/>
      <ellipse cx="305" cy="73" rx="10" ry="14" fill="#E07A5F" transform="rotate(20 305 73)"/>
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
      <rect width="400" height="300" fill="#C9674F"/>
      <rect y="230" width="400" height="70" fill="#5C4A2A"/>
      <g transform="translate(150,150)">
        <path d="M0,0 L-30,-50 L30,-50 Z" fill="#F9E1B0"/>
        <rect x="-4" y="0" width="8" height="70" fill="#FAF4ED"/>
        <ellipse cx="0" cy="75" rx="22" ry="6" fill="#FAF4ED"/>
      </g>
      <g transform="translate(250,150)">
        <path d="M0,0 L-30,-50 L30,-50 Z" fill="#F9E1B0"/>
        <rect x="-4" y="0" width="8" height="70" fill="#FAF4ED"/>
        <ellipse cx="0" cy="75" rx="22" ry="6" fill="#FAF4ED"/>
      </g>
      <circle cx="120" cy="60" r="3" fill="#F9E1B0"/><circle cx="280" cy="50" r="3" fill="#F9E1B0"/><circle cx="200" cy="80" r="2" fill="#F9E1B0"/>
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
