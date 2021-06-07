import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default  function Home(){
    const options = [     'Marvel Cinematic Univers', 'Harry Potter ', 'Twilight'   ];
    const defaultOption = options[0];





    return (
    <div className="HomeFrame">
      <div className="User-details">
      <span className="Heading">Welcome to the Quiz</span>
      <span style={{textAlign:"center"}}>
          <input className="Name_box" type = "text" placeholder="Enter Your Name"/>
      </span>
       <Dropdown className="Drop-down" options={options}  value={defaultOption} placeholder="Select an option" />
       <Link to='/quiz'><button  style={{alignSelf:"center"}} className="next">Start Quiz </button></Link>

      </div>

       <div style={{margin:'1rem'}}>
               {
                    <img src="images/undraw_searching_p5ux.svg" alt="quiz_image" height="100%" width="100%" />
                 }
        </div>
    </div>
    );
}