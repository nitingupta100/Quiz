import './App.css';
import Questions from './Components/questions.js';

function App() {
var data = [{
    q:"What is the capital of Greece ? ",
    a:"Athens"
},

{
    q: "What is the capital of England ? ",
    a:"London"
},
{
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
      Hello World
      <Questions data = {data } a="23" ></Questions>
    </div>
  );
}

export default App;
