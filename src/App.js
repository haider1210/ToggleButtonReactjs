import logo from './logo.svg';
import './App.css';
import Toggle_btn from './components/Toggle_btn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Toggle button in the react js 
        </p>
        <br/>
        <Toggle_btn/>
      </header>
    </div>
  );
}

export default App;
