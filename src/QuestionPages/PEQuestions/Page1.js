import React, {useState} from "react";
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

export function PEPage1() {
    const [seen, setSeen] = useState(false);
  
    const togglePop = () => {
      setSeen(!seen)
    };

    const onChange = () => {

    }
    
    return (
        <div>
            {/* Information of the questions */}
            {seen ? <PopUp toggle={togglePop} /> : null}
            <div className="infoButton">
                <IconButton color="primary" onClick={togglePop}>
                    <Info fontSize="large"/>
                </IconButton>
            </div>

            {/*Top part to show what type of question is being asked*/}

            <div className="top">
                <h1>Physical Protection Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1> 
                    [PEQ1] Do you have mechanism in place to limit physical access to organizational information systems, equipment, and the respective operating environments to authorized individuals? If so what are they?
                </h1>
                <TextField margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />
                
                <h1> 
                    [PEQ2] For visitors entering your workplace do you provide escorts and are their activity and access monitored at all times?
                </h1>
                <RadioGroup onChange={ onChange } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No  </h3>
                    </ReversedRadioButton>
                </RadioGroup>
                
                <h1> 
                    [PEQ3] Do you maintain a visitor Log and is it updated and maintained regularly? (may need document)
                </h1>
                <RadioGroup onChange={ onChange } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No </h3>
                    </ReversedRadioButton>
                </RadioGroup>
                
                <h1> 
                    [PEQ3.1] If you answered yes on [PEQ3], please provide documents below:
                </h1>
                <Button className="uploadButton" variant="outlined" component="label" > <h3>Upload File</h3> <input type="file" accept="image/*,.pdf" hidden /> </Button>

            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/pemenu" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/pe2" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}