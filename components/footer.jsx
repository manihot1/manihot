// ─── Footer ───────────────────────────────────────────────────────────────────


const IconInstagramFooter = ({ size = 16, color = C.gold }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconLinkedinFooter = ({ size = 16, color = C.teal }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

function Footer() {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
  };

  const navGroups = [
    {
      label: 'Cultivo',
      links: [
        { label: 'Mandiocultura', id: 'mandiocultura' },
        { label: 'Manipueira',   id: 'manipueira'    },
      ],
    },
    {
      label: 'Proteção vegetal',
      links: [
        { label: 'Patologias',   id: 'patologias'   },
        { label: 'Deficiências', id: 'deficiencias' },
        { label: 'Fitopragas',   id: 'fitopragas'   },
      ],
    },
    {
      label: 'Saúde & Impacto',
      links: [
        { label: 'Aedes',       id: 'aedes'       },
        { label: 'Agrotóxicos', id: 'agrotoxicos' },
        { label: 'Equipe',      id: 'equipe'      },
      ],
    },
  ];

  const socials = [
    { label: 'Instagram', href: '#', Icon: IconInstagramFooter },
    { label: 'LinkedIn',  href: '#', Icon: IconLinkedinFooter  },
  ];

  return (
    <>
      <WaveUp from={C.cream} to={C.dark} />
      <footer style={{
        background: C.dark,
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(56px, 7vw, 96px) clamp(24px, 7vw, 110px) 0',
      }}>
        <LeafTexture opacity={0.05} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="footer-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 1.4fr) repeat(3, minmax(140px, 1fr))',
            gap: 'clamp(32px, 4vw, 64px)',
            marginBottom: 56,
          }}>
            {/* Brand column */}
            <div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: 20, display: 'block' }}
              >
                <img src="public/manihot.png" alt="Manihot" style={{ height: 75, width: 'auto' }} />
              </button>

              <p style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, lineHeight: 1.8,
                color: C.textDim, maxWidth: 270, margin: '0 0 28px',
              }}>
                Transformamos manipueira — resíduo da mandiocultura — em agentes de biocontrole para lavouras, polinizadores e comunidades.
              </p>

              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label} href={href} aria-label={label}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 38, height: 38, borderRadius: 10,
                      background: `${C.gold}10`, border: `1px solid ${C.gold}20`,
                      transition: 'background 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${C.gold}22`; e.currentTarget.style.borderColor = `${C.gold}55`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${C.gold}10`; e.currentTarget.style.borderColor = `${C.gold}20`; }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav groups */}
            {navGroups.map(group => (
              <div key={group.label}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 11,
                  color: C.gold, letterSpacing: 1.6, textTransform: 'uppercase', marginBottom: 20,
                }}>
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {group.links.map(link => (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
                        color: C.textDim, textAlign: 'left',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = C.textLight; }}
                      onMouseLeave={e => { e.currentTarget.style.color = C.textDim;  }}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Divider + copyright ── */}
          <div style={{
            borderTop: `1px solid ${C.gold}18`,
            padding: '24px 0 28px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 13,
                color: C.textDim, opacity: 0.7,
              }}>
                © {new Date().getFullYear()} Projeto Manihot — Biotecnologia Sustentável. Todos os direitos reservados.
              </span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: C.textDim, opacity: 0.55 }}>
                Desenvolvido por{' '}
                {[
                  { nome: 'Gabriel Lucas', href: 'https://gabriellucasafb.com.br' },
                  { nome: 'Antonio Kawan', href: 'https://www.antoniokawan.dev.br/' },
                  { nome: 'André Arraes',  href: 'https://www.linkedin.com/in/andrearraes/' },
                ].map((dev, i, arr) => (
                  <React.Fragment key={dev.nome}>
                    <a href={dev.href} target="_blank" rel="noreferrer" style={{
                      color: C.textDim, opacity: 0.8,
                      textDecoration: 'none', transition: 'color 0.2s, opacity 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.gold; e.currentTarget.style.opacity = 1; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.textDim; e.currentTarget.style.opacity = 0.8; }}
                    >{dev.nome}</a>
                    {i < arr.length - 2 ? ', ' : i === arr.length - 2 ? ' & ' : ''}
                  </React.Fragment>
                ))}
              </span>
            </div>
            <AccentBadge color={C.teal}>Da raiz à solução</AccentBadge>
          </div>
        </div>
      </footer>
    </>
  );
}
window.Footer = Footer;
