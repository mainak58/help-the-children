import Image from "next/image";
import partner1 from "../../assets/logo-1-270x121.webp";
import partner2 from "../../assets/logo-2-270x121.webp";

function Partners() {
    return (
        <div className="partners">
            <div className="partners-container">
                <div className="partner-title">
                    <p>Partner</p>
                </div>

                <div className="partner-images">
                    <Image
                        src={partner1}
                        height={121}
                        width= {270}
                        alt="image-1"
                        />
                    <Image
                        src={partner2}
                        height={121}
                        width= {270}
                        alt="image-2"
                        />
                </div>
            </div>
        </div>
    );
}

export default Partners;
