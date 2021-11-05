import React from "react";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import { IconButton, TextField } from "@mui/material";
import Info from "@mui/icons-material/Info";
import PopUp from "../../Components/PopUp";

export default class Page2 extends React.Component {
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
                 <div className="questionContainer">
                     <h1> 
                        How do you provide protection from malicious code at appropriate locations within organizational information systems. (Scans, with which product?)
                     </h1>
                     <TextField margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} multiline rows={10} rowsMax={20}/>
                 </div>
                 <div className="back-button-container">
                     <Link to="/si1" style={{ textDecoration: 'none' }}>
                         <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
                     </Link>
                 </div>
                 <div className="button-container">
                     <Link to="/si3" style={{ textDecoration: 'none' }}>
                         <Button className="button" variant="outlined" endIcon={<Send />}> <h3>Next</h3> </Button>        
                     </Link>
                 </div>
            </div>
        );
    }
}