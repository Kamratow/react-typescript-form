import React from "react";
import { shallow } from "enzyme";

import Form from "./Form";
import StandardField from "../StandardField/StandardField";
import SubmitButton from "../SubmitButton/SubmitButton";

describe("Form", () => {
    let mockedChangeHandler: () => {};

    beforeEach(() => {
        mockedChangeHandler = jest.fn();
    });

    it("should render properly with default props", () => {
        const wrapper = shallow(
            <Form>
                <StandardField
                    changeHandler={mockedChangeHandler}
                    errorMessage=""
                    id="testId"
                    type="text"
                    value="test"
                    label="testLabel"
                />
                <SubmitButton
                    buttonLabel="test button label"
                    disabled={false}
                />
            </Form>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("should properly handle submit", () => {
        const wrapper = shallow(
            <Form>
                <StandardField
                    changeHandler={mockedChangeHandler}
                    errorMessage=""
                    id="testId"
                    type="text"
                    value="test"
                    label="testLabel"
                />
                <SubmitButton
                    buttonLabel="test button label"
                    disabled={false}
                />
            </Form>
        );
        const preventDefaultMock = jest.fn();
        const mockedSubmitEvent = {
            preventDefault: preventDefaultMock,
        };

        const form = wrapper.find("form").at(0);

        expect(preventDefaultMock).toHaveBeenCalledTimes(0);

        form.simulate("submit", mockedSubmitEvent);

        expect(preventDefaultMock).toHaveBeenCalledTimes(1);
    });
});
