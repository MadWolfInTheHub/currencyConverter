import { useState, useEffect } from "react"
import currencyName from "../data/data"
import { fetchCurrencyRate } from "../gateway/gateway"


export default function ExchangeBoard() {
  const [rates, setRates] = useState ('');
  const [inputAmount, setInputAmount] = useState (1);
  const [outputAmount, setOutputAmount] = useState (1);
  const [inputCurrency, setInputCurrency] = useState ('UAH');
  const [outputCurrency, setOutputCurrency] = useState ('UAH');
  const input_currency = document.querySelector('#input_currency');
  const output_currency = document.querySelector('#output_currency');

  const randomKey = () => Math.random();

  useEffect(() => {
    fetchCurrencyRate(inputCurrency)
    .then(data => {
      setRates(data)
    });
  }, [inputCurrency]);
 
  const handleInputAmountChange = (event) => {
    setInputAmount(event.target.value)
    setOutputAmount((event.target.value * rates[outputCurrency]).toFixed(2))
  };

  const handleOutputAmountChange = (event) => {
    setOutputAmount(event.target.value)
    setInputAmount((event.target.value / rates[outputCurrency]).toFixed(2))

  };

  const handleInputCurrencyChange = () => {
    setInputCurrency(input_currency.value)
    fetchCurrencyRate(inputCurrency)
    .then(data => {
      console.log(data)
      setOutputAmount((inputAmount * data[outputCurrency]).toFixed(2))
    });
  }

  const handleOutputCurrencyChange = () => {
    setOutputCurrency(output_currency.value)
    setInputAmount((outputAmount / rates[outputCurrency]).toFixed(2))
  }

  const handleCurrencySwitch = () => {
    const tempCurrency = inputCurrency;
    const tempAmount = inputAmount;
    setInputAmount(outputAmount);
    setOutputAmount(tempAmount);
    setInputCurrency(outputCurrency)
    setOutputCurrency(tempCurrency);
  }

  const handleChange = () => {

  }

  return (
    <div className="exchangeBoard">
      <form className="currency" onChange={handleChange}>
          <select name="" id="input_currency" value={inputCurrency} onChange={handleInputCurrencyChange}>
          {
            currencyName.map(el => 
            <option key={randomKey()} value={el}>{el}</option>
            )
          }
          </select>
      </form>

      <input type="number" name="" id="input_amount" value={inputAmount} onChange={handleInputAmountChange}/>

      <button id="exchange" onClick={handleCurrencySwitch}>
        ↕   
      </button>

      <div className="currency">
          <select name="" id="output_currency" value={outputCurrency} onChange={handleOutputCurrencyChange}>
          {
            currencyName.map(el => 
            <option key={randomKey()} value={el}>{el}</option>
            )
          }
          </select>
          <input type="number" name="" id="output_amount" value={outputAmount} onChange={handleOutputAmountChange}/>
      </div>

      <div className="result">
        <div className="rate" id="rate">
        {
          `${inputAmount} ${inputCurrency} = ${outputAmount} ${outputCurrency}`
        }
        </div>
        </div>
    </div>
  )
}