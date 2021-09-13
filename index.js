import Vue from 'vue'
import './style.css';

new Vue({
  el: '#app',
   data() {
    return {
      form: {
        email: '',
        password: '',
        size: '',
        gender: '',
        age: '',
        ads: ''
      }
    }
  },
});