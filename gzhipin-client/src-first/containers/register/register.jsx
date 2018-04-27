import React,{Component} from 'react'

import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

const ListItem = List.Item
export default class Register extends Component{
    state={
        username:'',
        password:'',
        password2:'',
        type:'dashen'   //用户类型名称 dashen/laoban
    }

    register=()=>{
        console.log(this.state)
    }

    tologin=()=>{
        this.props.history.replace('./login')
    }
    //处理输入数据的改变，更新对应的状态
    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]:val  //属性名不是name，而是name变量的值
        })
    }

    render(){
        const {type} = this.state
        return (
            <div>
                <NavBar>硅&nbsp;&nbsp;谷&nbsp;&nbsp;直&nbsp;&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem placeholder='请输入用户名' onChange={val=>{this.handleChange('username',val)}}>用户名：</InputItem>
                        <InputItem placeholder='请输入密码' type="password" onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <InputItem placeholder='请确认密码' type="password" onChange={val=>{this.handleChange('password2',val)}}>确认密码：</InputItem>
                        <ListItem>
                            <span>用户类型：</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='dashen'} onChange={()=>this.handleChange('type','dashen')}>大神</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='laoban'} onChange={()=>this.handleChange('type','laoban')}>老板</Radio>
                        </ListItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                    <Button onClick={this.tologin}>已有账户</Button>
                </WingBlank>
            </div>
        )
    }
}