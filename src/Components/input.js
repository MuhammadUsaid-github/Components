import React from 'react';
import '../Components/input.css'
import TextField from '@mui/material/TextField';

function Input(props) {
  return (
    <TextField
      {...props}
      variant="outlined"
      fullWidth
      className='input'
    />
  );
}

export default Input;