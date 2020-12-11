import { IFormInput } from "../../../models/formInput.model";
import inputIds from "../../../constants/inputIds";
import textConstants from "../../../constants/textConstants";

export const invalidSignInFormData: IFormInput[] = [
    {
        id: inputIds.EMAIL,
        value: "test@test.com",
        type: "email",
        label: textConstants.EMAIL_INPUT_LABEL,
        errorMessage: "",
    },
    {
        id: inputIds.PASSWORD,
        value: "123",
        type: "password",
        label: textConstants.PASSWORD_INPUT_LABEL,
        errorMessage: "Password is too short",
    },
];

export const validSignInFormData: IFormInput[] = [
    {
        id: inputIds.EMAIL,
        value: "test@test.com",
        type: "email",
        label: textConstants.EMAIL_INPUT_LABEL,
        errorMessage: "",
    },
    {
        id: inputIds.PASSWORD,
        value: "12345678",
        type: "password",
        label: textConstants.PASSWORD_INPUT_LABEL,
        errorMessage: "",
    },
];