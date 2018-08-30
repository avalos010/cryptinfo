import {LOAD_PRICE, SAVE_SYMBOL, SAVE_CURRENCY}from './mutation-types.js';

export const loadPrice = ({commit,state}) => {
  fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=${state.symbol}&market=${state.currency}&apikey=4OTLK1BBRCF72DAW`, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(json => commit(LOAD_PRICE, json["Time Series (Digital Currency Intraday)"]))
}

export const saveSymbol = ({commit}, symbol) => {
  commit(SAVE_SYMBOL, symbol)
}

export const saveCurrency = ({commit}, currency) => {
  commit(SAVE_CURRENCY, currency)
}
