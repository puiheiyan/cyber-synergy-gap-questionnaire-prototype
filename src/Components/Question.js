import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';


const Question = async (props) => {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    const saved = localStorage.getItem("user");
    const storedUser = JSON.parse(saved);
    const answerData = await axios.get(`http://localhost:4001/clients/answered/${storedUser.id}&${props.qid}`);
    const answers = answerData.data.answer;
    const choice = props.answer;

    return (
        <div>
            <h3>
                {props.question}
            </h3>
            
            {props.questionType === 0 ?
                <RadioGroup horizontal value={answers}>
                    {props.choices.map((a) => {
                        return (
                        <ReversedRadioButton rootColor="black" pointColor="#60a44c" value={ALPHABET.charAt(i++)}>
                            <h4> ${a.answer} </h4>
                        </ReversedRadioButton>
                        );
                    })}
                </RadioGroup>
            : null}
            
            {props.questionType === 1 ?
                <div></div>
            : null}
            
        </div>
    );
}
 
export default Question;