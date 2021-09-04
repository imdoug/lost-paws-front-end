import React, {useEffect, useContext} from 'react';
import { DogContext, DogProvider } from './contexts/DogsContext';
import axios from 'axios';
import Create from './components/Create';
import Nav from './components/Nav';
import Footer from './components/Footer'
import DogsCard from './components/DogsCards';

function App() {

  return (
    <>
    <Nav/>
    <h1><span className="left"><i class="fa fa-paw"></i></span>Angel Paws<span className="right"><i class="fa fa-paw"></i></span></h1>
    <DogProvider>
        <Create/>
        <DogsCard/>
    </DogProvider>
    <Footer/>
    </>
  );
}

export default App;
