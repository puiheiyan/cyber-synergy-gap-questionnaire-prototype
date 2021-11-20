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
    const [q1o1, setQ1o1] = useState(false);
    const [q1o2, setQ1o2] = useState(false);
    const [q1o3, setQ1o3] = useState(false);
    const [q1o4, setQ1o4] = useState(false);
    const [q2, setQ2] = useState("");
    const [q21o1, setQ21o1] = useState(false);
    const [q21o2, setQ21o2] = useState(false);
    const [q21o3, setQ21o3] = useState(false);
    const [q21o4, setQ21o4] = useState(false);

    const togglePop = () => {
      setSeen(!seen)
    };

    const handleChangeq1o1 = (e) => {
        if (q1o1 === true) {
            setQ1o1(false);
        } else {
            setQ1o1(true);
            setQ1o4(false);
        }
    }
    const handleChangeq1o2 = (e) => {
        if (q1o2 === true) {
            setQ1o2(false);
        } else {
            setQ1o2(true);
            setQ1o4(false);
        }
    }
    const handleChangeq1o3 = (e) => {
        if (q1o3 === true) {
            setQ1o3(false);
        } else {
            setQ1o3(true);
            setQ1o4(false);
        }
    }
    const handleChangeq1o4 = (e) => {
        if (q1o4 === true) {
            setQ1o4(false);
        } else {
            setQ1o4(true);
            setQ1o3(false);
            setQ1o2(false);
            setQ1o1(false);
        }
    }

    const onChangeQ2 = (e) => {
        setQ2(e);
    }

    const handleChangeq21o1 = (e) => {
        if (q21o1 === true) {
            setQ21o1(false);
        } else {
            setQ21o1(true);
            setQ21o4(false);
        }
    }
    const handleChangeq21o2 = (e) => {
        if (q21o2 === true) {
            setQ21o2(false);
        } else {
            setQ21o2(true);
            setQ21o4(false);
        }
    }
    const handleChangeq21o3 = (e) => {
        if (q21o3 === true) {
            setQ21o3(false);
        } else {
            setQ21o3(true);
            setQ21o4(false);
        }
    }
    const handleChangeq21o4 = (e) => {
        if (q21o4 === true) {
            setQ21o4(false);
        } else {
            setQ21o4(true);
            setQ21o3(false);
            setQ21o2(false);
            setQ21o1(false);
        }
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
                <h1 className="questionPrompt"> 
                    1. Is the external system boundary defined?
                </h1>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={q1o1} onChange={handleChangeq1o1}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(a) Communications are monitored at the external system boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox checked={q1o2} onChange={handleChangeq1o2}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(b) Communications are controlled at the external system boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox checked={q1o3} onChange={handleChangeq1o3}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(c) Communications are protected at the external system boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                    <FormControlLabel control={<Checkbox checked={q1o4} onChange={handleChangeq1o4}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(d) None of the above" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>             
                </FormGroup>
                
                <h1 className="questionPrompt"> 
                    2. Are the key internal system boundaries defined?
                </h1>
                <RadioGroup onChange={ onChangeQ2 } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No  </h3>
                    </ReversedRadioButton>
                </RadioGroup>
                
                {q2 === "yes" ?
                <div>
                    <h1 className="questionPrompt"> 
                        2.1. If you choose Yes in Question 2; Are the key internal system boundaries defined?
                    </h1>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={q21o1} onChange={handleChangeq21o1}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(a) Communications are monitored at the key internal boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                        <FormControlLabel control={<Checkbox checked={q21o2} onChange={handleChangeq21o2}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(b) Communications are controlled at the key internal boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                        <FormControlLabel control={<Checkbox checked={q21o3} onChange={handleChangeq21o3}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(c) Communications are protected at the key internal boundary" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
                        <FormControlLabel control={<Checkbox checked={q21o4} onChange={handleChangeq21o4}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(d) None of the above" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>             
                    </FormGroup>
                </div>
                : null
                }
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