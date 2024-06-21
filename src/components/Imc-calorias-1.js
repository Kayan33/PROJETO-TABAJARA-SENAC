import "../styles/Imc-calorias-1.css";
import logo from "../assets/homem.png";
import React, { useState } from "react";

function Calorias01() {
const[idade, setIdade] = useState('')
const[altura, setAltura] = useState('')
const[peso, setPeso] = useState('')
const[sexo, setSexo] = useState('')
const[objetivo, setObjetivo] = useState('')
const[exercicio, setExercicio] = useState('')
const[tipoEmprego, setTipoEmprego] = useState('')
const[masculino, setTiMasculino] = useState('')
const[feminino, setTiFeminino] = useState('')
 
  return (
    <main className="container">
      <article className="calorie-calculator">
        <div className="form-container">
          <h1>Calculadora de Calorias</h1>
          <div className="respostas-imediadta">
            <h3>Respostas Imediadta</h3>
            <form className="form">
              <div>
                <p>Idade:</p>
                <input type="number" 
                value={idade}
                onChange={(e) => setIdade(e.target.value)}/>
              </div>
              <div>
                <p>Altura:</p>
                <input type="number" 
                value={altura}
                onChange={(e) => setAltura(e.target.value)}/>
              </div>
              <div>
                <p>Peso atual:</p>
                <input type="number" 
                value={peso}
                onChange={(e) => setPeso(e.target.value)}/>
              </div>


              <div>
                <p>Objetivo:</p>
                <input type="text" 
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}/>
              </div>
              <div>
                <p>Exercício semanal:</p>
                <input type="text" 
                value={exercicio}
                onChange={(e) => setExercicio(e.target.value)}/>
              </div>
              <div>
                <p>Tipo de emprego:</p>
                <input type="text" 
                value={tipoEmprego}
                onChange={(e) => setTipoEmprego(e.target.value)}/>
              </div>
              <div>
                <p>Sexo:</p>
                <select 
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}>
                  <option value={masculino}>Masculono</option>
                  <option value={feminino}>Feminino</option>
                </select>
              </div>
            </form>
          </div>
            <button>Calcule IMC</button>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </article>
    </main>
  );
}

export default Calorias01;
