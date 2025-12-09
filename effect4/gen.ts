

import { error } from "console"
import {Effect,Console} from "effect"


// const program = Effect.gen(function* (){
//     const a = Effect.succeed(1)
//     const b = Effect.fail("error")
//     const c = Effect.succeed(2)
//     return a+c
// })

// console.log(Effect.runSyncExit(program))

// const main = Effect.gen(function* (){

//     const config = yield* loadConfig()
//     const services = yield* initializeService(config)
//     yield* startServer(config)
//     return {config,services}
// })

// Effect.runPromise(main).then(result => console.log(result)).catch(error => console.log(error))

const asyncprogram = Effect.gen(function* (){
    yield* Effect.promise(() => new Promise(resolve))
})