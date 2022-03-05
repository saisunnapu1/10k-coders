// import { createStore } from "redux";
import { CalculatorReducer } from "./reducer";
// import {composewithdevtools} from 'redux-devtools-extension';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(CalculatorReducer, composeWithDevTools(
  
  // other store enhancers if any
));
