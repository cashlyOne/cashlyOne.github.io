// horizon-logos-v2.jsx — 24 MORE in the direction of 01, 06, 07, 23
// Soft, modern, container + typographic detail. Tech-y but warm.

const SERIF = "'Instrument Serif', Georgia, serif";
const FRAUNCES = "'Fraunces', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const GEIST = "'Geist', 'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const C = {
  ink:'#0a0e14', cream:'#faf7f0', paper:'#ffffff', bone:'#f1ece1',
  dawn:'#e07a3a', ember:'#c14d1f', dusk:'#2a3550',
  hairline:'#e8e2d4', mist:'#8e95a0',
  // soft accents for variety
  peach:'#f4c8a0', sky:'#cfd8e3', sand:'#e8dcc4',
};

// ============ CONTAINER VARIATIONS ============

// 25. Inverted squircle — light H on dark squircle (Cash App style)
const L25 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <div style={{
      width:s*0.55, height:s*0.55, borderRadius:s*0.18, background:C.dawn,
      display:'grid', placeItems:'center',
    }}>
      <span style={{ fontFamily:GEIST, fontWeight:700, fontSize:s*0.36, color:C.cream, letterSpacing:'-0.04em' }}>h</span>
    </div>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.34, letterSpacing:'-0.04em', color:C.ink }}>horizon</span>
  </div>
);

// 26. Cream squircle, ink H, dawn dot accent
const L26 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <div style={{
      width:s*0.55, height:s*0.55, borderRadius:s*0.13, background:C.cream,
      border:`1px solid ${C.hairline}`,
      display:'grid', placeItems:'center', position:'relative',
    }}>
      <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.34, color:C.ink, letterSpacing:'-0.04em' }}>H</span>
      <div style={{ position:'absolute', top:s*0.09, right:s*0.09, width:s*0.06, height:s*0.06, borderRadius:'50%', background:C.dawn }} />
    </div>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.34, letterSpacing:'-0.04em', color:C.ink }}>Horizon</span>
  </div>
);

// 27. Circle container (perfect round) — Privy/Coinbase
const L27 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <div style={{
      width:s*0.55, height:s*0.55, borderRadius:'50%',
      background:`conic-gradient(from 180deg, ${C.dawn}, ${C.ember})`,
      display:'grid', placeItems:'center',
    }}>
      <span style={{ fontFamily:SERIF, fontSize:s*0.4, color:C.cream, letterSpacing:'-0.02em', lineHeight:1 }}>H</span>
    </div>
    <span style={{ fontFamily:SERIF, fontSize:s*0.4, letterSpacing:'-0.025em', color:C.ink }}>Horizon</span>
  </div>
);

// 28. Pill with sun glyph inside, before wordmark
const L28 = ({ s=180 }) => (
  <div style={{
    background:C.bone, padding:`${s*0.08}px ${s*0.16}px ${s*0.08}px ${s*0.08}px`,
    borderRadius:s*0.5, display:'inline-flex', alignItems:'center', gap:s*0.1,
  }}>
    <div style={{ width:s*0.22, height:s*0.22, borderRadius:'50%', background:C.dawn }} />
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.22, letterSpacing:'-0.025em', color:C.ink }}>Horizon</span>
  </div>
);

// 29. Outline pill (subtle, premium)
const L29 = ({ s=180 }) => (
  <div style={{
    border:`1.5px solid ${C.ink}`, padding:`${s*0.1}px ${s*0.22}px`,
    borderRadius:s*0.5, display:'inline-block',
    fontFamily:GEIST, fontWeight:500, fontSize:s*0.22, letterSpacing:'-0.02em', color:C.ink,
  }}>
    Horizon
  </div>
);

// 30. Tag/chip — small mono label in colored chip + wordmark
const L30 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.12 }}>
    <span style={{
      background:C.dawn, color:C.cream, padding:`${s*0.04}px ${s*0.08}px`,
      borderRadius:s*0.04, fontFamily:MONO, fontSize:s*0.13, letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:500,
    }}>HZN</span>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.32, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// 31. Stacked rectangle container with split fill
const L31 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <div style={{
      width:s*0.55, height:s*0.55, borderRadius:s*0.13, overflow:'hidden',
      display:'flex', flexDirection:'column',
    }}>
      <div style={{ flex:1, background:C.peach, display:'grid', placeItems:'center' }}>
        <div style={{ width:s*0.18, height:s*0.18, borderRadius:'50%', background:C.dawn, transform:`translateY(${s*0.05}px)` }} />
      </div>
      <div style={{ flex:1, background:C.ink }} />
    </div>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.34, letterSpacing:'-0.04em', color:C.ink }}>Horizon</span>
  </div>
);

