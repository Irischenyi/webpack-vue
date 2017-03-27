import Vue from 'vue'
import App from './App.vue'

var Child = {
    template: '<div><div>click</div><div>{{numMessage}}</div></div>',
    data: function(){
        return {
            // num: 22,
        }
    },
    props: ['numMessage'],
    // methods:{
    //     change: function(){
    //         this.num = 100;
    //     }
    // }
}

var data = {
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
  },
  components: {
      'App': App,
      'my-component': Child,
  }
})
