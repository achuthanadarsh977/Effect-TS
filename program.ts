

// import {Effect} from 'effect';


// const program = Effect.gen(function* (){
//     const a = yield* Effect.succeed(23)
//     const b = yield* Effect.succeed(43)
//     const c = yield* Effect.succeed(54)
//     return a+b+c

// })

// Effect.runPromise(program).then(console.log)


import {Effect,Cause} from 'effect';

const program = Effect.log('Application succeeded')

const program1 = Effect.log('Happy','Thank You More','Please')

const program2 = Effect.log('messag1','message2',Cause.die('Oh no!'),Cause.die('Oh my God!'))

Effect.runFork(program)

Effect.runFork(program1)
Effect.runFork(program2)