// 32. Soft rectangle with H + horizontal line
const L32 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <div style={{
      width:s*0.55, height:s*0.55, borderRadius:s*0.16, background:C.bone,
      display:'grid', placeItems:'center', position:'relative',
    }}>
      <svg viewBox="0 0 60 60" width={s*0.4} height={s*0.4}>
        <line x1="14" y1="14" x2="14" y2="46" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
        <line x1="46" y1="14" x2="46" y2="46" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
        <line x1="14" y1="30" x2="46" y2="30" stroke={C.dawn} strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.34, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ TYPOGRAPHIC SUBSTITUTION ============

// 33. The 'i' is a sun (dot replaced with orange disc)
const L33 = ({ s=180 }) => {
  const fs = s*0.42;
  return (
    <div style={{ display:'inline-flex', alignItems:'baseline', fontFamily:GEIST, fontWeight:600, fontSize:fs, letterSpacing:'-0.04em', color:C.ink, lineHeight:1 }}>
      <span>hor</span>
      <span style={{ position:'relative', display:'inline-block', width:fs*0.22 }}>
        <span style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', width:fs*0.18, height:fs*0.6, background:C.ink, borderRadius:fs*0.04 }} />
        <span style={{ position:'absolute', bottom:fs*0.7, left:'50%', transform:'translateX(-50%)', width:fs*0.28, height:fs*0.28, borderRadius:'50%', background:C.dawn }} />
      </span>
      <span>zon</span>
    </div>
  );
};

// 34. The 'z' is split — top half dawn, bottom half ink (horizon meeting)
const L34 = ({ s=180 }) => {
  const fs = s*0.5;
  return (
    <span style={{ fontFamily:FRAUNCES, fontWeight:500, fontSize:fs, letterSpacing:'-0.03em', color:C.ink, lineHeight:1, position:'relative', display:'inline-block' }}>
      hori
      <span style={{
        backgroundImage:`linear-gradient(180deg, ${C.dawn} 0%, ${C.dawn} 50%, ${C.ink} 50%, ${C.ink} 100%)`,
        WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent',
        WebkitTextFillColor:'transparent',
      }}>z</span>
      on
    </span>
  );
};

// 35. Lowercase 'o' as full sun disc
const L35 = ({ s=180 }) => {
  const fs = s*0.46;
  return (
    <div style={{ display:'inline-flex', alignItems:'center', fontFamily:GEIST, fontWeight:500, fontSize:fs, letterSpacing:'-0.03em', color:C.ink, lineHeight:1 }}>
      <span>h</span>
      <span style={{ display:'inline-block', width:fs*0.66, height:fs*0.66, borderRadius:'50%', background:C.dawn, margin:`0 ${fs*0.02}px` }} />
      <span>rizon</span>
    </div>
  );
};

// 36. Both o's filled — with tiny glow
const L36 = ({ s=180 }) => {
  const fs = s*0.42;
  const dot = (
    <span style={{ display:'inline-block', width:fs*0.55, height:fs*0.55, borderRadius:'50%', background:C.dawn, margin:`0 ${fs*0.01}px`, verticalAlign:'middle' }} />
  );
  return (
    <div style={{ display:'inline-flex', alignItems:'center', fontFamily:GEIST, fontWeight:600, fontSize:fs, letterSpacing:'-0.04em', color:C.ink, lineHeight:1 }}>
      <span>h</span>{dot}<span>riz</span>{dot}<span>n</span>
    </div>
  );
};

// 37. Underscore beneath wordmark (horizon line)
const L37 = ({ s=180 }) => (
  <div style={{ display:'inline-flex', flexDirection:'column', alignItems:'flex-start', gap:s*0.04 }}>
    <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.36, letterSpacing:'-0.04em', color:C.ink, lineHeight:1 }}>horizon</span>
    <div style={{ display:'flex', alignItems:'center', gap:s*0.04, width:'100%' }}>
      <div style={{ flex:1, height:s*0.018, background:C.ink, borderRadius:s*0.01 }} />
      <div style={{ width:s*0.06, height:s*0.06, borderRadius:'50%', background:C.dawn, transform:`translateY(${-s*0.01}px)` }} />
    </div>
  </div>
);

