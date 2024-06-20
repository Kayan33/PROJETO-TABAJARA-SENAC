import "../styles/Imc-calorias-1.css"
import logo from '../assets/homem.png'

function Calorias01() {
    return (
        <main className="container">
            <article className="calorie-calculator">
                <div className="form-container">
                    <h1>Calculadora de Calorias</h1>
                    <h3>Respostas Imediadta</h3>
                    <div className="form">
                        <div>
                            <p>IDADE</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Altura</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>atual</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>Sexo</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Objetivo</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Exercício  semanal:</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Tipo de emprego:</p>
                            <input type="text" />
                        </div>
                    </div>

                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </article>
        </main>
    )
}

export default Calorias01