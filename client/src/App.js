import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './components/pages/Error';
import SensorContainer from './components/Sensor/SensorContainer';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { SensorProvider } from './context/SensorContext';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#336799',
      },
      secondary: {
        main: '#3367998c',
      },
    },
  });

  return (
    <>
    <SensorProvider>
      <ThemeProvider theme={theme}>

        <div className="App">
          <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route exact path='/' element={<SensorContainer />}/>
                <Route exact path='*' element={<Error />}/>
              </Routes>
              <Footer/>
            </BrowserRouter>
        </div>
      </ThemeProvider>
    </SensorProvider>
    </>
  );
}

export default App;
