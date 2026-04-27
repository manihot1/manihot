// ─── Fitopragas (light) ───────────────────────────────────────────────────────
const pragas = [
  {
    nome: 'Ácaro-verde',
    cientifico: 'Mononychellus tanajoa',
    imagem: 'public/Mononychellus.jpg',
    icone: BotIcons.mite(C.gold, 44),
    dano: 'Raspagem foliar causando bronzeamento, enrolamento e queda das folhas. Em infestações severas, destrói 80% da copa.',
    danoCompleto: 'O ácaro-verde provoca raspagem intensa da superfície foliar, causando bronzeamento característico, enrolamento e queda progressiva das folhas. Em infestações severas — típicas do período seco — pode destruir até 80% da copa em poucas semanas, comprometendo gravemente a fotossíntese e o enchimento das raízes. As folhas afetadas apresentam aspecto coriáceo, deformações nas bordas e coloração verde-clara a amarelada entre as nervuras.',
    fase: 'Período seco',
    controle: 'Ácaros predadores Neoseiulus spp. cultivados em meio de manipueira controlam populações naturalmente.',
    controleCompleto: 'O biocontrole com ácaros predadores Neoseiulus spp. é a estratégia mais eficaz e sustentável. O Manihot desenvolve formulações que cultivam esses predadores em meio enriquecido de manipueira, liberando-os no campo sem resíduos tóxicos. O controle é seletivo e não afeta abelhas ou outros insetos benéficos.',
    aplicacao: {
      diluicao: '1:3 (1 parte de manipueira para 3 de água)',
      preparo: 'Resíduo com 24 horas de descanso para garantir carga máxima de ácido cianídrico',
      tecnica: 'Pulverização direcionada aos brotos e face inferior das folhas, estritamente no final da tarde',
    },
  },
  {
    nome: 'Mosca-branca',
    cientifico: 'Bemisia tabaci / Aleurothrixus aepim',
    imagem: 'public/mosca-branca.jpg',
    icone: BotIcons.bug(C.teal, 44),
    dano: 'Sucção de seiva e transmissão de vírus (CBSD). Fumagina secundária compromete fotossíntese e qualidade visual.',
    danoCompleto: 'A mosca-branca causa dano duplo: a sucção direta de seiva enfraquece a planta, e sua saliva transmite vírus devastadores como o CBSD. A fumagina que cresce sobre a substância excretada pelos insetos cobre as folhas, bloqueando luz e reduzindo a fotossíntese. Em infestações severas, a planta apresenta clorose generalizada, queda de folhas e queda drástica de produção.',
    fase: 'Pico na estação seca',
    controle: 'Formulação bioativa da manipueira com repelência comprovada + parasitoides Encarsia spp.',
    controleCompleto: 'Formulações bioativas extraídas da manipueira têm efeito repelente comprovado sobre adultos de Bemisia tabaci. Combinadas com a liberação de parasitoides Encarsia spp. — que parasitam as ninfas diretamente — essa estratégia reduz a população sem resíduos e sem afetar a fauna benéfica. O controle do vetor é também a principal prevenção contra transmissão viral.',
    aplicacao: {
      diluicao: '1:3',
      preparo: 'Resíduo com 24 horas de descanso',
      tecnica: 'Pulverização na face inferior das folhas e brotos, no final da tarde',
    },
  },
  {
    nome: 'Tripes',
    cientifico: 'Scirtothrips manihoti / Frankliniella williamsi',
    imagem: 'public/Scirtothrips-manihoti.jpeg',
    icone: BotIcons.mite(C.green, 44),
    dano: 'Raspagem de brotações novas causando encarquilhamento, deformação dos pecíolos e redução do vigor das plantas jovens.',
    danoCompleto: 'O tripes ataca preferencialmente as brotações novas e tenras da mandioca, raspando tecidos e sugando o conteúdo celular. O resultado é encarquilhamento das folhas jovens, deformação dos pecíolos e redução severa do vigor nas primeiras semanas. O ataque precoce pode comprometer a arquitetura da planta e reduzir o rendimento final das raízes.',
    fase: 'Brotação — primeiras 4 semanas',
    controle: 'Extratos da manipueira com HCN diluído têm efeito repelente e inseticida natural de baixo impacto.',
    controleCompleto: 'Extratos bioativos da manipueira, em concentrações controladas, liberam compostos com HCN em doses sub-letais que atuam como repelente de oviposição e causam mortalidade de ninfas por contato. O Manihot formula esses extratos com precisão, garantindo eficácia sem toxicidade ao aplicador ou fauna do solo.',
    aplicacao: {
      diluicao: '1:3',
      preparo: 'Resíduo com 24 horas de descanso para máximo poder de choque do ácido cianídrico',
      tecnica: 'Pulverização nos brotos e face inferior das folhas, no final da tarde',
    },
  },
  {
    nome: 'Mandarová',
    cientifico: 'Erinnyis ello',
    imagem: 'public/mandarova.jpeg',
    icone: BotIcons.bug(C.gold, 44),
    dano: 'Lagartas que desfolham completamente a planta em poucos dias. Uma única lagarta consome várias folhas por dia nas fases tardias.',
    danoCompleto: 'O mandarová é a principal praga da mandioca no Brasil, capaz de causar desfolha total em poucos dias. No 5° instar — fase de máxima voracidade — uma única lagarta consome várias folhas por dia. Os ovos são depositados na face inferior das folhas, e a fase larval dura 12 a 15 dias passando por 5 estágios. A desfolha severa reduz drasticamente a produção, pois a planta perde fotossíntese no período de enchimento das raízes. Infestações surgem de forma súbita e exigem monitoramento constante.',
    fase: 'Fase vegetativa — 3º ao 5º ínstar',
    controle: 'Baculovirus erinnyis produzido em meio enriquecido com manipueira — biocontrole clássico de alta eficácia.',
    controleCompleto: 'O Baculovirus erinnyis é o agente de biocontrole mais eficiente e documentado contra o mandarová. Este vírus entomopatogênico infecta especificamente as lagartas de Erinnyis ello sem afetar outros organismos. O Manihot produz formulações desse baculovírus em meio enriquecido com manipueira, aumentando viabilidade e concentração de partículas virais. A aplicação deve ocorrer nos primeiros instares, antes que a desfolha se instale.',
    aplicacao: {
      diluicao: '1:3',
      preparo: 'Resíduo com 24 horas de descanso',
      tecnica: 'Pulverização foliar completa em ambos os lados da folha, no final da tarde',
    },
  },
  {
    nome: 'Cochonilhas',
    cientifico: 'Diversas espécies (Phenacoccus, Dysmicoccus)',
    imagem: 'public/cochonilhas.jpeg',
    icone: BotIcons.bug(C.teal, 44),
    dano: 'Colônias densas cobrem o caule e sugam a seiva, causando amarelecimento foliar e comprometendo a qualidade das manivas.',
    danoCompleto: 'Colônias de aspecto escamoso e esbranquiçado fixam-se ao caule e sugam continuamente a seiva elaborada. A sucção constante de nutrientes resulta em amarelecimento, queima das folhas e brotamento excessivo lateral como resposta fisiológica. A haste original torna-se frágil e as manivas perdem qualidade para o plantio seguinte. Em infestações severas no período seco, o ataque pode levar à morte da planta.',
    fase: 'Período seco — infestação progressiva',
    controle: 'Formulações bioativas da manipueira + parasitoides específicos controlam as colônias sem agredir a planta.',
    controleCompleto: 'O Manihot desenvolve formulações bioativas com efeito repelente e inseticida de contato sobre cochonilhas, integradas à liberação de joaninhas e vespas parasitoides. O monitoramento precoce é fundamental — colônias iniciais respondem melhor ao biocontrole do que infestações já estabelecidas.',
    aplicacao: {
      diluicao: '1:3',
      preparo: 'Resíduo com 24 horas de descanso',
      tecnica: 'Pulverização direcionada ao caule e face inferior das folhas, no final da tarde',
    },
  },
  {
    nome: 'Broca-das-Hastes',
    cientifico: 'Coelosternus spp. (larvas de besouro)',
    imagem: 'public/broca-das-hastes.jpeg',
    icone: BotIcons.bug(C.gold, 44),
    dano: 'Larvas constroem galerias internas no caule, interrompendo o fluxo de seiva e tornando a haste quebradiça.',
    danoCompleto: 'O inseto deposita ovos no interior do caule. As larvas constroem galerias que destroem os tecidos vasculares, acumulando serragem nos pontos de entrada. Esse dano interrompe o fluxo de seiva, causando amarelecimento e queima das folhas no ápice. Como resposta, a planta estimula brotamento excessivo lateral, mas esses brotos crescem debilitados. A haste principal torna-se quebradiça, comprometendo gravemente as manivas e o rendimento das raízes.',
    fase: 'Fase vegetativa — detectar pela serragem nos pontos de entrada',
    controle: 'Extratos da manipueira com HCN diluído têm efeito repelente comprovado na postura.',
    controleCompleto: 'O controle da broca-das-hastes exige abordagem preventiva. Extratos bioativos da manipueira aplicados no caule demonstram efeito repelente sobre a postura dos adultos, reduzindo a taxa de infestação. Identificar os primeiros pontos de entrada — pelo acúmulo de serragem — e eliminar o material infestado é essencial para evitar disseminação.',
    aplicacao: {
      diluicao: '1:3',
      preparo: 'Resíduo com 24 horas de descanso',
      tecnica: 'Pulverização direcionada ao caule, com atenção aos pontos de entrada visíveis',
    },
  },
  {
    nome: 'Mosca-do-Broto',
    cientifico: 'Silba pendula',
    imagem: 'public/mosca-do-broto.jpeg',
    icone: BotIcons.mite(C.teal, 44),
    dano: 'Larvas destroem o ponto de crescimento apical, causando "ponteira seca" e brotamento lateral excessivo.',
    danoCompleto: 'A mosca deposita ovos nas gemas terminais. As larvas penetram no tecido tenro e destroem o ponto de crescimento, interrompendo o desenvolvimento vertical. O ataque causa morte do broto principal e "ponteira seca" característica. Com a perda da dominância apical, a planta reage com brotamento lateral excessivo — hastes finas que reduzem a qualidade das manivas e desviam energia do enchimento das raízes.',
    fase: 'Pós-emergência — primeiras 6 semanas',
    controle: 'Biocontrole com parasitoides + formulações repelentes à base de manipueira reduzem a oviposição.',
    controleCompleto: 'O Manihot desenvolve formulações repelentes à base de manipueira que, aplicadas nas gemas apicais, reduzem a oviposição pelas fêmeas adultas. Associado ao uso de parasitoides que atuam sobre as larvas dentro dos brotos, o biocontrole integrado reduz a incidência sem resíduos químicos. O monitoramento semanal nas primeiras 6 semanas é a melhor forma de detectar a infestação precocemente.',
    aplicacao: {
      diluicao: '1:3',
      preparo: 'Resíduo com 24 horas de descanso',
      tecnica: 'Pulverização direcionada às gemas apicais e brotos novos, no final da tarde',
    },
  },
  {
    nome: 'Superbrotamento',
    cientifico: 'Candidatus Phytoplasma',
    imagem: 'public/superbrotamento.jpeg',
    icone: BotIcons.leaf(C.gold, 44),
    dano: 'Fitoplasma no floema provoca brotamento desordenado tipo "vassoura-de-bruxa" e raízes sem valor comercial.',
    danoCompleto: 'O superbrotamento (vassoura-de-bruxa) é provocado por um fitoplasma que vive no floema, obstruindo a seiva e desequilibrando os hormônios de crescimento. Os primeiros sinais são enfraquecimento da parte aérea, amarelecimento e queima das folhas. Com a perda da dominância apical, diversas gemas laterais despertam simultaneamente, criando ramos finos e aglomerados — o aspecto característico de vassoura. As raízes tornam-se finas, fibrosas e sem valor comercial.',
    fase: 'Qualquer fase — transmitido por insetos vetores (cigarrinhas)',
    controle: 'Controle preventivo dos vetores com formulações bioativas. Plantas afetadas devem ser eliminadas imediatamente.',
    controleCompleto: 'Não existe cura para plantas já infectadas. O controle é exclusivamente preventivo. O Manihot desenvolve formulações bioativas voltadas ao controle das cigarrinhas e psilídeos vetores. A aplicação preventiva, aliada ao monitoramento constante e à eliminação imediata de plantas sintomáticas (roguing), é a estratégia mais eficaz. O uso de manivas sadias e certificadas no plantio é igualmente essencial.',
    aplicacao: {
      diluicao: '1:3 (para controle do vetor)',
      preparo: 'Resíduo com 24 horas de descanso',
      tecnica: 'Pulverizar plantas sadias ao redor dos focos. Eliminar e queimar plantas doentes antes de qualquer aplicação',
    },
  },
  {
    nome: 'Formiga-cortadeira',
    cientifico: 'Atta spp. / Acromyrmex spp.',
    imagem: 'public/formigas-cortadeiras.jpeg',
    icone: BotIcons.bug(C.gold, 44),
    dano: 'Cortam e removem folhas para alimentar o fungo simbionte. Sem fotossíntese, a planta não produz amido e as raízes não se desenvolvem.',
    danoCompleto: 'As formigas-cortadeiras são pragas altamente destrutivas: cortam e removem as folhas da mandioca para servirem de substrato ao fungo do qual se alimentam, eliminando completamente a capacidade fotossintética da planta. Sem folhas, a planta não produz amido e as raízes não se desenvolvem. O ataque contínuo aos novos brotos esgota as reservas da mandioca, levando à morte por exaustão. Um formigueiro não controlado pode destruir plantações inteiras rapidamente, tornando a produção economicamente inviável.',
    fase: 'Qualquer fase — ataque contínuo, mais agressivo à noite',
    controle: 'Manipueira pura despejada nos olheiros elimina o fungo simbionte e age como fumigante por HCN nos túneis.',
    controleCompleto: 'A manipueira pura aplicada diretamente nos olheiros do formigueiro elimina o fungo que alimenta a colônia. Sem o fungo, a rainha e as operárias morrem de fome ou abandonam o ninho. O ácido cianídrico liberado pela manipueira, confinado nos túneis, age como fumigante, eliminando as formigas por asfixia direta. A vedação do olheiro após a aplicação é essencial para que o gás circule por todas as galerias.',
    aplicacao: {
      diluicao: 'Uso puro — sem diluição',
      preparo: 'Manipueira fresca (recém-saída da prensa) para garantir carga máxima de ácido cianídrico',
      tecnica: 'Despejar 5 a 10 litros no olheiro principal (o que tiver mais terra solta ao redor). Após despejar, tampar o buraco com terra batida para que o gás não escape e circule por todas as galerias internas',
    },
  },
];

