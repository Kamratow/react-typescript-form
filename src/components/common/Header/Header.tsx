import React from "react";

import styles from "./Header.module.css";

export interface IHeaderProps {
    headerContent: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ headerContent }) => {
    return <h1 className={styles.Header}>{headerContent}</h1>;
};

export default Header;
