 import style from './Calcs.module.css'
 import { useState, useEffect } from 'react'


export default function Calcs(){
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMult, setRespMult] = useState()
    const [respDiv, setRespDiv] = useState()

    const somar = () =>  setRespSoma(parseFloat(n1) + parseFloat(n2))
    const sub = () => setRespSub(parseFloat(n1) - parseFloat(n2))
    const mult = () => setRespMult(parseFloat(n1) * parseFloat(n2))
    const dividir = () => setRespDiv(parseFloat(n1) / parseFloat(n2))

    const handleAll = (a,b) => {
        setRespSoma(parseFloat(n1) + parseFloat(n2))
        setRespSub(parseFloat(n1) - parseFloat(n2))
        setRespMult(parseFloat(n1) * parseFloat(n2))
        setRespDiv(parseFloat(n1) / parseFloat(n2))
    }

    useEffect(() =>{
        setRespSoma(parseFloat(n1) + parseFloat(n2))
        setRespSub(parseFloat(n1) - parseFloat(n2))
        setRespMult(parseFloat(n1) * parseFloat(n2))
        setRespDiv(parseFloat(n1) / parseFloat(n2))
    }, [n1,n2])

    
    return(
        <>
    <h5><a href={"/"} className={style.backBtn}>Voltar</a></h5>   
    <h1>Cálculos</h1>     
    <br />
    <div>
        <h4>Digite os números para os cálculos</h4>
        <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder='Primeiro número'/>
        <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder='Segundo número'/>
    </div>
    <div>
        <h4>Calculos</h4>
        <p><button onClick={somar}>Somar</button>{!isNaN(respSoma) ? respSoma: 'Digite números válidos'}</p>
        <p><button onClick={sub}>Subtrair</button>{!isNaN(respSub) ? respSub: 'Digite números válidos'}</p>
        <p><button onClick={mult}>Multiplicar</button>{!isNaN(respMult) ? respMult: 'Digite números válidos'}</p>
        <p><button onClick={dividir}>Dividir</button>{n2 === "0" ? "Erro ao dividir por 0" 
        : !isNaN(respDiv) && isFinite(respDiv) ? respDiv
        : "Digite números válidos"}
        </p>
        <br />
        <button onClick={() => handleAll(n1,n2)}>Calcular todas</button>
    </div>
 <div>
        <h4>Média de 5 notas</h4>
        <input type="number" value={nota1} onChange={(e) => setNota1(e.target.value)} placeholder='Primeira nota' />
        <input type="number" value={nota2} onChange={(e) => setNota2(e.target.value)} placeholder='Segunda nota' />
        <input type="number" value={nota3} onChange={(e) => setNota3(e.target.value)} placeholder='Terceira nota' />
        <input type="number" value={nota4} onChange={(e) => setNnota4(e.target.value)} placeholder='Quarta nota' />
        <input type="number" value={nota5} onChange={(e) => setNota5(e.target.value)} placeholder='Quinta nota' />
        <button onClick={media}>Calcular média</button>
    </div> 
        </>
    )
}