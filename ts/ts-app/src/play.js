function sayHello(person) {
  console.log(person.firstName + person.lastname)
}

sayHello({firstName: 'foo', lastName: 'bar'})

sayHello(2)

export { sayHello }
