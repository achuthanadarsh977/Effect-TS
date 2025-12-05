
import { NOTFOUND } from "dns"
import {Effect,Console} from "effect"
import { effect } from "effect/Layer"



// const program1 = Effect.gen(function* (){
//     yield* Console.log('High')
//     yield* Console.log('Low')
// })

// Effect.runSync(program1)


// Example domain types
type User = { id: string; name: string }
type Post = { id: string; userId: string; content: string }

// Example error types
class NotFoundError {
  readonly _tag = "NotFoundError"
}
class DbError {
  readonly _tag = "DbError"
}

// Effect that fetches a user
// const getUserById = (id: string): Effect.Effect<User, NotFoundError> =>
//   id === "123"
//     ? Effect.succeed({ id, name: "Alice" })
//     : Effect.fail(new NotFoundError())

// // Effect that fetches posts
// const getPost = (userId: string): Effect.Effect<Post[], DbError> =>
//   userId === "Sam123"
//     ? Effect.succeed([
//         { id: "p1", userId, content: "Hello world" },
//         { id: "p2", userId, content: "Another post" }
//       ])
//     : Effect.fail(new DbError())

// // Program composed with Effect.gen
// const program = Effect.gen(function* () {
//   const user = yield* getUserById("123")
//   const posts = yield* getPost(user.id)
//   return { user, posts }
// })

// // Run synchronously
// const result = Effect.runSync(program)
// console.log(result)

const MyEffect = Effect.gen(function* (){
    yield* Console.log('User1')
    yield* Console.log('User2')
})

type MyEffect = Effect.Effect<User,NotFoundError,Database>

Effect.runSync(MyEffect)

console.log(MyEffect)