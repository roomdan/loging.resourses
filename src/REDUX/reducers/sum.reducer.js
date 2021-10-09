import {types} from "../types/types"

const initialState = {
    num:0,
    length:null,
    title:'This is my new Number'
}

export const sum = (state = initialState, action)=>{
    switch(action.type) {
        case types.sum:
            return {...state, num: state.num + action.payload}
        case types.rest:
            return {...state, num:state.num - action.payload}
        default:
             return state
    }
}