function PragaCard({ p, delay }) {
  const [aberto, setAberto] = React.useState(false);
  return (
    <Reveal delay={delay}>
      {aberto && <window.PragaModal item={p} onClose={() => setAberto(false)} />}
      <div
        onClick={() => setAberto(true)}
        style={{
          background: '#fff', borderRadius: 20, overflow: 'hidden',
          border: `1px solid ${C.cream2}`, boxShadow: '0 2px 20px #1A1C1B06',
          display: 'flex', flexDirection: 'column',
          flex: 1, boxSizing: 'border-box',
          transition: 'transform 0.25s, box-shadow 0.25s',
          cursor: 'pointer',
          position: 'relative',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px #1A1C1B12'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 20px #1A1C1B06'; }}
      >
        {/* Badge */}
        <div style={{
          position: 'absolute', top: 12, right: 12, zIndex: 2,
          background: C.dark, color: C.cream,
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 11,
          padding: '4px 10px', borderRadius: 20,
          letterSpacing: '0.04em',
          opacity: 0.88,
        }}>Ver mais</div>

        {/* Imagem topo */}
        {p.imagem
          ? (
            <div
              style={{ width: '100%', height: 160, overflow: 'hidden', position: 'relative' }}
              onMouseEnter={e => { const ov = e.currentTarget.querySelector('.img-overlay'); if (ov) ov.style.opacity = '1'; }}
              onMouseLeave={e => { const ov = e.currentTarget.querySelector('.img-overlay'); if (ov) ov.style.opacity = '0'; }}
            >
              <img src={p.imagem} alt={p.nome} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }} />
              <div className="img-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'rgba(15, 45, 26, 0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.25s',
              }}>
                <span style={{
                  color: '#fff', fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: 14, letterSpacing: '0.05em',
                }}>Ver diagnóstico →</span>
              </div>
            </div>
          ) : (
            <div style={{ width: '100%', height: 160, background: C.cream, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {p.icone}
            </div>
          )
        }

        {/* Header */}
        <div style={{ padding: '14px 18px 10px', borderBottom: `1px solid ${C.cream2}` }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: 17, color: C.textDark,
            lineHeight: 1.2,
          }}>{p.nome}</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11, color: C.textMid, fontStyle: 'italic',
            marginTop: 2,
          }}>{p.cientifico}</div>
        </div>

        {/* Dano resumido */}
        <div style={{ padding: '12px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Fase crítica pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: C.gold + '14', border: `1px solid ${C.gold}44`,
            borderRadius: 20, padding: '4px 10px', alignSelf: 'flex-start',
          }}>
            <span style={{ fontSize: 10 }}>⏱</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11,
              color: C.textDark, fontWeight: 600,
            }}>{p.fase}</span>
          </div>

          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13.5, color: C.textMid, lineHeight: 1.65, margin: 0, flex: 1,
          }}>{p.dano}</p>
        </div>

        {/* CTA */}
        <div style={{ margin: '0 18px 18px' }}>
          <div style={{
            background: C.dark,
            borderRadius: 10, padding: '9px 14px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 12,
              color: C.cream, letterSpacing: '0.02em',
            }}>Diagnóstico e solução Manihot</span>
            <span style={{ color: C.gold, fontSize: 14, fontWeight: 700 }}>→</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Fitopragas() {
  return (
    <section id="fitopragas" data-screen-label="06 Fitopragas" style={{ background: C.cream, padding: 0, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1500, margin: '0 auto', padding: '80px clamp(16px, 2.5vw, 48px) 0' }}>
        <Reveal>
          <SectionLabel light>Entomologia Agrícola</SectionLabel>
          <H2>Fitopragas da Mandioca</H2>
          <Lead>As principais pragas que ameaçam a produção — e as soluções biológicas que o Manihot desenvolve com base na manipueira.</Lead>
        </Reveal>

        <div className="four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, alignItems: 'stretch' }}>
          {pragas.map((p, i) => <PragaCard key={p.nome} p={p} delay={i * 0.08} />)}
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
    <section id="aedes" data-screen-label="07 Aedes" style={{ background: C.dark, padding: 0, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(24px, 6vw, 100px) 0', position: 'relative' }}>
        <CircuitBg opacity={0.05} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', marginBottom: 64, position: 'relative' }} className="two-col">
          <Reveal>
            <SectionLabel>Saúde Pública</SectionLabel>
            <H2 light>Aedes aegypti<br />{'&'} o Biocontrole</H2>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#122618', padding: '16px 28px', borderBottom: `1px solid ${C.gold}18` }} className="three-col-table">
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
              className="three-col-table"
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

// sections3.jsx — Footer component removed (defined in footer.jsx)
// Imagens disponíveis para seção de preparo/uso da manipueira:
// public/manipuera-preparo.jpeg — processo de preparo/extração
// public/mandioca-colhida.jpeg — resultado da produção / raízes colhidas
