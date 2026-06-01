import { motion } from 'framer-motion'

export default function Dobra25Transicao() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 px-5 md:py-28 md:px-8 text-center">

      {/* Orbe central âmbar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full blur-[100px]"
        style={{
          width: 500, height: 300,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.12) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8"
      >
        {/* Título principal */}
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
          className="font-display font-black leading-tight text-center"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
        >
          <span className="text-white">Existe uma solução que </span>
          <span
            style={{
              background: 'linear-gradient(90deg, #F5A623 0%, #FBBF24 50%, #D97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(245,166,35,0.5))',
            }}
          >
            nenhuma plataforma grande
          </span>
          <span className="text-white"> oferece.</span>
        </motion.h2>

        {/* Seta animada apontando para baixo */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } } }}
          className="flex flex-col items-center gap-1"
        >
          {[0, 0.15, 0.3].map((delay, i) => (
            <motion.svg
              key={i}
              width="32" height="20"
              viewBox="0 0 32 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, delay, ease: 'easeInOut' }}
            >
              <path d="M2 2L16 16L30 2" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
