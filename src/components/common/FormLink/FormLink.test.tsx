import React from "react";
import { shallow } from "enzyme";

import FormLink, { IFormLinkProps } from "./FormLink";

const defaultProps: IFormLinkProps = {
    description: "test description",
    linkPath: "/testpath",
    linkText: "test link text",
};

describe("FormLink", () => {
    it("should render properly with default props", () => {
        const wrapper = shallow(<FormLink {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });
});
