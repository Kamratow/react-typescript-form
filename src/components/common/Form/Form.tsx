import React from "react";

import styles from "./Form.module.css";

const Form: React.FunctionComponent = ({ children }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    return (
        <form className={styles.FormContainer} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;
