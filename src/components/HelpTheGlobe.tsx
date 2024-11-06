import Image from "next/image";
import helpGlobe from "../../assets/gallery-12-original.jpg";

function HelpTheGlobe() {
    return (
        <div className="help-the-globe">
            <div className="shadow-div">
                <Image
                    src={helpGlobe}
                    alt="banner"
                    className="images-of-globe"
                />
                <p>Help The Global Cause</p>
                <button className="donate-button">Donate Now</button>
            </div>
        </div>
    );
}

export default HelpTheGlobe;
