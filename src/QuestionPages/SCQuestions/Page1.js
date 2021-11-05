import React from "react";
import {Link} from "react-router-dom";
import { FormControl, FormControlLabel, RadioGroup, Radio, IconButton, Button } from "@mui/material";
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";

export default class Page1 extends React.Component {
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
                        Do you have implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks. (separation of public access from internal user access)
                    </h1>
                    <h1>[a] publically accessible system components are identified</h1>
                    <FormControl className="FormControl" component="fieldset">
                        <RadioGroup defaultValue="Yes" aria-label="radio" name="customized-radios">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <h1>[b] subnetworks for publicly accessible system components are physically or logically separated from internal networks </h1>
                    <FormControl className="FormControl" component="fieldset">
                        <RadioGroup defaultValue="Yes" aria-label="radio" name="customized-radios">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

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
}