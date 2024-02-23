import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import { useTheme } from '@mui/material/styles';
import './Product.css'
import {useStateValue} from '../StateProvider'
import { actionTypes } from '../reducer';


//_______________________________________________

const ThemeComponent = () => { const theme = useTheme();

  return ( <div style={{ 
    root:{
        maxWidth:345
      },
      action:{
        marginTop:"rem"
      },
      media:{
        height:0,
        paddingTop:"56.25%"
      },
      expand:{
        transform:"rotate(0deg)",
        marginLeft:"auto",
        transition:theme.transitions.create("transform",{
          duration:theme.transitions.duration.shortest,
        }),
      },
      expandOPen:{
        transform:"rotate(180deg)"
      },
    
    }}>
   
      <ExpandMoreIcon />
       </div> 
       );
      }




export default function Product({product:{id,rating,name,productType,url,description,price}}) {
  


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [{basket},dispatch]=useStateValue()
  


  const addToBasket=()=>{

    dispatch({
      type:actionTypes.ADD_TO_BASKET,
      item:{
        id,
        name,
        price,
        description,
        url,
        productType

      }}

    )

  }

  return (
 
    <Card sx={{ maxWidth: 345}} className='card'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
            <Typography className={ClassNames.action}
                variant='h5'
                color='textSecondary'>
                    {accounting.formatMoney(`${price}`,"€")}
            </Typography>
        }
        title={name}
        subheader="in stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={url}
        alt="nike shoes"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart" onClick={addToBasket}>
          <AddShoppingCartIcon/>
        </IconButton>
      
       {Array(rating)
       .fill()
       .map((_,i)=>(
        <p>&#11088;</p>
       ))
       
       }

        <IconButton onClick={handleExpandClick}>
        <ExpandMoreIcon  />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
   
  );
}
