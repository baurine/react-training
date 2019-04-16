
# ES6

- ref: http://www.alloyteam.com/2016/03/es6-front-end-developers-will-have-to-know-the-top-ten-properties/
- var -> let / const
- Template String
- Destructuring Assignment
- Object Spread Operator (...)
- class / extends
- arrow function
- module
- Promise

----

## var -> let / const

先来说说作用域，什么是作用域，就是变量起作用的区域。

ES6 之前，js 只有两个作用域

1. 函数作用域
1. 全局作用域

一般语言都有块作用域，所谓块作用域，就是用 {} 括起来的区域。`if () {}` `for () {}`

----

## Template String

Before:

    var lang = 'javascript'
    var desc = 'I like ' + lang + '.'

ES6:

    const lang = 'javascript'
    const desc = `I like ${lang}.`

Ruby:

    lang = 'javascript'
    desc = "I like #{boss}."

More: 带标签的模板字符串，styled-components

    const Button = styled.a`
      display: inline-block;
      border-radiu: 3px;
    `

这是啥用法，其实 `styled.a` 是一个函数，后面的内容是它的参数。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings

---

## Destructuring Assignment

解构

经常在 react 中看到这样的代码：

    render() {
      const { name, avatar, gender } = this.props
      const { age } = this.state
      // ...
    }

Before:

    var data = {
      a: 1,
      b: 2,
      c: 3,
    }
    var a = data.a
    var b = data.b
    var c = data.c
    var d = a + b + c

ES6:

    const data = {
      a: 1,
      b: 2,
      c: 3,
    }
    const { a, b, c } = data
    let d = a + b + c

同时，构造对象也更方便了。

    const a = 1;
    const b = 2;
    const c = 3;
    const d = { a, b, c }
    // 即 {a: a, b: b, c: c}，输出 {a: 1, b: 2, c: 3}

## Object Spread Operator (...)

对象扩展操作符

在 redux 中我们经常能看到这样的代码：

    // ...
    return {
      ...state,
      name: newName
    }

    const foo = { a: 1, b: 2, c: 3 }
    const bar = { d: 4, ...foo }
    // guess what's the value of bar

    // so you don't need to write like this:
    const bar = { d: 4, a: foo.a, b: foo.b, c: foo.c }

    // or
    const bar = Object.assign({}, foo, { d: 4 })

## class / extends

语法糖

Old style:

    function Person(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }

    Person.prototype.fullName = function() {
      return this.firstName + ' ' + this.lastName
    }

    new Person('foo', 'bar').fullName()  // "foo bar"

ES6:

    class Person {
      constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
      }
      fullName() {
        return `${this.firstName} ${this.lastName}`
      }
    }

---

Inherit:

Old Style:

    function Employee(firstName, lastName, job) {
      this.firstName = firstName
      this.lastName = lastName
      this.job = job
    }
    Employee.prototype = new Person()

    new Employee('foo', 'bar', 'coder').fullName()

ES6:

    class Employee extends Person {
      constructor(firstName, lastName, job) {
        super(firstName, lastName)
        this.job = job
      }
    }

## 箭头函数

简化函数写法，以及用来解决 this 指针的问题

Similar with anonymous function, lambda expression, but not exactly same.

    var f = v => v + 1;

    // equals
    var f = function(v) {
      return v + 1;
    }

    var sum = (num1, num2) => num1 + num2;

    // equals
    var sum = function(num1, num2) {
      return num1 + num2;
    }

---

Arrow function simplify the callback function:

    var a = [1,2,3,4,5,6,7,8,9]

    a.filter(i => i<5).map(i => i*10).reduce((a,b)=>a+b, 0)

    a.filter(function(i) {
      return i < 5
    }).map(function(i) {
      return i*10
    }).reduce(function(a,b) {
      return a+b
    }, 0)

---

Arrow function change the `this` behavior. It is determind when it is defined, not in run time.

`this`? It is a big problem in JavaScript. Simply say, the `this` in the method point to object where the method run on. The problem is you will be confused what's the object the method run on.

    this.cnt = 100  // var cnt = 100
    const counter = {
      cnt: 50,

      inc: function() {
        console.log("$$$$$$" + this.cnt++)

        setTimeout(function() {
          console.log("######" + this.cnt++)
        }, 1000)
      }
    }

    counter.inc()
    counter.inc()

---

Why?

    counter.inc()
    // `inc()` run on counter obj
    // `this` in `inc()` point to counter object

    setTimeout( fn, 1000 )
    // fn, not run on any object, so `this` point to global

---

Solution before ES6 (clsoure):

    this.cnt = 100
    const counter = {
      cnt: 50,

      inc: function() {
        var self = this
        setTimeout(function() {
          console.log(self.cnt++)
        }, 1000)
      }
    }

    counter.inc()
    counter.inc()

---

By ES6:

    this.cnt = 100
    const counter = {
      cnt: 50,

      inc: function() {
        setTimeout(() => console.log(this.cnt++), 1000)
      }
    }

    counter.inc()
    counter.inc()

---

Quiz:

    this.cnt = 100
    const counter = {
      cnt: 50,

      inc: () => console.log(this.cnt++) // what's the this?

      foo: this.cnt
    }

    counter.inc()
    counter.inc()

    console.log( counter.foo )

---

### Module

Not much to say. JavaScript finally close to most of languages.

    // a.js
    const foo = 'foo'
    function bar() {
      console.log('bar')
    }

    export { foo, bar }

    // b.js
    import { foo, bar } from 'a.js'

    console.log(foo)
    bar()

Show some project code.

---

## Promise

解决 callback hell

    request(url1, function(res1) {
        var url2 = res1.data
        request(url2, function(res2) {
            var url3 = res2.data
            request(url3, function(res3) {
              ...
            })
        })
    })

Promise:

    fetch(url1)
      .then(res1 => res.json())
      .then(data => data.url2)
      .then(url2 => fetch(url2))
      .then(res2 => res2.json())
      .then(data => data.url3)
      .then(url3 => fetch(url3))
      .catch(err => ...)
      ...

vox music 中的 request 封装

Resource: [JavaScript Promise 迷你书](http://liubin.org/promises-book/)

---

作业：

1. 现有关于星球大战的 API: https://swapi.co/api. https://swapi.co/api/people 可以得到所有人物的列表信息。请封装一个函数，接受一个字符串作为参数，这个字符串是人物姓名，比如 "Luke Skywalker"。在这个函数里，你需要先得到星战所有人物信息，从中过滤出与参数相同姓名的人物，然后在数据中会有这个人物所在家园的星球链接 (字段是 homeworld)，通过这个链接再获星球的详情，返回这个星球的名字和人口数量信息。尽量用到上面所讲特性。

    function getPersonPlanet(name) {
      // your code
      // ...
    }

假设有测试代码，它应该是这样的：

    getPersonPlanet("Luke Skywalker").then(str => assert(str === 'Tatooine - 200000'))
    getPersonPlanet("Baurine").then(str => assert(str === 'Not found'))

提示：

1. 用 Promise
1. 用 `res => res.json()` 将 response 按 json 格式转换成 object
1. 用 find 过虑 (用 filter 也可以)
