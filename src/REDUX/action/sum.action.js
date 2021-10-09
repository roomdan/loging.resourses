import { types } from "../types/types";

const {sum, rest } = types

export const sumAndrest = ()=>({
    sum:{
        type:sum,
        payload:+1
    },
    rest:{
        type:rest,
        payload:-1
    }
})

export const onRegister = payload=>({
    type:types.register,
    payload
})

