
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import {Link} from 'react-router-dom';
import React from 'react';

export default class SCMenu extends React.Component {
  render() {
      return (
      <div className="firstPage">
        <div className="App">
          <h1 className="MenuTitle"> Gap Analysis Questionnaire </h1>
          <h1 className="MenuTitle"> System and Communications Protection (SC) </h1>
        </div>
        <div className="back-button-container">
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Button className="button" variant="outlined"> <h3>Back</h3> </Button>        
          </Link>
        </div>
        <div className="button-container">
          <Link to="/sc1" style={{ textDecoration: 'none' }}> 
            <Button variant="outlined" endIcon={<Send />}> <h3>Start</h3> </Button>        
          </Link>
        </div>
      </div>
      );
  }
}
