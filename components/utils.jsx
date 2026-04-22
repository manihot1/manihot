// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  dark:    '#0F2D1A',   // deep logo green — primary dark bg
  dark2:   '#122618',   // slightly lighter dark green
  dark3:   '#163020',   // card dark bg — green tinted
  cream:   '#F2EFE9',   // warm off-white from logo bg
  cream2:  '#E8E4DC',   // slightly deeper cream
  gold:    '#C9A84C',   // primary accent — logo gold
  teal:    '#3ABDB5',   // secondary accent — DNA/insect teal
  green:   '#4A7C59',   // mid green — botanical accents
  leaf:    '#2E6B3E',   // leaf green for textures
  textDark:'#1A2D20',   // body text on light — green-tinted dark
  textMid: '#4A6655',   // secondary text on light
  textLight:'#C8DDD2',  // body text on dark
  textDim: '#6A9478',   // secondary text on dark — green-tinted
  white:   '#F2EFE9',
};

// Expose for all child scripts
window.C = C;

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}
window.useReveal = useReveal;

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, style = {} }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{
      transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s`,
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(28px)',
      ...style
    }}>{children}</div>
  );
}
window.Reveal = Reveal;

// ─── Wave dividers ────────────────────────────────────────────────────────────
function WaveDown({ from = 'transparent', to = '#fff' }) {
  return (
    <div style={{ lineHeight: 0, background: from, marginBottom: -1 }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 90 }}>
        <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill={to} />
      </svg>
    </div>
  );
}
function WaveUp({ from = 'transparent', to = '#fff' }) {
  return (
    <div style={{ lineHeight: 0, background: from, marginTop: -1 }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 90 }}>
        <path d="M0,45 C240,0 480,90 720,45 C960,0 1200,90 1440,45 L1440,0 L0,0 Z" fill={to} />
      </svg>
    </div>
  );
}
window.WaveDown = WaveDown;
window.WaveUp = WaveUp;

// ─── Botanical SVG icons (line-art, thin stroke, accent color) ────────────────
const BotIcons = {
  leaf: (color = C.gold, size = 48) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M8 40 C8 40 10 20 24 12 C38 4 42 8 42 8 C42 8 40 28 26 36 C14 43 8 40 8 40Z" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M8 40 L24 22" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M18 34 L30 18" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      <path d="M14 38 L32 22" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3"/>
    </svg>
  ),
  root: (color = C.gold, size = 48) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 6 L24 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 16 C24 16 18 22 14 30" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M24 20 C24 20 30 26 34 34" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M24 24 C24 24 20 30 18 40" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M24 26 C24 26 28 32 30 42" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
      <circle cx="24" cy="6" r="2" fill={color} opacity="0.6"/>
    </svg>
  ),
  bug: (color = C.teal, size = 48) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="26" rx="7" ry="10" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="24" cy="13" r="5" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M17 20 C10 18 8 24 8 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M31 20 C38 18 40 24 40 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M17 28 C12 28 10 32 10 36" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M31 28 C36 28 38 32 38 36" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M21 10 L18 6 M27 10 L30 6" stroke={color} strokeWidth="1" strokeLinecap="round"/>
      <path d="M20 24 L28 24 M20 28 L28 28" stroke={color} strokeWidth="0.8" opacity="0.5"/>
    </svg>
  ),
  molecule: (color = C.teal, size = 48) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="10" cy="12" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="38" cy="12" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="10" cy="36" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="38" cy="36" r="3" stroke={color} strokeWidth="1.2" fill="none"/>
      <line x1="20" y1="21" x2="13" y2="15" stroke={color} strokeWidth="1" opacity="0.7"/>
      <line x1="28" y1="21" x2="35" y2="15" stroke={color} strokeWidth="1" opacity="0.7"/>
      <line x1="20" y1="27" x2="13" y2="33" stroke={color} strokeWidth="1" opacity="0.7"/>
      <line x1="28" y1="27" x2="35" y2="33" stroke={color} strokeWidth="1" opacity="0.7"/>
    </svg>
  ),
  mite: (color = C.gold, size = 48) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="24" rx="9" ry="7" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="24" cy="17" r="3.5" stroke={color} strokeWidth="1.2" fill="none"/>
      <path d="M15 22 C8 20 6 15 8 12" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none"/>
      <path d="M15 25 C8 25 6 30 8 33" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M33 22 C40 20 42 15 40 12" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none"/>
      <path d="M33 25 C40 25 42 30 40 33" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M19 29 C16 33 16 38 20 40" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M29 29 C32 33 32 38 28 40" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
    </svg>
  ),
  dna: (color = C.teal, size = 48) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M18 6 C18 6 30 14 30 24 C30 34 18 42 18 42" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M30 6 C30 6 18 14 18 24 C18 34 30 42 30 42" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <line x1="18" y1="14" x2="30" y2="14" stroke={color} strokeWidth="1" opacity="0.7"/>
      <line x1="16" y1="20" x2="32" y2="20" stroke={color} strokeWidth="1" opacity="0.5"/>
      <line x1="16" y1="28" x2="32" y2="28" stroke={color} strokeWidth="1" opacity="0.5"/>
      <line x1="18" y1="34" x2="30" y2="34" stroke={color} strokeWidth="1" opacity="0.7"/>
    </svg>
  ),
  circuit: (color = C.teal, size = 48) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="8" width="32" height="32" rx="4" stroke={color} strokeWidth="1" fill="none" opacity="0.3"/>
      <path d="M8 20 L4 20 M8 28 L4 28 M40 20 L44 20 M40 28 L44 28" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M20 8 L20 4 M28 8 L28 4 M20 40 L20 44 M28 40 L28 44" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="18" y="18" width="12" height="12" rx="2" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="22" cy="22" r="1.5" fill={color} opacity="0.8"/>
      <circle cx="26" cy="26" r="1.5" fill={color} opacity="0.8"/>
    </svg>
  ),
};
window.BotIcons = BotIcons;

// ─── Leaf vein + organic circuit texture (for dark green sections) ─────────────
function LeafTexture({ opacity = 0.06 }) {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }} viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="leafvein" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Leaf vein — central rib */}
          <path d="M10 100 C30 70 50 30 60 10" stroke="#4A7C59" strokeWidth="1" fill="none" opacity="0.9"/>
          {/* Secondary veins */}
          <path d="M25 80 C35 72 45 65 55 60" stroke="#4A7C59" strokeWidth="0.6" fill="none" opacity="0.7"/>
          <path d="M35 65 C43 58 52 52 62 48" stroke="#4A7C59" strokeWidth="0.6" fill="none" opacity="0.6"/>
          <path d="M42 52 C50 46 58 41 68 38" stroke="#4A7C59" strokeWidth="0.5" fill="none" opacity="0.5"/>
          <path d="M48 40 C55 35 62 31 72 28" stroke="#4A7C59" strokeWidth="0.4" fill="none" opacity="0.4"/>
          {/* Circuit node */}
          <circle cx="90" cy="30" r="2" fill="#C9A84C" opacity="0.5"/>
          <path d="M80 30 L90 30 L90 50 L100 50" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.4"/>
          <circle cx="100" cy="50" r="1.5" fill="#3ABDB5" opacity="0.5"/>
          {/* Soil dots */}
          <circle cx="20" cy="110" r="1" fill="#4A7C59" opacity="0.3"/>
          <circle cx="40" cy="108" r="0.8" fill="#4A7C59" opacity="0.2"/>
          <circle cx="60" cy="112" r="1.2" fill="#4A7C59" opacity="0.25"/>
        </pattern>
      </defs>
      <rect width="500" height="500" fill="url(#leafvein)"/>
    </svg>
  );
}
window.LeafTexture = LeafTexture;
// keep old name for compatibility
window.CircuitBg = LeafTexture;

// ─── Shared UI pieces ─────────────────────────────────────────────────────────
function AccentBadge({ children, color = C.gold }) {
  return (
    <span style={{
      display: 'inline-block',
      border: `1px solid ${color}55`,
      color, borderRadius: 20, padding: '4px 14px',
      fontSize: 11, fontWeight: 600, letterSpacing: 1.5,
      fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase',
      background: color + '0d',
    }}>{children}</span>
  );
}
window.AccentBadge = AccentBadge;

function SectionLabel({ children, light = false }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <AccentBadge color={light ? C.gold : C.teal}>{children}</AccentBadge>
    </div>
  );
}
window.SectionLabel = SectionLabel;

function H2({ children, light = false, style = {} }) {
  return (
    <h2 style={{
      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
      fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.1,
      color: light ? C.white : C.textDark,
      margin: '0 0 20px', textWrap: 'pretty', ...style
    }}>{children}</h2>
  );
}
window.H2 = H2;

function Lead({ children, light = false, style = {} }) {
  return (
    <p style={{
      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400,
      fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.75,
      color: light ? C.textLight : C.textMid,
      margin: '0 0 40px', maxWidth: 640, textWrap: 'pretty', ...style
    }}>{children}</p>
  );
}
window.Lead = Lead;

// Card for light sections
function BotCard({ icon, title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div style={{
        background: '#fff', borderRadius: 18, padding: '32px 28px',
        border: `1px solid ${C.cream2}`,
        boxShadow: '0 2px 24px #1A1C1B08',
        transition: 'transform 0.25s, box-shadow 0.25s', cursor: 'default',
        display: 'flex', flexDirection: 'column', gap: 16,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 16px 40px #1A1C1B14`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 24px #1A1C1B08'; }}
      >
        <div>{icon}</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17, color: C.textDark }}>{title}</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, lineHeight: 1.7, color: C.textMid }}>{desc}</div>
      </div>
    </Reveal>
  );
}
window.BotCard = BotCard;

