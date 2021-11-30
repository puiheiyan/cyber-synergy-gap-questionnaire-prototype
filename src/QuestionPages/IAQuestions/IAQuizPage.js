import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import { RadioGroup, ReversedRadioButton, RadioButton  } from 'react-radio-buttons';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import Send from '@mui/icons-material/Send';

const getAnswer = async (uid, qid) => {
    const res = await axios.get(`http://localhost:4001/clients/answered/${uid}&${qid}`);
    if (res === null) return res;
    return res.data.answer;
}

export function IAQuizPage(props) {
    // Prompt of the questions
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');   
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    const [question51, setQuestion51] = useState('');
    const [question6, setQuestion6] = useState('');
    const [question61, setQuestion61] = useState('');
    const [question7, setQuestion7] = useState('');
    const [question8, setQuestion8] = useState('');
    const [question81, setQuestion81] = useState('');

    // Getting user from the local storage
    const saved = localStorage.getItem("user");
    const storedUser = JSON.parse(saved);

    // Storing the user-entered information
    const [seen, setSeen] = useState(false);
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');
    const [q51, setQ51] = useState('');
    const [file51, setFile51] = useState(null);
    const [q6, setQ6] = useState('');
    const [q61, setQ61] = useState('');
    const [file61, setFile61] = useState(null);
    const [q7, setQ7] = useState('');
    const [q8, setQ8] = useState('');
    const [q81, setQ81] = useState('');

    useEffect(() => {
        async function fetchQuestion() {
            if (storedUser === null) return;
            const questionData = await axios.get(`http://localhost:4001/clients`);
            const allQuestions = questionData.data;
            const arr = [];
            for (let i = 0; i < allQuestions.length; i++) {
                if (allQuestions[i].category === 'IA') {
                    arr.push(allQuestions[i]);
                }
            }
            setQuestion1(arr[0].question);
            setQuestion2(arr[1].question);
            setQuestion3(arr[2].question);
            setQuestion4(arr[3].question);
            setQuestion5(arr[4].question);
            setQuestion51(arr[5].question);
            setQuestion6(arr[6].question);
            setQuestion61(arr[7].question);
            setQuestion7(arr[8].question);
            setQuestion8(arr[9].question);
            setQuestion81(arr[10].question);
        }
        async function fetchAnswer() {
            if (storedUser === null) return;
            const Q1Answer = await getAnswer(storedUser.id, 1.076);
            setQ1(Q1Answer);
            const Q2Answer = await getAnswer(storedUser.id, 1.0761);
            setQ2(Q2Answer);
            const Q3Answer = await getAnswer(storedUser.id, 1.0762);
            setQ3(Q3Answer);
            const Q4Answer = await getAnswer(storedUser.id, 1.077);
            setQ4(Q4Answer);
            const Q5Answer = await getAnswer(storedUser.id, 1.077011);
            setQ5(Q5Answer);
            //const Q51Answer = await getAnswer(storedUser.id, 1.0771);
            //setQ51(Q51Answer);
            const Q6Answer = await getAnswer(storedUser.id, 1.077111);
            setQ6(Q6Answer);
            //const Q61Answer = await getAnswer(storedUser.id, 1.0772);
            //setQ61(Q61Answer);
            const Q7Answer = await getAnswer(storedUser.id, 1.0773);
            setQ7(Q7Answer);
            const Q8Answer = await getAnswer(storedUser.id, 1.0773);
            setQ8(Q8Answer);
            const Q81Answer = await getAnswer(storedUser.id, 1.077311);
            setQ81(Q81Answer);
        }
        fetchQuestion();
        fetchAnswer();
    }, []);

    const togglePop = () => {
      setSeen(!seen);
    };

    const onChangeQ1 = (e) => {
        setQ1(e);
    }

    const onChangeQ2 = (e) => {
        setQ2(e.target.value);
    }

    const onChangeQ3 = (e) => {
        setQ3(e.target.value);
    }

    const onChangeQ4 = (e) => {
        setQ4(e);
    }
    const onChangeQ5 = (e) => {
        setQ5(e);
    }
    // File Handling
    const onChangeQ51 = (e) => {
        setFile51(e.target.files[0]);
        const file = new FormData();
        file.append("File51", file51, file51.name);
    }
    const onChangeQ6 = (e) => {
        setQ6(e);
    }
    // File Handling
    const onChangeQ61 = (e) => {
        setFile61(e.target.files[0]);
        const file = new FormData();
        file.append("File61", file61, file61.name);
    }
    const onChangeQ7 = (e) => {
        setQ7(e);
    }
    const onChangeQ8 = (e) => {
        setQ8(e);
    }
    const onChangeQ81 = (e) => {
        setQ81(e);
    }
    
    // Submit the stored information to the backend
    const handleSubmit = async () => { 
        const id = storedUser.id;
        
    }

    return (
        <form onSubmit={handleSubmit} >
            {seen ? <PopUp toggle={togglePop} content="This is some info about Identification and Authentication"/> : null}
            <div className="infoButton">
                <IconButton color="primary" onClick={togglePop}>
                    <Info fontSize="large"/>
                </IconButton>
            </div>
            <div className="backgroundDiv">
                <div className="top">
                    <h1>Identification and Authentication</h1>
                </div>
                <div className="submit-button-container">       
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <Button onClick={handleSubmit} className="button" variant="outlined" endIcon={<Send />}> Submit </Button>        
                    </Link>
                </div>
                <div className="ScrollingDiv">
                    <div>
                        <h3>1. {question1} </h3>
                        <RadioGroup horizontal onChange={onChangeQ1} value={q1}>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                <h4> Internal Devices </h4>
                            </ReversedRadioButton>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                <h4> Internal and External Devices  </h4>
                            </ReversedRadioButton>
                        </RadioGroup>
                    </div>

                    <h3> 2. {question2} </h3>
                    <TextField value={q2} onChange={onChangeQ2} margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />

                    <h3> 3. {question3} </h3>
                    <TextField value={q3} onChange={onChangeQ3} margin="normal" className="textArea" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 25}}} />

                    <h3>  4. {question4} </h3>
                    <RadioGroup onChange={ onChangeQ4 } value={q4} horizontal>
                        <RadioButton rootColor="black" pointColor="#60a44c" value="a">
                            <h4> Internal Users and processes acting on behalf of them </h4>
                        </RadioButton>
                        <RadioButton rootColor="black" pointColor="#60a44c" value="b">
                            <h4> Internal devices  </h4>
                        </RadioButton>
                        <RadioButton rootColor="black" pointColor="#60a44c" value="c">
                            <h4> External users and processes acting on behalf of them </h4>
                        </RadioButton>
                        <RadioButton rootColor="black" pointColor="#60a44c" value="d">
                            <h4> External devices </h4>
                        </RadioButton>
                        <RadioButton rootColor="black" pointColor="#60a44c" value="e">
                            <h4> None of the above </h4>
                        </RadioButton>
                    </RadioGroup>

                    <h3>  5. {question5} </h3>
                    <RadioGroup onChange={ onChangeQ5 } value={q5} horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                            <h4> Yes </h4>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                            <h4> No  </h4>
                        </ReversedRadioButton>
                    </RadioGroup>

                    <div>
                        <h3> 5.1. {question51} </h3>
                        <h5> {file51 ? file51.name : "No file Chosen."} </h5>
                        <Button onChange={onChangeQ51} className="uploadButton" variant="outlined" component="label" > <h4>Choose File</h4> <input type="file" accept="image/*,application/pdf" hidden /> </Button>
                    </div>

                    <h3> 6. {question6} </h3>
                    <RadioGroup onChange={ onChangeQ6 } value={q6} horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                            <h2> Yes </h2>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                            <h2> No  </h2>
                        </ReversedRadioButton>
                    </RadioGroup>

                    {   q6 === "a" ?
                        <div>
                            <h3> 6.1. {question61} </h3>
                            <h5> {file61 ? file61.name : "No file Chosen."} </h5>
                            <Button onChange={onChangeQ61} className="uploadButton" variant="outlined" component="label" > <h4>Choose File</h4> <input type="file" accept="image/*,application/pdf" hidden /> </Button>
                        </div>
                        : null
                    }

                    <h3> 7. {question7} </h3>
                    <RadioGroup onChange={ onChangeQ7 } value={q7} horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                            <h4> Yes </h4>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                            <h4> No  </h4>
                        </ReversedRadioButton>
                    </RadioGroup>

                    <h3> 8. {question8} </h3>
                    <RadioGroup onChange={ onChangeQ8 } value={q8} horizontal>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                            <h4> Yes </h4>
                        </ReversedRadioButton>
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                            <h4> No  </h4>
                        </ReversedRadioButton>
                    </RadioGroup>
                    
                    { q8 === "a" ?
                        <div>
                            <h3> 8.1. {question81} </h3>
                            <RadioGroup onChange={ onChangeQ81 } value={q81} horizontal>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>
                        </div>
                        : null
                    }

                    <div className="bottomPadding"/>
                </div>
            </div>
        </form>
    );
}