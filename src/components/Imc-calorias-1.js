import "../styles/Imc-calorias-1.css";
import leve from "../assets/icon-sitting-on-chair.png";
import moderada from "../assets/icon-stand-up.png";
import elevada from "../assets/icon-walking.png";
import intensa from "../assets/icon-walking.png";
import React, { useState } from "react";

function Calorias01() {
const[idade, setIdade] = useState('')
const[altura, setAltura] = useState('')
const[peso, setPeso] = useState('')
const[sexo, setSexo] = useState('')
const [calculoexecutavel, setCalculoexecutavel]= useState (false)
const [resultado, setResultado] = useState (null)

function TaxaMetabólicaBasal() {
  let resultado;
    if (sexo === 'masculino') {
      resultado =   (13.75*peso) + (5*altura) - (6.76*idade) + 66.5
    }  else if (sexo === 'feminino'){
       resultado =  (9.56*peso) + (1.85* altura) - (4.68*idade) + 665
    }
   setResultado(resultado)
    setCalculoexecutavel (true);
}
 
  return (
    <main className="container">
      {!calculoexecutavel?(
        <>
      
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
                <p>Sexo:</p>
                <select 
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}>
                  <option disabled value="">
                      sexo
                    </option>
                  <option value='masculino'>Masculono</option>
                  <option value='feminino'>Feminino</option>
                </select>
              </div>
            </form>
        </div>
          </div>

            <button className="button-calcule" onClick={TaxaMetabólicaBasal}>Calcule IMC</button>
      </article>
      </>
      ):(
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
                <p>Sexo:</p>
                <select 
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}>
                  <option disabled value="">
                      sexo
                    </option>
                  <option value='masculino'>Masculino</option>
                  <option value='feminino'>Feminino</option>
                </select>
              </div>
            </form>
        </div>
          </div>

            <button className="button-calcule" onClick={TaxaMetabólicaBasal}>Calcular Calorias</button>
  <div class="resultado-container">
   <div class="resultado-item">
      <h3>{resultado}</h3>
    </div>
</div>
      </article>
        

      
    )}
    </main>
  );
}

export default Calorias01;
