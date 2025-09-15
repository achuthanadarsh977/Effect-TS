import { Effect, Ref } from "effect"

const counterExample = Effect.gen(function* (_) {
  const counter = yield* _(Ref.make(0)) // start with 0

  yield* _(Ref.update(counter, n => n + 1)) // +1
  yield* _(Ref.update(counter, n => n + 1)) // +1 again

  const value = yield* _(Ref.get(counter))
  console.log("Counter =", value) // 2
})

Effect.runPromise(counterExample)



const counter2 = Effect.gen(function* (_){
    const counter = yield* _(Ref.make(23))

    const current = yield* _(Ref.get(counter))

    console.log("Initial count:"+current)
    yield* _(Ref.update(counter,n=>n*2))
    const updated = yield* _(Ref.get(counter))
    console.log(updated)
})

Effect.runPromise(counter2)