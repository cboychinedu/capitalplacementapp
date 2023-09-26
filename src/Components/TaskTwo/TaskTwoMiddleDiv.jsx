// Importing the necessary modules 
import React, { Fragment } from 'react'; 
import IntershipUsersData from "./IntershipUsersData"; 

// Creating the function based component 
let TaskTwoMiddleDiv = (props) => {
    // Rendering the component 
    return(
        <Fragment> 
            <div className="taskTwoMiddleDiv">
                {/* Adding the header div */}
                <div className="middleDivHeaderDiv">
                    <section className="innerMiddleDivLeftSection">
                        <div>
                            <input type="checkbox" /> 
                        </div>
                        <div>
                            <h4 className="candidatesHeader"> 247 Candidates </h4>
                        </div>
                    </section>
                    <section className="innerMiddleDivRightSection">
                        <div>
                            <h4 className="qualifiedHeader"> Qualified </h4>
                        </div>
                        <div className="taskTwoDivider"></div>
                        <div className="taskDisplayDiv">
                            <p> Task </p>
                            <p className="tasksValue"> 25 </p>
                        </div>
                        <div className="taskTwoDivider"></div>
                        <div className="disqualfiedDisplayDiv">
                            <p> Disqualified </p>
                            <p className="disqualifiedValue"> 78 </p>
                        </div>

                    </section>
                </div>

                {/* Adding the internshipUsersData Component */}
                <IntershipUsersData 
                    fullname="Aaliyha Sanderson"
                    location="Riyadh, Saudi Arabia"
                    education="Bachelor - Cambridge University (2021 - 2023)"
                    hashtags="#top_candidate #top_candidate" 
                /> 

                {/* Adding the data for John Doe */}
                <IntershipUsersData 
                    fullname="John Doe"
                    location="Boston, USA"
                    education="Bachelor - MIT (2023 - 2023)"
                    hashtags="#top_candidate #top_candidate" 

                /> 

                {/* Adding the data for thomas Matt */}
                <IntershipUsersData
                    fullname="Thomas Matt"
                    location="Edinburgh, UK"
                    education="Bachelor - Havard University (2023 - 2023)"
                />

                {/* Adding the data for Kamilia Smith */}
                <IntershipUsersData 
                    fullname="Kamilia Smith" 
                    location="London, UK" 
                    education="Bachelor - Boston University (2023 - 2023)"
                /> 

                {/* Adding the data for Roy Jade */}
                <IntershipUsersData 
                    fullname="Roy Jade"
                    location="Cambridge, UK"
                    education="Bachelor - Yale (2023 - 2023)"
                /> 

                {/* Adding the data for Ahmed Salman */}
                <IntershipUsersData
                    fullname="Ahmed Salman"
                    location="New York, USA"
                    education="Bachelor - Cambridge University (2023 - 2023)"
                />
            </div>
            
        </Fragment>
    )
}

// Exporting the Task two middle div 
export default TaskTwoMiddleDiv; 