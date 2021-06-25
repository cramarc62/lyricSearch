import React from 'react';
import { BrowserRouter as Router,Route,Switch } from'react-router-dom'
import {Navbar} from './components/layout/Navbar'
import {Index} from './components/layout/Index'
import {Lyrics} from './components/tracks/Lyrics'
import  {GlobalProvider} from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Router>
    <React.Fragment>
    
    <Navbar/>
    
    <div className='container'>
       <Switch>
         <Route exact path="/" component={Index}/>
         <Route exact path="/lyrics/track/:id" component={Lyrics}/>
         <Route exact path="/" component={Navbar}/>
       </Switch>
      
     </div>
    </React.Fragment>
    </Router>
    </GlobalProvider>
  );
}

export default App;
