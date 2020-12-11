import React from "react";
import { shallow } from "enzyme";

import SignInForm from "./SignInForm";
import inputIds from "../../constants/inputIds";

import * as formInitData from "../../utilities/formInitData";

import {
    validSignInFormData,
    invalidSignInFormData,
} from "./testMocks/signInFormDataMocks";

describe("SignInForm", () => {
    it("should render with proper input configuration", () => {
        const wrapper = shallow(<SignInForm />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("EmailInput", () => {
        let wrapper: any;
        let emailInput: any;

        beforeEach(() => {
            wrapper = shallow(<SignInForm />);
            emailInput = wrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.EMAIL
                )
                .at(0);
        });

        it("should be properly validated when email is incorrect", () => {
            const expectedErrorMessage = "Invalid e-mail address";
            const invalidEmail = "email";

            emailInput.prop("changeHandler")(invalidEmail);

            emailInput = wrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.EMAIL
                )
                .at(0);

            expect(emailInput.prop("value")).toBe(invalidEmail);
            expect(emailInput.prop("errorMessage")).toBe(expectedErrorMessage);
        });

        it("should be properly validated when email is correct", () => {
            const validEmail = "test@test.com";

            emailInput.prop("changeHandler")(validEmail);

            emailInput = wrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.EMAIL
                )
                .at(0);

            expect(emailInput.prop("value")).toBe(validEmail);
            expect(emailInput.prop("errorMessage")).toBe("");
        });

        it("should be properly validated when email is empty", () => {
            const expectedErrorMessage = "E-mail address is required";
            const invalidEmail = "";

            emailInput.prop("changeHandler")(invalidEmail);

            emailInput = wrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.EMAIL
                )
                .at(0);

            expect(emailInput.prop("value")).toBe(invalidEmail);
            expect(emailInput.prop("errorMessage")).toBe(expectedErrorMessage);
        });
    });

    describe("PasswordInput", () => {
        let wrapper: any;
        let passwordInput: any;

        beforeEach(() => {
            wrapper = shallow(<SignInForm />);
            passwordInput = wrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.PASSWORD
                )
                .at(0);
        });

        it("should be validated properly when password is incorrect", () => {
            const expectedErrorMessage = "Password is too short";
            const invalidPassword = "1234";

            passwordInput.prop("changeHandler")(invalidPassword);

            passwordInput = wrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.PASSWORD
                )
                .at(0);

            expect(passwordInput.prop("value")).toBe(invalidPassword);
            expect(passwordInput.prop("errorMessage")).toBe(
                expectedErrorMessage
            );
        });

        it("should be validated properly when password is correct", () => {
            const validPassword = "12345678";

            passwordInput.prop("changeHandler")(validPassword);

            passwordInput = wrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.PASSWORD
                )
                .at(0);

            expect(passwordInput.prop("value")).toBe(validPassword);
            expect(passwordInput.prop("errorMessage")).toBe("");
        });

        it("should be validated properly when password is empty", () => {
            const expectedErrorMessage = "Password is required";
            const invalidPassword = "";

            passwordInput.prop("changeHandler")(invalidPassword);

            passwordInput = wrapper
                .findWhere(
                    (component: any) =>
                        component.name() === "StandardField" &&
                        component.prop("id") === inputIds.PASSWORD
                )
                .at(0);

            expect(passwordInput.prop("value")).toBe(invalidPassword);
            expect(passwordInput.prop("errorMessage")).toBe(
                expectedErrorMessage
            );
        });
    });

    describe("SubmitButton", () => {
        it("should be disabled if form data is invalid", () => {
            jest.spyOn(
                formInitData,
                "getInitialSignInFormData"
            ).mockImplementation(() => invalidSignInFormData);

            const wrapper = shallow(<SignInForm />);

            expect(wrapper.find("SubmitButton").prop("disabled")).toBe(true);
        });

        it("should not be disabled if form data is valid", () => {
            jest.spyOn(
                formInitData,
                "getInitialSignInFormData"
            ).mockImplementation(() => validSignInFormData);

            const wrapper = shallow(<SignInForm />);

            expect(wrapper.find("SubmitButton").prop("disabled")).toBe(false);
        });
    });
});
