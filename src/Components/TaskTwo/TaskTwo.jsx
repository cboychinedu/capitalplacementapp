// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import LeftBarComponent from './LeftBar'; 
import MiddleBarComponent from './MiddleBar';
import RightBarComponent from './RightBar';

// Creating the UI design component 
class UiDesignInterface extends Component {
    // Setting the state 
    state = {} 

    // Rendering the jsx component 
    render() {
        // Returning the jsx component 
        return(
            <Fragment> 
                {/* Adding the main section */}
                <section className="taskTwoMainSection">

                    {/* Adding the left bar */}
                    <LeftBarComponent /> 

                    {/* Adding the middle bar div */}
                    <MiddleBarComponent /> 

                    {/* Adding the right bar div  */}
                    <RightBarComponent /> 

                </section>

            </Fragment>
        )
    }
}

// Exporting the UiDesignInterface component 
export default UiDesignInterface; 