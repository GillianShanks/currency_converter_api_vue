import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: null,
      base: null
    },
    computed: {

    },
    mounted() {
      this.fetchCurrencies();
    },
    methods: {
      fetchCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then((data) => {
          this.rates = data.rates;
          this.base = data.base;
        })
      }
    }
  });
})
