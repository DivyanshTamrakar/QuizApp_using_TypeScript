import { useState } from 'react';
import QuizQuestion from '../Pages/Quiz'
import { quizOne } from '../QuizData/quizdata';
import { useScore } from "../Context/scoreContext";
import Options from '../Pages/Options';


export default  function QuizSection(){
    const [currentquestionno,setcurrentquestionno] = useState(0);
    const [isTouched,setIsTouched] = useState<number|boolean>(false);

   let  {score} = useScore();
    let username = "Divyansh";
    function handler(){
     setcurrentquestionno(currentquestionno + 1);
     setIsTouched(false)
         }
    function PreHandler(){
     setcurrentquestionno(currentquestionno - 1);

         }

    return (
    <div className="QuizFrame">
    <div className="QuizDetails">
    <span style={{fontWeight:'bolder',fontSize:"3.0rem",marginTop:'2rem'}}>Hello!, {username}</span>
    <div className="score-card">
    <span style={{fontSize:'2.5rem',fontWeight:'bolder'}}>Score</span>
    <span style={{fontSize:'2.5rem',fontWeight:'bolder'}}>{score}/10</span>
    </div>
    </div>
    <QuizQuestion questionno={currentquestionno + 1}   question={quizOne.questions[currentquestionno].question}/>
    <Options options={quizOne.questions[currentquestionno].options} isTouched={isTouched} setIsTouched={setIsTouched}/>
    <div className="Buttons">
    <button className='previous' disabled={currentquestionno === 0?true:false} onClick={PreHandler}>Previous</button>
    <button className='next' disabled={currentquestionno === quizOne.questions.length - 1?true:false} onClick={handler}>Next</button>
    </div>
    </div>)



}