import React, { Component } from "react";

import styles from "./styles.module.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.logo}></div>

                <nav className={styles.navigation}>
                    <Button icon={<Icon path="/assets/outline-shopping_cart-24px.svg" />} />
                    <Button icon={<Icon path="/assets/outline-menu-24px.svg" />} />
                </nav>
            </header>
        );
    }
}
