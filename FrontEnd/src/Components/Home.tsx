import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from 'react';
import { aboutinfo } from '../Types/types';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const navigate = useNavigate();
    const options = ['Marvel Cinematic Univers', 'Harry Potter ', 'Twilight', 'DC'];
    const defaultOption = options[0];
    const [userdata, setuserdata] = useState<aboutinfo>({
        name: "",
        title: defaultOption
    })

    const getName = (e: any) => {
        setuserdata({ ...userdata, name: e.target.value })
    }
    const getTitle = (e: any) => {
        setuserdata({ ...userdata, title: e.value })
    }
    const validateInput = () => {
        if (userdata.name === "") {
            alert("name field cant be empty");
        } else {
            localStorage.setItem('name',userdata.name)
            localStorage.setItem('quizname',userdata.title)
            navigate("/quiz");

        }
    }
    return (
        <div className="HomeFrame">
            <div className="user_input_details">
                <span className="title_head m20">Welcome to the Quiz</span>
                <input className="nameinput" type="text" placeholder="Enter Your Name" onChange={(e) => getName(e)} />
                <div className='Drop-down-div mb20'><Dropdown className="Drop-down" options={options} value={defaultOption} onChange={(e) => getTitle(e)} placeholder="Select an option" /></div>
                <button onClick={() => validateInput()} style={{ alignSelf: "center" }} className="next">Start Quiz </button>
            </div>
            <div className='intro_image'>
                <img src="images/undraw_searching_p5ux.svg" alt="quiz_image" height="100%" width="100%" />
            </div>
        </div>
    );
}