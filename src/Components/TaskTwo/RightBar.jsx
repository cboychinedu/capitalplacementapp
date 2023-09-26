// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import TaskTwoMiddleDiv from './TaskTwoMiddleDiv';
import TaskTwoTopDiv from './TaskTwoTopDiv'; 

// Creating the Right Bar Component 
class RightBarComponent extends Component {
    // Setting the state 
    state = {} 

    // Rendering the jsx component 
    render() {
        // Returning the jsx component 
        return(
            <Fragment>
                <div className="taskTwoRightBarDiv">
                    {/* Adding the top Div */}
                    <TaskTwoTopDiv />

                    {/* Adding the middle div  */}
                    <TaskTwoMiddleDiv /> 

                </div> 
            </Fragment>
        )
    }
}

// Exporting the RightBarComponent 
export default RightBarComponent; 