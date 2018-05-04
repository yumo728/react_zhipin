/*
能发送ajax请求的函数模块
函数返回的是promise对象
 */

import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
    if (type === 'GET') {
        // 准备url query参数数据，拼请求参数串
        //data:{username:tom,password:123}
        //paramStr:username=tom&password=123
        let paramStr = '' //数据拼接字符串
        //Object.keys(data)：得到这个对象所有key的数组，key是属性名
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] + '&'
        })
        //多个&，去掉多余的&，此时返回的就是最重要的结果
        if (paramStr !== '') {
            paramStr = paramStr.substring(0, paramStr.lastIndexOf('&'))
            url = url + '?' + paramStr
        }
        // 使用axios发送get请求
        return axios.get(url+'?'+paramStr)
    } else {
        // 使用axios发送post请求
        return axios.post(url, data)  // data: 包含请求体数据的对象
    }
}
