import React from 'react'
import { useSelector } from 'react-redux'
import Order from './Order'
import './Burger.css'
const Burger = () => {
  const { burger } = useSelector(state => state.burgerReducer)

  const renderTopping = () => {
    return Object.entries(burger).map(([topping, {quantity,limit}], index) => {
      let arrTopping = [];
      for (let i = 0; i < quantity; i++) {
        arrTopping.push(<div key={index} className={topping}></div>)
      }
      return arrTopping
    })

  }
  return (
    <div className='container py-5 my-5'>
      <div className='row'>
        <div className='col-6'>
          <h1 className='text-success text-center text-uppercase'>Your burger</h1>
          <div className='yourBurger'>
            <div className='breadTop'></div>
            {renderTopping()}
            <div className='breadBottom'></div>
          </div>
        </div>
        <div className='col-6'>
          <Order />
        </div>
      </div>
    </div>
  )
}

export default Burger
