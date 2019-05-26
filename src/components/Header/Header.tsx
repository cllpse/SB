import React, { Component } from "react";

import styles from "./styles.module.css";

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <a href="/" title="Navigate to the front page" className={styles.logo}></a>

                <nav className={styles.navigation}>
                    <a href="/" title="View shopping cart" className={styles.cart}></a>
                    <a href="/" title="Open navigation menu" className={styles.menu}></a>
                </nav>
            </header>
        );
    }
}
