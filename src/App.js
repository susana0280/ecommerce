
import './App.css';

import Product from './components/Product'; 
import NavBar from './components/NavBar';
import Products from './components/Products';
import Checkoutpage from './components/Checkoutpage'


function App() {
  return (
    <div className="App">
     <NavBar/>
    {/* <Checkoutpage/> */}
     <Products/> 
     {/* <Product/> */}
   
    </div>
  );
}

export default App;
