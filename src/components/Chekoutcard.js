import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
// import { Rating } from '@mui/material';
import accounting from 'accounting';
import { useTheme } from '@mui/material/styles';
import './Product.css'
import './Chekoutcard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
//_____________________________________________________________
// const usesStyles=makeStyles((theme)=>({

// root:{
//   maxWidth:345
// },
// action:{
//   marginTop:"1rem"
// },
// media:{
//   height:0,
//   paddingTop:"56.25%"
// },
// expand:{
//   transform:"rotate(0deg)",
//   marginLeft:"auto",
//   transition:theme.transition.create("transform",{
//     duration:theme.transition.duration.shortest,
//   }),
// },
// expandOPen:{
//   transform:"rotate(180deg)"
// },
// }));
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
      }   
    }}>
   
      <ExpandMoreIcon />
       </div> 
       );
      }




export default function Checkoutcard({product:{id,rating,name,productType,url,description,price}}) {
 
  const [expanded, setExpanded] = React.useState(false);
  const[{basket}, dispatch]=useStateValue()


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


const removeItem=()=>{

  dispatch({

      type:actionTypes.REMOVE_TO_ITEM,
      id


  }

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
    
      <CardActions disableSpacing className='cardAction'>
       
      <div className='cardRating'>
       {Array(rating)
       .fill()
       .map((_,i)=>(
        <p>&#11088;</p>
       ))
       
       }
    </div>
       <IconButton onClick={removeItem}>
     <DeleteIcon fontSize='large'/>
     </IconButton>
     
      </CardActions>
   
    </Card>
   
  );
}
