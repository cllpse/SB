import React, { Component } from "react";

import styles from "./gallery.module.css";

export default class Gallery extends Component
{
    render()
    {
        return (
            <div className={styles.gallery}>
                {this.props.children}
            </div>
        );
    }
}