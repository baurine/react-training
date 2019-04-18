
# React (View)

- ref: https://reactjs.org/docs/getting-started.html
- props & state
- handle event
- lifecycle
- css: CSS Modules / styled-component / Emotion
- react hooks

---

React 的主要特点：

1. write html by js, even css
1. 组件化：将一个大的页面拆成很多小的组件，再组装起来，组件复用，发布到 npm 供其它人方便使用
1. mvvm (vue/angular/flutter): 数据和 UI 永远保持不致，不会出现不一致的情况

---

## props & state

可以这样理解：props 相当于函数的参数，state 相当于函数内的局部变量。

先来写一个 React 的 Hello world

js 版本：

    // HellowMessage1.jsx
    import React from 'react'
    class HelloMessage extends React.Component {
      render() {
        return (
          <div>
            Hello {this.props.name}
          </div>
        )
      }
    }
    export default HelloMessage1

ts 版本：(先把 HelloMessage1.jsx 直接改名为 HelloMessage2.tsx 看会提示什么错误信息)

    // HellowMessage2.tsx
    import React from 'react'

    type HelloProps = {
      name: string
    }

    class HelloMessage2 extends React.Component<HelloProps> {
      render() {
        return (
          <div>Hello {this.props.name}</div>
        )
      }
    }

    export default HelloMessage2

使用:

    class App extends Component {
      render() {
        return (
          <div className="App">
            <HelloMessage1 name='javascritp'/>
            <HelloMessage2 name='react'/>
          </div>
        );
      }
    }

从 `<` 开始的就是 jsx，从 `{` 开始的就是 js 代码。

自写义的容器用双驼峰命名。

如果 component 没有内部 state，只接受 props，那么可以简写为纯函数。

    // HelloMessage3.tsx
    type HelloProps = {
      name: string
    }
    const HelloMessage3 = (props: HelloProps) => <div>Hello {props.name}</div>

    // 或
    function HelloMessage3(props: HelloProps) {
      return (
        <div>Hello {props.name}</div>
      )
    }

当在渲染 HelloMessage3 即 `<HelloMessage3 name='xxx'>` 时，实际逻辑是在调用 `HelloMessage3({name: 'xxx'})` 这个函数。

props 除了数据，还可以包含回调函数，这个函数用来由子组件向父组件回传数据。

    <button onClick={(event) => alert('click')}> click </button>

复杂一点的例子：

    type HelloProps = {
      name: string
      onClickBtn: (str: string) => void
    }

    class HelloMessage4 extends React.Component<HelloProps> {
      render() {
        return (
          <div style={{display: 'flex'}}>
            <div>Hello {this.props.name}</div>
            <button onClick={() => this.props.onClickBtn(`Hello ${this.props.name}`)}>click</button>
          </div>
        )
      }
    }

只接受 props 的组件称之为展示型组件，只用来展示，将 data 显示到 UI 上。

说到 props 的回调函数，就继续说说 react 如何进行事件处理，主要就是通过 props 中的回调函数处理。

比如：

    <button onClick={(event) => ...}
    <input onChange={(event) => ...} onFocus={...} onBlur={...}>
    <div onMouseEnter={...} onMouseMove={...} onMouseLeave={...}>

处理 document 上的原生事件，后面关于 lifecycle 也会讲到，这里先了解一下

    componentDidMount() {
      document.addEventListener('click', (event) => {
        console.log(...)
      })
      document.addEventListener('resize', (event) => {
        console.log(window.innerWidth)
      })
    }

---

state，内部状态。具有内部 state 的组件，一般可以称之为容器型组件，在 react 的老版本中，只能用 class 来实现。

props 是不变的，state 是用来改变的，改变 state 的值，会引起组件的重新渲染，更新 UI。

典型的例子：计数器

    type Props = {
      initialCnt: number
    }

    type State = {
      cnt: number
    }

    export default class Counter extends React.Component<Props, State> {
      constructor(props: Props) {
        super(props)

        this.state = {
          cnt: props.initialCnt
        }
      }

      incCount = () => {
        this.setState({cnt: this.state.cnt+1})
        // this.setState(prevState => ({cnt: prevState.cnt+1}))
      }

      decCount = () => {
        this.setState({cnt: this.state.cnt - 1})
        // this.setState(prevState => ({cnt: prevState.cnt - 1}))
      }

      render() {
        const { cnt } = this.state

        return (
          <div style={{display: 'flex', margin: '10px'}}>
            <button onClick={this.decCount}>-</button>
            <span style={{padding: '10px', fontSize: '20px'}}>{cnt}</span>
            <button onClick={this.incCount}>+</button>
          </div>
        )
      }
    }

