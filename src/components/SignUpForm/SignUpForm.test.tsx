import React from "react";
import { shallow } from "enzyme";

import SignUpForm from "./SignUpForm";

import * as formInitData from "../../utilities/formInitData";
import inputIds from "../../constants/inputIds";

import {
    validSignUpFormData,
    invalidSignUpFormData,
} from "./testMocks/signUpformDataMock";

describe("SignUpForm", () => {
    it("should render with proper input configuration", () => {
        const wrapper = shallow(<SignUpForm />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("FullNameInput", () => {
        let wrapper: any;
        let fullNameInput: any;

        const getFullNameInput = (inputWrapper: any) => {
            return inputWrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.FULL_NAME
                )
                .at(0);
        };

        beforeEach(() => {
            wrapper = shallow(<SignUpForm />);
            fullNameInput = getFullNameInput(wrapper);
        });

        it("should be properly validated when full name is incorrect", () => {
            const expectedErrorMessage = "Missing last name";
            const invalidFullName = "test";

            fullNameInput.prop("changeHandler")(invalidFullName);

            fullNameInput = getFullNameInput(wrapper);

            expect(fullNameInput.prop("value")).toBe(invalidFullName);
            expect(fullNameInput.prop("errorMessage")).toBe(
                expectedErrorMessage
            );
        });

        it("should be properly validated when full name is correct", () => {
            const validFullName = "test name";

            fullNameInput.prop("changeHandler")(validFullName);

            fullNameInput = getFullNameInput(wrapper);

            expect(fullNameInput.prop("value")).toBe(validFullName);
            expect(fullNameInput.prop("errorMessage")).toBe("");
        });

        it("should be properly validated when full name is empty", () => {
            const expectedErrorMessage = "Full name is required";
            const invalidFullName = "";

            fullNameInput.prop("changeHandler")(invalidFullName);

            fullNameInput = getFullNameInput(wrapper);

            expect(fullNameInput.prop("value")).toBe(invalidFullName);
            expect(fullNameInput.prop("errorMessage")).toBe(
                expectedErrorMessage
            );
        });
    });

    describe("ConfirmPassword", () => {
        const getConfirmPasswordInput = (inputWrapper: any) => {
            return inputWrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.CONFIRM_PASSWORD
                )
                .at(0);
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it("should be properly validate when confirm password is empty", () => {
            const expectedErrorMessage = "Please confirm your password";
            const invalidConfirmPassword = "";
            const wrapper = shallow(<SignUpForm />);
            let confirmPasswordInput = getConfirmPasswordInput(wrapper);

            confirmPasswordInput.prop("changeHandler")(invalidConfirmPassword);

            confirmPasswordInput = getConfirmPasswordInput(wrapper);

            expect(confirmPasswordInput.prop("value")).toBe(
                invalidConfirmPassword
            );
            expect(confirmPasswordInput.prop("errorMessage")).toBe(
                expectedErrorMessage
            );
        });

        it("should be properly validated when confirm password is different than password", () => {
            jest.spyOn(
                formInitData,
                "getInitialSignUpFormData"
            ).mockImplementation(() => invalidSignUpFormData);

            const expectedErrorMessage = "Please confirm your password";
            const invalidConfirmPassword = "1234";
            const wrapper = shallow(<SignUpForm />);
            let confirmPasswordInput = getConfirmPasswordInput(wrapper);

            confirmPasswordInput.prop("changeHandler")(invalidConfirmPassword);

            confirmPasswordInput = getConfirmPasswordInput(wrapper);

            expect(confirmPasswordInput.prop("value")).toBe(
                invalidConfirmPassword
            );
            expect(confirmPasswordInput.prop("errorMessage")).toBe(
                expectedErrorMessage
            );
        });

        it("should be properly validated when confirm password is equal to password", () => {
            jest.spyOn(
                formInitData,
                "getInitialSignUpFormData"
            ).mockImplementation(() => invalidSignUpFormData);

            const expectedErrorMessage = "";
            const validConfirmPassword = "12345678";
            const wrapper = shallow(<SignUpForm />);
            let confirmPasswordInput = getConfirmPasswordInput(wrapper);

            confirmPasswordInput.prop("changeHandler")(validConfirmPassword);

            confirmPasswordInput = getConfirmPasswordInput(wrapper);

            expect(confirmPasswordInput.prop("value")).toBe(
                validConfirmPassword
            );
            expect(confirmPasswordInput.prop("errorMessage")).toBe(
                expectedErrorMessage
            );
        });
    });

    describe("SubmitButton", () => {
        it("should be disabled if form data is invalid", () => {
            jest.spyOn(
                formInitData,
                "getInitialSignUpFormData"
            ).mockImplementation(() => invalidSignUpFormData);

            const wrapper = shallow(<SignUpForm />);

            expect(wrapper.find("SubmitButton").prop("disabled")).toBe(true);
        });

        it("should not be disabled if form data is valid", () => {
            jest.spyOn(
                formInitData,
                "getInitialSignUpFormData"
            ).mockImplementation(() => validSignUpFormData);

            const wrapper = shallow(<SignUpForm />);

            expect(wrapper.find("SubmitButton").prop("disabled")).toBe(false);
        });
    });
});
