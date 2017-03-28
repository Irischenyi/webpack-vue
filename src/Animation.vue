<template>
    <div id="Animation">
        ssssss
        <an1></an1>
        <an2></an2>
    </div>
</template>

<script>
    import An1 from './component/an1.vue';
    import An2 from './component/an2.vue';
    import An3 from './component/an3.vue';
    let animation = {
        name: 'Animation',
        data: function(){
            return {

            }
        },
        components:{
            'An1': An1,
            'An2': An2,
            'An3': An3,
        }
    }
    export default animation;
</script>
