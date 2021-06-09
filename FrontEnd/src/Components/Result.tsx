import Confetti from 'react-confetti'
import { useScore } from '../Context/scoreContext';

const resultDesign = {fontSize:'2rem',fontWeight:'bold',marginTop:'1rem'} as React.CSSProperties;;
export default  function Result(){

    const {score} = useScore();
    return (
    <div>
       <Confetti
       width={window.innerWidth || 300}
       height={window.innerHeight || 200}
       numberOfPieces={200}
       />
       <div style={{marginTop:'2rem'}}>{
           <img src="images/undraw_winners_ao2o.svg" alt="quiz_image" height="30%" width="30%" />
           }</div>
       
       <div style={resultDesign}>Your Total Score</div> 
       <div style={resultDesign}>{score}/10</div>

    </div>);
}