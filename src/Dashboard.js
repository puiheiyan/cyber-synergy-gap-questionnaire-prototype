
import './Dashboard.css';
import React from 'react';
import Pie from './Components/Pie';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";



const GenerateColorFromPercentage = (percentage) => {
  if (percentage < 15) {
    return '#FF0000';
  } else if (percentage < 35) {
    return '#FFA500';
  }  else if (percentage < 50) {
    return '#FFFF00';
  }  else if (percentage < 75) {
    return '#90EE90';
  } else {
    return '#66FF00';
  } 
}

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      level : 1
    };
    this.handleLevel = this.handleLevel.bind(this); 
  }

  handleLevel(event) {
    this.setState({ level : event.target.value });
  }

  render() {
      return (
        <>
        {/* Level Dropdown Menu */}
        <div className="DropDown">
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.level}
              onChange={this.handleLevel}
              label="Level"
            >
              <MenuItem value={1}> 1 </MenuItem>
              <MenuItem value={2}> 2 </MenuItem>
              <MenuItem value={3}> 3 </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="pie-container">
          <div className="progress-bar">
            <Link to='/acmenu'>
              <Pie percentage={95} colour={GenerateColorFromPercentage(95)} />
            </Link>
            <h1><b> AC </b></h1>
          </div>
          <div className="progress-bar">
            <Link to='/iamenu'>
              <Pie percentage={80} colour={GenerateColorFromPercentage(80)} />
            </Link>
            <h1><b> IA </b></h1>
          </div>
          <div className="progress-bar">
            <Link to='/mpmenu'>
              <Pie percentage={60} colour={GenerateColorFromPercentage(60)} />
            </Link>
            <h1><b> MP </b></h1>
          </div>
          <div className="progress-bar">
            <Link to='/pemenu'>
              <Pie percentage={70} colour={GenerateColorFromPercentage(70)} />
            </Link>
            <h1><b> PE </b></h1>
          </div>
          <div className="progress-bar">
            <Link to='/scmenu'>
              <Pie percentage={40} colour={GenerateColorFromPercentage(40)} />
            </Link>
            <h1><b> SC </b></h1>
          </div>
          <div className="progress-bar">
            <Link to='/simenu'>
              <Pie percentage={8} colour={GenerateColorFromPercentage(8)} />
            </Link>
            <h1><b> SI </b></h1>
          </div>
        </div>
      </>
      );
  }
}
