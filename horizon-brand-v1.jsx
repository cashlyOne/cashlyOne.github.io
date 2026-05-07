// horizon-brand.jsx — Horizon Brand Identity System

const SERIF = "'Instrument Serif', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

// ---------- Color tokens ----------
const C = {
  ink:    '#0a0e14',  // primary dark — night sky before dawn
  cream:  '#f4efe6',  // primary light — first light
  bone:   '#e8e1d2',  // secondary surface
  dawn:   '#e89a5c',  // accent — horizon glow
  dusk:   '#3a4a6b',  // secondary — deep horizon
  mist:   '#9ca5b0',  // muted
  paper:  '#fafaf7',
  gold:   '#c9a866',
};

// ---------- Logo: Horizon mark — sun rising over a line ----------

const HorizonMark = ({ size=80, color='currentColor', accent }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} style={{display:'block'}}>
    <line x1="6" y1="50" x2="74" y2="50" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M 22 50 A 18 18 0 0 1 58 50" fill={accent || color} />
  </svg>
);

const HorizonMarkLine = ({ size=80, color='currentColor' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} style={{display:'block'}}>
    <line x1="6" y1="52" x2="74" y2="52" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="40" cy="52" r="14" fill="none" stroke={color} strokeWidth="1.6" />
    <line x1="26" y1="52" x2="54" y2="52" stroke={color} strokeWidth="1.6" />
  </svg>
);

const HorizonWordmark = ({ size=64, color='currentColor', italic=false }) => (
  <span style={{
    fontFamily: SERIF,
    fontStyle: italic ? 'italic' : 'normal',
    fontSize: size,
    lineHeight: 1,
    letterSpacing: '-0.025em',
    color,
    fontWeight: 400,
  }}>Horizon</span>
);

const HorizonLockup = ({ size=48, color='currentColor', accent, stack=false }) => (
  <div style={{
    display:'flex', flexDirection: stack ? 'column' : 'row',
    alignItems:'center', gap: stack ? 16 : size*0.35, color,
  }}>
    <HorizonMark size={size*1.15} color={color} accent={accent} />
    <HorizonWordmark size={size*1.4} color={color} />
  </div>
);

// ---------- Card frame ----------
const Frame = ({ bg=C.cream, fg=C.ink, label, num, children, gridSpan=1, height=480 }) => (
  <div style={{
    gridColumn: `span ${gridSpan}`,
    background: bg, color: fg,
    borderRadius: 4, padding:'40px 44px',
    fontFamily: SANS, position:'relative', overflow:'hidden',
    minHeight: height,
  }}>
    <div style={{
      display:'flex', justifyContent:'space-between', alignItems:'center',
      fontFamily: MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase',
      opacity:0.55, marginBottom:32,
    }}>
      <span>{label}</span>
      <span>{num}</span>
    </div>
    {children}
  </div>
);

// ============== SECTION 1: COVER ==============

