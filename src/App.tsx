import React from "react";

import styles from "./app.module.css";

import Button, { ButtonType } from "./components/Button/Button";
import CallToActionSection from "./components/CallToActionSection/CallToActionSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Image from "./components/Image/Image";
import ImageSection from "./components/ImageSection/ImageSection";
import InstagramSection from "./components/InstagramSection/InstagramSection";

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />

            <HeroSection headerText="" button={<Button text="" type={ButtonType.Primary} />} buttonClicked="" />

            <CallToActionSection headerText="" bodyText="" button={<Button text="" type={ButtonType.Primary} />} buttonClicked="" />

            <ImageSection headerText="" bodyText="" image={<Image />} />

            <ImageSection headerText="" bodyText="" image={<Image />} />

            <ImageSection headerText="" bodyText="" image={<Image />} />

            <ImageSection headerText="" bodyText="" image={<Image />} />

            <CallToActionSection headerText="" bodyText="" button={<Button text="" type={ButtonType.Primary} />} buttonClicked="" />

            <InstagramSection headerText="" />

            <Footer />
        </div>
    );
}

export default App;
