//消息界面路由
import React,{Component} from 'react'
import {connect} from 'react-redux'
class Message extends Component{
    render(){
        return (
            <div>Message1</div>
        )
    }
}

export default connect(
    state=>({}),
    {}
)(Message)