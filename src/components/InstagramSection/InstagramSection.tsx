import React, { Component } from "react";

import styles from "./styles.module.css";

export interface Props
{
    headerText: string;
}

export default class InstagramSection extends Component<Props, {}>
{
    render()
    {
        return (
            <div className={styles.section}></div>
        );
    }
}
