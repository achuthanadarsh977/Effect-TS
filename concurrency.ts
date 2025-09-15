

import {Effect} from "effect";

const a = Effect.succeed("A")
const b = Effect.succeed("B")

const program = Effect.gen(function* (_) {
  const ra = yield* _(a) // run A
  const rb = yield* _(b) // then run B
  return [ra, rb]
})

const program1 = Effect.all([a, b], { concurrency: "unbounded" })

console.log(program)
console.log(program1)

const hello = Effect.gen(function* (_){
     yield* _(Effect.log("Hello everyone"))
     yield* _(Effect.sleep(1000))

})

Effect.runPromise(program).
then(() => console.log("Program finished")).catch((err) => console.log("Error handled"))