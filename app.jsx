// app.jsx — Brand naming exploration

const { useState } = React;

// ---------- Long list: 30 additional names ----------

const LONG_LIST = [
  // Real-word — institutional/global
  { name:'Solace', archetype:'Real-word', category:'Trust', meaning:'Trost, Zuflucht. Für Founder, die gerade eine Closure-Notice bekommen haben — emotionale Direktansprache.', strengths:['Empathisch','Memorable','Soft'], domain:'.co' },
  { name:'Compass', archetype:'Real-word', category:'Direction', meaning:'Orientierung im globalen Kapitalsystem. Founder-y, klar, etwas overused in Fintech.', strengths:['Clear','Founder'], domain:'.co' },
  { name:'Anchor', archetype:'Real-word', category:'Vault', meaning:'Stabilität trotz turbulenter Geo. Auch: USD als Anker. Schon von Crypto-Lending genommen — Vorsicht.', strengths:['Stable','Symbolic'], domain:'.fi' },
  { name:'Beacon', archetype:'Real-word', category:'Direction', meaning:'Sichtbarkeit, Signal, Orientierung. Klassischer Bank-Name, fühlt sich seriös und warm an.', strengths:['Trust','Warm'], domain:'.co' },
  { name:'Reserve', archetype:'Real-word', category:'Vault', meaning:'Federal Reserve-Echo, Speicher, Treasury. Schon stark belegt (Reserve Trust).', strengths:['Institutional'], domain:'.com taken' },
  { name:'Threshold', archetype:'Real-word', category:'Open Door', meaning:'Schwelle, Übertritt — von alter Bankenwelt zu neuer. Lang aber poetisch.', strengths:['Symbolic','Poetic'], domain:'.co' },
  { name:'Current', archetype:'Real-word', category:'Flow', meaning:'Strömung + Account-Sinn ("current account"). Doppeldeutig, gut.', strengths:['Pun','Flow'], domain:'.com taken' },
  { name:'Horizon', archetype:'Real-word', category:'Global', meaning:'Was kommt, weiter Blick. Founder-y. Schon häufig in Fintech.', strengths:['Aspirational'], domain:'.co' },
  { name:'Fortuna', archetype:'Real-word', category:'Mythic', meaning:'Römische Glücksgöttin + multi-language. Klingt nach Investmentbank.', strengths:['Classical','Global'], domain:'.co' },
  { name:'Citadel', archetype:'Real-word', category:'Vault', meaning:'Festung. Sicherheit, aber von Hedge Fund belegt.', strengths:['Strong'], domain:'taken' },

  // Coined / invented
  { name:'Onward', archetype:'Real-word', category:'Direction', meaning:'Vorwärts. Founder-Empathie, Bewegung. Kurz, .com schwer.', strengths:['Action','Founder'], domain:'.co' },
  { name:'Frelo', archetype:'Coined', category:'Free', meaning:'Free + Flow. Coined, kurz, ownable. Klingt fast spanisch — global friendly.', strengths:['Coined','Free','Short'], domain:'.com possible' },
  { name:'Volta', archetype:'Real-word', category:'Movement', meaning:'Italienisch für "Wendung", auch Volt — Energie. Bewegung + Power.', strengths:['Movement','Global'], domain:'.co' },
  { name:'Lumen', archetype:'Real-word', category:'Light', meaning:'Lichteinheit. Klar, klein, ownable. Schon von Stellar/Lumen Crypto belegt — riskant.', strengths:['Light','Clean'], domain:'taken' },
  { name:'Aperture', archetype:'Real-word', category:'Open Door', meaning:'Öffnung. Foto-Welt-Konnotation, aber semantisch perfekt für "Zugang".', strengths:['Open','Distinctive'], domain:'.co' },
  { name:'Voyage', archetype:'Real-word', category:'Journey', meaning:'Reise, mehrsprachig (FR/EN). Founder-Reise zu USA. Etwas tourism-coded.', strengths:['Journey','Multi-lang'], domain:'.co' },
  { name:'Frontier', archetype:'Real-word', category:'Direction', meaning:'Grenze, neues Gebiet. Klassisch US-amerikanisch, founder-y. Banking schon belegt.', strengths:['Bold','Pioneer'], domain:'.com taken' },
  { name:'Outpost', archetype:'Real-word', category:'Foundation', meaning:'Vorposten — für Founder die remote eine US-Präsenz aufbauen. Gut für die Wedge-Story.', strengths:['Wedge-fit','Place'], domain:'.co' },
  { name:'Free.', archetype:'Real-word', category:'Free', meaning:'Pure Freiheit als Statement. .com unmöglich aber "Free Banking" als Headline trägt.', strengths:['Bold','Direct'], domain:'taken' },
  { name:'Ease', archetype:'Real-word', category:'Free', meaning:'Leichtigkeit. Ein-Wort-Brand, kurz. Eher consumer als business.', strengths:['Soft','Short'], domain:'.co' },

  // Compound
  { name:'Northwise', archetype:'Compound', category:'Direction', meaning:'North + Wise. Direktional + klug. Wise-Echo evtl. zu nah.', strengths:['Direction','Smart'], domain:'.com possible' },
  { name:'Openline', archetype:'Compound', category:'Open Door', meaning:'Open + Line. Offene Verbindung, offene Linie für Kapital. Modern, klar.', strengths:['Open','Modern'], domain:'.com possible' },
  { name:'Statera', archetype:'Latin', category:'Vault', meaning:'Lateinisch für Waage/Balance. Klingt institutionell, mehrsprachig friedlich.', strengths:['Classical','Balance'], domain:'.com possible' },
  { name:'Capita', archetype:'Latin', category:'Vault', meaning:'Lateinische Wurzel von Capital. Direkt, klassisch, evtl. zu generisch.', strengths:['Direct','Classical'], domain:'taken' },
  { name:'Salida', archetype:'Spanish', category:'Open Door', meaning:'Spanisch für "Ausgang/Lösung". Wedge-relevant für LATAM-Founder. Doppeldeutig.', strengths:['Multi-lang','Exit'], domain:'.com possible' },
  { name:'Mira', archetype:'Real-word', category:'Direction', meaning:'Spanisch "schau", Lateinisch "wunderbar". Kurz, weiblich-codiert, multi-lang.', strengths:['Multi-lang','Short'], domain:'taken' },
  { name:'Kairos', archetype:'Greek', category:'Direction', meaning:'Griechisch für "der richtige Moment". Für Founder, deren Moment jetzt ist.', strengths:['Mythic','Timing'], domain:'.co' },
  { name:'Praxis', archetype:'Greek', category:'Foundation', meaning:'Griechisch für "Handlung/Praxis". Founder-y, etwas akademisch.', strengths:['Action','Smart'], domain:'taken' },
  { name:'Kintra', archetype:'Coined', category:'Compound', meaning:'Kin + Treasury. Familie/Cohort + Schatz. Coined, ownable.', strengths:['Coined','Warm'], domain:'.com possible' },
  { name:'Verra', archetype:'Coined', category:'Trust', meaning:'Veritas/Verify + Terra. Wahrheit + Erde. Kurz, ownable, klingt institutionell.', strengths:['Coined','Trust'], domain:'.com possible' },
];

