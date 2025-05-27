import { useState } from 'react'
import './App.css'

function App() {
 const[inputGasolina, setInputGasolina] = useState('')
 const[totalGasolina, setTotalGasolina] = useState(0)
 const[inputEtanol, setInputEtanol] = useState('')
 const[totalEtanol, setTotalEtanol] = useState(0)

  function venderGasolina(){
    let quantidade = Number(inputGasolina)

    setTotalGasolina(totalGasolina + quantidade)
  }

  function venderEtanol(){
    let quantidadeEtanol = Number(inputEtanol)

    setTotalEtanol(totalEtanol + quantidadeEtanol)
  }

  return (
    <>
  <div className='container-app'>
    <h1>Combustíveis</h1>
    
    <div className="app-box">

    <label>Gasolina </label>
    <input className='inpt' type="text" value={inputGasolina} onChange={(event) => setInputGasolina(event.target.value)}/>
    <button className='btn' onClick={venderGasolina}>+</button>{totalGasolina}
  </div>
  <label>Etanol </label>
    <input className='inpt' type="text" value={inputEtanol} onChange={(event) => setInputEtanol(event.target.value)}/>
    <button className='btn' onClick={venderEtanol}>+</button>{totalEtanol}


    </div>
   
    </>
  )
}

export default App
