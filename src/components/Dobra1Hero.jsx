import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const particles = [
  { size: 6, top: '18%', left: '8%', dur: 3 },
  { size: 4, top: '35%', right: '12%', dur: 4 },
]

export default function Dobra1Hero() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 px-5 md:py-24 md:px-8">

      {/* ── Decorativos de fundo ── */}
      {/* Raio de luz central vindo do topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-full"
        style={{
          height: 400,
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,166,35,0.18) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Partículas flutuantes */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full blur-sm bg-amber/30"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left ?? undefined,
            right: p.right ?? undefined,
            zIndex: 0,
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: p.dur, ease: 'easeInOut' }}
        />
      ))}

      {/* Estrela de Davi decorativa */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{ top: 16, right: -20, width: 120, opacity: 0.07, zIndex: 0 }}
        viewBox="0 0 100 100"
        fill="#2D1B69"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 4 L89 73 L11 73 Z" />
        <path d="M50 96 L11 27 L89 27 Z" />
      </svg>

      {/* ── Conteúdo real ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="bg-lilac text-primary text-xs font-body font-semibold px-3 py-1 rounded-full">
            Para pais cristãos que querem mais do que filtro parental
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[56px] leading-tight text-primary text-center"
          style={{ textShadow: '0 0 40px rgba(45,27,105,0.15)' }}
        >
          Seu filho fica horas grudado no celular... mas na hora que você coloca a{' '}
          <span
            className="text-amber"
            style={{ textShadow: '0 0 20px rgba(245,166,35,0.5)' }}
          >
            Bíblia
          </span>{' '}
          na mão, ele perde o interesse em 2 minutos.
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="bg-warmWhite border-l-4 border-amber rounded-lg p-4 md:p-6 mt-6 text-left"
        >
          <p className="text-xs font-body font-semibold text-amber uppercase tracking-wide mb-2">
            Não é culpa dele. É engenharia.
          </p>
          <p className="text-ink text-base md:text-lg font-body leading-relaxed">
            Os algoritmos do YouTube e do TikTok foram projetados por equipes de cientistas comportamentais para viciar o cérebro infantil e nenhum filtro parental do mundo consegue segurar isso por muito tempo.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center my-6">
          <img
            src="/images/crianca-tablet.png"
            alt="Criança usando tablet para assistir conteúdo bíblico"
            className="w-full max-w-[320px] mx-auto drop-shadow-xl"
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
          />
        </motion.div>

        <motion.div
          variants={container}
          className="mt-8 space-y-4 text-ink text-[17px] md:text-lg font-body leading-[1.75]"
        >
          <motion.p variants={fadeUp}>Você já passou pela cena:</motion.p>

          <motion.p variants={fadeUp}>
            Está no meio do trabalho, com mil coisas para resolver, e precisa de dez minutinhos de paz. Coloca o celular na mão do seu filho com um desenho que parece inofensivo e quando você olha de novo, já se passaram quarenta minutos e ele está assistindo a um vídeo completamente diferente, de um canal que você nunca autorizou.
          </motion.p>

          <motion.p variants={fadeUp}>
            Você desliga a tela. Ele chora. Fica agressivo. Parece outro.
          </motion.p>

          <motion.p variants={fadeUp}>
            E então vem aquele pensamento que nenhuma mãe quer ter:
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="bg-lilac border-l-4 border-primary rounded-lg p-5 md:p-8 my-4"
          >
            <p className="text-primary font-display font-bold text-xl md:text-2xl italic text-center">
              "Eu perdi ele para esse algoritmo."
            </p>
          </motion.div>

          <motion.p variants={fadeUp}>
            Você não é fraca. Você não é uma mãe ruim. Você foi colocada contra uma das maiores máquinas de engenharia comportamental do mundo construída por corporações bilionárias que lucram com o tempo de tela do seu filho.
          </motion.p>

          <motion.p variants={fadeUp}>
            <span className="font-bold">E a pior parte:</span> enquanto o algoritmo trabalha 24 horas por dia para prender a atenção da sua criança, os valores que você quer plantar a Palavra, o caráter, a fé ficam cada vez mais difíceis de transmitir.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
