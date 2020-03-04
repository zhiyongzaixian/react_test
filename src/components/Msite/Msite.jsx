import React from 'react'


class Msite extends React.Component {
  state = {
    msg: '子组件Home的数据'
  }
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h2>Msite 组件</h2>
      </div>
    );
  }
}

export default Msite;