// 38. The 'o' has a horizon line through it (Linear-meets-Horizon)
const L38 = ({ s=180 }) => {
  const fs = s*0.42;
  return (
    <div style={{ display:'inline-flex', alignItems:'center', fontFamily:GEIST, fontWeight:500, fontSize:fs, letterSpacing:'-0.04em', color:C.ink, lineHeight:1 }}>
      <span>h</span>
      <span style={{ position:'relative', display:'inline-block', width:fs*0.62, height:fs*0.62 }}>
        <svg viewBox="0 0 60 60" width={fs*0.62} height={fs*0.62} style={{ position:'absolute', inset:0 }}>
          <circle cx="30" cy="30" r="26" fill="none" stroke={C.ink} strokeWidth="6" />
          <line x1="0" y1="30" x2="60" y2="30" stroke={C.dawn} strokeWidth="6" strokeLinecap="round" />
        </svg>
      </span>
      <span>rizon</span>
    </div>
  );
};

// 39. Letter 'h' with sun above (i-style dot moved to h)
const L39 = ({ s=180 }) => {
  const fs = s*0.42;
  return (
    <div style={{ display:'inline-flex', alignItems:'baseline', fontFamily:SERIF, fontSize:fs, letterSpacing:'-0.025em', color:C.ink, lineHeight:1, position:'relative' }}>
      <span style={{ position:'relative' }}>
        <span style={{ position:'absolute', top:-fs*0.42, left:'50%', transform:'translateX(-50%)', width:fs*0.22, height:fs*0.22, borderRadius:'50%', background:C.dawn }} />
        h
      </span>
      <span>orizon</span>
    </div>
  );
};

// 40. Thin sans, accent on first letter only
const L40 = ({ s=180 }) => (
  <span style={{ fontFamily:GEIST, fontWeight:300, fontSize:s*0.42, letterSpacing:'-0.04em', lineHeight:1 }}>
    <span style={{ color:C.dawn, fontWeight:600 }}>h</span>
    <span style={{ color:C.ink }}>orizon</span>
  </span>
);

// ============ SOFT CIRCLE GLYPHS ============

// 41. Concentric circles (3 rings, dawn → ink)
const L41 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.14 }}>
    <svg viewBox="0 0 60 60" width={s*0.4} height={s*0.4}>
      <circle cx="30" cy="30" r="28" fill={C.dawn} />
      <circle cx="30" cy="30" r="18" fill={C.cream} />
      <circle cx="30" cy="30" r="8" fill={C.ink} />
    </svg>
    <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.32, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// 42. Crescent (moon meets horizon line)
const L42 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.14 }}>
    <svg viewBox="0 0 60 60" width={s*0.4} height={s*0.4}>
      <circle cx="30" cy="30" r="24" fill={C.dawn} />
      <circle cx="38" cy="30" r="20" fill={C.cream} />
    </svg>
    <span style={{ fontFamily:SERIF, fontSize:s*0.4, letterSpacing:'-0.025em', color:C.ink }}>Horizon</span>
  </div>
);

// 43. Dot in center of soft square
const L43 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.14 }}>
    <div style={{
      width:s*0.42, height:s*0.42, borderRadius:s*0.1,
      background:C.bone, display:'grid', placeItems:'center',
    }}>
      <div style={{ width:s*0.18, height:s*0.18, borderRadius:'50%', background:C.dawn }} />
    </div>
    <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.32, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// 44. Dot + arc (rising sun, very soft)
const L44 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.14 }}>
    <svg viewBox="0 0 60 60" width={s*0.4} height={s*0.4}>
      <path d="M 4 50 A 26 26 0 0 1 56 50" fill="none" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="30" cy="30" r="9" fill={C.dawn} />
    </svg>
    <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.32, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// 45. Two-circle Venn (sky meets earth)
const L45 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.14 }}>
    <svg viewBox="0 0 80 60" width={s*0.5} height={s*0.38}>
      <circle cx="28" cy="30" r="22" fill={C.dawn} opacity="0.85" />
      <circle cx="52" cy="30" r="22" fill={C.ink} opacity="0.9" />
    </svg>
    <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.32, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// 46. Rounded rectangle with gradient (sunset stripe)
const L46 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.14 }}>
    <div style={{
      width:s*0.5, height:s*0.42, borderRadius:s*0.1,
      background:`linear-gradient(180deg, ${C.peach} 0%, ${C.dawn} 50%, ${C.ink} 100%)`,
    }} />
    <span style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:s*0.4, letterSpacing:'-0.025em', color:C.ink }}>Horizon</span>
  </div>
);

