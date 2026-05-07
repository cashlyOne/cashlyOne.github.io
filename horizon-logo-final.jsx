// horizon-logo-final.jsx — H Squircle with gradient background variations

const SERIF = "'Instrument Serif', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const GEIST = "'Geist', 'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const C = {
  ink:'#0a0e14', cream:'#faf7f0', paper:'#ffffff', bone:'#f1ece1',
  // Sky blue brand — dawn=sky, ember=deeper sky, dusk=midnight accent
  dawn:'#5ab8ea', ember:'#2f8fd1', dusk:'#0e2a4a',
  hairline:'#e8e2d4', mist:'#8e95a0',
  peach:'#bcdef2',
};

// Base H squircle with custom gradient
const HMark = ({ s=180, gradient, textColor=C.cream }) => (
  <div style={{
    width:s, height:s, borderRadius:s*0.24, background:gradient,
    display:'grid', placeItems:'center',
  }}>
    <span style={{ fontFamily:GEIST, fontWeight:700, fontSize:s*0.62, color:textColor, letterSpacing:'-0.04em', lineHeight:1 }}>H</span>
  </div>
);

const Lockup = ({ gradient, textColor=C.cream, wordColor=C.ink, s=120 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:s*0.28 }}>
    <HMark s={s*0.9} gradient={gradient} textColor={textColor} />
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:s*0.5, letterSpacing:'-0.04em', color:wordColor, lineHeight:1 }}>Horizon</span>
  </div>
);

// ============ Gradient variations ============

const GRADS = [
  {
    id:'A', name:'Subtle Dusk', note:'Ink → slightly lighter ink. Almost imperceptible. Most quiet.',
    gradient:`linear-gradient(160deg, #1a2030 0%, ${C.ink} 100%)`,
  },
  {
    id:'B', name:'Dawn Glow', note:'Ink with warm dawn glow in upper-left corner. Hints at brand.',
    gradient:`radial-gradient(circle at 20% 15%, ${C.dawn}55 0%, transparent 50%), ${C.ink}`,
  },
  {
    id:'C', name:'Sunset Edge', note:'Ink → ember at bottom. Subtle horizon meeting darkness.',
    gradient:`linear-gradient(180deg, ${C.ink} 55%, ${C.ember} 130%)`,
  },
  {
    id:'D', name:'Aurora', note:'Ink with cool dusk-blue glow top-right, warm dawn bottom-left.',
    gradient:`radial-gradient(circle at 80% 20%, ${C.dusk}aa 0%, transparent 55%), radial-gradient(circle at 20% 90%, ${C.dawn}66 0%, transparent 50%), ${C.ink}`,
  },
  {
    id:'E', name:'Diagonal Dawn', note:'Sweeping ink → dawn. Strong, branded.',
    gradient:`linear-gradient(135deg, ${C.ink} 30%, ${C.dawn} 100%)`,
  },
  {
    id:'F', name:'Soft Top-Light', note:'Ink with gentle warm glow from the top, like a sunrise.',
    gradient:`linear-gradient(180deg, #2a1a14 0%, ${C.ink} 60%, ${C.ink} 100%)`,
  },
  {
    id:'G', name:'Conic Dawn', note:'Conic spin from dusk through dawn. Premium-tech.',
    gradient:`conic-gradient(from 220deg at 50% 50%, ${C.ink} 0deg, ${C.dusk} 90deg, ${C.ink} 180deg, ${C.ember} 320deg, ${C.ink} 360deg)`,
  },
  {
    id:'H', name:'Midnight → Dawn', note:'Top is deep midnight, bottom hints at sunrise.',
    gradient:`linear-gradient(180deg, #050810 0%, ${C.ink} 50%, #2a1810 100%)`,
  },
  {
    id:'I', name:'Warm Ink', note:'Ink with overall warm tint — like ink lit by candle.',
    gradient:`linear-gradient(135deg, #14110d 0%, #0a0e14 50%, #160e08 100%)`,
  },
];

// ============ Layout ============

