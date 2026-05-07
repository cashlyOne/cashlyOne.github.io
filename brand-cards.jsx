// brand-cards.jsx — Logo lockups + brand cards for naming exploration

const BRAND_FONT_SERIF = "'Instrument Serif', Georgia, serif";
const BRAND_FONT_SANS = "'Inter Tight', system-ui, sans-serif";
const BRAND_FONT_MONO = "'JetBrains Mono', ui-monospace, monospace";

// ---------- Reusable card chrome ----------

const BrandCard = ({ palette, children, mood }) => {
  const bg = palette.bg;
  const fg = palette.fg;
  const accent = palette.accent;
  return (
    <div style={{
      width: '100%', height: '100%',
      background: bg, color: fg,
      display: 'grid',
      gridTemplateRows: '1fr auto',
      fontFamily: BRAND_FONT_SANS,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top: logo lockup region */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 32px',
        position: 'relative',
      }}>
        {children}
      </div>
      {/* Bottom: meta strip */}
      <div style={{
        borderTop: `1px solid ${palette.divider}`,
        padding: '18px 22px 20px',
        display: 'grid', gap: 10,
      }}>
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:12,
        }}>
          <div style={{ fontFamily: BRAND_FONT_SERIF, fontStyle:'italic', fontSize:17, letterSpacing:'-0.01em', lineHeight:1.2, color:palette.muted }}>
            {mood.tagline}
          </div>
          <div style={{ fontFamily:BRAND_FONT_MONO, fontSize:9.5, letterSpacing:'0.08em', color:palette.muted, textTransform:'uppercase', whiteSpace:'nowrap' }}>
            {mood.meta}
          </div>
        </div>
        <div style={{
          fontSize: 11.5, lineHeight: 1.5, color: palette.muted,
        }}>
          {mood.rationale}
        </div>
        <div style={{
          display:'flex', gap:6, flexWrap:'wrap', marginTop:2,
        }}>
          {mood.tags.map(t => (
            <span key={t} style={{
              fontFamily: BRAND_FONT_MONO,
              fontSize: 9, letterSpacing:'0.06em', textTransform:'uppercase',
              padding:'3px 7px', borderRadius:3,
              border:`1px solid ${palette.divider}`, color: palette.muted,
            }}>{t}</span>
          ))}
        </div>
      </div>
      {/* Domain pills */}
      <div style={{ position:'absolute', top:14, right:16, display:'flex', gap:5 }}>
        {mood.domains.map(d => (
          <span key={d.tld} style={{
            fontFamily: BRAND_FONT_MONO, fontSize: 9, letterSpacing:'0.04em',
            padding:'3px 6px', borderRadius:3,
            background: d.ok ? accent+'18' : 'transparent',
            color: d.ok ? accent : palette.muted,
            border:`1px solid ${d.ok ? accent+'40' : palette.divider}`,
          }}>{d.tld}</span>
        ))}
      </div>
    </div>
  );
};

// ---------- 10 hero logo lockups ----------

// 1. MERIDIAN — institutional, cartographic
const LogoMeridian = () => (
  <div style={{ display:'grid', gap:14, justifyItems:'center' }}>
    <svg viewBox="0 0 80 80" width="64" height="64">
      <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="40" cy="40" rx="14" ry="32" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="8" y1="40" x2="72" y2="40" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="40" cy="40" r="2.4" fill="currentColor" />
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SERIF, fontSize: 56, lineHeight:1, letterSpacing:'-0.025em' }}>
      Meridian
    </div>
    <div style={{ fontFamily: BRAND_FONT_MONO, fontSize: 10, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.55 }}>
      Banking · Est. 2026
    </div>
  </div>
);

// 2. ATLAS — bold sans, single glyph
const LogoAtlas = () => (
  <div style={{ display:'grid', gap:18, justifyItems:'center' }}>
    <div style={{
      width:68, height:68, borderRadius:'50%',
      background:'currentColor',
      display:'grid', placeItems:'center',
    }}>
      <svg viewBox="0 0 40 40" width="40" height="40">
        <circle cx="20" cy="20" r="13" fill="none" stroke="#0a0a0a" strokeWidth="1.6" />
        <path d="M7 20 Q 20 12 33 20 Q 20 28 7 20" fill="none" stroke="#0a0a0a" strokeWidth="1.6" />
        <line x1="20" y1="7" x2="20" y2="33" stroke="#0a0a0a" strokeWidth="1.6" />
      </svg>
    </div>
    <div style={{ fontFamily: BRAND_FONT_SANS, fontWeight:600, fontSize: 60, lineHeight:1, letterSpacing:'-0.045em' }}>
      Atlas
    </div>
  </div>
);

