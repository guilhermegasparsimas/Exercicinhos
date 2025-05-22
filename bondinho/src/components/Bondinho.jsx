import React, { useState } from 'react'
import './Bondinho.css'

function Bondinho() {
    const[alunos, setAlunos] = useState('')
    const[monitores, setMonitores] = useState('')
    const[mensagem, setMensagem] = useState('')

    function calcularSN(){
        let total = Number(alunos) + Number(monitores)

        if (total >= 1 && total <= 50){
            setMensagem('Sim')
        }else{
            setMensagem('Não')
        }
        setAlunos('')
        setMonitores('')
    }

  return (
    <div>
      <h1>Bondinho</h1>
      <div className='contexto'>
        <input className='inpt' placeholder='Alunos' type="text" value={alunos} onChange={(event) => setAlunos(event.target.value)} />
        <input className='inpt' placeholder='Monitores' type="text" value={monitores} onChange={(event) => setMonitores(event.target.value)} />
        <button className='btn' onClick={calcularSN}>Calcular</button>
      </div>
      <div>
      É possível levar todos os alunos e monitores ? <div className='mensagem'>{mensagem}</div>
      </div>
    </div>
  )
}

export default Bondinho
