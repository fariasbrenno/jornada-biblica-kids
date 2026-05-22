import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const links = ['Políticas de privacidade', 'Termos de uso', 'Contato']

export default function Rodape() {
  return (
    <footer className="bg-dark py-10 px-5 md:py-16 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.p variants={fadeUp} className="font-display font-bold text-white text-xl md:text-2xl">
          Jornada Bíblica Kids
        </motion.p>

        <motion.p variants={fadeUp} className="font-body text-white/50 text-sm mt-2">
          © 2025 Jornada Bíblica Kids. Todos os direitos reservados.
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center gap-4 md:gap-8 mt-3 flex-wrap">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-white/40 text-xs md:text-sm underline hover:text-white/60 transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-body text-white/30 text-xs text-center mt-4 max-w-sm mx-auto leading-relaxed"
        >
          Este site não é afiliado ao YouTube, Google, Meta ou qualquer outra plataforma de streaming. Jornada Bíblica Kids é um produto independente.
        </motion.p>
      </motion.div>
    </footer>
  )
}
