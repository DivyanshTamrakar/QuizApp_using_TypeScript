import { Link } from 'react-router-dom';


export default  function Home(){

    function handler(e:any){
        localStorage.setItem('username',e.target.value)
    }

    return (
    <div>
    <input type='text'onChange={(e)=>{handler(e)}}></input>
                <Link to="/quiz"><button>Go To Quiz</button></Link> 
                </div>)
}