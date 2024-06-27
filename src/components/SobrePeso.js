import React from "react";
import '../styles/text.css';

export default function SobrePeso({imc}) {
    return (
        <div className="text">
            <h2>Sobrepeso</h2>
            <p>Você está acima do peso ideal. Considerando fazer ajustes na sua dieta e aumentar a atividade física para alcançar um peso mais saudável. Acesse nossa Calculadora de Calorias para obter planos de dieta personalizados e exercícios especializados para ajudá-lo a alcançar seus objetivos.</p>
        </div>
    )
}