window.LONG_LIST = LONG_LIST;

// ---------- Strategy intro panel ----------

const StrategyIntro = () => (
  <div style={{
    width: 1100, padding:'56px 64px',
    background:'#1a1614', color:'#f4f1ec',
    fontFamily: window.BRAND_FONT_SANS,
    borderRadius: 4,
  }}>
    <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', opacity:0.5, marginBottom:24 }}>
      Brand Naming · On-chain Banking
    </div>
    <h1 style={{
      fontFamily: window.BRAND_FONT_SERIF, fontSize:72, lineHeight:1.02, letterSpacing:'-0.025em',
      margin:0, fontWeight:400, maxWidth:'90%',
    }}>
      40 Namen für die einzige Bank, die Atlas-Founder aus 17 Ländern nicht aussperrt.
    </h1>
    <div style={{
      marginTop:40, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:32,
      borderTop:'1px solid rgba(255,255,255,0.12)', paddingTop:32,
    }}>
      {[
        { label:'Tone', value:'Institutionell · Global · Warm' },
        { label:'Crypto-Visibility', value:'Komplett unsichtbar' },
        { label:'Audience-Signal', value:'„Endlich nicht ausgesperrt." „Seriös für Stripe."' },
        { label:'Metaphors', value:'Open Door · Flow · Atlas · Vault' },
      ].map(s => (
        <div key={s.label}>
          <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.5, marginBottom:8 }}>
            {s.label}
          </div>
          <div style={{ fontSize:15, lineHeight:1.45 }}>{s.value}</div>
        </div>
      ))}
    </div>
    <div style={{
      marginTop:40, fontSize:15, lineHeight:1.55, color:'rgba(244,241,236,0.7)', maxWidth:780,
    }}>
      <span style={{ color:'#f4f1ec', fontWeight:500 }}>Strategy.</span> Crypto bleibt unter der Haube. Der Brand muss aussehen, als hätte er ein
      US-Banking-Charter — sonst überzeugt er Stripe-Payouts nicht. Gleichzeitig muss er Founder in Lagos, Karachi und Kyiv signalisieren:
      hier verstehen sie eure Situation. Drei Achsen: <em>Vertrauen · Zugang · Bewegung</em>. Top 10 unten als Logo-Lockup, danach 30 weitere als Long List.
    </div>
  </div>
);

