// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import hideLogo from "../../Images/hide.png"; 
import addLogo from "../../Images/addLogo.png"; 

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
                    <div>
                        <input type="text" className="firstname" placeholder='First Name' />
                    </div>

                    <div>
                        <input type="text" className="lastname" placeholder='Last Name' /> 
                    </div>

                    <div>
                        <input type="email" className="email" placeholder='Email' /> 
                    </div>

                    {/* Adding the Phone div  */}
                    <div className="phoneDiv">
                        <div>
                            <input type="tel" className="phone" placeholder='Phone (without dial code)' /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Internal </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={hideLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding the Nationality */}
                    <div className="phoneDiv">
                        <div>
                            <input type="text" className="phone" placeholder='Nationality' /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Internal </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={hideLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding Current Residence */}
                    <div className="phoneDiv">
                        <div>
                            <input type="text" className="phone" placeholder="Current Residence" /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Internal </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={hideLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding ID Number */}
                    <div className="phoneDiv">
                        <div>
                            <input type="text" className="phone" placeholder='ID Number' /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Internal </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={hideLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding the date of Birth */}
                    <div className="phoneDiv">
                        <div>
                            <input type="text" className="phone" placeholder='Date of Birth' /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Internal </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={hideLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding the Gender */}
                    <div className="phoneDiv genderDiv">
                        <div>
                            <input type="text" className="phone" placeholder='Gender' /> 
                        </div>

                        <div className="internalCheckboxDiv">
                            <input type="checkbox" /> 
                            <p className="internalPara"> Internal </p>
                        </div>

                        <div className="hideCheckboxDiv">
                            <div>
                                <img src={hideLogo} className="hideLogo" /> 
                            </div>

                        </div>

                    </div>

                    {/* Adding add a question div */}
                    <button className="addAQuestionDiv">
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

// Exporting the personal information component 
export default PersonalInformation; 