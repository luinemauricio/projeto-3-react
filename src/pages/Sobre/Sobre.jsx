import Header from "../../componentes/Header/Header"
import image from "../../assets/undraw_posting_photo_re_plk8.svg"

import '../Sobre/sobre.css'


function Sobre() {
    return(
        <>
        <Header image={image} description="ilustracao" >Sobre mim</Header>
       
        <div className="container-sobre-mim">
        <img src="https://github.com/luinemauricio/MEU-DIARIO-PORTFOLIO-REPROGRAMA/blob/main/src/images/imagem%201_luine.jpg?raw=true" />

        <span className="container-sobre-mim-texto">
          <h1>Hello Word, sou Luine!</h1>

          <div className="texto-sobre-mim">
          <p>
          Uma mulher preta, formada em Administração com ênfase em Comércio Exterior e alguns anos de carreira, que se apaixonou pela área de programação
            e esta iniciando uma jornada desafiadora e apaixonante pelo mundo Dev!
          </p>
          </div>
          
        </span>
      </div>

        </>
        )
    
}
export default Sobre