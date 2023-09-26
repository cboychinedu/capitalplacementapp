// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import FilterComponents from './FiltersOptions';
import alertLogo from "../../Images/alertLogo.png"; 
import searchLogo from "../../Images/searchLogo.png"; 


// Creating the Middle Bar Component 
class MiddleBarComponent extends Component {
    // Setting the state 
    state = {} 

    // Rendering the jsx component 
    render() {
        // Returning the jsx component 
        return(
            <Fragment> 
                <div className="taskTwoMiddleBarDiv">
                    <div className="londonInnerDiv">
                        <h3 className="londonIntershipHeader"> London Internship Program </h3>
                        <p> London </p>
                    </div>

                    {/* Adding the search div */}
                    <div className="searchDiv">
                        <div className="search">
                            <div>
                                <img src={searchLogo} className='searchLogo'/> 
                            </div>
                            <input type="search" placeholder='Search by name, edu, exp or #tag' className="searchInputForm" /> 

                        </div>

                        <div className="alertLogo">
                            <img src={alertLogo} /> 

                        </div>

                    </div>

                    {/* Adding the filters div */}
                    <div className="filtersDiv">
                        <p className="filtersPara"> Filters </p>

                        <p className="selectedPara"> 0 Selected </p>

                    </div>

                    {/* Adding the filter components */} 
                    <FilterComponents text="Personal Information" /> 
                    <FilterComponents text="Education" /> 
                    <FilterComponents text="Work Experience" /> 
                    <FilterComponents text="Activity Filter" /> 

                    {/* Adding the advanced filter  */}
                    <FilterComponents text="Advanced Filter" /> 

                </div>
            </Fragment>
        )
    }
}

// Exporting the MiddleBarCompnent 
export default MiddleBarComponent; 