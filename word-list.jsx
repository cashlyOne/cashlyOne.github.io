// word-list.jsx — Pure word list, clustered, no graphics

const WORD_CLUSTERS = [
  {
    title: 'Horizon-Familie',
    subtitle: 'Aspirational, weiter Blick — wie Horizon, aber alternativ',
    words: [
      'Horizon','Vista','Skyline','Daybreak','Aurora','Dawn','Sunward','Eastward',
      'Outlook','Vantage','Aspect','Prospect','Skyward','Overlook','Vanguard',
      'Crest','Summit','Apex','Zenith','Highline','Ridgeline','Skyborne',
    ],
  },
  {
    title: 'Bewegung & Fluss',
    subtitle: 'Kapital, das fließt — Strömung, Bahn, Spur',
    words: [
      'Tideline','Current','Stream','Drift','Wake','Crosswind','Slipstream',
      'Mainline','Throughline','Throughway','Channel','Course','Conduit',
      'Tributary','Ferry','Caravan','Convoy','Transit','Outbound','Onward',
      'Forward','Onmove','Glide','Pilot','Tailwind','Updraft','Through',
    ],
  },
  {
    title: 'Open Door & Zugang',
    subtitle: 'Schwelle, Schlüssel, Passage — gegen das Aussperren',
    words: [
      'Passage','Threshold','Aperture','Gateway','Causeway','Causeline','Throughpass',
      'Open','Opening','Open Banking','Inlet','Entry','Doorway','Foyer','Vestibule',
      'Keyway','Latch','Hinge','Pivot','Crossing','Bridgehead','Throughline',
    ],
  },
  {
    title: 'Atlas, Globe, Geographie',
    subtitle: 'Global by default — kartographisch, planetar',
    words: [
      'Atlas','Meridian','Latitude','Longitude','Equator','Compass','Cardinal',
      'Globe','Terra','Continent','Cardinalis','Polaris','Mercator','Cartograph',
      'Bearing','Heading','Northbound','Northwise','Northstar','Truenorth',
      'Waypoint','Wayfinder','Wayward','Wayline','Pathline','Trailhead',
    ],
  },
  {
    title: 'Vault, Reserve, Foundation',
    subtitle: 'Sicherheit, Speicher, Stabilität',
    words: [
      'Harbor','Anchor','Mooring','Berth','Quay','Pier','Jetty','Dock',
      'Reserve','Vault','Treasury','Coffer','Stronghold','Bastion','Bulwark',
      'Keystone','Cornerstone','Bedrock','Granite','Basalt','Bedrock',
      'Foundry','Forge','Anvil','Mason','Mainstay','Ballast','Plinth',
    ],
  },
  {
    title: 'Licht, Signal, Orientierung',
    subtitle: 'Sichtbar von weit her — Beacon, Lighthouse',
    words: [
      'Lighthouse','Beacon','Lantern','Lampline','Lumen','Lucent','Solis',
      'Aurora','Dayline','Glow','Spark','Kindle','Ember','Flare',
      'Northstar','Polaris','Trueline','Truepath','Truehead','Brightpoint',
    ],
  },
  {
    title: 'Frei, leicht, einfach',
    subtitle: 'Sovereignty, Leichtigkeit, ungebunden',
    words: [
      'Sovrun','Sovryn','Sovereign','Free','Frelo','Liber','Libera','Liberty',
      'Ease','Easely','Plainline','Plain','Neat','Lite','Lyte','Brisk',
      'Levity','Loose','Unbound','Unspan','Unblock','Untether','Unfetter',
      'Looselead','Open','Openline','Clearway','Clearline','Cleartrack',
    ],
  },
  {
    title: 'Latein, Griechisch, klassisch',
    subtitle: 'Founder-y, institutionell, multi-lingual',
    words: [
      'Statera','Solis','Verra','Veritas','Praxis','Kairos','Kosmos','Polis',
      'Civis','Civitas','Forum','Forumline','Capita','Census','Annex',
      'Lumina','Astra','Astralis','Aeternum','Origo','Orbis','Fortis',
      'Fortuna','Patria','Patrius','Mundo','Mundi','Mundial','Pangea',
    ],
  },
  {
    title: 'Spanisch, Französisch, Mehrsprachig',
    subtitle: 'Global aussprechbar, weiche Konsonanten',
    words: [
      'Salida','Pasaje','Puente','Camino','Vía','Paso','Mira','Adelante',
      'Voyage','Voie','Passe','Cours','Courant','Libre','Sortie','Avant',
      'Avante','Adelar','Mar','Marea','Costa','Llano','Pampa','Norte',
    ],
  },
  {
    title: 'Coined / Invented',
    subtitle: 'Komplett neu, kurz, ownable, .com-freundlich',
    words: [
      'Sovrun','Frelo','Verra','Kintra','Brava','Tala','Cova','Lunar',
      'Norra','Verro','Strela','Vala','Mira','Calo','Onda','Nira',
      'Volta','Sentra','Centra','Latera','Klara','Polis','Nori','Adra',
      'Ovra','Ferra','Loma','Pana','Quora','Sera','Tessa','Veris',
      'Aris','Ero','Ito','Oda','Uvo','Vela','Yara','Zera',
    ],
  },
  {
    title: 'Founder-empathisch',
    subtitle: 'Cohort, Werkzeug, Begleiter — auf eurer Seite',
    words: [
      'Foundry','Forge','Workshop','Atelier','Studio','Bench','Bureau',
      'Kindred','Kintra','Cohort','Crew','Caravan','Council','Circle',
      'Companion','Escort','Aide','Allied','Ally','Backline','Backup',
      'Mainline','Standby','Standfast','Truepath','Truehand','Truewise',
    ],
  },
  {
    title: 'Institutionell-klassisch',
    subtitle: 'Klingt wie 100-jährige Privatbank',
    words: [
      'Meridian','Cardinal','Sterling','Heritage','Legacy','Tribune','Charter',
      'Covenant','Concord','Accord','Alliance','Federal','Federate','Capital',
      'Citizen','Republic','Continental','Confederate','Standard','Standardline',
      'Premier','Prime','Principal','Provident','Prudent','Prudential','Mutual',
    ],
  },
];

