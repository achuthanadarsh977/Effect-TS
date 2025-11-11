


import {Console,Scope,Effect} from "effect"



// const interruption = Console.log('Task Interuppted').pipe(Effect.andThen(Effect.interrupt),handler)
// Effect.runFork(interruption)


const handler = Effect.ensuring(Console.log('Cleanup Completed'))

// const success = Console.log('Task Completed').pipe(Effect.as('result'),handler)

// Effect.runFork(success)


// const failure = Console.log('Task failed').pipe(Effect.andThen(Effect.fail),handler)
// Effect.runFork(failure)


const interrupt = Console.log('Task interrupted').pipe(Effect.andThen(Effect.interrupt),handler)
Effect.runFork(interrupt)