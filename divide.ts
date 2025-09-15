import * as Effect from "effect/Effect"
import * as Console from "effect/Console"

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero")
  }
  return a / b
}


console.log(divide(12,3))

const success = Effect.succeed(42)
const failure = Effect.fail(new Error('Operation failed due to network error'))

console.log(success)
console.log(failure)