import * as Effect from "effect/Effect";
import * as Console from "effect/Console";


// Define a cleanup effect
const handler = Effect.ensuring(Console.log("Cleanup completed"))

// Define a successful effect
const success = Console.log("Task completed").pipe(
  Effect.as("some result"),
  handler
)

Effect.runFork(success)
/*
Output:
Task completed
Cleanup completed
*/

// Define a failing effect
const failure = Console.log("Task failed").pipe(
  Effect.andThen(Effect.fail("some error")),
  handler
)

Effect.runFork(failure)
/*
Output:
Task failed
Cleanup completed
*/

// Define an interrupted effect
const interruption = Console.log("Task interrupted").pipe(
  Effect.andThen(Effect.interrupt),
  handler
)

Effect.runFork(interruption)
/*
Output:
Task interrupted
Cleanup completed
*/