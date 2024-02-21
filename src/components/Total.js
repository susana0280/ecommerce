 import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'
import './Total.css'

const Total = () => {
  return (
    <div className='root'>
      <h5>Total items: 3</h5>
      <h5>{accounting.formatMoney(50,"€")}</h5>
    <Button className='button' variant='contained' color='secondary'  >Check out</Button>
    </div>
  )
}

export default Total
