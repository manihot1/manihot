// ─── Patologias (light) ───────────────────────────────────────────────────────
const patologias = {
  fungicas: [
    { nome: 'Podridão Radicular', agente: 'Phytophthora drechsleri', sintomas: 'Escurecimento e apodrecimento das raízes tuberosas, murcha e amarelecimento foliar. Perdas de até 80% da produção em áreas mal drenadas.', solucao: 'Bioagentes fúngicos à base de Trichoderma spp. isolados da manipueira suprimem o patógeno no solo.', icon: BotIcons.root(C.green, 36) },
    { nome: 'Antracnose', agente: 'Colletotrichum gloeosporioides', sintomas: 'Lesões necróticas nos ramos, queda de folhas e cancros no caule. Favorecida por alta umidade relativa e temperaturas amenas.', solucao: 'Extrato de manipueira tratado inibe o crescimento micelial em mais de 60% in vitro.', icon: BotIcons.leaf(C.green, 36) },
    { nome: 'Cercosporiose', agente: 'Cercospora henningsii', sintomas: 'Manchas angulares cinzento-pardas nas folhas com halo amarelado, provocando desfolha precoce e redução fotossintética severa.', solucao: 'Formulações bioativas da manipueira promovem resistência sistêmica induzida (ISR) nas plantas.', icon: BotIcons.leaf(C.gold, 36) },
  ],
  bacterianas: [
    { nome: 'Bacteriose', agente: 'Xanthomonas phaseoli pv. manihotis', sintomas: 'Manchas foliares aquosas, murcha de ramos apicais ("queima do broto"), exsudato bacteriano e podridão do colo em condições úmidas.', solucao: 'Biocontrole com bactérias antagonistas produzidas em meio de manipueira reduz incidência da doença em campo.', icon: BotIcons.molecule(C.teal, 36) },
    { nome: 'Murcha Bacteriana', agente: 'Ralstonia solanacearum', sintomas: 'Murcha súbita e irreversível, sem amarelecimento prévio. Escurecimento vascular interno nos ramos e raízes — diagnóstico pelo "fio bacteriano".', solucao: 'Biofungicidas à base de Bacillus spp. cultivados em manipueira apresentam ação supressora ao patossistema.', icon: BotIcons.dna(C.teal, 36) },
  ],
};

