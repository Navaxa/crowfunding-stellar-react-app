import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './views/landing';

function App() {
  return (
    <ChakraProvider>
      <Landing />
    </ChakraProvider>
  );
}

export default App;
