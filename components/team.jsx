// ─── Team Carousel ────────────────────────────────────────────────────────────

const teamMembers = [
  { name: 'José Cleilton', role: 'Estudante', instagram: '#', linkedin: '#', photo: 'public/josecleiton.jpeg' },
  { name: 'Murilo Levi', role: 'Estudante', instagram: '#', linkedin: '#', photo: 'public/murilolevi.jpeg' },
  { name: 'Luciano Mota ', role: 'Estudante de Engenharia agronômica', instagram: 'https://www.instagram.com/luciano_mota16/', linkedin: '#', photo: 'public/luciano.jpeg' },
  { name: 'Cristiano Negreiros ', role: 'Estudante de Engenharia agronômica', instagram: 'https://www.instagram.com/cristianonegreiros7', linkedin: '#', photo: 'public/cristiano negreiros.jpeg' },
];

// SVG icons for social
const IconInstagram = ({ size = 18, color = '#C9A84C' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconLinkedin = ({ size = 18, color = '#3ABDB5' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Placeholder avatar — botanical/science themed initials
function AvatarPlaceholder({ name, size = 120 }) {
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('');
  // Deterministic hue from name
  const hue = name.charCodeAt(0) * 7 % 60 + 100; // 100–160 green range
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: `conic-gradient(from 45deg, hsl(${hue},35%,22%), hsl(${hue+20},45%,32%))`,
      border: `2px solid ${C.gold}44`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
      fontSize: size * 0.32, color: C.gold, letterSpacing: 1, flexShrink: 0,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle leaf mark behind */}
      <svg style={{ position: 'absolute', inset: 0, opacity: 0.08 }} viewBox="0 0 120 120" fill="none">
        <path d="M20 100 C20 100 25 50 60 30 C95 10 105 20 105 20 C105 20 100 70 65 90 C32 108 20 100 20 100Z" fill="#4A7C59"/>
        <path d="M20 100 L60 55" stroke="#4A7C59" strokeWidth="2"/>
      </svg>
      <span style={{ position: 'relative' }}>{initials}</span>
    </div>
  );
}

function MemberCard({ member }) {
  return (
    <div style={{
      width: 220, flexShrink: 0,
      background: '#163020',
      border: `1px solid ${C.gold}22`,
      borderRadius: 20, padding: '28px 20px 22px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      marginRight: 20,
      transition: 'border-color 0.25s, transform 0.25s',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = C.gold + '66';
      e.currentTarget.style.transform = 'translateY(-6px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = C.gold + '22';
      e.currentTarget.style.transform = '';
    }}
    >
      {/* Photo or placeholder */}
      {member.photo
        ? <img src={member.photo} alt={member.name} style={{
            width: 96, height: 96, borderRadius: '50%', objectFit: 'cover',
            border: `2px solid ${C.gold}44`, flexShrink: 0,
          }} />
        : <AvatarPlaceholder name={member.name} size={96} />
      }

      {/* Name & role */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: 15, color: C.white, lineHeight: 1.3, marginBottom: 5,
        }}>{member.name}</div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400,
          fontSize: 12, color: C.textDim, lineHeight: 1.4,
        }}>{member.role}</div>
      </div>

      {/* Social icons */}
      <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
        {member.instagram && member.instagram !== '#' && (
          <a href={member.instagram} target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 10,
            background: C.gold + '14', border: `1px solid ${C.gold}33`,
            transition: 'background 0.2s, border-color 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = C.gold + '28'; e.currentTarget.style.borderColor = C.gold + '77'; }}
          onMouseLeave={e => { e.currentTarget.style.background = C.gold + '14'; e.currentTarget.style.borderColor = C.gold + '33'; }}
          >
            <IconInstagram size={16} color={C.gold} />
          </a>
        )}
        {member.linkedin && member.linkedin !== '#' && (
          <a href={member.linkedin} target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 10,
            background: C.teal + '14', border: `1px solid ${C.teal}33`,
            transition: 'background 0.2s, border-color 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = C.teal + '28'; e.currentTarget.style.borderColor = C.teal + '77'; }}
          onMouseLeave={e => { e.currentTarget.style.background = C.teal + '14'; e.currentTarget.style.borderColor = C.teal + '33'; }}
          >
            <IconLinkedin size={16} color={C.teal} />
          </a>
        )}
      </div>
    </div>
  );
}

function TeamCarousel() {
  // Duplicate members enough times for seamless infinite scroll
  const track = [...teamMembers, ...teamMembers, ...teamMembers];
  const [paused, setPaused] = React.useState(false);

  const CARD_W = 220 + 20; // card width (220) + marginRight (20)
  const trackWidth = teamMembers.length * CARD_W;

  return (
    <section id="equipe" data-screen-label="09 Equipe" style={{
      background: C.dark, padding: '0 0 80px', position: 'relative', overflow: 'hidden',
    }}>
      <LeafTexture opacity={0.05} />

      <WaveUp from={C.cream} to={C.dark} />

      <div style={{ position: 'relative', padding: '64px 0 0' }}>
        <Reveal style={{ textAlign: 'center', padding: '0 clamp(24px, 6vw, 100px)', marginBottom: 52 }}>
          <SectionLabel>Time</SectionLabel>
          <H2 light style={{ textAlign: 'center' }}>Conheça Nossa Equipe</H2>
          <Lead light style={{ margin: '0 auto', textAlign: 'center' }}>
            Cientistas, agrônomos e inovadores unidos por um propósito: transformar a biodiversidade em solução.
          </Lead>
        </Reveal>

        {/* Carousel track */}
        <div
          style={{ position: 'relative', overflow: 'hidden' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fade masks */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
            background: `linear-gradient(to right, ${C.dark}, transparent)`, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
            background: `linear-gradient(to left, ${C.dark}, transparent)`, pointerEvents: 'none',
          }} />

          <div style={{
            display: 'flex',
            padding: '16px 40px 24px',
            animation: `carouselScroll ${teamMembers.length * 4}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
            width: 'max-content',
          }}>
            {track.map((m, i) => (
              <MemberCard key={`${m.name}-${i}`} member={m} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes carouselScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${trackWidth}px); }
        }
      `}</style>
    </section>
  );
}

window.TeamCarousel = TeamCarousel;
