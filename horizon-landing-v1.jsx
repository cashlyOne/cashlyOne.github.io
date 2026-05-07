// horizon-landing.jsx — Hero-only landing with glass aesthetic

const SERIF = "'Instrument Serif', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const GEIST = "'Geist', 'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const C = {
  ink:'#0a0e14',
  cream:'#faf7f0',
  // Sky-blue brand
  sky:'#5ab8ea',
  skyDeep:'#2f8fd1',
  midnight:'#0e2a4a',
};

// Subtle Dusk gradient — almost imperceptible
const HMARK_GRADIENT = `linear-gradient(160deg, #1a2030 0%, ${C.ink} 100%)`;

const HMark = ({ s=44 }) => (
  <div style={{
    width:s, height:s, borderRadius:s*0.24, background:HMARK_GRADIENT,
    display:'grid', placeItems:'center',
    boxShadow:`inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 24px rgba(10,14,20,0.18)`,
  }}>
    <span style={{ fontFamily:GEIST, fontWeight:700, fontSize:s*0.62, color:C.cream, letterSpacing:'-0.04em', lineHeight:1 }}>H</span>
  </div>
);

const Wordmark = ({ size=20 }) => (
  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
    <HMark s={size*1.6} />
    <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:size, letterSpacing:'-0.03em', color:C.ink }}>Horizon</span>
  </div>
);

// ============ Atmospheric background — sky gradient + clouds ============

const SkyBackground = () => (
  <>
    {/* Base gradient: cream → soft sky → deeper sky at top */}
    <div style={{
      position:'fixed', inset:0, zIndex:-3,
      background:`linear-gradient(180deg, #cbe4f4 0%, #e6f0f6 38%, #f4f1ec 100%)`,
    }} />

    {/* Soft sun glow upper-right */}
    <div style={{
      position:'fixed', top:'-15%', right:'-10%', width:'70vw', height:'70vw',
      maxWidth:900, maxHeight:900, zIndex:-2,
      background:`radial-gradient(circle at 50% 50%, ${C.sky}66 0%, ${C.sky}22 35%, transparent 65%)`,
      filter:'blur(20px)',
    }} />

    {/* Soft warmer underglow */}
    <div style={{
      position:'fixed', bottom:'-20%', left:'-15%', width:'80vw', height:'80vw',
      maxWidth:1100, maxHeight:1100, zIndex:-2,
      background:`radial-gradient(circle at 50% 50%, ${C.skyDeep}22 0%, transparent 60%)`,
      filter:'blur(40px)',
    }} />

    {/* Drifting cloud blobs */}
    <div style={{
      position:'fixed', top:'15%', left:'8%', width:340, height:140, zIndex:-2,
      background:'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%)',
      filter:'blur(30px)',
    }} />
    <div style={{
      position:'fixed', top:'45%', right:'12%', width:420, height:160, zIndex:-2,
      background:'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 65%)',
      filter:'blur(40px)',
    }} />

    {/* Fine grain noise */}
    <div style={{
      position:'fixed', inset:0, zIndex:-1, pointerEvents:'none',
      opacity:0.35, mixBlendMode:'overlay',
      backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
    }} />
  </>
);

// ============ Glass Card ============

const Glass = ({ children, style={} }) => (
  <div style={{
    background:'rgba(255,255,255,0.42)',
    backdropFilter:'blur(40px) saturate(140%)',
    WebkitBackdropFilter:'blur(40px) saturate(140%)',
    border:'1px solid rgba(255,255,255,0.7)',
    borderRadius:32,
    boxShadow:`
      0 1px 0 rgba(255,255,255,0.9) inset,
      0 -1px 0 rgba(255,255,255,0.2) inset,
      0 30px 80px -20px rgba(14,42,74,0.25),
      0 8px 24px -8px rgba(14,42,74,0.12)
    `,
    ...style,
  }}>
    {children}
  </div>
);

// ============ Nav ============

