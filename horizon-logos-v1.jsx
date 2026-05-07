// horizon-logos.jsx — 24 logo studies for Horizon
// Inspired by: Bridge, Privy, Mercury, Stripe, Brex, Ramp, Linear, Vercel, Plaid

const SERIF = "'Instrument Serif', Georgia, serif";
const FRAUNCES = "'Fraunces', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const GEIST = "'Geist', 'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const C = {
  ink:'#0a0e14', cream:'#faf7f0', paper:'#ffffff', bone:'#f1ece1',
  dawn:'#e07a3a', ember:'#c14d1f', dusk:'#2a3550',
  hairline:'#e8e2d4', mist:'#8e95a0',
};

// Each logo is a self-contained component that renders at a given size.
// Most include a mark + wordmark side-by-side OR a wordmark-only treatment.

// ============ 01. H-monogram in squircle (Ramp/Brex pattern) ============
const L01 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.18 }}>
    <div style={{
      width:s*0.55, height:s*0.55, borderRadius:s*0.13, background:C.ink,
      display:'grid', placeItems:'center',
    }}>
      <span style={{ fontFamily:GEIST, fontWeight:700, fontSize:s*0.36, color:C.cream, letterSpacing:'-0.04em', lineHeight:1 }}>H</span>
    </div>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.34, letterSpacing:'-0.04em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 02. Letter-as-horizon (H crossbar = horizon line, sun above) ============
