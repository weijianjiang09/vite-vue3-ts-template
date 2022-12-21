import { createApp } from "vue";
import "./assets/style/mian.scss";
import App from "./App.vue";
import router from "./router/index";
import "element-plus/theme-chalk/dark/css-vars.css";
import "element-plus/dist/index.css";
// 引入 BUS
import mitt from "mitt";

const Mit = mitt();
//全局声明 先声明在定义 顺序不能改
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit;
  }
}

const app = createApp(App);

// 组件间传值
app.config.globalProperties.$Bus = Mit;

app.use(router);

app.mount("#app");
