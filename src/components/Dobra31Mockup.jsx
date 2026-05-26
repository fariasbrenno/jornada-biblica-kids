import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Dobra31Mockup() {
  return (
    <section className="bg-lilac py-16 px-5 md:py-24 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:gap-10"
      >
        <motion.div variants={fadeUp} className="md:w-3/5">
          <div className="w-full mt-8 mb-4">
            <img
              src="/images/mockup-app.png"
              alt="Telas do aplicativo Jornada Bíblica Kids"
              className="w-full max-w-[680px] md:max-w-full mx-auto rounded-2xl shadow-[0_8px_40px_rgba(45,27,105,0.35)] drop-shadow-xl"
            />
          </div>
        </motion.div>

        <div className="md:w-2/5 text-center md:text-left">
          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold text-[22px] md:text-[36px] text-primary leading-tight"
          >
            O celular do seu filho pode ser uma ferramenta de discipulado.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-muted text-base md:text-lg mt-3 md:mt-5 leading-relaxed"
          >
            A Jornada Bíblica Kids transforma o hábito que ele já tem (assistir vídeos) em um hábito que você sempre quis dar a ele (conhecer a Palavra).
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
