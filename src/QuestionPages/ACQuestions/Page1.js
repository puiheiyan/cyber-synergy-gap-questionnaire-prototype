import React, {useState} from "react";
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
    // const [answer, setAnswer] = useState({
    //     acq1: "",
    //     acq11: "",
    //     acq12: "",
    //     acq13: ""
    // });
  
    const togglePop = () => {
      setSeen(!seen);
    };
    
    return (
        <div>            
            {/* If the information icon on the top right is clicked, it will popup div with class infoButton */}
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
                    [ACQ1] How do you limit information system access to authorized users, processes acting on behalf of users, or devices (including other information systems)?
                </h1>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(a) Authorized users are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(b) Processes acting on behalf of authorized users are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(c) Authorized devices are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                    <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{ "(d) None of the above" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>             
                </FormGroup>

                <h1>
                    [ACQ1.1] If you chose (c) in [ACQ1], is access limited to the identified parties?
                </h1>
                <RadioGroup horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No  </h3>
                    </ReversedRadioButton>
                </RadioGroup>
                
                <h1> 
                    [ACQ1.2] If you chose (d) in [ACQ1], Do you have an SOP defining roles/responsibilities of your system access?
                </h1>
                <RadioGroup horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                        <h3> Yes </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                        <h3> No  </h3>
                    </ReversedRadioButton>
                </RadioGroup>

                <h1> 
                    [ACQ1.3]  If you chose (d) in [ACQ1], How are your user accounts managed or created?
                </h1>
                <TextField margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />

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