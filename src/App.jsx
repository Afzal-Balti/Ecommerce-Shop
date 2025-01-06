import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from '../src/Components/Navbar'
import Footer from '../src/Components/Footer'
import Home from './Pages/Home'
import Shop from './Components/Shop'
import Carts from './Components/Carts'

function App() {


  return (
    <>
      {/* <h1 className='heading text-2xl font-bold text-center text-slate-400'>The Ecommerce Website </h1> */}
         <BrowserRouter>
             <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/shop' element={<Shop/>}></Route>
              {<Route path='/cart' element={<Carts/>}></Route> }
              {/* <Route path='/about' element={<About/>}></Route> */}
            </Routes>
            <Footer/>
         </BrowserRouter>
    </>
  )
}

export default App
