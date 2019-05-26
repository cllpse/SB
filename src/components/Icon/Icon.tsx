import React, { Component, ReactChild } from "react";

import styles from "./styles.module.css";

export interface IProps
{
    path: string;
}

export default class Icon extends Component<IProps, {}>
{
    render()
    {
        return (
            <img className={styles.icon} src={this.props.path} />
        );
    }
}