function Patologias() {
  const [tab, setTab] = React.useState('fungicas');
  const dados = patologias[tab];
  return (
    <section id="patologias" data-screen-label="04 Patologias" style={{ background: C.cream, padding: 0, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(24px, 6vw, 100px) 80px' }}>
        <Reveal>
          <SectionLabel light>Fitossanidade</SectionLabel>
          <H2>Patologias da Mandioca</H2>
          <Lead>Doenças que comprometem a produtividade — e como o Manihot oferece alternativas biológicas eficazes de controle.</Lead>
        </Reveal>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, borderBottom: `1.5px solid ${C.cream2}` }}>
          {[
            { key: 'fungicas', label: 'Fúngicas', icon: BotIcons.leaf(tab === 'fungicas' ? C.gold : C.textMid, 18) },
            { key: 'bacterianas', label: 'Bacterianas', icon: BotIcons.molecule(tab === 'bacterianas' ? C.teal : C.textMid, 18) },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14,
              padding: '10px 24px', border: 'none', borderRadius: '10px 10px 0 0', cursor: 'pointer',
              background: tab === t.key ? '#fff' : 'transparent',
              color: tab === t.key ? C.textDark : C.textMid,
              borderBottom: tab === t.key ? `2.5px solid ${t.key === 'fungicas' ? C.gold : C.teal}` : '2.5px solid transparent',
              transition: 'all 0.2s', marginBottom: -1.5,
            }}>{t.icon}{t.label}</button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {dados.map((d, i) => (
            <Reveal key={d.nome} delay={i * 0.07}>
              <div style={{
                background: '#fff', borderRadius: 18, overflow: 'hidden',
                border: `1px solid ${C.cream2}`, boxShadow: '0 2px 20px #1A1C1B06',
                transition: 'box-shadow 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px #1A1C1B10'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 20px #1A1C1B06'}
              >
                <div style={{ display: 'flex', gap: 0 }}>
                  {/* Icon strip */}
                  <div style={{
                    width: 72, background: C.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>{d.icon}</div>

                  <div style={{ padding: '26px 30px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                      <div>
                        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 19, color: C.textDark, margin: 0 }}>{d.nome}</h4>
                        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: C.textMid, margin: '4px 0 0', fontStyle: 'italic' }}>Agente: {d.agente}</p>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: C.textMid, lineHeight: 1.7, margin: '0 0 16px' }}>
                      <strong style={{ color: C.textDark }}>Sintomas:</strong> {d.sintomas}
                    </p>
                    <SolutionCallout>{d.solucao}</SolutionCallout>
                  </div>
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
window.Patologias = Patologias;

// ─── Deficiências (dark) ──────────────────────────────────────────────────────
const nutrientes = [
  { sym: 'N', nome: 'Nitrogênio', cor: C.teal, sintoma: 'Amarelecimento das folhas mais velhas (clorose generalizada), crescimento reduzido e hastes finas.', impacto: 'Queda de 40–60% na produção de raízes tuberosas.', solucao: 'Biofertilizante à base de manipueira reequilibra o N disponível no solo.' },
  { sym: 'P', nome: 'Fósforo', cor: C.gold, sintoma: 'Folhas com coloração purpúrea, raízes pouco desenvolvidas e atraso no florescimento.', impacto: 'Reduz absorção de outros nutrientes e enraizamento.', solucao: 'Manipueira enriquecida com fosfobactérias aumenta P disponível.' },
  { sym: 'K', nome: 'Potássio', cor: C.teal, sintoma: 'Necrose nas margens das folhas velhas, enrolamento foliar e queda precoce de folhas.', impacto: 'Enfraquece resistência à seca e reduz teor de amido.', solucao: 'Bioestimulantes potencializados com K orgânico da manipueira.' },
  { sym: 'Ca', nome: 'Cálcio', cor: C.gold, sintoma: 'Deformação de folhas jovens, morte do meristema apical e podridão apical das raízes.', impacto: 'Comprometimento estrutural da parede celular das raízes.', solucao: 'Formulações com Ca proveniente de subprodutos da manipueira neutralizada.' },
  { sym: 'Mg', nome: 'Magnésio', cor: C.teal, sintoma: 'Clorose internerval em folhas maduras, mantendo nervuras verdes — padrão característico.', impacto: 'Redução da fotossíntese e síntese de clorofila.', solucao: 'Bioinoculantes com micorrizas produzidos em meio de manipueira.' },
  { sym: 'Zn', nome: 'Zinco + Micro', cor: C.gold, sintoma: 'Folhas pequenas, entrenós curtos, folhas em roseta. Típico de solos tropicais lixiviados.', impacto: 'Comprometimento enzimático e hormonal generalizado.', solucao: 'Caldas bioativas enriquecidas com micronutrientes quelados da manipueira.' },
];

function Deficiencias() {
  return (
    <section id="deficiencias" data-screen-label="05 Deficiencias" style={{ background: C.dark, padding: 0, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(24px, 6vw, 100px) 0', position: 'relative' }}>
        <LeafTexture opacity={0.06} />
        <Reveal style={{ textAlign: 'center', position: 'relative' }}>
          <SectionLabel>Nutrição</SectionLabel>
          <H2 light style={{ textAlign: 'center' }}>Distúrbios Fisiológicos</H2>
          <Lead light style={{ margin: '0 auto 48px', textAlign: 'center' }}>Deficiências silenciosas que comprometem a mandiocultura — e como o biocontrole Manihot pode corrigi-las.</Lead>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, position: 'relative', alignItems: 'stretch' }}>
          {nutrientes.map((n, i) => (
            <Reveal key={n.sym} delay={i * 0.07}>
              <div style={{
                background: '#163020', borderRadius: 18, padding: '24px',
                border: `1px solid ${n.cor}1a`,
                display: 'flex', flexDirection: 'column',
                flex: 1, boxSizing: 'border-box',
                transition: 'transform 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = n.cor + '44'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = n.cor + '1a'; }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                      background: n.cor + '18', border: `1.5px solid ${n.cor}44`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: n.cor,
                    }}>{n.sym}</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17, color: C.white }}>{n.nome}</div>
                  </div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: C.textDim, lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: C.textLight + 'cc' }}>Sintoma:</strong> {n.sintoma}
                  </p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: C.teal + 'cc', margin: 0 }}>
                    Impacto: {n.impacto}
                  </p>
                </div>
                <div style={{
                  background: n.cor + '10', border: `1px solid ${n.cor}33`,
                  borderRadius: 10, padding: '10px 14px', marginTop: 20,
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: n.cor, lineHeight: 1.5,
                  display: 'flex', alignItems: 'flex-start', minHeight: 96, boxSizing: 'border-box',
                }}><span style={{ marginRight: 8, marginTop: 1 }}>✦</span> <div>{n.solucao}</div></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <WaveDown from={C.dark} to={C.cream} />
    </section>
  );
}
window.Deficiencias = Deficiencias;
