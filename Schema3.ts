

import {Schema,Either} from 'effect'

const Person = Schema.Struct({
    name:Schema.String,
    age:Schema.Number,
    address:Schema.String,
    aadhar_no:Schema.Number,
    gender:Schema.String
})

const input : unknown = {name:'John',age:34,address:'Slay',aadhar_no:34556678889,gender:'Male'}

console.log(Schema.decodeUnknownSync(Person)(input))

const output: unknown = {name:'Sarah',age:25,address:'RMS',aadhar_no:56677777,gender:'Female'}

console.log(Schema.decodeUnknownSync(Person)(output))

const succeed = Either.right(32)
const failure = Either.left(42)

console.log('Succeed:'+succeed)
console.log('Failure:'+failure)


const PersonWithDate = Schema.Struct({
    name:Schema.String,
    birthday:Schema.DateFromString
})