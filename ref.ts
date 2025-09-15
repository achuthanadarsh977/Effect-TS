

import { Effect, Ref } from "effect"

const program = Effect.gen(function* (_) {
  // Create a Ref with initial value = 0
  const counter = yield* _(Ref.make(0))

  // Read the value
  const current = yield* _(Ref.get(counter))
  console.log("Initial:", current) // 0

  // Update (increment by 1)
  yield* _(Ref.update(counter, n => n + 1))

  // Get again
  const updated = yield* _(Ref.get(counter))
  console.log("After increment:", updated) // 1
})

// Run
Effect.runPromise(program)
