const {
    Random
} = require("random-js");
const random = new Random(); // uses the nativeMath engine
const process = require('process')
// const send = require('./send')
let list = require('./list')
let talkList = require('./talk')
console.log(talkList)
let sum = 0
let depth = 0
for (const one of list) {
    if (one.count > depth) {
        depth = one.count
    }
}
let votes = 10
let lastTrigger = 1;
for (const one of list) {
    one.seed = 10
    for (let i = talkList.length; i >= 0; i--) {
        if (talkList[i] === one.name) {
            one.seed = i
        }

    }
    sum += one.seed
    one.start = lastTrigger
    one.last = lastTrigger + one.seed - 1
    one.rate = one.seed / votes
    lastTrigger = lastTrigger + one.seed
    console.log(`name: ${one.name}, seed: ${one.seed} , ${one.start}:${one.last}, rate: ${one.rate}`)
}
console.log('who we are', list.length)
// console.log('sum', sum, 'votes', votes, 'depth', depth)


const value = random.integer(1, sum);
console.log('get lucky num ', value)
for (const one of list) {
    if (value >= one.start && value <= one.last) {
        console.log('now we get', one)
        console.log(`恭喜${one.name}`)
        process.exit()
    }
}