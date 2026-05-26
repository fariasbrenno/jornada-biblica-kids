import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const playlists = [
  {
    emoji: '📖',
    name: 'Bíblia Narrada do Gênesis ao Apocalipse',
    desc: 'A história sagrada completa em episódios curtos, no formato que prende a atenção infantil.',
    span: false,
  },
  {
    emoji: '🌙',
    name: 'Playlist Hora de Dormir',
    desc: 'Contos bíblicos calmos com música suave para substituir a tela agitada antes de dormir.',
    span: false,
  },
  {
    emoji: '🦁',
    name: 'Momentos de Coragem',
    desc: 'Histórias de Davi, Daniel, Ester e outros heróis da fé para plantar coragem e caráter.',
    span: false,
  },
  {
    emoji: '📱',
    name: 'Instale como app em qualquer tela',
    desc: 'Celular, tablet, computador ou TV. Instala direto na tela inicial em segundos, como qualquer outro app.',
    span: false,
  },
  {
    emoji: '🔒',
    name: 'Ambiente 100% blindado',
    desc: 'Sem anúncios. Sem sugestões aleatórias. Sem conteúdo externo. Ponto.',
    span: true,
  },
]

const stars = [
  { top: '8%',  left: '7%',  dur: 2.2, delay: 0   },
  { top: '20%', left: '92%', dur: 3.5, delay: 0.5 },
  { top: '45%', left: '15%', dur: 2.8, delay: 1.0 },
  { top: '60%', left: '80%', dur: 4.0, delay: 0.3 },
  { top: '75%', left: '25%', dur: 3.2, delay: 1.5 },
  { top: '85%', left: '70%', dur: 2.5, delay: 0.8 },
  { top: '35%', left: '50%', dur: 3.8, delay: 0.2 },
  { top: '55%', left: '40%', dur: 2.1, delay: 1.2 },
]

const cardStyle = {
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(45,27,105,0.6)',
  backdropFilter: 'blur(12px)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.3)',
}

export default function Dobra3Produto() {
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
        {/* ── Layout 2 colunas: texto + imagem ── */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">

          {/* Coluna esquerda — texto */}
          <div className="md:w-1/2">
            <motion.span
              variants={fadeUp}
              className="bg-amber/20 text-amber text-xs font-body font-semibold px-3 py-1 rounded-full inline-block mb-4"
            >
              Conheça a solução
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-[26px] md:text-[40px] leading-tight"
            >
              <span className="text-white">Apresentando a </span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #F5A623 0%, #FBBF24 50%, #D97706 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 16px rgba(245,166,35,0.5))',
                }}
              >
                Jornada Bíblica Kids
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body font-medium text-[17px] md:text-xl mt-2 leading-relaxed"
            >
              <span className="text-white/90">O </span>
              <span className="font-black text-amber">primeiro</span>{' '}
              <span className="text-white/90">streaming de vídeo para crianças onde o algoritmo trabalha</span>{' '}
              <span className="font-bold text-amber">para a fé do seu filho</span>
              <span className="text-white/90">, não contra ela.</span>
            </motion.p>

            <motion.div variants={container} className="text-white/90 font-body text-base md:text-lg leading-relaxed space-y-4 mt-6">
              <motion.p variants={fadeUp}>
                A Jornada Bíblica Kids não é um repositório bagunçado de desenhos religiosos.
              </motion.p>
              <motion.p variants={fadeUp}>
                É uma jornada guiada e cronológica do Gênesis ao Apocalipse onde cada conto bíblico é um degrau na construção moral da sua criança.
              </motion.p>
              <motion.p variants={fadeUp}>
                Enquanto o YouTube decide aleatoriamente o que seu filho vai assistir a seguir, aqui você decide. A sequência foi cuidadosamente organizada para que cada história construa sobre a anterior, formando uma base bíblica completa do jeito que uma criança de hoje aprende: por meio de vídeo.
              </motion.p>
            </motion.div>
          </div>

          {/* Coluna direita — imagem (somente desktop) */}
          <motion.div
            className="hidden md:flex md:w-1/2 justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src="/images/jesus-criancas.png"
              alt="Jesus rodeado de crianças felizes"
              className="w-full max-w-[560px] drop-shadow-xl"
              onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
            />
          </motion.div>

        </div>

        <motion.div variants={fadeUp} className="flex items-center gap-3 mt-10 mb-4">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.5))' }} />
          <p
            className="font-display font-black text-xl md:text-3xl whitespace-nowrap"
            style={{
              background: 'linear-gradient(90deg, #F5A623, #FBBF24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ✦ O que tem dentro da Jornada:
          </p>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(245,166,35,0.5), transparent)' }} />
        </motion.div>

        {/* Imagem jesus-criancas — somente mobile (no desktop aparece na coluna direita) */}
        <motion.div variants={fadeUp} className="flex md:hidden justify-center my-6">
          <img
            src="/images/jesus-criancas.png"
            alt="Jesus rodeado de crianças felizes"
            className="w-full max-w-[420px] mx-auto drop-shadow-xl"
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
          />
        </motion.div>

        <motion.div variants={container} className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {playlists.slice(0, 4).map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              className="rounded-2xl p-5 flex flex-col gap-2"
              style={cardStyle}
            >
              <span className="text-3xl">{item.emoji}</span>
              <p className="font-display font-bold text-white text-sm md:text-base">{item.name}</p>
              <p className="font-body text-white/75 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5 flex flex-col gap-2 col-span-2 md:col-span-4"
            style={cardStyle}
          >
            <span className="text-3xl">{playlists[4].emoji}</span>
            <p className="font-display font-bold text-white text-sm md:text-base">{playlists[4].name}</p>
            <p className="font-body text-white/75 text-xs md:text-sm leading-relaxed">{playlists[4].desc}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
