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
  <div>
    <label>Gasolina </label>
    <input type="text" value={inputGasolina} onChange={(event) => setInputGasolina(event.target.value)}/>
    <button onClick={venderGasolina}>+</button>{totalGasolina}
  </div>
  <div>
  <label>Etanol </label>
    <input type="text" value={inputEtanol} onChange={(event) => setInputEtanol(event.target.value)}/>
    <button onClick={venderEtanol}>+</button>{totalEtanol}
  </div>
    </>
  )
}

export default App
