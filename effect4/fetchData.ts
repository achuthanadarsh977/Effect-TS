import {Effect,Console} from "effect"

const fetchData = Effect.tryPromise(() => fetchData("/api/data")).then(r => r.json())

