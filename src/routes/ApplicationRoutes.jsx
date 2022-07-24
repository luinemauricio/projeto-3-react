import { BrowserRouter,Routes,Route } from 'react-router-dom'
import '../App'
import Sobre from '../pages/Sobre/Sobre'
import Portifolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../componentes/Menu/Menu'
import Diario from '../pages/Diario/Diario'


function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Sobre/>} />
            <Route path="portfolio" element={<Portifolio/>} />
            <Route path="comentarios" element={<Comentarios/>} />
            <Route path="Diario" element={<Diario/>} />
        </Routes>
        </BrowserRouter>
    )

}
export default ApplicationRoutes