// Card for dark sections
function TechCard({ icon, title, desc, accent = C.gold, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div style={{
        background: C.dark3, borderRadius: 18, padding: '28px 24px',
        border: `1px solid ${accent}22`,
        transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s', cursor: 'default',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = accent + '66'; e.currentTarget.style.boxShadow = `0 16px 40px ${accent}12`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = accent + '22'; e.currentTarget.style.boxShadow = ''; }}
      >
        {icon && <div>{icon}</div>}
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: C.white }}>{title}</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, lineHeight: 1.65, color: C.textDim }}>{desc}</div>
      </div>
    </Reveal>
  );
}
window.TechCard = TechCard;

// Solution callout
function SolutionCallout({ children }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${C.gold}12, ${C.teal}08)`,
      border: `1px solid ${C.gold}44`,
      borderRadius: 12, padding: '14px 18px',
      display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 'auto',
    }}>
      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>✦</span>
      <div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 11, color: C.gold, letterSpacing: 1.5, marginBottom: 5, textTransform: 'uppercase' }}>Solução Manihot</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: C.textDark, lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}
window.SolutionCallout = SolutionCallout;

function SolutionCalloutLight({ children }) {
  return (
    <div style={{
      background: `${C.gold}10`,
      border: `1px solid ${C.gold}55`,
      borderRadius: 12, padding: '14px 18px',
      display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 'auto',
    }}>
      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1, color: C.gold }}>✦</span>
      <div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 11, color: C.gold, letterSpacing: 1.5, marginBottom: 5, textTransform: 'uppercase' }}>Solução Manihot</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: C.textDim, lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}
window.SolutionCalloutLight = SolutionCalloutLight;
