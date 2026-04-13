import { useState, useEffect, useRef } from "react";

// ─── SVG ITEM ART TEMPLATES ───────────────────────────────────────────────────
const ItemArt = ({ type, dark, accent, size = 180 }) => {
  const s = dark ? "#f0ebe0" : "#1a1714";
  const bg = dark ? "#221f1a" : "#f2ede4";
  const c = accent;
  const d = size;
  if (type === "espresso") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <ellipse cx="90" cy="110" rx="42" ry="16" fill="none" stroke={c} strokeWidth="1"/>
      <rect x="48" y="70" width="84" height="40" rx="3" fill="none" stroke={s} strokeWidth="1"/>
      <rect x="58" y="60" width="64" height="12" rx="2" fill="none" stroke={s} strokeWidth="1"/>
      <ellipse cx="90" cy="112" rx="28" ry="8" fill={c} opacity="0.15"/>
      <ellipse cx="90" cy="112" rx="20" ry="5" fill={c} opacity="0.25"/>
      <path d="M132 90 Q148 90 148 100 Q148 110 132 110" fill="none" stroke={s} strokeWidth="1.5"/>
      <path d="M80 50 Q82 42 80 34" stroke={c} strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M90 48 Q93 38 90 28" stroke={c} strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M100 50 Q102 42 100 34" stroke={c} strokeWidth="1" fill="none" opacity="0.5"/>
      <text x="90" y="155" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">espresso</text>
    </svg>
  );
  if (type === "flatwhite") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <ellipse cx="90" cy="105" rx="50" ry="20" fill="none" stroke={s} strokeWidth="1"/>
      <rect x="40" y="85" width="100" height="40" rx="3" fill="none" stroke={s} strokeWidth="1"/>
      <ellipse cx="90" cy="107" rx="36" ry="11" fill={c} opacity="0.12"/>
      <path d="M70 100 Q80 93 90 100 Q100 107 112 98" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M75 104 Q85 97 90 103 Q96 109 108 101" stroke="white" strokeWidth="1" fill="none" opacity="0.35"/>
      <path d="M140 95 Q158 95 158 105 Q158 115 140 115" fill="none" stroke={s} strokeWidth="1.5"/>
      <ellipse cx="90" cy="85" rx="50" ry="6" fill={bg} stroke={s} strokeWidth="0.5"/>
      <text x="90" y="155" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">flat white</text>
    </svg>
  );
  if (type === "coldbrew") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <rect x="60" y="45" width="60" height="90" rx="4" fill="none" stroke={s} strokeWidth="1"/>
      <rect x="55" y="42" width="70" height="10" rx="2" fill="none" stroke={s} strokeWidth="1"/>
      <rect x="63" y="55" width="54" height="70" rx="2" fill={c} opacity="0.08"/>
      <line x1="63" y1="95" x2="117" y2="95" stroke={c} strokeWidth="0.5" opacity="0.4"/>
      <circle cx="70" cy="70" r="2" fill={c} opacity="0.3"/><circle cx="85" cy="80" r="1.5" fill={c} opacity="0.25"/>
      <circle cx="105" cy="65" r="2" fill={c} opacity="0.3"/><circle cx="98" cy="85" r="1" fill={c} opacity="0.2"/>
      <rect x="70" y="135" width="40" height="6" rx="1" fill="none" stroke={s} strokeWidth="0.8"/>
      <text x="90" y="155" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">cold brew</text>
    </svg>
  );
  if (type === "pourover") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <path d="M60 55 L72 105 L108 105 L120 55 Z" fill="none" stroke={s} strokeWidth="1"/>
      <path d="M64 65 L116 65" stroke={c} strokeWidth="0.5" opacity="0.4"/>
      <path d="M67 75 L113 75" stroke={c} strokeWidth="0.5" opacity="0.35"/>
      <rect x="68" y="105" width="44" height="5" fill="none" stroke={s} strokeWidth="0.8"/>
      <line x1="90" y1="110" x2="90" y2="125" stroke={s} strokeWidth="1"/>
      <ellipse cx="90" cy="132" rx="28" ry="12" fill="none" stroke={s} strokeWidth="1"/>
      <ellipse cx="90" cy="132" rx="20" ry="7" fill={c} opacity="0.12"/>
      <path d="M78 48 Q82 38 80 28" stroke={c} strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M90 46 Q94 34 91 22" stroke={c} strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M102 48 Q106 38 103 28" stroke={c} strokeWidth="1" fill="none" opacity="0.5"/>
      <text x="90" y="158" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">pour over</text>
    </svg>
  );
  if (type === "cortado") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <rect x="62" y="60" width="56" height="65" rx="3" fill="none" stroke={s} strokeWidth="1"/>
      <rect x="58" y="57" width="64" height="9" rx="2" fill="none" stroke={s} strokeWidth="1"/>
      <ellipse cx="90" cy="75" rx="22" ry="6" fill={c} opacity="0.2"/>
      <ellipse cx="90" cy="75" rx="14" ry="3.5" fill={c} opacity="0.3"/>
      <rect x="62" y="85" width="56" height="40" fill={c} opacity="0.06"/>
      <path d="M118 80 Q132 80 132 88 Q132 96 118 96" fill="none" stroke={s} strokeWidth="1.2"/>
      <text x="90" y="155" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">cortado</text>
    </svg>
  );
  if (type === "siphon") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <ellipse cx="90" cy="48" rx="30" ry="22" fill="none" stroke={s} strokeWidth="1"/>
      <ellipse cx="90" cy="48" rx="20" ry="13" fill={c} opacity="0.1"/>
      <line x1="90" y1="70" x2="90" y2="95" stroke={s} strokeWidth="1.5"/>
      <ellipse cx="90" cy="118" rx="36" ry="26" fill="none" stroke={s} strokeWidth="1"/>
      <ellipse cx="90" cy="118" rx="26" ry="17" fill={c} opacity="0.1"/>
      <path d="M126 112 Q148 112 148 118 Q148 124 126 124" fill="none" stroke={s} strokeWidth="1"/>
      <circle cx="90" cy="90" r="5" fill="none" stroke={c} strokeWidth="1"/>
      <text x="90" y="158" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">siphon</text>
    </svg>
  );
  if (type === "croissant") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <path d="M50 110 Q60 70 90 65 Q120 70 130 110 Q110 95 90 92 Q70 95 50 110Z" fill="none" stroke={s} strokeWidth="1"/>
      <path d="M55 108 Q65 78 90 73" stroke={c} strokeWidth="0.8" fill="none" opacity="0.4"/>
      <path d="M125 108 Q115 78 90 73" stroke={c} strokeWidth="0.8" fill="none" opacity="0.4"/>
      <path d="M58 104 Q63 85 80 78" stroke={c} strokeWidth="0.5" fill="none" opacity="0.3"/>
      <path d="M122 104 Q117 85 100 78" stroke={c} strokeWidth="0.5" fill="none" opacity="0.3"/>
      <ellipse cx="90" cy="115" rx="42" ry="8" fill={c} opacity="0.08"/>
      <text x="90" y="148" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">croissant</text>
    </svg>
  );
  if (type === "kouign") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <rect x="50" y="65" width="80" height="65" rx="6" fill="none" stroke={s} strokeWidth="1"/>
      <rect x="53" y="68" width="74" height="8" rx="1" fill={c} opacity="0.15"/>
      {[82,94,106,118].map(y=><line key={y} x1="50" y1={y} x2="130" y2={y} stroke={s} strokeWidth="0.5" opacity="0.35"/>)}
      {[72,90,108].map(x=><line key={x} x1={x} y1="65" x2={x} y2="130" stroke={s} strokeWidth="0.5" opacity="0.3"/>)}
      <ellipse cx="90" cy="135" rx="44" ry="7" fill={c} opacity="0.07"/>
      <text x="90" y="155" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">kouign amann</text>
    </svg>
  );
  if (type === "scroll") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <ellipse cx="90" cy="90" rx="40" ry="38" fill="none" stroke={s} strokeWidth="1"/>
      <path d="M90 52 Q118 55 118 90 Q118 125 90 128 Q62 125 62 90 Q62 55 90 52" fill="none" stroke={c} strokeWidth="0.8" opacity="0.3" strokeDasharray="4 3"/>
      <path d="M90 60 Q112 63 112 90 Q112 117 90 120" fill="none" stroke={c} strokeWidth="0.8" opacity="0.25" strokeDasharray="3 3"/>
      <circle cx="90" cy="90" r="8" fill="none" stroke={c} strokeWidth="1"/>
      <circle cx="90" cy="90" r="3" fill={c} opacity="0.4"/>
      <text x="90" y="153" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">tahini scroll</text>
    </svg>
  );
  if (type === "canele") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <path d="M65 55 Q65 40 90 40 Q115 40 115 55 L115 120 Q115 135 90 135 Q65 135 65 120 Z" fill="none" stroke={s} strokeWidth="1"/>
      {[65,78,91,104].map(y=><line key={y} x1="65" y1={y} x2="115" y2={y} stroke={s} strokeWidth="0.5" opacity="0.35"/>)}
      <rect x="65" y="120" width="50" height="15" fill={c} opacity="0.12"/>
      <text x="90" y="156" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">canelé</text>
    </svg>
  );
  if (type === "sable") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <circle cx="90" cy="88" r="42" fill="none" stroke={s} strokeWidth="1"/>
      <circle cx="90" cy="88" r="34" fill="none" stroke={c} strokeWidth="0.5" opacity="0.3"/>
      <circle cx="90" cy="88" r="24" fill="none" stroke={c} strokeWidth="0.5" opacity="0.25"/>
      <circle cx="90" cy="88" r="10" fill={c} opacity="0.15"/>
      {[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;return<line key={a} x1={90+24*Math.cos(r)} y1={88+24*Math.sin(r)} x2={90+34*Math.cos(r)} y2={88+34*Math.sin(r)} stroke={c} strokeWidth="0.8" opacity="0.3"/>;})}
      <text x="90" y="152" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">dark rye sablé</text>
    </svg>
  );
  if (type === "basque") return (
    <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/>
      <rect x="52" y="55" width="76" height="80" rx="4" fill="none" stroke={s} strokeWidth="1"/>
      <rect x="52" y="55" width="76" height="18" rx="4" fill={c} opacity="0.2"/>
      <line x1="52" y1="73" x2="128" y2="73" stroke={s} strokeWidth="0.5" opacity="0.4"/>
      <line x1="52" y1="90" x2="128" y2="90" stroke={s} strokeWidth="0.3" opacity="0.25"/>
      <ellipse cx="90" cy="138" rx="42" ry="6" fill={c} opacity="0.07"/>
      <circle cx="70" cy="64" r="3" fill={c} opacity="0.25"/>
      <circle cx="90" cy="61" r="3" fill={c} opacity="0.25"/>
      <circle cx="110" cy="64" r="3" fill={c} opacity="0.25"/>
      <text x="90" y="157" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill={c} opacity="0.7">burnt basque</text>
    </svg>
  );
  return <svg width={d} height={d} viewBox="0 0 180 180"><rect width="180" height="180" fill={bg}/></svg>;
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const MENU = {
  coffee: [
    { id:1, name:"Noir Espresso", desc:"Double ristretto pulled at 9 bars. Brutally concentrated.", price:4.5, origin:"Ethiopia Yirgacheffe", roast:"Light", brew:"Espresso", art:"espresso", tasting:["Dark cherry","Cacao","Cedar"], rating:4.9, reviews:312, cal:5 },
    { id:2, name:"White Ritual", desc:"Silky microfoam over a single origin shot. Meditative.", price:5.5, origin:"Colombia Huila", roast:"Medium", brew:"Flat White", art:"flatwhite", tasting:["Caramel","Brown sugar","Hazelnut"], rating:4.8, reviews:241, cal:120 },
    { id:3, name:"Cold Monolith", desc:"18-hour cold steep. Glacially smooth, zero bitterness.", price:6.0, origin:"Guatemala Antigua", roast:"Medium-Dark", brew:"Cold Brew", art:"coldbrew", tasting:["Chocolate","Tobacco","Vanilla"], rating:4.7, reviews:198, cal:15, badge:"Popular" },
    { id:4, name:"Pour Over No.7", desc:"Precision pour, 94°C, 3-minute bloom. A ceremony.", price:7.0, origin:"Kenya AA", roast:"Light", brew:"Pour Over", art:"pourover", tasting:["Blackcurrant","Tomato","Citrus"], rating:4.9, reviews:156, cal:5 },
    { id:5, name:"Oat Cortado", desc:"Equal parts espresso and oat milk. Balanced tension.", price:5.0, origin:"Brazil Cerrado", roast:"Dark", brew:"Cortado", art:"cortado", tasting:["Walnut","Dark cocoa","Cream"], rating:4.6, reviews:189, cal:95 },
    { id:6, name:"Siphon Session", desc:"Theatre in a glass. Vacuum brewed tableside.", price:9.0, origin:"Panama Geisha", roast:"Light", brew:"Siphon", art:"siphon", tasting:["Jasmine","Peach","Bergamot"], rating:5.0, reviews:87, cal:5, badge:"Rare" },
  ],
  pastries: [
    { id:7, name:"Obsidian Croissant", desc:"72-hour laminated dough, charcoal-kissed. Architectural.", price:5.5, origin:"Normandy Butter", type:"Viennoiserie", art:"croissant", pairs:"Noir Espresso", rating:4.9, reviews:278, cal:310, badge:"Signature" },
    { id:8, name:"Brown Butter Kouign", desc:"Caramelized layers, salted edges. Controlled chaos.", price:6.0, origin:"Breton Tradition", type:"Pastry", art:"kouign", pairs:"Oat Cortado", rating:4.8, reviews:201, cal:420 },
    { id:9, name:"Tahini Scroll", desc:"Sesame paste, dark honey, sesame seed crown.", price:4.5, origin:"House Recipe", type:"Scroll", art:"scroll", pairs:"Pour Over No.7", rating:4.7, reviews:165, cal:280 },
    { id:10, name:"Miso Canelé", desc:"Umami-lifted custard in a caramelized shell. Enigmatic.", price:4.0, origin:"Bordeaux Method", type:"Canelé", art:"canele", pairs:"White Ritual", rating:4.8, reviews:134, cal:190, badge:"Chef's Pick" },
    { id:11, name:"Dark Rye Sablé", desc:"Bitter chocolate, rye flour, fleur de sel. Moody.", price:3.5, origin:"Nordic Influence", type:"Cookie", art:"sable", pairs:"Cold Monolith", rating:4.6, reviews:220, cal:180 },
    { id:12, name:"Burnt Basque", desc:"Scorched exterior, trembling center. Unapologetically burnt.", price:7.0, origin:"San Sebastián", type:"Cake", art:"basque", pairs:"Siphon Session", rating:4.9, reviews:142, cal:380 },
  ],
  seasonal: [
    { id:13, name:"Ume Blossom Latte", desc:"Japanese plum syrup, oat milk, rose salt. Transient.", price:7.5, origin:"Kyoto Inspired", roast:"Medium", brew:"Latte", art:"flatwhite", tasting:["Plum","Rose","Salt"], rating:4.9, reviews:44, cal:180, badge:"Limited", seasonal:"Spring" },
    { id:14, name:"Smoked Maple Americano", desc:"Hickory-smoked maple reduction, long black, oak depth.", price:6.5, origin:"Vermont Maple", roast:"Dark", brew:"Americano", art:"espresso", tasting:["Smoke","Maple","Oakwood"], rating:4.7, reviews:38, cal:45, badge:"Limited", seasonal:"Spring" },
    { id:15, name:"Pollen Tart", desc:"Bee pollen custard, honey caramel, almond crust.", price:6.5, origin:"Devonshire Honey", type:"Tart", art:"canele", pairs:"Ume Blossom Latte", rating:5.0, reviews:29, cal:320, badge:"Limited", seasonal:"Spring" },
  ],
};

