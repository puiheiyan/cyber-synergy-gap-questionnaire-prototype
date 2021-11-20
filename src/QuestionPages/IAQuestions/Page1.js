import React, {useState} from "react";
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup as RadioGroupButton, ReversedRadioButton } from 'react-radio-buttons';

export function IAPage1() {
    const [seen, setSeen] = useState(false);
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
  
    const togglePop = () => {
      setSeen(!seen)
    };

    const onChangeQ1 = (e) => {
        setQ1(e);
    }
    const onChangeQ2 = (e) => {
        setQ2(e.target.value);
    }
    const onChangeQ3 = (e) => {
        setQ3(e.target.value);
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
                <h1>Identification and Authentication Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1 className="questionPrompt"> 
                    1. Which of the following are identified by your system?
                </h1>
                <RadioGroupButton onChange={ onChangeQ1 } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                        <h3> Internal devices </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                        <h3> Internal and external devices  </h3>
                    </ReversedRadioButton>
                </RadioGroupButton>

                <h1 className="questionPrompt"> 
                    2. How are users in your organization uniquely identified?
                </h1>
                <TextField onChange={onChangeQ2} margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />

                <h1 className="questionPrompt">
                    3. What device types in the system require authentication before establishing connection to your system?
                </h1>
                <TextField onChange={onChangeQ3} margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/iamenu" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/ia2" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}