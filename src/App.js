import ExchangeBoard from './component/ExchangeBoard';
import Footer from './component/Footer';
import Header from './component/Header';
import './App.css';

function App() {
  return (
    <div className="exchange-board">
      <Header />
      <ExchangeBoard />
      <Footer />
    </div>
  );
}

export default App;
