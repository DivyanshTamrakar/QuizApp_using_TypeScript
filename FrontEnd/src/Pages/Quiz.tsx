type questionprop ={
    questionno:number;
    question :string;
}
export default function QuizQuestion({questionno,question}:questionprop){
    return (
    <div className='Question'>
        <span style={{marginRight:"8px"}}>Q.{questionno}</span><span>{question}</span>
    </div>);
    
}