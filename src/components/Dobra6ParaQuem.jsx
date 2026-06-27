import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const perfis = [
  'Quer que seu filho cresça conhecendo a Palavra, não só ouvindo sobre ela na igreja uma vez por semana',
  'Está cansada de lutar contra a tela e quer transformá-la em aliada',
  'Não tem tempo para pesquisar e curar conteúdo bíblico toda semana',
  'Quer ter paz de espírito quando seu filho pegar o celular',
  'Acredita que a fé se forma no dia a dia, nos pequenos momentos, inclusive na hora de assistir vídeos',
  'Prefere pagar R$ 19,90 por mês (ou R$ 97 por ano inteiro) a arriscar o que seu filho está consumindo de graça',
]

const stars = [
  { top: '10%', left: '5%',  dur: 2.4, delay: 0   },
  { top: '25%', left: '94%', dur: 3.1, delay: 0.7 },
  { top: '50%', left: '12%', dur: 2.9, delay: 1.1 },
  { top: '65%', left: '88%', dur: 3.7, delay: 0.4 },
  { top: '80%', left: '30%', dur: 2.6, delay: 1.3 },
  { top: '90%', left: '75%', dur: 4.2, delay: 0.9 },
  { top: '38%', left: '55%', dur: 3.3, delay: 0.2 },
  { top: '58%', left: '42%', dur: 2.0, delay: 1.6 },
]


export default function Dobra6ParaQuem() {
  return (
    <section className="relative overflow-hidden bg-dark py-16 px-5 md:py-24 md:px-8">

      {/* ── Orbe roxo superior direito ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full blur-[80px]"
        style={{
          width: 300, height: 300,
          top: -80, right: -80,
          background: 'radial-gradient(circle, rgba(74,90,217,0.25) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* ── Orbe âmbar inferior esquerdo ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full blur-[60px]"
        style={{
          width: 250, height: 250,
          bottom: -60, left: -60,
          background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* ── Estrelas ── */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute bg-white/40 rounded-full"
          style={{ width: 2, height: 2, top: s.top, left: s.left, zIndex: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: s.dur, delay: s.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Conteúdo real ── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-[24px] md:text-[36px] leading-tight md:text-center"
        >
          <span
            style={{
              background: 'linear-gradient(90deg, #F5A623 0%, #FBBF24 50%, #D97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 12px rgba(245,166,35,0.4))',
            }}
          >
            A Jornada Bíblica Kids
          </span>
          <span className="text-white"> é para </span>
          <span className="text-white font-black underline decoration-amber decoration-2 underline-offset-4">você</span>
          <span className="text-white"> que:</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="flex justify-center my-8">
          <img
            src="/images/familia-feliz.png"
            alt="Família cristã feliz assistindo conteúdo bíblico juntos"
            className="w-full max-w-[320px] md:max-w-[560px] mx-auto drop-shadow-xl"
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
          />
        </motion.div>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
          {perfis.map((perfil, i) => (
            <motion.div
              key={perfil}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-white/5"
            >
              <span
                className="font-black text-lg mt-0.5 flex-shrink-0"
                style={{
                  color: i % 2 === 0 ? '#F5A623' : '#A78BFA',
                  textShadow: i % 2 === 0
                    ? '0 0 10px rgba(245,166,35,0.6)'
                    : '0 0 10px rgba(167,139,250,0.6)',
                }}
              >
                ✦
              </span>
              <p className="font-body text-white/90 text-base md:text-lg leading-relaxed">{perfil}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl p-6 md:p-10 mt-10 text-center"
          style={{
            background: 'rgba(15,10,40,0.7)',
            border: '1.5px solid rgba(245,166,35,0.25)',
            boxShadow: '0 0 60px rgba(245,166,35,0.08), 0 4px 32px rgba(0,0,0,0.4)',
          }}
        >
          <p className="font-body text-amber text-xs uppercase tracking-widest font-semibold mb-3">
            🚀 Produto em lançamento
          </p>
          <p
            className="font-display font-black text-amber leading-tight"
            style={{ fontSize: 'clamp(28px, 6vw, 56px)' }}
          >
            Seja um dos primeiros fundadores
          </p>
          <p className="font-display font-bold text-white text-base md:text-xl mt-3 max-w-xl mx-auto leading-relaxed">
            Quem entra agora ajuda a construir a Jornada Bíblica Kids{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F5A623, #FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              e garante o menor preço que esse produto vai ter.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
