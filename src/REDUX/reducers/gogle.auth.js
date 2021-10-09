import { types } from "../types/types"
const userIstanse = {
    operationType:false
}
export const google_Auth = (state = userIstanse , action)=>{
    switch (action.type) {
        case types.googleAuth:
            return action.payload
        default:
            return state
    }
}