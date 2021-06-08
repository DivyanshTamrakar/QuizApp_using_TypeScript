import './App.css';
import Header  from "../src/Components/Header";
import Home from './Components/Home'
import QuizSection from './Components/QuizSection'
import Result from './Components/Result'
import {  Routes,  Route } from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Header/> 
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<QuizSection/>} />
        <Route path="/result" element={<Result />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
