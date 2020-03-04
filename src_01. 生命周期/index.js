import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// render作用： 1. 将虚拟的DOM对象转换成真实的DOM对象 2. 将真实的DOM对象片段插入到页面对应的容器中
ReactDOM.render(<App />, document.getElementById('root'));
