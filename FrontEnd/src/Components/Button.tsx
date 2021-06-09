import {quizOne} from '../QuizData/quizdata'
import { useNavigate } from "react-router-dom";

type ButtonProp={
    currentquestionno:number,
    setcurrentquestionno:(c:number)=>void,
    setIsTouched:(c:boolean|number)=>void
}

export default function Button({currentquestionno,setcurrentquestionno,setIsTouched}:ButtonProp){
    let navigate = useNavigate();
    return (
        <div className="Buttons">
        <button className='previous' disabled={currentquestionno === 0?true:false} onClick={()=>setcurrentquestionno(currentquestionno - 1)}>Previous</button>
        {
            currentquestionno === quizOne.questions.length - 1 ?
            <button className='next' onClick={()=>navigate('/result')}>Finish</button>:
            <button className='next' onClick={()=>{setcurrentquestionno(currentquestionno + 1);setIsTouched(false)}}>Next</button>
        }
        </div>
    );
}