import { Attractions, CarRental, Flight, Hotel, LocalTaxi } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <Box elevation={5}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                backgroundColor: 'black'
                
        }}
        >
            <List
                sx={{
                    display: 'flex',
                    width: '100%',
                    maxWidth:'1030px'
            }}
            >
                <ListItem >
                    <ListItemButton>
                        <ListItemIcon>
                            <Hotel sx={{color: 'white'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Stays" sx={{
                            display:{xs: 'none', md:'block'}
                        }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton>
                        <ListItemIcon>
                            <Flight sx={{color: 'white'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Flights" sx={{
                            display:{xs: 'none', md:'block'}
                        }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton>
                        <ListItemIcon>
                            <CarRental sx={{color: 'white'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Car Rental" sx={{
                            display:{xs: 'none', md:'block'}
                        }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton>
                        <ListItemIcon>
                            <Attractions sx={{color: 'white'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Attractions" sx={{
                            display:{xs: 'none', md:'block'}
                        }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton>
                        <ListItemIcon>
                            <LocalTaxi sx={{color: 'white'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Airport taxis" sx={{
                            display:{xs: 'none', md:'block'}
                        }}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Header