import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup as RadioGroupButton, ReversedRadioButton } from 'react-radio-buttons';

export function IAPage3() {
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
                    [ACQ6] Can you provide proof that each user can only process only what is required based upon their assigned user role?
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
                    [ACQ6.1] If you pick yes on [ACQ6], please upload proofs here:
                </h1>
                <Button className="uploadButton" variant="outlined" component="label" > <h3>Upload File</h3> <input type="file" accept="image/*,.pdf" hidden /> </Button>

                <h1> 
                    [ACQ7] Are passwords stored in encryption format while at rest?
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
                <Link to="/ia2" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/ia4" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}

