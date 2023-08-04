import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import SingleProduct from './Pages/SingleProduct'
import NotFound from './Pages/NotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Routes>
      <Header/>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='singleProduct/:id' element={<SingleProduct/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Footer/>
    </Routes>
  );
}

export default App;
