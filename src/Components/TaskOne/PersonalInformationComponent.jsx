// Importin the necessary modules 
import React, { Component, Fragment } from 'react'; 

// Creating the function based component for the personal information  
let PersonalInformation = (props) => {
    // Rendering the jsx component 
    return(
        <Fragment> 
            <section className="personalInformationSection"> 
                <div className="uploadCoverImageHeader">
                    <h4> Personal Information </h4>
                </div>
                <div className="personalInformationFormDiv">

                </div>
            </section>
        </Fragment>
    )
}

// Exporting the personal information component 
export default PersonalInformation; 