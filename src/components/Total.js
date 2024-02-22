 import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'
import './Total.css'
import {useStateValue} from '../StateProvider'
import { getBasketTotal } from '../reducer'

const Total = () => {

const [{basket},dispatch]=useStateValue()


return (
    <div className='root'>
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket),"€")}</h5>
    <Button className='button' variant='contained' color='secondary'  >Check out</Button>
    </div>
  )
}

export default Total
