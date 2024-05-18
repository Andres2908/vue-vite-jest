const {operation} = require("@/functions/operation")

test("Operation function", () => {
    expect(operation(2,0,"*")).toBe(0)
})