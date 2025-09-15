
import {Effect,Ref, SynchronizedRef} from "effect"


console.log("Counter 3")
const counter3 = Effect.gen(function* (_){
    const cent = yield* _(Ref.make(24))
    const c = yield* _(Ref.get(cent))
    console.log("Initial value:"+c)
    yield* _(Ref.update(cent ,n => n*2 ))
    const down = yield* _(Ref.get(cent))
    console.log("Updated Value:"+down)
})

Effect.runFork(counter3)

console.log("Counter 4")
const counter4 = Effect.gen(function* (_){
    const conn = yield* _(Ref.make(32))
    const current = yield* _(Ref.get(conn))
    console.log("Initial value:"+current)
    yield* _(Ref.update(conn,n=>n*3))
    const up = yield* _(Ref.get(conn))
    console.log("Updated value:"+up)
})

Effect.runFork(counter4)


const program = Effect.gen(function* (_){
    const fork = yield* _(Ref.make(30))
    yield* _(Effect.all([Ref.update(fork,n=>n+1) , Ref.update(fork,n=>n+2)],{concurrency:"unbounded"}))
    const result = yield* _(Ref.get(fork))
    console.log("Result:"+result)

})

Effect.runFork(program)


const program2 = Effect.gen(function* (_){
    const fork1 = yield* _(SynchronizedRef.make(43))
    yield* _(Effect.all([SynchronizedRef.update(fork1,n=>n**3) , SynchronizedRef.update(fork1,n=>n**4)],{concurrency:"unbounded"}))
    const result = yield* _(SynchronizedRef.get(fork1))
    console.log("Result:"+result)
})

Effect.runFork(program2)