// horizon-landing.jsx — v2: Origin-style sky/cloud photographic background, calm hero

// HERO_ONLY_BG: when true, the photographic / video background is constrained
// to the hero viewport and fades into a white page background below.
// Set to false to restore the original full-page fixed video background.
const HERO_ONLY_BG = false;
const PAGE_BELOW_HERO_BG = '#ffffff';

// Supabase — waitlist insert via REST API
const SUPABASE_URL = 'https://gesfhljjlaeesbxbpvrl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_d_PkM0Z2v39rHw_N5eDwrA_JMVTsAv-';
const WAITLIST_TABLE = 'waitlist';

const SERIF = "'Instrument Serif', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const GEIST = "'Geist', 'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const C = {
  ink:'#0a0e14',
  cream:'#faf7f0',
  sky:'#5ab8ea',
  midnight:'#0e2a4a',
};

const HMARK_GRADIENT = `linear-gradient(160deg, #1a2030 0%, ${C.ink} 100%)`;

const HMark = ({ s=44 }) => (
  <div style={{
    width:s, height:s, borderRadius:s*0.24, background:HMARK_GRADIENT,
    display:'grid', placeItems:'center',
    boxShadow:`inset 0 1px 0 rgba(255,255,255,0.08), 0 6px 18px rgba(10,14,20,0.18)`,
  }}>
    <span style={{ fontFamily:GEIST, fontWeight:700, fontSize:s*0.62, color:C.cream, letterSpacing:'-0.04em', lineHeight:1 }}>H</span>
  </div>
);

// ============ Video background loader — uses blob URL to bypass range issue ============

const useVideoBlobUrl = (src) => {
  const [url, setUrl] = React.useState(null);
  React.useEffect(() => {
    let revoked = false;
    let blobUrl = null;
    fetch(src).then(r => r.blob()).then(blob => {
      if (revoked) return;
      blobUrl = URL.createObjectURL(blob);
      setUrl(blobUrl);
    }).catch(() => {});
    return () => { revoked = true; if (blobUrl) URL.revokeObjectURL(blobUrl); };
  }, [src]);
  return url;
};

// ============ Photographic sunrise-horizon background ============
// Real layered-mountain sunrise photo with soft top wash for text legibility.

const SkyBackground = () => {
  const videoUrl = useVideoBlobUrl('horizon-bg.mp4');
  const videoRef = React.useRef(null);
  const [videoReady, setVideoReady] = React.useState(false);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v || !videoUrl) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    const onCanPlay = () => { tryPlay(); setVideoReady(true); };
    v.addEventListener('canplay', onCanPlay);
    return () => v.removeEventListener('canplay', onCanPlay);
  }, [videoUrl]);
  // Hero-only BG: container is slightly taller than the viewport and the fade
  // lives in the extra region below 100vh — so at scrollY:0 the fade is offscreen
  // and only becomes visible once the user starts scrolling down.
  const HERO_FADE_PX = 140;
  const containerStyle = HERO_ONLY_BG ? {
    position:'absolute', top:0, left:0, right:0,
    height:`calc(100vh + ${HERO_FADE_PX}px)`,
    zIndex:0, overflow:'hidden', pointerEvents:'none',
    WebkitMaskImage:`linear-gradient(to bottom, #000 0, #000 100vh, rgba(0,0,0,0) calc(100vh + ${HERO_FADE_PX}px))`,
    maskImage:`linear-gradient(to bottom, #000 0, #000 100vh, rgba(0,0,0,0) calc(100vh + ${HERO_FADE_PX}px))`,
  } : {
    position:'fixed', inset:0, zIndex:-1, overflow:'hidden', pointerEvents:'none',
  };
  return (
  <div aria-hidden="true" style={containerStyle}>
    {/* Static frame — instant fallback layer, fades out once video is ready */}
    <img
      src="horizon-frame-filtered.png"
      alt=""
      style={{
        position:'absolute', inset:0, width:'100%', height:'100%',
        objectFit:'cover', objectPosition:'center 38%',
        opacity: videoReady ? 0 : 1,
        transition: 'opacity 600ms ease',
      }}
    />

    {/* Background video — fades in once it can play; html background shows through until then */}
    {videoUrl && (
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay muted loop playsInline preload="auto"
        style={{
          position:'absolute', inset:0, width:'100%', height:'100%',
          objectFit:'cover', objectPosition:'center 38%',
          filter:'saturate(0.7) brightness(1.06) contrast(0.96) hue-rotate(-4deg)',
          opacity: videoReady ? 1 : 0,
          transition: 'opacity 600ms ease',
        }}
      />
    )}

    {/* Soft sky-blue color blend — pulls the upper sky toward baby blue but
        leaves the rest of the frame at its natural temperature */}
    <div style={{
      position:'absolute', inset:0,
      background:`linear-gradient(180deg,
        rgba(150, 200, 230, 0.30) 0%,
        rgba(180, 215, 235, 0.18) 35%,
        rgba(220, 222, 220, 0.06) 65%,
        transparent 90%)`,
      mixBlendMode:'color',
      pointerEvents:'none',
    }} />

    {/* Top baby-blue wash — keeps the nav legible */}
    <div style={{
      position:'absolute', inset:0,
      background:`linear-gradient(180deg,
        rgba(190, 224, 240, 0.45) 0%,
        rgba(215, 232, 245, 0.22) 30%,
        transparent 55%)`,
      pointerEvents:'none',
    }} />

    {/* Top atmospheric wash — fades the upper sky to a softer warm cream so the
        nav + headline read clearly without hiding the photo */}
    <div style={{
      position:'absolute', inset:0,
      background:`
        linear-gradient(180deg, rgba(250, 244, 230, 0.55) 0%, rgba(250, 244, 230, 0.18) 32%, transparent 55%),
        radial-gradient(ellipse at 50% 18%, rgba(255, 248, 232, 0.45) 0%, transparent 55%)
      `,
      pointerEvents:'none',
    }} />

    {/* Subtle bottom warm vignette for footer/CTA area */}
    <div style={{
      position:'absolute', bottom:0, left:0, right:0, height:'30vh',
      background:'linear-gradient(180deg, transparent 0%, rgba(60, 30, 50, 0.18) 100%)',
      pointerEvents:'none',
    }} />

    {/* Fine grain — keeps it from looking like a flat stock image */}
    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      opacity:0.18, mixBlendMode:'overlay',
      backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
    }} />
  </div>
  );
};

// ============ Glass primitive ============

const Glass = ({ children, style={} }) => (
  <div style={{
    background:'rgba(255,255,255,0.32)',
    backdropFilter:'blur(28px) saturate(150%)',
    WebkitBackdropFilter:'blur(28px) saturate(150%)',
    border:'1px solid rgba(255,255,255,0.55)',
    borderRadius:24,
    boxShadow:`
      0 1px 0 rgba(255,255,255,0.8) inset,
      0 -1px 0 rgba(255,255,255,0.18) inset,
      0 20px 60px -16px rgba(14, 42, 74, 0.18)
    `,
    ...style,
  }}>
    {children}
  </div>
);

// ============ Nav ============

// ============ Route context ============

const RouteCtx = React.createContext({ route:'home', go:()=>{} });

