import { motion } from 'framer-motion'

export default function CTAButton({ label = 'GARANTIR ACESSO AGORA', href = '#checkout' }) {
  return (
    <motion.a
      href={href}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 6px 28px rgba(245,166,35,0.6), 0 0 60px rgba(245,166,35,0.25)',
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: '0 4px 20px rgba(245,166,35,0.4), 0 0 40px rgba(245,166,35,0.15)',
      }}
      className="relative overflow-hidden bg-gradient-to-br from-amber to-amberDark text-ink font-display font-extrabold text-lg py-5 px-9 rounded-xl w-full max-w-md transition-colors duration-200 cursor-pointer block text-center mx-auto"
    >
      {/* Shimmer sweep */}
      <span
        aria-hidden="true"
        className="shimmer-sweep pointer-events-none absolute inset-y-0 w-[55%] left-0"
        style={{
          background: 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)',
        }}
      />
      <span className="relative z-10">{label}</span>
    </motion.a>
  )
}
