import ClickMe from "../../src/components/ClickMe.vue"
import {mount} from "@vue/test-utils"

describe("Button clickMe", () => {
    test("click the button", async() => {
        const wrapper = mount(ClickMe)

        await wrapper.find('button').trigger('click');

        expect(wrapper.find("p").text()).toContain('You clicked 1 times');
    })
})