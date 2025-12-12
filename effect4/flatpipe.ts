

import {Effect,pipe} from "effect"


// const result = pipe(
//     Effect.succeed(4),
//     Effect.map((n) => n*4),
//     Effect.map((n) => n+5)
// )


// console.log(Effect.runSync(result))



// const result1 = pipe(
//     Effect.succeed(1234),
//     Effect.map((m) => m*34),
//     Effect.map((m) => m - 34),
//     Effect.map(m => m +34)
// )


// console.log(Effect.runSync(result1))


// const result2 =  Effect.succeed(1891).pipe(Effect.map((m) => m+4) , Effect.map((m) => m*4),
// Effect.map((m) => m/2))

// console.log(Effect.runSync(result2))


const name = {firstname:'Alice' , lastname:'Kingsley'}


const fullname = pipe(
               Effect.succeed(name),
               Effect.map((m) => m.name.toUpperCase())
)

console.log(Effect.runSync(fullname))