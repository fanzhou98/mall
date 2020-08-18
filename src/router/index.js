import Vue from 'vue'
import VueRouter from 'vue-router'
//安装插件
Vue.use(VueRouter)

/*解决push方法报错重复点击问题*/
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//导入Home + 路由懒加载
const Home = ()=>import('../views/home/Home.vue')
const Category = ()=>import('../views/categories/Category.vue')
const Cart = ()=>import('../views/cart/Cart.vue')
const Profile = ()=>import('../views/profile/Profile.vue')
const Detail = ()=>import('../views/detail/Detail.vue')

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'Home'
    }
  },
  {
    path:'/categories',
    component:Category,
    meta:{
      title: 'Categories'
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      title: 'Cart'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title: 'Profile'
    }
  },
  {
    path: '/detail',
    component:Detail,
    meta: {
      title: 'Detail'
    }
  }
]

//创建实例
const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
