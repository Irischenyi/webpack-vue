<template>
    <div class="slide-container">
        <div class="warpper" ref="wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['index'],
    watch: {
        index: function(val, oldVal){
            this.$refs.wrapper.children[val].style.color = "red";
        }
    },
    mounted: function(){
        console.log('xxxx', this.$refs.wrapper.children);
    },
};
</script>
<style>
.slide-container{

}

.warpper{

}

div{

}


</style>
