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
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Components/styled/GlobalStyled';

function App() {
  const theme = {
    color:{
      color1:"#FF8551",
      color2:"#E55807",
      highlighter:"#F08080",
      bg:"#f3f3",
      contentColor: "#454545"
    },
    mobile:"768px"
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/singleProduct' element={<SingleProduct/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </ThemeProvider>
    
  );
}

export default App;
