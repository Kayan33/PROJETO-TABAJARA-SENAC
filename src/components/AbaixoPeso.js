import React from "react"
import '../styles/text.css';


export default function AbaixoPeso({imc}) {
    return (
        <div className="text">
            <h2>Abaixo do Peso</h2>
            <p>Você está abaixo do peso. É importante garantir uma alimentação nutritiva para alcançar um peso saudável. Acesse nossa Calculadora de Calorias para descobrir as melhores opções de dieta e exercícios personalizados para você.</p>
        </div>
    )
}