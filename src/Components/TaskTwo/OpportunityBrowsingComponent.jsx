// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from "@mui/styles"; 
import { ClassNames } from '@emotion/react';

// Creating syles 
const useStyles = makeStyles({
    menuItem: {
        fontSize: "20px", 
    }
})

// Creating the function component 
let OpportunityBrowsingSelectComponent = (props) => {
    // Getting the styles 
    const classes = useStyles(); 

    // Rendering the component 
    return(
        <Fragment> 
            <Box className="selectComponent">
                <FormControl className="selectComponent">
                    <InputLabel style={{
                        color: '##5d5dbb',
                        fontSize: '12px',
                        fontWeight: 'bold', 
                        fontFamily: 'Poppins', 
                        marginBottom: '-30px', 
                    }}> 
                        Opportunity Browsing 
                    </InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className="selectComponent"
                    label="Age"
                    onChange=""
                    >
                        <MenuItem value={1} >
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Applied</p>
                                </div>
                                <div>
                                    <p> 1745 </p>
                                </div>
                            </section>
                        </MenuItem>
                        <MenuItem value={2}>
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Shortlisted </p>
                                </div>
                                <div>
                                    <p> 453 </p>
                                </div>
                            </section>
                        </MenuItem>
                        <MenuItem value={3}>
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Technical Interview </p>
                                </div>
                                <div>
                                    <p> 123 </p>
                                </div>
                            </section>
                        </MenuItem>
                        <MenuItem value={4}>
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Opportunity Browsing </p>
                                </div>
                                <div>
                                    <p> 243 </p>
                                </div>
                            </section>
                        </MenuItem>
                        <MenuItem value={5}>
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Video Interview I </p>
                                </div>
                                <div>
                                    <p> 25 </p>
                                </div>
                            </section>
                        </MenuItem>
                        <MenuItem value={7}>
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Video Interview II </p>
                                </div>
                                <div>
                                    <p> 25 </p>
                                </div>
                            </section>
                        </MenuItem>                        
                        <MenuItem value={8}>
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Video Interview III </p>
                                </div>
                                <div>
                                    <p> 25 </p>
                                </div>
                            </section>
                        </MenuItem>
                        <MenuItem value={9}>
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Offer </p>
                                </div>
                                <div>
                                    <p> 25 </p>
                                </div>
                            </section>
                        </MenuItem>
                        <MenuItem value={10}>
                            <section className="menuItemsInnerDiv">
                                <div>
                                    <p> Withdrawn </p>
                                </div>
                                <div>
                                    <p> 25 </p>
                                </div>
                            </section>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Fragment>
    )
}

// Exporting the opportunity browing component 
export default OpportunityBrowsingSelectComponent; 