const baseUrl = "https://api.exchangerate-api.com/v4/latest"

export const fetchCurrencyRate = (currency) => {
  return fetch(`${baseUrl}/${currency}`) 
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      return [];
    })
    .then(rates => rates.rates);
};