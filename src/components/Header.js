import React from 'react'
import logo from '../assets/Vector.svg'
import "../styles/header.css"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="cabecalho">
            <header>
                <a href=""><img src={logo} alt='Logo da página'/></a>
                <nav>
                    <Link to='/imc'>IMC</Link>
                    <Link to='/calorias'>Calculadora</Link>
                    <Link to='/login'>LOGIN</Link>
                </nav>
            </header>
        </div>
    )
}