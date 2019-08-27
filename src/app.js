import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: null,
      base: null,
      // rate1: ["", 0],
      rate2: ["", 0],
      // input1:0,
      euroInput:0,
      input2:0
    },
    computed: {
      convertToEuro: function(){
        this.euroInput = this.input2/this.rate2[1];
      },
      convertFromEuro: function(){
        this.input2 = this.rate2[1] * this.euroInput;
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
          // this.rates['EUR']=1;
          this.base = data.base;
        })
      },

    }
  });
})
