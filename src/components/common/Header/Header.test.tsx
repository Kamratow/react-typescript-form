import React from "react";
import { shallow } from "enzyme";

import Header, { IHeaderProps } from "./Header";

const defaultProps: IHeaderProps = {
    headerContent: "test header content",
};

describe("Header", () => {
    it("should render properly with default props", () => {
        const wrapper = shallow(<Header {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });
});
