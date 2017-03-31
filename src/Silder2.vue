<template>
    <div id="slider2">
            <div class="slider-box"></div>
            <div @click="change">click</div>
    </div>
</template>
<script>
const silder2 = {
    name: 'slider2',
    props: ['numIndex','aniTime'],
    methods: {
        change(){
            console.log(this.numIndex);
            console.log(this.aniTime);
            console.log(this.$children);
        }
    },

}
export default silder2;
</script>
<style>
.slider-box{
    width: 800px;
    height: 400px;
    background-color: white;
    margin: 0 auto;
}
</style>
