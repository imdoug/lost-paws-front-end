import React, { useContext } from 'react';
import {DogProvider} from './contexts/DogsContext';
import ReportForm from './components/ReportForm';
import Nav from './components/Nav';
import Footer from './components/Footer'
import DogsCard from './components/DogsCards';
import FoundDogs from './components/Foundogs';
import LostDogs from './components/LostDogs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <DogProvider>
          <Nav/>
          <h1><span className="left"><i class="fa fa-paw"></i></span>Angel Paws<span className="right"><i class="fa fa-paw"></i></span></h1>
          <Switch>
            <Route path="/report" component={ReportForm}/>
            {/* <Route path="/" exact component={Home}/> */}
            <Route path="/all-dogs" component={DogsCard}/>
            <Route path="/lost-dogs" component={LostDogs}/>
            <Route path="/found-dogs" component={FoundDogs}/>
          </Switch>
      </DogProvider>
      <Footer/>
    </Router>
    </>
  );
}

// const Home = () =>(
//   <>
//     <div class="paw-print--1">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
//     <div class="paw-print-0">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
//   <div class="paw-print-1">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
    
// <div class="paw-print-2">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>    
    
// <div class="paw-print-3">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>    
    
// <div class="paw-print-4">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
    
// <div class="paw-print-5">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
    
// <div class="paw-print-6">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
    
// <div class="paw-print-7">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>

// <div class="paw-print-8">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
// <div class="paw-print-9">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
// <div class="paw-print-10">
//     <div class="pad large"></div>
//     <div class="pad small-1"></div>
//     <div class="pad small-2"></div>
//     <div class="pad small-3"></div>
//     <div class="pad small-4"></div>
// </div>
// </>
// )

export default App;
