import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuantity } from '../../redux/reducers/burgerReducer';

const Order = () => {
  const { burger, menu, totalPrice } = useSelector(state => state.burgerReducer)
  const dispatch = useDispatch();
  const renderMenu = () => {
    return Object.entries(menu).map(([items, value], index) => {
      return (
        <tr key={index}>
          <td>{items}</td>
          <td>
            <button className='btn btn-sm btn-dark mx-1' disabled={burger[items].limit1} onClick={() => { tangGiamSoLuongAction(items, 1) }}><i className="fa fa-plus"></i></button>
            <span className='mx-2' style={{ maxWidth: '20px' }}>{burger[items].quantity}</span>
            <button className='btn btn-sm btn-dark mx-1' disabled={burger[items].limit2} onClick={() => { tangGiamSoLuongAction(items, -1) }}><i className="fa fa-minus"></i></button>
          </td>
          <td>{value}</td>
          <td>{value * burger[items].quantity}</td>
        </tr>
      )
    })
  }
  const tangGiamSoLuongAction = (items, value) => {
    const action = getQuantity(items, value);
    dispatch(action);
  }

  return (
    <div className='container' style={{ width: '100%' }}>
      <h1 className='text-success text-center'>ORDER TABLE</h1>
      <table className='table'>
        <thead className='bg-dark text-white'>
          <tr>
            <th>Thức ăn</th>
            <th>Tăng/Giảm</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {renderMenu()}
        </tbody>
        <tfoot>
          <tr className='fw-bold'>
            <td colSpan='2'></td>
            <td>Tổng cộng:</td>
            <td>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Order
