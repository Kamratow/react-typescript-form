export interface IFormInput {
    id: string;
    value: string;
    type: InputType;
    label: string;
    errorMessage: string;
}

export type InputType = "text" | "email" | "password";