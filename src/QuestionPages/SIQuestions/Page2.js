import React, {useState} from "react";
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

export function SIPage2() {
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
                <h1>System and Information Integrity Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1> 
                    [SIQ4] Do you receive an update notification for malicious code protection mechanisms?
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
                    [SIQ5] Do you perform periodic scans of the information system
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
                    [SIQ5.1] If Yes, how often?
                </h1>
                <TextField margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />
                
                <h1> 
                    [SIQ5.2] If yes, is this automatic?
                </h1>
                <RadioGroup onChange={ onChange } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No </h3>
                    </ReversedRadioButton>
                </RadioGroup>
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/si1" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/si3" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}