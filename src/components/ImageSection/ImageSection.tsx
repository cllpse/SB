import React, { Component, ReactChild } from "react";

import styles from "./styles.module.css";

export enum ImageSectionDirection {
    Left = "left",
    Right = "right"
}

export interface Props
{
    headerText: string;
    bodyText: string;
    image: ReactChild;
    direction: ImageSectionDirection;
}

export default class ImageSection extends Component<Props, {}>
{
    render()
    {
        const attributes = { "image-section-direction": this.props.direction.toString() };

        return (
            <section className={styles.section} {...attributes}>
                <div className={styles.image}>
                    {this.props.image}
                </div>

                <div className={styles.content}>
                    <h2 className={styles.header}>{this.props.headerText}</h2>

                    <p className={styles.body}>{this.props.bodyText}</p>
                </div>
            </section>
        );
    }
}
