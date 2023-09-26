// Importing the necessary modules 
import React, { Fragment } from "react";
import OpportunityBrowsingSelectComponent from "./OpportunityBrowsingComponent"; 
import tagLogo from '../../Images/tag.png'; 
import deleteContactLogo from '../../Images/deleteContact.png'; 
import saveContactLogo from '../../Images/saveContact.png'; 
import callLogo from '../../Images/callLogo.png'; 
import messageLogo from '../../Images/message.png'; 
import videoLogo from '../../Images/videoLogo.png'; 
import { Link } from "react-router-dom";

// Creating the fn 
let TaskTwoTopDiv = (props) => {
    // Rendering the component 
    return(
        <Fragment> 
            <div className="taskTwoTopDiv">
                <section className="taskTwoTopInnerDiv">
                    <OpportunityBrowsingSelectComponent />

                </section>

                <section className="taskTwoTopLeftInnerDiv">
                    <div className="innerIconsDiv">
                        <div to="#" className="iconsLogoDiv"> 
                            <img src={tagLogo} className="iconsLogo" />
                        </div>
                        <div className="iconsLogoDiv">
                            <img src={deleteContactLogo} className="iconsLogo" />
                        </div>
                        <div className="iconsLogoDiv">
                            <img src={saveContactLogo} className="iconsLogo"/> 
                        </div>
                        <div className="iconsLogoDiv">
                            <img src={callLogo} className="iconsLogo"/> 
                        </div>
                        <div className="iconsLogoDiv">
                            <img src={messageLogo} className="iconsLogo"/> 
                        </div>
                    </div>

                    <div class="iconsDivider"> </div>

                    <div className="moveToVideoMainDiv">
                        <button className="moveToVideoInterviewBtn">
                            <p className="moveToVideoPara"> Move To Video Interview </p>
                        </button>
                        <div className="videoDownArrowDiv">
                            <img src={videoLogo} alt="downArrowLogo" /> 
                        </div>

                    </div>

                </section>

            </div>
            
        </Fragment>
    )
}

// Exporting the Task two top div 
export default TaskTwoTopDiv; 