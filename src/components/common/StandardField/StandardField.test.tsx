import React from "react";
import { shallow } from "enzyme";

import StandardField, { IStandardFieldProps } from "./StandardField";

describe("StandardField", () => {
    let defaultProps: IStandardFieldProps;
    let changeHandlerMock: () => {};

    beforeEach(() => {
        changeHandlerMock = jest.fn();
        defaultProps = {
            changeHandler: changeHandlerMock,
            errorMessage: "",
            id: "testId",
            label: "testLabel",
            type: "text",
            value: "test value",
        };
    });

    it("should render properly with default props", () => {
        const wrapper = shallow(<StandardField {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("should properly handle change event", () => {
        const wrapper = shallow(<StandardField {...defaultProps} />);
        const input = wrapper.find("#testId").at(0);
        const mockedChangeEvent = {
            currentTarget: {
                value: "changed value",
            },
        };

        expect(changeHandlerMock).toHaveBeenCalledTimes(0);

        input.simulate("change", mockedChangeEvent);

        expect(changeHandlerMock).toHaveBeenCalledTimes(1);
        expect(changeHandlerMock).toHaveBeenCalledWith("changed value");
    });

    it("should not render error if input has not been touched", () => {
        const propsToRender: IStandardFieldProps = {
            ...defaultProps,
            errorMessage: "test error message",
        };

        const wrapper = shallow(<StandardField {...propsToRender} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("should render error if input has been touched", () => {
        const propsToRender: IStandardFieldProps = {
            ...defaultProps,
            errorMessage: "test error message",
        };
        const wrapper = shallow(<StandardField {...propsToRender} />);
        const input = wrapper.find("#testId").at(0);
        const mockedChangeEvent = {
            currentTarget: {
                value: "changed value",
            },
        };

        input.simulate("change", mockedChangeEvent);

        expect(wrapper).toMatchSnapshot();
    });
});
