import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import { onRegister } from "../REDUX/action/sum.action";
import { useEffect, useState } from "react";
import "./singUp.scss"
import { GoogleAuthPopup } from "../REDUX/action/action.Google";
import { Button, Checkbox } from "@mui/material";
import { useHistory } from "react-router";

export default function SingUp ({children}) {
    
    const history = useHistory()
    const [state,setState] = useState({userName:'', password:''})
    const [check, setCheck] = useState('password')
    const dispatch = useDispatch();
    const { google_Auth } = useSelector(e=>e)
    const {register, handleSubmit } = useForm()

    const exe=e=>e
    const type = ()=>{
        if(check === 'password'){
            return 'password'
        }
        else {
            return 'text'
        }
    }

    const pass = ()=>{
        if(check === 'password') {
            setCheck('text')
        }
        else {
            setCheck('password')
        }
    }

    const registerSite = ()=>{
        if(state.userName && state.password) {
            dispatch(onRegister(state))
        }
        else {
            console.log('form is not register');
        }
    }

    useEffect(
        ()=>{
            if(google_Auth.operationType) {history.push('/profile')}}
            , [ google_Auth, history]
    )

return (
    <div className='bg-darkff p-5 w-screen h-screen flex justify-center items-center'>
        <div className='md:w-1/2 w-full min-h-1/2 bg-dark rounded'>
            <div className='w-full flex justify-center items-center p-3 bg-darkHead bb-1 rounded text-white text-2xl font-bold'>
                <h1>Sign Up</h1>
            </div>
            <div className='w-full min-h-full flex-col justify-center items-center p-5'>
                <form className='form' onChange={handleSubmit(e=>setState(exe(e)))}>
                    <input type='email' className='res-input m-1 md:w-2/6 rounded' {...register('userName')}/>
                    <input type={type()} className='res-input m-1 md:w-2/6 rounded' {...register('password')}/>
                </form>
                <div className='text-white w-full flex justify-center items-center mb-2 mt-2'>
                        <Checkbox  className='mr-2 ckbx' disableFocusRipple onInputCapture={pass} />
                        Show Password
                </div>
                <div className='w-full flex items-center justify-center'>
                    <Button variant='outlined' onClick={registerSite} className='button-submit md:w-2/6'>Log in</Button>
                </div>
                <div className='w-full flex justify-center items-center mt-5'>
                    <Button onClick={()=>{dispatch(GoogleAuthPopup())}} className='btn-Google-auth'></Button>
                    </div>
            </div>
            {children}
        </div>
    </div>
)


}