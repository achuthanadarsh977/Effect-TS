

import { Schema,Effect, Runtime } from "effect";


const Person   = Schema.Struct({
    name:Schema.String,
    age:Schema.NumberFromString
})

type PersonEncoded = Schema.Schema.Encoded<typeof Person>

type PersonEncoded2 = typeof Person.Encoded

// A string schema
const Name = Schema.String

// Validate a value
const result = Schema.decodeSync(Name)("Adarsh")  
console.log(result) // "Adarsh"

// Invalid case
try {
  Schema.decodeSync(Name)('123')  
} catch (e) {
  console.error(e)
}

const redo = Effect.sync(() => {console.log('Hello everyone')})
Effect.runPromise(redo)


const redo1 = Effect.sync(() => {console.log('Hi Jackie')})

const redo2 = Effect.sync(() => 'Hello runtime')
const runtime = Runtime.defaultRuntime
Effect.runPromise(redo1)


Effect.runPromise(redo2).then(console.log)