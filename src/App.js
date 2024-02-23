
import './App.css';

import Product from './components/Product'; 
import NavBar from './components/NavBar';
import Products from './components/Products';
import Checkoutpage from './components/Checkoutpage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import Checkout from './components/CheckoutForm/CheckOut'

function App() {

  const [{user},dispatch]=useStateValue()

  useEffect(()=>{
  


       auth.onAuthStateChanged((authUser)=>{
   
      if(authUser){
        dispatch({
          type:actionTypes.SET_USER,
          user:authUser
        })
       
      }
  
    })},[])



  return (
    <div className="App" >

     <NavBar/>
    
     <Routes>
     <Route path='/checkout' element={<Checkout/>}/>
     <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
        <Route path="/checkout-page" exact element={<Checkoutpage/>} />
        <Route path="/" exact element={<Products />} />
     </Routes>

   


   
    </div>
  );
}

export default App;
