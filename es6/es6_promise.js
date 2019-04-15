console.log('step1')

new Promise(function(resolve, reject){
  const ranVal = Math.ceil(Math.random()*100)
  if (ranVal < 50) {
    resolve(ranVal)
  } else {
    reject(ranVal)
  }
})
// .then(val => console.log('step2 - success:', val),
//       val => console.log('step2 - failed:', val))
.then(val => console.log('step2 - success:', val))
.catch(val => console.log('step2 - failed:', val))

console.log('step3')