const Cover = () => (
  <div style={{
    width: 1200, padding:'80px 80px 64px',
    background: C.ink, color: C.cream,
    fontFamily: SANS, position:'relative', overflow:'hidden',
  }}>
    {/* soft horizon gradient bg */}
    <div style={{
      position:'absolute', inset:0,
      background:`radial-gradient(ellipse at 50% 95%, ${C.dawn}55 0%, ${C.dusk}33 35%, ${C.ink} 70%)`,
      pointerEvents:'none',
    }} />
    <div style={{ position:'relative' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:120 }}>
        <div style={{ fontFamily: MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.5 }}>
          Brand Identity · v1
        </div>
        <div style={{ fontFamily: MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.5 }}>
          May 2026
        </div>
      </div>

      <div style={{ display:'flex', justifyContent:'center', marginBottom:80 }}>
        <HorizonMark size={140} color={C.cream} accent={C.dawn} />
      </div>

      <h1 style={{
        fontFamily: SERIF, fontSize: 180, lineHeight:0.95, letterSpacing:'-0.035em',
        margin:'0 0 48px', fontWeight:400, textAlign:'center',
      }}>Horizon</h1>

      <div style={{
        textAlign:'center',
        fontFamily: SERIF, fontStyle:'italic', fontSize:32, lineHeight:1.2,
        color: C.cream, opacity:0.85, maxWidth: 720, margin:'0 auto',
      }}>
        Banking for founders the old system left behind.
      </div>

      <div style={{
        marginTop:80, paddingTop:32,
        borderTop:`1px solid ${C.cream}22`,
        display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:32,
        fontSize:13, lineHeight:1.5,
      }}>
        {[
          ['Tone', 'Institutional · Global · Warm'],
          ['Crypto', 'Invisible — feels like a bank'],
          ['Wedge', 'Atlas founders, 17 locked-out countries'],
          ['Promise', 'A fixed point. Wherever you are.'],
        ].map(([k,v]) => (
          <div key={k}>
            <div style={{ fontFamily:MONO, fontSize:9.5, letterSpacing:'0.22em', textTransform:'uppercase', opacity:0.5, marginBottom:8 }}>{k}</div>
            <div style={{ color: C.cream }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============== SECTION 2: LOGO SYSTEM ==============

const LogoSystem = () => (
  <div style={{
    width: 1200, padding:'56px 64px',
    background: C.cream, color: C.ink,
    fontFamily: SANS,
  }}>
    <SectionHeader num="01" label="Logo System" title="The mark, the wordmark, the lockup." />

    <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 }}>
      <Frame label="Symbol · Primary" num="01.1" bg={C.paper} height={340}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:200 }}>
          <HorizonMark size={140} color={C.ink} accent={C.dawn} />
        </div>
        <div style={{ fontSize:13, color:C.ink+'aa', lineHeight:1.5 }}>
          A sun rising over a horizon line. Simple, geometric, readable at any size.
        </div>
      </Frame>

      <Frame label="Symbol · Outline" num="01.2" bg={C.paper} height={340}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:200 }}>
          <HorizonMarkLine size={140} color={C.ink} />
        </div>
        <div style={{ fontSize:13, color:C.ink+'aa', lineHeight:1.5 }}>
          Linear variant for embossing, foil stamps, single-color print.
        </div>
      </Frame>

      <Frame label="Symbol · Inverse" num="01.3" bg={C.ink} fg={C.cream} height={340}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:200 }}>
          <HorizonMark size={140} color={C.cream} accent={C.dawn} />
        </div>
        <div style={{ fontSize:13, color:C.cream+'aa', lineHeight:1.5 }}>
          Default treatment on dark surfaces — card, app, footer.
        </div>
      </Frame>
    </div>

    <div style={{ marginTop:16, display:'grid', gridTemplateColumns:'2fr 1fr', gap:16 }}>
      <Frame label="Wordmark" num="02" bg={C.paper} height={280}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:160 }}>
          <HorizonWordmark size={120} color={C.ink} />
        </div>
        <div style={{ fontSize:13, color:C.ink+'aa' }}>
          Instrument Serif, regular. Letterspaced -0.025em. The "z" is the heartbeat.
        </div>
      </Frame>

      <Frame label="Wordmark · Italic" num="02.1" bg={C.paper} height={280}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:160 }}>
          <HorizonWordmark size={84} color={C.ink} italic />
        </div>
        <div style={{ fontSize:13, color:C.ink+'aa' }}>
          For pull quotes, taglines, product moments.
        </div>
      </Frame>
    </div>

    <div style={{ marginTop:16, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
      <Frame label="Horizontal Lockup" num="03" bg={C.paper} height={240}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:140 }}>
          <HorizonLockup size={42} color={C.ink} accent={C.dawn} />
        </div>
        <div style={{ fontSize:13, color:C.ink+'aa' }}>
          Default for nav, headers, email signatures.
        </div>
      </Frame>

      <Frame label="Stacked Lockup" num="03.1" bg={C.paper} height={240}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:140 }}>
          <HorizonLockup size={36} color={C.ink} accent={C.dawn} stack />
        </div>
        <div style={{ fontSize:13, color:C.ink+'aa' }}>
          For square applications: app icon, social avatars.
        </div>
      </Frame>
    </div>

    {/* Construction grid */}
    <div style={{ marginTop:16 }}>
      <Frame label="Construction" num="04" bg={C.paper} height={300}>
        <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:48, alignItems:'center' }}>
          <svg viewBox="0 0 200 200" width="200" height="200">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke={C.ink} strokeWidth="0.4" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#grid)"/>
            <line x1="20" y1="125" x2="180" y2="125" stroke={C.dusk} strokeWidth="2" strokeLinecap="round" />
            <path d="M 60 125 A 40 40 0 0 1 140 125" fill={C.dawn} />
            <line x1="100" y1="20" x2="100" y2="180" stroke={C.ink} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5" />
            <line x1="20" y1="100" x2="180" y2="100" stroke={C.ink} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.3" />
            <text x="142" y="129" fontFamily={MONO} fontSize="8" fill={C.ink} opacity="0.5">2x</text>
            <text x="62" y="119" fontFamily={MONO} fontSize="8" fill={C.ink} opacity="0.5">r</text>
          </svg>
          <div style={{ display:'grid', gap:16 }}>
            <div>
              <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.5, marginBottom:6 }}>Geometry</div>
              <div style={{ fontSize:14, lineHeight:1.6 }}>
                Half-circle (sun) sits on horizontal line (horizon). Sun radius = 1 unit. Line width = 4 units. Line stroke = 1/14 unit. The sun is always tangent to the line — never floating, never sinking.
              </div>
            </div>
            <div>
              <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.5, marginBottom:6 }}>Clearspace</div>
              <div style={{ fontSize:14, lineHeight:1.6 }}>
                Minimum padding around the mark = sun radius. Always. No exceptions for "tight headers."
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  </div>
);

