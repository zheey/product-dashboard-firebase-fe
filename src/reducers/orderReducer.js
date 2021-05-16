import { OrdersConstants } from "../constants";

export const orderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case OrdersConstants.GET_PRODUCTS: {
      const { orders } = payload;
      return {
        ...state,
        isLoaded: false,
        orders
      };
    }
    default: {
      return state;
    }
  }
};