// 3. PASSAGE — wide letterspaced, doorway mark
const LogoPassage = () => (
  <div style={{ display:'grid', gap:16, justifyItems:'center' }}>
    <svg viewBox="0 0 80 80" width="60" height="60">
      <rect x="22" y="14" width="36" height="52" rx="18" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="40" y1="40" x2="40" y2="66" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="36" cy="42" r="1.6" fill="currentColor" />
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SANS, fontWeight:300, fontSize: 38, lineHeight:1, letterSpacing:'0.18em', textTransform:'uppercase' }}>
      Passage
    </div>
  </div>
);

// 4. TIDELINE — wave glyph, modern compound
const LogoTideline = () => (
  <div style={{ display:'grid', gap:14, justifyItems:'center' }}>
    <svg viewBox="0 0 100 36" width="84" height="32">
      <path d="M2 18 Q 14 4, 26 18 T 50 18 T 74 18 T 98 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M2 28 Q 14 22, 26 28 T 50 28 T 74 28 T 98 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.4" />
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SERIF, fontSize: 54, lineHeight:1, letterSpacing:'-0.025em' }}>
      Tideline
    </div>
  </div>
);

// 5. HARBOR — anchor-meets-arch, warm
const LogoHarbor = () => (
  <div style={{ display:'grid', gap:14, justifyItems:'center' }}>
    <svg viewBox="0 0 80 80" width="60" height="60">
      <path d="M14 56 Q 40 22 66 56" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="40" y1="22" x2="40" y2="62" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="40" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="30" y1="34" x2="50" y2="34" stroke="currentColor" strokeWidth="1.8" />
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SERIF, fontSize: 60, lineHeight:1, letterSpacing:'-0.03em' }}>
      Harbor
    </div>
  </div>
);

// 6. SOVRUN — coined, runway/sovereign
const LogoSovrun = () => (
  <div style={{ display:'grid', gap:14, justifyItems:'center' }}>
    <svg viewBox="0 0 80 30" width="80" height="30">
      <line x1="4" y1="22" x2="76" y2="22" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 4" />
      <path d="M14 22 L 28 8 L 32 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="8" r="2.5" fill="currentColor" />
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SANS, fontWeight:700, fontSize: 56, lineHeight:1, letterSpacing:'-0.04em' }}>
      Sovrun
    </div>
  </div>
);

// 7. FOUNDRY — heavy serif, anvil mark
const LogoFoundry = () => (
  <div style={{ display:'grid', gap:14, justifyItems:'center' }}>
    <svg viewBox="0 0 80 60" width="64" height="48">
      <path d="M14 22 L 66 22 L 58 32 L 22 32 Z" fill="currentColor" />
      <rect x="34" y="32" width="12" height="16" fill="currentColor" />
      <rect x="22" y="48" width="36" height="4" fill="currentColor" />
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SERIF, fontSize: 58, lineHeight:1, letterSpacing:'-0.02em' }}>
      Foundry
    </div>
  </div>
);

// 8. NORTHBOUND — directional, founder-y
const LogoNorthbound = () => (
  <div style={{ display:'grid', gap:14, justifyItems:'center' }}>
    <svg viewBox="0 0 80 80" width="56" height="56">
      <path d="M40 8 L 56 56 L 40 46 L 24 56 Z" fill="currentColor" />
      <text x="40" y="74" textAnchor="middle" fontFamily={BRAND_FONT_MONO} fontSize="9" letterSpacing="0.2em" fill="currentColor" opacity="0.5">N</text>
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SANS, fontWeight:500, fontSize: 44, lineHeight:1, letterSpacing:'-0.035em' }}>
      Northbound
    </div>
  </div>
);

