import React from 'react';
import homem from '../assets/homem.png'
import { Link } from 'react-router-dom';
import '../styles/home-article-1.css'

export default function Home_Article1() {
    return (
        <div>
        <main className='principal'>
            <article className='artigo'>
                <div className='titleh2'>
                 <h2>Calcule, aprimore, transforme, brilhe!</h2>   
                </div>
                <div>
                <p className='text1'>Bem-vindo ao IMC Fit & Healthy!
                Calcule seu IMC,
                obtenha planos de dieta personalizados
                e exercícios adequados para uma vida
                saudável. Acompanhe sua jornada
                rumo ao bem-estar conosco!</p>
                <Link to='/imc' className='button1'>Calcule IMC</Link>
                </div>
            </article>
            <div className='img1'>
                <img src={homem} alt="Foto-de-um-homem-que-treina" />
            </div>
        </main>
        </div>
    )
}