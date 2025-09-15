


import {Effect} from "effect"

const program = Effect.void.pipe(Effect.delay("1000 millis"))

const instrumented = program.pipe(Effect.withSpan("myspan"))


Effect.runPromise(program).then(console.log)
Effect.runPromise(instrumented).then(console.log)