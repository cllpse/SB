import React, { Component } from "react";

import styles from "./hero.module.css";

export default class Hero extends Component
{
    render()
    {
        return (
            <div className={styles.hero}>
                {this.props.children}
            </div>
        );
    }
}