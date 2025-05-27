import React, { useState } from 'react'
import './Aluno.css'

function Aluno() {
    const[notaA, setNotaA] = useState('')
    const[notaB, setNotaB] = useState('')
    const[notaReal, setNotaReal] = useState()
    

    function calcularNota(){     
        let media = (Number(notaA) + Number(notaB)) /2
        
      if(media >= 7){
        setNotaReal(<label id='aprovado'>APROVADO</label>)
       
      }else if(media >=4 && media <7){
        setNotaReal(<label id='recuperacao'>RECUPERAÇÃO</label>)
      }else{
        setNotaReal(<label id='reprovado'>REPROVADO</label>)
      }
      
      setNotaA('')
      setNotaB('')
    } 
  return (
    <div className='container-aluno'>

      <h1>Aprovado ou Reprovado 🧑‍🎓</h1>
      <input className='inputs-css' placeholder='Média A' type="text" value={notaA} onChange={(event) => setNotaA(event.target.value)}/>
      <input className='inputs-css' placeholder='Média B' type="text" value={notaB} onChange={(event) => setNotaB(event.target.value)}/>
      
      <button className='btn-aprovacao' onClick={calcularNota}>Aprovação</button>
      <div className='nota-real'>
      {notaReal}
      </div>

    </div>
  )
}

export default Aluno