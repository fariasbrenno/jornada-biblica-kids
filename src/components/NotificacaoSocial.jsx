import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const assinantes = [
  { nome: 'Ana Paula M.', cidade: 'São Paulo, SP' },
  { nome: 'Camila R.', cidade: 'Belo Horizonte, MG' },
  { nome: 'Fernanda S.', cidade: 'Curitiba, PR' },
  { nome: 'Juliana C.', cidade: 'Rio de Janeiro, RJ' },
  { nome: 'Mariana T.', cidade: 'Fortaleza, CE' },
  { nome: 'Patrícia L.', cidade: 'Brasília, DF' },
  { nome: 'Renata B.', cidade: 'Salvador, BA' },
  { nome: 'Vanessa O.', cidade: 'Porto Alegre, RS' },
  { nome: 'Cristiane F.', cidade: 'Recife, PE' },
  { nome: 'Débora N.', cidade: 'Goiânia, GO' },
  { nome: 'Simone A.', cidade: 'Florianópolis, SC' },
  { nome: 'Tatiane M.', cidade: 'Belém, PA' },
]

export default function NotificacaoSocial() {
  const [visivel, setVisivel] = useState(false)
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    let timer

    const mostrar = (idx) => {
      setIndice(idx)
      setVisivel(true)
      timer = setTimeout(() => {
        setVisivel(false)
        const proximo = (idx + 1) % assinantes.length
        const delay = Math.floor(Math.random() * 15000) + 25000 // 25-40s
        timer = setTimeout(() => mostrar(proximo), delay)
      }, 5000)
    }

    const inicio = Math.floor(Math.random() * 4000) + 8000 // 8-12s
    timer = setTimeout(() => mostrar(0), inicio)

    return () => clearTimeout(timer)
  }, [])

  const pessoa = assinantes[indice]

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ x: -280, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -280, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="fixed bottom-6 left-4 z-50 bg-white rounded-2xl border border-gray-100 p-3 flex items-center gap-3 max-w-[260px]"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.14)' }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
            style={{ background: 'linear-gradient(135deg, #F5A623, #E8941A)' }}
          >
            🙏
          </div>
          <div className="min-w-0">
            <p className="font-display font-bold text-ink text-sm leading-tight truncate">{pessoa.nome}</p>
            <p className="font-body text-muted text-xs truncate">{pessoa.cidade}</p>
            <p className="font-body text-[#27AE60] text-xs font-semibold mt-0.5">acabou de assinar ✓</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
