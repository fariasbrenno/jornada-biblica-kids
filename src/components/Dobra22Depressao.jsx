import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const sinais = [
  {
    icon: '😶',
    title: 'Irritabilidade sem motivo aparente',
    text: 'Chora fácil, briga por qualquer coisa, perde a paciência assim que a tela é retirada. Parece birra — mas é o cérebro em abstinência.',
  },
  {
    icon: '😴',
    title: 'Cansaço mesmo sem fazer nada',
    text: 'Passou horas em frente à tela mas diz que está "entediado". O cérebro estimulado em excesso não consegue descansar nem se concentrar no mundo real.',
  },
  {
    icon: '🫥',
    title: 'Desinteresse pelo mundo ao redor',
    text: 'Brincadeiras, amigos, livros, natureza — nada parece tão interessante quanto a tela. É o sinal mais sutil e o mais preocupante.',
  },
  {
    icon: '😰',
    title: 'Angústia real quando fica sem tela',
    text: 'Uma tensão quase física quando o celular ou tablet é retirado. Não é frescura. Pesquisadores chamam de dependência digital.',
  },
]

export default function Dobra22Depressao() {
  return (
    <section className="bg-[#FFF5F5] py-16 px-5 md:py-24 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-danger/10 border border-danger/25 text-danger text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
            ⚠ Atenção, mãe
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-center text-[26px] md:text-[42px] leading-tight max-w-4xl mx-auto"
        >
          <span className="text-ink">Pesquisadores chamam de </span>
          <span
            style={{
              background: 'linear-gradient(90deg, #EF4444, #DC2626)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            "epidemia silenciosa"
          </span>
          <span className="text-ink">.<br />Você conhece como </span>
          <span className="text-primary font-black">depressão infantil.</span>
        </motion.h2>

        {/* Big stat */}
        <motion.div
          variants={fadeUp}
          className="mt-10 rounded-2xl p-6 md:p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(124,58,237,0.06) 100%)',
            border: '1.5px solid rgba(239,68,68,0.2)',
          }}
        >
          <p
            className="font-display font-black text-[64px] md:text-[88px] leading-none"
            style={{
              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 24px rgba(239,68,68,0.3))',
            }}
          >
            66%
          </p>
          <p className="font-body text-ink text-base md:text-lg mt-3 max-w-xl mx-auto leading-relaxed">
            de aumento no risco de sintomas de ansiedade e depressão em crianças que passam{' '}
            <strong>mais de 2 horas por dia em telas</strong> — segundo estudos publicados em
            periódicos internacionais de pediatria.
          </p>
        </motion.div>

        {/* Explanation */}
        <motion.p
          variants={fadeUp}
          className="font-body text-ink text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mt-8"
        >
          O problema não é só o tempo de tela. É o que acontece dentro do cérebro em formação
          quando ele é exposto a <strong>loops de dopamina</strong> — o mesmo mecanismo que
          cria dependência. Cada vídeo que começa sozinho, cada notificação, cada curtida:
          o cérebro aprende a precisar da tela para se sentir bem. E quando ela some,
          a tristeza ocupa o lugar.
        </motion.p>

        {/* Signs grid */}
        <motion.p
          variants={fadeUp}
          className="font-display font-bold text-ink text-xl md:text-2xl text-center mt-12 mb-6"
        >
          Você já percebeu algum desses sinais?
        </motion.p>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sinais.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 border border-danger/15 flex items-start gap-4"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{s.icon}</span>
              <div>
                <p className="font-display font-bold text-ink text-base mb-1">{s.title}</p>
                <p className="font-body text-ink/65 text-sm leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge */}
        <motion.div
          variants={fadeUp}
          className="mt-10 rounded-2xl p-6 md:p-8 text-center border border-primary/20"
          style={{ background: 'rgba(124,58,237,0.05)' }}
        >
          <p className="font-display font-bold text-primary text-lg md:text-xl leading-snug max-w-2xl mx-auto">
            Você não vai conseguir tirar a tela da vida do seu filho.{' '}
            <br className="hidden md:block" />
            Mas você pode{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F5A623, #D97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              escolher o que está dentro dela.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
