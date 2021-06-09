#! /usr/bin/env node
const fs = require('fs');

const fileName = process.argv[2];

(() => {
  try {
    const data = fs.readFileSync(`./${fileName}.md`, 'utf8')
    const code = data
      .match(/```\s*([^]+?.*?[^]+?[^]+?)```/g)
      .join('')
      .trim()
      .replace('```javascript', '')
      .replace('```', '')
      
    eval(code)
  } catch (err) {
    console.error(err)
  }
})();