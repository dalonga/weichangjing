
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },navigation:{
        nextEl:".swiper-button-next"
    },
});
//音乐部分
var music=document.getElementById("music");
var music_bg=music.getElementsByClassName("music_bg")[0];
var music_pic = music.getElementsByClassName("music_pic")[0];
var aud=music.getElementsByClassName("aud")[0];
//定义音乐的状态变量
var music_li=1;
music.onclick=function(){
    if(music_li==1) {
        //让背景gif隐藏
        music_bg.style.display = "none";
//        停止音乐图标的旋转
        music_pic.style.animation = "none";
        //停掉音乐
        aud.pause();
        music_li = 2;
    }else if(music_li==2){
        music_bg.style.display="block";

        music_pic.style.animation="run  linear infinite 1s";
        aud.play();
        music_li=1;
    }
}
//音乐部分
