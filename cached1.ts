import { Effect, TestClock } from "effect"

// A program that waits for 5 seconds
const program = Effect.sleep(5000).pipe(
  Effect.zipRight(Effect.log("5 seconds passed!"))
)

// Run it with a TestClock
const test = program.pipe(
  Effect.provide(TestClock.Default)
)
