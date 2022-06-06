import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  return (
    <section id="contact">
                

    <div id="lets-chat">
        <h2>Let's have a chat</h2>
        <p>We would love to hear about your business and hopefully we can help you develop tools to improve your business further.</p>
    </div>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="fullWidth" label="Name" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="Number" variant="outlined"fullWidth />
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          fullWidth
        />
         <Button variant="contained" endIcon={<SendIcon />} sx={{backgroundColor:'#288'}}>
        Send
      </Button>


    </Box>

    
</section>
  )
}
