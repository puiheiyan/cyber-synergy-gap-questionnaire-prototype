import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

export function ACPage3() {
    const [seen, setSeen] = useState(false);
    const [q3, setQ3] = useState("");
    const [q31, setQ31] = useState("");
    const [q32, setQ32] = useState("");
    const [q33, setQ33] = useState("");
  
    const togglePop = () => {
      setSeen(!seen)
    };

    const onChangeQ3 = (e) => {
        setQ3(e);
    }
    
    const onChangeQ31 = (e) => {
        setQ31(e);
    }
    
    const onChangeQ32 = (e) => {
        setQ32(e);
    }
    
    const onChangeQ33 = (e) => {
        setQ33(e);
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
                    3. How do you verify and control/limit connections to and use of external information systems?
                </h1>
                <RadioGroup onChange={ onChangeQ3 } horizontal>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                        <h3> (a) It is not being verified or controlled </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                        <h3> (b) Connections to external information systems are disallowed  </h3>
                    </ReversedRadioButton>
                    <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="c">
                        <h3> (c) Connections to external systems are identified </h3>
                    </ReversedRadioButton>
                </RadioGroup>

                {   q3 === "c" ?
                <div>
                    <h1 className="questionPrompt"> 
                        3.1 If you chose (c) in Question 3, Are the external systems also identified?
                    </h1>
                    <RadioGroup onChange={ onChangeQ31 } horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                            <h3> Yes </h3>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                            <h3> No  </h3>
                        </ReversedRadioButton>
                    </RadioGroup>

                    <h1 className="questionPrompt"> 
                        3.2 If you chose (c) in Question 3, Are the use and connections of external systems verified?
                    </h1>
                    <RadioGroup onChange={ onChangeQ32 } horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                            <h3> Yes </h3>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                            <h3> No  </h3>
                        </ReversedRadioButton>
                    </RadioGroup>
                    
                    <h1 className="questionPrompt"> 
                        3.3 If you chose (c) in Question 3, Are the connections and use of external systems controlled?
                    </h1>
                    <RadioGroup onChange={ onChangeQ33 } horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="yes">
                            <h3> Yes </h3>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="no">
                            <h3> No  </h3>
                        </ReversedRadioButton>
                    </RadioGroup>
                </div>
                : null}
            </div>

            {/* Back and Next Page Navigation */}
            <div className="back-button-container">
                <Link to="/ac2" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                </Link>
            </div>
            <div className="button-container">
                <Link to="/ac4" style={{ textDecoration: 'none' }}>
                    <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                </Link>
            </div>
        </div>
    );
}