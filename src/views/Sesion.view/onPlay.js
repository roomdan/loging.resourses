import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function FloatingActionButtons({name}) {
  return (
      <div className='box-not-hav'>
          <StorefrontIcon sx={{width:'5rem', height:'5rem'}}/>
      <h1> Hello {name}, it seems that you do not have any pending tasks. Add products.</h1>
    <Box sx={{ '& > :not(style)': { m:1}}}>
      <Fab color="primary" aria-label="add" onClick={()=>{console.log('re');}} >
        <AddIcon />
      </Fab>
    </Box>
    </div>
  );
}