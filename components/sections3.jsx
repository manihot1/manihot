// ─── Fitopragas (light) ───────────────────────────────────────────────────────
const pragas = [
  { nome: 'Ácaro-verde', cientifico: 'Mononychellus tanajoa', icone: BotIcons.mite(C.gold, 44), dano: 'Raspagem foliar causando bronzeamento, enrolamento e queda das folhas. Em infestações severas, destrói 80% da copa.', fase: 'Período seco', controle: 'Ácaros predadores Neoseiulus spp. cultivados em meio de manipueira controlam populações naturalmente.' },
  { nome: 'Mosca-branca', cientifico: 'Bemisia tabaci / Aleurothrixus aepim', icone: BotIcons.bug(C.teal, 44), dano: 'Sucção de seiva e transmissão de vírus (CBSD). Fumagina secundária compromete fotossíntese e qualidade visual.', fase: 'Pico na estação seca', controle: 'Formulação bioativa da manipueira com repelência comprovada + parasitoides Encarsia spp.' },
  { nome: 'Tripes', cientifico: 'Frankliniella williamsi', icone: BotIcons.mite(C.green, 44), dano: 'Raspagem de brotações novas causando encarquilhamento, deformação dos pecíolos e redução do vigor das plantas jovens.', fase: 'Brotação — primeiras 4 semanas', controle: 'Extratos da manipueira com HCN diluído têm efeito repelente e inseticida natural de baixo impacto.' },
  { nome: 'Mandarová', cientifico: 'Erinnyis ello', icone: BotIcons.bug(C.gold, 44), dano: 'Lagartas que desfolham completamente a planta em poucos dias. Uma única lagarta consome várias folhas por dia nas fases tardias.', fase: 'Fase vegetativa — 3º ao 5º ínstar', controle: 'Baculovirus erinnyis produzido em meio enriquecido com manipueira — biocontrole clássico de alta eficácia.' },
];

function Fitopragas() {
  return (
    <section id="fitopragas" data-screen-label="06 Fitopragas" style={{ background: C.cream, padding: '0 clamp(24px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 0 0' }}>
        <Reveal>
          <SectionLabel light>Entomologia Agrícola</SectionLabel>
          <H2>Fitopragas da Mandioca</H2>
          <Lead>As principais pragas que ameaçam a produção — e as soluções biológicas que o Manihot desenvolve com base na manipueira.</Lead>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 22 }}>
          {pragas.map((p, i) => (
            <Reveal key={p.nome} delay={i * 0.08}>
              <div style={{
                background: '#fff', borderRadius: 20, overflow: 'hidden',
                border: `1px solid ${C.cream2}`, boxShadow: '0 2px 20px #1A1C1B06',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px #1A1C1B12'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 20px #1A1C1B06'; }}
              >
                {/* Header */}
                <div style={{ background: C.cream, padding: '24px 24px 20px', display: 'flex', gap: 16, alignItems: 'center', borderBottom: `1px solid ${C.cream2}` }}>
                  <div style={{ flexShrink: 0 }}>{p.icone}</div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17, color: C.textDark }}>{p.nome}</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: C.textMid, fontStyle: 'italic' }}>{p.cientifico}</div>
                  </div>
                </div>
                <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: C.textMid, lineHeight: 1.65, margin: 0 }}>{p.dano}</p>
                  <div style={{ background: C.cream, borderRadius: 8, padding: '8px 12px' }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: C.textMid }}>
                      ⏱ Fase crítica: <strong style={{ color: C.textDark }}>{p.fase}</strong>
                    </span>
                  </div>
                  <SolutionCallout>{p.controle}</SolutionCallout>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <WaveDown from={C.cream} to={C.dark} />
    </section>
  );
}
window.Fitopragas = Fitopragas;

