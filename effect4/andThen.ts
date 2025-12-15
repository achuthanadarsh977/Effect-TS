

import {Effect , Console, pipe} from "effect"


// const result1 = [
//     Effect.succeed(1225),
//     Effect.succeed(1224),
//     Effect.succeed(1223)
// ]



// console.log(Effect.runSync(Effect.all(result1)))


// const result = pipe(
//     Effect.succeed(1225),
//     Effect.map(m => m**4)
// )

// console.log(Effect.runSync(result))

// const result = [
//     Effect.succeed(123),
//     Effect.succeed(345),
//     Effect.succeed(543)
// ]


// const ren = Effect.all(result)

// console.log(Effect.runSync(ren))


// const result = Effect.all({
//     count : Effect.succeed(129),
//     items : Effect.succeed("items"),
//     boolean : Effect.succeed(true) 
// })

// console.log(Effect.runSync(result))


// const effect = [
//     Effect.succeed(1231),
//     Effect.succeed(1332),
//     Effect.succeed(1403)
// ]

// const remy = Effect.all(effect , {concurrency :3})

// console.log(Effect.runSync(remy))


const fetchunlesscached = Effect.unless(fetchFromRemote(key) , () => cache.has(key))

console.log(Effect.runSync(fetchunlesscached))