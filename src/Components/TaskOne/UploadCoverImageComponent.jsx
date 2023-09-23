// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import uploadLogo from "../../Images/uploadLogo.png"; 

// Creating the function component 
let UploadCoverImageComponent = (props) => {
    // Rendering the jsx component 
    return(
        <Fragment> 
                <section className="uploadCoverImageSection">
                    <div className="uploadCoverImageHeader">
                        <h4> Upload cover image </h4>
                    </div>
                    <input type="file" id="fileData" hidden/>
                    <div className="uploadFileDiv" onClick={(event) => {
                        // Getting the file form dom element 
                        const fileData = document.getElementById("fileData"); 
                        fileData.click();  
                    }}>

                        <img src={uploadLogo} className="uploadLogo" /> 

                    </div>

                </section>
        </Fragment>
    )
}

// Exporting the function 
export default UploadCoverImageComponent; 