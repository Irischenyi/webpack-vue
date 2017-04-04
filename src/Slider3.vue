<template>
    <div id="slider2">
            <div class="slider-box" ref="sli">
                <slot></slot>
            </div>
    </div>
</template>
<script>
const silder2 = {
    name: 'slider2',
    props: ['numIndex','aniTime'],
    data: function(){
        return {
            nextIndex: this.numIndex+1,
            nowIndex: this.numIndex+1,
        }
    },
    created: function(){
        // this.$slots.default.reverse();
    },
    mounted: function(){
        this.change();
    },
    watch:{
        numIndex: function(item){
            this.nowIndex = this.nextIndex;
            this.nextIndex = item;
            this.change();
        }
    },
    methods: {
        change(){
            const itemLength = this.$refs.sli.children.length;
            for(let i = 0; i < itemLength; i++){
                this.$refs.sli.children[i].className = 'disblock';
            }
            this.$refs.sli.children[this.numIndex].className = "block";
        },
        animation(){

        },
    },

}
export default silder2;
</script>
<style>
.slider-box{
    width: 800px;
    height: 400px;
    margin: 0 auto;
    position: relative;
    border: 1px solid black;
    overflow: hidden;
    background-color: grey;
}
.slider-box div{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
    transition: all 1s;


}
.slider-box .disblock{
    transition: all 1s;
    opacity: 0;
    transform: scale(0.8);
}
.slider-box .block{
    transition: all 1s;
    opacity: 1
}
div{

}
.ani{

}
</style>
