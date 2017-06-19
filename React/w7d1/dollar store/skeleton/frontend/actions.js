const selectCurrency = (baseCurrency, rates) => {
  return { //object
    type: "SWITCH_CURRENCY",
    baseCurrency: baseCurrency, //string
    rates: rates //object within an object
  }
}

export default selectCurrency;
