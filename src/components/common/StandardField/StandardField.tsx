import React, { useState } from "react";

import styles from "./StandardField.module.css";
import { IFormInput } from "../../../models/formInput.model";

export interface IStandardFieldProps extends IFormInput {
    changeHandler: (newValue: string) => void;
}

const StandardField: React.FunctionComponent<IStandardFieldProps> = ({
    id,
    label,
    type,
    value,
    changeHandler,
    errorMessage,
}) => {
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        setIsTouched(true);

        changeHandler(event.currentTarget.value);
    };

    const getInputClasses = (): string => {
        const inputClasses: string[] = [];
        inputClasses.push(styles.StandardFieldInput);

        if (errorMessage !== "") {
            inputClasses.push(styles.StandardFieldInputError);
        }

        return inputClasses.join(" ");
    };

    return (
        <div className={styles.StandardFieldWrapper}>
            <label htmlFor={id} className={styles.StandardFieldLabel}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                className={getInputClasses()}
                onChange={handleOnChange}
            />
            {errorMessage !== "" && isTouched && (
                <p
                    id={id + "ErrorMessage"}
                    className={styles.StandardFieldErrorMessage}
                >
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default StandardField;
