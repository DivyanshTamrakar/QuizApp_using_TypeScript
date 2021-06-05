type questionprop ={
    questionno:number;
    question :string;
}
export default function QuizQuestion({questionno,question}:questionprop){
    return (
    <div className='Question'>
        Q.<span>{questionno }</span><span>{question}</span>
    </div>);
    
}