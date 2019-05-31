let shell = require('shelljs')
for (let i = 0; i < 100; i++) {
    shell.exec('node index | grep 恭喜')
}
console.log('!!!!! last time:')
shell.exec('node index | grep 恭喜')