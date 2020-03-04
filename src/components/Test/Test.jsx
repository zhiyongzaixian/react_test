import React from 'react'


class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h2>Test 组件</h2>
        <p>props传参： {this.props.a}</p>
      </div>
    );
  }
}

export default Test;
