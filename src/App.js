
import './App.css';
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';

function App() {
  return (
    <div className="firstPage">
      <div className="App">
        <h1 className="firstPageTitle"> Gap Analysis Questionnaire </h1>
        <h1 className="firstPageTitle"> Access Control (AC) </h1>
      </div>
      <div className="button-container">
        <Button variant="contained" endIcon={<Send />}> Send </Button>
      </div>
    </div>
  );
}

export default App;
