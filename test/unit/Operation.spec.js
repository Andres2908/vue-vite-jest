const {operation} = require("@/functions/operation")

test("operation function (multiplication)", () => {
    expect(operation(2,0,"/")).toBe(1)
})