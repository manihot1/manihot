// ─── Tweaks panel ─────────────────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentGold": "#C9A84C",
  "accentTeal": "#3ABDB5",
  "darkBg": "#0F2D1A",
  "creamBg": "#F2EFE9",
  "fontFamily": "Space Grotesk"
}/*EDITMODE-END*/;

function TweaksPanel({ tweaks, setTweaks, visible }) {
  if (!visible) return null;
  const update = (key, val) => {
    const next = { ...tweaks, [key]: val };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
  };
  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
      background: 'rgba(15,45,26,0.96)', backdropFilter: 'blur(20px)',
      border: `1px solid ${C.gold}33`, borderRadius: 20,
      padding: '24px', width: 280, boxShadow: '0 20px 56px #00000077',
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      <div style={{ fontWeight: 700, fontSize: 13, color: C.gold, marginBottom: 20, letterSpacing: 1.5, textTransform: 'uppercase' }}>Tweaks</div>

      {[
        { key: 'accentGold', label: 'Acento dourado' },
        { key: 'accentTeal', label: 'Acento teal' },
        { key: 'darkBg', label: 'Fundo escuro' },
        { key: 'creamBg', label: 'Fundo claro' },
      ].map(({ key, label }) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <label style={{ fontSize: 13, color: C.textDim }}>{label}</label>
          <input type="color" value={tweaks[key]} onChange={e => update(key, e.target.value)}
            style={{ width: 38, height: 28, border: 'none', borderRadius: 6, cursor: 'pointer', background: 'none' }} />
        </div>
      ))}

      <div style={{ marginTop: 8 }}>
        <label style={{ fontSize: 13, color: C.textDim, display: 'block', marginBottom: 8 }}>Tipografia</label>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['Space Grotesk', 'DM Sans', 'Inter'].map(f => (
            <button key={f} onClick={() => update('fontFamily', f)} style={{
              fontFamily: f + ', sans-serif',
              background: tweaks.fontFamily === f ? C.gold : '#ffffff10',
              color: tweaks.fontFamily === f ? C.dark : C.textDim,
              border: 'none', borderRadius: 8, padding: '5px 12px',
              fontSize: 12, cursor: 'pointer', transition: 'all 0.2s',
            }}>{f.split(' ')[0]}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [tweaksVisible, setTweaksVisible] = React.useState(false);
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    window.addEventListener('message', e => {
      if (e.data?.type === '__activate_edit_mode') setTweaksVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false);
    });
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  }, []);

  // Apply tweaks globally
  React.useEffect(() => {
    Object.assign(C, {
      gold: tweaks.accentGold,
      teal: tweaks.accentTeal,
      dark: tweaks.darkBg,
      cream: tweaks.creamBg,
    });
    document.documentElement.style.setProperty('--font', `'${tweaks.fontFamily}', sans-serif`);
  }, [tweaks]);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <Mandiocultura />
      <Manipueira />
      <Patologias />
      <Deficiencias />
      <Fitopragas />
      <Aedes />
      <Agrotoxicos />
      <TeamCarousel />
      <Footer />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} visible={tweaksVisible} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
