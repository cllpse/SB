import React, { Component } from "react";

import styles from "./image.module.css";

export default class Hero extends Component
{
    render()
    {
        return (
            <div className={styles.image}>
                {this.props.children}
            </div>
        );
    }
}