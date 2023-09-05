"use client"

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import AddUserForm from "../components/AddUserForm"
import SearchInput from "../components/SearchInput"
import SuspendUserContainer from '../components/SuspendUserContainer';

const page = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ width: '100%', typography: 'body1', justifyContent: 'center', alignContent: 'center' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'white' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Add User" value="1" />
              <Tab label="Verify Partner" value="2" />
              <Tab label="Suspend User" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <AddUserForm />
          </TabPanel>
          <TabPanel value="2">
            <SearchInput type="Partner" />
            <SuspendUserContainer />
          </TabPanel>
          <TabPanel value="3">
            <SearchInput type="User" />
            <SuspendUserContainer />
          </TabPanel>
        </TabContext>
      </Box>
  )
}

export default page
