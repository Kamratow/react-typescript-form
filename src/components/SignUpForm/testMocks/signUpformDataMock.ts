import { IFormInput } from "../../../models/formInput.model";
import inputIds from "../../../constants/inputIds";
import textConstants from "../../../constants/textConstants";

export const invalidSignUpFormData: IFormInput[] = [
    {
        id: inputIds.EMAIL,
        value: "test@test.com",
        type: "email",
        label: textConstants.EMAIL_INPUT_LABEL,
        errorMessage: "",
    },
    {
        id: inputIds.FULL_NAME,
        value: "test name",
        type: "text",
        label: textConstants.FULL_NAME_INPUT_LABEL,
        errorMessage: "",
    },
    {
        id: inputIds.PASSWORD,
        value: "12345678",
        type: "password",
        label: textConstants.PASSWORD_INPUT_LABEL,
        errorMessage: "",
    },
    {
        id: inputIds.CONFIRM_PASSWORD,
        value: "123456789",
        type: "password",
        label: textConstants.CONFIRM_PASSWORD_INPUT_LABEL,
        errorMessage: "Please confirm your password",
    },
];

export const validSignUpFormData: IFormInput[] = [
    {
        id: inputIds.EMAIL,
        value: "test@test.com",
        type: "email",
        label: textConstants.EMAIL_INPUT_LABEL,
        errorMessage: "",
    },
    {
        id: inputIds.FULL_NAME,
        value: "test name",
        type: "text",
        label: textConstants.FULL_NAME_INPUT_LABEL,
        errorMessage: "",
    },
    {
        id: inputIds.PASSWORD,
        value: "12345678",
        type: "password",
        label: textConstants.PASSWORD_INPUT_LABEL,
        errorMessage: "",
    },
    {
        id: inputIds.CONFIRM_PASSWORD,
        value: "12345678",
        type: "password",
        label: textConstants.CONFIRM_PASSWORD_INPUT_LABEL,
        errorMessage: "",
    },
];
