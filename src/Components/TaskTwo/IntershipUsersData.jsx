// Importing the necessary modules 
import React, { Fragment } from 'react';
import profileLogo from '../../Images/UserProfileLogo.png';  

// Creating the function based component for all the 
// Intershup Users' data 
let IntershipUsersData = (props) => {
    // Rendering the jsx component 
    return (
        <Fragment> 
            <div className="intershipUsersDiv">
                <section>
                    <input type='checkbox' style={{ height: "40px"}}/> 
                </section>
                <section className="profileLogoDiv">
                    <img src={profileLogo} /> 
                </section>
                <section className="usersInfomationDiv">
                    <h4 className="fullnamePara"> {props.fullname} </h4>
                    <p className="locationPara"> <b>{props.location} </b></p>
                    <p className="educationPara"> {props.education}</p>
                    <a href="#" className="hashtagsPara"> #top_candidate #top_candidate </a>
                    <div className="hashTagsGreenDiv">
                        <p className="greenTag"> New York </p>
                        <p className="greenTag"> Marketing </p>
                        <p className="greenTag"> London </p>
                    </div>

                </section>

            </div>
        </Fragment>
    )
}

// Exporting the IntershipUsers data 
export default IntershipUsersData; 