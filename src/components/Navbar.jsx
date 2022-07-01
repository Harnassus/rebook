import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack, styled } from '@mui/material';


const navItems = [ 'Register', 'Login' ];
const StyledButton = styled(Button)(({
  marginLeft: "1.25rem"
}))


const Navbar = (props) => {

  return (
    <AppBar position='sticky' elevation={0}
    sx={{display: 'flex', justifyContent}}
    >
      <Toolbar
        sx={{
          width: '100%',
          maxWidth: '1024px',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          className='logo'
          sx={{
            marginLeft: '3em',
            "&.logo": {
              fontFamily: "'Merienda', cursive"
            }
          }}
          variant='h4'
        >
          ReBook
        </Typography>
        <Stack
          sx={{
          marginRight: '2em'
        }}
        >
          {
            navItems.map(item => (
              <StyledButton>
                {item}
              </StyledButton>
            ))
          }</Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar