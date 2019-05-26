import React, { Component, ReactChild } from "react";

import styles from "./styles.module.css";
import Button, { ButtonType } from "../Button/Button";

export interface IProps {
    headerText: string;
    bodyText: string;
    image: ReactChild;
    buttonText?: string;
    buttonOnClicked?: any;
}

export default class CallToActionSection extends Component<IProps, {}>
{
    render()
    {
        return (
            <section className={styles.section}>
                <div className={styles.image}>
                    {this.props.image}
                </div>

                <div className={styles.spacer}></div>

                <div className={styles.text}>
                    <h2>{this.props.headerText}</h2>

                    <p>{this.props.bodyText}</p>

                    {this.props.buttonText &&
                        <Button label={this.props.buttonText} type={ButtonType.Primary} onClicked={this.props.buttonOnClicked} />
                    }
                </div>

            </section>
        );
    }
}
