// ─── Mandioca plant silhouette SVG ────────────────────────────────────────────
function MandiocaSilhouette() {
  return (
    <svg viewBox="0 0 320 520" fill="none"
      style={{ position: 'absolute', right: 'clamp(20px, 8vw, 120px)', bottom: 0, height: '78vh', maxHeight: 560, opacity: 0.09, pointerEvents: 'none' }}>
      <path d="M160 500 L160 80" stroke="#4A7C59" strokeWidth="6" strokeLinecap="round"/>
      <path d="M160 120 C140 100 110 90 80 95" stroke="#4A7C59" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M80 95 C55 80 30 55 20 30" stroke="#4A7C59" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M20 30 C0 10 -10 -5 5 0 C20 5 18 20 20 30Z" fill="#4A7C59" opacity="0.8"/>
      <path d="M20 30 C10 8 15 -10 28 -5 C40 0 32 18 20 30Z" fill="#4A7C59" opacity="0.7"/>
      <path d="M20 30 C25 5 38 -8 46 2 C54 12 38 22 20 30Z" fill="#4A7C59" opacity="0.6"/>
      <path d="M20 30 C30 12 44 2 50 14 C56 26 38 30 20 30Z" fill="#4A7C59" opacity="0.5"/>
      <path d="M20 30 C18 15 26 0 36 8 C46 16 36 26 20 30Z" fill="#4A7C59" opacity="0.5"/>
      <path d="M160 150 C180 128 210 118 245 120" stroke="#4A7C59" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M245 120 C270 108 295 82 305 55" stroke="#4A7C59" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M305 55 C325 35 335 20 320 15 C305 10 308 32 305 55Z" fill="#4A7C59" opacity="0.8"/>
      <path d="M305 55 C315 30 308 12 295 8 C282 4 292 28 305 55Z" fill="#4A7C59" opacity="0.7"/>
      <path d="M305 55 C290 32 280 15 270 20 C260 25 276 40 305 55Z" fill="#4A7C59" opacity="0.6"/>
      <path d="M305 55 C285 38 278 22 288 14 C298 6 305 32 305 55Z" fill="#4A7C59" opacity="0.5"/>
      <path d="M305 55 C320 40 328 24 316 18 C304 12 305 36 305 55Z" fill="#4A7C59" opacity="0.5"/>
      <path d="M160 220 C135 205 105 200 75 208" stroke="#4A7C59" strokeWidth="3" strokeLinecap="round"/>
      <path d="M75 208 C50 195 28 172 18 148" stroke="#4A7C59" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 148 C-2 128 -12 112 3 108 C18 104 16 128 18 148Z" fill="#4A7C59" opacity="0.75"/>
      <path d="M18 148 C8 125 14 107 27 103 C40 99 30 126 18 148Z" fill="#4A7C59" opacity="0.65"/>
      <path d="M18 148 C28 128 36 112 44 120 C52 128 38 140 18 148Z" fill="#4A7C59" opacity="0.5"/>
      <path d="M160 260 C188 248 218 248 248 258" stroke="#4A7C59" strokeWidth="3" strokeLinecap="round"/>
      <path d="M248 258 C275 248 298 225 308 200" stroke="#4A7C59" strokeWidth="2" strokeLinecap="round"/>
      <path d="M308 200 C328 180 338 164 323 160 C308 156 310 178 308 200Z" fill="#4A7C59" opacity="0.75"/>
      <path d="M308 200 C318 176 312 158 299 154 C286 150 296 175 308 200Z" fill="#4A7C59" opacity="0.65"/>
      <path d="M308 200 C292 178 284 160 294 152 C304 144 312 172 308 200Z" fill="#4A7C59" opacity="0.5"/>
      <path d="M160 500 C148 490 130 480 110 490 C90 500 85 510 80 520" stroke="#4A7C59" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M160 500 C172 488 192 478 212 488 C232 498 238 508 244 520" stroke="#4A7C59" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M160 500 C155 485 150 470 140 480 C130 490 128 510 125 520" stroke="#4A7C59" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"/>
      <path d="M160 500 C165 484 170 468 182 476 C194 484 196 505 200 520" stroke="#4A7C59" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"/>
      <ellipse cx="88" cy="516" rx="18" ry="10" fill="#4A7C59" opacity="0.35" transform="rotate(-20 88 516)"/>
      <ellipse cx="238" cy="514" rx="16" ry="9" fill="#4A7C59" opacity="0.35" transform="rotate(15 238 514)"/>
    </svg>
  );
}

