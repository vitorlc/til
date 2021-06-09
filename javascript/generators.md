# Generators

Os generators te permitem definir um algorítimo iterativo escrevendo uma função que pode manter seu estado próprio.

Generator é um tipo especial de função que trabalha como uma factory para iteradores.

```javascript
function* getNames() {
  yield 'Vitor'
  yield 'Raul'
  yield 'Carolina'
}

const names = getNames() // não retorna os nomes, aguarda a iteração

console.log(names.next()) // { value: Vitor, done: false }
console.log(names.next()) // { value: Raul, done: false }
console.log(names.next()) // { value: Carolina, done: false }
console.log(names.next()) // { value: undefined, done: true }
```