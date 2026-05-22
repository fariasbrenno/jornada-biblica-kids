import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const checklist = [
  'Quer vencer a batalha da tela sem tirar o celular da mão do seu filho (porque você sabe que isso não funciona)',
  'Está começando a perceber que precisa de uma solução estruturada, não só de mais um aplicativo aleatório',
  'Já perdeu tempo e energia tentando curar conteúdo bíblico na internet sozinha',
  'Tem menos de 5 minutos por dia disponíveis para pensar nisso e quer que funcione no piloto automático',
  'Quer que seu filho chegue à adolescência com uma base bíblica sólida, construída dia após dia',
  'Prefere investir menos de R$ 20 por mês (ou R$ 97 no ano inteiro) a deixar o algoritmo educar seu filho de graça',
]

export default function Dobra8Checklist() {
  return (
    <section className="bg-lilac py-16 px-5 md:py-24 md:px-8">
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
          A Jornada Bíblica Kids foi feita pensando em você que:
        </motion.h2>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
          {checklist.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="bg-white border-l-4 border-amber rounded-xl p-4 flex items-start gap-3"
            >
              <span className="text-amber text-xl font-bold flex-shrink-0">›</span>
              <p className="font-body text-ink text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center mt-8">
          <CTAButton label="SIM, QUERO TRANSFORMAR A HORA DA TELA" />
        </motion.div>
      </motion.div>
    </section>
  )
}
