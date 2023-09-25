// Importing the necessary modules 
import './App.css'; 
import React, { Component, Fragment } from 'react'; 
import UiDesignInterface from './Components/TaskTwo/TaskTwo';
import ApiUserInterface from './Components/TaskOne/TaskOne.jsx'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// Creating the class App component 
class App extends Component { 
  // Setting the state 
  state = {} 

  // Rendering the jsx component 
  render() {
    // Returning the jsx component 
    return (
       <Fragment> 
        <BrowserRouter> 
              {/* Setting the routes configurations */}
              <Routes> 
                <Route exact path='/' element={<ApiUserInterface />} /> 
                <Route path="/tasktwo" element={<UiDesignInterface /> } /> 
            </Routes>
        </BrowserRouter>
       </Fragment>
    )
  }
}

// Exporting the App component 
export default App; 