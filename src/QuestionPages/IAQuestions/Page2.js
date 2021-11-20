import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup as RadioGroupButton, RadioButton, ReversedRadioButton } from 'react-radio-buttons';

export function IAPage2() {
    const [seen, setSeen] = useState(false);
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");
    const [q51, setQ51] = useState("");
  
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
        setQ5(e.target.value);
        console.log(e);
        console.log(e.target.value);
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
                    4. Which of the following are identified by your system?
                </h1>
                <RadioGroupButton onChange={ onChangeQ4 } horizontal>
                    <RadioButton rootColor="black" pointColor="#60a44c" value="a">
                        <h3> Internal Users and processes acting on behalf of them </h3>
                    </RadioButton>
                    <RadioButton rootColor="black" pointColor="#60a44c" value="b">
                        <h3> Internal devices  </h3>
                    </RadioButton>
                    <RadioButton rootColor="black" pointColor="#60a44c" value="melcon">
                        <h3> External users and processes acting on behalf of them </h3>
                    </RadioButton>
                    <RadioButton rootColor="black" pointColor="#60a44c" value="d">
                        <h3> External devices </h3>
                    </RadioButton>
                    <RadioButton rootColor="black" pointColor="#60a44c" value="e">
                        <h3> None of the above </h3>
                    </RadioButton>
                </RadioGroupButton>

                <h1 className="questionPrompt"> 
                    5. Can you provide proof that each user is authenticated and privileged pior to logging?
                </h1>
                <RadioGroupButton onChange={ onChangeQ5 } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h2> Yes </h2>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h2> No  </h2>
                    </ReversedRadioButton>
                </RadioGroupButton>

                {   q5 === "yes" ?
                    <div>
                        <h1 className="questionPrompt">
                            5.1. If you pick yes on Question 5, please upload proofs here:
                        </h1>
                        <Button className="uploadButton" onChange={ onChangeQ51 } variant="outlined" component="label" > <h3>Upload File</h3> <input type="file" accept="image/*,.pdf" hidden /> </Button>
                    </div>
                    : null
                }

            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/ia1" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/ia3" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}

