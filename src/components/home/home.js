import React, {Fragment} from "react";

import vp_background_image_path
    from "./home-backgroung-image_keyboard-mouse.jpeg";
import {BackgroundImage, HomePageContentContainer} from "../styles/home";
import ProfileImage from "./ProfileImage";
import ProfileHeading from "./ProfileHeading";
import DownloadResumeButton from "./DownloadResumeButton";

const Home = () => {
    /*const social_links = [
          {
              'css_class': 'mui-btn mui-btn--fab mui-btn--primary',
              'href': 'https://www.linkedin.com/in/patelviralb',
              'target': '_blank',
              'icon_class': 'fab fa-linkedin fa-lg',
          },
          {
              'css_class': 'mui-btn mui-btn--fab mui-btn--primary',
              'href': 'https://www.github.com/patelviralb',
              'target': '_blank',
              'icon_class': 'fab fa-github fa-lg',
          },
          {
              'css_class': 'mui-btn mui-btn--fab mui-btn--primary',
              'href': 'https://www.facebook.com/viral22/',
              'target': '_blank',
              'icon_class': 'fab fa-facebook fa-lg',
          },
          {
              'css_class': 'mui-btn mui-btn--fab mui-btn--primary',
              'href': 'https://twitter.com/pviralb',
              'target': '_blank',
              'icon_class': 'fab fa-twitter fa-lg',
          },
      ];*/
    const backgroundImageMetadata = {};
    backgroundImageMetadata.imagePath = vp_background_image_path;

    return (
        <Fragment>
            <div id="vp-home"/>
            <BackgroundImage {...backgroundImageMetadata}>
                <HomePageContentContainer>
                    <div className="container">
                        <ProfileImage/>

                        <ProfileHeading/>

                        <DownloadResumeButton/>

                        <div id="vp-about-me"/>
                    </div>
                </HomePageContentContainer>
            </BackgroundImage>
        </Fragment>
    );
};

export default Home;
