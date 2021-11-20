import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

export function ACPage4() {
    const [seen, setSeen] = useState(false);
    const [q4, setQ4] = useState("");
    const [q41, setQ41] = useState("");
    const [q42, setQ42] = useState("");
  
    const togglePop = () => {
      setSeen(!seen)
    };

    const onChangeQ4 = (e) => {
        setQ4(e);
    }
    const onChangeQ41 = (e) => {
        setQ41(e);
    }
    const onChangeQ42 = (e) => {
        setQ42(e);
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
                <h1>Access Control Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1 className="questionPrompt"> 
                    4. How do you control information posted or processed on publicly accessible information systems?
                </h1>
                <RadioGroup onChange={ onChangeQ4 } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                        <h3> It is not controlled </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                        <h3> Individuals authorized to post information on these systems are identified  </h3>
                    </ReversedRadioButton>
                </RadioGroup>

                {q4 === "b" ?
                <div>
                    <h1 className="questionPrompt"> 
                        4.1 If you chose (b) in Question 4, Are procedures in place for these individuals to verify that the contents of the post do not contain CUI?
                    </h1>
                    <RadioGroup onChange={ onChangeQ41 } horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                            <h3> Yes </h3>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                            <h3> No  </h3>
                        </ReversedRadioButton>
                    </RadioGroup>

                    <h1 className="questionPrompt"> 
                        4.2 If you chose (b) in Question 4, If CUI is posted, are there procedures in place to handle its removal and address its posting?
                    </h1>
                    <RadioGroup onChange={ onChangeQ42 } horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                            <h3> Yes </h3>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                            <h3> No  </h3>
                        </ReversedRadioButton>
                    </RadioGroup>
                </div>
                : null
                }
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/ac3" style={{ textDecoration: 'none' }}>
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