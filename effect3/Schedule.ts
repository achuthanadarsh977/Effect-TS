import { Effect, Schedule, Console } from "effect"

// Define an effect that logs a message to the console
const action = Console.log("success")

// Define a schedule that repeats the action 2 more times with a delay
const policy = Schedule.addDelay(Schedule.recurs(2), () => "100 millis")

// Repeat the action according to the schedule
const program = Effect.repeat(action, policy)

// Run the program and log the number of repetitions
Effect.runPromise(program).then((n) => console.log(`repetitions: ${n}`))
/*
Output:
success
success
success
repetitions: 2
*/