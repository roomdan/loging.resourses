import {applyMiddleware, combineReducers, createStore, compose} from "redux"
import thunk from "redux-thunk"
import { sum } from "../reducers/sum.reducer"
import { registerForm } from '../reducers/register'
import { google_Auth } from "../reducers/gogle.auth"


//se debe importar composeEnhancers para manear un middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const allReducers = combineReducers({sum,registerForm, google_Auth})

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))