const SectionHeader = ({ num, label, title }) => (
  <div style={{ marginBottom:32, display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:32 }}>
    <div>
      <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.45, marginBottom:8 }}>
        {num} · {label}
      </div>
      <h2 style={{ fontFamily: SERIF, fontSize:48, lineHeight:1, letterSpacing:'-0.02em', margin:0, fontWeight:400 }}>
        {title}
      </h2>
    </div>
  </div>
);

// ============== SECTION 3: COLOR ==============

const Color = () => {
  const swatches = [
    { name:'Ink',    hex:C.ink,    role:'Primary surface · text on cream', light:false },
    { name:'Cream',  hex:C.cream,  role:'Primary surface · text on ink',   light:true },
    { name:'Dawn',   hex:C.dawn,   role:'Accent · the sun · CTAs, highlights', light:true },
    { name:'Dusk',   hex:C.dusk,   role:'Secondary · supporting depth', light:false },
    { name:'Bone',   hex:C.bone,   role:'Surface · cards on cream', light:true },
    { name:'Gold',   hex:C.gold,   role:'Premium accent · card metal', light:true },
    { name:'Mist',   hex:C.mist,   role:'Muted text, dividers', light:true },
    { name:'Paper',  hex:C.paper,  role:'Off-white · backgrounds', light:true },
  ];
  return (
    <div style={{ width: 1200, padding:'56px 64px', background: C.cream, color: C.ink, fontFamily: SANS }}>
      <SectionHeader num="02" label="Color" title="Eight tones. One palette." />

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16, marginBottom:24 }}>
        {swatches.map(s => (
          <div key={s.name} style={{
            background: s.hex, color: s.light ? C.ink : C.cream,
            padding:'24px 24px 28px', borderRadius:4, minHeight:200,
            display:'flex', flexDirection:'column', justifyContent:'space-between',
            border: s.name==='Cream' || s.name==='Paper' ? `1px solid ${C.ink}11` : 'none',
          }}>
            <div style={{ fontFamily: SERIF, fontSize:32, letterSpacing:'-0.02em' }}>{s.name}</div>
            <div>
              <div style={{ fontFamily: MONO, fontSize:11, letterSpacing:'0.05em', marginBottom:6 }}>
                {s.hex.toUpperCase()}
              </div>
              <div style={{ fontSize:11, lineHeight:1.4, opacity:0.75 }}>{s.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background:`linear-gradient(180deg, ${C.ink} 0%, ${C.dusk} 50%, ${C.dawn} 88%, ${C.cream} 100%)`,
        height: 220, borderRadius:4, padding:'24px 32px',
        display:'flex', flexDirection:'column', justifyContent:'space-between',
        color: C.cream,
      }}>
        <div style={{ fontFamily: MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', opacity:0.7 }}>
          The Horizon Gradient
        </div>
        <div style={{ fontFamily: SERIF, fontStyle:'italic', fontSize:24, color: C.ink, alignSelf:'flex-end' }}>
          Night → Dusk → Dawn → First light
        </div>
      </div>
    </div>
  );
};

// ============== SECTION 4: TYPOGRAPHY ==============

const Typography = () => (
  <div style={{ width: 1200, padding:'56px 64px', background: C.cream, color: C.ink, fontFamily: SANS }}>
    <SectionHeader num="03" label="Typography" title="A serif that breathes. A sans that works." />

    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
      <Frame label="Display · Instrument Serif" num="01" bg={C.paper} height={420}>
        <div style={{ fontFamily: SERIF, fontSize:120, lineHeight:0.95, letterSpacing:'-0.03em', marginBottom:8 }}>Aa</div>
        <div style={{ fontFamily: SERIF, fontSize:18, color: C.ink+'aa', marginBottom:24 }}>
          Regular · Italic
        </div>
        <div style={{ fontFamily: SERIF, fontSize:32, lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:8 }}>
          For headlines, hero copy, and quiet moments.
        </div>
        <div style={{ fontFamily: SERIF, fontStyle:'italic', fontSize:20, color: C.ink+'aa', lineHeight:1.4 }}>
          The italic carries the warmth — used for taglines, pull quotes, product moments.
        </div>
      </Frame>

      <Frame label="Text · Inter Tight" num="02" bg={C.paper} height={420}>
        <div style={{ fontFamily: SANS, fontWeight:600, fontSize:120, lineHeight:0.95, letterSpacing:'-0.04em', marginBottom:8 }}>Aa</div>
        <div style={{ fontFamily: SANS, fontSize:14, color: C.ink+'aa', marginBottom:24 }}>
          300 · 400 · 500 · 600 · 700
        </div>
        <div style={{ fontFamily: SANS, fontWeight:500, fontSize:20, lineHeight:1.4, marginBottom:8 }}>
          For UI, body, navigation, and product surfaces.
        </div>
        <div style={{ fontFamily: SANS, fontWeight:400, fontSize:14, color: C.ink+'aa', lineHeight:1.55 }}>
          Inter Tight is the workhorse — slightly condensed, optimized for screen, set at sizes from 11px to 64px without losing rhythm. Numbers tabular by default for transactions, balances, FX rates.
        </div>
      </Frame>
    </div>

    <div style={{ marginTop:16 }}>
      <Frame label="Mono · JetBrains Mono" num="03" bg={C.paper} height={200}>
        <div style={{ fontFamily: MONO, fontSize:14, lineHeight:1.7 }}>
          USD · 12,847.92 — settled 2.3s ago<br/>
          ACH 0001 · ROUTING 091000019 · LAGOS → SAN FRANCISCO<br/>
          REF #HZN-94B2-X7 · ENCRYPTED · 2026-05-06 22:18:06 UTC
        </div>
      </Frame>
    </div>

    <div style={{ marginTop:16, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 }}>
      {[
        ['H1 · Display', 64, SERIF, 400, '-0.025em', 'normal', 'A fixed point.'],
        ['H2 · Section', 36, SERIF, 400, '-0.02em', 'italic', 'Wherever you are.'],
        ['Body · Lead',  18, SANS,  400, '-0.005em', 'normal', 'Built for founders the old system left behind. ACH, wire, card, Stripe — all working, even when others say no.'],
      ].map(([label, size, fam, weight, ls, fs, sample]) => (
        <Frame key={label} label={label} num="" bg={C.paper} height={220}>
          <div style={{ fontFamily: fam, fontSize: size, lineHeight: size>40?0.95:1.4, letterSpacing: ls, fontWeight: weight, fontStyle: fs }}>
            {sample}
          </div>
          <div style={{ marginTop: 'auto', fontFamily: MONO, fontSize:10, letterSpacing:'0.1em', opacity:0.5, paddingTop:16 }}>
            {fam.split(',')[0].replace(/'/g,'')} · {size}px · {weight} · {fs}
          </div>
        </Frame>
      ))}
    </div>
  </div>
);

// ============== SECTION 5: VOICE ==============

const Voice = () => (
  <div style={{ width: 1200, padding:'56px 64px', background: C.ink, color: C.cream, fontFamily: SANS }}>
    <div style={{ marginBottom:32, display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
      <div>
        <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.45, marginBottom:8 }}>
          04 · Voice
        </div>
        <h2 style={{ fontFamily: SERIF, fontSize:48, lineHeight:1, letterSpacing:'-0.02em', margin:0, fontWeight:400, color:C.cream }}>
          Speak plainly. Mean it.
        </h2>
      </div>
    </div>

    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
      <div style={{ background:'#14181f', padding:'40px 44px', borderRadius:4, color: C.cream }}>
        <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color: C.dawn, marginBottom:16 }}>We say</div>
        <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:18, fontFamily:SERIF, fontSize:22, lineHeight:1.35, letterSpacing:'-0.01em' }}>
          <li>"Your money is here. Always."</li>
          <li>"Open an account in 7 minutes."</li>
          <li>"We don't close countries."</li>
          <li>"Built for founders who got the email."</li>
        </ul>
      </div>
      <div style={{ background:'#14181f', padding:'40px 44px', borderRadius:4, color:C.cream }}>
        <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color: C.mist, marginBottom:16 }}>We don't say</div>
        <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:18, fontFamily:SERIF, fontSize:22, lineHeight:1.35, letterSpacing:'-0.01em', opacity:0.5, textDecoration:'line-through', textDecorationColor:C.dawn+'88' }}>
          <li>"Revolutionizing the future of finance"</li>
          <li>"Web3-native banking solutions"</li>
          <li>"Crypto rails, stablecoin-powered"</li>
          <li>"Disrupting traditional banking"</li>
        </ul>
      </div>
    </div>

    <div style={{
      background:`linear-gradient(135deg, ${C.dusk} 0%, ${C.ink} 70%)`,
      borderRadius:4, padding:'48px 56px',
      display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:32,
    }}>
      {[
        ['Calm', 'No exclamation points. No urgency theater. The system stays steady so you can.'],
        ['Specific', 'We name the problem. "60-day closure notice." "Stripe payout rejected." "Wire to Lagos."'],
        ['Warm', 'We are on your side. We say "we" and "you" — not "users" or "customers."'],
      ].map(([k,v]) => (
        <div key={k}>
          <div style={{ fontFamily: SERIF, fontStyle:'italic', fontSize:32, lineHeight:1, marginBottom:16, color:C.dawn }}>{k}.</div>
          <div style={{ fontSize:14, lineHeight:1.55, color:C.cream+'cc' }}>{v}</div>
        </div>
      ))}
    </div>
  </div>
);

