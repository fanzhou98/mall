import Toast from "./Toast";
const obj = {};
obj.install = function (Vue) {
  //创建组件构造器
  const toastConstruction = Vue.extend(Toast);
  //根据构造器创建组件对象
  const toast = new toastConstruction();
  //挂载组件
  toast.$mount(document.createElement('div'));
  //渲染组件
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast
};

export default obj
