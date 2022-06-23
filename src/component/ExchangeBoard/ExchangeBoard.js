/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { fetchCurrencyRate } from "../../gateway/gateway"
import Currency from "./Currency"
import CulcResult from "./CulcResult"

const ExchangeBoard = () => {
  const [rates, setRates] = useState ('');
  const [outPutRates, setOutputRates] = useState ('');
  const [inputAmount, setInputAmount] = useState (1);
  const [outputAmount, setOutputAmount] = useState (1);
  const [inputCurrency, setInputCurrency] = useState ('UAH');
  const [outputCurrency, setOutputCurrency] = useState ('UAH');

  const input_currency = document.querySelector('#input_currency');
  const output_currency = document.querySelector('#output_currency');

  const exactAmount = (value1, value2) => (value1 * value2).toFixed(2);

  useEffect(() => {
    fetchCurrencyRate(inputCurrency)
    .then(data => {
      setRates(data.rates)
      setOutputAmount(exactAmount(inputAmount, data.rates[outputCurrency]))
    });
  }, [inputCurrency]);

  useEffect(() => {
    fetchCurrencyRate(outputCurrency)
    .then(data => {
      setOutputRates(data.rates)
      setInputAmount(exactAmount(outputAmount, data.rates[inputCurrency]))
    });
  }, [outputCurrency]);
 
  const handleInputAmountChange = (event) => {
    setInputAmount(event.target.value)
    setOutputAmount(exactAmount(event.target.value, rates[outputCurrency]))
  };

  const handleOutputAmountChange = (event) => {
    setOutputAmount(event.target.value)
    setInputAmount((event.target.value / rates[outputCurrency]).toFixed(2))
  };

  const handleInputCurrencyChange = () => {
    setInputCurrency(input_currency.value)
  }

  const handleOutputCurrencyChange = () => {
    setOutputCurrency(output_currency.value)
    setInputAmount(exactAmount(outputAmount, outPutRates[inputCurrency]))
  }

  return (
    <div className="exchangeBoard">
      <Currency
        currency={inputCurrency}
        handleCurrencyChange={handleInputCurrencyChange}
        amount={inputAmount}
        handleAmountChange={handleInputAmountChange}
        type={'currencyInput'}
      />
        <Currency
        currency={outputCurrency}
        handleCurrencyChange={handleOutputCurrencyChange}
        amount={outputAmount}
        handleAmountChange={handleOutputAmountChange}
        type={'currencyOutput'}
      />
      <CulcResult
        inputAmount={inputAmount}
        inputCurrency={inputCurrency}
        outputAmount={outputAmount}
        outputCurrency={outputCurrency}
      />
    </div>
  )
};

export default ExchangeBoard;