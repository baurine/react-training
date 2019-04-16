// this.cnt = 100
// const counter = {
//   cnt: 50,
//   inc: function() {
//     console.log(this.cnt)
//     setTimeout(() => console.log(this.cnt), 1000)
//   }
// }

// counter.inc.call({cnt: 20}) // 50 50

// ---------

this.cnt = 100
const counter = {
  cnt: 50,

  inc: function() {
    setTimeout(() => console.log(this.cnt++), 1000)
  }
}

// counter.inc()
// counter.inc()

const myInc = counter.inc

myInc()
myInc() // 在浏览器运行结果是 100 101，在 node 中的 NaN

// ----------
