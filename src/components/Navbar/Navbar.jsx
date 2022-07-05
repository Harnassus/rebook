import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import "./Navbar.css";


const navItems = [ 'Register', 'Login' ];


const Navbar = (props) => {

  return (
    <div className='nav-container'>
      <div className='nav'>
        <Typography
          sx={{
            marginLeft: "0.7rem",
            "&.logo": {
              fontFamily: "'Merienda', cursive"
            }
          }}
          variant='h5'>
          ReBook
        </Typography>
        <Stack
          sx={{
            marginRight: '1em',
            display: 'flex',
            gap: '20px',
            flexDirection: 'row'
        }}
        >
          {
            navItems.map(item => (
              <Button variant='contained' sx={{backgroundColor: 'white', color: 'black', textTransform: 'none'}}>
                {item}
              </Button>
            ))
          }</Stack>
      </div>
    </div>
  );
}

export default Navbar