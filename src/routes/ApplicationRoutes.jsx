import { BrowserRouter,Routes,Route } from 'react-router-dom'
import '../App'
import Sobre from '../pages/Sobre/Sobre'
import Portifolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../componentes/Menu/Menu'
import Diario from '../pages/Diario/Diario'
import Footer from '../componentes/Footer/Footer'



function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Sobre/>} />
            <Route path="portfolio" element={<Portifolio/>} />
            <Route path="comentarios" element={<Comentarios/>} />
            <Route path="Diario" element={<Diario/>} />
            <Route path="footer" element={<Footer/>} />
        </Routes>
        <Footer/>

        </BrowserRouter>
    )

}
export default ApplicationRoutes