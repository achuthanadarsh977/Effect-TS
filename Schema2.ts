


import { Schema } from "effect";


const tenmon = Schema.Struct({
    name:Schema.String,
    age:Schema.Number,
    address:Schema.String,
    aadhar_no:Schema.Number,
    gender:Schema.String,
    phone:Schema.Number
})

type termon = Schema.Schema.Type<typeof tenmon>

type termon1 = Schema.Schema.Encoded<typeof tenmon>


const terrow : termon = {
    name:"John Matthew",
    age:32,
    address:"Sivananda Salai",
    aadhar_no:76608894,
    gender:'Male',
    phone:766048897
}

const parsed = Schema.decodeSync(tenmon)(terrow)
console.log(parsed)



const u  = Schema.Null
const f = Schema.Literal('any')
const e = Schema.Literal(2)
const d = Schema.Literal(true)
const a = Schema.Literal(false)
const b = Schema.Literal(-89)

console.log(Schema.decodeUnknownSync(e)(2))



const FruitCategory = Schema.Literal('SWEET','CITRUS','TROPICAL')

const fruits = Schema.Struct({
    id:Schema.Number,
    category: FruitCategory.pipe(Schema.pickLiteral("SWEET","CITRUS","TROPICAL"))
})

type fruits = Schema.Schema.Type<typeof fruits>

type FruitsEncoded = Schema.Schema.Encoded<typeof fruits>

const consfruits : FruitsEncoded = {

    id:1001,
    category:'SWEET'
}

const peach = Schema.decodeSync(fruits)(consfruits)

console.log(peach)


