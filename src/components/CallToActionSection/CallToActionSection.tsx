import React, { Component, ReactChild } from "react";

import styles from "./styles.module.css";

export interface Props {
    headerText: string;
    bodyText: string;
    button: ReactChild;
    buttonClicked: any;
}

export default class CallToActionSection extends Component<Props, {}>
{
    /* constructor(props: Props)
    {
        super(props);
    } */

    render()
    {
        return (
            <div className={styles.hero}></div>
        );
    }
}
