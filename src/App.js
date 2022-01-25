import logo from './logo.svg';
import './App.css';

function App() {
  const promiseHandle = () => {
    Promise.reject('promise error');
  }
  const asyncHandle = () => {
    setTimeout(() => {
      throw new Error('setTimeout Error')
    }, 2000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={'http://sdvsdvs'} className="App-logo" alt="logo" />
        <button onClick={() => {
          throw new Error('just a test')
        }}>js</button>
        <button onClick={promiseHandle}>promiseHandle</button>
        <button onClick={asyncHandle}>asyncHandle</button>
      </header>
    </div>
  );
}

export default App;
