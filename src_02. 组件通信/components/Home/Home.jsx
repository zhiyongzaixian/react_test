import React from 'react'


class Home extends React.Component {
  state = {
    msg: '子组件Home的数据'
  }
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.getChildData(this.state.msg)
    // React不能修改父组件传递过来的props数据，修改会直接报错
    this.props.num = 123;
    
  }
  
  render () {
    return (
      <div>
        <h2>Home 组件</h2>
        <p>{this.props.num}</p>
      </div>
    );
  }
}
Home.propTypes = {

};

export default Home;
