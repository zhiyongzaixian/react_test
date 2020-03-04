// 应用的根组件
import React from 'react'
import {Link, NavLink, Route, Redirect, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Msite from './components/Msite/Msite'
import Test from './components/Test/Test'
import HomeChild from './components/Home/HomeChild/HomeChild'

class App extends  React.Component {
 
  constructor(){
    super()
  }
  render() {
    return (
      
      <div>
        <h1>App 组件</h1>
        <br/>
        <hr/>
        <br/>
        <Link to='/home'>Home 组件链接</Link>  &nbsp;
        <Link to='/msite/1'>Msite 组件链接</Link>  &nbsp;
        <Link to='/test?a=123&b=234'>Test 组件链接</Link>  &nbsp;
        <Link to='/home/homeChild'>homeChild 组件链接</Link>
        <p>放置路由组件的位置</p>
        {/*精准匹配说明*/}
        {/*<Route path='/' component={Test} exact></Route>*/}
  
        {/*Switch组件用来做性能优化，一旦匹配成功路由就停止匹配*/}
        <Switch>
          {/*<Route path='/' component={Test} ></Route>*/}
  
          <Route path='/home' component={Home} ></Route>
          {/*query传参不推荐使用*/}
          {/*<Route path='/test' component={Test} ></Route>*/}
          
          {/*props传参: 注意要搭配render函数使用*/}
          <Route path='/test' render={() => <Test a={123123}/>}></Route>
          
          {/*params传参*/}
          <Route path='/msite/:id' component={Msite}></Route>
          
          
          
          <Redirect to='/home'></Redirect>
        </Switch>
       
      </div>
    )
  }
}


export default App;
