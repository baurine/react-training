// var -> let / const

function test1() {
  console.log(a)
  if (true) {
    var a = 1 // try let or const
  }
  console.log(a)
}

test1()

//---------------------------

function test2() {
  for(var i = 1; i < 9; i++) {
    setTimeout(function() {
      console.log(i)
    }, 0)
  }
}

// test2()

function test3() {
  for(let i = 1; i < 9; i++) {
    setTimeout(function() {
      console.log(i)
    }, 0)
  }
}

// test3()

//----------------------

function myElement(strings) {
  return `<div style='${strings.join('')}'/>`
}

function test4() {
  const el = myElement`
    display: inline-block;
    border-radius: 3px;
  `
  console.log(el)
}

test4()

//----------------------

function test5() {
  const data = {
    a: 1,
    b: 2,
    c: 3,
  }
  const { a, b, c } = data
  const d = a + b + c
  console.log(d)
}

test5()

//-----------------------

function test6() {
  const a = 1;
  const b = 2;
  const c = 3;
  const d = { a, b, c }
  console.log('test6', d)
}

test6()

//------------------------

function test7() {
  const foo = { a: 1, b: 2, c: 3 }
  const bar = { d: 4, ...foo }
  console.log('test7:', bar)
}

test7()
