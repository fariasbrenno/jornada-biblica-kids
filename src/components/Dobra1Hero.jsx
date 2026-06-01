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
            foram projetados por equipes de cientistas para{' '}
            <span className="font-bold text-danger">viciar o cérebro infantil</span>.{' '}
            Por isso desenvolvemos a{' '}
            <span className="font-bold text-primary">Jornada Bíblica Kids</span>{' '}
            — para edificar o caráter e a fé no coração do seu filho.
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

          {/* ── 3 painéis de cena ── */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2"
          >
            {/* Painel 1 */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-amber/20 flex flex-col"
              style={{ background: 'rgba(245,166,35,0.05)' }}
            >
              {/* Área da imagem */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img src="/images/quadrinho-1.png" alt="Mãe entregando celular para o filho" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.parentElement.style.background = 'rgba(245,166,35,0.1)' }} />
              </div>
              {/* Legenda estilo HQ */}
              <div className="p-4 border-t border-amber/20">
                <span className="text-base font-body font-black text-amber uppercase tracking-widest block mb-1">① O começo</span>
                <p className="text-ink text-sm font-body leading-relaxed">
                  Você tem mil coisas pra fazer e coloca o celular na mão dele por <strong>10 minutinhos</strong>. Um desenho que parece inofensivo.
                </p>
              </div>
            </motion.div>

            {/* Painel 2 */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-danger/20 flex flex-col"
              style={{ background: 'rgba(239,68,68,0.04)' }}
            >
              {/* Área da imagem */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img src="/images/quadrinho-2.png" alt="Criança hipnotizada na tela" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.parentElement.style.background = 'rgba(239,68,68,0.1)' }} />
              </div>
              {/* Legenda estilo HQ */}
              <div className="p-4 border-t border-danger/20">
                <span className="text-base font-body font-black text-danger uppercase tracking-widest block mb-1">② 10 minutos depois</span>
                <p className="text-ink text-sm font-body leading-relaxed">
                  Quando você olha de novo: vídeo diferente, canal que você <strong>nunca autorizou</strong>. E ele ainda quer mais.
                </p>
              </div>
            </motion.div>

            {/* Painel 3 */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-primary/20 flex flex-col"
              style={{ background: 'rgba(45,27,105,0.05)' }}
            >
              {/* Área da imagem */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img src="/images/quadrinho-3.jpg" alt="Mãe desligando a tela, filho chorando" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.parentElement.style.background = 'rgba(45,27,105,0.1)' }} />
              </div>
              {/* Legenda estilo HQ */}
              <div className="p-4 border-t border-primary/20">
                <span className="text-base font-body font-black text-primary uppercase tracking-widest block mb-1">③ Você desliga</span>
                <p className="text-ink text-sm font-body leading-relaxed">
                  Ele chora. Fica agressivo. Parece outro. E você se sente culpada por algo que <strong>não é culpa sua.</strong>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-center text-muted text-base font-body">
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

          {/* ── Bloco visual: mãe julgada + corporações ── */}
          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">

            {/* Imagem 1 — Mãe julgada */}
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-danger/20 flex flex-col">
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src="/images/mae-julgada.png"
                  alt="Mãe sendo julgada pela sociedade"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.parentElement.style.background = 'rgba(239,68,68,0.1)' }}
                />
              </div>
              <div className="p-4 border-t border-danger/20 flex-1" style={{ background: 'rgba(239,68,68,0.04)' }}>
                <p className="text-ink text-sm font-body leading-relaxed">
                  A sociedade te julga: <strong>"Você é fraca"</strong>, <strong>"Você é uma mãe ruim"</strong>.
                </p>
              </div>
            </motion.div>

            {/* Imagem 2 — Corporações */}
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-primary/20 flex flex-col">
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src="/images/corporacoes.png"
                  alt="Corporações bilionárias manipulando o tempo de tela das crianças"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.parentElement.style.background = 'rgba(45,27,105,0.1)' }}
                />
              </div>
              <div className="p-4 border-t border-primary/20 flex-1" style={{ background: 'rgba(45,27,105,0.04)' }}>
                <p className="text-ink text-sm font-body leading-relaxed">
                  <strong>Você não é fraca. Você não é uma mãe ruim.</strong> Você foi colocada contra uma das maiores máquinas de engenharia comportamental do mundo — construída por <strong>corporações bilionárias</strong> que lucram com o tempo de tela do seu filho.
                </p>
              </div>
            </motion.div>

          </motion.div>

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
