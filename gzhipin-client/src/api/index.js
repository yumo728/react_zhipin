/*
包含n个接口请求函数的模块
每个函数返回的都是promise对象
 */
import ajax from './ajax'

// 请求注册接口
export const reqRegister  =  (user) => ajax('./register',user,'POST')

// 请求登陆接口
export const reqLogin = (user) => ajax('/login', user, 'POST')
// 更新用户接口
export const reqUpdateUser = (user) => ajax('/update', user, 'POST')