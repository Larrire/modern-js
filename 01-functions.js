function myFunction() {
  this.name = 'Mateus'
  // return 'opa'
}

console.log(new myFunction())

const myArrowFunction = () => {
  this.name = 'Mateus'
}

myArrowFunction();

console.log('current context = node')
console.log(this)

// ------------------------------------------

function functionSoma(...params) {
  console.log('functionSoma')
  console.log(params)
  console.log(arguments)
}

const arrowFunctionSomar = (...params) => {
  console.log('arrowFunctionSomar')
  console.log(params)
  console.log(arguments)
}

functionSoma(1,2,3,4,5)
arrowFunctionSomar(1,2,3,4,5)