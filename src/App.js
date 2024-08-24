import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Shopcatagory from './Pages/Shopcatagory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar />  
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcatagory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcatagory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcatagory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        
        <Route path='/Login' element={<Loginsignup/>}/>
        </Routes> 
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