// ============== SECTION 6: APPLICATIONS ==============

// — Card mockup
const HorizonCard = ({ variant='ink' }) => {
  const palette = variant === 'ink'
    ? { bg:`linear-gradient(135deg, ${C.ink} 0%, ${C.dusk} 100%)`, fg:C.cream, accent:C.dawn }
    : { bg:`linear-gradient(135deg, ${C.cream} 0%, ${C.bone} 100%)`, fg:C.ink, accent:C.dawn };
  return (
    <div style={{
      width: 360, height: 228, borderRadius: 14,
      background: palette.bg, color: palette.fg,
      padding: '24px 26px', position:'relative', overflow:'hidden',
      fontFamily: SANS,
      boxShadow:'0 24px 48px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)',
    }}>
      {/* sun glow */}
      <div style={{
        position:'absolute', right:-60, bottom:-60, width:200, height:200, borderRadius:'50%',
        background: `radial-gradient(circle, ${palette.accent}aa 0%, transparent 70%)`,
        pointerEvents:'none',
      }} />
      <div style={{ display:'flex', alignItems:'center', gap:10, position:'relative' }}>
        <HorizonMark size={22} color={palette.fg} accent={palette.accent} />
        <span style={{ fontFamily:SERIF, fontSize:22, letterSpacing:'-0.02em' }}>Horizon</span>
      </div>
      <div style={{ position:'absolute', bottom:24, left:26, right:26 }}>
        <div style={{ fontFamily: MONO, fontSize:15, letterSpacing:'0.18em', marginBottom:12 }}>
          •••• •••• •••• 4271
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', fontSize:11 }}>
          <div>
            <div style={{ opacity:0.55, fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase' }}>Holder</div>
            <div style={{ fontFamily: MONO, marginTop:2 }}>OYINDAMOLA A.</div>
          </div>
          <div style={{ fontFamily:SERIF, fontStyle:'italic', fontSize:13, opacity:0.75 }}>
            Visa Business
          </div>
        </div>
      </div>
    </div>
  );
};

// — App icon
const AppIcon = ({ size=160 }) => (
  <div style={{
    width:size, height:size, borderRadius: size*0.225,
    background:`linear-gradient(180deg, ${C.ink} 0%, ${C.dusk} 60%, ${C.dawn} 100%)`,
    display:'flex', alignItems:'flex-end', justifyContent:'center',
    overflow:'hidden', position:'relative',
    boxShadow:`0 ${size*0.1}px ${size*0.2}px rgba(0,0,0,0.25)`,
  }}>
    <div style={{ position:'absolute', bottom:'30%', display:'flex', flexDirection:'column', alignItems:'center' }}>
      <div style={{ width: size*0.5, height: size*0.25, borderRadius: `${size*0.5}px ${size*0.5}px 0 0`, background: C.cream }} />
      <div style={{ width: size*0.7, height: 2, background: C.cream, marginTop: 0 }} />
    </div>
  </div>
);

// — Hero / Web header
const HeroMockup = () => (
  <div style={{
    background: C.ink, color: C.cream, borderRadius: 6,
    padding: '24px 32px 0', position:'relative', overflow:'hidden',
    minHeight: 480,
  }}>
    {/* nav */}
    <div style={{
      display:'flex', justifyContent:'space-between', alignItems:'center',
      paddingBottom:48, borderBottom:`1px solid ${C.cream}11`,
    }}>
      <HorizonLockup size={20} color={C.cream} accent={C.dawn} />
      <div style={{ display:'flex', gap:32, fontSize:13, fontWeight:400, color:C.cream+'aa' }}>
        <span>Accounts</span><span>Payments</span><span>Cards</span><span>Stripe</span><span>Pricing</span>
      </div>
      <div style={{
        fontFamily:MONO, fontSize:11, padding:'8px 16px',
        background:C.dawn, color:C.ink, borderRadius:3, letterSpacing:'0.04em',
      }}>Open account →</div>
    </div>

    {/* hero copy */}
    <div style={{ paddingTop:80, paddingBottom:48, display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:48, alignItems:'center' }}>
      <div>
        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          fontFamily:MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase',
          color:C.dawn, marginBottom:24,
        }}>
          <span style={{ width:6, height:6, borderRadius:3, background:C.dawn }} />
          For founders the old system left behind
        </div>
        <h1 style={{
          fontFamily:SERIF, fontSize:88, lineHeight:0.98, letterSpacing:'-0.03em',
          margin:'0 0 24px', fontWeight:400,
        }}>
          A fixed point.<br/>
          <em style={{ fontStyle:'italic', color:C.dawn }}>Wherever you are.</em>
        </h1>
        <div style={{ fontSize:18, lineHeight:1.5, color:C.cream+'cc', maxWidth:520, marginBottom:32 }}>
          Business banking for founders with a US LLC. ACH, wire, card, Stripe — all working, in 150+ countries. Stablecoin under the hood. You'd never know.
        </div>
        <div style={{ display:'flex', gap:12 }}>
          <div style={{ background:C.dawn, color:C.ink, padding:'14px 22px', borderRadius:3, fontWeight:500, fontSize:14 }}>Open account in 7 min</div>
          <div style={{ border:`1px solid ${C.cream}33`, padding:'14px 22px', borderRadius:3, fontWeight:400, fontSize:14, color:C.cream }}>Talk to a founder</div>
        </div>
      </div>
      <div style={{ display:'flex', justifyContent:'center', position:'relative' }}>
        {/* large mark */}
        <div style={{
          position:'absolute', inset:0,
          background:`radial-gradient(ellipse at 50% 80%, ${C.dawn}55 0%, transparent 60%)`,
        }} />
        <div style={{ position:'relative' }}>
          <HorizonMark size={280} color={C.cream} accent={C.dawn} />
        </div>
      </div>
    </div>
  </div>
);

