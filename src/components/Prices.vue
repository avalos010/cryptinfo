<template lang="html">
<div class="col-md-6 col-sm-12">
  <p class="lead">Prices For {{$store.state.symbol}} in  {{$store.state.currency}}</p>
  <button @click="loadPrice" class="btn btn-light mb-3">Get Current Price</button>

  <h4 v-if="$store.state.prices == null">No Data Available!</h4>
  <ul class="list-group" v-if="$store.state.prices">
      <li class="list-group-item" v-for="price in $store.state.prices">
        <div class="card">

                <p class="card-title">{{Object.values(price)[0]}}</p>

        </div>
      </li>
  </ul>

</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: mapActions(['loadPrice'])
}
</script>

<style lang="css">
</style>
