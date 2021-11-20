import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

export function MPPage1() {
    const [seen, setSeen] = useState(false);
    const [q1, setQ1] = useState("");

    const togglePop = () => {
      setSeen(!seen)
    };

    const onChangeQ1 = (e) => {
        setQ1(e);
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
                <h1>Media Protection Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1> 
                    1. Do you have policy or procedure created that would ensure CUI information is identified on any media such as laptops, email addresses, are sanitized prior to reuse? And destroyed appropriately if required?
                </h1>
                <RadioGroup onChange={ onChangeQ1 } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                        <h3> No such policy or procedures are in place </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                        <h3> System media containing Federal Contract information, including CUI as appropriate, is sanitized before reuse, or destroyed and disposed of if necessary  </h3>
                    </ReversedRadioButton>
                </RadioGroup>
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/mpmenu" style={{ textDecoration: 'none' }}>
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