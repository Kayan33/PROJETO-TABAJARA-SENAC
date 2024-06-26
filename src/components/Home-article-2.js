import React from "react"
import mulher from '../assets/mulher.png'
import { Link } from "react-router-dom"
import '../styles/home-article-2.css'

export default function Home_Article2() {
    return (
        <div className="principal2">
            <article className="artigo2">
                <div>
                    <img src={mulher} alt="Mulher-malhando" className="img2"/>
                </div>
                <div className="text2">
                    <p>Explore nossa variedade de dietas personalizadas
                    e exercícios especializados para atingir
                    seus objetivos de saúde. Utilize nossa
                    Calculadora de Calorias para planejar
                    suas refeições e descubra rotinas de exercícios
                    adaptadas às suas necessidades.
                    Comece sua jornada rumo ao bem-estar hoje mesmo!
                    <Link to='/calorias'className="button-calcular">Calculadora de calorias</Link>
                    </p>
                </div>
            </article>
        </div>
    )
}