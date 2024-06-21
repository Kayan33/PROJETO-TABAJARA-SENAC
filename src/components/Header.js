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
                    <Link to='/imc'  className='button01'>IMC</Link>
                    <Link to='/calorias' className='button02'>Calculadora</Link>
                    <Link to='/login' className='button03'>LOGIN</Link>
                </nav>
            </header>
        </div>
    )
}