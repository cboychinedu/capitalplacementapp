// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import { Link } from 'react-router-dom'; 
import circleLogo from "../../Images/circle.png"; 
import homeLogo from "../../Images/taskTwoHomeLogo.png"; 
import usersLogo from "../../Images/users.png"; 
import checkLogo from "../../Images/check.png"; 
import shareLogo from "../../Images/shareLogo.png"; 
import fileLogo from "../../Images/fileLogo.png"; 
import contactLogo from "../../Images/contactLogo.png"; 
import likesLogo from "../../Images/likesLogo.png"; 
import backLogo from "../../Images/back.png"; 
import settingsLogo from "../../Images/settings.png"; 
import profileLogo from "../../Images/profileLogo.png"; 

// Creating the left bar component 
let LeftBarComponent = (props) => {

    // Rendering the jsx component 
    return(
        <Fragment> 
            <div className="taskTwoLeftBarDiv">

                {/* Adding the upper section  */}
                <section className="taskTwoUpperSection">
                    {/* Adding the circle logo */}
                    <div className="circleLogoDiv">
                        <img src={circleLogo} className="circleLogo" /> 
                    </div>

                    {/* Adding the home logo */}
                    <div className="homeLogoDiv">
                        <img src={homeLogo} alt="" className="" />

                    </div>

                    {/* Adding the users logo */}
                    <div className="usersLogoDiv">
                        <img src={usersLogo} alt="" className="usersLogo" />
                    </div>

                    {/* Adding the check logo  */}
                    <div className="checkLogoDiv">
                        <img src={checkLogo} alt="" className="checkLogo" /> 
                    </div>

                    {/* Adding the share logo */}
                    <div className="shareLogoDiv">
                        <img src={shareLogo} className="shareLogo" /> 
                    </div>

                    {/* Adding the file logo */}
                    <div className="fileLogoDiv"> 
                        <img src={fileLogo} className="fileLogo" /> 
                    </div>

                    {/* Adding the contacts logo */}
                    <div className="contactLogoDiv">
                        <img src={contactLogo} className="contactLogo" /> 
                    </div>

                    {/* Adding the likes logo  */}
                    <div className="likesLogoDiv">
                        <img src={likesLogo} alt="" className="likesLogo" />
                    </div>

                    {/* Adding the back logo */}
                    <Link className="backLogoDiv" to="/">
                        <img src={backLogo} alt="" className="backLogo" />

                    </Link>

                </section>

                {/* Adding the lower section */}
                <section className="lowerSection">
                    {/* Adding the settings logo  */}
                    <div className="settingsLogoDiv">
                        <img src={settingsLogo} alt="" className="settingsLogo" /> 
                    </div>

                    {/* Adding the profile logo */}
                    <div className="leftBarprofileLogoDiv">
                        <img src={profileLogo} alt="" className="profileLogo" />
                    </div>

                </section>
                
                        

            </div>
        </Fragment>
    )
}

// Exporting the LeftBar component 
export default LeftBarComponent; 