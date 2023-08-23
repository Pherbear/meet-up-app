'use client';
import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function HandleClick({event, value}) {

}

export default function BottomNavbar({ value }) {
  return (
    <Box className = 'bottomNav' >
      <BottomNavigation 
        showLabels
        value = {value}
        onChange ={(event, value) =>  {
          HandleClick(event, value);
        }}
      >
        <BottomNavigationAction label = "home"/> 
      </BottomNavigation>
    </Box>
  )
}
