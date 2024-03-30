import { ActionReducerMap } from "@ngrx/store";
import { Product } from "../domain/product";
import { reducer } from "./cart.reducer";

export interface AppState {
  products: Product[];
}

export const appReducers: ActionReducerMap<AppState, any> = {
  products: reducer
}
