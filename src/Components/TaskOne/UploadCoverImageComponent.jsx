// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import uploadLogo from "../../Images/uploadLogo.png"; 
import deleteLogo from "../../Images/deleteLogo.png"; 

// Creating the function component 
class UploadCoverImageComponent extends Component {
    // Setting the state 
    state = {
        isDragActive: false, 
        uploadedImage: null, 
        question: "hiddenQuestionClass", 
    }

    // Creating a function for handling the drag enter 
    handleDragEnter = (event) => {
        // Preventing default submission 
        event.preventDefault(); 
        this.setState({
            isDragActive: true
        }); 
    }

    // Creating a function for handling the drag leave 
    handleDragLeave = (event) => {
        // Preventing default submission 
        event.preventDefault(); 
        this.setState({
            isDragActive: false 
        })
    }

    // Handle upload 
    handleUpload = (event) => {
        // Preventing the default submission 
        event.preventDefault(); 

        // Setting the state 
        this.setState({
            isDragActive: false, 
            question: "displayImageDiv", 
        })

        // Selecting the file 
        const file = event.target.files[0]; 

        // Displaying the uploaded file 
        if (file) {
            // You can perfom action with the dropped file here 
            console.log("file uploaded", file.name); 
        }

        // Displaying the uploaded image 
        const reader = new FileReader(); 
        reader.onload = (event) => {
            this.setState({
                uploadedImage: event.target.result 
            })
        }

        // Read the image data as a URL file 
        reader.readAsDataURL(file); 
    }

    // Creating a function for handling the drop 
    handleDrop = (event) => {
        // Preventing the default submission 
        event.preventDefault(); 
        this.setState({
            isDragActive: false, 
            question: "displayImageDiv", 
        }); 

        // Selecting the file from the data stream 
        const file = event.dataTransfer.files[0]; 

        // Displaying the uploaded file 
        if (file) {
            // You can perfom actions with the dropped file here, 
            console.log("file uploaded: ", file.name); 
        }

        // Displaying the uploaded image 
        const reader = new FileReader(); 
        reader.onload = (event) => {
            this.setState({ uploadedImage: event.target.result })
        }; 

        // Read the image data as a URL file 
        reader.readAsDataURL(file); 
    }

    // Rendering the jsx component
    render() {
        return(
            <Fragment> 
                    <section className="uploadCoverImageSection">
                        <div className="uploadCoverImageHeader">
                            <h4> Upload cover image </h4>
                        </div>
                       
                        <div 
                            className="uploadFileDiv" 
                            onDragEnter={this.handleDragEnter} 
                            onDragLeave={this.handleDragLeave}
                            onDragOver={(event) => {
                                // Preventing the default submission 
                                event.preventDefault(); 

                            }}
                            onDrop={this.handleDrop} 
                            onClick={(event) => {
                            // Getting the file form dom element 
                            const fileData = document.getElementById("fileData"); 
                            fileData.click();  
                        }}>

                            <img src={uploadLogo} className="uploadLogo" /> 
                            <input type="file" id="fileData" hidden onChange={this.handleUpload}/>

                        </div>

                        {/* Adding the display image div  */}
                        <div className={this.state.question}>
                            {
                                this.state.uploadedImage && (
                                    <div className="imagePreview"> 
                                        <img className="imagePreview" src={this.state.uploadedImage} alt="uploadedImage" />                                                 
                                    </div>
                                )
                            }

                            {/* Adding the display div */}
                            <div className="deleteAndUploadDiv" onClick={(event) => {
                                // Setting the state by setting the uploaded image to null 
                                this.setState({
                                    question: "hiddenQuestionClass", 
                                    uploadedImage: null, 

                                })    
                            }}>
                                <img src={deleteLogo} className="deleteLogoIcon" /> 
                                <p className="deleteAndUploadPara"> Delete & re-upload </p>
                            </div>

                        </div>

                    </section>
            </Fragment>
        )
    }
}

// Exporting the function 
export default UploadCoverImageComponent; 