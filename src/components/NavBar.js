
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png'
import  './NavBar.css'
// import styled from '@emotion/styled';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider';





export default function NavBar() {

  // const AppBar=styled("AppBar")({

  //   root:{
  //     flexGrow:1,
  //     marginBottom:"7rem"
  //   },
  //   appBar:{
  //     backgroundColor:"whitesmoke",
  //     boxShadow:"none"
      
  //   },
    
  //   grow:{
  //     flexGrow:1
  //   },
  //   button:{
  //     marginLeft:"20px"
  //   },
  //   image:{
  //     marginRight:"10px",
   
  //   }
  //   })

const [{basket},dispatch]=useStateValue()

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
            Hello Guest
          </Typography>
          
  
       <div className='button'>
        <Button variant='outlined' >  
        <strong>Sign in</strong>
        </Button>
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
