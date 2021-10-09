import { firebase, GoogleProvider } from "../../FIREBASE/config";
import { types } from "../types/types";

//oara ejecutar con redux thunk, redux thunk sirve para hacer peticiones asincronas. Debe ser un action que retorne una
//funcion 
export const GoogleAuthPopup=()=>{
    return async(dispatch )=>{
        const response = await firebase.auth().signInWithPopup(GoogleProvider)
        dispatch(GoogleIn(response))
}
}

const GoogleIn = payload=>({
    type:types.googleAuth,
    payload
})

export const GoogleSignOff=()=>{
    return (dispatch)=>{
        firebase.auth().signOut().then((e) => {
            console.log('sign of successfu');
            dispatch(GoogleOut({
                operationType:false
        }))
          }).catch((error) => {
            console.log(error);
          });
    }
}

const GoogleOut = payload=>({
    type:types.googleAuth,
    payload
})