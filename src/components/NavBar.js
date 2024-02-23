
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png'
import  './NavBar.css'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import SignIn from './SignIn';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import { useNavigate } from 'react-router-dom'; 





export default function NavBar() {



const [{basket,user},dispatch]=useStateValue()
const navigator=useNavigate()

const handleOut =()=>{

  if(user){

  auth.signOut()

  dispatch({
    type:actionTypes.EMPTY_BASKET,
    basket:[],
    
  })

  dispatch({
    type:actionTypes.SET_USER,
    user:null,
    
  })

  navigator('/')
}


}
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" >
        
        <Toolbar className="appBar"  >
        
        <Link to='/'>
          <IconButton
          
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         <img src={logo} alt='logo' className="logo image" />
         
          </IconButton>
          </Link >

         <div className='grow'/>
          <Typography variant="h6" color="textPrimary" component="p">
            Hello {user?user.email : "Guess"}
          </Typography>
          
  
       <div className='button'>
        <Link to="/Signin">
        <Button variant='outlined' onClick={handleOut}>  
        <strong>{user ? "sing Out":"sign in"}</strong>
        </Button>
        </Link>
         </div>
      
      <Link to="/checkout-page">
        <IconButton aria-label='show cart items' color='inherit'>
          <Badge badgeContent={basket.length}color='secondary'>
          <AddShoppingCart fontSize='large' color='primary'/>
          </Badge>
        
         </IconButton>
         </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
