import styles from './App.module.scss';
import QuestionComponent from './components/Question';
import Reset from './components/Reset';
import StatBar from './components/StatBar';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';

function App() {
    const allQuestions = questions as Questions;

    const [currentQuestionsIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    const [waitingToAdvance, setWaitingToAdvance] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);

        setWaitingToAdvance(true);
    };

    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIndex(currentQuestionsIndex + 1);
    };

    const reset = () => {
        setCurrentQuestionIndex(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setWaitingToAdvance(false);
    };

    if (currentQuestionsIndex >= allQuestions.questions.length) {
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswers}
                onPress={reset}
            />
        );
    }

    return (
        <div className={styles.app}>
            <StatBar
                currentQuestion={currentQuestionsIndex + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComponent
                question={allQuestions.questions[currentQuestionsIndex]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && <button onClick={advance}>Next Question...</button>}
        </div>
    );
}

export default App;
