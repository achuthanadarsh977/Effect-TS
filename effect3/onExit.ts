

import {Console,Exit,Effect} from "effect"



const handler = Effect.onExit((exit) => Console.log(`Cleanup completed: ${Exit.getOrElse(exit,String)}`))


const success = Console.log('Task Completed').pipe(Effect.as('result'),handler)

Effect.runFork(success)

const failure = Console.log('Task failed').pipe(Effect.andThen(Effect.fail),handler)
Effect.runFork(failure)

