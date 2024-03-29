export  const initialState={
   basket:[],
   user:null
}

export const actionTypes={

   ADD_TO_BASKET:'ADD_TO_BASKET',
   REMOVE_TO_ITEM:'REMOVE_TO_ITEM',
   SET_USER:'SET_USER',
   EMPTY_BASKET:'EMPTY_BASKET'

}


export const getBasketTotal=(basket)=>{

return  basket?.reduce((amount,item)=>item.price+amount ,0)
  
}




//escucha si en algún punto "de la manguera de datos" se han inyectado datos

 const reducer=(state,action)=>{

 
    switch(action.type){

        case "ADD_TO_BASKET":
          
            return {
                ...state,
                basket:[...state.basket,action.item]
            }

         case "REMOVE_TO_ITEM":
            const index=state.basket.findIndex(basketItem=>basketItem.id===action.id)
            const newBasket=[...state.basket]

            if(index>=0){

                newBasket.splice(index,1)
            }
           
            else{
                console.log('Cant remove product',index)
            }

       return(

            {
            ...state,
            basket:newBasket
            }
       )

       case actionTypes.SET_USER:
    
       return(
        {
            ...state,
            user:action.user
        }

       )
    
       case actionTypes.EMPTY_BASKET:
        return({
            ...state,
            basket:action.basket
        }
        )
            default: return state 
    }
  
   
}

export default reducer;