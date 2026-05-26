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
          Seu filho fica{' '}
          <span
            className="font-black text-danger"
            style={{ textShadow: '0 0 18px rgba(220,38,38,0.3)' }}
          >
            horas grudado no celular
          </span>
          ... mas na hora que você coloca a{' '}
          <span
            className="relative inline-block text-amber"
            style={{ textShadow: '0 0 24px rgba(245,166,35,0.6)' }}
          >
            Bíblia
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 w-full h-[3px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #F5A623, #D97706)' }}
            />
          </span>{' '}
          na mão, ele perde o interesse em 2 minutos.
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="bg-warmWhite border-l-4 border-amber rounded-lg p-4 md:p-6 mt-6 text-left"
        >
          <p className="text-sm font-body font-black text-amber uppercase tracking-widest mb-2">
            ⚠ Não é culpa dele. É engenharia.
          </p>
          <p className="text-ink text-base md:text-lg font-body leading-relaxed">
            Os{' '}
            <span className="font-bold text-danger">algoritmos do YouTube e do TikTok</span>{' '}
            foram projetados por equipes de cientistas comportamentais para{' '}
            <span className="font-bold text-danger">viciar o cérebro infantil</span>{' '}
            e nenhum filtro parental do mundo consegue segurar isso por muito tempo.
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
          <motion.h3
            variants={fadeUp}
            className="font-display font-extrabold text-[22px] md:text-[28px] text-primary leading-tight mt-6"
            style={{ textShadow: '0 0 20px rgba(45,27,105,0.15)' }}
          >
            Você já passou pela cena:
          </motion.h3>

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
            style={{ boxShadow: '0 4px 32px rgba(45,27,105,0.15), inset 0 1px 0 rgba(255,255,255,0.6)' }}
          >
            <p
              className="font-display font-black text-xl md:text-3xl italic text-center tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #2D1B69 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 12px rgba(124,58,237,0.3))',
              }}
            >
              "Eu perdi ele para esse algoritmo."
            </p>
          </motion.div>

          <motion.p variants={fadeUp}>
            Você não é fraca. Você não é uma mãe ruim. Você foi colocada contra uma das maiores máquinas de engenharia comportamental do mundo construída por corporações bilionárias que lucram com o tempo de tela do seu filho.
          </motion.p>

          <motion.p variants={fadeUp}>
            <span className="font-black text-amber text-lg" style={{ textShadow: '0 0 12px rgba(245,166,35,0.4)' }}>E a pior parte:</span>{' '}
            enquanto o algoritmo trabalha 24 horas por dia para prender a atenção da sua criança, os valores que você quer plantar —{' '}
            <span className="font-bold text-primary">a Palavra, o caráter, a fé</span>{' '}
            — ficam cada vez mais difíceis de transmitir.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
