import React from "react";

import styles from "./SubmitButton.module.css";

export interface ISubmitButtonProps {
    buttonLabel: string;
    disabled: boolean;
}

const SubmitButton: React.FunctionComponent<ISubmitButtonProps> = ({
    buttonLabel,
    disabled,
}) => {
    return (
        <div className={styles.SubmitButtonWrapper}>
            <button
                className={styles.SubmitButton}
                type="submit"
                disabled={disabled}
            >
                {buttonLabel}
            </button>
        </div>
    );
};

export default SubmitButton;
