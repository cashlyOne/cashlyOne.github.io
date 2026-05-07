// more-like-these.jsx — More names in the Gateway / Horizon / Polaris / Lyte vibe

const MORE_LIKE_CLUSTERS = [
  {
    seed: 'Gateway',
    note: 'Klare Funktion · Open Door · Zugang',
    words: [
      'Gateway','Pathway','Causeway','Throughway','Crossway','Driveway','Highway',
      'Fairway','Skyway','Seaway','Airway','Greenway','Walkway','Speedway',
      'Portway','Mainway','Throughline','Mainline','Frontline','Trueline',
      'Crossline','Sightline','Skyline','Lifeline','Coastline','Headline',
      'Throughgate','Foregate','Outgate','Highgate','Northgate','Westgate',
      'Sungate','Mooringate','Quayside','Riverside','Eastside','Bayside',
    ],
  },
  {
    seed: 'Horizon',
    note: 'Aspirational · weiter Blick · was kommt',
    words: [
      'Horizon','Skyline','Vista','Outlook','Vantage','Lookout','Overlook',
      'Prospect','Aspect','Foresight','Insight','Vision','Visage','Panorama',
      'Crestline','Ridgeline','Summit','Apex','Zenith','Pinnacle','Peakline',
      'Daybreak','Daylight','Dayspring','Dawnline','Sunrise','Sundown','Eastline',
      'Highline','Skyborne','Skyhold','Skyfield','Skycap','Wideview','Farview',
      'Longview','Brightview','Clearview','Deepview','Truelook','Sweepline',
    ],
  },
  {
    seed: 'Polaris',
    note: 'Stern · Navigation · Latein/Griechisch · klassisch',
    words: [
      'Polaris','Orion','Lyra','Vega','Sirius','Altair','Arcturus','Antares',
      'Cassiopeia','Andromeda','Cygnus','Pegasus','Phoenix','Aquila','Auriga',
      'Aurora','Astra','Astralis','Astrella','Stellar','Stellaris','Constella',
      'Solaris','Solis','Solara','Solace','Lumen','Lumina','Luminar','Lucent',
      'Selene','Helios','Apollo','Atlas','Cosmos','Kosmos','Nova','Supernova',
      'Meridian','Cardinal','Boreas','Zephyr','Zephyrus','Borealis','Australis',
      'Veritas','Aequitas','Libertas','Fortuna','Aeternum','Aeternitas','Origo',
    ],
  },
  {
    seed: 'Lyte',
    note: 'Coined · kreativ verfremdet · kurz · ownable',
    words: [
      'Lyte','Lyft','Lyne','Lyra','Lytra','Lyric','Lytic',
      'Bryte','Bryt','Brytly','Brisk','Briskly','Brio','Briolite',
      'Klyr','Klyne','Klera','Klera','Klairo','Kleer','Klean',
      'Cyrra','Cyran','Cyro','Cyna','Cymo','Cyne',
      'Vyne','Vyra','Vyro','Vyse','Vyst','Vylo',
      'Nyte','Nyra','Nyro','Nytra','Nyx','Nylo',
      'Pyre','Pyra','Pyro','Pyrus','Pylon','Pylos',
      'Ryze','Ryzen','Ryle','Ryla','Rylo','Rys',
      'Skye','Skyr','Skyre','Skyra','Skylo','Skyte',
      'Glyph','Glym','Glyn','Glyo','Glyra','Glyte',
      'Onyx','Onyr','Onyo','Onyra','Onyl','Onys',
    ],
  },
  {
    seed: 'Hybrid: Aspirational + Coined',
    note: 'Mischung der vier Vibes — wo es Zwischenraum gibt',
    words: [
      'Polara','Polair','Polaire','Polestar','Truestar','Northstar','Daystar',
      'Skyra','Skyre','Skyline','Skylark','Skyhold','Skyharbor','Skybound',
      'Vantra','Vantra','Vista','Vistara','Vistalia','Vystara',
      'Lyra','Lyrae','Lyron','Lytica','Brytica','Solera','Solera',
      'Horyzon','Horizen','Horyz','Norizon','Vorizon','Forizon',
      'Gateway','Gatewise','Gatehold','Gatemark','Throughgate','Bytegate',
      'Aurora','Aurorae','Auroral','Auroran','Aurea','Aureus',
    ],
  },
];

window.MORE_LIKE_CLUSTERS = MORE_LIKE_CLUSTERS;

const MoreLikeThesePanel = () => {
  const total = MORE_LIKE_CLUSTERS.reduce((n,c) => n + c.words.length, 0);
  return (
    <div style={{
      width: 1100, padding:'56px 64px',
      background:'#0f0e0c', color:'#f4f1ec',
      fontFamily: window.BRAND_FONT_SANS,
      borderRadius: 4,
    }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:8 }}>
        <h2 style={{ fontFamily: window.BRAND_FONT_SERIF, fontSize:64, lineHeight:1, letterSpacing:'-0.025em', margin:0, fontWeight:400 }}>
          More like these.
        </h2>
        <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.5 }}>
          {total} Namen · 5 Cluster
        </div>
      </div>
      <div style={{ fontSize:14, color:'rgba(244,241,236,0.6)', maxWidth:760, marginBottom:16, lineHeight:1.55 }}>
        Du magst <em style={{fontFamily:window.BRAND_FONT_SERIF, fontStyle:'italic'}}>Gateway</em>,
        <em style={{fontFamily:window.BRAND_FONT_SERIF, fontStyle:'italic'}}> Horizon</em>,
        <em style={{fontFamily:window.BRAND_FONT_SERIF, fontStyle:'italic'}}> Polaris</em>,
        <em style={{fontFamily:window.BRAND_FONT_SERIF, fontStyle:'italic'}}> Lyte</em> —
        gemeinsamer Geschmack: <strong style={{color:'#f4f1ec'}}>klare Substantive mit großer Bedeutung</strong>,
        oft aus Himmel/Navigation/Licht, manchmal kreativ verfremdet. Pro Seed ein Cluster + ein Hybrid-Cluster.
      </div>

      <div style={{ display:'grid', gap:48, marginTop:40 }}>
        {MORE_LIKE_CLUSTERS.map(cluster => (
          <div key={cluster.seed} style={{
            display:'grid', gridTemplateColumns:'200px 1fr', gap:32,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            <div>
              <div style={{ fontFamily: window.BRAND_FONT_MONO, fontSize:9.5, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(244,241,236,0.4)', marginBottom:8 }}>
                Seed
              </div>
              <div style={{ fontFamily: window.BRAND_FONT_SERIF, fontStyle:'italic', fontSize:36, lineHeight:1, letterSpacing:'-0.02em', marginBottom:12 }}>
                {cluster.seed}
              </div>
              <div style={{ fontSize:12, color:'rgba(244,241,236,0.55)', lineHeight:1.5 }}>
                {cluster.note}
              </div>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'10px 22px', alignContent:'flex-start' }}>
              {cluster.words.map((w,i) => (
                <span key={w+cluster.seed+i} style={{
                  fontFamily: window.BRAND_FONT_SERIF,
                  fontSize: 24,
                  letterSpacing:'-0.01em',
                  lineHeight:1.1,
                  color: w === cluster.seed ? '#d4a574' : '#f4f1ec',
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

window.MoreLikeThesePanel = MoreLikeThesePanel;
