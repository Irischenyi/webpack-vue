<template>
  <div id="app" v-once>
    {{msg}}
    <div v-html="all"></div>
    <div id="change" v-bind:class="{ active: isActive }">sss</div>
    <div v-bind:id="dynamicId">red</div>
    <div v-bind:disabled="someDynamicCondition">Button</div>
    <div>{{ message.split('').reverse().join('') }}</div>
    <div>{{ number + 1 }}</div>
    <div v-bind:id="'list-'+ id">sss</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      all: '<h1>call all</h1>',
      isActive: true,
      dynamicId: 'dynamicId',
      someDynamicCondition: true,
      message: '1234567',
      number: 2,
      id: 'a',
      ok: true,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#dynamicId{
    color:red;
}
.active{
    color:red;
}
h1, h2 {
  font-weight: normal;
}
#list-a {
    font-size: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
