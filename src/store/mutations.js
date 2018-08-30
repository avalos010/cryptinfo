import * as types from './mutation-types';

export const mutations = {
  [types.LOAD_PRICE](state,payload) {
    if(payload)
    state.prices = payload
    else
    state.prices = null
  },

  [types.SAVE_SYMBOL](state,payload){
    state.symbol = payload
  },

  [types.SAVE_CURRENCY](state,payload){
    state.currency = payload
  }



}