// 47. Squircle with monogram + sun corner (Brex-meets-Sun)
const L47 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.14 }}>
    <div style={{
      width:s*0.55, height:s*0.55, borderRadius:s*0.16, background:C.ink,
      display:'grid', placeItems:'center', position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', top:-s*0.12, right:-s*0.12, width:s*0.32, height:s*0.32,
        borderRadius:'50%', background:C.dawn,
      }} />
      <span style={{ fontFamily:GEIST, fontWeight:700, fontSize:s*0.34, color:C.cream, letterSpacing:'-0.04em', position:'relative' }}>H</span>
    </div>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.34, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// 48. Bracket capsule [ Horizon ]
const L48 = ({ s=180 }) => (
  <div style={{
    display:'inline-flex', alignItems:'center',
    background:C.cream, border:`1px solid ${C.hairline}`,
    padding:`${s*0.08}px ${s*0.16}px`, borderRadius:s*0.5,
  }}>
    <span style={{ color:C.dawn, fontFamily:MONO, fontSize:s*0.16, marginRight:s*0.06 }}>·</span>
    <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.22, letterSpacing:'-0.025em', color:C.ink }}>Horizon</span>
    <span style={{ color:C.dawn, fontFamily:MONO, fontSize:s*0.16, marginLeft:s*0.06 }}>·</span>
  </div>
);

// ============ Catalog ============

const LOGOS = [
  { id:'25', name:'Dawn Squircle', note:'Inverted: light h on warm dawn squircle. Cash App energy.', cat:'Container', Logo:L25 },
  { id:'26', name:'Cream Squircle + Dot', note:'Soft cream container with corner dot accent. Premium-quiet.', cat:'Container', Logo:L26 },
  { id:'27', name:'Conic Disc', note:'Perfect circle with subtle conic gradient. Coinbase/Privy hybrid.', cat:'Container', Logo:L27 },
  { id:'28', name:'Sun Pill', note:'Pill containing sun-glyph + wordmark. Friendly, packaged.', cat:'Container', Logo:L28 },
  { id:'29', name:'Outline Pill', note:'Subtle outlined capsule, no fill. Quiet premium.', cat:'Container', Logo:L29 },
  { id:'30', name:'HZN Tag', note:'Mono tag chip + wordmark. Stripe receipt vibe.', cat:'Container', Logo:L30 },
  { id:'31', name:'Sky/Earth Tile', note:'Rectangle split — peach sky, ink earth, sun in upper field.', cat:'Container', Logo:L31 },
  { id:'32', name:'Soft H Tile', note:'Bone container with H constructed from strokes. Warm Linear.', cat:'Container', Logo:L32 },
  { id:'33', name:'i = Sun', note:'The dot of the i becomes the sun. Hidden detail, smart.', cat:'Letter swap', Logo:L33 },
  { id:'34', name:'z = Horizon', note:'The z is split — top dawn, bottom ink. Z is literally a horizon.', cat:'Letter swap', Logo:L34 },
  { id:'35', name:'o = Sun (light)', note:'Lowercase o replaced with full dawn disc. Brighter cousin of #06.', cat:'Letter swap', Logo:L35 },
  { id:'36', name:'Both o\'s glow', note:'Both o-positions become dots. Like Google/Doodle but precise.', cat:'Letter swap', Logo:L36 },
  { id:'37', name:'Underline + Dot', note:'Wordmark with horizon-line underneath, sun riding it.', cat:'Letter swap', Logo:L37 },
  { id:'38', name:'o = Aperture', note:'The o has a horizon line through it. Mercury vibe in lowercase.', cat:'Letter swap', Logo:L38 },
  { id:'39', name:'h with sun-dot', note:'Dot floats above the h, like an i but on the h. Subtle.', cat:'Letter swap', Logo:L39 },
  { id:'40', name:'Bold-h', note:'Just the h is bold + dawn. Rest stays light. Very minimal.', cat:'Letter swap', Logo:L40 },
  { id:'41', name:'Concentric', note:'Three rings — dawn, cream, ink. Aperture/target hybrid.', cat:'Soft glyph', Logo:L41 },
  { id:'42', name:'Crescent', note:'Sun emerging — moon shape. Very soft.', cat:'Soft glyph', Logo:L42 },
  { id:'43', name:'Center Dot', note:'Soft tile with single centered dot. Almost too quiet.', cat:'Soft glyph', Logo:L43 },
  { id:'44', name:'Arc + Dot', note:'Dome arc with sun centered. Like a sundial.', cat:'Soft glyph', Logo:L44 },
  { id:'45', name:'Venn', note:'Two overlapping circles — sky meets earth. Bridge metaphor.', cat:'Soft glyph', Logo:L45 },
  { id:'46', name:'Sunset Stripe', note:'Rounded rectangle with dawn-to-ink vertical gradient.', cat:'Soft glyph', Logo:L46 },
  { id:'47', name:'Sun Corner', note:'Ink squircle with sun rising out the top-right corner.', cat:'Container', Logo:L47 },
  { id:'48', name:'Dot Capsule', note:'Outline pill with dot bookends. Stripe-bracket vibe.', cat:'Container', Logo:L48 },
];

