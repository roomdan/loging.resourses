import { Alert, Button, List, ListItem, ListItemText, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import "./profile.scss"
import FloatingActionButtons from "./onPlay";
import LogoutIcon from '@mui/icons-material/Logout';
import { GoogleSignOff } from "../../REDUX/action/action.Google";

export default function ProfileInfo (){
    const {google_Auth} = useSelector(e=>e);
    const dispatch = useDispatch()

    const signOffByGoogle = ()=>{
        dispatch(GoogleSignOff())
    }
    return (
        google_Auth.operationType?
        <div className='w-screen h-creen flex'>
            <div className='md:w-1/4 w-1/3 p-2 pt-3 h-screen bg-darkHead continer-profiel'>
                <div className='profile-data mt-5'>
                    <span>
                        <img alt={google_Auth.additionalUserInfo.profile.given_name} src={google_Auth.additionalUserInfo.profile.picture}></img>
                    </span>
                    <h3 className='text-center md:text-xs mb-1'>{google_Auth.additionalUserInfo.profile.given_name
                        + " " + google_Auth.additionalUserInfo.profile.family_name }</h3>
                </div>
                <div className='mail-info'>
                    <List component="nav" aria-label="mailbox folders" >
                        <ListItem  className='bg-red md:flex flex-col items-center' button>
                            <VerifiedUserIcon className='mb-3'/>
                            <ListItemText className='w-full text-center' primary="Email Verified"/>
                            <Button className='w-full'  variant='outlined'>Verified</Button>
                            <Stack className='w-full mt-4' spacing={2}>
                                <Alert severity="success">Google Acount</Alert>
                            </Stack>
                        </ListItem>
                    </List>
                </div>
            </div>
            <div className='md:w-3/4 w-full bg-transparent h-screen flex justify-center items-center p-5'>
                <FloatingActionButtons name={google_Auth.additionalUserInfo.profile.given_name}></FloatingActionButtons>
            </div>
            <div className=''></div>
            <div className='m-2 log-out'>
                <Button variant='contained' onClick={signOffByGoogle}>
                    <LogoutIcon sx={{color:'white', width:'2rem', height:'2rem'}}/>
                </Button>
            </div>
        </div>:<Redirect to='/'/>
    )
    
}