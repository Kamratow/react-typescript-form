import React from "react";
import { Link } from "react-router-dom";

import styles from "./FormLink.module.css";

export interface IFormLinkProps {
    description: string;
    linkText: string;
    linkPath: string;
}

const FormLink: React.FunctionComponent<IFormLinkProps> = ({
    description,
    linkText,
    linkPath,
}) => {
    return (
        <div className={styles.FormLinkWrapper}>
            <span className={styles.FormLinkDescription}>{description}</span>
            <div>
                <Link to={linkPath}>{linkText}</Link>
            </div>
        </div>
    );
};

export default FormLink;