const NavLink = ({ to, children }) => {
  const { go } = React.useContext(RouteCtx);
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        if (window.__closeWaitlist) window.__closeWaitlist();
        go(to);
      }}
      style={{
        color:'inherit', textDecoration:'none',
        opacity: 0.85,
        fontWeight: 500,
        cursor:'pointer',
        transition:'opacity 180ms ease',
      }}
    >{children}</a>
  );
};

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const EASE = 'cubic-bezier(0.32, 0.72, 0.24, 1)';
  const DUR = '620ms';

  return (
  <div style={{
    position:'sticky', top:0, zIndex:50,
    display:'flex', justifyContent:'center',
    pointerEvents:'none',
    paddingTop: scrolled ? 14 : 18,
    transition:`padding-top ${DUR} ${EASE}`,
  }}>
    <nav data-nav style={{
      pointerEvents:'auto',
      position:'relative',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding: scrolled ? '10px 16px 10px 18px' : '14px 24px 14px 28px',
      width: scrolled ? 'min(720px, calc(100% - 40px))' : 'calc(100% - 56px)',
      maxWidth: scrolled ? 720 : 1320,
      boxSizing:'border-box',
      borderRadius:999,
      // Glass appears only when scrolled. Heavy blur + low white opacity = voiceos-style "look through glass"
      background: scrolled
        ? 'linear-gradient(135deg, rgba(255,255,255,0.36) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.30) 100%)'
        : 'rgba(255,255,255,0)',
      backdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'blur(0px)',
      WebkitBackdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'blur(0px)',
      border: scrolled ? '1px solid rgba(255,255,255,0.55)' : '1px solid rgba(255,255,255,0)',
      boxShadow: scrolled
        ? `0 10px 38px rgba(14, 22, 38, 0.18),
           0 2px 10px rgba(14, 22, 38, 0.08),
           inset 0 1px 1px rgba(255, 255, 255, 0.85),
           inset 0 -1px 1px rgba(0, 0, 0, 0.04)`
        : '0 0 0 0 rgba(0,0,0,0)',
      transition:`
        width ${DUR} ${EASE},
        max-width ${DUR} ${EASE},
        padding ${DUR} ${EASE},
        background ${DUR} ${EASE},
        backdrop-filter ${DUR} ${EASE},
        border-color ${DUR} ${EASE},
        box-shadow ${DUR} ${EASE}
      `,
    }}>
      {/* Top highlight stripe — voiceos-style 1px specular line */}
      <div aria-hidden="true" style={{
        position:'absolute', top:0, left:24, right:24, height:1,
        background:'linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.9) 80%, transparent)',
        pointerEvents:'none', borderRadius:'inherit',
        opacity: scrolled ? 1 : 0,
        transition:`opacity ${DUR} ${EASE}`,
      }} />
      <div style={{ display:'flex', alignItems:'center', gap:12, flex:'0 0 auto' }}>
        <HMark s={28} />
        <span style={{ fontFamily:GEIST, fontWeight:600, fontSize:17, letterSpacing:'-0.025em', color:C.ink }}>Horizon</span>
      </div>

      <div data-nav-links style={{
        position:'absolute',
        left:'50%', top:'50%',
        transform:'translate(-50%, -50%)',
        display:'flex', alignItems:'center', gap:32,
        fontFamily:GEIST, fontSize:13.5, fontWeight:500, color:C.ink,
        opacity: scrolled ? 0 : 1,
        maxWidth: scrolled ? 0 : 600,
        overflow:'hidden',
        pointerEvents: scrolled ? 'none' : 'auto',
        transition:`opacity ${scrolled ? '220ms' : '480ms'} ease ${scrolled ? '0ms' : '180ms'}, max-width ${DUR} ${EASE}`,
        whiteSpace:'nowrap',
      }}>
        <NavLink to="home">Home</NavLink>
        <NavLink to="product">Product</NavLink>
        <NavLink to="pricing">Pricing</NavLink>
      </div>

      <div style={{ display:'flex', alignItems:'center', gap:10, flex:'0 0 auto' }}>
        <a
          href="mailto:business@cashly.one"
          data-nav-contact
          style={{
            color:C.ink, opacity:0.85,
            textDecoration:'none',
            padding:'9px 14px', borderRadius:999,
            fontFamily:GEIST, fontSize:13.5, fontWeight:500, letterSpacing:'-0.005em',
            cursor:'pointer',
            transition:'opacity 180ms ease, background 180ms ease',
          }}
        >Contact us</a>
        <button data-nav-cta onClick={() => window.__openWaitlist && window.__openWaitlist()} style={{
          background:C.ink, color:C.cream, border:'none',
          padding:'9px 16px', borderRadius:999,
          fontFamily:GEIST, fontSize:13.5, fontWeight:500, letterSpacing:'-0.005em',
          cursor:'pointer',
        }}>Join waitlist</button>
      </div>
    </nav>
  </div>
  );
};

// ============ Hero ============

