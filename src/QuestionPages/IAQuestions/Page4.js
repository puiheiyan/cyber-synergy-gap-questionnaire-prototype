import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup as RadioGroupButton, ReversedRadioButton } from 'react-radio-buttons';

export function IAPage4() {
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
                <h1>Identification and Authentication Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1> 
                    [ACQ8] Do you have any device external or internal accessing your system?
                </h1>
                <RadioGroupButton onChange={ onChange } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h2> Yes </h2>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h2> No  </h2>
                    </ReversedRadioButton>
                </RadioGroupButton>
                
                <h1> 
                    [ACQ8.1] If you answered yes on [ACQ8], are these devices authenticated prior to being given system access?
                </h1>
                <RadioGroupButton onChange={ onChange } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h2> Yes </h2>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h2> No  </h2>
                    </ReversedRadioButton>
                </RadioGroupButton>
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/ia3" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}

