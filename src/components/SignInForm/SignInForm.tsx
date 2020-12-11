import React, { useState } from "react";

import Header from "../common/Header/Header";
import Form from "../common/Form/Form";
import StandardField from "../common/StandardField/StandardField";
import FormLink from "../common/FormLink/FormLink";
import SubmitButton from "../common/SubmitButton/SubmitButton";

import { getInitialSignInFormData } from "../../utilities/formInitData";
import {
    validateAndParseInputData,
    checkIsFormDataValid,
} from "../../utilities/validationHelpers";

import textConstants from "../../constants/textConstants";

import { IFormInput } from "../../models/formInput.model";

const SignInForm: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<IFormInput[]>(
        getInitialSignInFormData()
    );

    const handleInputChange = (
        newValue: string,
        formInputData: IFormInput,
        inputIndex: number
    ): void => {
        const newFormData = [...formData];
        const newFormInputData = validateAndParseInputData(
            newValue,
            formInputData
        );
        newFormData[inputIndex] = {
            ...newFormInputData,
        };
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
            <Header headerContent={textConstants.SIGNIN_HEADER} />
            <Form>
                {getFormInputsToRender()}
                <SubmitButton
                    disabled={!checkIsFormDataValid(formData)}
                    buttonLabel={textConstants.FORM_SUBMIT_BUTTON}
                />
            </Form>
            <FormLink
                description={textConstants.SIGNIN_FORMLINK_DESCRIPTION}
                linkPath={textConstants.SIGNIN_FORMLINK_PATH}
                linkText={textConstants.SIGNIN_FORMLINK_LINK_CONTENT}
            />
        </>
    );
};

export default SignInForm;
