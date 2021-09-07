import React,{} from 'react';
import {DogProvider} from './contexts/DogsContext';
import {BreedProvider} from './contexts/BreedContext'
import Home from './components/Home';
import ReportForm from './components/ReportForm';
import Nav from './components/Nav';
import Footer from './components/Footer'
import DogsCard from './components/DogsCards';
import FoundDogs from './components/Foundogs';
import LostDogs from './components/LostDogs';
import Alerts from './components/Alerts';
import Contact from './components/Contact';
import Help from './components/Help';
import DogDetail from './components/DogDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Breeds from './components/Breeds.js';



function App() {
  return (
    <>
    <Router>
      <DogProvider>
          <Nav/>
          <Switch>
            <Route path="/report" component={ReportForm}/>
            <Route path="/" exact component={Home}/>
            <Route path="/all-dogs" component={DogsCard}/>
            <Route path="/lost-dogs" component={LostDogs}/>
            <Route path="/found-dogs" component={FoundDogs}/>
            <Route path="/alerts" component={Alerts}/>
            <Route path="/contacts" component={Contact}/>
            <Route path="/help" component={Help}/>
            <Route path={`/dogs/:id`} component={DogDetail}/>
          </Switch>
      </DogProvider>
      <BreedProvider>
        <Route path="/breeds" component={Breeds}/>
        <Footer/>
      </BreedProvider>  
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
