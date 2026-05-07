// horizon-brand.jsx — Horizon Brand Identity v2 — Light, strong logo

const SERIF = "'Instrument Serif', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const C = {
  ink:    '#0a0e14',
  cream:  '#faf7f0',
  paper:  '#ffffff',
  bone:   '#f1ece1',
  dawn:   '#e07a3a',  // deeper, more confident orange
  ember:  '#c14d1f',
  dusk:   '#2a3550',
  mist:   '#8e95a0',
  hairline:'#e8e2d4',
};

// ============================================================
// THREE LOGO DIRECTIONS
// ============================================================

// OPTION A — "H Horizon" — the H is the brand. Crossbar = horizon line, sun rises through it.
const LogoA = ({ size=120, ink=C.ink, accent=C.dawn }) => {
  const w = size, h = size;
  return (
    <svg viewBox="0 0 100 100" width={w} height={h} style={{display:'block'}}>
      {/* The H */}
      <rect x="14" y="20" width="9" height="60" fill={ink} />
      <rect x="77" y="20" width="9" height="60" fill={ink} />
      {/* Crossbar = horizon line */}
      <rect x="23" y="48" width="54" height="4" fill={ink} />
      {/* Rising sun — half disc above the crossbar, between the verticals */}
      <path d="M 30 48 A 20 20 0 0 1 70 48 Z" fill={accent} />
    </svg>
  );
};

// OPTION B — "Aperture" — perfect disc cut by a horizon line. Quiet, iconic.
const LogoB = ({ size=120, ink=C.ink, accent=C.dawn }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} style={{display:'block'}}>
    <defs>
      <clipPath id="topHalf">
        <rect x="0" y="0" width="100" height="50" />
      </clipPath>
      <clipPath id="botHalf">
        <rect x="0" y="50" width="100" height="50" />
      </clipPath>
    </defs>
    {/* Top half = sun */}
    <circle cx="50" cy="50" r="34" fill={accent} clipPath="url(#topHalf)" />
    {/* Bottom half = ink (the earth/water) */}
    <circle cx="50" cy="50" r="34" fill={ink} clipPath="url(#botHalf)" />
    {/* Horizon line — extends past the disc */}
    <line x1="6" y1="50" x2="94" y2="50" stroke={ink} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// OPTION C — "Northpoint" — a single dot rising above a long horizon. Maximally reduced.
const LogoC = ({ size=120, ink=C.ink, accent=C.dawn }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} style={{display:'block'}}>
    <line x1="8" y1="62" x2="92" y2="62" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="38" r="11" fill={accent} />
  </svg>
);

const Wordmark = ({ size=64, color=C.ink, italic=false, weight=400 }) => (
  <span style={{
    fontFamily: SERIF,
    fontStyle: italic ? 'italic' : 'normal',
    fontSize: size, lineHeight: 1, letterSpacing: '-0.025em',
    color, fontWeight: weight,
  }}>Horizon</span>
);

const Lockup = ({ Logo, size=46, color=C.ink, accent=C.dawn, stack=false }) => (
  <div style={{
    display:'flex', flexDirection: stack ? 'column':'row',
    alignItems:'center', gap: stack ? 14 : size*0.4, color,
  }}>
    <Logo size={size*1.05} ink={color} accent={accent} />
    <Wordmark size={size*1.45} color={color} />
  </div>
);

// ============================================================
// SHARED CHROME
// ============================================================

const SectionHeader = ({ num, label, title, subtitle, dark }) => (
  <div style={{
    marginBottom:40, paddingBottom:24,
    borderBottom:`1px solid ${dark ? '#ffffff14' : C.hairline}`,
    display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:32,
  }}>
    <div>
      <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.5, marginBottom:12 }}>
        {num} · {label}
      </div>
      <h2 style={{ fontFamily:SERIF, fontSize:56, lineHeight:1, letterSpacing:'-0.025em', margin:0, fontWeight:400 }}>
        {title}
      </h2>
    </div>
    {subtitle && (
      <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:18, opacity:0.55, maxWidth:340, lineHeight:1.4, textAlign:'right' }}>
        {subtitle}
      </div>
    )}
  </div>
);

