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

const inclusos = [
  'Acesso completo à Bíblia Narrada (Gênesis ao Apocalipse em vídeo)',
  'Playlist Hora de Dormir',
  'Playlist Momentos de Coragem',
  'Ambiente 100% blindado, sem anúncios',
  'App instalável no celular, tablet, computador e TV',
  'Novas histórias adicionadas diariamente',
  'BONUS: Manual de Atividades Bíblicas para Imprimir (PDF entregue imediatamente após o cadastro)',
]

const selos = [
  { icon: '🔒', text: 'Pagamento seguro' },
  { icon: '✅', text: '7 dias de garantia' },
  { icon: '📱', text: 'Acesso imediato' },
]

export default function Dobra7Oferta() {
  return (
    <section id="checkout" className="bg-white py-16 px-5 md:py-24 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-[26px] md:text-[40px] text-primary text-center"
        >
          O investimento na Jornada Bíblica Kids
        </motion.h2>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 md:items-start">

          {/* ── Card Anual ── */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-6 md:p-8 relative mt-4"
            style={{
              background: '#2D1B69',
              boxShadow: '0 0 0 1px rgba(245,166,35,0.4), 0 8px 40px rgba(45,27,105,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            {/* Raio de luz interno — overflow isolado no wrapper */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 w-full rounded-t-2xl overflow-hidden"
              style={{ height: 80 }}
            >
              <div
                className="w-full h-full"
                style={{ background: 'linear-gradient(180deg, rgba(245,166,35,0.12) 0%, transparent 100%)' }}
              />
            </div>

            {/* Badge pulsante */}
            <motion.span
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber text-ink text-xs font-display font-extrabold px-4 py-1.5 rounded-full whitespace-nowrap"
              style={{ boxShadow: '0 0 16px rgba(245,166,35,0.5)' }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              MAIS ESCOLHIDO
            </motion.span>

            <p className="font-body text-amber text-xs uppercase tracking-widest font-semibold relative z-10">
              PLANO ANUAL
            </p>
            <div className="flex items-baseline gap-1 mt-2 relative z-10">
              <p
                className="font-display font-black text-[56px] md:text-[72px] text-amber leading-none"
                style={{ textShadow: '0 0 30px rgba(245,166,35,0.6)' }}
              >
                R$ 97
              </p>
              <p className="font-body text-white/70 text-base font-normal">/ano</p>
            </div>
            <p className="font-body text-white/80 text-sm md:text-base leading-relaxed mt-2 relative z-10">
              Equivale a R$ 8,08 por mês. Menos do que uma revista infantil. Menos do que um lanche. Por um ano inteiro de formação bíblica garantida.
            </p>
            <span className="inline-block bg-amber/20 text-amber font-body font-semibold text-sm px-3 py-1 rounded-full mt-2 relative z-10">
              Você economiza R$ 141,80
            </span>
            <div className="mt-4 relative z-10">
              <CTAButton label="QUERO GARANTIR MEU ACESSO ANUAL" href="https://pay.kiwify.com.br/AlehDaq" />
            </div>
          </motion.div>

          {/* ── Card Mensal ── */}
          <motion.div
            variants={fadeUp}
            className="bg-cream border border-primary/20 rounded-2xl p-6 md:p-8 md:mt-4"
          >
            <p className="font-body text-muted text-xs uppercase tracking-widest font-semibold">
              PLANO MENSAL
            </p>
            <p className="font-body text-muted text-sm line-through mt-2">De R$ 39,90/mês</p>
            <div className="flex items-baseline gap-1 mt-1">
              <p className="font-display font-black text-[44px] md:text-[56px] text-primary leading-none">R$ 19,90</p>
              <p className="font-body text-muted text-base font-normal">/mês</p>
            </div>
            <div className="mt-4">
              <CTAButton label="QUERO O PLANO MENSAL" href="https://pay.kiwify.com.br/yIvZrxR" />
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-body text-ink text-base md:text-lg leading-relaxed text-center mt-6 max-w-2xl mx-auto"
        >
          Pagando no plano anual, você economiza R$ 141,80 em relação ao plano mensal e ainda garante que sua família não vai ficar sem acesso no meio da jornada. É o plano escolhido por quem leva o discipulado dos filhos a sério.
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center my-6">
          <img
            src="/images/mae-filho-tela.png"
            alt="Mãe e filho assistindo conteúdo bíblico juntos na tela"
            className="w-full max-w-[320px] mx-auto drop-shadow-xl"
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-warmWhite border-2 border-amber rounded-xl p-4 md:p-6 mt-6 flex gap-3 items-start max-w-2xl mx-auto"
        >
          <span className="text-xl flex-shrink-0">⚠️</span>
          <p className="font-body text-ink text-base">
            <span className="font-bold">Aviso importante:</span> Este é o preço de lançamento para as primeiras famílias que apoiam a Jornada desde o início. Quando atingirmos nossa meta de assinantes fundadores, o valor anual será reajustado. Se você quer garantir o acesso com o menor preço que esse produto vai ter, precisa entrar agora.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 max-w-md mx-auto">
          <CTAButton label="QUERO GARANTIR MEU ACESSO AGORA" />
        </motion.div>

        <motion.div variants={container} className="mt-12 max-w-3xl mx-auto">
          <motion.p
            variants={fadeUp}
            className="font-display font-bold text-primary text-lg md:text-2xl mb-4"
          >
            O que está incluído:
          </motion.p>

          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {inclusos.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                <span className="text-success text-xl flex-shrink-0">✅</span>
                <p className="font-body text-ink text-base">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center gap-6 md:gap-10 mt-8 flex-wrap">
          {selos.map((selo) => (
            <div key={selo.text} className="flex items-center gap-1.5 font-body text-muted text-sm md:text-base">
              <span>{selo.icon}</span>
              <span>{selo.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
