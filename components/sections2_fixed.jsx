// ─── Patologias (light) ───────────────────────────────────────────────────────
const patologias = {
  fungicas: [
    {
      nome: 'Podridão Radicular',
      agente: 'Fusarium solani',
      imagem: 'public/fungo-fusarium.jpeg',
      icon: BotIcons.root(C.green, 36),
      sintomas: 'Apodrecimento severo das raízes com lesões marrom-escuras, murcha e amarelecimento foliar. Resultado: morte da planta e perda total da produção.',
      sintomасCompleto: 'O Fusarium penetra nas raízes causando lesões marrom-escuras e apodrecimento severo, impedindo a absorção de água e nutrientes. Na parte aérea, as folhas apresentam amarelecimento, murcha e, em casos graves, queda completa. A planta tenta reagir com brotamento excessivo próximo ao solo, mas esses ramos logo enfraquecem. O resultado é morte da planta e raízes com odor forte, inviáveis para comércio ou consumo. Especialmente agressivo em solos mal drenados.',
      solucao: 'Bioagentes à base de Trichoderma spp. isolados da manipueira suprimem o patógeno no solo.',
      solucaoCompleta: 'O Manihot desenvolve biofungicidas à base de Trichoderma spp. multiplicados em meio de manipueira. Esses fungos benéficos colonizam o solo ao redor das raízes, competindo com o Fusarium e produzindo compostos antifúngicos naturais. A aplicação é feita no sulco de plantio ou via fertirrigação.',
      aplicacao: {
        diluicao: '1:3 (drench — aplicação no solo)',
        preparo: 'Resíduo com 48 horas de descanso para estabilização da acidez',
        tecnica: 'Aplicar 2 litros da mistura na base da planta (drench) para fungos de solo',
      },
    },
    {
      nome: 'Antracnose',
      agente: 'Colletotrichum gloeosporioides',
      imagem: 'public/antracnose.jpeg',
      icon: BotIcons.leaf(C.green, 36),
      sintomas: 'Lesões necróticas escuras nos ramos e folhas, com desfolha precoce e cancros no caule que matam os ponteiros.',
      sintomасCompleto: 'A antracnose manifesta-se através de manchas escuras, necróticas (marrom a negras) e deprimidas nas folhas. As lesões são acompanhadas de desfolha precoce, deformação dos folíolos e podem evoluir para cancros nas hastes, causando morte dos ponteiros. O fungo é favorecido por alta umidade e temperaturas amenas. A desfolha repetida compromete gravemente a produção de raízes.',
      solucao: 'Extrato de manipueira tratado inibe o crescimento micelial em mais de 60% in vitro.',
      solucaoCompleta: 'Ensaios do Manihot demonstram que o extrato de manipueira inibe o crescimento micelial de Colletotrichum gloeosporioides em mais de 60% in vitro. As formulações atuam por contato, impedindo a germinação de esporos e expansão das lesões. A aplicação preventiva nas hastes e folhas durante períodos de alta umidade reduz significativamente a incidência.',
      aplicacao: {
        diluicao: '1:3',
        preparo: 'Resíduo com 48 horas de descanso',
        tecnica: 'Pulverização foliar completa em ambos os lados da folha',
      },
    },
    {
      nome: 'Cercosporiose',
      agente: 'Cercospora henningsii',
      imagem: 'public/mancha-parda.jpeg',
      icon: BotIcons.leaf(C.gold, 36),
      sintomas: 'Manchas circulares marrons com halo amarelado em ambos os lados da folha. Doença foliar mais frequente na cultura.',
      sintomасCompleto: 'A Cercosporiose é a doença foliar mais frequente na mandioca. Caracteriza-se por manchas circulares marrons com halo amarelado em ambos os lados das folhas. Em infestações severas, as manchas coalescem, causando desfolha precoce e redução drástica da área fotossintética. É favorecida por alta umidade e temperatura amena.',
      solucao: 'Formulações bioativas da manipueira promovem resistência sistêmica induzida (ISR) nas plantas.',
      solucaoCompleta: 'O Manihot desenvolve formulações bioativas que induzem resistência sistêmica (ISR) nas plantas. Quando aplicados preventivamente, os compostos da manipueira ativam os mecanismos de defesa naturais, tornando a planta menos suscetível à Cercospora. Em vez de matar o patógeno diretamente, a solução fortalece a planta — proteção duradoura e sem resíduos.',
      aplicacao: {
        diluicao: '1:3',
        preparo: 'Resíduo com 48 horas de descanso',
        tecnica: 'Pulverização foliar completa em ambos os lados da folha',
      },
    },
    {
      nome: 'Mancha Branca',
      agente: 'Phaeoramularia manihotis',
      imagem: 'public/mancha-branca.jpeg',
      icon: BotIcons.leaf(C.teal, 36),
      sintomas: 'Manchas pequenas e claras com bordas bem definidas, predominando em regiões mais frias e plantios de altitude.',
      sintomасCompleto: 'A Mancha Branca provoca manchas pequenas e claras com bordas bem definidas nas folhas. Predomina em regiões de altitude ou climas frios. Menos agressiva que a Mancha Parda, afeta principalmente a qualidade visual das folhas e pode causar desfolha localizada em alta incidência. Mais comum em plantios com baixas temperaturas noturnas e alta umidade.',
      solucao: 'Extratos de manipueira com propriedades antifúngicas inibem o crescimento do patógeno.',
      solucaoCompleta: 'Formulações antifúngicas à base de manipueira apresentam atividade comprovada contra Phaeoramularia manihotis. A aplicação foliar preventiva em períodos de risco reduz a germinação de esporos e a progressão das lesões. Por ser uma doença de menor agressividade, o biocontrole é altamente eficaz quando aplicado preventivamente.',
      aplicacao: {
        diluicao: '1:3',
        preparo: 'Resíduo com 48 horas de descanso',
        tecnica: 'Pulverização foliar completa em ambos os lados da folha',
      },
    },
    {
      nome: 'Ferrugem',
      agente: 'Uromyces spp.',
      imagem: 'public/ferrugem.jpeg',
      icon: BotIcons.leaf(C.gold, 36),
      sintomas: 'Pústulas alaranjadas ou marrons na face inferior das folhas e talos. Dispersão rápida pelo vento.',
      sintomасCompleto: 'A Ferrugem é identificada por pústulas alaranjadas ou marrons na parte inferior das folhas e nos talos. O patógeno dispersa-se por uredósporos carregados pelo vento, podendo comprometer lavouras inteiras em condições de alta umidade. As lesões reduzem a área fotossintética e, em ataques severos, causam desfolha precoce e enfraquecimento generalizado.',
      solucao: 'Caldas bioativas com efeito fungistático reduzem a esporulação e limitam a disseminação.',
      solucaoCompleta: 'O Manihot desenvolve caldas bioativas à base de manipueira com atividade fungistática sobre Uromyces spp. Essas formulações inibem a germinação dos uredósporos e reduzem a esporulação nas lesões estabelecidas, limitando a disseminação no campo. A aplicação deve ser preventiva ou nos primeiros sinais da doença.',
      aplicacao: {
        diluicao: '1:3',
        preparo: 'Resíduo com 48 horas de descanso',
        tecnica: 'Pulverização foliar completa com atenção à face inferior das folhas',
      },
    },
  ],
  bacterianas: [
    {
      nome: 'Bacteriose',
      agente: 'Xanthomonas axonopodis pv. manihotis',
      imagem: 'public/bacteriose.jpeg',
      icon: BotIcons.molecule(C.teal, 36),
      sintomas: 'Manchas de aspecto úmido nas folhas, murcha apical ("queima do broto"), exsudação de goma amarelada no caule.',
      sintomасCompleto: 'A Bacteriose é uma das mais graves da mandiocultura. Os sintomas começam com manchas de aspecto úmido ou de óleo nas folhas. Em seguida ocorre murcha dos ramos apicais ("queima do broto"), exsudação de goma amarelada no caule e, em condições úmidas, podridão do colo e morte da planta. A bactéria é disseminada pela chuva, vento e ferramentas contaminadas. O uso de material de plantio sadio é a principal medida preventiva.',
      solucao: 'Bactérias antagonistas produzidas em meio de manipueira reduzem incidência da doença em campo.',
      solucaoCompleta: 'O Manihot desenvolve formulações com bactérias antagonistas (Bacillus e Pseudomonas) produzidas em meio de manipueira. Essas bactérias colonizam folhas e hastes, competindo com a Xanthomonas por sítios de infecção e produzindo compostos antibacterianos naturais. A aplicação preventiva via pulverização foliar antes dos períodos chuvosos reduz significativamente a incidência.',
      aplicacao: {
        diluicao: '1:2 ou 1:3 conforme pressão da doença',
        preparo: 'Manipueira fresca (24 horas de repouso) para preservar voláteis ativos',
        tecnica: 'Pulverização da parte aérea e rega do solo nas proximidades de plantas focais para conter o avanço',
      },
    },
    {
      nome: 'Murcha Bacteriana',
      agente: 'Ralstonia solanacearum',
      imagem: 'public/solanacearum.jpg',
      icon: BotIcons.dna(C.teal, 36),
      sintomas: 'Murcha súbita e irreversível sem amarelecimento prévio. Diagnóstico pelo "fio bacteriano" ao cortar o ramo.',
      sintomасCompleto: 'A Murcha Bacteriana provoca murcha súbita e irreversível, sem amarelecimento prévio. O diagnóstico em campo é feito pelo "fio bacteriano": ao cortar um ramo afetado e mergulhá-lo em água, observa-se exsudação de fio leitoso de bactérias. O escurecimento vascular interno confirma o diagnóstico. A bactéria sobrevive no solo por longos períodos e não há cura para plantas afetadas.',
      solucao: 'Biofungicidas à base de Bacillus spp. cultivados em manipueira apresentam ação supressora ao patossistema.',
      solucaoCompleta: 'O controle é primordialmente preventivo. O Manihot desenvolve formulações com Bacillus spp. cultivados em manipueira que, incorporados ao solo antes do plantio, criam ambiente microbiano supressivo à Ralstonia. Plantas afetadas devem ser removidas e o solo tratado antes de novo plantio.',
      aplicacao: {
        diluicao: '1:2 ou 1:3',
        preparo: 'Manipueira fresca (24 horas de repouso)',
        tecnica: 'Rega do solo nas proximidades de plantas doentes para conter o avanço. Plantas afetadas: remover e queimar',
      },
    },
    {
      nome: 'Mosaico das Folhas',
      agente: 'Vírus do mosaico da mandioca (CMV)',
      imagem: 'public/mosaico-das-folhas.jpeg',
      icon: BotIcons.dna(C.teal, 36),
      sintomas: 'Deformações foliares com padrão mosqueado verde-claro/verde-escuro. Transmitido pela mosca-branca. Sem cura.',
      sintomасCompleto: 'O Mosaico provoca deformações foliares e padrão mosqueado verde-claro/verde-escuro característico. Reduz drasticamente a fotossíntese e o vigor da planta ao longo do ciclo. O vírus é transmitido de forma persistente pela mosca-branca (Bemisia tabaci). Não há cura para plantas já infectadas — o controle é exclusivamente pelo vetor.',
      solucao: 'Controle do vetor (mosca-branca) com formulações bioativas da manipueira é a estratégia central.',
      solucaoCompleta: 'Como é uma doença viral sem cura, a estratégia do Manihot foca no controle da mosca-branca. As formulações bioativas têm efeito repelente e inseticida sobre Bemisia tabaci, reduzindo a população do vetor e a taxa de transmissão viral. A aplicação preventiva — antes da chegada das moscas — é mais eficaz que o controle curativo. O uso de manivas certificadas e livres de vírus complementa a proteção.',
      aplicacao: {
        diluicao: '1:3',
        preparo: 'Resíduo com 24 horas de descanso',
        tecnica: 'Pulverização preventiva na face inferior das folhas, onde a mosca-branca se concentra',
      },
    },
  ],
};

