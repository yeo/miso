import React from 'react';
import logo from './assets/logo.png';
import './App.css';

import Box from '@mui/material/Box';

import Container from '@mui/material/Container';

import Header from './components/shared/header';
import Footer from './components/shared/footer';


import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Header />

          <Home />

          <Footer />
        </Box>
      </Container>
    </div>
  );
}

export default App;