const BREW_STEPS = [
  { step:"01", title:"Grind", desc:"Burr grind to order. 18g for espresso, coarser for filter. Consistency is everything.", time:"30s", detail:"Grind size: 200–400 microns for espresso, 600–800 for pour over." },
  { step:"02", title:"Dose", desc:"Precision dosing within ±0.1g. Tare your portafilter before every single pull.", time:"15s", detail:"Target: 18g in, 36g out for espresso. Adjust for taste preference." },
  { step:"03", title:"Bloom", desc:"Pre-infuse with 2× water weight. Allow 45s bloom. This releases CO₂ trapped in fresh beans.", time:"45s", detail:"Fresh beans bloom vigorously. Old beans barely rise — a sign of age." },
  { step:"04", title:"Pour", desc:"Slow concentric circles. 94°C water. Total 250ml in 3 minutes.", time:"3m", detail:"Pour rate: 5–7g per second. Begin at center, spiral outward slowly." },
  { step:"05", title:"Rest", desc:"Allow the cup to temper. 90°C is the ideal sip temperature.", time:"1m", detail:"The best sip is often the third — when aroma, taste and warmth align." },
];

const ORIGINS = [
  { name:"Ethiopia", region:"Yirgacheffe", alt:"1800–2200m", notes:"Berry, Floral, Wine", x:62, y:52, harvest:"Oct–Jan", process:"Washed / Natural" },
  { name:"Colombia", region:"Huila", alt:"1500–2000m", notes:"Caramel, Apple, Citrus", x:24, y:55, harvest:"Sep–Dec", process:"Washed" },
  { name:"Kenya", region:"AA Grade", alt:"1400–2000m", notes:"Blackcurrant, Tomato", x:63, y:57, harvest:"Oct–Dec", process:"Double Washed" },
  { name:"Panama", region:"Geisha", alt:"1500–1900m", notes:"Jasmine, Peach, Tea", x:22, y:52, harvest:"Dec–Mar", process:"Natural" },
  { name:"Guatemala", region:"Antigua", alt:"1500–1700m", notes:"Chocolate, Spice", x:20, y:50, harvest:"Jan–Mar", process:"Washed" },
  { name:"Brazil", region:"Cerrado", alt:"800–1100m", notes:"Walnut, Cocoa, Cream", x:29, y:65, harvest:"May–Sep", process:"Natural / Pulped" },
];

