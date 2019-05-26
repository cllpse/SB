import React, { Component, ReactChild } from "react";

import styles from "./styles.module.css";

export interface Props
{
    headerText: string;
    bodyText: string;
}

export default class ImageSection extends Component<Props, {}>
{
    render()
    {
        return (
            <div className={styles.hero}></div>
        );
    }
}