// ============ Layout ============

const Tile = ({ entry }) => (
  <div style={{
    background:C.paper, borderRadius:8,
    border:`1px solid ${C.hairline}`, overflow:'hidden',
    display:'flex', flexDirection:'column',
  }}>
    <div style={{
      background:C.cream, padding:'48px 32px', display:'flex',
      alignItems:'center', justifyContent:'center', minHeight:200,
      borderBottom:`1px solid ${C.hairline}`,
    }}>
      <entry.Logo s={180} />
    </div>
    <div style={{ padding:'18px 22px 22px', display:'flex', flexDirection:'column', gap:8 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <div style={{ fontFamily:SERIF, fontSize:22, letterSpacing:'-0.015em', color:C.ink, lineHeight:1 }}>
          {entry.name}
        </div>
        <div style={{ fontFamily:MONO, fontSize:9.5, letterSpacing:'0.18em', color:C.dawn, textTransform:'uppercase' }}>
          {entry.id}
        </div>
      </div>
      <div style={{ fontSize:12, lineHeight:1.5, color:C.ink, opacity:0.65 }}>
        {entry.note}
      </div>
      <div style={{
        fontFamily:MONO, fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase',
        color:C.ink, opacity:0.45, marginTop:2,
      }}>{entry.cat}</div>
    </div>
  </div>
);

const Header = () => (
  <div style={{
    background:C.ink, color:C.cream, padding:'72px 80px',
    fontFamily:SANS, position:'relative', overflow:'hidden',
  }}>
    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      background:`radial-gradient(ellipse at 80% 100%, ${C.dawn}33 0%, transparent 55%)`,
    }} />
    <div style={{ position:'relative' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:48 }}>
        <div style={{ fontFamily:MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.55 }}>
          Logo Studies · Round 2 · 24 more
        </div>
        <div style={{ fontFamily:MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.55 }}>
          From: 01 · 06 · 07 · 23
        </div>
      </div>
      <h1 style={{
        fontFamily:SERIF, fontSize:108, lineHeight:0.95, letterSpacing:'-0.035em',
        margin:0, fontWeight:400, maxWidth:'80%',
      }}>
        More like 01, 06, 07, 23.
      </h1>
      <div style={{
        marginTop:32, fontFamily:SERIF, fontStyle:'italic', fontSize:24,
        opacity:0.7, maxWidth:780, lineHeight:1.4,
      }}>
        Soft, modern, container-driven or typographic detail. Three new families:
        more <strong style={{color:C.dawn, fontStyle:'normal'}}>container</strong> variations,
        more <strong style={{color:C.dawn, fontStyle:'normal'}}>letter-swap</strong> tricks,
        more <strong style={{color:C.dawn, fontStyle:'normal'}}>soft circle</strong> glyphs.
      </div>

      <div style={{
        marginTop:48, paddingTop:24, borderTop:`1px solid ${C.cream}22`,
        display:'flex', gap:48, fontSize:12,
      }}>
        {[
          ['Container', '8 new — squircles, pills, tiles, tags'],
          ['Letter swap', '8 new — i, o, z, h substitutions'],
          ['Soft glyph', '8 new — circles, arcs, venns, gradients'],
        ].map(([k,v]) => (
          <div key={k}>
            <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:C.dawn, marginBottom:6 }}>{k}</div>
            <div style={{ opacity:0.7 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  const order = ['Container','Letter swap','Soft glyph'];
  const byCat = order.flatMap(c => LOGOS.filter(l => l.cat === c));
  return (
    <div style={{ minHeight:'100vh', background:C.cream }}>
      <Header />
      <div style={{ padding:'56px 64px 96px' }}>
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20,
          maxWidth:1480, margin:'0 auto',
        }}>
          {byCat.map(entry => <Tile key={entry.id} entry={entry} />)}
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