// ─── Aedes (dark) ─────────────────────────────────────────────────────────────
function Aedes() {
  const teal = C.teal;
  const stats = [
    { n: '3.000', label: 'mortes/ano por dengue no Brasil' },
    { n: '3M+', label: 'casos confirmados em 2024' },
    { n: '90%', label: 'inibição larval in vitro*' },
  ];
  const ciclo = [
    { fase: 'Ovo', acao: 'Ovicida', cor: C.textDim, highlight: false },
    { fase: 'Larva', acao: 'Larvicida', cor: teal, highlight: true },
    { fase: 'Pupa', acao: 'Puparicida', cor: C.textDim, highlight: false },
    { fase: 'Adulto', acao: 'Repelente', cor: C.gold + 'aa', highlight: false },
  ];
  return (
    <section id="aedes" data-screen-label="07 Aedes" style={{ background: C.dark, padding: '0 clamp(24px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 0 0', position: 'relative' }}>
        <CircuitBg opacity={0.05} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', marginBottom: 64, position: 'relative' }} className="two-col">
          <Reveal>
            <SectionLabel>Saúde Pública</SectionLabel>
            <H2 light>Aedes aegypti<br />&amp; o Biocontrole</H2>
            <Lead light>O mesmo ácido cianídrico que torna a manipueira um passivo ambiental pode salvar vidas. Compostos bioativos isolados demonstram potente ação larvicida e ovicida contra o Aedes aegypti.</Lead>
          </Reveal>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {stats.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div style={{
                  background: '#163020', borderRadius: 16, padding: '24px 28px',
                  border: `1px solid ${teal}22`, display: 'flex', gap: 20, alignItems: 'center',
                }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: teal, lineHeight: 1, flexShrink: 0 }}>{s.n}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: C.textDim, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Ciclo infográfico */}
        <Reveal>
          <div style={{
            background: '#163020', borderRadius: 20, padding: '40px',
            border: `1px solid ${C.gold}18`, position: 'relative',
          }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: C.white, marginBottom: 36, textAlign: 'center' }}>
              Ciclo do Aedes × Pontos de Ação do Biocontrole Manihot
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, flexWrap: 'wrap' }}>
              {ciclo.map((item, i) => (
                <React.Fragment key={item.fase}>
                  <div style={{ textAlign: 'center', padding: '0 20px' }}>
                    <div style={{
                      width: 80, height: 80, borderRadius: '50%', margin: '0 auto 14px',
                      background: item.highlight ? teal + '18' : '#ffffff08',
                      border: `2px solid ${item.cor}`,
                      boxShadow: item.highlight ? `0 0 24px ${teal}44` : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15,
                      color: item.highlight ? teal : C.textDim,
                      transition: 'all 0.2s',
                    }}>{item.fase}</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: item.cor, maxWidth: 80 }}>
                      {item.highlight && '🎯 '}{item.acao}
                    </div>
                  </div>
                  {i < ciclo.length - 1 && (
                    <div style={{ color: C.textDim + '55', fontSize: 20, flexShrink: 0 }}>→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: C.textDim + '66', textAlign: 'center', marginTop: 24 }}>
              *dados preliminares de ensaios laboratoriais internos
            </p>
          </div>
        </Reveal>
      </div>
      <WaveDown from={C.dark} to={C.dark} />
    </section>
  );
}
window.Aedes = Aedes;

// ─── Agrotóxicos (dark) ───────────────────────────────────────────────────────
const comparativo = [
  { aspecto: 'Toxicidade ao solo', agro: 'Persistência por anos, bioacumulação', bio: 'Degradação natural em semanas' },
  { aspecto: 'Impacto em polinizadores', agro: 'Mortalidade massiva de abelhas e borboletas', bio: 'Seletivo — não afeta insetos benéficos' },
  { aspecto: 'Contaminação hídrica', agro: 'Lixiviação para lençóis e rios', bio: 'Sem resíduos tóxicos persistentes' },
  { aspecto: 'Saúde do agricultor', agro: 'Intoxicações, doenças ocupacionais', bio: 'Manejo seguro, sem EPI especial' },
  { aspecto: 'Resistência do alvo', agro: 'Desenvolvida em poucos ciclos', bio: 'Mecanismo diversificado — baixa resistência' },
  { aspecto: 'Custo ambiental', agro: 'Externalidades não contabilizadas', bio: 'Ciclo circular — resíduo vira solução' },
];

