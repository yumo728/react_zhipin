/*
入口JS
 */
import React from 'react'  //react的插件
import ReactDOM from 'react-dom'  //react-dom的插件
import {Provider} from 'react-redux'  //react-redux插件
import {HashRouter, Switch, Route} from 'react-router-dom'  //路由插件

import store from './redux/store'  //redux固定的插件
import Login from './containers/login/login'  //登陆界面
import Register from './containers/register/register'  //注册界面
import Main from './containers/main/main' //主界面

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route component={Main}/>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'))
