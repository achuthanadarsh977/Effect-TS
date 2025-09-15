

import {SubscriptionRef,Ref,Effect,Stream} from "effect";


// const reference = Effect.gen(function* (_){
//     const y = yield* _(SubscriptionRef.make(54))
//     const x = yield* _(SubscriptionRef.get(y))
//     yield* _(SubscriptionRef.update(y,n=>n*3))
//     console.log(x)
//     const u = yield* _(SubscriptionRef.get(y))
//     console.log(u)
// })

// Effect.runFork(reference)


const reference = Effect.gen(function* (_){
    const a = yield* _(Ref.make(34))
    const b = yield* _(Ref.get(a))
    console.log("Initial value:"+b)
    yield* _(Ref.update(a,m=>m*7))
    const d = yield* _(Ref.get(a))
    console.log("Final value:"+d)
})

Effect.runFork(reference)


const subscription = Effect.gen(function* (_) {
  const a = yield* _(SubscriptionRef.make(34))
  const b = yield* _(SubscriptionRef.get(a))
  console.log("Initial value:" + b)
  yield* _(SubscriptionRef.update(a, m => m * 7))
  const d = yield* _(SubscriptionRef.get(a))
  console.log("Final value:" + d)
})



const subscription2 = Effect.gen(function* (_){
  const f = yield* _(SubscriptionRef.make(34))
  const r = yield* _(SubscriptionRef.get(f))
  console.log('Initial value:'+r)
  yield* _(SubscriptionRef.update(f,e=>e*88))
  const b = yield* _(SubscriptionRef.get(f))
  console.log('Final value:'+b)
})

Effect.runFork(subscription2)