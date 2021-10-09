import {types} from "../types/types"

export const registerForm = (state = Object(), action )=>{
    switch(action.type) {
        case types.register:
            return action.payload
        default:
            return state
    }
}