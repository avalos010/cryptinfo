<template>
  <div id="app" class="text-center">
   <nav class="nav-bar bg-dark">
     <h3 class="navbar-brand text-light"> Crypto Currency Price Search</h3>
   </nav>
    <br><br>
    <div class="row">
          <CryptoList />
          <CurrencyList />
          <Prices />
    </div>
  </div>
</template>

<script>
import CryptoList from './components/CryptoList'
import CurrencyList from './components/CurrencyList'
import Prices from './components/Prices';

export default {
  name: 'app',
  data() {
    return {
      symbol: ''
    }
  },
  components: {
    CryptoList,
    CurrencyList,
    Prices
  }
}
</script>
