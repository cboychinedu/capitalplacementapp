// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import pencilLogo from "../../Images/pencilLogo.png"; 
import listLogo from "../../Images/unorderedList.png"; 
import addLogo from "../../Images/addLogo.png"; 
import deleteLogo from "../../Images/deleteLogo.png"; 


// Creating the function component 
class AdditionalQuestionsComponent extends Component {
    // Setting the state 
    state = {
        question: "hiddenQuestionClass", 
    }

    // Rendering the jsx component 
    render() {
        return(
            <Fragment> 
                <section className='additionalQuestionSection'>
                    <div className="uploadCoverImageHeader">
                        <h4> Additional questions </h4>
                    </div>
                    {/* Adding the additional question div */}
                    <div className="additionalQuestionsDiv"> 
                        {/* Adding the Paragraph div */}
                        <div className="paragraphDiv">
                            <p className="paragraphLabel"> Paragraph </p> 

                            <div className="secondparagraphDiv">
                                <p className="paragraphPara"> Please tell me about yourself in less than 500 words </p>
                                <div className="pencilLogoDiv">
                                    <img src={pencilLogo} className="pencilLogo" alt="" />
                                </div>
                            </div>
                            <div>
                                <input type="text" className="paragraphInputForm" name="" id="" />
                            </div>

                        </div>
                    
                    </div>
                    {/* Adding the Dropdown div  */}
                    <div className="dropdownQuestionsDiv"> 
                        {/* Adding the Paragraph div */}
                        <div className="dropdownparagraphDiv">
                            <p className="paragraphLabel"> Dropdown </p> 

                            <div className="secondparagraphDiv">
                                <p className="paragraphPara"> Please select the year of graduation from the list below </p>
                                <div className="pencilLogoDiv">
                                    <img src={pencilLogo} className="pencilLogo" alt="" />
                                </div>
                            </div>
                            <div className="questionDiv">
                                <h3 className="questionHeader"> Question </h3>
                                <input type="text" className="questionInputForm" name="" id="" placeholder="Type here" />
                            </div>

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
                                <div className="innerDeleteDivQuestion">
                                    <img src={deleteLogo} alt="" />
                                    <div>
                                    <p className="deleteQuestionPara"> Delete question </p>
                                </div>
                                </div>
                            
                                <div>
                                    <button className="saveBtn"> Save </button>
                                </div>

                            </div> 

                            <div className="lastChoiceInputFormDiv">
                                <input type="text" className="questionInputFormDiv" /> 
                            </div>
                            
                            <div className="paragraphLabelDiv"> 
                                <p className="paragraphLabel"> Yes/No questions </p> 
                            </div>
                            <div className="secondparagraphDiv">
                                <p className="paragraphPara"> Have you ever been rejected by the UK embassy? </p>
                                <div className="pencilLogoDiv">
                                    <img src={pencilLogo} className="pencilLogo" alt="" />
                                </div>
                            </div>

                        </div>

                        {/* Adding the delete question div */}                                     
                        <button className="addAQuestionDivForAdditionalQuestion" onClick={(event) => {
                                // Setting the state 
                                this.setState({
                                    question: "visibleQuestionClass"
                                })
                            }}>
                            <div>
                                <img src={addLogo} className="addLogo" /> 
                            </div>

                            <div>
                                <p className="addAQuestionPara"> Add a question </p>
                            </div>

                        </button>

                        {/* Adding the question div */}
                        <div className={this.state.question} id="questions">
                            {/* Adding the type label */}
                            <div>
                                <label className="labelType"> Type </label> <br /> 
                                <select name="" id="" placeholder="Multiple choice" className="questionParagraph" > 
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

                            {/* Adding the inner question */}
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


// Exporting the function 
export default AdditionalQuestionsComponent; 