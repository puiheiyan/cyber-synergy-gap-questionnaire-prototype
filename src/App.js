
import './App.css';
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="firstPage">
      <div className="App">
        <h1 className="firstPageTitle"> Gap Analysis Questionnaire </h1>
        <h1 className="firstPageTitle"> Access Control (AC) </h1>
      </div>
      <div className="button-container">
        <Link to="/page1" style={{ textDecoration: 'none' }}> 
          <Button variant="outlined" endIcon={<Send />}> <h3>Start</h3> </Button>        
        </Link>
      </div>
    </div>
  );
}

export default App;
