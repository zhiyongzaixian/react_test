import React from 'react'
import {Route} from 'react-router-dom'
import HomeChild from './HomeChild/HomeChild'

class Home extends React.Component {
  state = {
    msg: '子组件Home的数据'
  }
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h2>Home 组件</h2>
        <Route path='/home/homeChild' component={HomeChild} exact></Route>


      </div>
    );
  }
}
Home.propTypes = {

};

export default Home;
