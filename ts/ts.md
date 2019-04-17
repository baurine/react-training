# TypeScript

- ref: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- ref: https://scrimba.com/g/gintrototypescript
- basic types
- advanced types
- declare types
- use it in React by create-react-app
- use it in rails with webpacker

---

主要好处，相比 js 就是多了类型系统

- 有代码提示
- 易重构
- 代码更易维护和理解阅读
- 可以避免 js 中一些 typo 导致运行时崩溃的低级错误

## 基本类型

- 布尔值：boolean
- 数值：number
- 字符串：string
- 数组：`number[]`, `Array<number>`, `string[]`, `Array<string>`
- 元组：`[number, string]`
- 枚举：`enum Color { Red, Green, Blue }`
- 任意类型：any
- void

示例：

给变量指定类型：

    let var1: boolean = false
    let var2: number = 5
    let var3: string = 'str'
    let var4: number[] = [1,2,3]
    let var5: string[] = ['a', 'b']
    let var6: any[] = ['a', 1]

    // 根据字面值自动推导
    let var7 = 100 // 推导 var7 为 number
    var7 = 'str' // err!

给函数参数指定类型：

    function sayHello(name: string) {
      console.log(`Hello ${name}`)
    }

    sayHello('baurine')
    sayHello(1)

给函数返回值指定类型：

    function fullName(first: string, last: string): string {
      // return 1
      return `${first} ${last}`
    }

    fullName('foo', 'bar')

## 复杂类型 type interface

由多个基本类型组成。

示例：

    interface Person {
      firstName: string
      lastName: string
      age: number
    }
    type Person = {
      firstName: string
      lastName: string
      age: number
    }

    function printPerson(person: Person) {
      console.log(`${person.firstName} ${person.lastName}`)
    }

    printPerson({firstName: 'foo', lastName: 'bar', age: 20})

类型中的 `?`，表示 undefined，并不表示 option

    interface Person {
      firstName: string
      lastName: string
      age?: number
    }
    printPerson({firstName: 'foo', lastName: 'bar'})

定义参数为函数的类型：

    function filter(source: number[], fun: (item: number) => boolean): number[] {
      return source.filter(fun)
    }

    interface FilterFun {
      (item: number) : boolean
    }
    type FilterFun = (item: number) => boolean
    function filter(source: number[], fun: FilterFun): number[] {
      return source.filter(fun)
    }

一般把类型放到 type.d.ts 文件中。

范型：

    function filter4<T>(source: T[], fun: (item: T) => boolean): T[] {
      return source.filter(fun)
    }
    console.log(filter4(['a','b', 'ab'], (item) => item.length === 1))
    console.log(filter4([1,2,3], (item) => item > 1))

## 高级类型

只讲这几个最常用的：

- Union Types `|`
- Intersection Types `&`
- String Literal Types: `'a' | 'b' | 'c'`

Union Types:

    let var10: string = 'foo'
    // var10 = null

    let var11: string | null = 'foo'
    var11 = null

    let var12: string | number = 'foo'
    var12 = 12

    let var13: Person | null = null

    interface Person2 {
      name: string
      age: number
      job: string | null
    }

Intersection Types: 

    interface BasicInfo {
      id: number
      created_at: string
    }
    type PersonInfo = BasicInfo & Person2
    let person: PersonInfo = {
      id: 100,
      created_at: 'created_at',
      name: 'foo',
      age: 10,
      job: null
    }

String Literal Types:

    type UserType = 'admin' | 'normal'
    const userType: UserType = 'admin' // ok
    const userType2: UserType = 'user' // err!

## 类型转换

as

    interface User {
      name: string
      age: number
    }

    function testUser(type: string, obj: any) {
      if (type === 'user') {
        console.log((obj as User).name)
        // or
        let user = obj as User
        console.log(`${user.name} - ${user.age}`)
      }
    }

## declare types

http://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

使用第三方库，没有声明类型怎么办。自己声明，在 global.d.ts 中声明。比如 jQuery 有全局方法 `function jQuery(selector) {}`

    declare var jQuery: (string) => any

常用的第三方库的声明文件都有人帮我们写好了，TypeScript 推荐使用 @types 来管理类型声明文件，比如：

    npm install @types/jquery --save-dev

## use it in react

npx create-react-app my-app --typescript

https://facebook.github.io/create-react-app/docs/adding-typescript

示例 Article.tsx 以及 vox music 的 types.ts

## use it in rails with webpacker

    rails new myapp --webpack

https://github.com/rails/webpacker/blob/master/docs/typescript.md#typescript-with-react

    bundle exec rails webpacker:install:typescript
    yarn add @types/react @types/react-dom

---

作业：

将 ES6 的作业加上类型声明。

具体步骤：

1. mac 有 node 环境或者想尝试的，可以在本地开发调试，执行 `npx create-react-app my-app --typescript`，或者尝试在线开发环境 - codesandbox.io ，尝试自己创建一个 react + ts 的项目，或者 fork https://codesandbox.io/s/zxkm5vv97m 
1. 创建 types.ts 文件，在这个文件中定义类型，注意要使这些类型能在别的文件中使用，需要 export 出去
1. 创建 api.ts 文件，将之前实现的 ES6 版本的 `getPersonPlanet()` 方法放在此文件中，增加类型声明，并且把方法 export 出去
1. 在 index.tsx 使用此方法
