import { useState } from 'react';
import { Question } from '../types';
import Answer from './Answer';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function Answers(props: Props) {
    const [showAnswer, setShowAnswer] = useState(false);

    const onPress = (idx: number) => {
        setShowAnswer(true);
        props.onSubmit(props.question.correctAnswerIndex === idx);
    };

    return (
        <div>
            {props.question.options.map((option, idx) => {
                return <Answer text={option} onPress={() => onPress(idx)} />;
            })}
        </div>
    );
}

export default Answers;
