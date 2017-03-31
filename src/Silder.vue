<template>
    <div id="silder">
        <div class="silder-box">
            <transition-group name='pic-animation'>
                <div
                    class="pic-box"
                    v-for="(pic,index) in pics"
                    v-show="pic.show"
                    :key = "index"
                    ref = "allow"
                >
                    <img :src="pic.src" />
                </div>
            </transition-group>
        </div>
        <div
            class="left-click cursor"
            @click="leftClick"
        >
            <img src="./assets/left.png"/>
        </div>
        <div
            class="right-click cursor"
            @click="rightClick"
        >
            <img src="./assets/right.png"/>
        </div>
    </div>
</template>
<script>
const silder = {
    name: 'slider',
    data: function (){
        return {
            num: 0,
            allow: 'ssss',
            pics: [
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490937557950&di=ebd5ac706731832caa918acf5462b42a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F577de4dc59474.jpg', show: true},
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490934304357&di=0f66992e307041b5676a5b51b1251f12&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2015%2Flxy%2F01%2F14%2F1%2F6.jpg', show:false},
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490934599416&di=89ae0a8b580013d84adcc2584adee148&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150604%2Ftooopen_sy_128463867832.jpg', show: false},
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490937476205&di=b564c67a320d331822f5f95d575f15a3&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201412%2F05%2F20141205195809_YEHrU.jpeg', show: false},
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490937532643&di=6d404efb05cb6edb5844e618013a0405&imgtype=0&src=http%3A%2F%2Fphoto.enterdesk.com%2F2007-10-27%2F200710270048429972.jpg', show:false},
                {src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491535673&di=d23e48b0751169376ac16325614e1960&imgtype=jpg&er=1&src=http%3A%2F%2Fimg165.poco.cn%2Fmypoco%2Fmyphoto%2F20120310%2F12%2F52102217201203101217011788501632612_013.jpg', show:false}
            ]
        }
    },
    methods: {
        leftClick(){
            let nowPicNum = this.num;
            let nextPicNum = this.num - 1;
            this.num = this.num - 1;
            if(nowPicNum === 0){
                nowPicNum = 0;
                nextPicNum = this.pics.length -1;
                this.num = this.pics.length-1;
            }
            this.picResize();
            this.pics[nowPicNum].show = false;
            this.pics[nextPicNum].show = true;
            console.log('this.'+this.currentIndex);
        },
        rightClick(){
            this.num = this.num;
            let nowPicNum = this.num;
            let nextPicNum = this.num + 1;
            this.num = this.num + 1;
            if(nextPicNum === this.pics.length){
                nextPicNum = 0;
                nowPicNum = this.pics.length -1;
                this.num = 0;
            }
            this.picResize();
            this.pics[nowPicNum].show = false;
            this.pics[nextPicNum].show = true;
        },
        picResize(){
            console.log(this.num+'num');
            console.log('picsize'+this.$refs.allow[this.num].getElementsByTagName('img')[0].width);
            let windowWidth = document.documentElement.clientWidth;
            let windowHeight = document.documentElement.clientHeight;
            console.log(windowWidth);
        }
    }
};
export default silder;
</script>
<style>
*{
    user-select:none
}
#silder {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    overflow: hidden;
}
.silder-box {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    background-color: black;
}
.silder-box .pic-box{
    width: auto;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
}
.silder-box .pic-box img{
    height: 100%;
    position: relative;

}
.left-click {
    width: 10%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.right-click {
    width: 10%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
}
.cursor{
    cursor: pointer;

}
.cursor:hover img{
    transition: all 1s;
    opacity: 1;
}
.cursor img{
    opacity: 0;
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    transition: all 0.2s;
}
.cursor:after{
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

.pic-animation-pic{
    transition: all 1s;
}
.pic-animation-enter-active{
    transition: all 1s 1s;
}
 .pic-animation-leave-active{
     transition: all 1s;
 }
.pic-animation-enter, .pic-animation-leave-active{
    opacity: 0;
    /*transform: scale(1.9);*/
    position: absolute;
}
.pic-animation-leave-active{

}
</style>
