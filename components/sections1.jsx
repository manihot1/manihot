// ─── Mandiocultura (light) ────────────────────────────────────────────────────
function Mandiocultura() {
  return (
    <section id="mandiocultura" data-screen-label="02 Mandiocultura" style={{ background: C.cream, padding: '80px clamp(24px, 6vw, 100px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <SectionLabel light>A Cultura</SectionLabel>
          <H2>Mandiocultura<br />no Brasil</H2>
          <Lead>A mandioca (<em>Manihot esculenta</em>) é uma das culturas mais resilientes do planeta — fonte de segurança alimentar, renda rural e agora plataforma para inovação biotecnológica.</Lead>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22, marginBottom: 60 }}>
          <BotCard delay={0} icon={BotIcons.leaf(C.gold, 44)} title="Importância Econômica"
            desc="O Brasil é o 2º maior produtor mundial, com faturamento anual superior a R$ 10 bilhões nos mercados de amido, farinha e fécula." />
          <BotCard delay={0.08} icon={BotIcons.root(C.green, 44)} title="Importância Social"
            desc="Mais de 500 mil famílias de agricultores familiares têm na mandioca o principal sustento, especialmente no Norte e Nordeste." />
          <BotCard delay={0.16} icon={BotIcons.molecule(C.teal, 44)} title="Importância Ambiental"
            desc="Adapta-se a solos pobres e climas secos com baixo consumo de insumos, sendo candidata à restauração produtiva de áreas degradadas." />
        </div>

        {/* Placeholder botânico */}
        <Reveal>
          <div style={{
            borderRadius: 20, height: 280, background: `repeating-linear-gradient(135deg, ${C.cream2} 0px, ${C.cream2} 20px, #fff 20px, #fff 40px)`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
            border: `1.5px dashed ${C.gold}44`, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ opacity: 0.2 }}>{BotIcons.leaf(C.green, 80)}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: C.textMid, textAlign: 'center', padding: '0 40px' }}>
              <strong>[ Ilustração botânica ]</strong><br/>
              Linha-art vetorial: campo de mandioca em estágio de colheita — raízes expostas, hastes, folhas palmadas — estilo científico, traço fino ouro.
            </div>
          </div>
        </Reveal>
      </div>
      <WaveDown from={C.cream} to={C.dark} />
    </section>
  );
}
window.Mandiocultura = Mandiocultura;

// ─── Manipueira (dark) ────────────────────────────────────────────────────────
const manipComp = [
  { icon: BotIcons.circuit(C.teal, 38), name: 'Ácido Cianídrico (HCN)', desc: 'Composto tóxico liberado ao processar mandioca brava. Em concentrações controladas, torna-se agente bioativo de alto valor.', opp: 'Larvicida natural contra Aedes aegypti.' },
  { icon: BotIcons.molecule(C.gold, 38), name: 'Nitrogênio & Fósforo', desc: 'Macronutrientes em formas orgânicas e minerais, fundamentais ao metabolismo celular de plantas e microrganismos.', opp: 'Biofertilizante de liberação lenta.' },
  { icon: BotIcons.dna(C.teal, 38), name: 'Potássio', desc: 'Regula abertura estomática e processos osmóticos, elevando a tolerância das plantas a estresses hídricos e térmicos.', opp: 'Bioestimulante para resistência a seca.' },
  { icon: BotIcons.molecule(C.teal, 38), name: 'Matéria Orgânica', desc: 'Alta carga de carbono orgânico — alto potencial energético para fermentação e produção de bioagentes em escala.', opp: 'Substrato para fermentação de bioagentes.' },
  { icon: BotIcons.dna(C.gold, 38), name: 'Comunidade Microbiana', desc: 'Leveduras, bactérias benéficas e fungos com ação biocontroladora nativamente presentes na manipueira bruta.', opp: 'Base de formulações de biocontrole.' },
  { icon: BotIcons.circuit(C.gold, 38), name: 'Compostos Fenólicos', desc: 'Moléculas com ação antifúngica e bacteriostática, ativas contra patógenos do solo sem agressão à microbiota benéfica.', opp: 'Fungicida biológico sistêmico.' },
];

function Manipueira() {
  return (
    <section id="manipueira" data-screen-label="03 Manipueira" style={{ background: C.dark, padding: '0 clamp(24px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 0 0', position: 'relative' }}>
        <CircuitBg opacity={0.05} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', marginBottom: 72, position: 'relative' }} className="two-col">
          <Reveal>
            <SectionLabel>O Resíduo</SectionLabel>
            <H2 light>O que é a<br />Manipueira?</H2>
            <Lead light>Líquido residual da prensagem da mandioca. Rico em compostos bioativos, é o maior passivo ambiental da agroindústria — e a maior oportunidade do projeto Manihot.</Lead>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: C.textDim, lineHeight: 1.75, marginBottom: 28 }}>
              Descartada em rios e solos, provoca eutrofização, mortandade de peixes e contaminação de lençóis freáticos. <strong style={{ color: C.white }}>O Manihot transforma esse passivo em ativo.</strong>
            </p>
            <AccentBadge color={C.gold}>Manipueira como matéria-prima</AccentBadge>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              borderRadius: 20, height: 340, background: '#163020',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
              border: `1.5px dashed ${C.teal}33`, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ opacity: 0.18 }}>{BotIcons.circuit(C.teal, 100)}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: C.textDim, textAlign: 'center', padding: '0 32px', position: 'absolute', bottom: 24 }}>
                <strong style={{ color: C.teal + 'aa' }}>[ Ilustração técnica ]</strong><br/>
                Diagrama de processo: mandioca → prensa → manipueira → separação de compostos. Traço fino sobre fundo escuro, estilo infográfico científico.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: C.white, marginBottom: 6, textAlign: 'center' }}>
            Composição da Manipueira
          </h3>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: C.textDim, textAlign: 'center', marginBottom: 36 }}>
            Cada componente é uma oportunidade biotecnológica
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, position: 'relative' }}>
          {manipComp.map((c, i) => (
            <TechCard key={c.name} icon={c.icon} title={c.name} delay={i * 0.06}
              desc={<>{c.desc}<SolutionCalloutLight>{c.opp}</SolutionCalloutLight></>}
              accent={i % 2 === 0 ? C.teal : C.gold} />
          ))}
        </div>
      </div>
      <WaveDown from={C.dark} to={C.cream} />
    </section>
  );
}
window.Manipueira = Manipueira;