// 9. LIGHTHOUSE — beam, warm trust
const LogoLighthouse = () => (
  <div style={{ display:'grid', gap:12, justifyItems:'center' }}>
    <svg viewBox="0 0 80 80" width="60" height="60">
      <path d="M30 70 L 34 28 L 46 28 L 50 70 Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="32" y="22" width="16" height="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="40" cy="16" r="3.5" fill="currentColor" />
      <line x1="40" y1="16" x2="14" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="16" x2="66" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="16" x2="6" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <line x1="40" y1="16" x2="74" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SERIF, fontStyle:'italic', fontSize: 52, lineHeight:1, letterSpacing:'-0.025em' }}>
      Lighthouse
    </div>
  </div>
);

// 10. KEYSTONE — arch with center stone
const LogoKeystone = () => (
  <div style={{ display:'grid', gap:14, justifyItems:'center' }}>
    <svg viewBox="0 0 90 60" width="72" height="48">
      <path d="M10 54 Q 10 18 45 18 Q 80 18 80 54" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M37 18 L 53 18 L 50 6 L 40 6 Z" fill="currentColor" />
      <line x1="10" y1="54" x2="80" y2="54" stroke="currentColor" strokeWidth="1.6" />
    </svg>
    <div style={{ fontFamily: BRAND_FONT_SANS, fontWeight:600, fontSize: 52, lineHeight:1, letterSpacing:'-0.03em' }}>
      Keystone
    </div>
  </div>
);

// ---------- Palettes ----------

const PALETTES = {
  ink:    { bg:'#0f0e0c', fg:'#f4f1ec', accent:'#d4a574', divider:'rgba(255,255,255,0.08)', muted:'rgba(244,241,236,0.55)' },
  cream:  { bg:'#f4f1ec', fg:'#1a1614', accent:'#c96442', divider:'rgba(0,0,0,0.08)', muted:'rgba(26,22,20,0.55)' },
  bone:   { bg:'#e8e3d8', fg:'#1a1614', accent:'#3d4a3a', divider:'rgba(0,0,0,0.1)', muted:'rgba(26,22,20,0.55)' },
  navy:   { bg:'#0e1a2b', fg:'#eef2f7', accent:'#7fb3d5', divider:'rgba(255,255,255,0.08)', muted:'rgba(238,242,247,0.55)' },
  sage:   { bg:'#dde2d5', fg:'#1f2a1a', accent:'#3d4a3a', divider:'rgba(0,0,0,0.1)', muted:'rgba(31,42,26,0.55)' },
  terra:  { bg:'#e9dfd2', fg:'#3a1f12', accent:'#a04a25', divider:'rgba(58,31,18,0.12)', muted:'rgba(58,31,18,0.55)' },
  slate:  { bg:'#1c2128', fg:'#e6e8eb', accent:'#a3b1bf', divider:'rgba(255,255,255,0.08)', muted:'rgba(230,232,235,0.55)' },
  paper:  { bg:'#fafaf7', fg:'#1a1614', accent:'#1a1614', divider:'rgba(0,0,0,0.08)', muted:'rgba(26,22,20,0.5)' },
  ocean:  { bg:'#0c2330', fg:'#e8f0f3', accent:'#5dbcb0', divider:'rgba(255,255,255,0.08)', muted:'rgba(232,240,243,0.55)' },
  amber:  { bg:'#1a1410', fg:'#f4ead8', accent:'#e0a14a', divider:'rgba(255,255,255,0.08)', muted:'rgba(244,234,216,0.55)' },
};

// ---------- Hero brand definitions ----------