// — Email signature
const EmailSig = () => (
  <div style={{ background: C.paper, padding:'24px 28px', borderRadius:4, fontFamily:SANS, color:C.ink }}>
    <HorizonLockup size={18} color={C.ink} accent={C.dawn} />
    <div style={{ marginTop:16, fontSize:13, lineHeight:1.55 }}>
      <div style={{ fontWeight:500 }}>Adaeze Okonkwo</div>
      <div style={{ color:C.ink+'99' }}>Founder Success · Horizon</div>
      <div style={{ fontFamily:MONO, fontSize:11, color:C.ink+'77', marginTop:8 }}>
        adaeze@horizon.bank · horizon.bank
      </div>
    </div>
  </div>
);

// — Stripe footer
const StripeFooter = () => (
  <div style={{
    background: C.paper, padding:'14px 22px', borderRadius:4,
    display:'flex', justifyContent:'space-between', alignItems:'center',
    fontFamily:SANS, fontSize:11, color:C.ink+'88',
  }}>
    <span>Powered by</span>
    <HorizonLockup size={14} color={C.ink} accent={C.dawn} />
    <span style={{ fontFamily:MONO }}>USD · ACH · Wire</span>
  </div>
);

const Applications = () => (
  <div style={{ width: 1200, padding:'56px 64px', background: C.cream, color: C.ink, fontFamily: SANS }}>
    <SectionHeader num="05" label="Applications" title="The system, in the world." />

    {/* Web hero — full row */}
    <div style={{ marginBottom:16 }}>
      <Frame label="Web · Hero" num="01" bg={C.paper} height={580}>
        <HeroMockup />
      </Frame>
    </div>

    {/* Cards row */}
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
      <Frame label="Card · Ink" num="02.1" bg={C.bone} height={340}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
          <HorizonCard variant="ink" />
        </div>
      </Frame>
      <Frame label="Card · Cream" num="02.2" bg={C.bone} height={340}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
          <HorizonCard variant="cream" />
        </div>
      </Frame>
    </div>

    {/* App + Email + Stripe */}
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:16 }}>
      <Frame label="App Icon" num="03" bg={C.paper} height={340}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
          <AppIcon size={180} />
        </div>
      </Frame>
      <Frame label="Email Signature" num="04" bg={C.bone} height={340}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
          <EmailSig />
        </div>
      </Frame>
      <Frame label="Stripe Footer" num="05" bg={C.bone} height={340}>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:20 }}>
          <div style={{ width:'100%' }}>
            <StripeFooter />
            <div style={{ marginTop:14, fontFamily:MONO, fontSize:10, color:C.ink+'77', lineHeight:1.6 }}>
              Appears on Stripe Dashboard, payouts settled to Horizon accounts. Quiet co-sign.
            </div>
          </div>
        </div>
      </Frame>
    </div>
  </div>
);

