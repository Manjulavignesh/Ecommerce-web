export const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add to Cart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "Remove From Cart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "Change Quantity":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = action.payload.quantity)
            : c.quantity
        ),
      };
      case "Delete From Cart":
        return {
            ...state,cart:[]
        }
    default:
      return state;
  }
};
