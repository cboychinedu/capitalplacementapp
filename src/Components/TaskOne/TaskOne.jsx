// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import UploadCoverImageComponent from './UploadCoverImageComponent';
import PersonalInformation from './PersonalInformationComponent';
import menuLogo from "../../Images/menuLogo.png"; 
import homeLogo from "../../Images/homeLogo.png"; 
import todoLogo from "../../Images/todoLogo.png"; 
import { Link } from 'react-router-dom';
import ProfileComponent from './ProfileComponent';

// Creating the API/UI component 
class ApiUserInterface extends Component {
    // Setting the state 
    state = {} 

    // Rendering the jsx component 
    render() {
        // Returning the jsx component 
        return(
            <Fragment> 
                <section className="mainSection">
                    {/* Adding the left bar div  */}
                    <div className="leftBarDiv">
                        {/* Adding the menu logo div  */}
                        <div className="menuLogoDiv">
                            <img src={menuLogo} className="menuLogo"/> 
                        </div>

                        {/* Adding the home logo div  */}
                        <div className="homeLogoDiv">
                            <img src={homeLogo} className="homeLogo" /> 
                        </div>

                        {/* Adding the todo list */}
                        <div className="todoLogoDiv">
                            <img src={todoLogo} className="todoLogo" /> 
                        </div>

                    </div>

                    {/* Adding the right bar div  */}
                    <div className="rightBarDiv">
                        {/* Adding the nav bar  */}
                        <section className='mainNav'>
                            {/* Adding the respective menus divs */}
                            <div className="menuDiv">
                                <p> Program Details </p>
                            </div>

                            <div className="menuDiv application">
                                <p> Application Form </p>
                            </div>
                            
                            <div className="menuDiv">
                                <p> Workflow </p>
                            </div>

                            {/* Adding the divider */}
                            <div className="divider"></div>

                            <div className="menuDiv">
                                <p> Preview </p>
                            </div>

                        </section>

                        {/* Adding the inner form section */}
                        <section className="innerFormSection">
                            {/* Adding the Upload Cover Image Component  */}
                            <UploadCoverImageComponent /> 

                            {/* Adding the personal information Component */}
                            <PersonalInformation /> 

                            {/* Adding the profile component */}
                            <ProfileComponent /> 

                        </section>

                      

                    </div>

                </section>
            </Fragment>
        )
    }
}

// Exporting the ApiUserInterfaceComponent 
export default ApiUserInterface; 