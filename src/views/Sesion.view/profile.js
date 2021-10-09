import { Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
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
        google_Auth.operationType?<div className='w-screen h-creen flex'>
            <div className='md:w-1/4 w-1/2 h-screen bg-darkHead continer-profiel'>
                <div className='profile-data'>
                    <span>
                        <img alt={google_Auth.additionalUserInfo.profile.given_name} src={google_Auth.additionalUserInfo.profile.picture}></img>
                    </span>
                    <h3>{google_Auth.additionalUserInfo.profile.given_name
                        + " " + google_Auth.additionalUserInfo.profile.family_name }</h3>
                </div>
                <div className='mail-info'>

                    <List component="nav" aria-label="mailbox folders" >
                        <ListItem className='bg-red' button>
                            <ListItemAvatar> 
                                <AccessAlarmIcon/>
                            </ListItemAvatar>
                            <ListItemText primary="Email Verified"/>
                            <Button variant='outlined'>Verified</Button>
                        </ListItem>
                    </List>
                </div>
            </div>
            <div className='md:w-3/4 w-full bg-transparent h-screen flex justify-center items-center p-5'>
                <FloatingActionButtons name={google_Auth.additionalUserInfo.profile.given_name}></FloatingActionButtons>
            </div>
            <div className='m-2'>
                <Button variant='contained' onClick={signOffByGoogle}>
                    <LogoutIcon sx={{color:'white', width:'2rem', height:'2rem'}}/>
                </Button>
            </div>
        </div>:<Redirect to='/'/>
    )
    
}