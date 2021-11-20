import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

export function ACPage1() {
    const [seen, setSeen] = useState(false);
    const [q1o1, setQ1o1] = useState(false);
    const [q1o2, setQ1o2] = useState(false);
    const [q1o3, setQ1o3] = useState(false);
    const [q1o4, setQ1o4] = useState(false);
    const [q11, setQ11] = useState('');
    const [q12, setQ12] = useState('');
    const [q13, setQ13] = useState('');


    useEffect(() => {
        console.log("Question 1");
        console.log('option a: ', q1o1);
        console.log('option b', q1o2);
        console.log('option c', q1o3);
        console.log('option d', q1o4);
        console.log("Question 1.1: ", q11);
        console.log("Question 1.2: ", q12);
        console.log("Question 1.3: ", q13);
      }, [q1o1, q1o2, q1o3, q1o4, q11, q12, q13]);
    
    const togglePop = () => {
      setSeen(!seen);
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

    const handleChangeq11 = (e) => {
        setQ11(e);
    }
    
    const handleChangeq12 = (e) => {
        setQ12(e);
    }
    
    const handleChangeq13 = (e) => {
        setQ13(e.target.value);
    }

    return (
        <div>            
            {/* If the information icon on the top right is clicked, it will popup div with class infoButton */}
            {seen ? <PopUp toggle={togglePop} content="This is some info about Access Control questions"/> : null}
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
                    1. How do you limit information system access to authorized users, processes acting on behalf of users, or devices (including other information systems)?
                </h1>
                <h2> 
                    Select all that applies.
                </h2>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={q1o1} onChange={handleChangeq1o1}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(a) Authorized users are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                    <FormControlLabel control={<Checkbox checked={q1o2} onChange={handleChangeq1o2}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(b) Processes acting on behalf of authorized users are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                    <FormControlLabel control={<Checkbox checked={q1o3} onChange={handleChangeq1o3}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(c) Authorized devices are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                    <FormControlLabel control={<Checkbox checked={q1o4} onChange={handleChangeq1o4}/>} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(d) None of the above" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>             
                </FormGroup>

                {q1o3 ? <div>
                    <h1 className="questionPrompt">
                        1.1 If you choose (c) in Question 1, Is access limited to the identified parties?
                    </h1>
                    <RadioGroup horizontal onChange={handleChangeq11}>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                            <h3> Yes </h3>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                            <h3> No  </h3>
                        </ReversedRadioButton>
                    </RadioGroup>
                </div> : null}
                
                {q1o4 ? <div>
                    <h1 className="questionPrompt"> 
                        1.2. If you choose (d) in Question 1, Do you have an SOP defining roles/responsibilities of your system access?
                    </h1>
                    <RadioGroup horizontal onChange={handleChangeq12}>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                            <h3> Yes </h3>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                            <h3> No  </h3>
                        </ReversedRadioButton>
                    </RadioGroup>
                    <h1 className="questionPrompt"> 
                        1.3.  If you chose (d) in Question 1, How are your user accounts managed or created?
                    </h1>
                    <TextField value={q13} onChange={handleChangeq13} margin="normal" variant="outlined" label="Question 1.3" className="textArea" inputProps={{style: {fontSize: 25}}}/>
                </div> : null}
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/acmenu" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/ac2" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}