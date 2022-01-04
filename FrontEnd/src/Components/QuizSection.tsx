import { useState } from 'react';
import QuizQuestion from '../Pages/Quiz'
import { quizOne } from '../QuizData/quizdata';
import { useScore } from "../Context/scoreContext";
import Options from '../Pages/Options';
import Button from './Button';


export default function QuizSection() {
    const [currentquestionno, setcurrentquestionno] = useState(0);
    const [isTouched, setIsTouched] = useState<number | boolean>(false);
    const { score } = useScore();


    return (
        <div className='quizframe'>
            <div className="QuizDetails">
                <span className='user-quiz-heading'>Hello,{localStorage.getItem('name')}</span>
                <div className="score-card">
                    <span>Score</span>
                    <span>{score}/10</span>
                </div>
            </div>
            <QuizQuestion questionno={currentquestionno + 1} question={quizOne.questions[currentquestionno].question} />
            <Options options={quizOne.questions[currentquestionno].options} isTouched={isTouched} setIsTouched={setIsTouched} />
            <Button currentquestionno={currentquestionno} setIsTouched={setIsTouched} setcurrentquestionno={setcurrentquestionno} />

        </div>)



}