const L02 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <svg viewBox="0 0 100 100" width={s*0.5} height={s*0.5}>
      <rect x="14" y="22" width="9" height="56" fill={C.ink} />
      <rect x="77" y="22" width="9" height="56" fill={C.ink} />
      <rect x="23" y="48" width="54" height="4" fill={C.ink} />
      <path d="M 30 48 A 20 20 0 0 1 70 48 Z" fill={C.dawn} />
    </svg>
    <span style={{ fontFamily:SANS, fontWeight:600, fontSize:s*0.32, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 03. Aperture (Mercury-style — split disc + line) ============
const L03 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <svg viewBox="0 0 100 100" width={s*0.5} height={s*0.5}>
      <defs>
        <clipPath id={`top${s}`}><rect x="0" y="0" width="100" height="50"/></clipPath>
        <clipPath id={`bot${s}`}><rect x="0" y="50" width="100" height="50"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="34" fill={C.dawn} clipPath={`url(#top${s})`} />
      <circle cx="50" cy="50" r="34" fill={C.ink} clipPath={`url(#bot${s})`} />
      <line x1="6" y1="50" x2="94" y2="50" stroke={C.ink} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    <span style={{ fontFamily:SERIF, fontSize:s*0.36, letterSpacing:'-0.025em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 04. Pure wordmark, custom-cut (Stripe/Bridge style) ============
const L04 = ({ s=180 }) => (
  <span style={{ fontFamily:GEIST, fontWeight:700, fontSize:s*0.42, letterSpacing:'-0.055em', color:C.ink, lineHeight:1 }}>
    horizon<span style={{ color:C.dawn }}>.</span>
  </span>
);

// ============ 05. Pure wordmark serif (premium, like Bridge but warmer) ============
const L05 = ({ s=180 }) => (
  <span style={{ fontFamily:FRAUNCES, fontWeight:500, fontSize:s*0.5, letterSpacing:'-0.035em', color:C.ink, lineHeight:1 }}>
    Horizon
  </span>
);

// ============ 06. Wordmark with custom 'o' = sun (Linear-style detail) ============
const L06 = ({ s=180 }) => {
  const fs = s*0.42;
  return (
    <div style={{ display:'inline-flex', alignItems:'baseline', fontFamily:GEIST, fontWeight:600, fontSize:fs, letterSpacing:'-0.045em', color:C.ink, lineHeight:1 }}>
      <span>h</span>
      <span style={{ position:'relative', display:'inline-block', width:fs*0.62, height:fs*0.62 }}>
        <svg viewBox="0 0 60 60" width={fs*0.62} height={fs*0.62} style={{ position:'absolute', inset:0 }}>
          <circle cx="30" cy="30" r="27" fill="none" stroke={C.ink} strokeWidth="6" />
          <path d="M 8 30 A 22 22 0 0 1 52 30 Z" fill={C.dawn} />
        </svg>
      </span>
      <span>rizon</span>
    </div>
  );
};

// ============ 07. Capsule wordmark (Wise/Revolut container) ============
const L07 = ({ s=180 }) => (
  <div style={{
    background:C.ink, color:C.cream, padding:`${s*0.13}px ${s*0.24}px`,
    borderRadius: s*0.5, display:'inline-block',
    fontFamily:GEIST, fontWeight:600, fontSize:s*0.22, letterSpacing:'-0.025em',
  }}>
    Horizon
  </div>
);

// ============ 08. Single rising dot (Northpoint, ultra-reduced) ============
const L08 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <svg viewBox="0 0 100 100" width={s*0.45} height={s*0.45}>
      <line x1="8" y1="62" x2="92" y2="62" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="38" r="11" fill={C.dawn} />
    </svg>
    <span style={{ fontFamily:SANS, fontWeight:500, fontSize:s*0.32, letterSpacing:'-0.03em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 09. Stacked vertical (Vercel/Linear feel) ============
const L09 = ({ s=180 }) => (
  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:s*0.08 }}>
    <svg viewBox="0 0 100 100" width={s*0.42} height={s*0.42}>
      <rect x="14" y="22" width="9" height="56" fill={C.ink} />
      <rect x="77" y="22" width="9" height="56" fill={C.ink} />
      <rect x="23" y="48" width="54" height="4" fill={C.ink} />
      <path d="M 30 48 A 20 20 0 0 1 70 48 Z" fill={C.dawn} />
    </svg>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.18, letterSpacing:'0.06em', textTransform:'uppercase', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 10. Two-line horizon (sky/earth, line between) ============
const L10 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <svg viewBox="0 0 100 100" width={s*0.45} height={s*0.45}>
      <rect x="0" y="0" width="100" height="46" fill={C.dawn} opacity="0.18" />
      <rect x="0" y="54" width="100" height="46" fill={C.ink} opacity="0.85" />
      <line x1="0" y1="50" x2="100" y2="50" stroke={C.ink} strokeWidth="3" />
      <circle cx="68" cy="32" r="10" fill={C.dawn} />
    </svg>
    <span style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:s*0.4, letterSpacing:'-0.02em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 11. Brutalist heavy sans (Brex pattern) ============
const L11 = ({ s=180 }) => (
  <span style={{ fontFamily:SANS, fontWeight:900, fontSize:s*0.42, letterSpacing:'-0.06em', color:C.ink, lineHeight:0.9 }}>
    HORIZON
  </span>
);

// ============ 12. Mono lowercase (Linear/Vercel typography vibe) ============
const L12 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.1 }}>
    <div style={{ width:s*0.06, height:s*0.32, background:C.dawn, borderRadius:s*0.03 }} />
    <span style={{ fontFamily:MONO, fontWeight:500, fontSize:s*0.26, letterSpacing:'-0.02em', color:C.ink, lineHeight:1 }}>
      horizon
    </span>
  </div>
);

// ============ 13. Sun-disc as 'O' replacement, serif (premium) ============
const L13 = ({ s=180 }) => {
  const fs = s*0.48;
  return (
    <div style={{ display:'inline-flex', alignItems:'baseline', fontFamily:SERIF, fontSize:fs, letterSpacing:'-0.03em', color:C.ink, lineHeight:1 }}>
      <span>H</span>
      <span style={{ position:'relative', display:'inline-block', width:fs*0.58, height:fs*0.58, transform:`translateY(${fs*0.04}px)` }}>
        <span style={{ position:'absolute', inset:0, borderRadius:'50%', background:C.dawn }} />
      </span>
      <span>rizon</span>
    </div>
  );
};

// ============ 14. Geometric monogram — H built from 3 strokes (Linear style) ============
const L14 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <svg viewBox="0 0 60 60" width={s*0.4} height={s*0.4}>
      <line x1="10" y1="10" x2="10" y2="50" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
      <line x1="50" y1="10" x2="50" y2="50" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
      <line x1="10" y1="30" x2="50" y2="30" stroke={C.dawn} strokeWidth="5" strokeLinecap="round" />
    </svg>
    <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.3, letterSpacing:'-0.03em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 15. Eclipse (full disc with thin line through middle) ============
const L15 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <svg viewBox="0 0 100 100" width={s*0.46} height={s*0.46}>
      <circle cx="50" cy="50" r="36" fill={C.dawn} />
      <line x1="2" y1="50" x2="98" y2="50" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
    </svg>
    <span style={{ fontFamily:SANS, fontWeight:500, fontSize:s*0.32, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 16. Wordmark with sun-glyph above (badge style) ============
const L16 = ({ s=180 }) => (
  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:s*0.05 }}>
    <svg viewBox="0 0 100 30" width={s*0.5} height={s*0.15}>
      <line x1="2" y1="22" x2="98" y2="22" stroke={C.ink} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 38 22 A 12 12 0 0 1 62 22 Z" fill={C.dawn} />
    </svg>
    <span style={{ fontFamily:SERIF, fontSize:s*0.34, letterSpacing:'-0.025em', color:C.ink, lineHeight:1 }}>Horizon</span>
  </div>
);

// ============ 17. Tight kerned all-caps (Privy-style) ============
const L17 = ({ s=180 }) => (
  <span style={{ fontFamily:GEIST, fontWeight:700, fontSize:s*0.22, letterSpacing:'0.18em', color:C.ink, lineHeight:1 }}>
    HORIZON
  </span>
);

// ============ 18. H + bullet (asterism, Origin-style accent) ============
const L18 = ({ s=180 }) => (
  <div style={{ display:'inline-flex', alignItems:'baseline', gap:s*0.04, fontFamily:FRAUNCES, fontWeight:500, fontSize:s*0.46, letterSpacing:'-0.03em', color:C.ink, lineHeight:1 }}>
    <span>Horizon</span>
    <span style={{ color:C.dawn, fontStyle:'italic', fontSize:s*0.3, transform:`translateY(${-s*0.18}px)`, display:'inline-block' }}>*</span>
  </div>
);

// ============ 19. Linear-style abstract glyph (3 stacked lines) ============
const L19 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.16 }}>
    <svg viewBox="0 0 60 60" width={s*0.4} height={s*0.4}>
      <line x1="10" y1="20" x2="50" y2="20" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
      <line x1="10" y1="32" x2="50" y2="32" stroke={C.dawn} strokeWidth="4" strokeLinecap="round" />
      <line x1="10" y1="44" x2="50" y2="44" stroke={C.ink} strokeWidth="4" strokeLinecap="round" opacity="0.4" />
    </svg>
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.32, letterSpacing:'-0.04em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 20. Sun-as-only (no line), wordmark below ============
const L20 = ({ s=180 }) => (
  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:s*0.08 }}>
    <div style={{ width:s*0.34, height:s*0.34, borderRadius:'50%', background:C.dawn }} />
    <span style={{ fontFamily:SERIF, fontSize:s*0.28, letterSpacing:'-0.025em', color:C.ink, lineHeight:1 }}>Horizon</span>
  </div>
);

