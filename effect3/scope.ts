

import {Scope,Console,Exit,Effect} from "effect"


const program = Scope.make().pipe(
    Effect.tap((scope) => Scope.addFinalizer(scope, Console.log('Scope 1'))),
     Effect.tap((scope) =>
      Scope.addFinalizer(scope, Console.log("finalizer 2"))
    ),
    // close the scope
    Effect.andThen((scope) =>
      Scope.close(scope, Exit.succeed("scope closed successfully"))
    )
  )


 

Effect.runPromise(program)