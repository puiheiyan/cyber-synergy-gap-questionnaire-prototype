import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

export function ACPage2() {
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
                <h1>Access Control Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1> 
                    [ACQ2] How do you limit information system access to the types of transactions and functions that authorized users are permitted to execute (roles, access privileges)?
                </h1>
                <RadioGroup onChange={ onChange } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> (a) There are no restrictions on access to information systems </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> (b) Transactions and functions authorized users are permitted to execute are defined  </h3>
                    </ReversedRadioButton>
                </RadioGroup>

                <h1> 
                    [ACQ2.1] If you chose (b) in [ACQ2], Is system access limited to the defined transactions and functions for authorized users?
                </h1>
                <RadioGroup onChange={ onChange } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No  </h3>
                    </ReversedRadioButton>
                </RadioGroup>
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/ac1" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/ac3" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}