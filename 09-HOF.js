const products = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
]

// .find and .findIndex
const find = products.find( product => product.price > 5000)
const findIndex = products.findIndex( product => product.name === 'MacBook Pro')
// console.log({ find })
// console.log({ findIndex })

// .some and .every
const some = products.some( product => product.quantity <= 1 );
const every = products.every( product => product.quantity > 3 );
// console.log({ some })
// console.log({ every })

// .map
const map = products.map( product => ({ ...product, subTotal: product.quantity * product.price }))
// console.log({ map })

// .filter
const filter = products.filter( product => product.quantity > 1)
// console.log({ filter })

// .reduce
const reduce = products.reduce((accumulator, product) => {
  console.log(product)
  return accumulator + (product.quantity * product.price)
}, 0)
console.log({ reduce })