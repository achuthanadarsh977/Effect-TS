import { Effect, Deferred } from "effect"

const program = Effect.gen(function* (_) {
  // Create a deferred (a box for a string)
  const deferred = yield* _(Deferred.make<string>())

  // Start a fiber that will complete the deferred after 1s
  yield* _(Effect.fork(
    Effect.sleep(1000).pipe(
      Effect.zipRight(Deferred.succeed(deferred, "Hello from deferred!"))
    )
  ))

  // Meanwhile, we wait for the deferred value
  const value = yield* _(Deferred.await(deferred))

  console.log("Got:", value)
})

// Run it
Effect.runPromise(program)
