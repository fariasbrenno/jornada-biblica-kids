import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const dores = [
  'Seu filho ficou agressivo ou agitado depois de um longo período de tela e você não sabe o que ele assistiu',
  'Você tentou colocar um vídeo bíblico e ele pediu para mudar porque "é chato"',
  'Você encontrou um vídeo estranho ou inapropriado no histórico do YouTube Kids',
  'Você sente culpa toda vez que usa a tela como babá mas não tem outra saída no momento',
  'Você quer que seu filho conheça as histórias da Bíblia, mas os livrinhos ele não quer, só quer saber de vídeo',
  'E o pior: você já tentou alternativas, mas nenhuma era boa o suficiente para segurar a atenção dele por mais de cinco minutos',
]

export default function Dobra4Dores() {
  return (
    <section className="bg-white py-16 px-5 md:py-24 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-[24px] md:text-[36px] text-primary leading-tight max-w-3xl"
        >
          Se você é mãe (ou pai) cristão, provavelmente já passou por pelo menos uma dessas situações:
        </motion.h2>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
          {dores.map((dor) => (
            <motion.div
              key={dor}
              variants={fadeUp}
              className="bg-[#FFF5F5] border-l-4 border-danger rounded-xl p-4 flex items-start gap-3"
            >
              <span className="text-danger font-bold text-lg flex-shrink-0">✗</span>
              <p className="font-body text-ink text-base leading-relaxed">{dor}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-cream border border-amber rounded-xl p-5 md:p-8 mt-8 text-center"
        >
          <p className="font-display font-bold text-primary text-[17px] md:text-xl">
            Se você se reconheceu em pelo menos uma dessas situações, a Jornada Bíblica Kids foi criada para você.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
