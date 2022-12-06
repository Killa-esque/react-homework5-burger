import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  burger: {
    salad: {
      quantity: 1,
      limit1: false,
      limit2: false
    },
    cheese: {
      quantity: 1,
      limit1: false,
      limit2: false
    },
    beef: {
      quantity: 1,
      limit1: false,
      limit2: false
    },
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55
  },
  totalPrice: 85,
}

const burgerReducer = createSlice({
  name: 'burgerReducer',
  initialState,
  reducers: {
    tangGiamSoLuongAction: (state, action) => {
      let [items, value] = action.payload;
      if (state.burger[items].quantity < 1 && value === -1) {
        state.burger[items].limit2 = true;
      }
      else {
        state.burger[items].limit2 = false;
        state.burger[items].quantity += value
      }
      state.totalPrice += value * state.menu[items]
    },

  }
});

export const { tangGiamSoLuongAction, updateTotalPriceAction } = burgerReducer.actions

export default burgerReducer.reducer

export const getQuantity = (items, value) => {
  return async (dispatch) => {
    let objTemp = [items, value]
    const action = tangGiamSoLuongAction(objTemp);
    dispatch(action)
  }
}

export const getTotalPrice = () => {
  return async (dispatch) => {
    const action = updateTotalPriceAction();
    dispatch(action)
  }
}
