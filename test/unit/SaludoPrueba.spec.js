import HelloWorld from "../../src/components/SaludoPrueba.vue"
import { mount } from "@vue/test-utils"

describe("HelloWorld", () => {
    it("renders properly", () => {
        const wrapper = mount(HelloWorld, { props: { msg: "Hello Jest" } })

        expect(wrapper.text()).toContain("Hello Jest")
    })

    it("renders properly props", () => {
        const wrapper = mount(HelloWorld, { props: { msg: "Hello Jest" } })

        expect(wrapper.props()).toEqual({msg: "Hello Jest"})
    })
})
