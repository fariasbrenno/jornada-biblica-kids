import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const lacunas = [
  'Conteúdo 100% bíblico e seguro',
  'Tão envolvente quanto o que ele já assiste',
  'Organizado de uma forma que realmente forme o caráter',
]

export default function Dobra2Problema() {
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
          className="font-display font-extrabold text-[26px] md:text-[36px] leading-tight"
        >
          <span className="text-primary">O problema não é a tela.</span>
          <br />
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(90deg, #F5A623, #D97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 10px rgba(245,166,35,0.35))',
            }}
          >
            É o que está dentro dela.
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row md:items-start md:gap-12 mt-8">

          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src="/images/mae-cansada.png"
              alt="Mãe exausta enquanto filho assiste tela ao fundo"
              className="w-full max-w-[340px] md:max-w-[480px] mx-auto drop-shadow-2xl"
              onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
            />
          </motion.div>

          <div className="md:w-1/2">
            <motion.p variants={fadeUp} className="font-display font-bold text-xl md:text-2xl text-primary">
              Você já tentou de tudo.
            </motion.p>

            {/* Lista com ícones — cópia original preservada */}
            <motion.div variants={container} className="mt-4 space-y-4">
              {[
                { icon: '🔐', text: 'Colocou senha no YouTube Kids mas os anúncios passam assim mesmo.' },
                { icon: '📱', text: 'Baixou aplicativo de controle parental mas quando você não está olhando, ele acha um jeito.' },
                { icon: '😔', text: 'Tentou sentar junto para assistir conteúdo cristão mas os vídeos disponíveis são tão desanimados que até você perdeu a paciência.' },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-cream rounded-xl p-4 border border-primary/10"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <p className="font-body text-ink text-base md:text-lg leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="font-body text-ink text-base md:text-lg leading-relaxed mt-10">
              A verdade é que <strong>nenhuma outra plataforma</strong> oferece as três coisas que você precisa ao mesmo tempo:
            </motion.p>

            {/* Label deixando claro que é das outras plataformas */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mt-4 mb-2">
              <span className="text-danger text-base">⚠</span>
              <p className="text-danger font-body font-bold text-sm uppercase tracking-wide">O que falta nas outras plataformas:</p>
            </motion.div>

            <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {lacunas.map((text) => (
                <motion.div
                  key={text}
                  variants={fadeUp}
                  className="bg-cream border border-danger/20 rounded-xl p-4 flex items-start gap-3"
                >
                  <span className="text-danger text-xl font-bold flex-shrink-0">✗</span>
                  <p className="font-body text-ink text-base">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <p
                className="font-display font-black text-[40px] md:text-[56px]"
                style={{
                  background: 'linear-gradient(135deg, #F5A623 0%, #D97706 60%, #F5A623 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 16px rgba(245,166,35,0.5))',
                  letterSpacing: '-0.01em',
                }}
              >
                Até agora.
              </p>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}