const Card = ({ entry, recommended }) => (
  <div style={{
    background:C.paper, borderRadius:10,
    border:`1px solid ${C.hairline}`, overflow:'hidden',
    display:'flex', flexDirection:'column',
    boxShadow: recommended ? `0 0 0 2px ${C.dawn}` : 'none',
    position:'relative',
  }}>
    {recommended && (
      <div style={{
        position:'absolute', top:14, right:14, zIndex:1,
        fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase',
        background:C.dawn, color:C.cream, padding:'4px 8px', borderRadius:3,
      }}>Recommended</div>
    )}
    <div style={{
      background:C.cream, padding:'56px 32px', display:'flex',
      alignItems:'center', justifyContent:'center', minHeight:280,
      borderBottom:`1px solid ${C.hairline}`,
    }}>
      <Lockup gradient={entry.gradient} s={120} />
    </div>
    <div style={{
      background:'#1a1d24', padding:'40px 32px', display:'flex',
      alignItems:'center', justifyContent:'center', minHeight:200,
      borderBottom:`1px solid ${C.hairline}`,
    }}>
      <Lockup gradient={entry.gradient} wordColor={C.cream} s={100} />
    </div>
    <div style={{ padding:'20px 24px 24px', display:'flex', flexDirection:'column', gap:8 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <div style={{ fontFamily:SERIF, fontSize:24, letterSpacing:'-0.015em', color:C.ink, lineHeight:1 }}>
          {entry.name}
        </div>
        <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', color:C.dawn, textTransform:'uppercase' }}>
          {entry.id}
        </div>
      </div>
      <div style={{ fontSize:12.5, lineHeight:1.55, color:C.ink, opacity:0.65 }}>
        {entry.note}
      </div>
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
          H Squircle · 9 gradient studies
        </div>
        <div style={{ fontFamily:MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.55 }}>
          Horizon · final
        </div>
      </div>
      <h1 style={{
        fontFamily:SERIF, fontSize:120, lineHeight:0.95, letterSpacing:'-0.035em',
        margin:0, fontWeight:400, maxWidth:'78%',
      }}>
        Same shape. Subtler depth.
      </h1>
      <div style={{
        marginTop:32, fontFamily:SERIF, fontStyle:'italic', fontSize:24,
        opacity:0.7, maxWidth:760, lineHeight:1.4,
      }}>
        Nine gradient treatments on the H squircle — from imperceptible (A) to fully branded (E).
        Each shown on cream and on dark.
      </div>
    </div>
  </div>
);

// Detailed views of recommended pick
const Showcase = ({ entry }) => (
  <div style={{
    maxWidth:1480, margin:'72px auto 0',
    background:C.paper, border:`1px solid ${C.hairline}`, borderRadius:10,
    padding:'56px 64px',
  }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8 }}>
      <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:C.dawn }}>
        Showcase · {entry.id} · {entry.name}
      </div>
      <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', color:C.ink, opacity:0.5 }}>
        Scale + context
      </div>
    </div>
    <div style={{ fontFamily:SERIF, fontSize:36, letterSpacing:'-0.02em', marginBottom:40, color:C.ink }}>
      How it lives.
    </div>

    {/* Scale */}
    <div style={{
      background:C.cream, borderRadius:8, padding:'48px 40px',
      display:'flex', alignItems:'flex-end', justifyContent:'space-around', gap:32,
      marginBottom:32,
    }}>
      {[24, 48, 96, 160].map(sz => (
        <div key={sz} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
          <HMark s={sz} gradient={entry.gradient} />
          <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', color:C.ink, opacity:0.55 }}>
            {sz}px
          </div>
        </div>
      ))}
    </div>

    {/* Lockups */}
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
      <div style={{ background:C.cream, borderRadius:8, padding:'48px 40px', display:'grid', placeItems:'center' }}>
        <Lockup gradient={entry.gradient} s={140} />
      </div>
      <div style={{ background:'#1a1d24', borderRadius:8, padding:'48px 40px', display:'grid', placeItems:'center' }}>
        <Lockup gradient={entry.gradient} wordColor={C.cream} s={140} />
      </div>
      <div style={{ background:C.bone, borderRadius:8, padding:'48px 40px', display:'grid', placeItems:'center' }}>
        <HMark s={140} gradient={entry.gradient} />
      </div>
      <div style={{ background:C.dawn, borderRadius:8, padding:'48px 40px', display:'grid', placeItems:'center' }}>
        <Lockup gradient={entry.gradient} wordColor={C.cream} s={140} />
      </div>
    </div>
  </div>
);

const App = () => {
  const recommended = GRADS.find(g => g.id === 'B');
  return (
    <div style={{ minHeight:'100vh', background:C.cream }}>
      <Header />
      <div style={{ padding:'56px 64px 32px' }}>
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20,
          maxWidth:1480, margin:'0 auto',
        }}>
          {GRADS.map(entry => (
            <Card key={entry.id} entry={entry} recommended={entry.id === 'B'} />
          ))}
        </div>
      </div>
      <div style={{ padding:'0 64px 96px' }}>
        <Showcase entry={recommended} />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
