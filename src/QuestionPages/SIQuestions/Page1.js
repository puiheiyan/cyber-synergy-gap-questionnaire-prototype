import React, {useState} from "react";
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";

export function SIPage1() {
    const [seen, setSeen] = useState(false);
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    
    const togglePop = () => {
      setSeen(!seen)
    };


    const onChangeQ1 = (e) => {
        setQ1(e.target.value);
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
                <h1>System and Information Integrity Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1> 
                    1. How do you identify, report and correct information system flaws in a timely manner?
                </h1>
                <TextField onChange={ onChangeQ1 } margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />
                
                <h1> 
                    2. How do you provide protection from malicious code at appropriate locations within organizational information systems (Scans, with which product)?
                </h1>
                <TextField onChange={ onChangeQ2 } margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />
                
                <h1> 
                    3. How do you update malicious code protection mechanisms when new releases are available?
                </h1>
                <TextField onChange={ onChangeQ3 } margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />

            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/simenu" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/si2" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}