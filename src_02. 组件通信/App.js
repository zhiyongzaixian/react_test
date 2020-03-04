// 应用的根组件

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home/Home'


class App extends  React.Component {
  // static 静态资源修饰符 该属性是为类对象自身添加的属性而非给实例添加
   state = {
    num: 1
  }
  constructor(){
    super()
    // this.state = {}
  }
  getChildData(data){
     console.log('子组件传递过来的数据： ', data);
  }
  componentWillMount(){
    console.log('--------------- componentWillMount 将要挂载--------------------');
    // debugger
    // 不建议在此放置运算量或者说大量的ajax请求，容易造成页面长时间白屏
  }
  
  componentDidMount() {
    console.log('--------------- componentDidMount 挂载完毕--------------------');
    // 发送ajax请求，开始定时器
    // this.intervalId = setInterval(() => {
    //   console.log('interval()');
    //   // 修改state的状态
    //   this.setState({
    //     num: ++this.state.num
    //   })
    // }, 1000)
    //
    // // 3s之后卸载组件
    // // Vue: this.$destroy
    // // React: ReactDOM.unmountComponentAtNode
    // setTimeout(() => {
    //   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    // }, 3000)
    
  }
  componentWillUpdate(){
    console.log('--------------- componentWillUpdate 将要更新--------------------');
    // 组件的状态(state, props)的数据发生改变的时候执行
  }
  
  componentDidUpdate() {
    console.log('--------------- componentDidUpdate 更新完毕--------------------');
  }
  
  componentWillUnmount() {
    console.log('--------------- componentWillUnmount 将要卸载--------------------');
    // 收尾工作： 清除定时器, 删除缓存数据
    // clearInterval(this.intervalId)
  }
  
  render() {
    let {num} = this.state
    return (
      
      <div>
        <h1>App 组件</h1>
        <p>{num}</p>
        <hr/>
        <br/>
        <br/>
        <Home num={num} getChildData={this.getChildData}/>
      </div>
    )
  }
}

// 无状态组件
// function MyComponent() {
//   const [num, setNum] = useState(0)
//   return (
//     <div>
//       <h1>App 组件</h1>
//     </div>
//   )
// }


export default App;
