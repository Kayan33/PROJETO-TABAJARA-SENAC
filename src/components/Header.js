import logo from '../assets/Vector.svg'
import "../styles/header.css"

export default function Header() {
    return (
        <div className="cabecalho">
            <header>
                <img src={logo} alt='Logo da página'/>
            </header>
        </div>
    )
}