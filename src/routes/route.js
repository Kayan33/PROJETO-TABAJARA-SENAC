import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Imc from '../pages/Imc'
import ImcCalorias from '../pages/Imc-calorias'
import Login from '../pages/Login'

function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/calorias' element={<ImcCalorias />} />
                <Route path='/imc' element={<Imc />} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas