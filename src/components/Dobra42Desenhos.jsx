import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const problemas = [
  {
    icon: '🟠',
    cor: '#F97316',
    label: 'Cores quentes e saturadas',
    desc: 'Vermelho, laranja e amarelo neon ativam o sistema de alerta do cérebro. Sua filha fica agitada porque o conteúdo foi projetado exatamente para isso.',
  },
  {
    icon: '⚡',
    cor: '#EF4444',
    label: 'Cortes a cada 1–3 segundos',
    desc: 'O cérebro em formação aprende a exigir estimulação constante. Resultado: ela não consegue se concentrar em livros, conversas ou em qualquer coisa mais lenta que um Reel.',
  },
  {
    icon: '📢',
    cor: '#F59E0B',
    label: 'Sons altos e efeitos caóticos',
    desc: 'Efeitos sonoros exagerados elevam o cortisol — o hormônio do estresse. Crianças ficam mais impulsivas e reativas depois de assistir, não mais calmas.',
  },
  {
    icon: '🌀',
    cor: '#EF4444',
    label: 'Histórias sem sentido moral',
    desc: 'Personagens caóticos sem consequências ensinam que comportamentos impulsivos são engraçados. Não é só entretenimento — é formação de caráter (para o lado errado).',
  },
]

const classicos = [
  {
    nome: 'Família Urso',
    desc: 'Ritmo lento · paleta azul e verde · vínculos familiares reais',
    cor: '#6EE7B7',
  },
  {
    nome: 'Historinhas de Dragões',
    desc: 'Educativo · cores suaves · imaginação saudável e segura',
    cor: '#93C5FD',
  },
  {
    nome: 'A Casa dos 7 Monstros',
    desc: 'Amizade · coragem · narrativa com começo, meio e fim',
    cor: '#C4B5FD',
  },
  {
    nome: 'Madeline',
    desc: 'Paleta pastel · lições de vida claras · narração calma',
    cor: '#86EFAC',
  },
]

export default function Dobra42Desenhos() {
  return (
    <section className="py-16 px-5 md:py-24 md:px-8" style={{ background: '#1A1035' }}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/25 text-amber text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
            🎨 O que ninguém conta sobre os desenhos do seu filho
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-center text-[26px] md:text-[42px] leading-tight max-w-4xl mx-auto"
        >
          <span className="text-white">Os desenhos mudaram.</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #F5A623, #D97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            O comportamento do seu filho também.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-body text-white/60 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mt-5"
        >
          Não é coincidência. A indústria do entretenimento infantil descobriu que{' '}
          <strong className="text-white/90">
            certas cores, ritmos e sons mantêm crianças grudadas na tela por mais tempo
          </strong>{' '}
          — e passou a usá-los sistematicamente. O problema: o que gruda, também estressa.
        </motion.p>

        {/* Problems grid */}
        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {problemas.map((p) => (
            <motion.div
              key={p.label}
              variants={fadeUp}
              className="rounded-2xl p-5 border flex items-start gap-4"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: `${p.cor}35`,
              }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <p className="font-display font-bold text-white text-base mb-1">{p.label}</p>
                <p className="font-body text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mt-14 mb-8">
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <p className="text-white/40 text-sm font-body whitespace-nowrap px-2">
            Nem sempre foi assim
          </p>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
        </motion.div>

        {/* Classic shows */}
        <motion.h3
          variants={fadeUp}
          className="font-display font-bold text-white text-center text-xl md:text-2xl mb-2"
        >
          Lembra quando os desenhos{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #6EE7B7, #34D399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            acalmavam em vez de agitar?
          </span>
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="font-body text-white/45 text-sm text-center mb-7"
        >
          Família Urso, Historinhas de Dragões, A Casa dos 7 Monstros, Madeline — eles tinham algo em comum:
        </motion.p>

        <motion.div variants={container} className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {classicos.map((c) => (
            <motion.div
              key={c.nome}
              variants={fadeUp}
              className="rounded-2xl p-4 text-center border"
              style={{
                background: `${c.cor}12`,
                borderColor: `${c.cor}30`,
              }}
            >
              <p className="font-display font-bold text-white text-sm mb-2">{c.nome}</p>
              <p className="font-body text-xs leading-relaxed" style={{ color: c.cor }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-body text-white/45 text-sm leading-relaxed text-center max-w-2xl mx-auto mt-6"
        >
          Paleta de cores frias e suaves, ritmo calmo de narração, histórias com começo, meio e fim —
          e um valor moral claro. As crianças saíam da frente da TV mais tranquilas do que entravam.
        </motion.p>

        {/* Bridge */}
        <motion.div
          variants={fadeUp}
          className="mt-10 rounded-2xl p-6 md:p-8 text-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(245,166,35,0.10) 100%)',
            border: '1.5px solid rgba(124,58,237,0.35)',
          }}
        >
          <p className="font-display font-bold text-white text-lg md:text-xl leading-snug max-w-2xl mx-auto">
            A Jornada Bíblica Kids foi criada com esses mesmos princípios:{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F5A623, #D97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              conteúdo que acalma, forma e conecta com Deus.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
