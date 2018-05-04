/*
主界面的路由组件
 */
import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'

import laobanInfo from '../laoban-info/laoban-info'
import dashenInfo from '../dashen-info/dashen-info'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/laobaninfo' component={laobanInfo}/>
                    <Route path='/dasheninfo' component={dashenInfo}/>
                </Switch>
            </div>
        )
    }
}




