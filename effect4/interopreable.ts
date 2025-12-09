


import {Effect , Console} from "effect"

// const e1 = Effect.succeed(42)

// const e2 = Effect.fail("error")

// const e3 = Effect.log("hi")


// const effects = [e1,e2,e3]

// console.log(effects)


const e3 = Effect.succeed(43)

const e4 = Effect.fail("Failure")

const e5 = Effect.log("hello")

const effect1 = [e3,e4,e5]


// console.log(effect1)

const b  = Effect.runSync(e3)

const a  = await Effect.runPromise(e4)

const c = Effect.runSyncExit(e5)

console.log('RunSync:'+b)

console.log('RunPromise:'+a)

console.log('RunExit:'+c)



