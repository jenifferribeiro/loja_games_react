
import { Link } from "react-router-dom";


function Navbar() {



  return (
      <>
       <div className='w-full bg-violet-500 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <div className='text-2xl font-bold uppercase'>Loja de Games</div>

          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Produtos</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
            <Link to='' className='hover:underline'>Sair</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar