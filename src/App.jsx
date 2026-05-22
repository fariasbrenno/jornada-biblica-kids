import Dobra1Hero from './components/Dobra1Hero'
import Dobra2Problema from './components/Dobra2Problema'
import Dobra3Produto from './components/Dobra3Produto'
import Dobra31Mockup from './components/Dobra31Mockup'
import Dobra4Dores from './components/Dobra4Dores'
import Dobra5Solucao from './components/Dobra5Solucao'
import Dobra6ParaQuem from './components/Dobra6ParaQuem'
import Dobra61Depoimentos from './components/Dobra61Depoimentos'
import Dobra7Oferta from './components/Dobra7Oferta'
import Dobra8Checklist from './components/Dobra8Checklist'
import Dobra9FAQ from './components/Dobra9FAQ'
import Rodape from './components/Rodape'
import WaveDivider from './components/WaveDivider'
import NotificacaoSocial from './components/NotificacaoSocial'

export default function App() {
  return (
    <main className="font-body bg-white w-full overflow-x-hidden">
      <Dobra1Hero />
      <WaveDivider topColor="#FDF8F0" bottomColor="#FFFFFF" />
      <Dobra2Problema />
      <WaveDivider topColor="#FFFFFF" bottomColor="#1A1035" />
      <Dobra3Produto />
      <WaveDivider topColor="#1A1035" bottomColor="#F0EBF8" />
      <Dobra31Mockup />
      <WaveDivider topColor="#F0EBF8" bottomColor="#FFFFFF" />
      <Dobra4Dores />
      <WaveDivider topColor="#FFFFFF" bottomColor="#FDF8F0" />
      <Dobra5Solucao />
      <WaveDivider topColor="#FDF8F0" bottomColor="#1A1035" />
      <Dobra6ParaQuem />
      <WaveDivider topColor="#1A1035" bottomColor="#F0EBF8" />
      <Dobra61Depoimentos />
      <WaveDivider topColor="#F0EBF8" bottomColor="#FFFFFF" />
      <Dobra7Oferta />
      <WaveDivider topColor="#FFFFFF" bottomColor="#F0EBF8" />
      <Dobra8Checklist />
      <WaveDivider topColor="#F0EBF8" bottomColor="#FFFFFF" />
      <Dobra9FAQ />
      <WaveDivider topColor="#FFFFFF" bottomColor="#1A1035" />
      <Rodape />
      <NotificacaoSocial />
    </main>
  )
}
