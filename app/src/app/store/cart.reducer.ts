import { Product } from "../domain/product";
import { CartActionTypes, CartActions } from "./cart.actions";

export interface ProductListState {
  products: Product[];
}
export const initialState: Product[] = [];

export function reducer(state = initialState, action: CartActions): Product[] {
  switch (action.type) {
    case CartActionTypes.ADD_CART:
      return state.concat([action.payload]);
    case CartActionTypes.REMOVE_FROM_CART:
      return state.filter(p => p != action.payload);
  }
}