// ─── MINI ICONS ───────────────────────────────────────────────────────────────
const Ico = {
  cart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  sun: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  moon: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
  plus: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  minus: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  x: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  star: (f) => <svg width="11" height="11" viewBox="0 0 24 24" fill={f?"currentColor":"none"} stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  heart: (f) => <svg width="13" height="13" viewBox="0 0 24 24" fill={f?"currentColor":"none"} stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  arrow: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  search: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  grid: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  list: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>,
  book: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  gift: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>,
  clock: (sz=12) => <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  pin: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  coffee: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  leaf: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 22c1.25-1.25 2.5-2.5 3.5-4.5C7 15 7 12 7 12s3 0 5.5-1.5C15 9 17 7 20 2c0 0-6 1-9 4s-4 7-4 7-4.5 0-5 9z"/></svg>,
  flame: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 7 7 0 01-7-7c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
};

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [section, setSection] = useState("menu");
  const [tab, setTab] = useState("coffee");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState("all");
  const [menuView, setMenuView] = useState("grid");
  const [hovOrig, setHovOrig] = useState(null);
  const [brewActive, setBrewActive] = useState(0);
  const [timerSecs, setTimerSecs] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [journal, setJournal] = useState([]);
  const [jForm, setJForm] = useState({ item:"", notes:"", rating:5, taste:"" });
  const [loyalty, setLoyalty] = useState({ points:340, tier:"Connoisseur", stamps:6 });
  const [roast, setRoast] = useState({ dose:18, ratio:2, temp:94 });
  const [ordered, setOrdered] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const timerRef = useRef(null);
  const D = dark;

  const bg = D?"#0f0e0c":"#faf8f4", bgCard = D?"#1a1814":"#ffffff", bgSurf = D?"#221f1a":"#f2ede4";
  const txt = D?"#f0ebe0":"#1a1714", txtM = D?"#6a6258":"#9a9080", txtS = D?"#b5ac9e":"#4a4440";
  const acc = D?"#c9a96e":"#8b5e3c", accDim = D?"#c9a96e1a":"#8b5e3c12";
  const brd = D?"#2a2620":"#e4ddd2";
  const font = "'DM Serif Display',Georgia,serif", sans = "'DM Sans',system-ui,sans-serif";

  const addCart = (item) => {
    setCart(p => { const e=p.find(c=>c.id===item.id); return e?p.map(c=>c.id===item.id?{...c,qty:c.qty+1}:c):[...p,{...item,qty:1}]; });
    setLoyalty(l=>({...l, points:l.points+Math.floor(item.price*10), stamps:Math.min(10,l.stamps+0.5)}));
  };
  const updQty = (id,d) => setCart(p=>p.map(c=>c.id===id?{...c,qty:Math.max(0,c.qty+d)}:c).filter(c=>c.qty>0));
  const togWish = (id) => setWishlist(p=>p.includes(id)?p.filter(i=>i!==id):[...p,id]);
  const cartTotal = cart.reduce((s,c)=>s+c.price*c.qty,0);
  const cartCt = cart.reduce((s,c)=>s+c.qty,0);
  const placeOrder = () => { setCart([]); setCartOpen(false); setOrdered(true); setTimeout(()=>setOrdered(false),4000); };
  const parseSecs = t => t.includes("m")?parseInt(t)*60:parseInt(t);
  const startTimer = secs => {
    let r=secs; setTimerSecs(r); setTimerOn(true);
    if(timerRef.current) clearInterval(timerRef.current);
    timerRef.current=setInterval(()=>{r--;setTimerSecs(r);if(r<=0){clearInterval(timerRef.current);setTimerOn(false);}},1000);
  };
  const stopTimer = () => { clearInterval(timerRef.current); setTimerOn(false); setTimerSecs(0); };

  const allItems = [...MENU.coffee,...MENU.pastries,...MENU.seasonal];
  const filterTags = tab==="coffee"?["all","Light","Medium","Medium-Dark","Dark"]:tab==="pastries"?["all","Viennoiserie","Pastry","Cookie","Cake","Canelé","Scroll"]:["all"];
  let displayItems = (tab==="seasonal"?MENU.seasonal:MENU[tab]).filter(item=>{
    const ms=search===""||item.name.toLowerCase().includes(search.toLowerCase())||item.desc.toLowerCase().includes(search.toLowerCase());
    const mf=filterTag==="all"||item.roast===filterTag||item.type===filterTag;
    return ms&&mf;
  });
  if(sortBy==="price_asc") displayItems=[...displayItems].sort((a,b)=>a.price-b.price);
  if(sortBy==="price_desc") displayItems=[...displayItems].sort((a,b)=>b.price-a.price);
  if(sortBy==="rating") displayItems=[...displayItems].sort((a,b)=>b.rating-a.rating);

  const ib = { background:"none",border:"none",color:txtM,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:"6px",borderRadius:"3px",transition:"color 0.2s",position:"relative" };
  const ctaB = { display:"inline-flex",alignItems:"center",gap:"7px",background:"none",border:`1px solid ${brd}`,color:txt,cursor:"pointer",padding:"9px 18px",fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:sans,transition:"all 0.2s",borderRadius:"1px" };

  return (
    <div style={{ minHeight:"100vh",background:bg,color:txt,fontFamily:font,transition:"background 0.35s,color 0.35s",overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:${brd}}
        ::selection{background:${acc}30}
        .hc:hover{background:${bgSurf}!important}
        .hb:hover{background:${acc}!important;color:${D?"#0f0e0c":"#fff"}!important;border-color:${acc}!important}
        .hi:hover{color:${txt}!important}
        .hn:hover{color:${txt}!important}
        input[type=range]{-webkit-appearance:none;height:2px;background:${brd};width:100%;border-radius:1px;outline:none}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${acc};border-radius:50%;cursor:pointer}
        input[type=text],select,textarea{background:${bgSurf};border:1px solid ${brd};color:${txt};font-family:${sans};font-size:13px;padding:9px 13px;border-radius:2px;width:100%;outline:none;transition:border-color 0.2s}
        input[type=text]:focus,select:focus,textarea:focus{border-color:${acc}}
        textarea{resize:vertical;min-height:80px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
        @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.4}}
        .fu{animation:fadeUp 0.38s ease both}
        .si{animation:slideIn 0.3s cubic-bezier(.32,.72,0,1) both}
        .su{animation:slideUp 0.32s cubic-bezier(.32,.72,0,1) both}
        .blink{animation:blink 1.4s infinite}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"sticky",top:0,zIndex:100,height:"62px",background:D?"rgba(15,14,12,0.94)":"rgba(250,248,244,0.94)",backdropFilter:"blur(16px)",borderBottom:`1px solid ${brd}`,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 2rem" }}>
        <div style={{ display:"flex",alignItems:"center",gap:"28px" }}>
          <span style={{ fontFamily:font,fontStyle:"italic",fontSize:"19px",letterSpacing:"-0.02em",color:txt }}>Mortem & Grain</span>
          <div style={{ display:"flex",gap:"22px" }}>
            {["menu","origins","brew","journal","loyalty","about"].map(s=>(
              <button key={s} className="hn" style={{ background:"none",border:"none",borderBottom:section===s?`1.5px solid ${acc}`:"1.5px solid transparent",color:section===s?acc:txtM,cursor:"pointer",fontSize:"10px",letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:sans,padding:"4px 0",marginBottom:"-1px",transition:"all 0.2s" }} onClick={()=>setSection(s)}>{s}</button>
            ))}
          </div>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:"4px" }}>
          <span style={{ fontFamily:sans,fontSize:"11px",color:acc,marginRight:"10px",letterSpacing:"0.06em" }}>{loyalty.points} pts</span>
          <button style={ib} className="hi" onClick={()=>setDark(d=>!d)}>{D?<Ico.sun/>:<Ico.moon/>}</button>
          <button style={{ ...ib,color:cartCt>0?acc:txtM }} className="hi" onClick={()=>setCartOpen(true)}>
            <Ico.cart/>
            {cartCt>0&&<span style={{ position:"absolute",top:"1px",right:"1px",background:acc,color:D?"#0f0e0c":"#fff",borderRadius:"50%",width:"15px",height:"15px",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:sans,fontWeight:700 }}>{cartCt}</span>}
          </button>
        </div>
      </nav>

      {/* TOAST */}
      {ordered&&<div style={{ position:"fixed",bottom:"28px",left:"50%",transform:"translateX(-50%)",background:acc,color:D?"#0f0e0c":"#fff",fontFamily:sans,fontSize:"12px",padding:"13px 26px",zIndex:999,letterSpacing:"0.06em" }} className="fu">Order placed — see you in 5 minutes.</div>}

      {/* MENU */}
      {section==="menu"&&<>
        <div style={{ padding:"72px 2rem 52px",maxWidth:"1100px",margin:"0 auto" }}>
          <div style={{ display:"flex",gap:"7px",alignItems:"center",fontFamily:sans,fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase",color:acc,marginBottom:"18px" }}><Ico.coffee/><span>Specialty Coffee & Artisan Pastries · London</span></div>
          <h1 style={{ fontSize:"clamp(46px,7vw,86px)",lineHeight:0.92,letterSpacing:"-0.03em",fontStyle:"italic",marginBottom:"28px" }}>Where<br/><span style={{ color:acc }}>silence</span><br/>is brewed.</h1>
          <div style={{ display:"flex",gap:"28px",marginBottom:"0" }}>
            {[["6","Origins"],["12","Menu items"],["18h","Cold brew"],["72h","Lamination"]].map(([v,l])=>(
              <div key={l}><div style={{ fontSize:"21px",fontStyle:"italic",color:acc,letterSpacing:"-0.02em" }}>{v}</div><div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM }}>{l}</div></div>
            ))}
          </div>
        </div>
        <div style={{ padding:"0 2rem 80px",maxWidth:"1200px",margin:"0 auto" }}>
          {/* Toolbar */}
          <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px",flexWrap:"wrap" }}>
            <div style={{ position:"relative",flex:"1",minWidth:"180px" }}>
              <span style={{ position:"absolute",left:"11px",top:"50%",transform:"translateY(-50%)",color:txtM }}><Ico.search/></span>
              <input type="text" placeholder="Search…" value={search} onChange={e=>setSearch(e.target.value)} style={{ paddingLeft:"36px" }}/>
            </div>
            <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{ width:"auto",minWidth:"130px" }}>
              <option value="default">Default order</option>
              <option value="price_asc">Price: Low–High</option>
              <option value="price_desc">Price: High–Low</option>
              <option value="rating">Top rated</option>
            </select>
            <div style={{ display:"flex",gap:"4px",marginLeft:"auto" }}>
              {["grid","list"].map(v=>(
                <button key={v} style={{ ...ib,border:`1px solid ${menuView===v?acc:brd}`,color:menuView===v?acc:txtM,padding:"7px" }} onClick={()=>setMenuView(v)}>
                  {v==="grid"?<Ico.grid/>:<Ico.list/>}
                </button>
              ))}
            </div>
          </div>
          {/* Tabs */}
          <div style={{ display:"flex",borderBottom:`1px solid ${brd}`,marginBottom:"16px" }}>
            {["coffee","pastries","seasonal"].map(t=>(
              <button key={t} style={{ background:"none",border:"none",borderBottom:tab===t?`2px solid ${acc}`:"2px solid transparent",color:tab===t?acc:txtM,cursor:"pointer",fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:sans,padding:"11px 18px",marginBottom:"-1px",transition:"all 0.2s",display:"flex",gap:"5px",alignItems:"center" }}
                onClick={()=>{setTab(t);setFilterTag("all");}}>
                {t}{t==="seasonal"&&<span style={{ fontFamily:sans,fontSize:"8px",letterSpacing:"0.14em",textTransform:"uppercase",padding:"2px 6px",borderRadius:"1px",background:accDim,color:acc,border:`1px solid ${accDim}` }}>Spring</span>}
              </button>
            ))}
          </div>
          {/* Filter pills */}
          <div style={{ display:"flex",gap:"5px",marginBottom:"28px",flexWrap:"wrap" }}>
            {filterTags.map(f=>(
              <button key={f} style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.09em",textTransform:"uppercase",padding:"4px 10px",border:`1px solid ${f===filterTag?acc:brd}`,borderRadius:"1px",color:f===filterTag?acc:txtM,background:f===filterTag?accDim:"none",cursor:"pointer",transition:"all 0.2s" }} onClick={()=>setFilterTag(f)}>{f}</button>
            ))}
          </div>

          {/* GRID */}
          {menuView==="grid"&&<div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(295px,1fr))",gap:"1px",background:brd }}>
            {displayItems.map((item,idx)=>(
              <div key={item.id} className="hc fu" style={{ background:bgCard,cursor:"pointer",position:"relative",transition:"background 0.2s",animationDelay:`${idx*0.04}s` }}>
                <div style={{ display:"flex",justifyContent:"center",padding:"22px 0 0",borderBottom:`1px solid ${brd}` }} onClick={()=>setSelected(item)}>
                  <ItemArt type={item.art} dark={dark} accent={acc} size={155}/>
                </div>
                <div style={{ padding:"18px 20px 14px" }} onClick={()=>setSelected(item)}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px" }}>
                    <div>
                      {item.badge&&<span style={{ display:"inline-flex",fontFamily:sans,fontSize:"8px",letterSpacing:"0.14em",textTransform:"uppercase",padding:"2px 7px",borderRadius:"1px",background:item.badge==="Limited"||item.badge==="Rare"?"#e74c3c18":accDim,color:item.badge==="Limited"||item.badge==="Rare"?"#e74c3c":acc,border:`1px solid ${item.badge==="Limited"||item.badge==="Rare"?"#e74c3c33":accDim}`,marginBottom:"5px" }}>{item.badge}</span>}
                      <div style={{ fontSize:"18px",fontStyle:"italic",letterSpacing:"-0.02em",color:txt }}>{item.name}</div>
                    </div>
                    <span style={{ fontFamily:sans,fontSize:"15px",fontWeight:500,color:acc,paddingTop:"2px",flexShrink:0 }}>£{item.price.toFixed(2)}</span>
                  </div>
                  <div style={{ fontFamily:sans,fontSize:"12px",lineHeight:1.65,color:txtS,marginBottom:"10px" }}>{item.desc}</div>
                  {item.tasting&&<div style={{ display:"flex",flexWrap:"wrap",gap:"3px",marginBottom:"10px" }}>{item.tasting.map(t=><span key={t} style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.06em",color:txtM,background:bgSurf,border:`1px solid ${brd}`,padding:"2px 7px",borderRadius:"1px" }}>{t}</span>)}</div>}
                  {item.pairs&&<div style={{ fontFamily:sans,fontSize:"10px",color:txtM,marginBottom:"10px" }}>Pairs · <span style={{ color:acc }}>{item.pairs}</span></div>}
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:"2px",color:acc }}>{[1,2,3,4,5].map(i=><span key={i} style={{ color:i<=Math.round(item.rating)?acc:txtM }}>{Ico.star(i<=Math.round(item.rating))}</span>)}<span style={{ fontFamily:sans,fontSize:"10px",color:txtM,marginLeft:"4px" }}>({item.reviews})</span></div>
                    <span style={{ fontFamily:sans,fontSize:"9px",color:txtM }}>{item.cal} kcal</span>
                  </div>
                </div>
                <div style={{ padding:"0 20px 16px",display:"flex",gap:"7px" }}>
                  <button className="hb" style={{ ...ctaB,flex:1,justifyContent:"center",padding:"8px" }} onClick={()=>addCart(item)}><Ico.plus/>Add</button>
                  <button style={{ ...ib,border:`1px solid ${brd}`,padding:"8px",color:wishlist.includes(item.id)?acc:txtM }} onClick={()=>togWish(item.id)}>{Ico.heart(wishlist.includes(item.id))}</button>
                </div>
              </div>
            ))}
          </div>}

          {/* LIST */}
          {menuView==="list"&&<div style={{ display:"flex",flexDirection:"column",gap:"1px",background:brd }}>
            {displayItems.map((item,idx)=>(
              <div key={item.id} className="hc fu" style={{ background:bgCard,display:"flex",alignItems:"center",gap:"16px",padding:"14px 18px",cursor:"pointer",transition:"background 0.15s",animationDelay:`${idx*0.03}s` }}>
                <div style={{ flexShrink:0 }} onClick={()=>setSelected(item)}><ItemArt type={item.art} dark={dark} accent={acc} size={72}/></div>
                <div style={{ flex:1 }} onClick={()=>setSelected(item)}>
                  <div style={{ display:"flex",gap:"7px",alignItems:"center",marginBottom:"3px" }}>
                    <span style={{ fontSize:"16px",fontStyle:"italic",color:txt }}>{item.name}</span>
                    {item.badge&&<span style={{ fontFamily:sans,fontSize:"8px",letterSpacing:"0.12em",textTransform:"uppercase",padding:"2px 6px",borderRadius:"1px",background:accDim,color:acc }}>{item.badge}</span>}
                  </div>
                  <div style={{ fontFamily:sans,fontSize:"12px",color:txtS }}>{item.desc}</div>
                </div>
                <div style={{ display:"flex",alignItems:"center",gap:"3px",color:acc,flexShrink:0 }}>{[1,2,3,4,5].map(i=><span key={i} style={{ color:i<=Math.round(item.rating)?acc:txtM }}>{Ico.star(i<=Math.round(item.rating))}</span>)}</div>
                <div style={{ textAlign:"right",flexShrink:0 }}>
                  <div style={{ fontFamily:sans,fontSize:"15px",fontWeight:500,color:acc,marginBottom:"6px" }}>£{item.price.toFixed(2)}</div>
                  <div style={{ display:"flex",gap:"6px" }}>
                    <button className="hb" style={{ ...ctaB,padding:"5px 11px" }} onClick={()=>addCart(item)}><Ico.plus/></button>
                    <button style={{ ...ib,border:`1px solid ${brd}`,padding:"5px",color:wishlist.includes(item.id)?acc:txtM }} onClick={()=>togWish(item.id)}>{Ico.heart(wishlist.includes(item.id))}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>}

          {displayItems.length===0&&<div style={{ textAlign:"center",padding:"80px",fontFamily:sans,color:txtM,fontSize:"14px" }}>No items match your search.</div>}

          {/* Wishlist strip */}
          {wishlist.length>0&&<div style={{ marginTop:"48px",paddingTop:"32px",borderTop:`1px solid ${brd}` }}>
            <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.14em",textTransform:"uppercase",color:txtM,marginBottom:"16px",display:"flex",gap:"6px",alignItems:"center" }}>{Ico.heart(true)} Saved ({wishlist.length})</div>
            <div style={{ display:"flex",gap:"8px",flexWrap:"wrap" }}>
              {wishlist.map(id=>{const it=allItems.find(i=>i.id===id);return it?(<div key={id} style={{ display:"flex",alignItems:"center",gap:"8px",background:bgCard,border:`1px solid ${brd}`,padding:"8px 14px" }}>
                <ItemArt type={it.art} dark={dark} accent={acc} size={40}/>
                <div><div style={{ fontSize:"14px",fontStyle:"italic",color:txt }}>{it.name}</div><div style={{ fontFamily:sans,fontSize:"11px",color:acc }}>£{it.price.toFixed(2)}</div></div>
                <button className="hb" style={{ ...ctaB,padding:"5px 10px",marginLeft:"8px",fontSize:"10px" }} onClick={()=>addCart(it)}><Ico.plus/></button>
              </div>):null;})}
            </div>
          </div>}
        </div>
      </>}

      {/* ORIGINS */}
      {section==="origins"&&<div style={{ padding:"72px 2rem 80px",maxWidth:"1100px",margin:"0 auto" }}>
        <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase",color:acc,marginBottom:"14px",display:"flex",gap:"5px",alignItems:"center" }}><Ico.pin/>Bean Origins</div>
        <h1 style={{ fontSize:"clamp(36px,5.5vw,66px)",fontStyle:"italic",letterSpacing:"-0.03em",marginBottom:"44px",lineHeight:0.94 }}>Traced to<br/>the <span style={{ color:acc }}>altitude.</span></h1>
        <div style={{ position:"relative",width:"100%",paddingBottom:"44%",background:bgSurf,border:`1px solid ${brd}`,marginBottom:"1px",overflow:"hidden" }}>
          <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06 }} viewBox="0 0 800 350" preserveAspectRatio="none">
            <ellipse cx="400" cy="175" rx="390" ry="165" fill="none" stroke={txt} strokeWidth="0.5"/>
            {[1,2,3].map(i=><ellipse key={i} cx="400" cy="175" rx={390} ry={165*i/3} fill="none" stroke={txt} strokeWidth="0.3"/>)}
            {[100,200,300,400,500,600,700].map(x=><line key={x} x1={x} y1="10" x2={x} y2="340" stroke={txt} strokeWidth="0.2"/>)}
            {[60,120,175,235,295].map(y=><line key={y} x1="10" y1={y} x2="790" y2={y} stroke={txt} strokeWidth="0.2"/>)}
          </svg>
          {ORIGINS.map((o,i)=>{const H=hovOrig===i;return(
            <div key={i} style={{ position:"absolute",left:`${o.x}%`,top:`${o.y}%`,transform:"translate(-50%,-50%)",zIndex:2 }} onMouseEnter={()=>setHovOrig(i)} onMouseLeave={()=>setHovOrig(null)}>
              <div style={{ width:H?"15px":"8px",height:H?"15px":"8px",background:acc,borderRadius:"50%",transition:"all 0.2s",border:`2px solid ${H?bgCard:"transparent"}`,boxShadow:H?`0 0 0 3px ${acc}28`:""}}/>
              {H&&<div style={{ position:"absolute",top:"20px",left:"50%",transform:"translateX(-50%)",background:bgCard,border:`1px solid ${brd}`,padding:"13px 16px",whiteSpace:"nowrap",zIndex:10 }}>
                <div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.14em",textTransform:"uppercase",color:acc,marginBottom:"5px" }}>{o.name} · {o.region}</div>
                <div style={{ fontFamily:sans,fontSize:"11px",color:txtS,marginBottom:"2px" }}>Alt. {o.alt}</div>
                <div style={{ fontFamily:sans,fontSize:"11px",color:txtM,marginBottom:"2px" }}>Harvest: {o.harvest}</div>
                <div style={{ fontFamily:sans,fontSize:"11px",color:txtM,marginBottom:"7px" }}>{o.process}</div>
                <div style={{ borderTop:`1px solid ${brd}`,paddingTop:"7px",fontFamily:sans,fontSize:"10px",fontStyle:"italic",color:acc }}>{o.notes}</div>
              </div>}
            </div>
          );})}
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:"1px",background:brd }}>
          {ORIGINS.map((o,i)=>(
            <div key={i} className="hc" style={{ background:bgCard,padding:"20px 24px",transition:"background 0.2s" }}>
              <div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.16em",textTransform:"uppercase",color:acc,marginBottom:"8px" }}>{o.name}</div>
              <div style={{ fontSize:"17px",fontStyle:"italic",color:txt,marginBottom:"6px" }}>{o.region}</div>
              <div style={{ fontFamily:sans,fontSize:"11px",color:txtM,marginBottom:"2px" }}>Alt. {o.alt}</div>
              <div style={{ fontFamily:sans,fontSize:"11px",color:txtM,marginBottom:"2px" }}>Harvest: {o.harvest}</div>
              <div style={{ fontFamily:sans,fontSize:"11px",color:txtM,marginBottom:"8px" }}>{o.process}</div>
              <div style={{ borderTop:`1px solid ${brd}`,paddingTop:"8px",fontFamily:sans,fontSize:"11px",fontStyle:"italic",color:txtS }}>{o.notes}</div>
            </div>
          ))}
        </div>
      </div>}

      {/* BREW */}
      {section==="brew"&&<div style={{ padding:"72px 2rem 80px",maxWidth:"860px",margin:"0 auto" }}>
        <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase",color:acc,marginBottom:"14px",display:"flex",gap:"5px",alignItems:"center" }}>{Ico.clock(13)}Brew Guide & Ratio Calculator</div>
        <h1 style={{ fontSize:"clamp(34px,5vw,60px)",fontStyle:"italic",letterSpacing:"-0.03em",marginBottom:"48px",lineHeight:0.94 }}>The ceremony<br/>of <span style={{ color:acc }}>pour.</span></h1>
        <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:brd,marginBottom:"48px" }}>
          {BREW_STEPS.map((step,i)=>(
            <div key={i} className="hc" style={{ background:brewActive===i?bgSurf:bgCard,padding:"20px 26px",cursor:"pointer",transition:"background 0.2s" }} onClick={()=>setBrewActive(i)}>
              <div style={{ display:"flex",gap:"18px",alignItems:"flex-start" }}>
                <div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.1em",color:acc,paddingTop:"4px",minWidth:"22px" }}>{step.step}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"5px" }}>
                    <div style={{ fontSize:"18px",fontStyle:"italic",color:txt }}>{step.title}</div>
                    <div style={{ display:"flex",alignItems:"center",gap:"10px" }}>
                      <span style={{ fontFamily:sans,fontSize:"10px",color:txtM,display:"flex",alignItems:"center",gap:"3px" }}>{Ico.clock()}{step.time}</span>
                      {brewActive===i&&<button className="hb" style={{ ...ctaB,padding:"5px 12px",fontSize:"10px" }} onClick={e=>{e.stopPropagation();timerOn?stopTimer():startTimer(parseSecs(step.time));}}>
                        {timerOn?<span className="blink">{timerSecs}s — stop</span>:"Start timer"}
                      </button>}
                    </div>
                  </div>
                  <div style={{ fontFamily:sans,fontSize:"12px",color:txtS,lineHeight:1.65,marginBottom:brewActive===i?"8px":0 }}>{step.desc}</div>
                  {brewActive===i&&<div style={{ fontFamily:sans,fontSize:"11px",color:acc,fontStyle:"italic",borderLeft:`2px solid ${acc}`,paddingLeft:"10px" }}>{step.detail}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Ratio Calculator */}
        <div style={{ background:bgSurf,border:`1px solid ${brd}`,padding:"32px 36px" }}>
          <div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.16em",textTransform:"uppercase",color:acc,marginBottom:"6px" }}>Ratio Calculator</div>
          <h3 style={{ fontSize:"24px",fontStyle:"italic",color:txt,marginBottom:"28px" }}>Dial in your brew</h3>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"28px",marginBottom:"28px" }}>
            {[{label:"Coffee Dose",key:"dose",unit:"g",min:10,max:30},{label:"Brew Ratio",key:"ratio",unit:"×",min:1,max:3},{label:"Water Temp",key:"temp",unit:"°C",min:85,max:100}].map(({label,key,unit,min,max})=>(
              <div key={key}>
                <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM,marginBottom:"8px" }}>{label}</div>
                <div style={{ fontSize:"32px",fontStyle:"italic",color:acc,letterSpacing:"-0.02em",marginBottom:"10px" }}>{roast[key]}<span style={{ fontSize:"14px",color:txtM }}>{unit}</span></div>
                <input type="range" min={min} max={max} value={roast[key]} onChange={e=>setRoast(r=>({...r,[key]:+e.target.value}))}/>
              </div>
            ))}
          </div>
          <div style={{ borderTop:`1px solid ${brd}`,paddingTop:"20px",display:"flex",gap:"28px" }}>
            {[["Water needed",`${(roast.dose*roast.ratio*10).toFixed(0)}ml`],["Est. yield",`${(roast.dose*roast.ratio*10*0.85).toFixed(0)}ml`],["Strength",roast.dose/(roast.dose*roast.ratio*10)>0.055?"Strong":roast.dose/(roast.dose*roast.ratio*10)>0.04?"Balanced":"Light"]].map(([l,v])=>(
              <div key={l}><div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.12em",textTransform:"uppercase",color:txtM,marginBottom:"3px" }}>{l}</div><div style={{ fontSize:"18px",fontStyle:"italic",color:txt }}>{v}</div></div>
            ))}
          </div>
        </div>
      </div>}

      {/* JOURNAL */}
      {section==="journal"&&<div style={{ padding:"72px 2rem 80px",maxWidth:"760px",margin:"0 auto" }}>
        <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase",color:acc,marginBottom:"14px",display:"flex",gap:"5px",alignItems:"center" }}><Ico.book/>Tasting Journal</div>
        <h1 style={{ fontSize:"clamp(34px,5vw,58px)",fontStyle:"italic",letterSpacing:"-0.03em",marginBottom:"44px",lineHeight:0.94 }}>Record your<br/><span style={{ color:acc }}>palate.</span></h1>
        <div style={{ background:bgSurf,border:`1px solid ${brd}`,padding:"28px 32px",marginBottom:"28px" }}>
          <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM,marginBottom:"16px" }}>New Entry</div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"10px" }}>
            <div><div style={{ fontFamily:sans,fontSize:"10px",color:txtM,marginBottom:"5px" }}>Item</div>
              <select value={jForm.item} onChange={e=>setJForm(f=>({...f,item:e.target.value}))}>
                <option value="">Select item…</option>
                {allItems.map(i=><option key={i.id} value={i.name}>{i.name}</option>)}
              </select>
            </div>
            <div><div style={{ fontFamily:sans,fontSize:"10px",color:txtM,marginBottom:"5px" }}>Your Rating</div>
              <div style={{ display:"flex",gap:"5px",alignItems:"center",paddingTop:"9px" }}>
                {[1,2,3,4,5].map(i=><button key={i} style={{ background:"none",border:"none",cursor:"pointer",color:i<=jForm.rating?acc:txtM,padding:"2px" }} onClick={()=>setJForm(f=>({...f,rating:i}))}>{Ico.star(i<=jForm.rating)}</button>)}
              </div>
            </div>
          </div>
          <div style={{ marginBottom:"10px" }}><div style={{ fontFamily:sans,fontSize:"10px",color:txtM,marginBottom:"5px" }}>Tasting Notes</div><input type="text" placeholder="What did you taste?" value={jForm.taste} onChange={e=>setJForm(f=>({...f,taste:e.target.value}))}/></div>
          <div style={{ marginBottom:"18px" }}><div style={{ fontFamily:sans,fontSize:"10px",color:txtM,marginBottom:"5px" }}>Thoughts</div><textarea placeholder="Your observations, mood, context…" value={jForm.notes} onChange={e=>setJForm(f=>({...f,notes:e.target.value}))}/></div>
          <button className="hb" style={ctaB} onClick={()=>{if(!jForm.item)return;setJournal(j=>[{...jForm,id:Date.now(),date:new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short"})},... j]);setJForm({item:"",notes:"",rating:5,taste:""});}}>Save Entry <Ico.arrow/></button>
        </div>
        {journal.length===0?<div style={{ textAlign:"center",padding:"56px",fontFamily:sans,fontSize:"13px",color:txtM,fontStyle:"italic" }}>Your journal is empty. Order something and record it.</div>:
        <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:brd }}>
          {journal.map(entry=>(
            <div key={entry.id} style={{ background:bgCard,padding:"20px 24px" }} className="fu">
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px" }}>
                <div><div style={{ fontSize:"17px",fontStyle:"italic",color:txt,marginBottom:"4px" }}>{entry.item}</div>
                  <div style={{ display:"flex",gap:"2px",color:acc }}>{[1,2,3,4,5].map(i=><span key={i} style={{ color:i<=entry.rating?acc:txtM }}>{Ico.star(i<=entry.rating)}</span>)}</div>
                </div>
                <span style={{ fontFamily:sans,fontSize:"10px",color:txtM }}>{entry.date}</span>
              </div>
              {entry.taste&&<div style={{ fontFamily:sans,fontSize:"11px",color:acc,fontStyle:"italic",marginBottom:"5px" }}>{entry.taste}</div>}
              {entry.notes&&<div style={{ fontFamily:sans,fontSize:"12px",color:txtS,lineHeight:1.65 }}>{entry.notes}</div>}
            </div>
          ))}
        </div>}
      </div>}

      {/* LOYALTY */}
      {section==="loyalty"&&<div style={{ padding:"72px 2rem 80px",maxWidth:"760px",margin:"0 auto" }}>
        <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase",color:acc,marginBottom:"14px",display:"flex",gap:"5px",alignItems:"center" }}><Ico.gift/>Loyalty Programme</div>
        <h1 style={{ fontSize:"clamp(34px,5vw,58px)",fontStyle:"italic",letterSpacing:"-0.03em",marginBottom:"44px",lineHeight:0.94 }}>Devotion<br/><span style={{ color:acc }}>rewarded.</span></h1>
        {/* Card */}
        <div style={{ background:D?"#1a1814":"#2a1f14",border:`1px solid ${acc}40`,padding:"36px 40px",marginBottom:"28px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:"-50px",right:"-50px",width:"220px",height:"220px",border:`1px solid ${acc}12`,borderRadius:"50%" }}/>
          <div style={{ position:"absolute",top:"-25px",right:"-25px",width:"150px",height:"150px",border:`1px solid ${acc}08`,borderRadius:"50%" }}/>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"28px" }}>
            <div><div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.18em",textTransform:"uppercase",color:acc,marginBottom:"5px" }}>Mortem & Grain</div><div style={{ fontSize:"24px",fontStyle:"italic",color:"#f0ebe0",letterSpacing:"-0.02em" }}>Loyalty Card</div></div>
            <div style={{ textAlign:"right" }}><div style={{ fontFamily:sans,fontSize:"9px",color:"#b5ac9e",marginBottom:"3px" }}>Tier</div><div style={{ fontSize:"16px",fontStyle:"italic",color:{Seed:"#888",Bloom:"#8b5e3c",Connoisseur:"#c9a96e",Maestro:"#e8d5b0"}[loyalty.tier] }}>{loyalty.tier}</div></div>
          </div>
          <div style={{ marginBottom:"24px" }}>
            <div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.1em",textTransform:"uppercase",color:"#6a6258",marginBottom:"10px" }}>Stamp Card — 10 for a free drink</div>
            <div style={{ display:"flex",gap:"7px" }}>{Array.from({length:10}).map((_,i)=>(
              <div key={i} style={{ width:"30px",height:"30px",borderRadius:"50%",border:`1px solid ${i<Math.floor(loyalty.stamps)?acc:"#3a3630"}`,background:i<Math.floor(loyalty.stamps)?`${acc}28`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",color:acc }}>
                {i<Math.floor(loyalty.stamps)&&<Ico.coffee/>}
              </div>
            ))}</div>
          </div>
          <div style={{ borderTop:`1px solid ${acc}1a`,paddingTop:"18px",display:"flex",justifyContent:"space-between" }}>
            <div><div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.1em",textTransform:"uppercase",color:"#6a6258",marginBottom:"3px" }}>Points</div><div style={{ fontSize:"30px",fontStyle:"italic",color:acc,letterSpacing:"-0.02em" }}>{loyalty.points}</div></div>
            <div style={{ textAlign:"right" }}><div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.1em",textTransform:"uppercase",color:"#6a6258",marginBottom:"3px" }}>Next reward at</div><div style={{ fontSize:"20px",fontStyle:"italic",color:"#f0ebe0" }}>500 pts</div></div>
          </div>
        </div>
        {/* Progress */}
        <div style={{ marginBottom:"28px",padding:"20px 24px",background:bgSurf,border:`1px solid ${brd}` }}>
          <div style={{ display:"flex",justifyContent:"space-between",fontFamily:sans,fontSize:"10px",color:txtM,marginBottom:"8px" }}><span>Progress to Maestro</span><span>{loyalty.points} / 600</span></div>
          <div style={{ height:"3px",background:brd,borderRadius:"2px" }}><div style={{ height:"100%",background:acc,borderRadius:"2px",width:`${Math.min(100,(loyalty.points/600)*100)}%`,transition:"width 0.5s" }}/></div>
        </div>
        {/* Tiers */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:brd,marginBottom:"28px" }}>
          {[["Seed","0–99","Welcome"],["Bloom","100–299","+5% off"],["Connoisseur","300–599","+10% off"],["Maestro","600+","+15% & events"]].map(([tier,pts,perk])=>(
            <div key={tier} style={{ background:loyalty.tier===tier?bgSurf:bgCard,padding:"18px 14px",borderTop:loyalty.tier===tier?`2px solid ${acc}`:`2px solid transparent` }}>
              <div style={{ fontSize:"13px",fontStyle:"italic",color:loyalty.tier===tier?acc:txt,marginBottom:"5px" }}>{tier}</div>
              <div style={{ fontFamily:sans,fontSize:"10px",color:txtM,marginBottom:"3px" }}>{pts} pts</div>
              <div style={{ fontFamily:sans,fontSize:"10px",color:txtS }}>{perk}</div>
            </div>
          ))}
        </div>
        {/* Rewards */}
        <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM,marginBottom:"12px" }}>Available Rewards</div>
        <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:brd }}>
          {[["Free Espresso",100],["Free Pastry",150],["Reserve Siphon Session",300],["Private Cupping Event",500]].map(([name,pts])=>(
            <div key={name} style={{ background:bgCard,padding:"14px 20px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
              <div><div style={{ fontSize:"15px",fontStyle:"italic",color:loyalty.points>=pts?txt:txtM }}>{name}</div><div style={{ fontFamily:sans,fontSize:"10px",color:txtM }}>{pts} points</div></div>
              <button className="hb" style={{ ...ctaB,opacity:loyalty.points>=pts?1:0.4,padding:"6px 14px",fontSize:"10px" }} onClick={()=>{if(loyalty.points>=pts)setLoyalty(l=>({...l,points:l.points-pts}));}}>
                {loyalty.points>=pts?"Redeem":"Locked"}
              </button>
            </div>
          ))}
        </div>
      </div>}

      {/* ABOUT */}
      {section==="about"&&<div style={{ padding:"72px 2rem 80px",maxWidth:"760px",margin:"0 auto" }}>
        <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase",color:acc,marginBottom:"14px",display:"flex",gap:"5px",alignItems:"center" }}><Ico.leaf/>About</div>
        <h1 style={{ fontSize:"clamp(34px,5vw,60px)",fontStyle:"italic",letterSpacing:"-0.03em",marginBottom:"24px",lineHeight:0.94 }}>Obsession<br/>as <span style={{ color:acc }}>practice.</span></h1>
        <div style={{ width:"36px",height:"1px",background:acc,marginBottom:"32px" }}/>
        <p style={{ fontFamily:sans,fontSize:"14px",lineHeight:1.85,color:txtS,maxWidth:"560px",marginBottom:"18px" }}>Mortem & Grain was born from a single conviction: that coffee prepared with complete attention is one of the few remaining rituals of modern life. We opened in 2019, and have never chased volume — only depth.</p>
        <p style={{ fontFamily:sans,fontSize:"14px",lineHeight:1.85,color:txtS,maxWidth:"560px",marginBottom:"48px" }}>Every bean is sourced directly from farms we visit. Every pastry is made before 5am. Nothing is reheated. Nothing is rushed.</p>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:brd,marginBottom:"56px" }}>
          {[["2019","Founded"],["6","Origin countries"],["48h","Max. bean age after roast"],["11°C","Storage temperature"],["3","Barista competitions won"],["0","Syrups we use"]].map(([v,l])=>(
            <div key={l} style={{ background:bgCard,padding:"22px" }}>
              <div style={{ fontSize:"30px",fontStyle:"italic",color:acc,letterSpacing:"-0.02em",marginBottom:"3px" }}>{v}</div>
              <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop:`1px solid ${brd}`,paddingTop:"40px" }}>
          <div style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM,marginBottom:"16px" }}>Hours & Location</div>
          {[["Mon – Fri","7am – 6pm"],["Sat – Sun","8am – 5pm"]].map(([d,h])=>(
            <div key={d} style={{ display:"flex",gap:"24px",marginBottom:"6px" }}><div style={{ fontSize:"16px",fontStyle:"italic",color:txt,minWidth:"90px" }}>{d}</div><div style={{ fontSize:"16px",fontStyle:"italic",color:acc }}>{h}</div></div>
          ))}
          <div style={{ fontFamily:sans,fontSize:"12px",color:txtS,marginTop:"16px",display:"flex",alignItems:"center",gap:"5px" }}><Ico.pin/>14 Vestry Lane, EC4A 1DT, London</div>
        </div>
      </div>}

      {/* ITEM MODAL */}
      {selected&&<div style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center" }} onClick={()=>setSelected(null)}>
        <div style={{ background:bgCard,width:"100%",maxWidth:"660px",borderTop:`3px solid ${acc}`,maxHeight:"88vh",overflowY:"auto" }} className="su" onClick={e=>e.stopPropagation()}>
          <div style={{ display:"flex",borderBottom:`1px solid ${brd}` }}>
            <div style={{ flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",padding:"28px",borderRight:`1px solid ${brd}` }}><ItemArt type={selected.art} dark={dark} accent={acc} size={185}/></div>
            <div style={{ flex:1,padding:"28px 24px" }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px" }}>
                <div>
                  {selected.badge&&<span style={{ display:"inline-flex",fontFamily:sans,fontSize:"8px",letterSpacing:"0.14em",textTransform:"uppercase",padding:"2px 7px",borderRadius:"1px",background:accDim,color:acc,marginBottom:"6px" }}>{selected.badge}</span>}
                  <h2 style={{ fontSize:"26px",fontStyle:"italic",letterSpacing:"-0.02em",color:txt,lineHeight:1.1 }}>{selected.name}</h2>
                </div>
                <button style={ib} onClick={()=>setSelected(null)}><Ico.x/></button>
              </div>
              <div style={{ fontFamily:sans,fontSize:"12px",lineHeight:1.7,color:txtS,marginBottom:"12px" }}>{selected.desc}</div>
              <div style={{ display:"flex",gap:"3px",color:acc,marginBottom:"12px",alignItems:"center" }}>{[1,2,3,4,5].map(i=><span key={i} style={{ color:i<=Math.round(selected.rating)?acc:txtM }}>{Ico.star(i<=Math.round(selected.rating))}</span>)}<span style={{ fontFamily:sans,fontSize:"10px",color:txtM,marginLeft:"5px" }}>{selected.rating} · {selected.reviews}</span></div>
              <div style={{ fontSize:"26px",fontStyle:"italic",color:acc,marginBottom:"3px" }}>£{selected.price.toFixed(2)}</div>
              <div style={{ fontFamily:sans,fontSize:"10px",color:txtM }}>{selected.cal} kcal</div>
            </div>
          </div>
          <div style={{ padding:"20px 24px" }}>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:brd,marginBottom:"20px" }}>
              {[["Origin",selected.origin||"—"],selected.roast?["Roast",selected.roast]:["Type",selected.type],selected.brew?["Method",selected.brew]:["Pairs",selected.pairs]].map(([k,v])=>(
                <div key={k} style={{ background:bgCard,padding:"14px 16px" }}><div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.12em",textTransform:"uppercase",color:txtM,marginBottom:"4px" }}>{k}</div><div style={{ fontFamily:sans,fontSize:"12px",color:txt }}>{v}</div></div>
              ))}
            </div>
            {selected.tasting&&<div style={{ marginBottom:"20px" }}><div style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.12em",textTransform:"uppercase",color:txtM,marginBottom:"8px" }}>Tasting Notes</div><div style={{ display:"flex",gap:"5px",flexWrap:"wrap" }}>{selected.tasting.map(t=><span key={t} style={{ fontFamily:sans,fontSize:"11px",color:txtS,background:bgSurf,border:`1px solid ${brd}`,padding:"4px 10px" }}>{t}</span>)}</div></div>}
            <div style={{ display:"flex",gap:"8px" }}>
              <button className="hb" style={{ ...ctaB,flex:1,justifyContent:"center",padding:"11px" }} onClick={()=>{addCart(selected);setSelected(null);}}><Ico.plus/>Add to Order — £{selected.price.toFixed(2)}</button>
              <button style={{ ...ib,border:`1px solid ${brd}`,padding:"11px 13px",color:wishlist.includes(selected.id)?acc:txtM }} onClick={()=>togWish(selected.id)}>{Ico.heart(wishlist.includes(selected.id))}</button>
            </div>
          </div>
        </div>
      </div>}

      {/* CART DRAWER */}
      {cartOpen&&<div style={{ position:"fixed",inset:0,zIndex:250 }}>
        <div style={{ position:"absolute",inset:0,background:"rgba(0,0,0,0.55)" }} onClick={()=>setCartOpen(false)}/>
        <div className="si" style={{ position:"absolute",top:0,right:0,bottom:0,width:"385px",background:bgCard,borderLeft:`1px solid ${brd}`,display:"flex",flexDirection:"column" }}>
          <div style={{ padding:"24px 24px 0",borderBottom:`1px solid ${brd}`,paddingBottom:"18px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
            <h2 style={{ fontSize:"20px",fontStyle:"italic",color:txt,letterSpacing:"-0.02em" }}>Your Order</h2>
            <button style={ib} onClick={()=>setCartOpen(false)}><Ico.x/></button>
          </div>
          <div style={{ flex:1,overflowY:"auto",padding:"18px 24px" }}>
            {cart.length===0?<div style={{ textAlign:"center",paddingTop:"72px",fontFamily:sans,fontSize:"13px",color:txtM,fontStyle:"italic" }}>The cup awaits.<br/>Nothing in your order yet.</div>:
            cart.map(item=>(
              <div key={item.id} style={{ display:"flex",gap:"12px",alignItems:"center",borderBottom:`1px solid ${brd}`,paddingBottom:"14px",marginBottom:"14px" }}>
                <div style={{ flexShrink:0 }}><ItemArt type={item.art} dark={dark} accent={acc} size={56}/></div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"14px",fontStyle:"italic",color:txt,marginBottom:"5px" }}>{item.name}</div>
                  <div style={{ display:"flex",alignItems:"center",gap:"8px" }}>
                    <button style={{ ...ib,border:`1px solid ${brd}`,padding:"3px" }} onClick={()=>updQty(item.id,-1)}><Ico.minus/></button>
                    <span style={{ fontFamily:sans,fontSize:"12px",color:txt,minWidth:"14px",textAlign:"center" }}>{item.qty}</span>
                    <button style={{ ...ib,border:`1px solid ${brd}`,padding:"3px" }} onClick={()=>updQty(item.id,1)}><Ico.plus/></button>
                  </div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:sans,fontSize:"13px",color:acc,marginBottom:"4px" }}>£{(item.price*item.qty).toFixed(2)}</div>
                  <button style={{ ...ib,color:txtM,padding:"2px" }} onClick={()=>updQty(item.id,-item.qty)}><Ico.x/></button>
                </div>
              </div>
            ))}
          </div>
          {cart.length>0&&<div style={{ padding:"18px 24px 24px",borderTop:`1px solid ${brd}` }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"6px" }}>
              <span style={{ fontFamily:sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM }}>Subtotal</span>
              <span style={{ fontSize:"22px",fontStyle:"italic",color:txt }}>£{cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ fontFamily:sans,fontSize:"10px",color:acc,marginBottom:"14px" }}>+{Math.floor(cartTotal*10)} loyalty points earned</div>
            <button className="hb" style={{ ...ctaB,width:"100%",justifyContent:"space-between",padding:"13px 18px" }} onClick={placeOrder}><span>Place Order</span><Ico.arrow/></button>
          </div>}
        </div>
      </div>}

      {/* FOOTER */}
      <footer style={{ borderTop:`1px solid ${brd}`,padding:"26px 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px" }}>
        <span style={{ fontFamily:font,fontStyle:"italic",fontSize:"15px",color:txtM }}>Mortem & Grain</span>
        <div style={{ display:"flex",gap:"20px" }}>{["Instagram","Press","Wholesale","Careers"].map(l=><span key={l} style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM,cursor:"pointer" }}>{l}</span>)}</div>
        <span style={{ fontFamily:sans,fontSize:"9px",letterSpacing:"0.1em",textTransform:"uppercase",color:txtM }}>Est. 2019 · London</span>
      </footer>
    </div>
  );
}
