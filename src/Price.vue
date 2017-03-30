<template>
    <div id="price">
        <input
            ref="input"
            v-on:input="updateValue($event.target.value)"
        >

        </input>
        <div>{{num}}</div>
    </div>
</template>
<script>
    const price = {
        name: 'price',
        data: function(){
            return {
                num: 22
            }
        },
        methods: {
            updateValue(value){
                console.log(value);
                console.log(this.$refs.input.value);
            }
        },
    }
    export default price
</script>
