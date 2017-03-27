import Vue from 'vue'
import App from './App.vue'

let Child = {
    template: '<div><div>click</div><div>{{counter}}</div></div>',
    props: {'numMessage':{
        type: String,
        default: 'ssss',
    }},
    data: function(){
        return {
            num: 22,
        }
    },
    computed: {
        counter() {
            return this.numMessage+200;
        }
    }

    // methods:{
    //     change: function(){
    //         this.num = 100;
    //     }
    // }
}

let data = {
    counter: 0
}
Vue.component('my-component', {
  template: '<button v-on:click="counter = counter + 1">{{counter}}</button>',
  data: function() {
      return {
          counter: 0
      }
  }
})
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    num: 90,
    parentMsg: '',
  },
  components: {
      'App': App,
      'my-component': Child,
  }
})
