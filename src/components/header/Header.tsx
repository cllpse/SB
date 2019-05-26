import React, { Component } from "react";

import styles from "./header.module.css";

export default class Header extends Component
{
    render()
    {
        return (
            <div className={styles.header}>
                {this.props.children}
            </div>
        );
    }
}