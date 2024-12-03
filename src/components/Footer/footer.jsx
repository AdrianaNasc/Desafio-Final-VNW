
import facebook from '../../assets/img/facebook-app.png'
import instagram from '../../assets/img/instagram-app.png'
import twitter from '../../assets/img/xsocial.png'
import linkedin from '../../assets/img/linkedin-app.png'
import youtube from '../../assets/img/youtube-app.png'
import S from './footer.module.scss'

export default function footer(){
    return(
        <footer>
            <section className={S.boxInfo}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""><img src={facebook} alt="Logo da rede social Facebook" /></a>
                    <a href=""><img src={youtube} alt="Logo da rede social Youtube" /></a>
                    <a href=""><img src={twitter} alt="Logo da rede social antigo Twitter" /></a>
                    <a href=""><img src={linkedin} alt="Logo da rede social LinkedIn" /></a>
                    <a href=""><img src={instagram} alt="Logo da rede social Instagram" /></a>
                </nav>
            </section>
            <section className={S.boxTexto}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}