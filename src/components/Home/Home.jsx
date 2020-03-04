import React from 'react'


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
      </div>
    );
  }
}
Home.propTypes = {

};

export default Home;
