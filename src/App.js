import ExchangeBoard from './component/ExchangeBoard/ExchangeBoard';
import Header from './component/Header';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className="exchange-board">
      <ExchangeBoard />
    </div>
    </>
  );
}

export default App;
