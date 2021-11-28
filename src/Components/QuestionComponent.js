import axios from 'axios';
import {Question} from './Question';

// Retrieve all questions of a section from backend
// Map through the array of questions and pass in qid, and submitted -> question component
// Inside each question component, get the specified questions, question types and answers, and the previous answers if it exists
// If submitted is true, this will submit this question automatically with the answer inside it

const QuestionComponent = async (props) => {
    const saved = localStorage.getItem("user");
    const storedUser = JSON.parse(saved);
    const questionData = await axios.get(`http://localhost:4001/clients/questions/${props.category}&${props.level}`);
    const allQuestions = questionData.data;

    let QuestionList = allQuestions.map(question => {
        return (
            <Question qid={question.qid} question={question.question} 
            choices={question.answers} questionType={question.questionType}/>
        )
    });
    return (
        <div>
            {QuestionList}
        </div>
    );
}
 
export default QuestionComponent;