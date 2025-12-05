import { Effect } from "effect"

// Retry works because the effect is re-executed on each attempt


// Race runs both effects and interrupts the slower one
const fastest = Effect.race(server1, server2)

const effect = Effect.tryPromise(() => fetch("/api/user"))


console.log(fastest)