

import {Effect,Console} from "effect"
import { integer } from "effect/FastCheck"

// const getuserid = (id:String) : Effect.Effect<string,string> => {
//     if(id.length !== 10){
//         return Effect.fail('ID should be of length 10')
//     }

//     return Effect.succeed(`ID:${id}`)
// } 

// const getposts = (postId:String) : Effect.Effect<String,String> => {
//     if(typeof postId !== String){
//         return Effect.fail('Posts should be a string')
//     }

//     return Effect.succeed(`PostsId:+${postId}`)

// }


// const gentext =  Effect.gen(function* (){
//     const user = yield* getuserid("7550277362")
//     const posts = yield* getposts("P123")
//     return {user,posts}
// })

// Effect.runSync(gentext)

// const a = Effect.succeed(42)

// console.log(Effect.runSync(a))


// const asyncprogram = Effect.gen(function* (){
//     yield* Effect.promise(() => new Promise(resolve => setTimeout(resolve,100)))

//     return "completed"
// })

// const result = await Effect.runPromise(asyncprogram)

// console.log(result)

