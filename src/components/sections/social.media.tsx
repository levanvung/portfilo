import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import React from "react";

interface ISocialMedia {
    linked: string;
    tiktok: string;
    github: string;
    facebook: string;
}

const SocialMedia = (props:ISocialMedia) => {
    const { linked, tiktok, github, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={linked} target='_blank' className="highlight" title="Youtube Lê Văn Vững">
                <FaLinkedin size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Lê Văn Vững">
                <FaTiktok size={30} />
            </a>
            <a href={github} target='_blank' className="highlight" title="Github Lê Văn Vững">
                <FaGithub size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Lê Văn Vững">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;