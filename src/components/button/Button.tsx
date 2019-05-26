import React, { Component } from "react";

import styles from "./button.module.css";

export default class Button extends Component
{
    render()
    {
        return (
            <div className={styles.button}>
                {this.props.children}
            </div>
        );
    }
}