import { Paper, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Paper className='emp-header'>
      <Typography variant='h4' sx={{color: "text.secondary"}}>Employee Management System</Typography>
    </Paper>
  )
}

export default Header