// ============ 21. Bracket frame [ Horizon ] — bridge-y ============
const L21 = ({ s=180 }) => (
  <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.3, letterSpacing:'-0.025em', color:C.ink, lineHeight:1 }}>
    <span style={{ color:C.dawn, marginRight:s*0.04 }}>[</span>
    Horizon
    <span style={{ color:C.dawn, marginLeft:s*0.04 }}>]</span>
  </span>
);

// ============ 22. Underlined wordmark (horizon = underline) ============
const L22 = ({ s=180 }) => (
  <div style={{ display:'inline-flex', flexDirection:'column', alignItems:'flex-start', gap:s*0.03 }}>
    <span style={{ fontFamily:SERIF, fontSize:s*0.42, letterSpacing:'-0.03em', color:C.ink, lineHeight:1 }}>Horizon</span>
    <div style={{ width:'100%', height:s*0.025, background:C.dawn, borderRadius:s*0.012 }} />
  </div>
);

// ============ 23. Privy-style soft wordmark with subtle glyph ============
const L23 = ({ s=180 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.12 }}>
    <svg viewBox="0 0 60 60" width={s*0.32} height={s*0.32}>
      <circle cx="30" cy="30" r="26" fill={C.dawn} />
      <circle cx="30" cy="30" r="14" fill={C.cream} />
    </svg>
    <span style={{ fontFamily:GEIST, fontWeight:500, fontSize:s*0.32, letterSpacing:'-0.035em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ 24. Italic serif single-word (Origin-style aspirational) ============
const L24 = ({ s=180 }) => (
  <span style={{ fontFamily:FRAUNCES, fontStyle:'italic', fontWeight:500, fontSize:s*0.5, letterSpacing:'-0.025em', color:C.ink, lineHeight:1 }}>
    Horizon
  </span>
);

// ============ Catalog ============

const LOGOS = [
  { id:'01', name:'H Squircle', note:'Ramp/Brex pattern — H-monogram in soft container + Geist wordmark', cat:'Container', Logo:L01 },
  { id:'02', name:'H-Horizon', note:'Letter IS the brand — crossbar = horizon, sun rises through. Most ownable.', cat:'Letter-as-symbol', Logo:L02 },
  { id:'03', name:'Aperture', note:'Mercury-style split disc + line. Iconic, premium.', cat:'Symbol', Logo:L03 },
  { id:'04', name:'Lowercase Geist', note:'Stripe/Bridge — pure wordmark with single dot accent.', cat:'Wordmark', Logo:L04 },
  { id:'05', name:'Fraunces Serif', note:'Bridge-energy but warmer. Premium, founder-y.', cat:'Wordmark', Logo:L05 },
  { id:'06', name:'O = Sun', note:"The 'o' is a half-sun. Linear-style typographic detail.", cat:'Letter-as-symbol', Logo:L06 },
  { id:'07', name:'Capsule', note:'Wise/Revolut container — wordmark inside pill.', cat:'Container', Logo:L07 },
  { id:'08', name:'Northpoint', note:'Single dot rising over line. Maximally reduced.', cat:'Symbol', Logo:L08 },
  { id:'09', name:'Stacked H', note:'Vercel/Linear vertical layout.', cat:'Stacked', Logo:L09 },
  { id:'10', name:'Sky/Earth', note:'Two-tone landscape, sun in upper field.', cat:'Symbol', Logo:L10 },
  { id:'11', name:'Brutalist Caps', note:'Brex-style heavy sans, no symbol.', cat:'Wordmark', Logo:L11 },
  { id:'12', name:'Mono Tag', note:'Linear/Vercel mono lowercase with accent bar.', cat:'Wordmark', Logo:L12 },
  { id:'13', name:'Serif H+Sun', note:"The 'O' is replaced by a sun disc. Premium serif.", cat:'Letter-as-symbol', Logo:L13 },
  { id:'14', name:'3-Stroke H', note:'Linear-style abstract H from 3 line strokes.', cat:'Symbol', Logo:L14 },
  { id:'15', name:'Eclipse', note:'Full disc with line cutting through middle.', cat:'Symbol', Logo:L15 },
  { id:'16', name:'Badge', note:'Sun-glyph above wordmark, official-feeling.', cat:'Stacked', Logo:L16 },
  { id:'17', name:'Privy Caps', note:'Wide-tracked all-caps, soft and tech-y.', cat:'Wordmark', Logo:L17 },
  { id:'18', name:'Horizon*', note:'Origin-style asterisk accent.', cat:'Wordmark', Logo:L18 },
  { id:'19', name:'3 Lines', note:'Three horizontal strokes — abstract horizon stratification.', cat:'Symbol', Logo:L19 },
  { id:'20', name:'Sun + Stack', note:'Pure orange disc + serif wordmark below. Friendly.', cat:'Stacked', Logo:L20 },
  { id:'21', name:'Bracketed', note:'[ Horizon ] — bridge / between-worlds metaphor.', cat:'Wordmark', Logo:L21 },
  { id:'22', name:'Underlined', note:'Horizon literally has a horizon line underneath.', cat:'Wordmark', Logo:L22 },
  { id:'23', name:'Aperture Dot', note:'Privy-style soft glyph + sans wordmark.', cat:'Symbol', Logo:L23 },
  { id:'24', name:'Italic Serif', note:'Origin-energy, fully aspirational. No symbol.', cat:'Wordmark', Logo:L24 },
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
          Logo Studies · 24 directions
        </div>
        <div style={{ fontFamily:MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.55 }}>
          Horizon · 2026
        </div>
      </div>
      <h1 style={{
        fontFamily:SERIF, fontSize:120, lineHeight:0.95, letterSpacing:'-0.035em',
        margin:0, fontWeight:400, maxWidth:'70%',
      }}>
        Twenty-four ways to draw a Horizon.
      </h1>
      <div style={{
        marginTop:32, fontFamily:SERIF, fontStyle:'italic', fontSize:24,
        opacity:0.7, maxWidth:760, lineHeight:1.4,
      }}>
        Looking at Bridge, Privy, Mercury, Stripe, Brex, Ramp, Linear, Vercel, Plaid — patterns repeat:
        letter-as-symbol, container monogram, custom-cut wordmark, geometric mark. Each tile picks a pattern and runs it.
      </div>

      {/* Categories legend */}
      <div style={{
        marginTop:48, paddingTop:24, borderTop:`1px solid ${C.cream}22`,
        display:'flex', gap:32, flexWrap:'wrap', fontSize:12,
      }}>
        {[
          ['Container', 'monogram in shape'],
          ['Letter-as-symbol', 'the H is the mark'],
          ['Symbol', 'pure geometric mark'],
          ['Wordmark', 'no symbol, type only'],
          ['Stacked', 'mark above type'],
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
  // Group by category for the grid order
  const order = ['Letter-as-symbol','Symbol','Container','Stacked','Wordmark'];
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

        {/* Scale comparison strip */}
        <div style={{
          maxWidth:1480, margin:'72px auto 0',
          background:C.paper, border:`1px solid ${C.hairline}`, borderRadius:8,
          padding:'40px 48px',
        }}>
          <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:C.dawn, marginBottom:8 }}>
            Scale test · Top picks at favicon size
          </div>
          <div style={{ fontFamily:SERIF, fontSize:32, letterSpacing:'-0.02em', marginBottom:32 }}>
            Does the symbol survive at 16px?
          </div>
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', alignItems:'flex-end' }}>
            {['02','03','08','13','14','15','19','23'].map(id => {
              const e = LOGOS.find(l => l.id === id);
              return (
                <div key={id} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
                  <div style={{ display:'flex', alignItems:'flex-end', gap:14 }}>
                    {[16,32,64].map(s => (
                      <div key={s} style={{ display:'grid', placeItems:'center', height:64 }}>
                        <e.Logo s={s*2.5} />
                      </div>
                    ))}
                  </div>
                  <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', color:C.ink, opacity:0.55 }}>
                    {e.id} · {e.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
