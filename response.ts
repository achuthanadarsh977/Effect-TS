


import {Effect} from 'effect'

import {AiLanguageModel} from '@effect/ai'

const generatedDadjoke = Effect.gen(function* (){

    const response = yield* AiLanguageModel.generateText({
        prompt:'Generate autoprompt'
    }) 

    console.log(response.text)

    return response
})

console.log(generatedDadjoke)


const generatedmom = Effect.gen(function* (){

    const ren = yield* AiLanguageModel.generateText({
        prompt:'Generate prompt'
    })

    console.log(ren.text)

    return ren
})

console.log(generatedmom)