const HERO_BRANDS = [
  { id:'meridian', Logo:LogoMeridian, palette:PALETTES.ink, mood:{
    tagline:'Banking without borders.',
    meta:'01 / Real-word',
    rationale:'Längengrad. Global, kartografisch, institutionell. Klingt wie eine 100-jährige Privatbank, ist aber on-chain.',
    tags:['Institutional','Global','Cartographic'],
    domains:[{tld:'.com',ok:false},{tld:'.bank',ok:true},{tld:'.co',ok:true}],
  }},
  { id:'atlas', Logo:LogoAtlas, palette:PALETTES.cream, mood:{
    tagline:'For founders who carry the world.',
    meta:'02 / Real-word',
    rationale:'Direkt aus dem Wedge (Stripe Atlas). Mythisch, founder-empathisch. Risiko: Stripe-Marken-Nähe — als Stärke nutzbar.',
    tags:['Mythic','Founder','Wedge-fit'],
    domains:[{tld:'.com',ok:false},{tld:'.bank',ok:true},{tld:'.co',ok:true},{tld:'.fi',ok:true}],
  }},
  { id:'passage', Logo:LogoPassage, palette:PALETTES.bone, mood:{
    tagline:'The way through.',
    meta:'03 / Real-word',
    rationale:'Open-door + Reise. Wer ausgesperrt wird, sucht eine Passage. Ruhig, vertrauenswürdig, leicht poetisch.',
    tags:['Access','Journey','Quiet'],
    domains:[{tld:'.com',ok:false},{tld:'.co',ok:true},{tld:'.bank',ok:true}],
  }},
  { id:'tideline', Logo:LogoTideline, palette:PALETTES.ocean, mood:{
    tagline:'Capital that moves with you.',
    meta:'04 / Compound',
    rationale:'Kapital fließt, die Linie zwischen alten und neuen Rails verschiebt sich. Ownable, modern, .com möglich.',
    tags:['Flow','Modern','Ownable'],
    domains:[{tld:'.com',ok:true},{tld:'.co',ok:true},{tld:'.fi',ok:true}],
  }},
  { id:'harbor', Logo:LogoHarbor, palette:PALETTES.terra, mood:{
    tagline:'A safe place to build.',
    meta:'05 / Real-word',
    rationale:'Sicherer Hafen. Warm, vault-vibe, klassisch. .com schwierig, aber Marke trägt jede TLD.',
    tags:['Safety','Warm','Classic'],
    domains:[{tld:'.com',ok:false},{tld:'.bank',ok:true},{tld:'.co',ok:true}],
  }},
  { id:'sovrun', Logo:LogoSovrun, palette:PALETTES.paper, mood:{
    tagline:'Sovereign by default.',
    meta:'06 / Coined',
    rationale:'Sovereign + Run/Runway. Kurz, ownable, .com sehr wahrscheinlich frei. Verbindet Souveränität und Bewegung.',
    tags:['Coined','Short','Sovereign'],
    domains:[{tld:'.com',ok:true},{tld:'.co',ok:true},{tld:'.app',ok:true}],
  }},
  { id:'foundry', Logo:LogoFoundry, palette:PALETTES.amber, mood:{
    tagline:'Where companies are forged.',
    meta:'07 / Real-word',
    rationale:'Wo Companies geschmiedet werden. Founder-empathisch, kraftvoll, ohne kitschig zu sein.',
    tags:['Founder','Strong','Crafted'],
    domains:[{tld:'.com',ok:false},{tld:'.co',ok:true},{tld:'.bank',ok:true}],
  }},
  { id:'northbound', Logo:LogoNorthbound, palette:PALETTES.sage, mood:{
    tagline:'One direction. Forward.',
    meta:'08 / Compound',
    rationale:'Bewegung + Ambition. Founders, die nach US-LLC migrieren, gehen northbound. Klar, direktional.',
    tags:['Direction','Ambition','Bold'],
    domains:[{tld:'.com',ok:true},{tld:'.co',ok:true},{tld:'.bank',ok:true}],
  }},
  { id:'lighthouse', Logo:LogoLighthouse, palette:PALETTES.navy, mood:{
    tagline:'Visible from anywhere.',
    meta:'09 / Real-word',
    rationale:'Orientierung, Sicherheit, sichtbar von weit her — aus Lagos, Karachi, Kyiv. Warm + institutionell.',
    tags:['Beacon','Trust','Warm'],
    domains:[{tld:'.com',ok:false},{tld:'.co',ok:true},{tld:'.bank',ok:true}],
  }},
  { id:'keystone', Logo:LogoKeystone, palette:PALETTES.slate, mood:{
    tagline:'The stone that holds the arch.',
    meta:'10 / Real-word',
    rationale:'Foundation + Schlüssel-Konnotation. Architektonisch, stabil, das Stück das alles zusammenhält.',
    tags:['Foundation','Architecture','Solid'],
    domains:[{tld:'.com',ok:false},{tld:'.co',ok:true},{tld:'.bank',ok:true}],
  }},
];

window.HERO_BRANDS = HERO_BRANDS;
window.BrandCard = BrandCard;
window.BRAND_FONT_SERIF = BRAND_FONT_SERIF;
window.BRAND_FONT_SANS = BRAND_FONT_SANS;
window.BRAND_FONT_MONO = BRAND_FONT_MONO;
