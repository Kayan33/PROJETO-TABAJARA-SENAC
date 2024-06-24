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
// const[exercicio, setExercicio] = useState('')
// const[tipoEmprego, setTipoEmprego] = useState('')
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
            <h2>Qual é o seu nível de atividade diária?</h2>
          </div>
        <div className="atividades-flex">
          <div className="img-flex">
            <img src={leve} alt="" />
            <button value='leve'>Atividade leve</button>          
          </div>

          <div className="img-flex">
            <img src={moderada} alt="" />
            <button value='moderada'>Atividade moderada</button>
          </div>

          <div className="img-flex">
            <img src={elevada} alt="" />
            <button value='elevada'>Atividade elevada</button>
          </div>

          <div className="img-flex">
            <img src={intensa} alt="" />
            <button value='intensa'>Atividade intensa</button>
          </div>
        </div>
            <button className="button-calcule" onClick={TaxaMetabólicaBasal}>Calcule IMC</button>
      </article>
      </>
      ):(
        <div class="resultado-container">
  <div class="resultado-item">
    <h2>Calorias</h2>
    <p>Aproximadamente, o gasto calórico diário é de 2000</p>
  </div>
  <div class="resultado-item">
    <h2>Calorias</h2>
    <p>Aproximadamente, o gasto calórico diário é de 2500</p>
  </div>
</div>

      
    )}
    </main>
  );
}

export default Calorias01;
