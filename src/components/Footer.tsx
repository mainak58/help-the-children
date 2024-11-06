import Image from "next/image";
import React from "react";
import craftImage from "../../assets/logo.webp"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="craftimage-section">
                    <Image src={craftImage} alt="craft-image" height={42} width={151}></Image>
                </div>
                <div className="footer-content">
                    <p>About</p>
                    <p>Cause</p>
                    <p>Team</p>
                    <p>Contacts</p>
                </div>

                <div className="logos">
                <i className="fa-brands fa-facebook fa-2x"></i>
                <i className="fa-brands fa-instagram fa-2x"></i>
                <i className="fa-brands fa-twitter fa-2x"></i>
                <i className="fa-brands fa-youtube fa-2x"></i>
                <i className="fa-brands fa-pinterest fa-2x"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;
