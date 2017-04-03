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
        }
    },
    created: function(){
        this.$slots.default.reverse();
    },
    mounted: function(){
        this.change();
    },
    watch:{
        numIndex: function(item){
            this.change();
        }
    },
    methods: {
        change(){
            const itemLength = this.$refs.sli.children.length;
            for(var i = 0; i < itemLength; i++){
                this.$refs.sli.children[i].className = 'disblock';
            }
            this.$refs.sli.children[this.numIndex-1].className = "block";
        },
    },

}
export default silder2;
</script>
<style>
.slider-box{
    width: 800px;
    height: 400px;
    background-color: red;
    margin: 0 auto;
    position: relative;
    border: 1px solid black;
}
.slider-box div{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
}
.disblock{
    display: none;
}
.block{
    display: block;
}
</style>
