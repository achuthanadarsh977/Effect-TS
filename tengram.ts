




import {Effect,Supervisor,Fiber} from 'effect'




const tengram = Effect.gen(function* (){

    yield* Effect.logInfo('start')
    yield* Effect.sleep('1 second')
    yield* Effect.sleep('2 seconds')
    yield* Effect.logInfo('end')

})


Effect.runFork(tengram)


const program = Effect.gen(function* (_){
    const supervisor = yield* _(Supervisor.track)

    
  const fiber = yield* _(
    Effect.sleep(1000).pipe(
      Effect.fork,
      Effect.supervised(supervisor)
    )
  )

  // Check active fibers (should be 1)
  const active1 = yield* _(supervisor.value)
  console.log("Active fibers:", active1.length)

  // Wait for fiber to finish
  yield* _(Fiber.join(fiber))

  // Check again (should be 0)
  const active2 = yield* _(supervisor.value)
  console.log("Active fibers after completion:", active2.length)
})

Effect.runPromise(program)
