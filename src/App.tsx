import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { MantineProvider ,Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function App() {
  return (
    <>

    <MantineProvider >
      {/* <h1 className='text-3xl ubuntu-mono-regular bg-pink-500'>Hello world!</h1> */}

      <HomePage/>


      </MantineProvider>
    </>
  );
}

export default App;
