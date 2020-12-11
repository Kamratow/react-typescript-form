import { IFormInput } from "../models/formInput.model";
import inputIds from "../constants/inputIds";
import textConstants from "../constants/textConstants";

export const getInitialSignInFormData = (): IFormInput[] => {
    return [
        {
            id: inputIds.EMAIL,
            value: "",
            type: "email",
            label: textConstants.EMAIL_INPUT_LABEL,
            errorMessage: "",
        },
        {
            id: inputIds.PASSWORD,
            value: "",
            type: "password",
            label: textConstants.PASSWORD_INPUT_LABEL,
            errorMessage: "",
        },
    ];
};

export const getInitialSignUpFormData = (): IFormInput[] => {
    return [
        {
            id: inputIds.EMAIL,
            value: "",
            type: "email",
            label: textConstants.EMAIL_INPUT_LABEL,
            errorMessage: "",
        },
        {
            id: inputIds.FULL_NAME,
            value: "",
            type: "text",
            label: textConstants.FULL_NAME_INPUT_LABEL,
            errorMessage: "",
        },
        {
            id: inputIds.PASSWORD,
            value: "",
            type: "password",
            label: textConstants.PASSWORD_INPUT_LABEL,
            errorMessage: "",
        },
        {
            id: inputIds.CONFIRM_PASSWORD,
            value: "",
            type: "password",
            label: textConstants.CONFIRM_PASSWORD_INPUT_LABEL,
            errorMessage: "",
        }
    ];
};