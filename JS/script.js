//找到按钮元素
//document.querySelector('按钮'); 
//在页面里找到class为 btn_01 的元素
let btn = document.querySelector('.btn_01');
//给按钮添加点击事件
btn.addEventListener('click',function(){
    alert('欢迎来到银河雨——一款即时通讯软件🌌');
});
//addEventListener('click',function(){});
//监听点击事件 点击时执行里面的代码
//alert: 弹出一个提示框

//*****************************************************************************************************
//隐藏元素
let fadeElements = document.querySelectorAll('.fade-in');//声明一个变量，用来存储所有需要执行淡入动画的元素
//在整个网页文档中查找所有 CSS 类名为 fade-in 的 HTML 元素。它会返回一个包含这些元素的集合（NodeList）
window.addEventListener('scroll',function(){//给浏览器窗口注册一个“监听器”
    //'scroll'每当用户滚动鼠标轮或拖动滚动条时，大括号 {} 里的匿名函数就会被触发执行
    //对前面获取到的每一个带有 .fade-in 类的元素执行相同的操作
    fadeElements.forEach(function(el){//el: 代表当前循环正在处理的那一个具体的HTML元素
        //这是一个非常关键的方法。它返回一个对象，包含了该元素相对于浏览器可视窗口（Viewport）的上下左右距离
        let rect = el.getBoundingClientRect();
        //if-else语句判断是否进入视野
        if(rect.top < window.innerHeight - 100){//代表该元素顶部距离窗口顶端的高度
            //window.innerHeight: 获取当前浏览器窗口的高度
            //逻辑是：如果元素的顶部位置已经低于窗口高度减去100像素的位置 说明元素已经从底部冒出来了
            el.classList.add('visible');
        }else{
            el.classList.remove('visible');
        }
    });
});

//*****************************************************************************************************
//轮播图
const images = document.querySelectorAll('.carousel-img');  //获取所有轮播图片 返回NodeList(相当于数组)
const nextBtn = document.querySelector('#nextBtn');  //获取下一张按钮  #表示按id查找
const prevBtn = document.querySelector('#prevBtn');  //获取上一张按钮
let currentIndex = 0;  // 当前显示第0张（第一张）
function showImage(index) {  //function声明：“先用函数 再声明”（syntax:  function funName(arugments){} ）
    images.forEach(img => img.classList.remove('active'));  //  => 对每张图片执行箭头函数  forEach遍历数组
    //forEach把数组里的每个元素“捞”出来作为参数传参给img（也就是形参）forEach是一个循环  把所有的图片都移除active
    //给每个元素除去active
    images[index].classList.add('active');
}
//用function时可以在声明函数之前就调用函数！！
function nextImage() {  //下一张照片
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);  //传参
}
// 自动轮播 (每3秒切换一次)
//setInterval是浏览器提供的函数（每隔一段时间重复执行一段函数）
//并返回定时器数字id到autoPlay
let autoPlay = setInterval(nextImage, 3000);//每3000毫秒（3秒）自动调用nextImage函数
nextBtn.addEventListener('click', () => {
    nextImage();
    clearInterval(autoPlay); //用户手动点击后重置计时器
    autoPlay = setInterval(nextImage, 3000);
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    clearInterval(autoPlay);
    autoPlay = setInterval(nextImage, 3000);
});
