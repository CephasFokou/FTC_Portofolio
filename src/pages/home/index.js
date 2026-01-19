import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { getContent, documents } from "../../content_option";
import { Link } from "react-router-dom";
import ftcHero1 from "../../assets/images/ftc-1.jpeg";
import ftcHero2 from "../../assets/images/ftc-2.jpg";
import { useTranslation } from "../../i18n/useTranslation";

export const Home = () => {
  const { t, lang } = useTranslation();
  const { introdata, meta } = getContent(lang);
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
          >
            <div className="hero_carousel" aria-label={t("home.heroCarousel")}>
              <div className="hero_carousel__cube">
                <div
                  className="hero_carousel__face hero_carousel__face--front"
                  style={{ backgroundImage: `url(${ftcHero1})` }}
                />
                <div
                  className="hero_carousel__face hero_carousel__face--back"
                  style={{ backgroundImage: `url(${ftcHero2})` }}
                />
              </div>
            </div>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x typewriter-text">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      {t("home.projects")}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/experience" className="text_2">
                    <div id="button_h" className="ac_btn btn">
                      {t("home.experience")}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      {t("home.aboutMe")}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      {t("home.contactMe")}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <a href={documents.cv} className="text_2" download>
                    <div id="button_h" className="ac_btn btn mt-3">
                      {t("home.downloadCv")}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
