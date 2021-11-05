import React from "react";
import {Link} from "react-router-dom";
import { FormControl, FormControlLabel, RadioGroup, Radio, TextField, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";

export default class Page3 extends React.Component {
    state = {
      seen: false
    };
  
    togglePop = () => {
      this.setState({
        seen: !this.state.seen
      });
    };
    
    render() {
        return (
            <div>
                {/* Information of the questions */}
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
                <div className="infoButton">
                    <IconButton color="primary" onClick={this.togglePop}>
                        <Info fontSize="large"/>
                    </IconButton>
                </div>

                {/* Questions of the page */}
                <div className="questionContainer">
                    <h1> 
                        What is the organization password complexity?
                    </h1>
                    <TextField margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />

                    <h1> 
                        Does the organization defines requirements for numbers of characters?
                    </h1>
                    <FormControl className="FormControl" component="fieldset">
                        <RadioGroup defaultValue="Yes" aria-label="radio" name="customized-radios">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <h1> 
                        Does the organization defines requirements for the mix of upper-case letters, lower-case letters, numbers and special characters?
                    </h1>
                    <FormControl className="FormControl" component="fieldset">
                        <RadioGroup defaultValue="Yes" aria-label="radio" name="customized-radios">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                {/* Back and Next Page Navigation */}
                <div className="back-button-container">
                    <Link to="/ia2" style={{ textDecoration: 'none' }}>
                        <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                    </Link>
                </div>
                <div className="button-container">
                    <Link to="/ia4" style={{ textDecoration: 'none' }}>
                        <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                    </Link>
                </div>
            </div>
        );
    }
}