使用 `this.setState()` 修改 state，不直接修改原来的 state，而是使用原来的值，创建一个新的 state 对象，触发 UI 重新渲染，显示新的数据。

另外，this.setState() 一般情况下是异步执行的，执行后 state 的值并不是马上生效。

React 本身并不难，难就难在于 state 的管理，大型项目一般会用 redux。而 redux 的难又难在于处理异步。

---

## 生命周期

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

常用：constructor(), componentDidMount(), componentDidUpdate(), componentWillUnmount()

一般我们会在 componentDidMount() 里面所谓的 side effect，比如请求 API，监听 DOM 原生事件，比如 window 的 resize，document 的 click 事件等。

示例1：监听 window 的 resize 事件。

    export default class WindowWidthViewer extends React.Component<{}, State> {
      readonly state: State = {
        width: 0
      }

      resizeHandler = () => {
        this.setState({width: window.innerWidth})
      }

      componentDidMount() {
        this.resizeHandler()

        window.addEventListener('resize', this.resizeHandler)
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler)
      }

      render() {
        const { width } = this.state

        return (
          <div style={{margin: '10px', fontSize: '24px'}}>
            { width }
          </div>
        )
      }
    }

示例2：更新 document title，直接在 Counter component 中修改：

    updateDocumentTitle() {
      document.title = `${this.state.cnt}`
    }

    componentDidMount() {
      this.updateDocumentTitle()
    }

    componentDidUpdate() {
      this.updateDocumentTitle()
    }

思考：

1. 如果不处理 componetDidUpdate() 会怎么样
1. 如果直接将 `this.updateDocumentTitle()` 放在 `decCnt()` 和 `incCnt()` 方法中执行会怎么样

示例3：访问 API

    export default class CuteCat extends React.Component<{}, State> {
      readonly state: State = {
        catUrl: ''
      }

      componentDidMount() {
        const apiUrl = 'http://www.mocky.io/v2/5cb45b43330000921711b9c9'
        fetch(apiUrl)
          .then(res => res.json())
          .then(catsRes => (catsRes as CatsRes).data.pics[0])
          .then(catUrl => this.setState({catUrl}))
      }

      render() {
        const { catUrl } = this.state

        return (
          catUrl ?
          <img src={catUrl}/> :
          'miao~'
        )
      }
    }

---

## CSS

- global css
- css modules
- css-in-js
  - inline
  - [styled-compoent](https://www.styled-components.com/) / [emotion](https://emotion.sh/docs/introduction)


示例：

    import './StyleExample.css'
    import styles from './StyleExample.module.css'

    const MyBtn = styled.a`
      background: palevioletred;
      color: white;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `

    class StyleExample extends React.Component {
      render() {
        return (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <a className='my_btn'>button 1 (global css)</a>
            <a className={styles.my_btn}>button 2 (module css)</a>
            <MyBtn>button 3 (styled-component)</MyBtn>
          </div>
        )
      }
    }

---

## React Hooks

- https://reactjs.org/docs/hooks-intro.html
- https://mp.weixin.qq.com/s/vHzgNqaRiDF9tq3JgW7LxQ

目标：替代 class，所有组件都用函数表示。函数组件不再是 stateless 组件了。

原因：class 让人迷惑 (??)，stateful 组件不易复用...

Hooks:

- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- ...

最常用的是 useState 和 useEffect

来看看前面的计数器用 React Hooks 是怎么实现的：

    import React, { useState, useEffect } from 'react'

    type Props = {
      initialCnt: number
    }

    export default function HooksCounter(props: Props) {
      const [count, setCount] = useState(props.initialCnt)

      useEffect(() => {
        document.title = `${count}`
      })

      return (
        <div>
          <button onClick={()=>setCount(count-1)}>-</button>
          <p>{count}</p>
          <button onClick={()=>setCount(count+1)}>+</button>
        </div>
      )
    }
