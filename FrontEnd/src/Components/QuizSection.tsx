import { useState } from 'react';
import QuizQuestion from '../Pages/Quiz'
import { quizOne, quizTwo, quizThree } from '../QuizData/quizdata';
import { useScore } from "../Context/scoreContext";
import Options from '../Pages/Options';
import Button from './Button';


export default function QuizSection() {
    const [currentquestionno, setcurrentquestionno] = useState(0);
    const [isTouched, setIsTouched] = useState<number | boolean>(false);
    const { score } = useScore();



    const defaultName = () => {
        if (!localStorage.getItem('name')) {
            return "User";
        } else {
            return localStorage.getItem('name');
        }
    }

    return (
        <div className='quizframe'>
            <div className="QuizDetails">
                <span className='user-quiz-heading'>Hello,{defaultName()}</span>
                <div className="score-card">
                    <span>Score</span>
                    <span>{score}/10</span>
                </div>
            </div>

            {localStorage.getItem('quizname') === 'Marvel Cinematic Univers' &&
                <div >
                    <QuizQuestion questionno={currentquestionno + 1} question={quizOne.questions[currentquestionno].question} />
                    <Options options={quizOne.questions[currentquestionno].options} isTouched={isTouched} setIsTouched={setIsTouched} />
                    <Button currentquestionno={currentquestionno} setIsTouched={setIsTouched} setcurrentquestionno={setcurrentquestionno} />
                </div>
            }
            {localStorage.getItem('quizname') === 'Harry Potter ' &&
                <div >
                    <QuizQuestion questionno={currentquestionno + 1} question={quizTwo.questions[currentquestionno].question} />
                    <Options options={quizTwo.questions[currentquestionno].options} isTouched={isTouched} setIsTouched={setIsTouched} />
                    <Button currentquestionno={currentquestionno} setIsTouched={setIsTouched} setcurrentquestionno={setcurrentquestionno} />
                </div>
            }
            {localStorage.getItem('quizname') === 'DC' &&
                <div >
                    <QuizQuestion questionno={currentquestionno + 1} question={quizThree.questions[currentquestionno].question} />
                    <Options options={quizThree.questions[currentquestionno].options} isTouched={isTouched} setIsTouched={setIsTouched} />
                    <Button currentquestionno={currentquestionno} setIsTouched={setIsTouched} setcurrentquestionno={setcurrentquestionno} />
                </div>
            }

            {localStorage.getItem('quizname') === null &&
                <div >
                    <QuizQuestion questionno={currentquestionno + 1} question={quizThree.questions[currentquestionno].question} />
                    <Options options={quizThree.questions[currentquestionno].options} isTouched={isTouched} setIsTouched={setIsTouched} />
                    <Button currentquestionno={currentquestionno} setIsTouched={setIsTouched} setcurrentquestionno={setcurrentquestionno} />
                </div>
            }


        </div>)



}