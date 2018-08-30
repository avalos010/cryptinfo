<template lang="html">
  <div class="col-md-3 col-sm-12">
    <label class="text-primary">Choose Symbol:</label>
    <select class="form-control btn btn-dark"  v-model="selected" @change="selectCrypto">
      <option v-for="(crypto, index) in cryptos" :value="crypto"> {{crypto}}</option>
    </select>

  </div>
</template>

<script>
import cryptocurrencies from 'cryptocurrencies';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      cryptos: cryptocurrencies.symbols().sort(),
      selected: ''
    }
  },
  methods: {
    ...mapActions(['saveSymbol']),
    selectCrypto() {
      this.saveSymbol(this.selected)
    }
  }
}
</script>
