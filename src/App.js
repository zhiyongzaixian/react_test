// 应用的根组件
import React from 'react'
import {Link, NavLink, Route, Redirect} from 'react-router-dom'

import Home from './components/Home/Home'
import Msite from './components/Msite/Msite'

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
        <Link to='/home'>Home 组件链接</Link>
        <Link to='/msite'>Msite 组件链接</Link>
        <p>放置路由组件的位置</p>
        <Route path='/home' component={Home}></Route>
        <Route path='/msite' component={Msite}></Route>
        <Redirect to='/home'></Redirect>
      </div>
    )
  }
}


export default App;
