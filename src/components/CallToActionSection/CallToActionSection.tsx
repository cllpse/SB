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

                <div className={styles.content}>
                    <h2 className={styles.header}>{this.props.headerText}</h2>

                    <p className={styles.body}>{this.props.bodyText}</p>

                    {this.props.buttonText &&
                        <div className={styles.button}>
                            <Button label={this.props.buttonText} type={ButtonType.Primary} onClicked={this.props.buttonOnClicked} />
                        </div>
                    }
                </div>
            </section>
        );
    }
}
