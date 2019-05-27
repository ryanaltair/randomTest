const {
    Random
} = require("random-js");
const random = new Random(); // uses the nativeMath engine
const process = require('process')
// const send = require('./send')
let list = require('./list')
let sum = 0
let depth = 0
for (const one of list) {
    if (one.count > depth) {
        depth = one.count
    }
}
let votes = Math.pow(2, depth)
let lastTrigger = 1;
for (const one of list) {
    let seed = votes - Math.pow(2, (depth - one.count))
    if (seed === 0) {
        seed = votes
    }
    sum += seed
    one.start = lastTrigger
    one.last = lastTrigger + seed - 1
    one.seed = seed
    one.rate = seed / votes
    lastTrigger = lastTrigger + seed
    console.log(`name: ${one.name}, seed: ${one.seed} , ${one.start}:${one.last}, rate: ${one.rate}`)
}
console.log('who we are', list.length)
console.log('sum', sum, 'votes', votes, 'depth', depth)


const value = random.integer(1, sum);
console.log('get lucky num ', value)
for (const one of list) {
    if (value >= one.start && value <= one.last) {
        console.log('now we get', one)
        console.log(`恭喜${one.name}` )
        // send(one.name)
        process.exit()
    }
}