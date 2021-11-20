import React, {useState} from "react";
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";

export function PEPage2() {
    const [seen, setSeen] = useState(false);
    const [q4, setQ4] = useState("");

    const togglePop = () => {
      setSeen(!seen)
    };

    const onChangeQ4 = (e) => {
        setQ4(e.target.value);
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
                <h1>Physical Protection Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1> 
                    4. How do you limit information system access to types of transactions and functions that authorized users are permitted to execute? (role, access privileges )
                </h1>
                <TextField onChange={onChangeQ4} margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} multiline rows={10} rowsMax={20}/>
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/pe1" style={{ textDecoration: 'none' }}>
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