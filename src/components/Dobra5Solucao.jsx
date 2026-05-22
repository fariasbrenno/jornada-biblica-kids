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
    title: 'Acesso imediato, sem complicação técnica',
    desc: 'Login por e-mail. Funciona no celular, tablet ou computador. Sem download, sem configuração, sem dor de cabeça.',
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
          className="font-display font-extrabold text-[24px] md:text-[36px] text-primary leading-tight max-w-3xl"
        >
          É por isso que a Jornada Bíblica Kids faz o que nenhuma outra plataforma faz:
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
                className="font-display font-black text-success text-2xl flex-shrink-0"
                style={{ textShadow: '0 0 16px rgba(39,174,96,0.4)' }}
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
