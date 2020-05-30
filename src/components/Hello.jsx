import React from 'react';

// 组件必须继承自 React.Component
export default class Hello extends React.Component {

  // 组件内部必须要有 render 函数
  // 用于渲染当前组件虚拟 DOM 树
  render() {
    // props 参数可直接使用
    return <div title={this.props.title}>
      {this.props.value}
    </div>;
  }

}