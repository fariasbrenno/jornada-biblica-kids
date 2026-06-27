import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import CTAButton from './CTAButton'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const faqs = [
  {
    q: 'O que é exatamente a Jornada Bíblica Kids?',
    a: 'É um serviço de streaming de vídeos bíblicos para crianças, organizado em playlists temáticas e cronológicas. Funciona como um app: instale direto na tela inicial do celular, tablet ou computador — e dá pra assistir na TV também.',
  },
  {
    q: 'Para qual faixa etária é indicado?',
    a: 'O conteúdo foi pensado principalmente para crianças de 3 a 10 anos, mas muitas famílias assistem juntas. A narrativa agrada adultos também.',
  },
  {
    q: 'Funciona no celular do meu filho?',
    a: 'Sim! Você instala direto na tela inicial do celular como se fosse um app normal — sem precisar da App Store ou Google Play. Um toque e está instalado. Funciona em celular, tablet, computador e TV.',
  },
  {
    q: 'Tem conteúdo novo sendo adicionado?',
    a: 'Sim. Novas histórias e playlists são adicionadas diariamente para os assinantes ativos.',
  },
  {
    q: 'Tem anúncios ou conteúdo externo?',
    a: 'Não. O ambiente é completamente fechado. Sem anúncios, sem sugestões de vídeos externos, sem conteúdo que não foi previamente curado pela nossa equipe.',
  },
  {
    q: 'Como funciona o cancelamento?',
    a: 'É simples e sem burocracia. Você cancela quando quiser, direto pelo e-mail ou pela plataforma, sem multa.',
  },
  {
    q: 'O bônus do Manual de Atividades é entregue como?',
    a: 'Em PDF, imediatamente após a confirmação do pagamento. É só imprimir e usar junto com as histórias.',
  },
  {
    q: 'Os preços de R$ 19,90 mensal e R$ 97 anual são garantidos para sempre?',
    a: 'Sim, enquanto você mantiver a assinatura ativa. São os preços de lançamento e não serão reajustados para quem já é assinante. Se cancelar e quiser voltar depois, o valor poderá ser diferente.',
  },
  {
    q: 'Serve para igrejas e ministérios infantis?',
    a: 'Sim. Temos planos para uso coletivo. Entre em contato pelo e-mail ou WhatsApp para condições especiais.',
  },
  {
    q: 'Por que pagar se tem Superbook e YouVersion Kids de graça?',
    a: 'São produtos diferentes. O Superbook tem aproximadamente 60 episódios de histórias selecionadas — ótimo, mas é um catálogo fixo, sem atualização. O YouVersion Kids tem atividades interativas, não uma narrativa em vídeo. A Jornada Bíblica Kids é o único app que leva sua criança do Gênesis ao Apocalipse em vídeos originais, com novos episódios adicionados todo dia. Não é uma questão de gratuito vs. pago — é uma questão de o que você quer que seu filho assista.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. Se nos primeiros 7 dias você sentir que o produto não é para a sua família, devolvemos 100% do valor sem perguntas e sem burocracia.',
  },
]

export default function Dobra9FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-white py-16 px-5 md:py-24 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-3xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-[24px] md:text-[36px] text-primary text-center"
        >
          Perguntas frequentes
        </motion.h2>

        <motion.div variants={container} className="space-y-2 mt-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border border-primary/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between items-center w-full p-4 md:p-5 text-left bg-cream hover:bg-lilac transition-colors"
              >
                <span className="font-display font-semibold text-primary text-base md:text-lg pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden bg-white"
                  >
                    <p className="font-body text-muted text-sm md:text-base leading-relaxed p-4 md:p-5 pt-2">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10">
          <CTAButton label="QUERO GARANTIR MEU ACESSO AGORA" />
        </motion.div>
      </motion.div>
    </section>
  )
}