const Hero = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);
  const inputRef = React.useRef(null);
  const pillRef = React.useRef(null);
  const [closedWidth, setClosedWidth] = React.useState(null);

  React.useEffect(() => {
    window.__openWaitlist = () => {
      window.scrollTo({ top:0, behavior:'smooth' });
      setTimeout(() => {
        setOpen(true);
        setTimeout(() => inputRef.current && inputRef.current.focus(), 600);
      }, 480);
    };
    window.__closeWaitlist = () => setOpen(false);
    return () => { try { delete window.__openWaitlist; } catch(e){} };
  }, []);

  React.useLayoutEffect(() => {
    // Measure once on initial mount, while the pill is in its true closed state
    if (closedWidth == null && pillRef.current && !open) {
      const w = pillRef.current.getBoundingClientRect().width;
      if (w > 0) setClosedWidth(w);
    }
  }, [open, closedWidth]);

  React.useEffect(() => {
    if (open && inputRef.current) {
      const t = setTimeout(() => inputRef.current.focus(), 600);
      return () => clearTimeout(t);
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const el = pillRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setOpen(false); },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [open]);

  // Click outside the pill to close
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (pillRef.current && !pillRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting || submitted) return;
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Bitte eine gültige E-Mail eingeben.');
      setTimeout(() => setError(null), 2400);
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/${WAITLIST_TABLE}`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email: trimmed }),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); setOpen(false); setEmail(''); }, 1800);
      } else {
        // Treat duplicate-email as success so the user isn't punished for trying again
        const status = res.status;
        if (status === 409) {
          setSubmitted(true);
          setTimeout(() => { setSubmitted(false); setOpen(false); setEmail(''); }, 1800);
        } else {
          const txt = await res.text().catch(() => '');
          console.error('Waitlist insert failed:', status, txt);
          setError('Hat nicht geklappt. Versuch es nochmal.');
          setTimeout(() => setError(null), 2400);
        }
      }
    } catch (err) {
      console.error('Waitlist submit error:', err);
      setError('Netzwerkfehler. Versuch es nochmal.');
      setTimeout(() => setError(null), 2400);
    } finally {
      setSubmitting(false);
    }
  };

  return (
  <div data-hero style={{
    maxWidth:980, margin:'0 auto', padding:'160px 48px 64px',
    position:'relative', zIndex:1,
    minHeight:'86vh',
    boxSizing:'border-box',
    textAlign:'center',
  }}>
    <h1 style={{
      fontFamily:SERIF, fontWeight:400,
      fontSize:'clamp(56px, 7.4vw, 100px)',
      lineHeight:1.0, letterSpacing:'-0.032em',
      margin:'0 0 28px',
      color:'rgba(20, 28, 38, 0.92)',
      textWrap:'balance',
      textShadow:`
        0 1px 0 rgba(20, 28, 38, 0.18),
        0 2px 4px rgba(20, 28, 38, 0.14),
        0 -1px 0 rgba(255,255,255,0.25),
        0 6px 18px rgba(20, 30, 50, 0.18),
        0 12px 36px rgba(14, 22, 38, 0.14)
      `,
    }}>
      The dollar account<br/>
      <span style={{ fontStyle:'italic' }}>that opens in 10 seconds.</span>
    </h1>

    <p style={{
      fontFamily:GEIST, fontSize:'clamp(16px, 1.25vw, 19px)',
      lineHeight:1.55, color:C.ink, opacity:0.85,
      margin:'0 auto 44px', maxWidth:580, fontWeight:400,
      textWrap:'pretty',
      textShadow:'0 1px 2px rgba(255,255,255,0.45)',
    }}>
      Open with just an email. Run your business in dollars from anywhere in the world.
      Add a card, US account numbers, or an IBAN when you actually need them.
    </p>

    {/* Glass CTA cluster — relative positioning so the ink button can slide */}
    <div
      ref={pillRef}
      onClick={() => {
        if (!open && !submitted && !submitting) {
          inputRef.current && inputRef.current.focus();
          setOpen(true);
        }
      }}
      style={{
        position:'relative',
        display:'inline-flex', alignItems:'center',
        padding:8,
        background:'rgba(255,255,255,0.32)',
        backdropFilter:'blur(28px) saturate(160%)',
        WebkitBackdropFilter:'blur(28px) saturate(160%)',
        border:'1px solid rgba(255,255,255,0.55)',
        borderRadius:999,
        boxShadow:`
          0 1px 0 rgba(255,255,255,0.7) inset,
          0 -1px 0 rgba(255,255,255,0.18) inset,
          0 16px 40px -14px rgba(14, 42, 74, 0.22)
        `,
        width: open ? 'min(540px, 96vw)' : (closedWidth ? `${closedWidth}px` : 'auto'),
        cursor: !open && !submitted ? 'pointer' : 'default',
        transition: open
          ? 'width 900ms cubic-bezier(0.22, 0.68, 0.18, 1)'
          : 'width 700ms cubic-bezier(0.32, 0.72, 0.24, 1)',
        overflow:'hidden',
      }}
    >
      {/* Email input — appears in the space the button vacates */}
      <input
        ref={inputRef}
        type="email"
        required={open}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="welcome@horizon.com"
        disabled={submitted}
        style={{
          flex: open ? 1 : '0 0 0px',
          width: open ? 'auto' : 0,
          background:'transparent', border:'none', outline:'none',
          padding: open ? '12px 8px 12px 18px' : '0',
          fontFamily:GEIST, fontSize:15, fontWeight:500,
          color:C.ink, letterSpacing:'-0.003em',
          caretColor:C.ink,
          opacity: open ? 1 : 0,
          transition: open
            ? 'opacity 480ms ease 480ms, flex-basis 900ms cubic-bezier(0.22, 0.68, 0.18, 1), padding 900ms cubic-bezier(0.22, 0.68, 0.18, 1)'
            : 'opacity 200ms ease, flex-basis 700ms cubic-bezier(0.32, 0.72, 0.24, 1), padding 700ms cubic-bezier(0.32, 0.72, 0.24, 1)',
          minWidth: 0,
        }}
        onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}
      />

      {/* "Get early access" — fades out + collapses width when pill expands */}
      <span style={{
        padding: open ? '12px 0' : '12px 22px 12px 18px',
        maxWidth: open ? 0 : 'none',
        fontFamily:GEIST, fontSize:13.5, fontWeight:500, color:C.ink,
        opacity: open ? 0 : 0.85,
        whiteSpace:'nowrap',
        pointerEvents:'none',
        overflow:'hidden',
        transition: open
          ? 'opacity 220ms ease, max-width 600ms cubic-bezier(0.22, 0.68, 0.18, 1), padding 600ms cubic-bezier(0.22, 0.68, 0.18, 1)'
          : 'opacity 320ms ease 320ms, max-width 600ms cubic-bezier(0.32, 0.72, 0.24, 1), padding 600ms cubic-bezier(0.32, 0.72, 0.24, 1)',
        order: 2,
        flex:'0 0 auto',
      }}>
        Get early access
      </span>

      {/* Ink button — slides from left slot to right slot, becomes submit */}
      <button
        onClick={(e) => {
          if (!open) { setOpen(true); return; }
          onSubmit(e);
        }}
        type={open ? 'submit' : 'button'}
        disabled={submitted || submitting}
        style={{
          background: submitted ? '#1a8754' : C.ink, color:C.cream, border:'none',
          padding:'13px 24px', borderRadius:999,
          fontFamily:GEIST, fontSize:14, fontWeight:500, letterSpacing:'-0.005em',
          cursor: (submitted || submitting) ? 'default' : 'pointer',
          display:'inline-flex', alignItems:'center', gap:10,
          boxShadow:`0 8px 20px -8px rgba(10,14,20,0.45)`,
          whiteSpace:'nowrap',
          order: open ? 3 : 1,
          flex:'0 0 auto',
          transition:'background 240ms ease, opacity 240ms ease',
          opacity: submitting ? 0.85 : 1,
        }}
      >
        {submitted
          ? <>You&rsquo;re in ✓</>
          : submitting
            ? <>Joining<span style={{ opacity:0.6, fontSize:13, marginLeft:2 }}>…</span></>
            : open
              ? <>Join <span style={{ opacity:0.6, fontSize:13 }}>→</span></>
              : <>Join the waitlist <span style={{ opacity:0.6, fontSize:13 }}>→</span></>
        }
      </button>
    </div>

    {/* Error message — appears below the pill, fades */}
    <div
      role="status"
      aria-live="polite"
      style={{
        marginTop: 14,
        fontFamily: GEIST, fontSize: 13.5, fontWeight: 500,
        color: '#a8331a',
        textShadow: '0 1px 2px rgba(255,255,255,0.5)',
        opacity: error ? 1 : 0,
        transform: error ? 'translateY(0)' : 'translateY(-4px)',
        transition: 'opacity 220ms ease, transform 220ms ease',
        pointerEvents: 'none',
        minHeight: 20,
      }}
    >
      {error || ' '}
    </div>
  </div>
  );
};

// ============ Partners marquee ============

const PARTNERS = [
  { name:'Visa',       slug:'visa',       h:26 },
  { name:'Mastercard', slug:'mastercard', h:38 },
  { name:'Bridge',     slug:'bridge',     h:24 },
  { name:'Privy',      slug:'privy',      h:22 },
  { name:'Rain',       slug:'rain',       h:22 },
];

const PartnersMarquee = () => (
  <section data-partners style={{
    padding:'0 24px 96px',
    position:'relative', zIndex:1,
  }}>
    <div data-reveal style={{
      maxWidth:1100, margin:'0 auto 28px',
      textAlign:'center',
    }}>
      <div style={{
        fontFamily:MONO, fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase',
        color:C.ink, opacity:0.5,
        textShadow:'0 1px 2px rgba(255,255,255,0.4)',
      }}>Our partners</div>
    </div>

    <div data-reveal style={{
      maxWidth:1100, margin:'0 auto',
      display:'flex', alignItems:'center', justifyContent:'center',
      gap:64, flexWrap:'wrap',
    }}>
      {PARTNERS.map(({ name, slug, h }) => (
        <img
          key={name}
          src={`logos/${slug}.png`}
          alt={name}
          style={{
            height:h, width:'auto', display:'block',
            filter:'brightness(0)', opacity:0.55,
            flex:'0 0 auto',
          }}
        />
      ))}
    </div>
  </section>
);

// ============ Supported countries (used by ReachAgents tile) ============

const SUPPORTED_COUNTRIES = [
  'us','gb','jp','se','pl','ae','gr','au','ca','fr','sg','no','cz','il','mt',
  'nz','mx','de','hk','dk','ro','tr','cy','br','es','in','fi','hu','ie','za',
  'it','ph','is','ee','nl','lu','id','pt','lt','be','my','ch','lv','th','at',
];

// ============ Feature Strip ============

const FEATURES = [
  'USD account, ACH & wires',
  'Open from 190+ countries',
  'Cards for your whole team',
  'Yield on idle balances',
  'Horizon AI, your finance agent',
  'Stablecoin rails under the hood',
];

const FeatureStrip = () => (
  <section style={{
    maxWidth:1100, margin:'0 auto',
    padding:'40px 48px 0',
    position:'relative', zIndex:1,
  }}>
    <div style={{
      padding:'28px 32px',
      borderRadius:24,
      background:'rgba(255,255,255,0.32)',
      backdropFilter:'blur(28px) saturate(160%)',
      WebkitBackdropFilter:'blur(28px) saturate(160%)',
      border:'1px solid rgba(255,255,255,0.55)',
      boxShadow:`
        0 1px 0 rgba(255,255,255,0.7) inset,
        0 -1px 0 rgba(255,255,255,0.18) inset,
        0 16px 40px -18px rgba(14, 42, 74, 0.18)
      `,
      display:'grid',
      gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',
      gap:'14px 28px',
    }}>
      {FEATURES.map((f, i) => (
        <div key={i} style={{
          display:'flex', alignItems:'center', gap:10,
          fontFamily:GEIST, fontSize:14, fontWeight:500,
          color:C.ink, opacity:0.88,
          letterSpacing:'-0.005em',
        }}>
          <span style={{ color:C.midnight, opacity:0.85, display:'inline-flex' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7.2 L5.6 10.2 L11.5 4.0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{f}</span>
        </div>
      ))}
    </div>
  </section>
);

// ============ Capability sections ============

const C_ACCOUNTS = {
  eyebrow:'Accounts',
  title:'Accounts. Payments. FX.',
  blurb:'Named USD and EUR accounts, global rails, instant FX between fiat and stablecoins.',
  items: [
    ['Multi-currency','Named USD & EUR accounts in your business name.'],
    ['Payments','ACH, SEPA, Wire, SWIFT and stablecoin rails.'],
    ['FX','Ramp between USD, EUR, MXN, BRL, GBP and stablecoins.'],
  ],
};
const C_CARDS = {
  eyebrow:'Cards',
  title:'Cards your team can actually use.',
  blurb:'Virtual and physical cards with policies, approvals and receipts handled automatically.',
  items: [
    ['Virtual & Physical','Issue instantly, ship cards to your team.'],
    ['Expense Management','Every transaction categorized.'],
    ['Spend Policies','Limits enforced automatically.'],
  ],
};
const C_OPS = {
  eyebrow:'Operations',
  title:'Control center for finance.',
  items: [
    ['Accounts Payable & Receivable','Schedule vendor payments, invoice clients, track cashflow.'],
    ['Accounting & Bookkeeping','One ledger, auto-categorized and audit-ready.'],
    ['Team Control','Roles, permissions and multi-party approvals.'],
  ],
};
const C_AI = {
  eyebrow:'Horizon AI',
  title:'Your finance agent, on call.',
  blurb:'Reconcile, draft, schedule, answer. The agent that knows your numbers.',
};
const C_INTEGRATIONS = {
  eyebrow:'Integrations',
  title:'Plugs into your stack.',
  blurb:'Stripe, PayPal, QuickBooks, Xero. Connected in a click.',
  logos: [
    { name:'Slack',      slug:'slack',      h:14 },
    { name:'Notion',     slug:'notion',     h:46 },
    { name:'QuickBooks', slug:'quickbooks', h:26 },
    { name:'Zapier',     slug:'zapier',     h:54 },
    { name:'Xero',       slug:'xero',       h:14 },
    { name:'Stripe',     slug:'stripe',     h:14 },
    { name:'PayPal',     slug:'paypal',     h:14 },
  ],
};

const C_YIELD = {
  eyebrow:'Yield',
  title:'3.25% APY on idle balances.',
  blurb:'Backed 1:1 by short-term US Treasuries. No lockups.',
};
const C_SECURITY = {
  eyebrow:'Security',
  title:'Enterprise controls, by default.',
  blurb:'Multi-party approvals, role-based access, granular permissions, audit log.',
};

// Shared glass card chrome
const tileBase = {
  borderRadius:28,
  background:'rgba(255,255,255,0.32)',
  backdropFilter:'blur(28px) saturate(160%)',
  WebkitBackdropFilter:'blur(28px) saturate(160%)',
  border:'1px solid rgba(255,255,255,0.55)',
  boxShadow:`
    0 1px 0 rgba(255,255,255,0.7) inset,
    0 -1px 0 rgba(255,255,255,0.18) inset,
    0 18px 44px -18px rgba(14, 42, 74, 0.22)
  `,
  display:'flex', flexDirection:'column',
  position:'relative',
  overflow:'hidden',
};

const Eyebrow = ({ children }) => (
  <div style={{
    fontFamily:MONO, fontSize:10.5, letterSpacing:'0.18em', textTransform:'uppercase',
    color:C.ink, opacity:0.55, marginBottom:14,
  }}>{children}</div>
);

const TileTitle = ({ size=30, children }) => (
  <h3 style={{
    fontFamily:SERIF, fontWeight:400,
    fontSize:size, lineHeight:1.05, letterSpacing:'-0.025em',
    margin:0, color:'rgba(20,28,38,0.94)',
    textShadow:'0 1px 0 rgba(255,255,255,0.35)',
    textWrap:'balance',
  }}>{children}</h3>
);

const TileBlurb = ({ children }) => (
  <p style={{
    margin:'12px 0 0',
    fontFamily:GEIST, fontSize:14.5, lineHeight:1.55,
    color:C.ink, opacity:0.78, textWrap:'pretty',
  }}>{children}</p>
);

// Large tile w/ items list (Accounts)
const TileAccounts = () => (
  <div style={{ ...tileBase, padding:'36px 36px 32px', gridColumn:'span 7', gridRow:'span 2' }}>
    <Eyebrow>{C_ACCOUNTS.eyebrow}</Eyebrow>
    <TileTitle size={38}>{C_ACCOUNTS.title}</TileTitle>
    <TileBlurb>{C_ACCOUNTS.blurb}</TileBlurb>
    <div style={{ height:1, background:'rgba(20,28,38,0.12)', margin:'28px 0 24px' }} />
    <div data-tile-accounts-items style={{ display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:24, flex:'1 1 auto' }}>
      {C_ACCOUNTS.items.map(([label, desc], i) => (
        <div key={i} style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div style={{ fontFamily:MONO, fontSize:10.5, fontWeight:500, letterSpacing:'0.16em', color:C.ink, opacity:0.45 }}>0{i+1}</div>
          <div style={{ fontFamily:GEIST, fontSize:15, fontWeight:600, color:C.ink, letterSpacing:'-0.005em' }}>{label}</div>
          <div style={{ fontFamily:GEIST, fontSize:14, lineHeight:1.55, color:C.ink, opacity:0.72, textWrap:'pretty' }}>{desc}</div>
        </div>
      ))}
    </div>
  </div>
);

// Tall AI tile w/ glow accent
const TileAI = () => (
  <div style={{ ...tileBase, padding:'36px 32px 32px', gridColumn:'span 5', gridRow:'span 2',
    background:'linear-gradient(165deg, rgba(255,255,255,0.42) 0%, rgba(90,184,234,0.18) 100%)',
  }}>
    <Eyebrow>{C_AI.eyebrow}</Eyebrow>
    <TileTitle size={34}>{C_AI.title}</TileTitle>
    <TileBlurb>{C_AI.blurb}</TileBlurb>

    {/* Mock chat bubble */}
    <div style={{ flex:'1 1 auto', display:'flex', flexDirection:'column', justifyContent:'flex-end', gap:10, marginTop:32 }}>
      <div style={{
        alignSelf:'flex-start', maxWidth:'82%',
        padding:'12px 16px', borderRadius:18, borderTopLeftRadius:6,
        background:'rgba(255,255,255,0.55)',
        border:'1px solid rgba(255,255,255,0.7)',
        fontFamily:GEIST, fontSize:14, color:C.ink, lineHeight:1.5,
        boxShadow:'0 4px 14px -8px rgba(14,42,74,0.18)',
      }}>How much did we spend on infra last month?</div>
      <div style={{
        alignSelf:'flex-end', maxWidth:'88%',
        padding:'12px 16px', borderRadius:18, borderTopRightRadius:6,
        background:C.ink, color:C.cream,
        fontFamily:GEIST, fontSize:14, lineHeight:1.5,
        boxShadow:'0 6px 18px -8px rgba(10,14,20,0.45)',
      }}>$12,840 across AWS, Vercel and Supabase. 18% under your $15.6k cap. Want me to draft next month's budget?</div>
    </div>
  </div>
);

const TileCards = () => (
  <div style={{ ...tileBase, padding:'32px 32px 28px', gridColumn:'span 5', gridRow:'span 1' }}>
    <Eyebrow>{C_CARDS.eyebrow}</Eyebrow>
    <TileTitle size={28}>{C_CARDS.title}</TileTitle>
    <TileBlurb>{C_CARDS.blurb}</TileBlurb>
  </div>
);

const TileOps = () => (
  <div style={{ ...tileBase, padding:'32px 32px 28px', gridColumn:'span 4', gridRow:'span 1' }}>
    <Eyebrow>{C_OPS.eyebrow}</Eyebrow>
    <TileTitle size={26}>{C_OPS.title}</TileTitle>
    <ul style={{ listStyle:'none', padding:0, margin:'18px 0 0', display:'flex', flexDirection:'column', gap:8 }}>
      {C_OPS.items.map(([label], i) => (
        <li key={i} style={{ display:'flex', alignItems:'center', gap:10, fontFamily:GEIST, fontSize:14, color:C.ink, opacity:0.85 }}>
          <span style={{ width:4, height:4, borderRadius:99, background:C.ink, opacity:0.4 }} />
          {label}
        </li>
      ))}
    </ul>
  </div>
);

const TileIntegrations = () => (
  <div data-tile-integrations style={{ ...tileBase, padding:'17px 24px', gridColumn:'span 12', gridRow:'auto',
    minHeight:'auto', height:'auto',
    flexDirection:'row', alignItems:'center', gap:20, flexWrap:'wrap',
  }}>
    <div style={{ display:'flex', flexDirection:'column', gap:4, flex:'0 1 auto', minWidth:200 }}>
      <div style={{
        fontFamily:MONO, fontSize:10.5, letterSpacing:'0.18em', textTransform:'uppercase',
        color:C.ink, opacity:0.55,
      }}>{C_INTEGRATIONS.eyebrow}</div>
      <div style={{
        fontFamily:SERIF, fontWeight:400, fontSize:26, lineHeight:1.1, letterSpacing:'-0.02em',
        color:'rgba(20,28,38,0.94)',
      }}>{C_INTEGRATIONS.title}</div>
    </div>
    <div data-int-pills style={{
      display:'flex', flexWrap:'wrap', gap:8, alignItems:'center',
      flex:'1 1 auto', justifyContent:'flex-end',
    }}>
      {C_INTEGRATIONS.logos.map(({ name, slug, h = 14 }) => (
        <span key={name} title={name} aria-label={name} style={{
          height:64, padding:'0 16px', borderRadius:999,
          background:'rgba(255,255,255,0.5)',
          border:'1px solid rgba(20,28,38,0.12)',
          backdropFilter:'blur(8px)',
          display:'inline-flex', alignItems:'center', justifyContent:'center',
        }}>
          <img
            src={`logos/${slug}.png`}
            alt={name}
            style={{
              height:h, width:'auto', display:'block',
              filter:'brightness(0)', opacity:0.85,
            }}
          />
        </span>
      ))}
      <span style={{
        height:30, padding:'0 12px', borderRadius:999,
        background:'rgba(255,255,255,0.5)',
        border:'1px solid rgba(20,28,38,0.12)',
        fontFamily:GEIST, fontSize:12.5, fontWeight:500,
        color:C.ink, opacity:0.7, letterSpacing:'-0.005em',
        backdropFilter:'blur(8px)',
        display:'inline-flex', alignItems:'center', justifyContent:'center',
      }}>and more</span>
    </div>
  </div>
);

const TileYield = () => (
  <div style={{ ...tileBase, padding:'32px', gridColumn:'span 3', gridRow:'span 1' }}>
    <Eyebrow>{C_YIELD.eyebrow}</Eyebrow>
    <div style={{
      fontFamily:SERIF, fontWeight:400, fontSize:56, lineHeight:1, letterSpacing:'-0.03em',
      color:'rgba(20,28,38,0.95)', margin:'8px 0 12px',
      textShadow:'0 1px 0 rgba(255,255,255,0.35)',
    }}>3.25<span style={{ fontSize:32, opacity:0.6 }}>%</span></div>
    <div style={{ fontFamily:GEIST, fontSize:13, color:C.ink, opacity:0.7, lineHeight:1.5, textWrap:'pretty' }}>
      APY on idle balances, backed 1:1 by US Treasuries.
    </div>
  </div>
);

const Capabilities = () => (
  <section data-capabilities style={{
    maxWidth:1240, margin:'0 auto',
    padding:'80px 48px 128px',
    position:'relative', zIndex:1,
  }}>
    <div data-reveal style={{ textAlign:'center', maxWidth:680, margin:'0 auto 48px' }}>
      <h2 style={{
        fontFamily:SERIF, fontWeight:400,
        fontSize:'clamp(36px, 4.4vw, 56px)',
        lineHeight:1.05, letterSpacing:'-0.028em',
        margin:'0 0 16px',
        color:'rgba(20,28,38,0.92)',
        textShadow:`
          0 1px 0 rgba(20,28,38,0.14),
          0 6px 18px rgba(20,30,50,0.14)
        `,
      }}>
        Accounts. Cards. <span style={{ fontStyle:'italic' }}>Operations.</span>
      </h2>
      <p style={{
        margin:0,
        fontFamily:GEIST, fontSize:'clamp(15px, 1.1vw, 17px)',
        lineHeight:1.55, color:C.ink, opacity:0.78,
        textWrap:'pretty',
        textShadow:'0 1px 2px rgba(255,255,255,0.4)',
      }}>
        A financial operating system for businesses on the frontier. One platform worldwide.
      </p>
    </div>

    <div data-bento style={{
      display:'grid',
      gridTemplateColumns:'repeat(12, minmax(0, 1fr))',
      gridAutoRows:'minmax(0, auto)',
      gap:20,
    }}>
      <TileAccounts />
      <TileAI />
      <TileCards />
      <TileOps />
      <TileYield />
      <TileIntegrations />
    </div>
  </section>
);

// ============ Footer ============

const Footer = () => (
  <footer style={{
    padding:'28px 48px 28px',
    position:'relative',
    zIndex:2,
  }}>
    <div data-reveal style={{
      maxWidth:1240, margin:'0 auto',
      paddingTop:20,
      borderTop:'1px solid rgba(20,28,38,0.10)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      gap:16, flexWrap:'wrap',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <HMark s={22} />
        <span style={{
          fontFamily:GEIST, fontSize:13, fontWeight:600, letterSpacing:'-0.02em',
          color:C.ink, opacity:0.85,
        }}>Horizon</span>
        <span style={{
          fontFamily:MONO, fontSize:10.5, letterSpacing:'0.16em', textTransform:'uppercase',
          color:C.ink, opacity:0.5, marginLeft:6,
        }}>© {new Date().getFullYear()}</span>
      </div>

      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <a
          href="https://www.linkedin.com/in/hagen-kral/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          style={{
            display:'inline-flex', alignItems:'center', gap:8,
            height:32, padding:'0 12px', borderRadius:999,
            background:'rgba(255,255,255,0.5)',
            border:'1px solid rgba(20,28,38,0.12)',
            backdropFilter:'blur(8px)',
            fontFamily:GEIST, fontSize:12.5, fontWeight:500, letterSpacing:'-0.005em',
            color:C.ink, textDecoration:'none',
            transition:'background 220ms ease, transform 220ms ease',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

// ============ Pricing ============

const Check = ({ s=14 }) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none" style={{ flex:'0 0 auto', marginTop:5 }}>
    <path d="M2.5 7.2 L5.6 10.2 L11.5 4.0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PRICING_TIERS = [
  {
    name: 'Starter',
    tagline: 'For founders opening their first global account.',
    price: '0',
    suffix: '/forever',
    cta: 'Get started',
    ctaStyle: 'ghost',
    featured: false,
    features: [
      'Account live in 10 seconds, no paperwork',
      'Send dollars worldwide (195+ countries)',
      'Get paid from anywhere in the world',
      'Up to 3 team members',
      'Invoicing and bookkeeping',
      'Yield on idle balance from day one',
      'AI CFO: balance, runway, and cashflow answers',
    ],
  },
  {
    name: 'Business',
    tagline: 'For teams running payroll, contractors, and treasury.',
    price: '49',
    suffix: '/month',
    cta: 'Join the waitlist',
    ctaStyle: 'ink',
    featured: true,
    badge: 'Most chosen',
    features: [
      'Everything in Starter, plus:',
      'Virtual and physical cards for the whole team',
      'US account numbers (ACH, wire), EUR IBAN, GBP account',
      'On/off-ramp between dollars and local currency',
      'More team members and approval workflows',
      'Payroll and bulk payouts to global contractors',
      'Xero, QuickBooks, Stripe, and 20+ integrations',
      'AI CFO that drafts payments and reconciles your books',
    ],
  },
  {
    name: 'Scale',
    tagline: 'For businesses moving real volume.',
    price: '99',
    suffix: '/month',
    cta: 'Join the waitlist',
    ctaStyle: 'ghost',
    featured: false,
    features: [
      'Everything in Business, plus:',
      'AI CFO that executes payments and runs treasury',
      'Up to 25 AI agents with policy controls',
      'Advanced reporting and financial statements',
      'Higher transaction limits',
      'SSO, audit logs, custom permissions',
      'Bulk approval workflows and spend policies',
      'Priority support · 1h response',
    ],
  },
];

const PricingCard = ({ tier }) => {
  const { featured } = tier;
  return (
    <div style={{
      position:'relative',
      flex:'1 1 0',
      minWidth: 0,
      padding: featured ? '40px 32px 32px' : '36px 32px 32px',
      borderRadius: 28,
      background: featured
        ? 'rgba(255,255,255,0.55)'
        : 'rgba(255,255,255,0.32)',
      backdropFilter:'blur(28px) saturate(160%)',
      WebkitBackdropFilter:'blur(28px) saturate(160%)',
      border: featured
        ? '1px solid rgba(255,255,255,0.75)'
        : '1px solid rgba(255,255,255,0.55)',
      boxShadow: featured
        ? `0 1px 0 rgba(255,255,255,0.85) inset,
           0 -1px 0 rgba(255,255,255,0.22) inset,
           0 28px 60px -22px rgba(14, 42, 74, 0.32),
           0 8px 22px -10px rgba(14, 42, 74, 0.18)`
        : `0 1px 0 rgba(255,255,255,0.7) inset,
           0 -1px 0 rgba(255,255,255,0.18) inset,
           0 18px 44px -18px rgba(14, 42, 74, 0.22)`,
      transform: featured ? 'translateY(-12px)' : 'none',
      display:'flex', flexDirection:'column', gap:24,
      transition:'transform 280ms ease, box-shadow 280ms ease',
    }}>
      {tier.badge && (
        <div style={{
          position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)',
          padding:'6px 14px',
          background:C.ink, color:C.cream,
          borderRadius:999,
          fontFamily:MONO, fontSize:10, fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase',
          boxShadow:'0 8px 20px -8px rgba(10,14,20,0.45)',
          whiteSpace:'nowrap',
        }}>{tier.badge}</div>
      )}

      {/* Header */}
      <div>
        <div style={{
          fontFamily:MONO, fontSize:10.5, letterSpacing:'0.18em', textTransform:'uppercase',
          color:C.ink, opacity:0.55,
          marginBottom:14,
        }}>{tier.name}</div>

        <div style={{ display:'flex', alignItems:'baseline', gap:6, marginBottom:12 }}>
          <span style={{
            fontFamily:SERIF, fontWeight:400,
            fontSize:64, lineHeight:1, letterSpacing:'-0.03em',
            color:'rgba(20,28,38,0.95)',
            textShadow:'0 1px 0 rgba(255,255,255,0.35)',
          }}>
            <span style={{ fontSize:36, opacity:0.6, marginRight:2 }}>$</span>{tier.price}
          </span>
          <span style={{
            fontFamily:GEIST, fontSize:14, fontWeight:500,
            color:C.ink, opacity:0.6,
          }}>{tier.suffix}</span>
        </div>

        <p style={{
          margin:0,
          fontFamily:GEIST, fontSize:14.5, lineHeight:1.5,
          color:C.ink, opacity:0.8,
          textWrap:'pretty',
        }}>{tier.tagline}</p>
      </div>

      {/* Divider */}
      <div style={{ height:1, background:'rgba(20,28,38,0.12)' }} />

      {/* Features */}
      <ul style={{
        listStyle:'none', padding:0, margin:0,
        display:'flex', flexDirection:'column', gap:13,
        flex:'1 1 auto',
      }}>
        {tier.features.map((f, i) => (
          <li key={i} style={{
            display:'flex', gap:12,
            fontFamily:GEIST, fontSize:14.5, lineHeight:1.45,
            color:C.ink, opacity:0.88,
          }}>
            <span style={{ color: featured ? C.midnight : C.ink, opacity: featured ? 1 : 0.7 }}><Check /></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button onClick={() => window.__openWaitlist && window.__openWaitlist()} style={
        tier.ctaStyle === 'ink'
          ? {
              background:C.ink, color:C.cream, border:'none',
              padding:'14px 22px', borderRadius:999,
              fontFamily:GEIST, fontSize:14, fontWeight:500, letterSpacing:'-0.005em',
              cursor:'pointer',
              boxShadow:'0 8px 20px -8px rgba(10,14,20,0.45)',
              width:'100%',
            }
          : {
              background:'rgba(255,255,255,0.5)',
              color:C.ink,
              border:'1px solid rgba(20,28,38,0.18)',
              padding:'14px 22px', borderRadius:999,
              fontFamily:GEIST, fontSize:14, fontWeight:500, letterSpacing:'-0.005em',
              cursor:'pointer',
              backdropFilter:'blur(8px)',
              width:'100%',
            }
      }>
        {tier.cta} <span style={{ opacity:0.6, fontSize:13, marginLeft:4 }}>→</span>
      </button>
    </div>
  );
};

const Pricing = () => (
  <div data-pricing style={{
    maxWidth:1200, margin:'0 auto',
    padding:'80px 48px 120px',
    position:'relative', zIndex:1,
  }}>
    {/* Header */}
    <div data-reveal style={{ textAlign:'center', marginBottom:56 }}>
      <div style={{
        fontFamily:MONO, fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase',
        color:C.ink, opacity:0.6, marginBottom:18,
        textShadow:'0 1px 2px rgba(255,255,255,0.45)',
      }}>Pricing</div>
      <h1 style={{
        fontFamily:SERIF, fontWeight:400,
        fontSize:'clamp(44px, 5.4vw, 72px)',
        lineHeight:1.0, letterSpacing:'-0.03em',
        margin:'0 0 18px',
        color:'rgba(20, 28, 38, 0.92)',
        textShadow:`
          0 1px 0 rgba(20, 28, 38, 0.16),
          0 2px 4px rgba(20, 28, 38, 0.12),
          0 6px 18px rgba(20, 30, 50, 0.16)
        `,
      }}>
        Start free. <span style={{ fontStyle:'italic' }}>Scale on your horizon.</span>
      </h1>
      <p style={{
        fontFamily:GEIST, fontSize:'clamp(15px, 1.1vw, 17.5px)',
        lineHeight:1.55, color:C.ink, opacity:0.78,
        margin:'0 auto', maxWidth:560, fontWeight:400,
        textWrap:'pretty',
        textShadow:'0 1px 2px rgba(255,255,255,0.4)',
      }}>
        Three plans, no contracts. Move up when the venture moves up. Never before.
      </p>
    </div>

    {/* Cards */}
    <div data-pricing-cards style={{
      display:'flex', alignItems:'stretch', gap:20,
      flexWrap:'wrap', justifyContent:'center',
    }}>
      {PRICING_TIERS.map(t => <PricingCard key={t.name} tier={t} />)}
    </div>

  </div>
);

// ============ Agents section — asymmetric split with code-mock card ============

const AgentCardMock = () => (
  <div style={{
    ...tileBase, padding:0, minHeight:340, overflow:'hidden',
  }}>
    {/* Header bar */}
    <div style={{
      padding:'14px 20px',
      borderBottom:'1px solid rgba(20,28,38,0.08)',
      display:'flex', alignItems:'center', gap:10,
      fontFamily:MONO, fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase',
      color:C.ink, opacity:0.6,
    }}>
      <span style={{ width:8, height:8, borderRadius:99, background:'#2bb673', boxShadow:'0 0 0 2px rgba(43,182,115,0.18)' }} />
      POST /v1/agents/cards
    </div>
    {/* Body — JSON */}
    <pre style={{
      flex:'1 1 auto', margin:0, padding:'18px 20px 14px',
      fontFamily:MONO, fontSize:12.5, lineHeight:1.62,
      color:C.ink, opacity:0.86,
      whiteSpace:'pre-wrap', wordBreak:'break-word',
    }}>{`{
  "agent": "research-bot",
  "card_type": "virtual",
  "limits": {
    "per_tx": 200,
    "per_day": 1000,
    "merchants": ["openai", "anthropic", "stripe"]
  },
  "currency": "USD"
}`}</pre>
    {/* Footer — response */}
    <div style={{
      padding:'12px 20px', borderTop:'1px solid rgba(20,28,38,0.08)',
      fontFamily:MONO, fontSize:11.5,
      display:'flex', justifyContent:'space-between', alignItems:'center',
      color:C.ink, opacity:0.78,
    }}>
      <span style={{ color:'#1a8754', fontWeight:600, letterSpacing:'0.04em' }}>201 CREATED</span>
      <span style={{ opacity:0.6 }}>card_5RkTvM</span>
    </div>
  </div>
);

const AGENT_TAGS = ['Virtual cards', 'Direct API', 'On-chain', 'Hard limits', 'Webhooks', 'Audit log'];

const AgentsSection = () => (
  <section data-agents style={{
    maxWidth:1240, margin:'0 auto',
    padding:'144px 48px 144px',
    position:'relative', zIndex:1,
  }}>
    <div data-agents-grid style={{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fit, minmax(360px, 1fr))',
      gap:48, alignItems:'center',
    }}>
      <div data-reveal>
        <div style={{
          fontFamily:MONO, fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase',
          color:C.ink, opacity:0.55, marginBottom:16,
          textShadow:'0 1px 2px rgba(255,255,255,0.4)',
        }}>Agents</div>
        <h2 style={{
          fontFamily:SERIF, fontWeight:400,
          fontSize:'clamp(34px, 4.4vw, 56px)',
          lineHeight:1.05, letterSpacing:'-0.025em',
          margin:'0 0 18px',
          color:'rgba(20,28,38,0.94)',
          textShadow:'0 1px 0 rgba(20,28,38,0.14), 0 6px 18px rgba(20,30,50,0.12)',
        }}>
          Money for your <span style={{ fontStyle:'italic' }}>agents.</span>
        </h2>
        <p style={{
          margin:'0 0 24px',
          fontFamily:GEIST, fontSize:'clamp(15px, 1.1vw, 17px)',
          lineHeight:1.6, color:C.ink, opacity:0.78,
          maxWidth:520,
          textShadow:'0 1px 2px rgba(255,255,255,0.4)',
        }}>
          Issue cards your AI can spend on, wire it straight into the API,
          or settle directly on-chain. Per-agent limits, merchant rules,
          and approval thresholds, by default.
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {AGENT_TAGS.map(label => (
            <span key={label} style={{
              height:30, padding:'0 12px', borderRadius:999,
              background:'rgba(255,255,255,0.5)',
              border:'1px solid rgba(20,28,38,0.12)',
              fontFamily:GEIST, fontSize:12.5, fontWeight:500,
              color:C.ink, letterSpacing:'-0.005em',
              backdropFilter:'blur(8px)',
              display:'inline-flex', alignItems:'center', justifyContent:'center',
            }}>{label}</span>
          ))}
        </div>
      </div>
      <div data-reveal>
        <AgentCardMock />
      </div>
    </div>
  </section>
);

// ============ Countries section — centered headline + dual counter-rotating flag bands ============

const FlagRow = ({ reverse = false, gap = 14, size = 'normal' }) => {
  const items = [...SUPPORTED_COUNTRIES, ...SUPPORTED_COUNTRIES];
  const w = size === 'small' ? 24 : 28;
  const h = size === 'small' ? 17 : 20;
  return (
    <div data-flag-track style={{
      display:'flex', alignItems:'center', gap, width:'max-content',
      animationDirection: reverse ? 'reverse' : 'normal',
    }}>
      {items.map((cc, i) => (
        <div key={i} aria-hidden={i >= SUPPORTED_COUNTRIES.length} style={{
          flex:'0 0 auto', padding:5, borderRadius:10,
          background:'rgba(255,255,255,0.32)',
          backdropFilter:'blur(14px) saturate(180%)',
          WebkitBackdropFilter:'blur(14px) saturate(180%)',
          border:'1px solid rgba(255,255,255,0.55)',
          boxShadow:`
            0 1px 0 rgba(255,255,255,0.7) inset,
            0 -1px 0 rgba(255,255,255,0.18) inset,
            0 6px 14px -8px rgba(14, 42, 74, 0.18)
          `,
          display:'inline-flex', alignItems:'center', justifyContent:'center',
        }}>
          <img
            src={`https://flagcdn.com/${cc}.svg`}
            alt={i < SUPPORTED_COUNTRIES.length ? cc.toUpperCase() : ''}
            width={w} height={h} loading="lazy"
            style={{
              display:'block', borderRadius:3, objectFit:'cover',
              width:w, height:h,
              filter:'saturate(0.55) brightness(0.98)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

const CountriesSection = () => (
  <section data-countries style={{
    maxWidth:'100%', margin:'0 auto',
    padding:'240px 0 232px',
    position:'relative', zIndex:1,
  }}>
    <div style={{
      maxWidth:1240, margin:'0 auto',
      padding:'0 24px',
      position:'relative',
    }}>
      {/* Text overlay on the left — vertically centered against the flag bands.
          Flags fade out before reaching it (mask), so the top row visually flows
          INTO the text and the bottom row (reversed) emerges from BEHIND it. */}
      <div data-reveal data-countries-headline style={{
        position:'absolute',
        top:'50%', left:24, transform:'translateY(-50%)',
        zIndex:2,
        width:'min(42%, 420px)',
        pointerEvents:'none',
      }}>
        <h2 style={{
          fontFamily:SERIF, fontWeight:400,
          fontSize:'clamp(30px, 4vw, 52px)',
          lineHeight:1.0, letterSpacing:'-0.025em',
          margin:0,
          color:'rgba(20,28,38,0.94)',
          textShadow:'0 1px 0 rgba(20,28,38,0.14), 0 6px 18px rgba(20,30,50,0.12)',
        }}>
          Open <span style={{ fontStyle:'italic' }}>worldwide.</span>
        </h2>
      </div>

      {/* Flag bands — fade transparent in the left ~38% (where the text sits) */}
      <div data-reveal data-countries-flags style={{
        display:'flex', flexDirection:'column', gap:12,
      }}>
        <div style={{
          position:'relative', overflow:'hidden',
          WebkitMaskImage:'linear-gradient(to right, transparent 0, transparent 28%, #000 40%, #000 92.5%, transparent 97.5%)',
          maskImage:'linear-gradient(to right, transparent 0, transparent 28%, #000 40%, #000 92.5%, transparent 97.5%)',
        }}>
          <FlagRow />
        </div>
        <div style={{
          position:'relative', overflow:'hidden',
          WebkitMaskImage:'linear-gradient(to right, transparent 0, transparent 28%, #000 40%, #000 92.5%, transparent 97.5%)',
          maskImage:'linear-gradient(to right, transparent 0, transparent 28%, #000 40%, #000 92.5%, transparent 97.5%)',
        }}>
          <FlagRow reverse />
        </div>
      </div>
    </div>
  </section>
);

// ============ App ============

const App = () => {
  const go = React.useCallback((r) => {
    if (r === 'pricing') {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
    } else if (r === 'product') {
      const el = document.getElementById('product');
      if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
    } else if (r === 'home') {
      window.scrollTo({ top:0, behavior:'smooth' });
    }
  }, []);

  // Scroll-reveal: add .is-revealed once each target enters the viewport
  React.useEffect(() => {
    const selector = '[data-reveal], [data-bento] > *, [data-pricing-cards] > *';
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px' });

    const observeAll = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains('is-revealed')) io.observe(el);
      });
    };
    observeAll();
    // Catch later mounts (Babel transforms run after initial paint)
    const t1 = setTimeout(observeAll, 60);
    const t2 = setTimeout(observeAll, 300);
    return () => { clearTimeout(t1); clearTimeout(t2); io.disconnect(); };
  }, []);

  return (
    <RouteCtx.Provider value={{ route:'home', go }}>
      <div style={{
        minHeight:'100vh', position:'relative',
        background: HERO_ONLY_BG ? PAGE_BELOW_HERO_BG : 'transparent',
      }}>
        <SkyBackground />
        <div style={{ position:'relative', zIndex:1 }}>
          <Nav />
          <main>
            <Hero />
            <PartnersMarquee />
            <section id="product">
              <Capabilities />
            </section>
            <AgentsSection />
            <CountriesSection />
            <section id="pricing">
              <Pricing />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </RouteCtx.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
