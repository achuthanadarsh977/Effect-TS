import { Schema } from "effect"

// Define the custom schema
const NumberFromString = Schema.transform(
  Schema.String,  // source: string
  Schema.Number,  // target: number
  {
    decode: (s) => Number(s),      // string → number
    encode: (n) => n.toString()    // number → string
  }
)

// To decode a string as a number:
const decoded = Schema.decode(NumberFromString)("123") // result: 123

// To encode a number as a string:
const encoded = Schema.encode(NumberFromString)(456)  // result: "456"


console.log(decoded)
console.log(encoded)