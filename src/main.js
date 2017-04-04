import Vue from 'vue'
import App from './App.vue'
import Second from './Second.vue'
import Third from './Third.vue'
// import Animation from './Animation.vue'
import Price from './Price.vue'
import Component1 from './Component1.vue'
import Silder from './Silder.vue'
import Silder2 from './Silder2.vue'
// import Silder3 from './Silder3.vue'
import Render from './Render.vue'
import Maps from './Maps.vue'

// import An1 from './component/An1.vue'

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

Vue.component('childs', {
    props: ['mess'],
    template: '<span> {{ mess }} </span>'
});

Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'div',
      {
          style: {
              color: 'blue',
              fontSize: '22px'
          },
          on: {
              click: this.clickHandler
          }
      },
      [
          createElement('h1','helloworld'),
          'bar'
      ]
    )
  },
  // template:' <div>sssss<div v-on:click="clickMethod">click</div>\
  // </div>\
  // ',
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  methods: {
      clickMethod(){
          console.log(this.$slots.default);
      },
      clickHandler(){
          console.log('ssssss');
      }
  },
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    num: 0,
    parentMsg: '',
    total: 0,
    sliderNum: 0,
    time: 100,
    index: 0,
  },
  components: {
      'App': App,
      'my-component': Child,
      'Second': Second,
      'Third': Third,
    //   'Animation': Animation,
      'Price': Price,
      'Component1': Component1,
      'Silder': Silder,
      'Silder2': Silder2,
      'Render': Render,
    //   'An1': An1,
      'Maps': Maps
  },
  methods: {
      imcrementTatal(){
          this.total = this.total + 1;
      },
      change(){
         const length = this.$refs.slider2.$el.children[0].children.length;
         if(this.sliderNum === length){
             this.sliderNum = 0;
         }
         if(this.sliderNum == -1){
             this.sliderNum = length-1;
         }
      },
      gotoNext() {
          this.sliderNum = this.sliderNum + 1;
          this.change();
      },
      gotoBefore(){
           this.sliderNum = this.sliderNum -1;
           this.change();
      },
      xxxHandler() {
          this.index = 2;
      }
  }
})
