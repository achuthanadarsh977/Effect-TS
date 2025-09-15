

import {Effect,Config} from 'effect'

const ServerConfig = Config.all({
  host: Config.string("HOST").pipe(Config.withDefault("localhost")),
  port: Config.number("PORT").pipe(Config.withDefault(3000))
})

const program = Effect.gen(function* (_) {
  const server = yield* _(ServerConfig)
  console.log("Server config:", server)
})

Effect.runPromise(program)

