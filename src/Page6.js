import React from "react";
import {Link} from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import PopUp from "./Components/PopUp";
import Info from "@mui/icons-material/Info";

 export default class Page6 extends React.Component {
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
                        End of Level 1!
                    </h1>
                </div>
                <div className="back-button-container">
                    <Link to="/page5">
                        <Button className="button" variant="contained"> Back </Button>        
                    </Link>
                </div>
            </div>
        );
    }
}