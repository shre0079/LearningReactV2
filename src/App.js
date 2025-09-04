import logo from './logo.svg';
import './App.css';
import Header from "./Header";

//Rule1: use parent element
//Rule2: js expressions must be wrapped in {}
//Rule3: can't use if-else but ternary is okay
//Rule4: attribute class = classname

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
