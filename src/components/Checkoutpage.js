
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import products from '../product-data';
// import Product from './Product';
import { Typography } from '@mui/material';
import './Checkoutpage.css'
// import { red } from '@mui/material/colors';
import Chekoutcard from './Chekoutcard';
import Total from './Total';
import { useStateValue } from '../StateProvider';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin:"50px",
  width:"400px",
  height:"400px",

}));

export default function Checkoutpage() {

const[{basket},dispatch]=useStateValue()


function FormRow(){

    return(
     
        <React.Fragment>
                
                {
                    basket?.map(item=>(
                
                        <Grid item xs={12} sm={8} md={4} container spacing={2} >
                       
                        <Chekoutcard key={item.id} product={item} />
                      
                      </Grid>
                    
                    ))

                }
           
        </React.Fragment>
     

    )


}



  return (
    <Box sx={{ flexGrow: 1 }}>
   
      <Grid container spacing={3} >

        <Grid item xs={12} className='marginTop' >
          <Typography align='center' gutterBottom variant='h4' className='marginTop'>
            Shopping Card
          </Typography>
        </Grid>
        
        <Grid item xs={12} sm={8} md={9} container spacing={2}  >
     
        <FormRow/>
      
        </Grid>
      



        <Grid item xs={6} sm={4} md={3}>
        <Typography align='center' gutterBottom variant='h4'>
            <Total/>
          </Typography>
        </Grid>
       
      </Grid>
    </Box>
  );
}
