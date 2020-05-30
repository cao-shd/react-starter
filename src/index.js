import React from 'react';
import ReactDOM from 'react-dom';

import Hello from '@/components/Hello'
const hello = {
    title: 'Hello World',
    value: 'Hi!'
}
// 渲染DOM
ReactDOM.render(
    // 传递 props 参数
    <Hello { ...hello }></Hello>,
    // 挂载 DOM 对象
    document.getElementById('app')
);


