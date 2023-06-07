import React from 'react';
import { MainRoutes } from './Pages/MainRoutes';
import { Box } from '@chakra-ui/react';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Box
      backgroundColor={'black'}
      color={'white'}
      pl={['10px', '20px', '20px']}
      pr={['10px', '20px', '20px']}
    >
      <Sidebar />
      <MainRoutes />
    </Box>
  );
}

export default App;
