

import {Effect,Console} from "effect"

// const mixed = Effect.gen(function* (){

//     const effect1 = yield* Effect.sync(() => ({
//         port:3000,
//         host:"localhost"
//     }))

//      const data = yield* Effect.tryPromise(() => fetch("/api/data").then(r => r.json())) 

//      return {config,data}
// })


const main = Effect.gen(function* (){
    const config = yield* loadConfig()
    const services = yield* initializeServices(config)
    yield* StartServer(services)
    return {config,services}
})


Effect.runPromise(main).then((result) => Console.log(result)).catch((error) => Console.log(error))
