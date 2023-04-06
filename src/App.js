import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test <code>Capgemini</code> Tabs Marvel
        </p>
      <br/>
      <Tabs />
    </div>
  );
}

export default App;
