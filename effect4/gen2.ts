


import {Effect,Console} from "effect"
import { effect } from "effect/Layer"

// const program = Effect.gen(function* (){
//     const x = yield* Effect.succeed(1)
//     const y = yield* Effect.succeed(2)

//     return x+y
// })


// console.log(Effect.runSync(program))


// const program2  = Effect.gen(function* (){
//       const a = yield* Effect.succeed(897)
//       const b = yield* Effect.succeed(798)
//       return a*b
// })

// console.log(Effect.runSync(program2))


// const program3 = Effect.gen(function* (){
//     const a = yield* Effect.succeed(1345)
//     const b = yield* Effect.succeed(5431)
//     return b/a 
// })

// console.log(Effect.runSync(program3))



// const program3 = Effect.gen(function* (){
//     const x = yield* Effect.succeed(7891)
//     const y = yield* Effect.succeed(1987)
//     return x*y
// })

// console.log(Effect.runSync(program3))

// const program4 = Effect.gen(function* (){
//     const p = Effect.succeed(12)
//     const q = Effect.fail("error")
//     const r = Effect.succeed(13)
//     return p+q+r
// })


// console.log(Effect.runSync(program4))


// const amount = Effect.gen(function* (){
//     const double = (x:number) => x*2
//     const a = Effect.succeed(21)
//     return double(21)
// })

// console.log(Effect.runSync(amount))

const triple = Effect.gen(function* ())