const {suma} =  require("@/functions/suma")//It´s a import in Vue.js whit a global route

it("Function Suma", () => {
    expect(suma(1,3)).toBe(4)
}) 