const Card = ({ bg=C.paper, fg=C.ink, label, num, children, height=460, span=1, pad=40, border=true }) => (
  <div style={{
    gridColumn:`span ${span}`,
    background: bg, color: fg, borderRadius: 6,
    padding: pad, position:'relative', minHeight: height,
    border: border ? `1px solid ${C.hairline}` : 'none',
    fontFamily:SANS, overflow:'hidden',
  }}>
    {(label || num) && (
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'center',
        fontFamily:MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', opacity:0.45,
        marginBottom:24,
      }}>
        <span>{label}</span><span>{num}</span>
      </div>
    )}
    {children}
  </div>
);

// ============================================================
// 1. COVER (light)
// ============================================================

const Cover = () => (
  <div style={{
    width:1200, padding:'72px 80px', background:C.cream, color:C.ink, fontFamily:SANS, position:'relative', overflow:'hidden',
  }}>
    {/* subtle warm glow at bottom */}
    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      background:`radial-gradient(ellipse at 50% 110%, ${C.dawn}22 0%, transparent 60%)`,
    }} />
    <div style={{ position:'relative' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:96 }}>
        <div style={{ fontFamily:MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.45 }}>
          Brand Identity · v2
        </div>
        <div style={{ fontFamily:MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.45 }}>
          Light · Strong logo
        </div>
      </div>

      <div style={{ display:'flex', justifyContent:'center', marginBottom:72 }}>
        <LogoA size={160} ink={C.ink} accent={C.dawn} />
      </div>

      <h1 style={{
        fontFamily:SERIF, fontSize:200, lineHeight:0.92, letterSpacing:'-0.04em',
        margin:'0 0 40px', fontWeight:400, textAlign:'center',
      }}>Horizon</h1>

      <div style={{
        textAlign:'center', fontFamily:SERIF, fontStyle:'italic', fontSize:34, lineHeight:1.2,
        opacity:0.75, maxWidth:760, margin:'0 auto',
      }}>
        Banking for founders the old system left behind.
      </div>

      <div style={{
        marginTop:96, paddingTop:32, borderTop:`1px solid ${C.hairline}`,
        display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:32, fontSize:13, lineHeight:1.5,
      }}>
        {[
          ['Tone', 'Institutional · Global · Warm'],
          ['Crypto', 'Invisible — feels like a bank'],
          ['Wedge', '17 locked-out countries'],
          ['Promise', 'A fixed point. Wherever you are.'],
        ].map(([k,v])=>(
          <div key={k}>
            <div style={{ fontFamily:MONO, fontSize:9.5, letterSpacing:'0.22em', textTransform:'uppercase', opacity:0.5, marginBottom:8 }}>{k}</div>
            <div>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================================
// 2. LOGO DIRECTIONS — three options, large
// ============================================================

const LogoDirections = () => {
  const opts = [
    { id:'A', name:'H-Horizon', Logo: LogoA, note:'The H is the brand. Crossbar is the horizon line. Sun rises through it.', why:'Letter and symbol fuse into one ownable mark. Works as favicon, app icon, embroidery — without the wordmark.', strength:'Ownable · Memorable · Doppelnutzung' },
    { id:'B', name:'Aperture', Logo: LogoB, note:'Disc cut by a horizon. Top half is sun, bottom half is earth, line continues past.', why:'Quiet, iconic. The split-disc reads as both "moment of dawn" and "two halves meeting" — the founder bridging two worlds.', strength:'Iconic · Premium · Geometric' },
    { id:'C', name:'Northpoint', Logo: LogoC, note:'A single point rising above a long line. Maximally reduced — like a dot on a map.', why:'Polestar-clean. Reads from across a room. Closest to the navigation/Polaris meaning, but warmer.', strength:'Reduced · Clean · Modern' },
  ];
  return (
    <div style={{ width:1200, padding:'72px 80px', background:C.paper, color:C.ink, fontFamily:SANS }}>
      <SectionHeader num="01" label="Logo Directions" title="Three strong options. Pick one." subtitle="Each is ownable. Each works at 16px and 16ft." />

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20 }}>
        {opts.map(o => (
          <div key={o.id} style={{
            background:C.paper, border:`1px solid ${C.hairline}`, borderRadius:8, overflow:'hidden',
          }}>
            <div style={{ background:C.cream, padding:'56px 32px', display:'flex', justifyContent:'center', alignItems:'center', minHeight:280, borderBottom:`1px solid ${C.hairline}` }}>
              <o.Logo size={180} ink={C.ink} accent={C.dawn} />
            </div>
            <div style={{ padding:'28px 32px 32px' }}>
              <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:8 }}>
                <div style={{ fontFamily:SERIF, fontSize:32, letterSpacing:'-0.02em' }}>Option {o.id}</div>
                <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', opacity:0.5 }}>{o.name}</div>
              </div>
              <div style={{ fontSize:14, lineHeight:1.55, color:C.ink, opacity:0.85, marginBottom:14 }}>
                {o.note}
              </div>
              <div style={{ fontSize:13, lineHeight:1.55, color:C.ink, opacity:0.65, marginBottom:18, fontStyle:'italic', fontFamily:SERIF }}>
                {o.why}
              </div>
              <div style={{
                fontFamily:MONO, fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase',
                color:C.dawn, paddingTop:14, borderTop:`1px solid ${C.hairline}`,
              }}>{o.strength}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Scale row */}
      <div style={{ marginTop:32 }}>
        <Card label="Scale Test · Same logo, three sizes" num="01.1" bg={C.cream} height={220}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-around', gap:32, height:'100%', paddingTop:8 }}>
            {[16,40,120].map(s => (
              <div key={s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
                <LogoA size={s} ink={C.ink} accent={C.dawn} />
                <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', opacity:0.5, textTransform:'uppercase' }}>{s}px · Option A</div>
              </div>
            ))}
            {[16,40,120].map(s => (
              <div key={'b'+s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
                <LogoB size={s} ink={C.ink} accent={C.dawn} />
                <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', opacity:0.5, textTransform:'uppercase' }}>{s}px · B</div>
              </div>
            ))}
            {[16,40,120].map(s => (
              <div key={'c'+s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
                <LogoC size={s} ink={C.ink} accent={C.dawn} />
                <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', opacity:0.5, textTransform:'uppercase' }}>{s}px · C</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Lockups for each */}
      <div style={{ marginTop:20, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20 }}>
        {opts.map(o => (
          <Card key={o.id} label={`Lockup · ${o.id}`} num="01.2" bg={C.cream} height={200}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:120 }}>
              <Lockup Logo={o.Logo} size={42} color={C.ink} accent={C.dawn} />
            </div>
          </Card>
        ))}
      </div>

      {/* Inverse */}
      <div style={{ marginTop:20, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20 }}>
        {opts.map(o => (
          <div key={o.id+'inv'} style={{ background:C.ink, color:C.cream, borderRadius:8, padding:40, minHeight:200, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
            <div style={{ position:'absolute', top:14, left:18, fontFamily:MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', opacity:0.5 }}>
              On Ink · {o.id}
            </div>
            <Lockup Logo={o.Logo} size={42} color={C.cream} accent={C.dawn} />
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// 3. COLOR (light-first)
// ============================================================

const Color = () => {
  const swatches = [
    { name:'Paper',  hex:C.paper,  role:'Default surface', light:true, primary:true },
    { name:'Cream',  hex:C.cream,  role:'Warm surface · sections', light:true, primary:true },
    { name:'Ink',    hex:C.ink,    role:'Text · contrast accent', light:false, primary:true },
    { name:'Dawn',   hex:C.dawn,   role:'Brand accent · CTAs · the sun', light:true, primary:true },
    { name:'Ember',  hex:C.ember,  role:'Hover · active', light:false },
    { name:'Dusk',   hex:C.dusk,   role:'Secondary depth', light:false },
    { name:'Bone',   hex:C.bone,   role:'Card surfaces', light:true },
    { name:'Hairline',hex:C.hairline, role:'Dividers, borders', light:true },
  ];
  return (
    <div style={{ width:1200, padding:'72px 80px', background:C.paper, color:C.ink, fontFamily:SANS }}>
      <SectionHeader num="02" label="Color" title="Light by default." subtitle="One warm accent. Everything else stays out of the way." />

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginBottom:20 }}>
        {swatches.map(s => (
          <div key={s.name} style={{
            background:s.hex, color: s.light ? C.ink : C.cream,
            padding:'24px 24px 28px', borderRadius:6, minHeight:200,
            display:'flex', flexDirection:'column', justifyContent:'space-between',
            border: s.light ? `1px solid ${C.hairline}` : 'none', position:'relative',
          }}>
            {s.primary && (
              <div style={{ position:'absolute', top:14, right:14, fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', opacity:0.5, textTransform:'uppercase' }}>Primary</div>
            )}
            <div style={{ fontFamily:SERIF, fontSize:32, letterSpacing:'-0.02em' }}>{s.name}</div>
            <div>
              <div style={{ fontFamily:MONO, fontSize:11, marginBottom:6 }}>{s.hex.toUpperCase()}</div>
              <div style={{ fontSize:11, lineHeight:1.4, opacity:0.75 }}>{s.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage stripe */}
      <div style={{
        background:C.cream, borderRadius:6, padding:'28px 36px',
        display:'flex', alignItems:'center', gap:36,
        border:`1px solid ${C.hairline}`,
      }}>
        <div style={{ flex:'0 0 auto', display:'flex', gap:6 }}>
          <div style={{ width:80, height:80, background:C.paper, border:`1px solid ${C.hairline}` }} />
          <div style={{ width:80, height:80, background:C.cream, border:`1px solid ${C.hairline}` }} />
          <div style={{ width:24, height:80, background:C.dawn }} />
          <div style={{ width:8, height:80, background:C.ink }} />
        </div>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:22, lineHeight:1.3, opacity:0.75 }}>
          Roughly 70% paper, 25% cream, 4% dawn, 1% ink. Restraint is the brand.
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 4. TYPE
// ============================================================

const Type = () => (
  <div style={{ width:1200, padding:'72px 80px', background:C.cream, color:C.ink, fontFamily:SANS }}>
    <SectionHeader num="03" label="Typography" title="Serif for soul. Sans for surface." />

    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
      <Card label="Display · Instrument Serif" num="01" bg={C.paper} height={420}>
        <div style={{ fontFamily:SERIF, fontSize:140, lineHeight:0.95, letterSpacing:'-0.035em', marginBottom:8 }}>Aa</div>
        <div style={{ fontFamily:MONO, fontSize:11, letterSpacing:'0.1em', opacity:0.5, marginBottom:24 }}>Regular · Italic</div>
        <div style={{ fontFamily:SERIF, fontSize:30, lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:8 }}>
          Headlines, hero copy, quiet moments.
        </div>
        <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:20, opacity:0.65, lineHeight:1.4 }}>
          The italic is where the warmth lives.
        </div>
      </Card>

      <Card label="Text · Inter Tight" num="02" bg={C.paper} height={420}>
        <div style={{ fontFamily:SANS, fontWeight:600, fontSize:140, lineHeight:0.95, letterSpacing:'-0.045em', marginBottom:8 }}>Aa</div>
        <div style={{ fontFamily:MONO, fontSize:11, letterSpacing:'0.1em', opacity:0.5, marginBottom:24 }}>300 · 400 · 500 · 600 · 700</div>
        <div style={{ fontFamily:SANS, fontWeight:500, fontSize:20, lineHeight:1.4, marginBottom:8 }}>
          UI, body, navigation, product surfaces.
        </div>
        <div style={{ fontFamily:SANS, fontWeight:400, fontSize:14, opacity:0.65, lineHeight:1.55 }}>
          Tabular numbers by default. From 11px to 64px without losing rhythm.
        </div>
      </Card>
    </div>

    <div style={{ marginTop:20 }}>
      <Card label="Mono · JetBrains Mono · For data, references, IDs" num="03" bg={C.paper} height={180}>
        <div style={{ fontFamily:MONO, fontSize:14, lineHeight:1.8, color:C.ink, opacity:0.85 }}>
          USD · 12,847.92 — settled 2.3s ago<br/>
          ACH 0001 · ROUTING 091000019 · LAGOS → SAN FRANCISCO<br/>
          REF #HZN-94B2-X7 · ENCRYPTED · 2026-05-06 22:18:06 UTC
        </div>
      </Card>
    </div>
  </div>
);

// ============================================================
// 5. APPLICATIONS — light hero, cards, app icon, etc
// ============================================================

const HeroLight = ({ Logo }) => (
  <div style={{ background:C.paper, color:C.ink, borderRadius:6, padding:'24px 36px 0', minHeight:520, fontFamily:SANS, position:'relative', overflow:'hidden', border:`1px solid ${C.hairline}` }}>
    {/* Nav */}
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:32, borderBottom:`1px solid ${C.hairline}` }}>
      <Lockup Logo={Logo} size={20} color={C.ink} accent={C.dawn} />
      <div style={{ display:'flex', gap:32, fontSize:13, color:C.ink, opacity:0.7 }}>
        <span>Accounts</span><span>Payments</span><span>Cards</span><span>Stripe</span><span>Pricing</span>
      </div>
      <div style={{ fontFamily:SANS, fontSize:13, padding:'10px 18px', background:C.ink, color:C.cream, borderRadius:3, fontWeight:500 }}>
        Open account →
      </div>
    </div>

    <div style={{ paddingTop:80, paddingBottom:48, display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:48, alignItems:'center' }}>
      <div>
        <div style={{ display:'inline-flex', alignItems:'center', gap:10, fontFamily:MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:C.dawn, marginBottom:24 }}>
          <span style={{ width:6, height:6, borderRadius:3, background:C.dawn }} />
          For founders the old system left behind
        </div>
        <h1 style={{ fontFamily:SERIF, fontSize:96, lineHeight:0.98, letterSpacing:'-0.035em', margin:'0 0 24px', fontWeight:400 }}>
          A fixed point.<br/>
          <em style={{ fontStyle:'italic', color:C.dawn }}>Wherever you are.</em>
        </h1>
        <div style={{ fontSize:18, lineHeight:1.55, color:C.ink, opacity:0.7, maxWidth:540, marginBottom:32 }}>
          Business banking for founders with a US LLC. ACH, wire, card, Stripe — all working, in 150+ countries. Stablecoin under the hood. You'd never know.
        </div>
        <div style={{ display:'flex', gap:12 }}>
          <div style={{ background:C.ink, color:C.cream, padding:'14px 22px', borderRadius:3, fontWeight:500, fontSize:14 }}>Open account in 7 min</div>
          <div style={{ border:`1px solid ${C.hairline}`, padding:'14px 22px', borderRadius:3, fontWeight:400, fontSize:14, color:C.ink }}>Talk to a founder</div>
        </div>
      </div>
      <div style={{ display:'flex', justifyContent:'center', position:'relative' }}>
        <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% 60%, ${C.dawn}22 0%, transparent 65%)` }} />
        <Logo size={300} ink={C.ink} accent={C.dawn} />
      </div>
    </div>
  </div>
);

const HorizonCard = ({ Logo, variant='cream' }) => {
  const ink = variant==='ink';
  return (
    <div style={{
      width:360, height:228, borderRadius:14,
      background: ink ? `linear-gradient(135deg, ${C.ink} 0%, ${C.dusk} 100%)` : `linear-gradient(135deg, ${C.cream} 0%, ${C.bone} 100%)`,
      color: ink ? C.cream : C.ink,
      padding:'24px 26px', position:'relative', overflow:'hidden', fontFamily:SANS,
      boxShadow:'0 24px 48px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.1)',
      border: ink ? 'none' : `1px solid ${C.hairline}`,
    }}>
      <div style={{ position:'absolute', right:-60, bottom:-60, width:200, height:200, borderRadius:'50%', background:`radial-gradient(circle, ${C.dawn}99 0%, transparent 70%)`, pointerEvents:'none' }} />
      <div style={{ display:'flex', alignItems:'center', gap:10, position:'relative' }}>
        <Logo size={22} ink={ink ? C.cream : C.ink} accent={C.dawn} />
        <span style={{ fontFamily:SERIF, fontSize:22, letterSpacing:'-0.02em' }}>Horizon</span>
      </div>
      <div style={{ position:'absolute', bottom:24, left:26, right:26 }}>
        <div style={{ fontFamily:MONO, fontSize:15, letterSpacing:'0.18em', marginBottom:12 }}>•••• •••• •••• 4271</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', fontSize:11 }}>
          <div>
            <div style={{ opacity:0.55, fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase' }}>Holder</div>
            <div style={{ fontFamily:MONO, marginTop:2 }}>OYINDAMOLA A.</div>
          </div>
          <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:13, opacity:0.75 }}>Visa Business</div>
        </div>
      </div>
    </div>
  );
};

const AppIcon = ({ Logo, size=160 }) => (
  <div style={{
    width:size, height:size, borderRadius:size*0.225,
    background:C.cream, border:`1px solid ${C.hairline}`,
    display:'grid', placeItems:'center',
    boxShadow:`0 ${size*0.08}px ${size*0.16}px rgba(0,0,0,0.12)`,
  }}>
    <Logo size={size*0.55} ink={C.ink} accent={C.dawn} />
  </div>
);

const Apps = () => {
  const [Pick, label] = [LogoA, 'Option A'];
  return (
    <div style={{ width:1200, padding:'72px 80px', background:C.paper, color:C.ink, fontFamily:SANS }}>
      <SectionHeader num="04" label="Applications" title="The system in use." subtitle={`Shown with ${label}. Switch logo via Tweaks if you pick another.`} />

      <div style={{ marginBottom:20 }}>
        <Card label="Web · Hero" num="01" bg={C.cream} height={620} pad={32}>
          <HeroLight Logo={Pick} />
        </Card>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:20 }}>
        <Card label="Card · Ink" num="02.1" bg={C.cream} height={340}>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
            <HorizonCard Logo={Pick} variant="ink" />
          </div>
        </Card>
        <Card label="Card · Cream" num="02.2" bg={C.cream} height={340}>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
            <HorizonCard Logo={Pick} variant="cream" />
          </div>
        </Card>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20 }}>
        <Card label="App Icon" num="03" bg={C.cream} height={300}>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
            <AppIcon Logo={Pick} size={170} />
          </div>
        </Card>
        <Card label="Email Signature" num="04" bg={C.paper} height={300}>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
            <div style={{ background:C.cream, padding:'22px 26px', borderRadius:4, border:`1px solid ${C.hairline}` }}>
              <Lockup Logo={Pick} size={18} color={C.ink} accent={C.dawn} />
              <div style={{ marginTop:14, fontSize:13, lineHeight:1.55 }}>
                <div style={{ fontWeight:500 }}>Adaeze Okonkwo</div>
                <div style={{ opacity:0.6 }}>Founder Success · Horizon</div>
                <div style={{ fontFamily:MONO, fontSize:11, opacity:0.5, marginTop:6 }}>adaeze@horizon.bank</div>
              </div>
            </div>
          </div>
        </Card>
        <Card label="Favicon · 16/32/64" num="05" bg={C.paper} height={300}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:32, height:'100%', paddingTop:20 }}>
            {[16,32,64].map(s => (
              <div key={s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                <Pick size={s} ink={C.ink} accent={C.dawn} />
                <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', opacity:0.5, textTransform:'uppercase' }}>{s}px</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ============================================================
// APP
// ============================================================

const App = () => (
  <DesignCanvas>
    <DCSection id="cover" title="Horizon" subtitle="Brand Identity v2 · Light · Strong logo">
      <DCArtboard id="cover" label="Cover" width={1200} height={1080}>
        <Cover />
      </DCArtboard>
    </DCSection>

    <DCSection id="logos" title="01 · Logo Directions" subtitle="Three options — pick one">
      <DCArtboard id="logos" label="Three logo options" width={1200} height={1640}>
        <LogoDirections />
      </DCArtboard>
    </DCSection>

    <DCSection id="color" title="02 · Color" subtitle="Light by default, single warm accent">
      <DCArtboard id="color" label="Color" width={1200} height={780}>
        <Color />
      </DCArtboard>
    </DCSection>

    <DCSection id="type" title="03 · Typography" subtitle="Instrument Serif × Inter Tight × JetBrains Mono">
      <DCArtboard id="type" label="Typography" width={1200} height={840}>
        <Type />
      </DCArtboard>
    </DCSection>

    <DCSection id="apps" title="04 · Applications" subtitle="Hero, cards, app icon, signature, favicon">
      <DCArtboard id="apps" label="Applications" width={1200} height={1480}>
        <Apps />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
