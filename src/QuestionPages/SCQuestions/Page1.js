import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export function SCPage1() {
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
                <h1>System and Communications Protection Questions</h1>
            </div>

            {/* Questions of the page */}
            <div className="questionContainer">
                <h1> 
                    [SCQ1] Is the external system boundary defined?
                </h1>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(a) Communications are monitored at the external system boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(b) Communications are controlled at the external system boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(c) Communications are protected at the external system boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(d) None of the above" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>             
                </FormGroup>
                
                <h1> 
                    [SCQ2] Are the key internal system boundaries defined?
                </h1>
                <RadioGroup onChange={ onChange } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No  </h3>
                    </ReversedRadioButton>
                </RadioGroup>
                
                <h1> 
                    If you chose Yes in [SCQ2]; Are the key internal system boundaries defined?
                </h1>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(a) Communications are monitored at the key internal boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(b) Communications are controlled at the key internal boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(c) Communications are protected at the key internal boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(d) None of the above" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>             
                </FormGroup>
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/scmenu" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/sc2" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}