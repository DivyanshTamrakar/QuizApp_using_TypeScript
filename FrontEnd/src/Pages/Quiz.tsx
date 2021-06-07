type questionprop ={
    questionno:number;
    question :string;
}
export default function QuizQuestion({questionno,question}:questionprop){
    return (
    <div className='Question'>
        <span style={{marginRight:"0.8rem"}}>Q.{questionno}</span><span>{question}</span>
    </div>);
    
}