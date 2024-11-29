import S from './doados.module.scss'
import capaum from '../../assets/img/capa-1.png'


export default function Doados(){
    return(
        <section className={S.container}>
            <div>
            <h2>Livros Doados</h2>
            </div>
            <section className={S.boxDoados}>
                <article>
                    <img src={capaum} alt="Capa do livro O protagonista nas cores vermelho e branco" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p> 
                </article>
            </section>
        </section>
    )
}