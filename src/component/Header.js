import { useState, useEffect } from "react"
import { fetchCurrencyRate } from "../gateway/gateway"

const Header = () => {
  const [rates, setRates] = useState ('');

  const exchangeCurrency = 'UAH';
  const ratesToDispalay = ['USD', 'EUR', 'CAD'];

  const randomKey = () => Math.random();
  
  useEffect(() => {
    fetchCurrencyRate(exchangeCurrency)
    .then(data => {
      setRates(data.rates)
    });
  }, []);

  return (
    <div className="header">
      {
        ratesToDispalay.map(el => 
          <div className="exchangeRate" key={randomKey()}>{`${el}/${exchangeCurrency}: ${(1 / rates[el]).toFixed(2)}`}</div>
        )
      }
    </div>
  )
};

export default Header;