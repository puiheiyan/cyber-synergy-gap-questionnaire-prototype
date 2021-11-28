
import './Dashboard.css';
import React, {useState, useEffect, useContext} from 'react';
import Pie from './Components/Pie';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from '@mui/material/Button';
import axios from 'axios';

export function Dashboard(props) {
  const [level, setLevel] = useState(1);
  const [acPercentage, setAcPercentage] = useState(0);
  const [iaPercentage, setIaPercentage] = useState(0);
  const [mpPercentage, setMpPercentage] = useState(0);
  const [pePercentage, setPePercentage] = useState(0);
  const [scPercentage, setScPercentage] = useState(0);
  const [siPercentage, setSiPercentage] = useState(0);
  const saved = localStorage.getItem("user");
  const storedUser = JSON.parse(saved);
  
  const retrievePercentage = async (category, level, user_id) => {
    const res = await axios.get(`http://localhost:4001/clients/correctness/${category}&${level}&${user_id}`);
    return res.data.percent;
  }

  useEffect(() => {
    async function fetchMyAPI() {
      const id = storedUser.id;
      console.log(id);
      const acPercent = await retrievePercentage("AC", 1, id);
      const iaPercent = await retrievePercentage("IA", 1, id);
      const mpPercent = await retrievePercentage("MP", 1, id);
      const pePercent = await retrievePercentage("PE", 1, id);
      const scPercent = await retrievePercentage("SC", 1, id);
      const siPercent = await retrievePercentage("SI", 1, id);
      setAcPercentage(acPercent);
      setIaPercentage(iaPercent);
      setMpPercentage(mpPercent);
      setPePercentage(pePercent);
      setScPercentage(scPercent);
      setSiPercentage(siPercent);
    }
    fetchMyAPI()
  }, [])

  const GenerateColorFromPercentage = (percentage) => {
    if (percentage < 15) {
      return '#FF0000';
    } else if (percentage < 35) {
      return '#FFAB35';
    }  else if (percentage < 50) {
      return '#CCC72B';
    }  else if (percentage < 70) {
      return '#AAFF00';
    }  else if (percentage < 85) {
      return '#4DE800';
    } else {
      return '#47D13D';
    } 
  }

  const handleLevel = (event) => {
    setLevel(event.target.value);
  }

  return (
    <>
    {/* Level Dropdown Menu */}
    <div className="DropDown">
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          onChange={handleLevel}
          label="Level"
        >
          <MenuItem value={1}> 1 </MenuItem>
          <MenuItem value={2}> 2 </MenuItem>
          <MenuItem value={3}> 3 </MenuItem>
        </Select>
      </FormControl>
    </div>
    {/* List of progress bars that tracks the progress of each user */}
    <div className="pie-container">
      <div className="progress-bar">
        <Link to='/acmenu'>
          <Pie percentage={acPercentage} colour={GenerateColorFromPercentage(acPercentage)} />
        </Link>
        <h1><b> AC </b></h1>
      </div>
      <div className="progress-bar">
        <Link to='/iamenu'>
          <Pie percentage={iaPercentage} colour={GenerateColorFromPercentage(iaPercentage)} />
        </Link>
        <h1><b> IA </b></h1>
      </div>
      <div className="progress-bar">
        <Link to='/mpmenu'>
          <Pie percentage={mpPercentage} colour={GenerateColorFromPercentage(mpPercentage)} />
        </Link>
        <h1><b> MP </b></h1>
      </div>
      <div className="progress-bar">
        <Link to='/pemenu'>
          <Pie percentage={pePercentage} colour={GenerateColorFromPercentage(pePercentage)} />
        </Link>
        <h1><b> PE </b></h1>
      </div>
      <div className="progress-bar">
        <Link to='/scmenu'>
          <Pie percentage={scPercentage} colour={GenerateColorFromPercentage(scPercentage)} />
        </Link>
        <h1><b> SC </b></h1>
      </div>
      <div className="progress-bar">
        <Link to='/simenu'>
          <Pie percentage={siPercentage} colour={GenerateColorFromPercentage(siPercentage)} />
        </Link>
        <h1><b> SI </b></h1>
      </div>
    </div>
    <Link to="/admin">
      <Button>Go to admin page</Button>
    </Link>
    <Link to="/acquizpage">
      <Button>Go to test ac quiz page</Button>
    </Link>
  </>
  );
}
