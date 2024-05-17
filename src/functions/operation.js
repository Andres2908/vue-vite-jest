const operation = (a, b, sign) => {
    if(typeof a !== "number" && typeof b !== "number") throw new Error ("The params 'a' and 'b' will be numbers")
    if(!["*", "/", "+", "-"].includes(sign)) throw new Error ("This operation isn't suppported")
    if(b === 0 && sign === "/") throw new Error("This division isn't supported")
    const operation = {
        "*": a*b,
        "/": a/b,
        "+": a+b,
        "-": a-b,
    }

    return operation[sign]
}

module.exports = {operation}