// ─── Particle canvas ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 42 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.4, gold: Math.random() > 0.65,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? C.gold + '88' : C.teal + '66'; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 100) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = (pts[i].gold ? C.gold : C.teal) + Math.floor((1-d/100)*32).toString(16).padStart(2,'0');
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const links = ['Mandiocultura','Manipueira','Patologias','Deficiências','Fitopragas','Aedes','Agrotóxicos','Equipe'];
  const ids   = ['mandiocultura','manipueira','patologias','deficiencias','fitopragas','aedes','agrotoxicos','equipe'];
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
    setMenuOpen(false);
  };
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(15,45,26,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.gold}22` : 'none',
      boxShadow: scrolled ? '0 2px 32px #00000044' : 'none',
      transition: 'all 0.35s ease',
      padding: '0 clamp(16px, 4vw, 56px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68,
    }}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <img src="uploads/pasted-1776710952173-0.png" alt="Manihot" style={{ height: 42, width: 'auto' }} />
      </button>
      <div style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="nav-desktop">
        {links.map((l, i) => (
          <button key={l} onClick={() => scrollTo(ids[i])} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 13,
            color: C.textLight + 'bb', padding: '6px 12px', borderRadius: 8,
            transition: 'color 0.2s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => e.currentTarget.style.color = C.gold}
          onMouseLeave={e => e.currentTarget.style.color = C.textLight + 'bb'}
          >{l}</button>
        ))}
        <button onClick={() => scrollTo('mandiocultura')} style={{
          marginLeft: 8, background: C.gold, color: C.dark, border: 'none', borderRadius: 50,
          padding: '8px 20px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13,
          cursor: 'pointer', transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >Explorar →</button>
      </div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn" style={{
        display: 'none', background: 'none', border: 'none', cursor: 'pointer',
        color: C.textLight, fontSize: 26, padding: 4, lineHeight: 1,
      }}>☰</button>
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 68, left: 0, right: 0,
          background: 'rgba(15,45,26,0.98)', backdropFilter: 'blur(16px)',
          padding: '8px 0 16px', display: 'flex', flexDirection: 'column',
          borderBottom: `1px solid ${C.gold}20`,
        }}>
          {links.map((l, i) => (
            <button key={l} onClick={() => scrollTo(ids[i])} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 16,
              color: C.textLight, padding: '13px 32px', textAlign: 'left',
              borderBottom: `1px solid ${C.gold}12`,
            }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
window.Navbar = Navbar;

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
  };
  return (
    <section id="inicio" data-screen-label="01 Hero" style={{
      minHeight: '100vh',
      background: `radial-gradient(ellipse 80% 70% at 20% 60%, #1B4D2E 0%, ${C.dark} 55%)`,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <LeafTexture opacity={0.07} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 55% 45% at 18% 55%, #2E6B3E28 0%, transparent 65%),
                     radial-gradient(ellipse 35% 55% at 80% 25%, ${C.teal}0e 0%, transparent 60%),
                     radial-gradient(ellipse 45% 35% at 60% 85%, ${C.gold}0a 0%, transparent 50%)`,
        animation: 'heroOrb 14s ease-in-out infinite alternate',
      }} />
      <MandiocaSilhouette />
      <ParticleCanvas />
      <div style={{ position: 'relative', zIndex: 1, padding: '120px clamp(24px, 7vw, 110px) 80px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: 36 }}>
          <img src="uploads/pasted-1776710952173-0.png" alt="Manihot" style={{ height: 86, width: 'auto', filter: 'drop-shadow(0 4px 20px #00000055)' }} />
        </div>
        <AccentBadge color={C.teal}>Biotecnologia Sustentável</AccentBadge>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: 'clamp(44px, 7vw, 88px)',
          color: C.white, lineHeight: 1.05, margin: '24px 0 28px', textWrap: 'pretty', maxWidth: 780,
        }}>
          Da raiz<br /><span style={{ color: C.gold }}>à solução.</span>
        </h1>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(16px, 1.8vw, 20px)',
          color: C.textDim, lineHeight: 1.78, marginBottom: 52, maxWidth: 540,
        }}>
          Transformamos manipueira — resíduo da mandiocultura — em agentes de biocontrole que protegem lavouras, polinizadores e comunidades.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('mandiocultura')} style={{
            background: C.gold, color: C.dark, border: 'none', borderRadius: 50,
            padding: '15px 36px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15,
            cursor: 'pointer', boxShadow: `0 4px 24px ${C.gold}44`, transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 32px ${C.gold}66`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = `0 4px 24px ${C.gold}44`; }}
          >Conheça o projeto</button>
          <button onClick={() => scrollTo('manipueira')} style={{
            background: 'transparent', color: C.textLight,
            border: `1.5px solid ${C.green}88`, borderRadius: 50,
            padding: '15px 36px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15,
            cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.teal; e.currentTarget.style.color = C.teal; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.green}88`; e.currentTarget.style.color = C.textLight; }}
          >A manipueira →</button>
        </div>
        <div style={{ display: 'flex', gap: 40, marginTop: 72, flexWrap: 'wrap' }}>
          {[
            { n: '600M t', label: 'produção mundial/ano' },
            { n: '700M', label: 'pessoas dependem' },
            { n: '100+', label: 'países produtores' },
          ].map(s => (
            <div key={s.n} style={{ borderLeft: `2px solid ${C.gold}55`, paddingLeft: 16 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 26, color: C.gold }}>{s.n}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: C.textDim, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <WaveDown from={C.dark} to={C.cream} />
    </section>
  );
}
window.HeroSection = HeroSection;
