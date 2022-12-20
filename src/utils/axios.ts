import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import router from "@/router";
import store from "@/store";
import { ElMessage } from "element-plus";

const service = axios.create({
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "application/json",
  },
  // 请求时长
  timeout: 1000 * 30,
  // 请求的base地址 TODO:这块以后根据不同的模块调不同的api
  // baseURL:
  //   process.env.NODE_ENV === "development"
  //     ? "测试"
  //     : "正式",
  withCredentials: true,
});

// Request interceptors 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    // console.log(config);

    return { ...config };
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors 响应拦截器
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    return response.status === 200
      ? Promise.resolve(response.data)
      : Promise.reject(response);
  },
  (error: any) => {
    // do something
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      // errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    }
    // 处理断网的情况
    // eg:请求超时或断网时，更新state的network状态
    // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
    // 后续增加断网情况下做的一些操作
    // store.commit('networkState', false);

    return Promise.reject(error);
  }
);

const message = (msg: string, type?: any) => {
  ElMessage({
    message: msg,
    type: type || "warning",
    duration: 1500,
  });
};

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    name: "LoginPage",
  });
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status: number, other: string) => {
  // 状态码判断
  switch (status) {
    // -1: 未登录状态，跳转登录页
    case -1:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      message("登录过期，请重新登录");
      localStorage.removeItem("token");
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      message("请求的资源不存在");
      break;
    default:
      message(other);
  }
};
export default service;
