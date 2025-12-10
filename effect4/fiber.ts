import { Effect, Fiber } from "effect"

const backgroundTask = Effect.gen(function* () {
  yield* Effect.sleep("5 seconds")
  yield* Effect.log("Background task complete")
  return "done"
})

// Start execution, returns immediately
const fiber = Effect.runFork(backgroundTask)

console.log(fiber)