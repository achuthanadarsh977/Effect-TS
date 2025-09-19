



import * as Schema from "effect/Schema"


const Positive = Schema.Number.pipe(
    Schema.filter(n => n > 0 , {message: () => "Number is positive"})
)


const Twodivisible = Schema.Number.pipe(
    Schema.filter(n => n%2 === 0 , {message : () => "Number should be divisible by 2"})
)



console.log(Schema.decodeSync(Twodivisible)(4))