import { useScore } from "../Context/scoreContext";

type ArrayProp ={text:string,isRight:boolean};
type Optionsprop = {
    options : ArrayProp[];
    isTouched: boolean|number;
    // setIsTouched:Dispatch<SetStateAction<boolean|number>>
    setIsTouched:(c: number|boolean) => void
}

export default function Options({options,isTouched,setIsTouched}:Optionsprop){


let  {score,setScore} = useScore();
function Handler(isRight:boolean,index:number){
    if(isRight){
        setIsTouched(true);
        setScore(score + 1);
    }
    else{
        setIsTouched(index);
    }
}

const getClassName = (isRight:boolean,index:number) => {
    if(isTouched !== false){
        if(isTouched === true){
            return isRight ? "OptionItem right-answer" : "OptionItem"; 
        }
        return isRight ? "OptionItem right-answer" : (index === isTouched ? "OptionItem wrong-answer" : "OptionItem")
    }
    return "OptionItem"
}

    return (
    <div className="Options">
     
    {
    options.map(function(item,index){
            return   <div className={getClassName(item.isRight,index)} onClick={()=>Handler(item.isRight,index)}>
                       {item.text}
                     </div>
        })
    } </div>);
}