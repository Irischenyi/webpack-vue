<template>
    <div id="component">
        <div>cpmmmm</div>
        <change1
            ref="change1"
            message="hello"
            @commit="commitchange"
            >
        </change1>
        <input v-model="something">
        <div>{{ something }}</div>
        <mycomponent>
            <p>这些会渲染进slot中</p>
            <p>这个也会渲染进slot中</p>
        </mycomponent>
        <layout>
            <p slot="head">这个会填充到layout的head里面</p>
            <p>这个会填充到layout的slot里面</p>
            <p slot="footer">这个会填充到layout的footer里面</p>
        </layout>
    </div>
</template>
<script>
// Vue.component('change1', {
//     template: '<div>change1</div>',
// });
    const change1 = {
        template: '<div v-on:click="commit">change1{{message}}</div>',
        props: ['message'],
        methods: {
            commit(){
                console.log('sss');
                this.$emit('commit');
            }
        }
    }
    const mycomponent = {
        template: '<div>\
        <p>这是组件的</p>\
            <slot>\
                这是一些内容等会不会显示\
            </slot>\
        </div>\
        '
    }
    const layout = {
        template: '<div>\
            ==========\
            <slot name="head"></slot>\
            <p>==========</p>\
            <slot name="footer"></slot>\
            ==========\
            \
        </div>'
    }
    const component = {
        name: 'component',
        data: function(){
            return {
                num: 22,
                something: '',
            }
        },
        methods: {
            updateValue(value){
                console.log(value);
                console.log(this.$refs.input.value);
            },
            commitchange(){
                console.log(this.$refs.change1.message);
            }
        },
        components:{
            'change1': change1,
            'mycomponent': mycomponent,
            'layout': layout,
        }
    }
    export default component
</script>
