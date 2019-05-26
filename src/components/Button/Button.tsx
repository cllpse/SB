import React, { Component, ReactChild } from "react";

import styles from "./styles.module.css";

export enum ButtonType {
    Primary,
    Secondary
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
    constructor(props: IProps)
    {
        super(props);

        if (this.props.icon)
        {

        }
    }

    render()
    {
        const attributes = {"button-type": this.props.icon ? "icon" : this.props.type && this.props.type.toString().toLowerCase()};

        return (
            <button className={styles.button} {...attributes} onClick={this.props.onClicked}>
                {this.props.icon}
                {this.props.label}
            </button>
        );
    }
}
