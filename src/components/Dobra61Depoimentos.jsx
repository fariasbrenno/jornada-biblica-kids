import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const Estrelas = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-amber text-lg">★</span>
    ))}
  </div>
)

const depoimentos = [
  {
    texto: 'Minha filha de 7 anos pediu para assistir as histórias da Bíblia antes de dormir. Nunca imaginei que ia acontecer isso de forma tão natural. Ela já conhece a história de Rute melhor do que eu.',
    nome: 'Rafaela M.',
    detalhe: 'Mãe de 2 filhos, São Paulo, SP',
  },
  {
    texto: 'Em três semanas meu filho já sabia contar a história de José e os irmãos com todos os detalhes. A gente tinha uma conversa bíblica real no jantar. Isso não tem preço.',
    nome: 'Tiago S.',
    detalhe: 'Pai de Pedro, 6 anos, Curitiba, PR',
  },
  {
    texto: 'Finalmente posso dar o celular sem aquela ansiedade de não saber o que ele vai ver. Sei exatamente o que aparece na tela. Essa paz de espírito valeu cada centavo.',
    nome: 'Juliana C.',
    detalhe: 'Mãe de 3 filhos, Belo Horizonte, MG',
  },
  {
    texto: 'Meu filho de 5 anos me perguntou por que Deus pediu pra Abraão sacrificar o filho. A gente nunca tinha tido essa conversa antes. Agora ele mesmo puxa o assunto.',
    nome: 'Marcos A.',
    detalhe: 'Pai de Davi, 5 anos, Fortaleza, CE',
  },
  {
    texto: 'Substituiu completamente o YouTube aqui em casa. Minha filha nem pede mais. Ela mesma vai lá e escolhe qual história quer assistir. Resultado incrível em poucos dias.',
    nome: 'Priscila B.',
    detalhe: 'Mãe de Isabela, 8 anos, Rio de Janeiro, RJ',
  },
  {
    texto: 'A playlist de hora de dormir foi a melhor descoberta do ano. Meu filho dorme tranquilo, sem tela agitada, e ainda aprende. Recomendo para toda mãe cristã.',
    nome: 'Carla F.',
    detalhe: 'Mãe de Lucas, 4 anos, Porto Alegre, RS',
  },
]

const mockupMensagens = [
  [
    { lado: 'esq', texto: 'Gente, alguém conhece algum conteúdo bíblico bom pra criança que realmente prenda a atenção?' },
    { lado: 'dir', texto: 'Tô usando a Jornada Bíblica Kids aqui. Minha filha assiste todos os dias sem eu pedir!' },
    { lado: 'esq', texto: 'Sério?? Que isso! Manda o link!' },
    { lado: 'dir', texto: 'Manda sim! Aqui em casa foi uma transformação. Ela mesma pede pra assistir antes de dormir 🙏' },
  ],
  [
    { lado: 'esq', texto: 'Alguém sabe como tirar meu filho do YouTube? Tô desesperada com os algoritmos levando ele pra coisa estranha' },
    { lado: 'dir', texto: 'Eu passei por isso. Hoje uso a Jornada Bíblica Kids. Ambiente fechado, sem anúncio, sem surpresa' },
    { lado: 'esq', texto: 'Nossa que bênção! Como é o acesso?' },
    { lado: 'dir', texto: 'Super fácil, entra pelo celular ou tablet. Meu filho nem lembra mais do YouTube 😅' },
  ],
  [
    { lado: 'esq', texto: 'Meu filho tá viciado em tela. Como vocês lidam com isso?' },
    { lado: 'dir', texto: 'A gente transformou o vício em ferramenta. Assina a Jornada Bíblica Kids, é conteúdo bíblico no formato que eles amam' },
    { lado: 'esq', texto: 'Nossa nunca tinha pensado nisso. Usar a tela A FAVOR da fé!' },
    { lado: 'dir', texto: 'Exatamente! É isso. Recomendo demais, nossa família mudou com isso 🙌' },
  ],
]

function MockupWhatsapp({ mensagens, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
      style={{ minHeight: 260 }}
    >
      {/* Header do WhatsApp */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#075E54' }}>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">👨‍👩‍👧</div>
        <div>
          <p className="text-white font-body font-semibold text-sm leading-none">Mães Cristãs - Grupo</p>
          <p className="text-white/70 text-xs">online</p>
        </div>
      </div>
      {/* Corpo do chat */}
      <div
        className="flex-1 p-3 space-y-2"
        style={{ background: '#ECE5DD' }}
      >
        {mensagens.map((msg, i) => (
          <div key={i} className={`flex ${msg.lado === 'dir' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="rounded-xl px-3 py-2 max-w-[80%] shadow-sm"
              style={{
                background: msg.lado === 'dir' ? '#DCF8C6' : '#FFFFFF',
                borderRadius: msg.lado === 'dir' ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
              }}
            >
              <p className="font-body text-ink text-xs md:text-sm leading-relaxed">{msg.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Dobra61Depoimentos() {
  return (
    <section className="bg-lilac py-16 px-5 md:py-24 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-primary text-[22px] md:text-[32px] text-center"
        >
          O que os pais estão dizendo:
        </motion.h2>

        {/* ── Mockups de conversa ── */}
        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {mockupMensagens.map((msgs, i) => (
            <MockupWhatsapp key={i} mensagens={msgs} />
          ))}
        </motion.div>

        {/* ── Depoimentos ── */}
        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {depoimentos.map((dep) => (
            <motion.div
              key={dep.nome}
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex flex-col gap-2"
            >
              <Estrelas />
              <p className="font-body text-ink text-base leading-relaxed flex-1">
                "{dep.texto}"
              </p>
              <div className="mt-2 border-t border-gray-100 pt-3">
                <p className="font-display font-bold text-primary text-sm">{dep.nome}</p>
                <p className="font-body text-muted text-xs">{dep.detalhe}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
