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
});

Vue.component('button-counter', {
    template: '<button v-on:click="counts">{{ count }}</button>',
    data: function (){
        return {
            count: 0
        }
    },
    methods: {
        counts(){
            this.count = this.count + 1;
            this.$emit('increment');
        },
    
    }
});
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    num: 90,
    parentMsg: '',
    total: 0,
  },
  components: {
      'App': App,
      'my-component': Child,
  },
  methods: {
      imcrementTatal(){
          this.total = this.total + 1;
      },
      change(){
          console.log('11111');
      }
  }
})
