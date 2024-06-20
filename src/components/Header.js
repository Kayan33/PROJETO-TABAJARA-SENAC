import React from 'react'
import logo from '../assets/Vector.svg'
import "../styles/header.css"

export default function Header() {
    return (
        <div className="cabecalho">
            <header>
                <a href=""><img src={logo} alt='Logo da página'/></a>
                <nav>
                    <a href="#">IMC</a>
                    <a href="#">Calculadora</a>
                    <a href="#">LOGIN</a>
                </nav>
            </header>
        </div>
    )
}