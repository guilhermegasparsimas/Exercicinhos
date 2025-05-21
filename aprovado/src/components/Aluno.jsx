import React, { useState } from 'react'
import './Aluno.css'

function Aluno() {
    const[notaA, setNotaA] = useState('')
    const[notaB, setNotaB] = useState('')
    const[notaReal, setNotaReal] = useState()
    const{notaFinal, setNotaFinal} = useState()

    function calcularNota(){     
        let media = (Number(notaA) + Number(notaB)) /2
        
      if(media >= 7){
        setNotaReal('APROVADO')
      }else if(media >= 4){
        setNotaReal('RECUPERAÇÂO')
       
      }else{
        setNotaReal('REPROVADO')
      
      }
      
      setNotaA('')
      setNotaB('')
    } 
  return (
    <div className='container-aluno'>

      <label>Aprovado ou Reprovado</label>
      <input className='inputs-css' placeholder='Média A' type="text" value={notaA} onChange={(event) => setNotaA(event.target.value)}/>
      <input className='inputs-css' placeholder='Média B' type="text" value={notaB} onChange={(event) => setNotaB(event.target.value)}/>
      
      <button className='btn-aprovacao' onClick={calcularNota}>Aprovação</button>
      {notaReal}
    </div>
  )
}

export default Aluno