import { IconButton, Paper, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoSearchCircleSharp } from 'react-icons/io5'

const GeneralSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300,
        border: "1px solid #ccc",
        borderRadius: 20,
      }}
    >
        <Typography sx={{fontWeight: "600", ml: 2}}>Start your search here</Typography>
        <IoSearchCircleSharp color={pink[500]} size={41} />
        {/* <InputBase sx={{ml: 1, flex:1,}} placeholder="Where to?" />
        <IconButton sx={{p: "10px"}} type='submit'><VscSettings /></IconButton> */}
    </Paper>
  )
}

export default GeneralSearch