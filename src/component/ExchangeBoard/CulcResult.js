const CulcResult = ({ inputAmount, inputCurrency, outputAmount, outputCurrency }) => {
  return (
    <div className="result">
    <div className="rate" id="rate">
    {
      `${inputAmount} ${inputCurrency} = ${outputAmount} ${outputCurrency}`
    }
    </div>
  </div>
  )
};

export default CulcResult;