import React, { Component } from "react";

import styles from "./styles.module.css";

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <a href="/" className={styles.logo}></a>

                <nav className={styles.navigation}>
                    <a href="/" className={styles.cart}></a>
                    <a href="/" className={styles.menu}></a>
                </nav>
            </header>
        );
    }
}
