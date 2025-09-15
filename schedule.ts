import { Effect, Schedule } from "effect"

// Retry an effect up to 3 times
const program = Effect.fail("Error").pipe(
  Effect.retry(Schedule.recurs(3))
)

const program1 = Effect.log("Hello").pipe(
  Effect.repeat(Schedule.recurs(4)) // 1 + 4 repeats = 5 times total
)


console.log(program)
console.log(program1)

