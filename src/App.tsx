import React from "react";

import styles from "./app.module.css";

import CallToActionSection from "./components/CallToActionSection/CallToActionSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Image from "./components/Image/Image";
import ImageSection, { ImageSectionDirection } from "./components/ImageSection/ImageSection";
import InstagramSection from "./components/InstagramSection/InstagramSection";

const App: React.FC = () => {
    const claimDeal = () => {
        window.location.href = "https://soundboks.com/product/soundboks-2​";
    }

    return (
        <div className={styles.app}>
            <Header />

            <HeroSection headerText={`Seize the\nseason`} buttonText="Watch Video" />

            <CallToActionSection
                headerText="We got your backpack"
                bodyText="Opportunity can knock in any season, and only the bold can take on the cold. This Winter, buy a SOUNDBOKS 2, enter the code ​WINTERADVENTURE ​at checkout, and you’ll get a BACKPACK for free. ​That’s a $129 value.​” ​(€129 for EU $129 for US)"
                image={<Image pathLowResolution="assets/Desktop_Campaign_Image.jpg" pathHighResolution="assets/Desktop_Campaign_Image-2x.jpg" />}
                buttonText="Claim deal"
                buttonOnClicked={claimDeal}
            />

            <div className={styles.imageSection}>
                <ImageSection
                    headerText="Shake the slopes"
                    bodyText="Rock the mountain with 122 dB of pure volume."
                    image={<Image pathLowResolution="assets/Desktop_Volume.jpg" pathHighResolution="assets/Desktop_Volume-2x.jpg" />}
                    direction={ImageSectionDirection.Left}
                />

                <ImageSection
                    headerText="Longer life for longer nights"
                    bodyText="The nights may be long, but our battery life is 40 hours strong."
                    image={<Image pathLowResolution="assets/Desktop_Battery.jpg" pathHighResolution="assets/Desktop_Battery-2x.jpg" />}
                    direction={ImageSectionDirection.Right}
                />

                <ImageSection
                    headerText="Snow problem? No problem"
                    bodyText={`Go ahead, throw a snowball at it.\nYeah, that didn't even hurt.`}
                    image={<Image pathLowResolution="assets/Desktop_Durability.jpg" pathHighResolution="assets/Desktop_Durability-2x.jpg" />}
                    direction={ImageSectionDirection.Left}
                />

                <ImageSection
                    headerText="No mountain high enough"
                    bodyText={`Strap in that BACKPACK and take a hike.\nOr two. Or three.`}
                    image={<Image pathLowResolution="assets/Desktop_Portability.jpg" pathHighResolution="assets/Desktop_Portability-2x.jpg" />}
                    direction={ImageSectionDirection.Right}
                />
            </div>

            <CallToActionSection
                headerText="Free backpack"
                bodyText="This Winter, buy a SOUNDBOKS 2, enter the code WINTERADVENTURE at checkout, and get a BACKPACK for free. Want to explore new worlds and disover new experiences? We've got your back at no extra cost."
                image={<Image pathLowResolution="assets/Desktop_Deal_Image.jpg" pathHighResolution="assets/Desktop_Deal_Image-2x.jpg" />}
                buttonText="Claim deal"
                buttonOnClicked={claimDeal}
            />

            <InstagramSection headerText="#seizetheseason" />

            <Footer />
        </div>
    );
}

export default App;
