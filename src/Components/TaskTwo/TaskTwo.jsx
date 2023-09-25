// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 

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
                <section className="mainSection">
                    {/* Adding the left bar */}
                    <div className="leftBarDiv">
                        <p> Task Two </p>

                    </div>

                    {/* Adding the middle bar div */}
                    <div className="middleBarDiv">

                    </div>

                    {/* Adding the right bar div  */}
                    <div className="rightBarDiv">

                    </div>

                </section>

            </Fragment>
        )
    }
}

// Exporting the UiDesignInterface component 
export default UiDesignInterface; 