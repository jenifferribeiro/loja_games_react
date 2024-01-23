import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import Footer from "./components/footer/Footer"
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App