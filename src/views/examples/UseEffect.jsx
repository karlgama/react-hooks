import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if(n<0) return -1
    if(n===0) return 1

    return calcFactorial(n-1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial,setFactorial] = useState(1)
    //evita loop infinito
    useEffect(function() {
        setFactorial(calcFactorial(number))
    },[number])

    //ex 2
    const [status, setStatus] = useState("Ímpar")
    
    useEffect(function() {
        setStatus(number % 2 ===0 ? "Par" : "Ímpar" )
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial}</span>
                </div>
                <input type="number" className="input"
                value={number} onChange={e=>setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="exercício 2"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">
                        {status}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
