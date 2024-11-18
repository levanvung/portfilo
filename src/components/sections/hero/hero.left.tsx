/* eslint-disable react/no-unescaped-entities */
import Typewriter from "typewriter-effect";
import SocialMedia from "../social.media";
import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "../resize.button";
import { APP_DATA } from '../../../helpers/data';
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import React from "react";
import i18n from "i18next";

interface Iprops {
    scrollToExpericenceSection: () => void
}

const HeroLeft = (props: Iprops) => {

    const { t } = useTranslation();
    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null

    }
    const handleDowloadCV = () => {
        const currentLanguage = i18n.language; // Lấy ngôn ngữ hiện tại
        const url =
            currentLanguage === "vi"
                ? "https://drive.google.com/file/d/1q3g-y53cT-syigS1SYEfBR-TEWPqzJZb/view?usp=drive_link"
                : "https://drive.google.com/file/d/18dsC4iV_6-ZDIgork3wWf9YUw_mG4WvD/view?usp=drive_link";
    
        openInNewTab(url);
    };
    
    return (
        <div className='hero-left'>
            <h3>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h3>
            <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                I'M &nbsp;
                <strong className="brand-red">{t("appHeader.brand")}</strong>
            </h3>
            <Typewriter
                options={{
                    strings: [
                        "Software Developer",
                        "Freelancer",
                        "MERN Stack Developer",
                        "Open Source Contributor",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "brand-green"
                }}
            />
            <div
                className="mt-md-6 mt-3 mb-md-5 mb-2"
            >
                <SocialMedia
                    linked={APP_DATA.LINKED_URL}
                    facebook={APP_DATA.FACEBOOK_URL}
                    tiktok={APP_DATA.TIKTOK_URL}
                    github={APP_DATA.GITHUB_URL}
                />
            </div>
            <div className="d-md-flex d-none gap-4">
                <ResizeButton
                onClick={props.scrollToExpericenceSection}
                    btnText={t("heroSection.exp")}
                    btnIcons={<AiFillFire style={{ color: "orange" }} />}
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)"
                    }}
                />
                <ResizeButton
                    onClick={handleDowloadCV}
                    btnText={t("heroSection.cv")}
                    btnIcons={<MdFileDownload />}
                />

            </div>

        </div>
    )
}

export default HeroLeft;