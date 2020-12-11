import React, { useState } from "react";

import Header from "../common/Header/Header";
import Form from "../common/Form/Form";
import StandardField from "../common/StandardField/StandardField";
import FormLink from "../common/FormLink/FormLink";
import SubmitButton from "../common/SubmitButton/SubmitButton";

import { getInitialSignUpFormData } from "../../utilities/formInitData";
import {
    validateAndParseInputData,
    checkIsFormDataValid,
    validateConfirmPasswordValue,
} from "../../utilities/validationHelpers";

import textConstants from "../../constants/textConstants";

import { IFormInput } from "../../models/formInput.model";

const SignUpForm: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<IFormInput[]>(
        getInitialSignUpFormData()
    );

    const handleInputChange = (
        newValue: string,
        formInputData: IFormInput,
        inputIndex: number
    ): void => {
        let newFormData = [...formData];
        const newFormInputData = validateAndParseInputData(
            newValue,
            formInputData
        );

        newFormData[inputIndex] = {
            ...newFormInputData,
        };

        if (formInputData.type === "password") {
            newFormData = validateConfirmPasswordValue(newFormData);
        }

        setFormData(newFormData);
    };

    const getFormInputsToRender = () => {
        return formData.map((singleInput, index) => {
            return (
                <StandardField
                    key={singleInput.id}
                    id={singleInput.id}
                    label={singleInput.label}
                    type={singleInput.type}
                    value={singleInput.value}
                    changeHandler={(newInputValue: string) =>
                        handleInputChange(newInputValue, singleInput, index)
                    }
                    errorMessage={singleInput.errorMessage}
                />
            );
        });
    };

    return (
        <>
            <Header headerContent={textConstants.SIGNUP_HEADER} />
            <Form>
                {getFormInputsToRender()}
                <SubmitButton
                    disabled={!checkIsFormDataValid(formData)}
                    buttonLabel={textConstants.FORM_SUBMIT_BUTTON}
                />
            </Form>
            <FormLink
                description={textConstants.SIGNUP_FORMLINK_DESCRIPTION}
                linkPath={textConstants.SIGNUP_FORMLINK_PATH}
                linkText={textConstants.SIGNUP_FORMLINK_LINK_CONTENT}
            />
        </>
    );
};

export default SignUpForm;
