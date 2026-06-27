import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const motivos = [
  {
    icon: '🔒',
    titulo: 'Garantia de 7 dias',
    desc: 'Se por qualquer motivo você não gostar, devolvemos cada centavo sem questionamento. Nenhum risco para você.',
  },
  {
    icon: '📖',
    titulo: 'Bíblia completa — do Gênesis ao Apocalipse',
    desc: 'Nenhum outro app para crianças tem isso. A Palavra inteira, em episódios no formato que sua criança já ama.',
  },
  {
    icon: '🎬',
    titulo: 'Conteúdo 100% original',
    desc: 'Cada vídeo foi criado por nós, especialmente para o JBK. Não é conteúdo internacional traduzido nem material de terceiros.',
  },
  {
    icon: '✨',
    titulo: 'Novos episódios todo dia',
    desc: 'A Jornada está crescendo. Sua família não vai ter o mesmo conteúdo parado — sempre tem algo novo esperando.',
  },
  {
    icon: '🚫',
    titulo: 'Zero anúncios, zero surpresas',
    desc: 'O ambiente é 100% fechado. O que aparece na tela é exatamente o que foi planejado aparecer. Sem algoritmo, sem desvios.',
  },
  {
    icon: '🇧🇷',
    titulo: 'Feito por cristãos brasileiros, para crianças brasileiras',
    desc: 'Uma equipe que compartilha da mesma fé e entende a cultura do seu filho. Não um produto estrangeiro adaptado.',
  },
]

export default function Dobra61Depoimentos() {
  return (
    <section className="bg-lilac py-16 px-5 md:py-24 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-primary text-[22px] md:text-[32px] text-center"
        >
          Por que confiar na Jornada Bíblica Kids:
        </motion.h2>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {motivos.map((m) => (
            <motion.div
              key={m.titulo}
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex gap-4 items-start"
            >
              <span className="text-3xl flex-shrink-0">{m.icon}</span>
              <div>
                <p className="font-display font-bold text-primary text-base md:text-lg">{m.titulo}</p>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mt-1">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl p-6 md:p-8 mt-8 text-center"
          style={{
            background: 'rgba(45,27,105,0.06)',
            border: '1.5px solid rgba(45,27,105,0.15)',
          }}
        >
          <p className="font-display font-black text-primary text-lg md:text-2xl leading-snug">
            Somos um produto novo. E isso significa que{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F5A623, #D97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              você entra com o menor preço que isso vai ter.
            </span>
          </p>
          <p className="font-body text-muted text-base mt-3">
            Quem apoia agora faz parte da história. E tem a garantia de 7 dias para sair sem perder nada.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
