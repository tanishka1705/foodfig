import React from 'react';


import { Box } from '@chakra-ui/react';
import Nav from './Header/Nav';
import Main from './main/Main';
import Rectangle from './rectangles/Rectangle';
import CreateAccount from './Section1/CreateAccount';
import Footer from './Footer/Footer';

function App() {
  return (
  
     <Box>
      <Nav></Nav>
      <Main></Main>
      <Rectangle></Rectangle>
      <CreateAccount></CreateAccount> 
      <Footer></Footer>
     </Box>
  
  );
}

export default App;
