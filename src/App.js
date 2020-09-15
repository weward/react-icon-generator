import React from 'react';
import './App.css';
import Router from './routes/Router'
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconProvider } from './providers/IconState'

function App() {
  return (
    <>
      <CssBaseline />
      <IconProvider>
        <Router />
      </IconProvider>
    </>
  );
}

export default App;