function PatologiaCard({ d, delay }) {
  const [aberto, setAberto] = React.useState(false);
  return (
    <Reveal delay={delay}>
      {aberto && <window.PragaModal item={d} onClose={() => setAberto(false)} />}
      <div
        onClick={() => setAberto(true)}
        style={{
          background: '#fff', borderRadius: 18, overflow: 'hidden',
          border: `1px solid ${C.cream2}`, boxShadow: '0 2px 20px #1A1C1B06',
          transition: 'transform 0.25s, box-shadow 0.25s', cursor: 'pointer',
          position: 'relative',
          display: 'flex', flexDirection: 'column',
          flex: 1, boxSizing: 'border-box',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px #1A1C1B12'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 20px #1A1C1B06'; }}
      >
        {/* Badge */}
        <div style={{
          position: 'absolute', top: 12, right: 12, zIndex: 2,
          background: C.dark, color: C.cream,
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 11,
          padding: '4px 10px', borderRadius: 20, opacity: 0.88,
        }}>Ver mais</div>

        {/* Imagem topo */}
        {d.imagem
          ? (
            <div style={{ width: '100%', height: 140, overflow: 'hidden' }}>
              <img src={d.imagem} alt={d.nome} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ) : (
            <div style={{ width: '100%', height: 140, background: C.cream, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {d.icon}
            </div>
          )
        }

        {/* Conteudo */}
        <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h4 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: 16, color: C.textDark, margin: '0 0 3px',
          }}>{d.nome}</h4>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 11,
            color: C.textMid, margin: '0 0 10px', fontStyle: 'italic',
          }}>Agente: {d.agente}</p>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 13,
            color: C.textMid, lineHeight: 1.65, margin: '0 0 14px', flex: 1,
          }}>{d.sintomas}</p>

          {/* CTA */}
          <div style={{
            background: C.dark, borderRadius: 10, padding: '8px 14px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 12,
              color: C.cream,
            }}>Solução Manihot</span>
            <span style={{ color: C.gold, fontWeight: 700 }}>→</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 18,
          alignItems: 'stretch',
        }}>
          {dados.map((d, i) => <PatologiaCard key={d.nome} d={d} delay={i * 0.07} />)}
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
