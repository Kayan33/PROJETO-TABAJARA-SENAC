import React from 'react';
import homem from '../assets/homem.png'
import { Link } from 'react-router-dom';

export default function Home_Article1() {
    return (
        <div>
        <main>
            <article>
                <h2>Calcule, aprimore, transforme, brilhe!</h2>
                <p>Bem-vindo ao IMC Fit & Healthy!
                Calcule seu IMC,
                obtenha planos de dieta personalizados
                e exercícios adequados para uma vida
                saudável. Acompanhe sua jornada
                rumo ao bem-estar conosco!</p>
                <img src={homem} alt="Foto-de-um-homem-que-treina" />
                <Link to='/imc'>Calcule IMC</Link>
            </article>
        </main>
        </div>
    )
}