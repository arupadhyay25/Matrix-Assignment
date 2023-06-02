import React from 'react';
import LandingPage from './TokenAddress';
import Banner from './Banner';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { MainRoutes } from './MainRoutes';

function App() {
  return (
    <Box
      backgroundColor={'black'}
      color={'white'}
      pl={['10px', '20px', '20px']}
      pr={['10px', '20px', '20px']}
    >
      <Sidebar/>
      <MainRoutes/>
    </Box>
  );
}

export default App;