// ---------- Long-list table ----------

const LongListTable = () => (
  <div style={{
    width: 1100, padding:'48px 56px',
    background:'#fafaf7', color:'#1a1614',
    fontFamily: window.BRAND_FONT_SANS,
    borderRadius: 4,
  }}>
    <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:8 }}>
      <h2 style={{ fontFamily: window.BRAND_FONT_SERIF, fontSize:48, lineHeight:1, letterSpacing:'-0.02em', margin:0, fontWeight:400 }}>
        Long list — 30 weitere Optionen
      </h2>
      <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.5 }}>
        11 — 40
      </div>
    </div>
    <div style={{ fontSize:14, color:'rgba(26,22,20,0.6)', maxWidth:600, marginBottom:28, lineHeight:1.5 }}>
      Sortiert grob nach Archetyp. Domain-Status ist eine Schätzung — vor jedem Shortlist-Move per WHOIS prüfen.
    </div>
    <div style={{ display:'grid', gridTemplateColumns:'180px 110px 130px 1fr 240px', gap:0, fontSize:13 }}>
      {/* header */}
      {['Name','Archetyp','Kategorie','Begründung','Tags · Domain'].map((h,i) => (
        <div key={h} style={{
          fontFamily: window.BRAND_FONT_MONO, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase',
          color:'rgba(26,22,20,0.5)', padding:'10px 12px 12px 0',
          borderBottom:'1px solid rgba(0,0,0,0.15)',
          paddingLeft: i===0 ? 0 : 14,
        }}>{h}</div>
      ))}
      {LONG_LIST.map((row, idx) => (
        <React.Fragment key={row.name}>
          <div style={{ padding:'18px 12px 18px 0', borderBottom:'1px solid rgba(0,0,0,0.06)', fontFamily: window.BRAND_FONT_SERIF, fontSize:24, letterSpacing:'-0.015em', lineHeight:1.05 }}>
            <span style={{ fontFamily:window.BRAND_FONT_MONO, fontSize:10, opacity:0.4, marginRight:8 }}>{String(idx+11).padStart(2,'0')}</span>
            {row.name}
          </div>
          <div style={{ padding:'18px 14px', borderBottom:'1px solid rgba(0,0,0,0.06)', fontSize:12, color:'rgba(26,22,20,0.7)' }}>
            {row.archetype}
          </div>
          <div style={{ padding:'18px 14px', borderBottom:'1px solid rgba(0,0,0,0.06)', fontSize:12, color:'rgba(26,22,20,0.7)' }}>
            {row.category}
          </div>
          <div style={{ padding:'18px 14px', borderBottom:'1px solid rgba(0,0,0,0.06)', fontSize:13, lineHeight:1.5, color:'rgba(26,22,20,0.85)' }}>
            {row.meaning}
          </div>
          <div style={{ padding:'18px 14px', borderBottom:'1px solid rgba(0,0,0,0.06)', display:'flex', flexDirection:'column', gap:6 }}>
            <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
              {row.strengths.map(t => (
                <span key={t} style={{
                  fontFamily: window.BRAND_FONT_MONO, fontSize:9, letterSpacing:'0.05em', textTransform:'uppercase',
                  padding:'2px 6px', borderRadius:2,
                  border:'1px solid rgba(0,0,0,0.12)', color:'rgba(26,22,20,0.65)',
                }}>{t}</span>
              ))}
            </div>
            <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:10, letterSpacing:'0.04em', color: row.domain.includes('possible') || row.domain==='.co' || row.domain==='.fi' ? '#3d6a3d' : 'rgba(26,22,20,0.5)' }}>
              {row.domain}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
    <div style={{
      marginTop:32, padding:'20px 24px', background:'#1a1614', color:'#f4f1ec',
      fontSize:13, lineHeight:1.6, borderRadius:3, display:'grid', gap:8,
    }}>
      <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.5 }}>
        Empfehlung — Shortlist
      </div>
      <div>
        <strong style={{ fontFamily: window.BRAND_FONT_SERIF, fontSize:18, fontWeight:400, fontStyle:'italic' }}>Tideline</strong>,
        {' '}<strong style={{ fontFamily: window.BRAND_FONT_SERIF, fontSize:18, fontWeight:400, fontStyle:'italic' }}>Sovrun</strong>,
        {' '}<strong style={{ fontFamily: window.BRAND_FONT_SERIF, fontSize:18, fontWeight:400, fontStyle:'italic' }}>Northbound</strong>,
        {' '}<strong style={{ fontFamily: window.BRAND_FONT_SERIF, fontSize:18, fontWeight:400, fontStyle:'italic' }}>Meridian</strong>
        {' '}— jeweils ownable, .com plausibel oder Marke trägt jede TLD, kein Crypto-Smell, alle drei Tonalitäten erfüllt.
        {' '}<strong style={{ fontFamily: window.BRAND_FONT_SERIF, fontSize:18, fontWeight:400, fontStyle:'italic' }}>Atlas</strong>
        {' '}wäre der mutige Move — direkter Wedge-Hook, aber Stripe-Markenkonflikt prüfen.
      </div>
    </div>
  </div>
);

