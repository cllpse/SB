import React, { Component, ReactChild } from "react";

import styles from "./styles.module.css";

export interface Props {
    headerText: string;
    button: ReactChild;
    buttonClicked: any;
}

export default class HeroSection extends Component<Props, {}>
{
    /* constructor(props: Props)
    {
        super(props);
    } */

    render()
    {
        return (
            <div className={styles.hero}>
                HERO
                {this.props.headerText}
                {this.props.button}
            </div>
        );
    }
}
