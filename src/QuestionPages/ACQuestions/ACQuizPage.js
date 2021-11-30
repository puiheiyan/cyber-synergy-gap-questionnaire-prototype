import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import { TextField, IconButton, Button } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import PopUp from "../../Components/PopUp";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const getAnswer = async (token, qid) => {
    let config = {
        headers: {
            "x-access-token": token,
        }
    }

    const res = await axios.get(`http://localhost:4001/clients/answered/${qid}`, config);
    if (res === null) return res;
    return res.data.answer;
}

export function ACQuizPage(props) {
    const [loading, setLoading] = useState(false);
    // Prompt of the questions
    const [question1, setQuestion1] = useState('');
    const [question11, setQuestion11] = useState('');
    const [question12, setQuestion12] = useState('');   
    const [question13, setQuestion13] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question21, setQuestion21] = useState('');
    const [question3, setQuestion3] = useState('');
    const [question31, setQuestion31] = useState('');
    const [question32, setQuestion32] = useState('');
    const [question33, setQuestion33] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question41, setQuestion41] = useState('');
    const [question42, setQuestion42] = useState('');


    // Getting user from the local storage
    const saved = localStorage.getItem("user");
    const storedUser = JSON.parse(saved);

    // Storing the user-entered information
    const [seen, setSeen] = useState(false);
    const [q1o1, setQ1o1] = useState(false);
    const [q1o2, setQ1o2] = useState(false);
    const [q1o3, setQ1o3] = useState(false);
    const [q1o4, setQ1o4] = useState(false);
    const [q11, setQ11] = useState('');
    const [q12, setQ12] = useState('');
    const [q13, setQ13] = useState('');
    const [q2, setQ2] = useState('');
    const [q21, setQ21] = useState('');
    const [q3, setQ3] = useState('');
    const [q31, setQ31] = useState('');
    const [q32, setQ32] = useState('');
    const [q33, setQ33] = useState('');
    const [q4, setQ4] = useState('');
    const [q41, setQ41] = useState('');
    const [q42, setQ42] = useState('');

    useEffect(() => {
        async function fetchQuestion() {
            if (storedUser === null) return;
            const questionData = await axios.get(`http://localhost:4001/clients`);
            const allQuestions = questionData.data;
            const arr = [];
            for (let i = 0; i < allQuestions.length; i++) {
                if (allQuestions[i].category === 'AC') {
                    arr.push(allQuestions[i]);
                }
            }
            setQuestion1(arr[0].question);
            setQuestion11(arr[1].question);
            setQuestion12(arr[2].question);
            setQuestion13(arr[3].question);
            setQuestion2(arr[4].question);
            setQuestion21(arr[5].question);
            setQuestion3(arr[6].question);
            setQuestion31(arr[7].question);
            setQuestion32(arr[8].question);
            setQuestion33(arr[9].question);
            setQuestion4(arr[10].question);
            setQuestion41(arr[11].question);
            setQuestion42(arr[12].question);
        }
        async function fetchAnswer() {
            if (storedUser === null) return;
            const Q1Answer = await getAnswer(storedUser.tokens, 1.001);
            if (Q1Answer.includes("a")) {
                setQ1o1(true);
            }
            if (Q1Answer.includes("b")) {
                setQ1o2(true);
            }
            if (Q1Answer.includes("c")) {
                setQ1o3(true);
            }
            if (Q1Answer.includes("d")) {
                setQ1o4(true);
            }
            const Q11Answer = await getAnswer(storedUser.tokens, 1.001031);
            setQ11(Q11Answer);

            const Q12Answer = await getAnswer(storedUser.tokens, 1.0011);
            setQ12(Q12Answer);

            const Q13Answer = await getAnswer(storedUser.tokens, 1.0012);
            setQ13(Q13Answer);

            const Q2Answer = await getAnswer(storedUser.tokens, 1.002);
            setQ2(Q2Answer);

            const Q21Answer = await getAnswer(storedUser.tokens, 1.002021);
            setQ21(Q21Answer);

            const Q3Answer = await getAnswer(storedUser.tokens, 1.003);
            setQ3(Q3Answer);

            const Q31Answer = await getAnswer(storedUser.tokens, 1.003031);
            setQ31(Q31Answer);

            const Q32Answer = await getAnswer(storedUser.tokens, 1.003032);
            setQ32(Q32Answer);

            const Q33Answer = await getAnswer(storedUser.tokens, 1.003033);
            setQ33(Q33Answer);

            const Q4Answer = await getAnswer(storedUser.tokens, 1.004);
            setQ4(Q4Answer);

            const Q41Answer = await getAnswer(storedUser.tokens, 1.004021);
            setQ41(Q41Answer);

            const Q42Answer = await getAnswer(storedUser.tokens, 1.004022);
            setQ42(Q42Answer);
            setLoading(true);
        }
        fetchQuestion();
        fetchAnswer();
    }, []);

    const togglePop = () => {
      setSeen(!seen);
    };

    // Track changes to option a of question 1
    const handleChangeq1o1 = (e) => {
        if (q1o1 === true) {
            setQ1o1(false);
        } else {
            setQ1o1(true);
            setQ1o4(false);
            setQ12('');
            setQ13('');
        }
    }

    const handleChangeq1o2 = (e) => {
        if (q1o2 === true) {
            setQ1o2(false);
        } else {
            setQ1o2(true);
            setQ1o4(false);
            setQ12('');
            setQ13('');
        }
    }

    const handleChangeq1o3 = (e) => {
        if (q1o3 === true) {
            setQ1o3(false);
        } else {
            setQ1o3(true);
            setQ1o4(false);
            setQ12('');
            setQ13('');
        }
    }

    const handleChangeq1o4 = (e) => {
        if (q1o4 === true) {
            setQ1o4(false);
        } else {
            setQ1o4(true);
            setQ1o3(false);
            setQ1o2(false);
            setQ1o1(false);
            setQ11('');
        }
    }

    const onChangeQ11 = (e) => {
        setQ11(e);
    }

    const onChangeQ12 = (e) => {
        setQ12(e);
    }

    const onChangeQ13 = (e) => {
        setQ13(e.target.value);
    }

    const onChangeQ2 = (e) => {
        setQ2(e);
    }
    const onChangeQ21 = (e) => {
        setQ21(e);
    }
    const onChangeQ3 = (e) => {
        setQ3(e);
    }
    const onChangeQ31 = (e) => {
        setQ31(e);
    }
    const onChangeQ32 = (e) => {
        setQ32(e);
    }
    const onChangeQ33 = (e) => {
        setQ33(e);
    }
    const onChangeQ4 = (e) => {
        setQ4(e);
    }
    const onChangeQ41 = (e) => {
        setQ41(e);
    }
    const onChangeQ42 = (e) => {
        setQ42(e);
    }
    
    // Submit the stored information to the backend
    const handleSubmit = async () => { 
        const id = storedUser.id;
        const arr = [];
        let q1weight = 0;
        if (q1o1) {
            arr.push("a");
            q1weight++;
        }
        if (q1o2) {
            arr.push("b");
            q1weight++;
        }
        if (q1o3) {
            arr.push("c");
            q1weight++;
        }
        if (q1o4) {
            arr.push("d");
        }
        let q11weight = 0;
        if (q11 === "a") {
            q11weight++;
        }
        let q12weight = 0;
        if (q12 === "a") {
            q12weight += 4;
        }
        let config = {
            headers: {
                "x-access-token": storedUser.tokens,
            }
        }
        const q1answer = {questionId: 1.001, category: "AC", answer: arr, weight: q1weight, questionType: 1};
        //let data = {questionId: 1.001, category: "AC", answer: arr, weight: q1weight, questionType: 1};

        await axios.post('http://localhost:4001/clients/answer', q1answer, config);
        if (q1o3) {
            const q11answer = {questionId: 1.001031, category: "AC", answer: q11, weight: q11weight, questionType: 0};
            await axios.post('http://localhost:4001/clients/answer', q11answer, config);
        }
        const q12answer = {questionId: 1.0011, category: "AC", answer: q12, weight: q12weight, questionType: 0};
        await axios.post('http://localhost:4001/clients/answer', q12answer, config);

        const q13answer = {questionId: 1.0012, category: "AC", answer: q13, weight: 0, questionType: 2};
        await axios.post('http://localhost:4001/clients/answer', q13answer, config);
        var q2weight = 0;
        if (q2 === "b") {
            q2weight++;
        }
        const q2answer = {questionId: 1.002, category: "AC", answer: q2, weight: q2weight, questionType: 0};
        await axios.post('http://localhost:4001/clients/answer', q2answer, config);
        if (q2 === "b") {
            var q21weight = (q21 === "a" ? 3 : 0);
            const q21answer = {questionId: 1.002021, category: "AC", answer: q21, weight: q21weight, questionType: 0};
            await axios.post('http://localhost:4001/clients/answer', q21answer, config);
        }

        var q3weight = 0;
        if (q3 === "b") {
            q3weight += 2;
        }
        if (q3 === "c") {
            q3weight += 1;
            var q31weight = 0;
            if (q31 === "a") {
                q31weight = 1;
            }
            const q31answer = {questionId: 1.003031, category: "AC", answer: q31, weight: q31weight, questionType: 0};
            
            var q32weight = 0;
            if (q32 === "a") {
                q32weight = 1;
            }
            const q32answer = {questionId: 1.003032, category: "AC", answer: q32, weight: q32weight, questionType: 0};
            
            var q33weight = 0;
            if (q33 === "a") {
                q33weight = 1;
            }
            const q33answer = {questionId: 1.003033, category: "AC", answer: q33, weight: q33weight, questionType: 0};
            await axios.post('http://localhost:4001/clients/answer', q31answer, config);
            await axios.post('http://localhost:4001/clients/answer', q32answer, config);
            await axios.post('http://localhost:4001/clients/answer', q33answer, config);
        }
        const q3answer = {questionId: 1.003, category: "AC", answer: q3, weight: q3weight, questionType: 0};
        await axios.post('http://localhost:4001/clients/answer', q3answer, config);

        var q4weight = 0;
        if (q4 === "b") {
            q4weight = 2;
            var q41weight = (q41 === "a") ? 1 : 0;
            const q41answer = {questionId: 1.004021, category: "AC", answer: q41, weight: q41weight, questionType: 0};
            var q42weight = (q42 === "a") ? 1 : 0;
            const q42answer = {questionId: 1.004022, category: "AC", answer: q42, weight: q42weight, questionType: 0};
            await axios.post('http://localhost:4001/clients/answer', q41answer, config);
            await axios.post('http://localhost:4001/clients/answer', q42answer, config);
        }
        const q4answer = {questionId: 1.004, category: "AC", answer: q4, weight: q4weight, questionType: 0};
        await axios.post('http://localhost:4001/clients/answer', q4answer, config);
        const q41answer = {questionId: 1.004021, category: "AC", answer: q41, weight: q41weight, questionType: 0};
        await axios.post('http://localhost:4001/clients/answer', q41answer, config);
        const q42answer = {questionId: 1.004022, category: "AC", answer: q42, weight: q42weight, questionType: 0};
        await axios.post('http://localhost:4001/clients/answer', q42answer, config);
    }

    return (
        <form onSubmit={handleSubmit} >
            {seen ? <PopUp toggle={togglePop} content="This is some info about Access Control questions"/> : null}
            <div className="infoButton">
                <IconButton color="primary" onClick={togglePop}>
                    <Info fontSize="large"/>
                </IconButton>
            </div>
            <div className="backgroundDiv">
                <div className="top">
                    <h1>Access Control Questions</h1>
                </div>
                <div className="submit-button-container"> 
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <Button onClick={handleSubmit} className="button" variant="outlined" endIcon={<Send />}> Submit </Button>        
                    </Link>
                </div>
                <div className="ScrollingDiv">
                    { !loading ? 
                    <div className="top">
                        <CircularProgress style={{'color': 'green'}}/>
                    </div> :
                    <div className="qContainer">
                        <h3>1. {question1}</h3>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={q1o1} onChange={handleChangeq1o1}/>} label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{ "(a) Authorized users are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                            <FormControlLabel control={<Checkbox checked={q1o2} onChange={handleChangeq1o2}/>} label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{ "(b) Processes acting on behalf of authorized users are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                            <FormControlLabel control={<Checkbox checked={q1o3} onChange={handleChangeq1o3}/>} label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{ "(c) Authorized devices are identified" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                            <FormControlLabel control={<Checkbox checked={q1o4} onChange={handleChangeq1o4}/>} label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{ "(d) None of the above" }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>             
                        </FormGroup>

                        {q1o3 === true ? 
                        <div>
                            <h3>1.1 {question11} </h3>
                            <RadioGroup horizontal onChange={onChangeQ11} value={q11}>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>
                        </div>
                        : null}
                        
                        <div>
                            <h3>1.2 {question12} </h3>
                            <RadioGroup horizontal onChange={onChangeQ12} value={q12}>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>
                            <h3>1.3 {question13} </h3>
                            <TextField value={q13} onChange={onChangeQ13} margin="normal" variant="outlined" label="Question 1.3" className="textArea" inputProps={{style: {fontSize: 20}}}/>
                        </div>
                        
                        <h3>2. {question2} </h3>
                        <RadioGroup onChange={ onChangeQ2 } horizontal value={q2}>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                <h4> (a) There are no restrictions on access to information systems </h4>
                            </ReversedRadioButton>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                <h4> (b) Transactions and functions authorized users are permitted to execute are defined  </h4>
                            </ReversedRadioButton>
                        </RadioGroup>
                        
                        { q2 === "b" ? <div>
                            <h3>2.1 {question21} </h3>
                            <RadioGroup onChange={ onChangeQ21 } horizontal value={q21}>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>
                        </div>
                        : null}

                        <h3>3. {question3} </h3>
                        <RadioGroup onChange={ onChangeQ3 } horizontal value={q3}>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                <h4> (a) It is not being verified or controlled </h4>
                            </ReversedRadioButton>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                <h4> (b) Connections to external information systems are disallowed  </h4>
                            </ReversedRadioButton>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="c">
                                <h4> (c) Connections to external systems are identified </h4>
                            </ReversedRadioButton>
                        </RadioGroup>
                        
                        { q3 === "c" ?
                        <div>
                            <h3>3.1 {question31} </h3>
                            <RadioGroup onChange={ onChangeQ31 } horizontal value={q31}>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>

                            <h3>3.2 {question32} </h3>
                            <RadioGroup onChange={ onChangeQ32 } horizontal value={q32}>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>

                            <h3>3.3 {question33} </h3>
                            <RadioGroup onChange={ onChangeQ33 } horizontal value={q33}>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>
                        </div>
                        : null}

                        <h3>4. {question4} </h3>
                        <RadioGroup onChange={ onChangeQ4 } horizontal value={q4}>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                <h4> It is not controlled </h4>
                            </ReversedRadioButton>
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                <h4> Individuals authorized to post information on these systems are identified  </h4>
                            </ReversedRadioButton>
                        </RadioGroup>
                        
                        {q4 ==="b" ? <div>
                            <h3>4.1 {question41} </h3>
                            <RadioGroup onChange={ onChangeQ41 } horizontal value={q41}>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>

                            <h3>4.2 {question42} </h3>
                            <RadioGroup onChange={ onChangeQ42 } horizontal value={q42}>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="a">
                                    <h4> Yes </h4>
                                </ReversedRadioButton>
                                <ReversedRadioButton rootColor="black" pointColor="#60a44c" value="b">
                                    <h4> No  </h4>
                                </ReversedRadioButton>
                            </RadioGroup>
                        </div>
                        : null}
                        <div className="bottomPadding"/>
                    </div>
                    }
                </div>
            </div>
        </form>
    );
}