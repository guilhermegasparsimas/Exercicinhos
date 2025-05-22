import React, { useState } from 'react'

function Pneu() {
    const[pressaoDesejada, setPressaoDesejada] = useState('')
    const[pressaoLida, setPressaoLida] = useState('')
    const[diferenca, setDiferenca] = useState('')

    function calcularPressao(){

        // if(pressaoDesejada >= 1 && pressaoDesejada <= 40){
        //     let distinto = Number(pressaoDesejada) - Number(pressaoLida)
        //     setDiferenca(distinto)
        // }else if (distinto === 0 ){
        //     setDiferenca(0)
        // }       
      }

    }
  return (
    <div>
      <h1>Pressão dos Pneus</h1>
      <div>
        <input type="text" value={pressaoDesejada} onChange={(event) => setPressaoDesejada(event.target.value)}/>
        <input type="text" value={pressaoLida} onChange={(event) => setPressaoLida(event.target.value)}/>
        <button onClick={calcularPressao}>Calcular</button>
      </div>
      <div>{diferenca}</div>
    </div>
  )


export default Pneu