function Agrotoxicos() {
  return (
    <section id="agrotoxicos" data-screen-label="08 Agrotoxicos" style={{ background: C.dark, padding: '0 clamp(24px, 6vw, 100px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 0 80px', position: 'relative' }}>
        <CircuitBg opacity={0.04} />

        <Reveal style={{ position: 'relative' }}>
          <SectionLabel>Impacto Sistêmico</SectionLabel>
          <H2 light>Agrotóxicos<br />nos Ecossistemas</H2>
          <Lead light>O Brasil é o maior consumidor global de agrotóxicos. Cada litro aplicado deixa rastros no solo, na água, nos polinizadores e na saúde humana. Existe um caminho melhor.</Lead>
        </Reveal>

        {/* Table */}
        <Reveal delay={0.1}>
          <div style={{
            background: '#163020', borderRadius: 20, overflow: 'hidden',
            border: `1px solid ${C.gold}18`, marginBottom: 56, position: 'relative',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#122618', padding: '16px 28px', borderBottom: `1px solid ${C.gold}18` }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, color: C.textDim, textTransform: 'uppercase', letterSpacing: 1 }}>Aspecto</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, color: '#E05252' }}>❌ Agrotóxico</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, color: C.gold }}>✅ Biocontrole Manihot</div>
            </div>
            {comparativo.map((c, i) => (
              <div key={c.aspecto} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '15px 28px', gap: 16,
                background: i % 2 === 0 ? '#12261844' : 'transparent',
                borderBottom: i < comparativo.length - 1 ? `1px solid ${C.gold}0a` : 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.gold + '08'}
              onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? '#12261844' : 'transparent'}
              >
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: C.textLight }}>{c.aspecto}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: '#C07070', lineHeight: 1.5 }}>{c.agro}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: C.teal + 'cc', lineHeight: 1.5 }}>{c.bio}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1} style={{ position: 'relative' }}>
          <div style={{
            borderRadius: 24, padding: 'clamp(36px, 5vw, 64px)',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
            background: `linear-gradient(135deg, ${'#163020'} 0%, #0C1F12 100%)`,
            border: `1px solid ${C.gold}22`,
          }}>
            {/* Gold glow */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
              width: 400, height: 200,
              background: `radial-gradient(ellipse, ${C.gold}0d 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <AccentBadge color={C.gold}>Junte-se ao Projeto</AccentBadge>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: 'clamp(26px, 3.5vw, 42px)', color: C.white, margin: '20px 0 16px',
              }}>Faça parte da solução</h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: C.textDim, maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
                O Manihot une ciência, sustentabilidade e impacto social. Junte-se a nós na construção de uma agricultura mais justa e biodiversa.
              </p>
              <button style={{
                background: C.gold, color: C.dark, border: 'none', borderRadius: 50,
                padding: '16px 52px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16,
                cursor: 'pointer', boxShadow: `0 4px 28px ${C.gold}44`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 10px 36px ${C.gold}66`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = `0 4px 28px ${C.gold}44`; }}
              >Conheça o Projeto Manihot →</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
window.Agrotoxicos = Agrotoxicos;

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#0A1F12', padding: '60px clamp(24px, 6vw, 100px) 40px', borderTop: `1px solid ${C.gold}18` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, textAlign: 'center' }}>
        <img src="uploads/pasted-1776710952173-0.png" alt="Manihot" style={{ height: 88, width: 'auto', opacity: 0.92 }} />
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: C.textDim, maxWidth: 460, lineHeight: 1.75, margin: 0 }}>
          Da raiz à solução — biotecnologia que preserva a vida.<br/>
          Projeto de pesquisa aplicada em biotecnologia agrícola e saúde pública.
        </p>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Mandiocultura','Manipueira','Patologias','Fitopragas','Aedes','Agrotóxicos'].map(l => (
            <span key={l} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: C.textDim + '77', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = C.gold}
            onMouseLeave={e => e.currentTarget.style.color = C.textDim + '77'}
            >{l}</span>
          ))}
        </div>
        <div style={{ width: '100%', height: 1, background: C.gold + '14' }} />
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: C.textDim + '55', margin: 0 }}>
          © 2026 Projeto Manihot · Todos os direitos reservados · Biotecnologia Sustentável
        </p>
      </div>
    </footer>
  );
}
window.Footer = Footer;
