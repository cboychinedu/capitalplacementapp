// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import downArrow from "../../Images/downArrow.png"; 
import fileLogo from "../../Images/fileLogo.png"; 

// Creating the filter component 
let FilterComponents = (props) => {

    // Rendering the components 
    return(
        <Fragment> 
            <div className="filterOptionsDiv">
                <section className="firstSection">
                    <div>
                        <img src={fileLogo} className="fileLogoFilter" /> 
                    </div>
                    <div>
                        <h3 className="filterText"> {props.text} </h3>
                    </div>
                </section>
                <section className="secondSection">
                    <div>
                        <img src={downArrow} className="downArrowLogoFilter" /> 
                    </div>
                </section>

               
            </div>
            
        </Fragment>
    )
}

// Exporting the filter components 
export default FilterComponents 