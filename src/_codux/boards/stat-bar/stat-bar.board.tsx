import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar totalQuestions={2} currentQuestion={1} correct={1} incorrect={2} />,
    isSnippet: true,
});
