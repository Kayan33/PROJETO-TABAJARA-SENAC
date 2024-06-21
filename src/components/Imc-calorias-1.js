import "../styles/Imc-calorias-1.css";
import logo from "../assets/homem.png";
import React from "react";

function Calorias01() {
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
                <input type="number" />
              </div>
              <div>
                <p>Altura:</p>
                <input type="number" />
              </div>
              <div>
                <p>Peso atual:</p>
                <input type="number" />
              </div>

              <div>
                <p>Sexo:</p>
                <input type="text" />
              </div>
              <div>
                <p>Objetivo:</p>
                <input type="text" />
              </div>
              <div>
                <p>Exercício semanal:</p>
                <input type="text" />
              </div>
              <div>
                <p>Tipo de emprego:</p>
                <input type="text" />
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
