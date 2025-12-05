import {Effect,Console} from "effect"

// const program = Effect.gen(function* (){
//     yield* Console.log('Hello Everyone!')
//     yield* Console.log('This is Effect')
// })

// Effect.runSync(program)


const program2 = Effect.gen(function* (){
    yield* Console.log('Synchronized Reference')
    yield* Console.log('Subscription Reference')
})

Effect.runSync(program2)
