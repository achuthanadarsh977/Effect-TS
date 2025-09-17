import { Effect } from "effect"

// Acquire: open a file (simulated here with console.log)
const acquire = Effect.sync(() => {
  console.log("Opening file...")
  return { close: () => console.log("Closing file...") }
})

// Release: always close the file
const release = (file: { close: () => void }) =>
  Effect.sync(() => file.close())

// Use the file
const use = (file: { close: () => void }) =>
  Effect.sync(() => {
    console.log("Writing to file...")
    throw new Error("Oops, write failed!") // simulate error
  })

const program = Effect.acquireUseRelease(acquire, use, release)

Effect.runPromiseExit(program).then((exit) => {
  console.log("Exit status:", exit)
})
