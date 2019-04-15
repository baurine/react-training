class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, job) {
    super(firstName, lastName)
    this.job = job
  }

  fullName() {
    return super.fullName() + ' ' + this.job
  }
}

console.log(new Employee('foo', 'bar', 'job').fullName())
