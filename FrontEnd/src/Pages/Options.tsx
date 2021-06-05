type ArrayProp ={text:string,isRight:boolean};
type Optionsprop = {
    options : ArrayProp[];
}

export default function Options({options}:Optionsprop){

    

function Handler(item:ArrayProp){
    
    console.log(item);
   
}

    return (
    <div className="Options">
     
    {options.map(function(item){
            return   <div className="OptionItem" onClick={()=>Handler(item)}>
                     {item.text}
                     </div>
        })
    } </div>);
}