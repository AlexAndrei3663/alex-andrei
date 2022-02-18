import logo from './logo.svg';
import './App.css';
import AlexClass from './AlexClass';
import AlexFunction from './AlexFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AlexClass instagram="alexandreipf" />
        <br />
        <AlexFunction instagram="alexandreipf" />
      </header>
    </div>
  );
}

export default App;