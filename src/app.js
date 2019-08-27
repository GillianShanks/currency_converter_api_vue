import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: null,
      base: null,
      currentRate: null,
      inputNumber: null
    },
    computed: {
      convertedNumber: function(){
        return this.currentRate[1] * this.inputNumber;
      }
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