const Nav = () => (
  <nav style={{
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'24px 40px',
    maxWidth:1280, margin:'0 auto',
  }}>
    <Wordmark size={20} />
    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
      <Glass style={{ borderRadius:999, padding:'10px 20px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:28, fontFamily:GEIST, fontSize:13.5, fontWeight:500, color:C.ink }}>
          <a style={{ color:'inherit', textDecoration:'none' }}>Product</a>
          <a style={{ color:'inherit', textDecoration:'none' }}>For founders</a>
          <a style={{ color:'inherit', textDecoration:'none' }}>Pricing</a>
          <a style={{ color:'inherit', textDecoration:'none' }}>Docs</a>
        </div>
      </Glass>
      <button style={{
        background:C.ink, color:C.cream, border:'none',
        padding:'12px 22px', borderRadius:999,
        fontFamily:GEIST, fontSize:13.5, fontWeight:500, letterSpacing:'-0.01em',
        cursor:'pointer',
        boxShadow:'0 8px 20px -6px rgba(10,14,20,0.35)',
      }}>Sign in</button>
    </div>
  </nav>
);

// ============ Hero ============

const Hero = () => (
  <div style={{
    maxWidth:1080, margin:'40px auto 0', padding:'0 40px',
    display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center',
  }}>
    {/* Eyebrow chip */}
    <Glass style={{
      borderRadius:999, padding:'8px 16px 8px 10px', marginBottom:32,
      display:'inline-flex',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <span style={{
          background:C.ink, color:C.cream, padding:'3px 8px', borderRadius:999,
          fontFamily:MONO, fontSize:9.5, letterSpacing:'0.16em', fontWeight:500,
        }}>NEW</span>
        <span style={{ fontFamily:GEIST, fontSize:13, color:C.ink, fontWeight:500 }}>
          A US business account, no US presence required.
        </span>
        <span style={{ color:C.ink, opacity:0.4, fontSize:13 }}>→</span>
      </div>
    </Glass>

    {/* Headline */}
    <h1 style={{
      fontFamily:SERIF, fontWeight:400,
      fontSize:'clamp(52px, 7.6vw, 108px)',
      lineHeight:0.96, letterSpacing:'-0.035em',
      margin:'0 0 28px', color:C.ink,
      textWrap:'balance', maxWidth:1100,
    }}>
      Banking that doesn't<br/>
      <span style={{ fontStyle:'italic', color:C.midnight }}>care where you live.</span>
    </h1>

    {/* Subhead */}
    <p style={{
      fontFamily:GEIST, fontSize:'clamp(17px, 1.3vw, 19px)',
      lineHeight:1.55, color:C.ink, opacity:0.72,
      margin:'0 0 40px', maxWidth:620, fontWeight:400,
      textWrap:'pretty',
    }}>
      A real US business account for international founders. Stablecoin rails underneath,
      ordinary ACH, wire, and cards on top. Open from <strong style={{ color:C.ink, fontWeight:600 }}>190+ countries</strong> in under ten minutes.
    </p>

    {/* CTA + waitlist */}
    <div style={{
      display:'flex', alignItems:'center', gap:16, flexWrap:'wrap', justifyContent:'center',
      marginBottom:24,
    }}>
      <button style={{
        background:C.ink, color:C.cream, border:'none',
        padding:'18px 32px', borderRadius:999,
        fontFamily:GEIST, fontSize:15, fontWeight:500, letterSpacing:'-0.01em',
        cursor:'pointer', display:'inline-flex', alignItems:'center', gap:10,
        boxShadow:`
          0 1px 0 rgba(255,255,255,0.12) inset,
          0 12px 28px -8px rgba(10,14,20,0.45)
        `,
      }}>
        Join the waitlist
        <span style={{
          width:22, height:22, borderRadius:'50%', background:C.sky,
          display:'grid', placeItems:'center', fontSize:11, color:C.ink,
        }}>→</span>
      </button>
      <Glass style={{
        borderRadius:999, padding:'14px 22px',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, fontFamily:GEIST, fontSize:13.5, color:C.ink }}>
          <span style={{ display:'inline-block', width:7, height:7, borderRadius:'50%', background:'#34c66c', boxShadow:`0 0 8px #34c66c` }} />
          <span>Onboarding cohort opens <strong style={{ fontWeight:600 }}>May&nbsp;20</strong></span>
        </div>
      </Glass>
    </div>

    {/* Social proof */}
    <div style={{
      display:'flex', alignItems:'center', gap:16, marginTop:8,
      fontFamily:GEIST, fontSize:13, color:C.ink, opacity:0.6,
    }}>
      {/* Avatar stack */}
      <div style={{ display:'flex' }}>
        {[
          'linear-gradient(135deg, #f4c8a0, #e07a3a)',
          'linear-gradient(135deg, #a8c0f4, #3b6df0)',
          'linear-gradient(135deg, #c8e6c9, #4caf50)',
          'linear-gradient(135deg, #f8bbd0, #c2185b)',
        ].map((bg, i) => (
          <div key={i} style={{
            width:26, height:26, borderRadius:'50%', background:bg,
            border:'2px solid rgba(255,255,255,0.9)',
            marginLeft: i === 0 ? 0 : -8,
            boxShadow:'0 2px 6px rgba(0,0,0,0.08)',
          }} />
        ))}
      </div>
      <span><strong style={{ color:C.ink, fontWeight:600 }}>2,431 founders</strong> on the waitlist</span>
      <span style={{ opacity:0.4 }}>·</span>
      <span>Trusted by alumni from <strong style={{ color:C.ink, fontWeight:600 }}>Stripe Atlas</strong>, <strong style={{ color:C.ink, fontWeight:600 }}>YC</strong>, <strong style={{ color:C.ink, fontWeight:600 }}>Antler</strong></span>
    </div>
  </div>
);

// ============ Floating product preview card (glass, beneath hero) ============

const PreviewCard = () => (
  <div style={{
    maxWidth:1080, margin:'80px auto 80px', padding:'0 40px',
    display:'flex', justifyContent:'center',
  }}>
    <Glass style={{
      width:'100%', maxWidth:880, padding:32,
      display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:32,
    }}>
      {/* Left: account preview */}
      <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:C.ink, opacity:0.55 }}>
            Operating · USD
          </div>
          <div style={{ fontFamily:MONO, fontSize:10.5, color:C.ink, opacity:0.55 }}>
            ••8341
          </div>
        </div>
        <div style={{
          fontFamily:SERIF, fontSize:64, letterSpacing:'-0.03em', lineHeight:1, color:C.ink,
        }}>
          $284,930<span style={{ fontSize:32, opacity:0.45 }}>.18</span>
        </div>

        {/* Tx rows */}
        <div style={{ display:'flex', flexDirection:'column', marginTop:8 }}>
          {[
            { who:'Stripe', desc:'Payout · ACH', amt:'+$12,400.00', when:'today' },
            { who:'AWS', desc:'Card · Compute', amt:'−$1,847.20', when:'today' },
            { who:'Bridge → USDC', desc:'Stablecoin out', amt:'−$50,000.00', when:'yesterday' },
          ].map((tx, i) => (
            <div key={i} style={{
              display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'14px 0',
              borderBottom: i<2 ? '1px solid rgba(14,42,74,0.08)' : 'none',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{
                  width:30, height:30, borderRadius:8,
                  background:'rgba(255,255,255,0.6)',
                  border:'1px solid rgba(255,255,255,0.8)',
                  display:'grid', placeItems:'center',
                  fontFamily:GEIST, fontSize:12, fontWeight:600, color:C.ink,
                }}>{tx.who[0]}</div>
                <div>
                  <div style={{ fontFamily:GEIST, fontSize:13, fontWeight:500, color:C.ink, lineHeight:1.2 }}>{tx.who}</div>
                  <div style={{ fontFamily:GEIST, fontSize:11.5, color:C.ink, opacity:0.5, marginTop:2 }}>{tx.desc} · {tx.when}</div>
                </div>
              </div>
              <div style={{ fontFamily:MONO, fontSize:13, color:C.ink, fontWeight:500 }}>{tx.amt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: capability stack */}
      <div style={{
        background:'rgba(255,255,255,0.45)',
        border:'1px solid rgba(255,255,255,0.7)',
        borderRadius:20, padding:24,
        display:'flex', flexDirection:'column', gap:14,
      }}>
        <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:C.ink, opacity:0.55, marginBottom:4 }}>
          What you get
        </div>
        {[
          ['ACH + Wire', 'Same-day domestic, SWIFT abroad'],
          ['Stablecoin rails', 'USDC in & out at par'],
          ['Cards', 'Virtual + physical, multi-user'],
          ['Multi-currency', '38 currencies, no markup'],
        ].map(([t,d], i) => (
          <div key={i} style={{ display:'flex', flexDirection:'column', gap:2, paddingBottom:i<3?12:0, borderBottom:i<3?'1px solid rgba(14,42,74,0.08)':'none' }}>
            <div style={{ fontFamily:GEIST, fontSize:14, fontWeight:600, color:C.ink, letterSpacing:'-0.015em' }}>{t}</div>
            <div style={{ fontFamily:GEIST, fontSize:12, color:C.ink, opacity:0.6 }}>{d}</div>
          </div>
        ))}
      </div>
    </Glass>
  </div>
);

// ============ Footer ============

const Footer = () => (
  <footer style={{
    maxWidth:1280, margin:'0 auto', padding:'40px 40px 60px',
    display:'flex', alignItems:'center', justifyContent:'space-between',
    fontFamily:GEIST, fontSize:12, color:C.ink, opacity:0.55,
  }}>
    <div>© 2026 Horizon Banking, Inc. · Banking services provided by partner banks, members FDIC.</div>
    <div style={{ display:'flex', gap:24 }}>
      <a style={{ color:'inherit', textDecoration:'none' }}>Privacy</a>
      <a style={{ color:'inherit', textDecoration:'none' }}>Terms</a>
      <a style={{ color:'inherit', textDecoration:'none' }}>Disclosures</a>
    </div>
  </footer>
);

// ============ App ============

const App = () => (
  <div style={{ minHeight:'100vh', position:'relative', overflow:'hidden' }}>
    <SkyBackground />
    <Nav />
    <main style={{ paddingTop:60 }}>
      <Hero />
      <PreviewCard />
    </main>
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
