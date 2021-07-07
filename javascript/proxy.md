# Proxy

É uma forma de definir comportamentos customizados para operações em um objeto.

```javascript

let obj = {
  name: 'Vitor',
  age: 25
};

let proxy = new Proxy(obj, { 
  get(target, name) { 
    console.log('Nome solicitado')
    return target.name
  },

  set(target, name, value) {
    console.log('Nome alterado')
  }
})

console.log(obj.name) // Vitor
console.log(proxy.name) // Nome solicitado // Vitor

proxy.name = 'Raul' // Nome alterado

```