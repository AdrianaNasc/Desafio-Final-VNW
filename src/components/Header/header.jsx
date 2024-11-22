import logo from "../../assets/img/logo.png"
import lupa from "../../assets/img/lupa.png"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/Inicio"
import Doados from "../../Pages/Doados/Doados"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar"
import S from './header.module.scss'

export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={logo} alt="Imagem de um Livro"/>
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.boxMenu}>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/doados">Livros Doados</Link></li>
                <li><Link to="/querodoar">Quero doar</Link></li>
            </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder="O que você procura?"/>
                <img src={lupa} alt="imagem de uma lupa para pesquisa" />
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/doados" element={<Doados/>}/>
            <Route path="/querodoar" element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}