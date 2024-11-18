import { Col, Row } from "react-bootstrap";
import AnimationLottie from "../../share/animation-lottie";
import codingJSON from '../../../assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "../../../assets/lottie/string/development";
import { CONTACT_LOTTIE } from "../../../assets/lottie/string/contact";

import GlowCard from "../../share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "../divider";
import { APP_DATA } from "../../../helpers/data";
import SocialMedia from "../social.media";
import React from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2"><span className="brand-red">{t("about.title")}</span> </h3>
                    <div>
                        <div>
                            <p> {t("about.vung")} </p>

                            <p> {t("about.body")}.</p>

                            <p> {t("about.body2")}.</p>
                        </div>
                    </div>
                    <div>
                        <p>{t("about.body3")}

                        </p>
                        <ul>
                            <li>{t("about.body4")}</li>
                            <li>{t("about.body5")}</li>
                            <li>{t("about.body6")}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">"Pursuing Your Dreams Is How You Become Homeless ~.~"</p>
                        <p className="text-center brand-red">--Jimmy O Yang</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">Education</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2019-2024</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{t("education.title")}</p>
                                                <p className="company">{t("education.school")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">{t("contact.find")} </h3>
                    <SocialMedia
                        linked={APP_DATA.LINKED_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        tiktok={APP_DATA.TIKTOK_URL}
                        github={APP_DATA.GITHUB_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">{t("contact.title")}</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;