window.WORD_CLUSTERS = WORD_CLUSTERS;

const WordListPanel = () => {
  const total = WORD_CLUSTERS.reduce((n,c) => n + c.words.length, 0);
  return (
    <div style={{
      width: 1100, padding:'56px 64px',
      background:'#fafaf7', color:'#1a1614',
      fontFamily: window.BRAND_FONT_SANS,
      borderRadius: 4,
    }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:8 }}>
        <h2 style={{ fontFamily: window.BRAND_FONT_SERIF, fontSize:64, lineHeight:1, letterSpacing:'-0.025em', margin:0, fontWeight:400 }}>
          Mehr Wörter, pur.
        </h2>
        <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.5 }}>
          {total} Namen · 12 Cluster
        </div>
      </div>
      <div style={{ fontSize:14, color:'rgba(26,22,20,0.6)', maxWidth:680, marginBottom:48, lineHeight:1.55 }}>
        Reine Wortliste, geclustert nach Vibe. Keine Bilder, keine Begründungen — nur Material zum Querlesen.
        <em> Horizon</em> sitzt in der ersten Spalte — die ganze Familie drumherum als Vergleichspunkt.
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px 56px' }}>
        {WORD_CLUSTERS.map(cluster => (
          <div key={cluster.title}>
            <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(26,22,20,0.5)', marginBottom:6 }}>
              {cluster.title}
            </div>
            <div style={{ fontFamily: window.BRAND_FONT_SERIF, fontStyle:'italic', fontSize:15, color:'rgba(26,22,20,0.6)', marginBottom:18, lineHeight:1.4 }}>
              {cluster.subtitle}
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'10px 18px', columnRule:'1px solid rgba(0,0,0,0.06)' }}>
              {cluster.words.map(w => (
                <span key={w+cluster.title} style={{
                  fontFamily: window.BRAND_FONT_SERIF,
                  fontSize: 22,
                  letterSpacing:'-0.01em',
                  lineHeight:1.15,
                  color:'#1a1614',
                }}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.WordListPanel = WordListPanel;
