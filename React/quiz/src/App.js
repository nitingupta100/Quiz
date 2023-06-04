import './App.css';
import Questions from './Components/questions.js';

function App() {
var data = [{
    id:1,
    q:"What is the capital of Greece ? ",
    a:"Athens"
},

{
    id:2,
    q: "What is the capital of England ? ",
    a:"London"
},
{
    id:3,
    q: "What is the capital of Thailand ? ",
    a: "Bangkok"
}]

  return (
    <div className="App">
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Quiz Time</h1>
      {
        data.map((question)=> {return (<Questions key={question.id} ques = {question}  ></Questions>)})
      }
      
    </div>
  );
}

export default App;
