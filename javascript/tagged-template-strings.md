# Tagged Template Strings

Utilizando em conjunto com template strings, os tagged template string permite que você utilize uma função na frente do texto e consiga realizar algumas modificações nesse texto.


```javascript
const country = 'BR'
const secondCountry = 'AU'

const countryCodes = {
  'BR': 'Brasil',
  'AU': 'Austrália'
}

function answer(strings, ...values) {
  return `${strings[0]}${countryCodes[values[0]]}${strings[1]}${countryCodes[values[1]]}
  - Resposta: ${values[0] == 'BR' & values[1] == 'AU' ? 'Verdade' : 'Mentira'}`
}

console.log(answer`Eu moro no ${country} mas gostaria de morar na ${secondCountry}`)
// Eu moro no Brasil mas gostaria de morar na Austrália
//   - Resposta: Verdade
```