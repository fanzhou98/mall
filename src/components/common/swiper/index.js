import HomeSwiper from "./Swiper";
import SwiperItem from "./SwiperItem";
let swiperOption =  {
  initialSlide:1,
  //循环
  loop:true,
  // 自动播放
  autoplay:2000,
  speed:200,
  //用户交互之后继续autoplay
  autoplayDisableOnInteraction : false,
  //自动播放不在最后一个停止
  stopOnLastSlide:false,
  //展示方向，垂直或水平
  direction: 'horizontal',
  //鼠标覆盖时变成抓手的形状
  grabCursor: true,
  //setWrapperSize: true,
  //autoHeight: true,
  //分页器
  pagination: '.swiper-pagination',
  //分页器点击跳转页面
  paginationClickable: true,
  //翻页按钮
  prevButton: '.swiper-button-prev',
  nextButton: '.swiper-button-next',
  //滚动边栏
  //scrollbar: '.swiper-scrollbar',
  //使用鼠标滚轮
  mousewheelControl: true,
  observe:true,
  observeParents: true,
  //居中
  centeredSlides:true,
  //用户滑动的距离与触摸距离的比例，越大划的越快
  touchRatio:1.2,
  //滑到下一个的最小拖动距离比，最大值0.5,值越大需要距离越大
  longSwipesRatio:0.2,
  //用户双击可以放大
  //zoom:true,


  // if you need use plugins in the swiper, you can config in here like this
  // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
  //debugger: true,
  // swiper callbacks
  // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
  onTransitionStart(swiper) {
  //console.log(swiper)
  },
};
export {SwiperItem,HomeSwiper,swiperOption}
