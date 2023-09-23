// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import hideLogo from "../../Images/hide.png"; 
import showLogo from "../../Images/show.png"; 
import addLogo from "../../Images/addLogo.png"; 

// Creating a function based component for the Profile 
let ProfileComponent = (props) => {
    // Rendering the jsx component 
    return(
        <Fragment> 
            {/* Adding a section */}
            <section className="personalInformationSection">
                <div className="uploadCoverImageHeader">
                    <h4> Profile </h4>
                </div> 
                <div className="personalInformationFormDiv">
                    {/* Adding the Education Div  */}
                    <div className="phoneDiv">
                        <div>
                            <input type="text" className="phone" placeholder='Education' /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Mandatory </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={hideLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding the Experience div */}
                    <div className="phoneDiv">
                        <div>
                            <input type="text" className="phone" placeholder='Experience' /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Mandatory </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={showLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding the resume div */}
                    <div className="phoneDiv">
                        <div>
                            <input type="text" className="phone" placeholder='Resume' /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Mandatory </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={hideLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding add a question div */}
                    <button className="addAQuestionDiv profileComponent">
                        <div>
                            <img src={addLogo} className="addLogo" /> 
                        </div>

                        <div>
                            <p className="addAQuestionPara"> Add a question </p>
                        </div>

                    </button>
                    
                </div>
            </section>

        </Fragment>
    )
}

// Exporting the profile component 
export default ProfileComponent; 