import { Question } from '../types';
import Answers from './Answers';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function QuestionComponent(props: Props) {
    return (
        <div>
            <h3> {props.question.question} </h3>
            <Answers />
        </div>
    );
}

export default QuestionComponent;
