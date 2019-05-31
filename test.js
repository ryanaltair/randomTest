let shell = require('shelljs')
let table={"progress":0}
let result = {
  title: "sum",
  now: 0,
  all: 5000,
  workingCountMax: 8,
  table: table
}
let memberList = []
let workingCount = 0
const onResult = function (codeNumber, stdout) {
  if (result.now >= result.all) {
    return
  }
  workingCount--;
  result.now++
  if (stdout === '') {
    console.log('error', codeNumber)
    console.log("stdout", stdout)
  }
  for (const test of memberList) {
    if (memberList.includes(stdout) === false) {
      memberList.push(stdout)
    }
  }
  let indexName = stdout.replace('恭喜', '').trim()
  if (table[`${indexName}`]) {
    table[`${indexName}`]++;
  } else {
    table[`${indexName}`] =1
    
  }
  table["progress"]= result.now/result.all
  console.table(result.table)
}

const tryTrigger = function () {
  if (result.now < result.all) {
    if (workingCount < result.workingCountMax) {
      workingCount++
      shell.exec('node index | grep 恭喜', {
        silent: true
      }, onResult)
    }
  } else {
    process.exit()
  }
}

const batchTrigger = function () {
  for (let i = 0; i < 5; i++) {
    tryTrigger()
  }
}
setInterval(batchTrigger, 10)
 
// console.log('get', code)