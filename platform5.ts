
import {Effect,Schema} from "effect"

import {KeyValueStore} from "@effect/platform"
import { value } from "effect/Redacted"
import { layerMemory } from "@effect/platform/KeyValueStore"

// const program = Effect.gen(function* (){
//     const k = yield* KeyValueStore.KeyValueStore

//     console.log(yield* k.size)
//     yield* k.set("key","value")
//     console.log(yield* k.size)

// })


const person = Schema.Struct({
    name: Schema.String,
    age:Schema.Number,
    address:Schema.String
})

// Effect.runPromise(program.pipe(Effect.provide(layerMemory)))



// const program1 = Effect.gen(function* (){
//     const kv =  (yield* KeyValueStore.KeyValueStore).forSchema(person)

//     const value = {name:'Samuel Adams',age:30,address:'Chennai'}
//     yield* kv.set("user1",value)
//     console.log(yield* kv.size)
//     console.log(yield* kv.get("user1"))

// })

// Effect.runPromise(program1.pipe(Effect.provide(layerMemory)))


const program2 = Effect.gen(function* (){
    const kc = (yield* KeyValueStore.KeyValueStore).forSchema(person)
    const value = {name:'John Samuel' , age:34,address:'Kerala'}
    yield* kc.set("user2",value)
    console.log(yield* kc.size)
    console.log(yield* kc.get("user2"))
})

const program3 = Effect.gen(function* (){
    const kf = (yield* KeyValueStore.KeyValueStore).forSchema(person)
    const value = {name:'Sam MA' , age:45   , address:'Karnataka'}
    yield* kf.set("user3",value)
    console.log(yield* kf.size)
    console.log(yield* kf.get('user3'))
})


Effect.runPromise(program3.pipe(Effect.provide(layerMemory)))
Effect.runPromise(program2.pipe(Effect.provide(layerMemory)))