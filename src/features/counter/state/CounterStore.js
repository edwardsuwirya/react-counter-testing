import counterReducer from "./CounterReducer";
import { createStore } from 'redux'

export const store = createStore(counterReducer)
