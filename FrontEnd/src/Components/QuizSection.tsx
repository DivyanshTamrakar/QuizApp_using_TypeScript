import { useState } from 'react';
import QuizQuestion from '../Pages/Quiz'
import { quizOne } from '../QuizData/quizdata';
import { useScore } from "../Context/scoreContext";
import Options from '../Pages/Options';
import Button from './Button';


const scoredesign: React.CSSProperties = { fontSize: '2.5rem', fontWeight: 'bolder' };
const userDesign = { fontWeight: 'bolder', fontSize: "3.0rem", marginTop: '2rem' } as React.CSSProperties;
export default function QuizSection() {
    const [currentquestionno, setcurrentquestionno] = useState(0);
    const [isTouched, setIsTouched] = useState<number | boolean>(false);

    const { score } = useScore();
    const username = "Divyansh";


    return (
        <div className="QuizFrame">
            <div className="QuizDetails">
                <span style={userDesign}>Hello!, {username}</span>
                <div className="score-card">
                    <span style={scoredesign}>Score</span>
                    <span style={scoredesign}>{score}/10</span>
                </div>
            </div>
            <QuizQuestion questionno={currentquestionno + 1} question={quizOne.questions[currentquestionno].question} />
            <Options options={quizOne.questions[currentquestionno].options} isTouched={isTouched} setIsTouched={setIsTouched} />
            <Button currentquestionno={currentquestionno} setIsTouched={setIsTouched} setcurrentquestionno={setcurrentquestionno} />

        </div>)



}