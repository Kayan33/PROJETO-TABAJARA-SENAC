import React, { useState } from "react";
import '../styles/imc-article-1.css';
import AbaixoPeso from './AbaixoPeso'
import Normal from './PesoNormal'
import SobrePeso from './SobrePeso'
import Obesidade1 from './Obesidade-1'
import homem from '../assets/homem.png'
import { Link } from "react-router-dom";

export default function CalculoDeImc() {

    const [idade, setIdade] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [imc, setImc] = useState(null)
    
    function calcularImc(e) {
        e.preventDefault()
        const imcCalculado = peso /(altura * altura)
        setImc(imcCalculado)
    }

        function respostaImc() {
        if (imc < 18.5) {
            return <AbaixoPeso imc={imc}/>
        } else if (imc >= 18.5 && imc <= 24.9) {
            return <Normal imc={imc}/>
        } else if (imc >= 25.0 && imc <= 29.9) {
            return <SobrePeso imc={imc}/>
        } else if (imc >= 30.0 && imc <= 34.9) {
            return <Obesidade1 imc={imc}/>
        }
        return null
    }

    return (
        <div>
            <h2>Calculadora de IMC</h2>
            <main className="principal3">
                <article className="artigo-3">
                        <form onSubmit={calcularImc}>
                            <h3>OBTENHA SUA RESPOSTA AGORA</h3>
                            <div className="cx-pai">
                                <div className="cx">
                                    <p>IDADE</p>
                                    <input
                                    type="number"
                                    value={idade}
                                    onChange={(e) => setIdade(e.target.value)}
                                    />
                                </div>
                                <div className="cx">
                                    <p>PESO</p>
                                    <input
                                    type="number"
                                    value={peso}
                                    onChange={(e) => setPeso(e.target.value)}
                                    />
                                </div>
                                <div className="cx">
                                    <p>ALTURA</p>
                                    <input
                                    type="number"
                                    value={altura}
                                    onChange={(e) => setAltura(e.target.value)}
                                    />
                                </div>
                                <div className="cx">
                                    <p>SEXO</p>
                                    <select id="opcoes" className="opt">
                                        <option value="Homem">Homem</option>
                                        <option value="Mulher">Mulher</option>
                                    </select>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="button-imc">
                                Calcule IMC
                            </button>
                        </form>
                        
                </article>
                <img className="img-imc" src={homem} alt="Homem que treina" />
               
            </main>
            <div className="grafico-de-peso">
                <p>  66.8 Kg </p>
                <p>  66.8 Kg a 89.9 </p>
                <p>  89.9 a 108.3 Kg </p>
                <p>  66.8 Kg </p>
                <p>  66.8 Kg </p>
            </div>
            <div className="grafico-de-peso2">
                <p className="blue">&lt;18.5</p>
                <p className="green">18.5 a 24.9</p>
                <p className="yellow">24.9 a 30</p>
                <p className="orange">&gt;30</p>
                <p className="red">35 &gt;</p>
            </div>
             <div className="resultado">
                {imc !== null && respostaImc()}
            </div>
            <Link to='/calorias' className="calcular-calorias">Calcular Calorias</Link>
        </div>
    )
}