import axios from "axios";

export default function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL: "http://localhost:8000",
        timeout: 5000,
    });

    //发送网络请求
    return instance(config);
}
