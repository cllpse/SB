import React from "react";

import styles from "./App.module.css";

import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Image from "./components/image/Image";
import Section from "./components/section/Section";

const App: React.FC = () =>
{
    return (
        <div className={styles.app}>
            <Hero><div>hello world</div></Hero>
        </div>
    );
}

export default App;
