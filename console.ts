

import {Console,Effect} from "effect"

const handler = Effect.ensuring(console.log("cleanup completed"))

const success = Console.log("Success completed").pipe(Effect.as("some result"),handler)

const failure = Console.log("Program failure").pipe(Effect.andThen(Effect.fail('error')),handler)

const interuption = Console.log("Programs interrupted").pipe(Effect.andThen(Effect.handler),handler)

Effect.runFork(failure)
Effect.runFork(success)
Effect.runFork(interuption)