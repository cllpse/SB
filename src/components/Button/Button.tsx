import React, { Component } from "react";

import styles from "./styles.module.css";

export enum ButtonType {
    Primary,
    Secondary
}

export interface Props
{
    text: string;
    type: ButtonType
    clicked?: any;
}

export default class Button extends Component<Props, {}>
{
    /* constructor(props: Props)
    {
        super(props);
    } */

    render()
    {
        return (
            <div className={styles.button}>
                BUTTON
            </div>
        );
    }
}
