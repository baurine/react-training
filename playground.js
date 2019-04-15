this.cnt = 100
const counter = {
  cnt: 50,
  inc: function() {
    console.log(this.cnt)
    setTimeout(() => console.log(this.cnt), 1000)
  }
}

counter.inc.call({cnt: 20}) // 50 50
