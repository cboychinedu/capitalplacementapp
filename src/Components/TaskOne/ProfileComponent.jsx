// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import hideLogo from "../../Images/hide.png"; 
import showLogo from "../../Images/show.png"; 
import addLogo from "../../Images/addLogo.png"; 
import listLogo from "../../Images/unorderedList.png"; 
import deleteLogo from "../../Images/deleteLogo.png"; 

// Creating a function based component for the Profile 
class ProfileComponent extends Component {

    // Setting the state 
    state = {
        question: "hiddenQuestionClass", 
    }
    // Rendering the jsx component 
    render() {
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
                        <button className="addAQuestionDiv profileComponent" onClick={(event) => {
                                // Setting the state  
                                this.setState({
                                    question: "visibleQuestionClass", 
                                })
                            }}>

                            <div>
                                <img src={addLogo} className="addLogo" /> 
                            </div>

                            <div>
                                <p className="addAQuestionPara"> Add a question </p>
                            </div>

                        </button>

                        {/* Adding the question div  */}
                        <div className={this.state.question} id="questions">
                            {/* Adding the type */}
                            <div>
                                <label className="labelType"> Type </label> <br /> 
                                <select name="" id="" placeholder="Multiple choice" className="questionParagraph" > 
                                <option value="pargraph"> Paragraph </option>
                                    <option value="Short answer">Short answer </option>
                                    <option value="yes/no"> Yes/No</option>
                                    <option value="dropdown"> Dropdown </option>
                                    <option value="multiplechoice"> Multiple choice </option>
                                    <option value="date"> Date </option>
                                    <option value="number"> Number </option>
                                    <option value="fileupload"> File upload </option>
                                    <option value="videoquestion"> Video question </option>
                                </select>
                            </div>

                        
                            {/* Adding the innner Question*/}
                            <div className="questionInputFormDiv">
                                <label className="labelQuestion"> Question </label> <br /> 
                                <input type='text' className="questionInputForm" placeholder='Type here' /> 
                            </div>

                            {/* Adding the choice div */}
                            <div className="choiceDiv">
                                <div className="choiceHeaderDiv">
                                <h3 className="questionHeader choice"> Choice </h3>

                            </div>
                            <div className="choiceInputFormDiv">
                                <section>
                                    <img src={listLogo} alt="" srcset="" className="listLogo" />

                                </section>
                                <section>
                                    <input type="text" className="choiceInputForm" placeholder='Type here' /> 

                                </section>
                                <section>
                                    <img src={addLogo}  className="addLogo" /> 

                                </section>

                            </div>
                            <div className="deleteQuestionDiv">
                                <div className="innerDeleteDiv" onClick={() => {
                                        // Changing the state 
                                        this.setState({
                                            question: "hiddenQuestionClass", 
                                        })
                                    }}>
                                    <img src={deleteLogo} alt="" className="deleteLogo" />
                                    <div>
                                    <p className="deleteQuestionPara"> Delete question </p>
                                </div>
                                </div>
                            
                                <div>
                                    <button className="profileSaveBtn"> Save </button>
                                </div>

                            </div> 

                        </div>
                        </div>
                        
                    </div>
                </section>

            </Fragment>
        )
    }
}

// Exporting the profile component 
export default ProfileComponent; 