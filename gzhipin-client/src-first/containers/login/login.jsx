import React,{Component} from 'react'

import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

const ListItem = List.Item
export default class Register extends Component{
    state={
        username:'',
        password:'',
    }

    login=()=>{
        console.log(this.state)
    }

    toregister=()=>{
        this.props.history.replace('./register')
    }
    //处理输入数据的改变，更新对应的状态
    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]:val  //属性名不是name，而是name变量的值
        })
    }

    render(){
        return (
            <div>
                <NavBar>硅&nbsp;&nbsp;谷&nbsp;&nbsp;直&nbsp;&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem placeholder='请输入用户名' onChange={val=>{this.handleChange('username',val)}}>用户名：</InputItem>
                        <InputItem placeholder='请输入密码' type="password" onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.login}>登&nbsp;&nbsp;&nbsp;陆</Button>
                    <Button onClick={this.toregister}>没有账户</Button>
                </WingBlank>
            </div>
        )
    }
}