import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const AddUserForm = () => {
  const [password,setPassword] = React.useState("************")
  const genPass = () => {
    // Create a random password
    const randomPassword =
      Math.random().toString(16).slice(2)
  
    // Set the generated password as state
    setPassword(randomPassword);
  };
  return (
    <div className='w-full h-full'>
      {/* Name Input */}
      <div className='flex flex-col space-y-1'>
        <label for='name'>Name</label>
        <input type="text" id="name" className='border border-app-theme-green rounded-md w-full p-1 focus:outline-none' />
      </div>
      <div className='flex flex-col space-y-1'>
        <label for='email'>Email</label>
        <input type="email" id="email"className='border border-app-theme-green rounded-md w-full p-1 focus:outline-none' />
      </div>
      <div className="flex items-center space-x-2 my-4">
        <button type='button' className='my-2 bg-gray-400 text-white rounded-md text-sm uppercase p-2' onClick={genPass}>Auto Generate Password</button>
        <span className='text-gray-400 text-xs'>{password}</span>
        <span className="text-gray-400 text-xs bg-white w-fit p-1 rounded-md border border-gray-100">Keep a copy of this password as you'll need it when sharing with the created user</span>
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="editor" control={<Radio />} label="Editor" />
              <FormControlLabel value="admin" control={<Radio />} label="Admin" />
            </RadioGroup>
        </FormControl>
      </div>
      <button type='button' className='bg-app-theme-green p-2 text-white rounded-md w-full uppercase hover:drop-shadow-lg'>Create</button>
    </div>
  )
}

export default AddUserForm
 