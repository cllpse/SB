import React, { Component } from "react";

import styles from "./styles.module.css";

export interface IProps
{
    pathLowResolution: string;
    pathHighResolution: string;
}

export default class Image extends Component<IProps, {}>
{
    render()
    {
        const style = {
            backgroundImage: `url("${window.devicePixelRatio > 2 || window.innerWidth > 1024 ? this.props.pathHighResolution : this.props.pathLowResolution}")`
        };

        return (
            <div className={styles.image} style={style}></div>
        );
    }
}
