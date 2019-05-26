import React, { Component } from "react";

import styles from "./section.module.css";

export default class Section extends Component
{
    render()
    {
        return (
            <div className={styles.section}>
                {this.props.children}
            </div>
        );
    }
}