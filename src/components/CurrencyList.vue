<template lang="html">
  <div class="col-md-3 col-sm-12">
    <label class="text-primary">Choose Currency:</label>
    <select class="form-control btn btn-dark" v-model="selected" @change="selectCurrency">
      <option v-for="currency in currencies"
      :value="currency">{{currency}} </option>
    </select>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
export default {

  data() {
    return {
      currencies: [],
      selected: ''
    }
  },
  created() {
    fetch('https://openexchangerates.org/api/currencies.json', {method: 'GET'})
    .then(res => res.json())
    .then(json => this.currencies = Object.keys(json))
},
  methods: {
    ...mapActions(['saveCurrency']),
    selectCurrency() {
      this.saveCurrency(this.selected)
    }

}
}
</script>

<style lang="css">
</style>
