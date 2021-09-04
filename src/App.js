import React, { useContext } from 'react';
import {DogProvider} from './contexts/DogsContext';
import Create from './components/Create';
import Nav from './components/Nav';
import Footer from './components/Footer'
import DogsCard from './components/DogsCards';


function App() {
  return (
    <>
    <DogProvider>
        <Nav/>
        <h1><span className="left"><i class="fa fa-paw"></i></span>Angel Paws<span className="right"><i class="fa fa-paw"></i></span></h1>
        <Create/>
        <DogsCard/>
    </DogProvider>
    <Footer/>
    </>
  );
}

export default App;
