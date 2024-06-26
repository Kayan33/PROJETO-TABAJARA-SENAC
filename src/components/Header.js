import React from 'react'
import logo from '../assets/Vector.svg'
import "../styles/header.css"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="cabecalho">
            <header>
                <Link to='/' className='img-logo'><img src={logo} alt='Logo da página'/></Link>
                <nav>
                    <Link to='/imc'  className='button01'>IMC</Link>
                    <Link to='/calorias' className='button02'>Calcular Calorias</Link>
                </nav>
            </header>
        </div>
    )
}