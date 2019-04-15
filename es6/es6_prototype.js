function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName
}

var fullName = new Person('foo', 'bar').fullName()  // "foo bar"
console.log(fullName)

//-----

function Employee(firstName, lastName, job) {
  this.firstName = firstName
  this.lastName = lastName
  this.job = job
}
Employee.prototype = new Person()

console.log(new Employee('foo2', 'bar2', 'coder').fullName())