// ---------- Main App ----------

const App = () => {
  return (
    <DesignCanvas>
      <DCSection id="strategy" title="Strategy" subtitle="Naming-Brief & Achsen">
        <DCArtboard id="brief" label="Brief" width={1100} height={520}>
          <StrategyIntro />
        </DCArtboard>
      </DCSection>

      <DCSection id="hero" title="Top 10 — Logo Lockups" subtitle="Kuratiert · Real-word, Coined, Compound — alle drei Achsen abgedeckt">
        {window.HERO_BRANDS.map((b, i) => (
          <DCArtboard
            key={b.id}
            id={b.id}
            label={`${String(i+1).padStart(2,'0')} · ${b.id.charAt(0).toUpperCase()+b.id.slice(1)}`}
            width={420}
            height={520}
          >
            <BrandCard palette={b.palette} mood={b.mood}>
              <b.Logo />
            </BrandCard>
          </DCArtboard>
        ))}
      </DCSection>

      <DCSection id="longlist" title="Long List" subtitle="30 weitere Namen mit Begründung & Domain-Schätzung">
        <DCArtboard id="table" label="Tabelle 11–40" width={1100} height={1820}>
          <LongListTable />
        </DCArtboard>
      </DCSection>

      <DCSection id="wordlist" title="Wortliste" subtitle="Reine Namen, geclustert — keine Bilder, viel Material">
        <DCArtboard id="words" label="Wortliste · 12 Cluster" width={1100} height={2400}>
          <window.WordListPanel />
        </DCArtboard>
      </DCSection>

      <DCSection id="morelike" title="More like Gateway / Horizon / Polaris / Lyte" subtitle="Mehr Namen im selben Geschmack — pro Seed ein Cluster">
        <DCArtboard id="morewords" label="More like these" width={1100} height={2200}>
          <window.MoreLikeThesePanel />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
