import currencyName from "../../data/data";


const  Currency = ({ currency, handleCurrencyChange, amount, handleAmountChange, type }) => {
  const randomKey = () => Math.random();
  return (
    <div className="currency">
      <select name="" id={`${type === 'currencyOutput' ? 'output_currency' : 'input_currency'}`} value={currency} onChange={handleCurrencyChange}>
      {
        currencyName.map(el => 
        <option key={randomKey()} value={el}>{el}</option>
        )
      }
      </select>
      <input type="number" name="" id={`${type === 'currencyOutput' ? 'output_amount' : 'input_amount'}`} value={amount} onChange={handleAmountChange}/>
    </div>
  )
}

export default Currency;