# Set

É um objeto que te permite guradar valores únicos de um tipo primitivo ou objeto.

```javascript
const mySet = new Set(['Vitor', { name: 'Vitor', age: 25 }, 25])

mySet.add('Dev')
console.log(mySet.size) // 4
console.log(mySet.has('Vitor')) // true
console.log(mySet.has('Vitor de Lima')) // false
mySet.delete(25)
console.log(mySet.has(25)) // false

const it = mySet.values()
console.log(it.next()) // { name: 'Vitor', age: 25 }

```

Set é uma boa forma de remover elementos duplicados de um Array é acessar como um interator.
