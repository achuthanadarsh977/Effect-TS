
import { Effect, Console } from "effect";

let counter = 1;

// Simulate an expensive task with a delay
const expensiveTask = Effect.promise<string>(() => {
  Console.log("Executing expensive task...").pipe(Effect.runSync); // Synchronous log for clarity
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Result ${counter++}`);
    }, 100); // Simulate delay
  });
});

const program = Effect.gen(function* () {
  // Without caching, the task is executed each time
  yield* Console.log("-- Non-cached version:");
  yield* expensiveTask.pipe(Effect.andThen(Console.log));
  yield* expensiveTask.pipe(Effect.andThen(Console.log));

  // With caching, the result is reused after the first run
  yield* Console.log("-- Cached version:");
  const cachedTask = yield* Effect.cached(expensiveTask); // Cache the expensive task
  yield* cachedTask.pipe(Effect.andThen(Console.log));
  yield* cachedTask.pipe(Effect.andThen(Console.log));
});

Effect.runFork(program);