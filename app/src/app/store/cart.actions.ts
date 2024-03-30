import { Action } from "@ngrx/store";
import { Product } from "../domain/product";

export enum CartActionTypes {
  ADD_CART = 'ADD_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

export class AddCart implements Action {
  readonly type = CartActionTypes.ADD_CART;
  constructor(public payload: Product) { }
}

export class RemoveFromCart implements Action {
  readonly type = CartActionTypes.REMOVE_FROM_CART;
  constructor(public payload: Product) { }
}

export type CartActions = AddCart | RemoveFromCart;
