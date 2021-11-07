import React from "react";
import {Link} from "react-router-dom";
import { FormControl, FormControlLabel, RadioGroup, Radio, TextField, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";

export default class Page5 extends React.Component {
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
                        Do you receive information system security alerts from organizations like CERT?
                    </h1>
                    <FormControl className="FormControl" component="fieldset">
                        <RadioGroup defaultValue="Yes" aria-label="radio" name="customized-radios">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <h1> 
                        Do you generate and reiterate these alerts internally for situational awareness?
                    </h1>
                    <FormControl className="FormControl" component="fieldset">
                        <RadioGroup defaultValue="Yes" aria-label="radio" name="customized-radios">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    
                    <h1> 
                        Who by name or role is identified to receive these alerts and advisories?
                    </h1>
                    <TextField margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />
                    <h1> 
                        How often are these security alerts sent out?
                    </h1>
                    <TextField margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />

                </div>

                {/* Back and Next Page Navigation */}
                <div className="back-button-container">
                    <Link to="/si4" style={{ textDecoration: 'none' }}>
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
}