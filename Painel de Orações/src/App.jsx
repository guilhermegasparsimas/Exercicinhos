import { useState } from 'react'
import './App.css'
import OracaoDevWeb from './components/OracaoDevWeb'
import OracaoFrontend from './components/OracaoFrontend'
import OracaoBackend from './components/OracaoBackend'
import OracaoFullstack from './components/OracaoFullstack'
import OracaoEstudante from './components/OracaoEstudante'

function App() {
  const [painel, setPainel] = useState('')

  function tratarDevWeb(){
    if(painel == ''){
      setPainel(<OracaoDevWeb/>)
    }else{
      setPainel('')
    }
  }

  return (
<div className='container-painel'>
  <div>
    <label>Painel de Orações</label>
  </div>
  <div>
    <button onClick={tratarDevWeb}>Dev Web</button>
    <button onClick={() => setPainel(<OracaoFrontend/>)}>Dev Frontend</button>
    <button onClick={() => setPainel(<OracaoBackend/>)}>Dev Backend</button>
    <button onClick={() => setPainel(<OracaoFullstack/>)}>Dev Fullstack</button>
    <button onClick={() => setPainel(<OracaoEstudante/>)}>Dev Estudante</button>
  </div>
    <div>
      {painel}
    </div>
</div>
  )
}

export default App
