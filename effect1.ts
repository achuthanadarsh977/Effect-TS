

import {Console,Effect} from "effect"

// const handler = Effect.ensuring(Console.log("cleanup completed"))

// const success = Console.log("Success completed").pipe(Effect.as("some result"),handler)

// const failure = Console.log("Program failure").pipe(Effect.andThen(Effect.fail('error')),handler)

// const interuption = Console.log("Programs interrupted").pipe(Effect.andThen(Effect.interrupt),handler)

// Effect.runFork(failure)
// Effect.runFork(success)
// Effect.runFork(interuption)


const handler = Effect.ensuring(Console.log('cleanup completed'))

const success = Console.log('Success completed').pipe(Effect.as('some result'),handler)

const failure = Console.log('Failure program').pipe(Effect.andThen(Effect.fail('error')),handler)

const interuption = Console.log('Program interrupted').pipe(Effect.andThen(Effect.interrupt),handler)

const add = (a:number,b:number,c:number):number =>{
    if(b === 0){
        throw new Error('Cannot be zero')
    }

    return a+b+c
}

console.log(add(12,23,34))


const program = Effect.sync(() => {
    console.log('Hello everyone')
    return 1

})

const result  = Effect.sync(() => {
    console.log('Thank you!')
    return 2
})

console.log(program)
console.log(result)