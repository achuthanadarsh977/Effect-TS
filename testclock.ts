// import { Effect, TestClock } from "effect"
// // Simulate a delay that would otherwise time out:
// const task = Effect.sleep("70 seconds")
// const timed = Effect.timeout(task, "1 minute")

// Effect.runPromiseExit(timed).then(console.log)


import { Effect, Deferred, TestClock, Layer, pipe } from "effect"

// Test program: waits 1 minute, then completes a deferred
const test = Effect.gen(function* (_) {
  const deferred = yield* _(Deferred.make<void>())
  // Fork an Effect that sleeps 1 minute, then completes the deferred
  yield* _(Effect
    .sleep("1 minute")
    .pipe(Effect.andThen(Deferred.succeed(deferred, undefined)))
    .pipe(Effect.fork))
  // At this point, the fiber is sleeping.
  // Advance the test clock by 1 minute to wake up the sleeper.
  yield* _(TestClock.adjust("1 minute"))
  // Wait for the deferred to complete (it will now be completed)
  yield* _(Deferred.await(deferred))
})

// Run test with the TestClock provided
Effect.runPromiseExit(pipe(
  test,
  Layer.provide(TestClock.layer)
)).then(console.log)
