
import './App.css';

import Product from './components/Product'; 
import NavBar from './components/NavBar';
import Products from './components/Products';
import Checkoutpage from './components/Checkoutpage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" >

     <NavBar/>
    
     <Routes>
        <Route path="/checkout-page" exact element={<Checkoutpage/>} />
        <Route path="/" exact element={<Products />} />
     </Routes>

   


   
    </div>
  );
}

export default App;
