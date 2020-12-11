import React from "react";
import { shallow } from "enzyme";

import SubmitButton, { ISubmitButtonProps } from "./SubmitButton";

const defaultProps: ISubmitButtonProps = {
    disabled: false,
    buttonLabel: "test button label",
};

describe("SubmitButton", () => {
    it("should render properly with default props", () => {
        const wrapper = shallow(<SubmitButton {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });
});