// ============== APP ==============

const App = () => (
  <DesignCanvas>
    <DCSection id="cover" title="Horizon" subtitle="Brand Identity · Cover">
      <DCArtboard id="cover" label="Cover" width={1200} height={1080}>
        <Cover />
      </DCArtboard>
    </DCSection>

    <DCSection id="logo" title="01 · Logo System" subtitle="Mark, wordmark, lockup, construction">
      <DCArtboard id="logo" label="Logo System" width={1200} height={1480}>
        <LogoSystem />
      </DCArtboard>
    </DCSection>

    <DCSection id="color" title="02 · Color" subtitle="Palette, hex values, the Horizon gradient">
      <DCArtboard id="color" label="Color" width={1200} height={840}>
        <Color />
      </DCArtboard>
    </DCSection>

    <DCSection id="type" title="03 · Typography" subtitle="Instrument Serif × Inter Tight × JetBrains Mono">
      <DCArtboard id="type" label="Typography" width={1200} height={1080}>
        <Typography />
      </DCArtboard>
    </DCSection>

    <DCSection id="voice" title="04 · Voice" subtitle="What we say. What we don't.">
      <DCArtboard id="voice" label="Voice" width={1200} height={680}>
        <Voice />
      </DCArtboard>
    </DCSection>

    <DCSection id="apps" title="05 · Applications" subtitle="Web hero, cards, app icon, email, Stripe">
      <DCArtboard id="apps" label="Applications" width={1200} height={1480}>
        <Applications />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
