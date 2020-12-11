import {IFormInput} from "../models/formInput.model";
import inputIds from "../constants/inputIds";

export const validateAndParseInputData = (newValue: string, formInput: IFormInput) => {
    let parsedAndValidatedInput: IFormInput = {
        ...formInput,
        value: newValue,
        errorMessage: ''
    };

    //validate if input is empty
    if (newValue === '') {
        if (parsedAndValidatedInput.id === inputIds.CONFIRM_PASSWORD) {
            parsedAndValidatedInput.errorMessage = "Please confirm your password";
        } else {
            parsedAndValidatedInput.errorMessage = `${parsedAndValidatedInput.label} is required`;
        }

        return parsedAndValidatedInput;
    }

    //validate if value matches input type
    switch (formInput.type) {
        case 'email':
            parsedAndValidatedInput = validateEmailValue(parsedAndValidatedInput);
            break;
        case 'password':
            parsedAndValidatedInput = validatePasswordValue(parsedAndValidatedInput);
            break;
        default:
            break;
    }

    //check if input is full name
    if (parsedAndValidatedInput.id === inputIds.FULL_NAME) {
        parsedAndValidatedInput = validateFullNameValue(parsedAndValidatedInput);
    }

    return parsedAndValidatedInput;
};

export const validateEmailValue = (formInput: IFormInput): IFormInput => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(formInput.value)) {
        formInput.errorMessage = 'Invalid e-mail address';
    }

    return formInput;
};

export const validatePasswordValue = (formInput: IFormInput): IFormInput => {
    if (formInput.value.length < 8) {
        formInput.errorMessage = 'Password is too short';
    }

    return formInput;
};

export const validateFullNameValue = (formInput: IFormInput): IFormInput => {
    const fullNameRegex = /([a-zA-Z]+\s+[a-zA-Z]+)+/;

    if (!fullNameRegex.test(formInput.value)) {
        formInput.errorMessage = 'Missing last name';
    }

    return formInput;
};

export const checkIsFormDataValid = (formData: IFormInput[]): boolean => {
    return formData.filter(singleInput => singleInput.value !== '').length === formData.length && !formData.find(singleInput => singleInput.errorMessage !== '');
};

export const validateConfirmPasswordValue = (formData: IFormInput[]): IFormInput[] => {
    const validatedFormData = [...formData];
    const passwordInput = validatedFormData.find(singleInput => singleInput.id === inputIds.PASSWORD);
    const confirmPasswordInput = validatedFormData.find(singleInput => singleInput.id === inputIds.CONFIRM_PASSWORD);

    if (passwordInput && confirmPasswordInput && passwordInput.value !== '' && confirmPasswordInput.value !== '' && passwordInput.value !== confirmPasswordInput.value) {
        validatedFormData[validatedFormData.findIndex(singleInput => singleInput.id === inputIds.CONFIRM_PASSWORD)].errorMessage = 'Please confirm your password';
    }

    return validatedFormData;
};
