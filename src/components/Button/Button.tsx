import React, { Component, ReactChild } from "react";

import styles from "./styles.module.css";

export enum ButtonType {
    Primary = "primary",
    Secondary = "secondary"
}

export interface IProps
{
    type?: ButtonType
    label?: string;
    icon?: ReactChild;
    onClicked?: any;
}

export default class Button extends Component<IProps, {}>
{
    render()
    {
        const attributes = {"button-type": this.props.icon ? "icon" : this.props.type && this.props.type.toString()};

        return (
            <button className={styles.button} {...attributes} onClick={this.props.onClicked} role="button" aria-label={this.props.label}>
                {this.props.icon}
                {this.props.label}
            </button>
        );
    }
}
