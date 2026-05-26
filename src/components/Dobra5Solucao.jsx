import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const diferenciais = [
  {
    num: '1',
    title: 'Conteúdo 100% curado e blindado',
    desc: 'Cada vídeo foi selecionado e organizado manualmente. Nenhum algoritmo decide o que aparece a seguir, você e a nossa equipe decidem.',
  },
  {
    num: '2',
    title: 'Jornada cronológica da Bíblia completa',
    desc: 'Não é uma seleção aleatória de histórias famosas. É a Palavra inteira, do começo ao fim, em episódios no formato que crianças de hoje consomem.',
  },
  {
    num: '3',
    title: 'Playlists temáticas para cada momento do dia',
    desc: 'Hora de dormir, momentos de coragem, histórias de obediência. O conteúdo certo na hora certa, sem você precisar garimpar na internet.',
  },
  {
    num: '4',
    title: 'Sem anúncios, sem sugestões externas, sem surpresas',
    desc: 'O ambiente é fechado. O que aparece na tela é exatamente o que foi planejado para aparecer.',
  },
  {
    num: '5',
    title: 'Instale como app em segundos, sem complicação',
    desc: 'Adicione direto na tela inicial do celular, tablet ou computador. Funciona como um app nativo — e dá pra assistir na TV também.',
  },
]

export default function Dobra5Solucao() {
  return (
    <section className="bg-cream py-16 px-5 md:py-24 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-[24px] md:text-[36px] leading-tight max-w-3xl"
        >
          <span className="text-primary">É por isso que a </span>
          <span
            style={{
              background: 'linear-gradient(90deg, #F5A623, #D97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Jornada Bíblica Kids
          </span>
          <span className="text-primary"> faz o que </span>
          <span className="relative inline-block text-primary font-black">
            nenhuma outra plataforma faz
            <span
              aria-hidden="true"
              className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #F5A623, #D97706)' }}
            />
          </span>
          <span className="text-primary">:</span>
        </motion.h2>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {diferenciais.map((d) => (
            <motion.div
              key={d.num}
              variants={fadeUp}
              whileHover={{
                y: -2,
                boxShadow: '0 8px 32px rgba(45,27,105,0.12)',
              }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-success flex gap-4 items-start cursor-default hover:border-amber/40 transition-colors duration-200"
            >
              <span
                className="font-display font-black text-2xl flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  color: '#fff',
                  boxShadow: '0 0 16px rgba(16,185,129,0.4)',
                  fontSize: '14px',
                }}
              >
                {d.num}
              </span>
              <div>
                <p className="font-display font-bold text-primary text-base md:text-lg">{d.title}</p>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mt-1">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
