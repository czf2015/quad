// @ts-nocheck
import axios from "axios";
import { message, Modal } from "antd";
// import { storage } from "@/config";
import { REQUEST_TIMEOUT } from "@/constants/TIME";
// import { jumpToLogin } from './url'
import { ROOT_PATH } from '@/config'

// axios.defaults.timeout = REQUEST_TIMEOUT;

// // let code401Flag = 0;
// let code403Flag = 0;
// const handleHTTPStatusCode = (code) => {
//   switch (code) {
//     case 401:
//       // if (code401Flag++ === 0) {
//       //   message.destroy();
//       //   message.error('登录信息过期，请重新登陆');
//       //   setTimeout(() => {
//       //     jumpToLogin()
//       //   }, 1000)
//       // }
//       break;
//     case 403:
//       if (code403Flag++ === 0) {
//         Modal.destroyAll();
//         Modal.error({
//           title: "暂无权限!",
//           content: "如有疑问，请联系权限管理员",
//         });
//       }
//       break;
//     case 404:
//       // Modal.error({
//       //   title: '不存在接口(404)',
//       //   content: '请关闭弹窗后截图，发送给管理员',
//       // });
//       console.log("404");
//       break;
//     default:
//       if (code < 200) {
//         message.error("连接中断!");
//       } else if (code < 300) {
//         message.error("网络问题!");
//       } else if (code < 400) {
//         message.info("重定向!");
//       } else if (code < 500) {
//         message.error("资源找不到!");
//       } else {
//         message.error("服务端错误!");
//       }
//       break;
//   }
// };

// // 请求拦截
// axios.interceptors.request.use(
//   (req) => {
//     // const login_user = storage.getItem("login_user");
//     // if (login_user) {
//     //   req.headers.Authorization = JSON.parse(login_user).token;
//     // }
//     // req.headers.XdrSec = "v3.0.0";
//     return req;
//   },
//   (error) => Promise.reject(error)
// );

// // 响应拦截
// axios.interceptors.response.use(
//   (res) => {
//     if (res.status == 200) {
//       return res;
//     }
//     handleHTTPStatusCode(res.status);
//     return Promise.reject(res);
//   },
//   (error) => {
//     handleHTTPStatusCode(error.response.status);
//     return Promise.reject(error);
//   }
// );

const request = async ({ method = "get", url, params, data, ...rest } = {}) => {
  return await axios
    .request({ method, url, params, data, ...rest })
    .then(({ data: responseData = {} } = {}) => {
      if (responseData.code == "0000" && responseData.data) {
        return responseData;
      }
      return Promise.reject(responseData.msg);
    });
};

export const getMockData = (id) =>
  axios.request({ method: 'get', url: `${ROOT_PATH}/api/v2/data/${id}.json` }).then(res => res.data).catch((err) => ({}));

export default request
