export  const initialState={
   basket:[]
}

export const actionTypes={

   ADD_TO_BASKET:'ADD_TO_BASKET'

}

//escucha si en algún punto "de la manguera de datos" se han inyectado datos

 const reducer=(state,action)=>{
  
      
    switch(action.type){

        case "ADD_TO_BASKET":
          
            return {
                ...state,
                basket:[...state.basket,action.item]
            }

       

            default: return state 
    }
  

}

export default reducer;