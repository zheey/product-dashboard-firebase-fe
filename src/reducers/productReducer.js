import { ProductsConstants } from "../constants";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ProductsConstants.GET_PRODUCTS: {
      const { products } = payload;
      return {
        ...state,
        isLoaded: false,
        products
      };
    }
    default: {
      return state;
    }
  }
};
