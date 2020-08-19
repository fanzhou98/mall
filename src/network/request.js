import axios from 'axios'

export function request(config) {
//创建axios实例
  const instance = axios.create({
    baseURL:'为防止接口被恶意使用，需要接口可以添加老师微信coderwhy003',
    timeout:5000
  })

//axios拦截器

  //请求时拦截
  instance.interceptors.request.use(config => {
    return config
  },error => {

  });
  //响应时拦截
  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    //console.log(error);
  });

//发送真正请求
return instance(config)
}



