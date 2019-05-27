import React, { Component } from "react";

import styles from "./styles.module.css";
import Button, { ButtonType } from "../Button/Button";
import Icon from "../Icon/Icon";

export interface IProps {
    headerText: string;
    buttonText: string;
}

interface IState {
    videoPlaying?: boolean
}

export default class HeroSection extends Component<IProps, IState>
{
    constructor(props: IProps) {
        super(props);

        this.state = { videoPlaying: false };
    }

    private playVideo() {
        this.setState({videoPlaying: !this.state.videoPlaying});
    }

    render() {
        return (
            <section className={styles.hero}>

                {!this.state.videoPlaying &&
                    <>
                        <video autoPlay muted loop className={styles.video}>
                            <source src="assets/Desktop_loop_min.mp4" type="video/mp4" />
                        </video>

                        <div className={styles.content}>
                            <h1 className={styles.header}>{this.props.headerText}</h1>

                            <Button type={ButtonType.Secondary} label={this.props.buttonText} onClicked={this.playVideo.bind(this)}  />
                        </div>
                    </>
                }

                {this.state.videoPlaying &&
                    <div className={styles.embed}>
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/x-Yx1crUFFY?autoplay=1" title="Say hi to the SOUNDBOKS 2" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        <div className={styles.close}>
                            <Button icon={<Icon path="assets/outline-close-24px.svg" />} onClicked={this.playVideo.bind(this)} />
                        </div>
                    </div>
                }
            </section>
        );
    }
}
