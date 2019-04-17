import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getPersonPlanet } from './api/api';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

///////////////////////////

let var1: boolean = false
let var2: number = 5
let var3: string = 'str'
let var4: number[] = [1,2,3]
let var5: string[] = ['a', 'b']
let var6: any[] = ['a', 1]
let var7: [string, number] = ['a', 1]
// let var8: [string, number] = ['a', 'b']

// 字面值
// let var9 = 100
// var9 = 'hehe'

////

function sayHello(name: string) {
  console.log(`Hello ${name}`)
}

sayHello('baurine')
// sayHello(2)

////

function fullName(first: string, last: string): string {
  // return 1
  return `${first} ${last}`
}

fullName('foo', 'bar')

///

interface IPerson {
  firstName: string
  lastName: string
  age: number
}
type Person = {
  firstName: string
  lastName: string
  age: number
}

let person1: IPerson = {
  firstName: 'foo',
  lastName: 'bar',
  age: 20
}

let person2: Person = {
  firstName: 'foo2',
  lastName: 'bar2',
  age: 30
}

function printPerson(person: IPerson) {
  console.log(`${person.firstName} ${person.lastName} ${person.age}`)
}

printPerson(person1)
printPerson(person2)
printPerson({firstName: 'foo', lastName: 'bar3', age: 30})

/// 函数参数

function filter(source: number[], fun: (item: number) => boolean): number[] {
  return source.filter(fun)
}

console.log(filter([1,2,3,4,5], (item) => item > 2))

interface IFilterFun {
  (item: number) : boolean
}
function filter2(source: number[], fun: IFilterFun): number[] {
  return source.filter(fun)
}
console.log(filter2([1,2,3,4,5], (item) => item > 2))

type MyFilterFun = (item: number) => boolean
function filter3(source: number[], fun: MyFilterFun): number[] {
  return source.filter(fun)
}
console.log(filter3([1,2,3,4,5], (item) => item > 2))

//// 范型

function filter4<T>(source: T[], fun: (item: T) => boolean): T[] {
  return source.filter(fun)
}
console.log(filter4(['a','b', 'ab'], item => item.length === 1))
console.log(filter4([1,2,3], item => item > 1))

/// 高级类型
// union

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

// intersection

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

// String Literal Types:

    type UserType = 'admin' | 'normal'
    const userType: UserType = 'admin' // ok
    // const userType2: UserType = 'user' // err!

// as

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

//-----------
getPersonPlanet("Luke Skywalker").then(str => console.log(str))
getPersonPlanet("Baurine").then(str => console.log(str))
