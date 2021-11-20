import React, {useState} from "react";
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

export function SIPage2() {
    const [seen, setSeen] = useState(false);
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");
    const [q51, setQ51] = useState("");
    const [q52, setQ52] = useState("");
    const togglePop = () => {
      setSeen(!seen)
    };

    const onChangeQ4 = (e) => {
        setQ4(e);
    }
    const onChangeQ5 = (e) => {
        setQ5(e);
    }
    const onChangeQ51 = (e) => {
        setQ51(e.target.value);
    }
    const onChangeQ52 = (e) => {
        setQ52(e);
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
                    4. Do you receive an update notification for malicious code protection mechanisms?
                </h1>
                <RadioGroup onChange={ onChangeQ4 } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No  </h3>
                    </ReversedRadioButton>
                </RadioGroup>
                
                <h1> 
                    5. Do you perform periodic scans of the information system
                </h1>
                <RadioGroup onChange={ onChangeQ5 } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No </h3>
                    </ReversedRadioButton>
                </RadioGroup>

                {q5 === "yes" ?
                    <div>
                        <h1> 
                            5.1. If you choose Yes in Question 5, How often?
                        </h1>
                        <TextField onChange={ onChangeQ51 } margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />
                        
                        <h1> 
                            5.2. If you choose Yes in Question 5, Is this automatic?
                        </h1>
                        <RadioGroup onChange={ onChangeQ52 } horizontal>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                                <h3> Yes </h3>
                            </ReversedRadioButton>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                                <h3> No </h3>
                            </ReversedRadioButton>
                        </RadioGroup>
                    </div>
                    : null
                }
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