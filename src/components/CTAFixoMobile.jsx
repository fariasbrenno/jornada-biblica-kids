import { useState, useEffect } from 'react'
import CTAButton from './CTAButton'

export default function CTAFixoMobile() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const checkout = document.getElementById('checkout')
    if (!checkout) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(checkout)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4">
      <p className="font-body text-muted text-xs text-center mb-2">🔒 Garantia de 7 dias</p>
      <CTAButton label="GARANTIR ACESSO AGORA" />
    </div>
  )
}
