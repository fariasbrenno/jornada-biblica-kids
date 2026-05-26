import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const passos = [
  {
    num: '1',
    titulo: 'Assine e receba o acesso',
    desc: 'Após assinar, você recebe um e-mail com o link para criar sua senha. É só um clique.',
    tela: 'acesso',
  },
  {
    num: '2',
    titulo: 'Faça seu login',
    desc: 'Entre com seu e-mail e senha. Em menos de 30 segundos você está dentro do app.',
    tela: 'login',
  },
  {
    num: '3',
    titulo: 'Escolha a playlist',
    desc: 'Bíblia Narrada, Hora de Dormir ou Momentos de Coragem. Você decide o que seu filho vai assistir.',
    tela: 'home',
  },
  {
    num: '4',
    titulo: 'Seu filho assiste',
    desc: 'Ambiente 100% blindado. Sem anúncios, sem sugestões externas. Só a Palavra.',
    tela: 'player',
  },
]

/* ── Mini telas simuladas em CSS ── */
function TelaMockup({ tela }) {
  const phoneStyle = {
    width: 120,
    height: 210,
    borderRadius: 18,
    background: '#0F0D27',
    border: '2px solid rgba(245,166,35,0.35)',
    boxShadow: '0 0 24px rgba(245,166,35,0.12), 0 8px 32px rgba(0,0,0,0.5)',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
  }

  const notch = (
    <div style={{
      position: 'absolute', top: 7, left: '50%', transform: 'translateX(-50%)',
      width: 32, height: 5, borderRadius: 4, background: '#1A1640', zIndex: 2,
    }} />
  )

  if (tela === 'acesso') return (
    <div style={phoneStyle}>
      {notch}
      <div style={{ padding: '22px 10px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(245,166,35,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📬</div>
        <div style={{ fontSize: 7, color: '#F5A623', fontWeight: 900, textAlign: 'center', fontFamily: 'Nunito, sans-serif', lineHeight: 1.2 }}>Jornada Bíblica Kids</div>
        <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '7px 8px' }}>
          <div style={{ fontSize: 6, color: '#fff', fontWeight: 700, marginBottom: 4 }}>✅ Seu acesso foi criado!</div>
          <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Clique abaixo para criar sua senha e começar agora.</div>
        </div>
        <div style={{ width: '100%', background: 'linear-gradient(90deg, #F5A623, #D97706)', borderRadius: 8, padding: '6px 0', textAlign: 'center', fontSize: 6, fontWeight: 900, color: '#1C1C2E', fontFamily: 'Nunito, sans-serif' }}>
          CRIAR MINHA SENHA
        </div>
      </div>
    </div>
  )

  if (tela === 'login') return (
    <div style={phoneStyle}>
      {notch}
      <div style={{ padding: '22px 10px 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ textAlign: 'center', fontSize: 7, color: '#F5A623', fontWeight: 900, fontFamily: 'Nunito, sans-serif' }}>Jornada Bíblica Kids</div>
        <div style={{ fontSize: 7, color: '#fff', fontWeight: 700, marginTop: 4, fontFamily: 'Nunito, sans-serif' }}>Entrar</div>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '5px 8px', fontSize: 5.5, color: 'rgba(255,255,255,0.4)' }}>seu@email.com</div>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '5px 8px', fontSize: 5.5, color: 'rgba(255,255,255,0.4)' }}>••••••••</div>
        <div style={{ background: 'linear-gradient(90deg, #F5A623, #D97706)', borderRadius: 7, padding: '6px 0', textAlign: 'center', fontSize: 6, fontWeight: 900, color: '#1C1C2E', fontFamily: 'Nunito, sans-serif', marginTop: 2 }}>
          ENTRAR
        </div>
        <div style={{ textAlign: 'center', fontSize: 5, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>Primeiro acesso? Clique aqui</div>
      </div>
    </div>
  )

  if (tela === 'home') return (
    <div style={phoneStyle}>
      {notch}
      <div style={{ padding: '22px 8px 8px', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 6, color: '#F5A623', fontWeight: 900, fontFamily: 'Nunito, sans-serif' }}>Jornada Bíblica Kids</div>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'rgba(245,166,35,0.2)', fontSize: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
        </div>
        <div style={{ fontSize: 6.5, color: '#fff', fontWeight: 700, fontFamily: 'Nunito, sans-serif' }}>Boa noite! 👋</div>
        {[
          { cor: '#3B0764', label: '📖 Bíblia Narrada' },
          { cor: '#1E3A8A', label: '🌙 Hora de Dormir' },
          { cor: '#064E3B', label: '🦁 Momentos de Coragem' },
        ].map(p => (
          <div key={p.label} style={{ background: p.cor, borderRadius: 7, padding: '6px 8px', fontSize: 6, color: '#fff', fontWeight: 700, fontFamily: 'Nunito, sans-serif', display: 'flex', alignItems: 'center', gap: 4 }}>
            {p.label}
          </div>
        ))}
      </div>
    </div>
  )

  if (tela === 'player') return (
    <div style={phoneStyle}>
      {notch}
      <div style={{ padding: '20px 0 0', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Área do vídeo */}
        <div style={{ background: '#3B0764', margin: '0 8px', borderRadius: 8, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(245,166,35,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(245,166,35,0.5)' }}>
            <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #1C1C2E', marginLeft: 2 }} />
          </div>
        </div>
        {/* Info */}
        <div style={{ padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontSize: 6.5, color: '#fff', fontWeight: 700, fontFamily: 'Nunito, sans-serif' }}>A Criação do Mundo</div>
          <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.5)' }}>Bíblia Narrada · Ep. 1 · 8:24</div>
          {/* Barra de progresso */}
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 4, height: 3, marginTop: 4 }}>
            <div style={{ background: '#F5A623', borderRadius: 4, height: '100%', width: '35%' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 5, color: 'rgba(255,255,255,0.4)', marginTop: 1 }}>
            <span>2:54</span><span>8:24</span>
          </div>
        </div>
      </div>
    </div>
  )

  return null
}

export default function Dobra32AppTrilha() {
  return (
    <section className="relative overflow-hidden bg-dark py-16 px-5 md:py-24 md:px-8">

      {/* Orbe âmbar fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full blur-[100px]"
        style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)', zIndex: 0 }} />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Cabeçalho */}
        <motion.div variants={fadeUp} className="text-center mb-12">
          <span className="bg-amber/20 text-amber text-xs font-body font-semibold px-3 py-1 rounded-full inline-block mb-4">
            Como funciona
          </span>
          <h2 className="font-display font-extrabold text-[26px] md:text-[40px] leading-tight">
            <span className="text-white">Do cadastro ao primeiro vídeo em </span>
            <span style={{
              background: 'linear-gradient(90deg, #F5A623, #FBBF24)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 0 12px rgba(245,166,35,0.4))',
            }}>menos de 2 minutos</span>
          </h2>
          <p className="text-white/60 font-body text-base md:text-lg mt-3 max-w-xl mx-auto">
            Não precisa instalar nada. Funciona direto no navegador do celular, tablet ou computador.
          </p>
        </motion.div>

        {/* ── Trilha ── */}
        <div className="relative">

          {/* Linha conectora — desktop */}
          <div aria-hidden="true" className="hidden md:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.4) 15%, rgba(245,166,35,0.4) 85%, transparent)' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {passos.map((passo, i) => (
              <motion.div
                key={passo.num}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-4 relative"
              >
                {/* Linha conectora — mobile */}
                {i < passos.length - 1 && (
                  <div aria-hidden="true" className="md:hidden absolute top-[210px] left-1/2 -translate-x-1/2 w-px h-8"
                    style={{ background: 'linear-gradient(180deg, rgba(245,166,35,0.5), transparent)' }} />
                )}

                {/* Número */}
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-base z-10 relative"
                    style={{
                      background: 'linear-gradient(135deg, #F5A623, #D97706)',
                      color: '#1C1C2E',
                      boxShadow: '0 0 20px rgba(245,166,35,0.45)',
                    }}
                  >
                    {passo.num}
                  </div>
                  {/* Pulso */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(245,166,35,0.2)' }}
                    animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4, ease: 'easeOut' }}
                  />
                </div>

                {/* Mockup do celular */}
                <TelaMockup tela={passo.tela} />

                {/* Texto */}
                <div>
                  <p className="font-display font-bold text-white text-sm md:text-base leading-snug">
                    {passo.titulo}
                  </p>
                  <p className="font-body text-white/60 text-xs md:text-sm leading-relaxed mt-1 max-w-[180px] mx-auto">
                    {passo.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rodapé da dobra */}
        <motion.div variants={fadeUp} className="text-center mt-12">
          <p className="font-display font-bold text-white/80 text-base md:text-lg">
            É isso. Sem complicação.{' '}
            <span style={{
              background: 'linear-gradient(90deg, #F5A623, #FBBF24)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Seu filho assistindo histórias bíblicas hoje mesmo.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
