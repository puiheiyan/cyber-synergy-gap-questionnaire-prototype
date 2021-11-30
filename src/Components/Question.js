import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TextField, IconButton, Button } from "@mui/material";

export function Question (props) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    const saved = localStorage.getItem("user");
    const storedUser = JSON.parse(saved);
    const [answers, setAnswer] = useState(null);
    const [o1, setO1] = useState(false);
    const [o2, setO2] = useState(false);
    const [o3, setO3] = useState(false);
    const [o4, setO4] = useState(false);

    useEffect(() => {
        async function fetchAnswer() {
            if (storedUser === null) return;
            //const answerData = await axios.get(`http://localhost:4001/clients/answered/${storedUser.id}&${props.qid}`);
            //setAnswer(answerData.data.answer);
        }
        fetchAnswer();
    }, []);

    const onChangeQT0 = (e) => {
        setAnswer(e);
    }

    const onChangeQT1 = (e) => {
        console.log(e);
    }
    
    const onChangeQT2 = (e) => {
        setAnswer(e.target.value);
        console.log(answers);
    }
    
    const onFileUpload = (e) => {
        const file = new FormData();
        file.append("File", answers, answers.name);
        console.log(answers);
        // axios.post
    }

    const onFileChange = (e) => {
        console.log(e.target.files[0]);
        setAnswer(e.target.files[0]);
        const file = new FormData();
        file.append("File", answers, answers.name);
        console.log("This is the file: ", file);
    }


    return (
        <div>
            <h3>
                {props.question}
            </h3>

            {/* Select all that applies question */}
            {   props.questionType === 0 ? 
                <div>
                    <RadioGroup horizontal onChange={onChangeQT0} value={answers}>
                    {props.choices.map((choice) => {
                            return (
                            <ReversedRadioButton rootColor="black" pointColor="#60a44c" value={ALPHABET.charAt(i++)}>
                                <h4> ({choice.tag}) {choice.answer} </h4>
                            </ReversedRadioButton>
                            );
                    })}
                    </RadioGroup>
                </div>
                : null
            }

            {/* Multiple Choice */}
            {   props.questionType === 1 ?
                <div>
                     <FormGroup onChange={onChangeQT1}>
                        {props.choices.map((choice) => {
                                return (
                                    <FormControlLabel control={<Checkbox/>} label={<span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{ `(${choice.tag}) ${choice.answer}` }</span>} sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>
                                );
                        })}
                    </FormGroup>
                </div>
                : null
            }

            {/* Type in answers */}
            {   props.questionType === 2 ?
                <div>
                    <TextField value={answers} onChange={onChangeQT2} margin="normal" variant="outlined" label="Question 1.3" className="textArea" inputProps={{style: {fontSize: 20}}}/>
                </div>
                : null
            }

            {/* Upload documents */}
            {   props.questionType === 3 ?
                <div className="fileInformation">
                    <h4> {answers ? answers.name : "No file Chosen."} </h4>
                    <Button onChange={onFileChange} className="uploadButton" variant="outlined" component="label" > <h3>Choose File</h3> <input type="file" accept="image/*,application/pdf" hidden /> </Button>
                </div>
                : null
            }
            
        </div>
    );
}