"use client"

import Image from "next/image";
import gallary1 from "../../../assets/gallery-5-original.jpg";
import gallary2 from "../../../assets/gallery-3-original.jpg";
import gallary3 from "../../../assets/gallery-7-original.jpg";
import gallary4 from "../../../assets/gallery-8-original.jpg";
import cause1 from "../../../assets/causes-01-372x396.jpg";
import cause2 from "../../../assets/causes-02-372x396.jpg";
import cause3 from "../../../assets/causes-03-372x396.jpg";
import Helper from "@/components/Helper";
import HelpTheGlobe from "@/components/HelpTheGlobe";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

export default function Home() {

    return (
        <>
            <main>
                <section className="main-big-container">
                    <div className="main-container">
                        <div className="main-container-content">
                            <p className="main-container-content-title">Help The Children</p>
                            <p className="main-container-content-description">We do whatever it takes to make sure children don’t just survive but thrive. Helper believes that every child should be able to make their mark on their world and help build a better future.</p>
                        </div>
                    </div>
                    <div className="down-white-image"></div>
                </section>

                <section className="mission-section">
                    <div className="mission-container">
                        <div className="mission-container-image">
                            <Image
                                src={gallary1}
                                alt="banner"
                                width={271}
                                height={119}
                            />
                        </div>
                        <div className="mission-container-image">
                            <Image
                                src={gallary4}
                                alt="banner"
                                width={271}
                                height={119}
                            />
                        </div>
                        <div className="mission-container-image">
                            <Image
                                src={gallary3}
                                alt="banner"
                                width={271}
                                height={119}
                            />
                        </div>
                        <div className="mission-container-image">
                            <Image
                                src={gallary2}
                                alt="banner"
                                width={271}
                                height={119}
                            />
                        </div>
                    </div>
                    <div className="write-image">
                        <div className="write-image-all">
                            <p className="write-image-title">OUR MISSION</p>
                            <p className="write-image-description">
                                OUR ORGANIZATION PERSUE SEVERAL GOALS THAT CAN
                                BE IDENTIFIED AS OUR MISSION.LEARN MORE ABOUT
                                THEM
                            </p>
                        </div>
                        <div className="write-image-CONTAINER">
                            <div className="small-divs">
                                <div className="small-div-for-image">
                                    <i className="fa-regular fa-face-smile"></i>
                                </div>
                                <div className="small-div-for-text gap-3 ">
                                    <p className="text-2xl small-div-for-text-title">
                                        Saving Children
                                    </p>
                                    <p className="text-xl small-div-for-text-title-descriptition">
                                        Ourr mission is to save children
                                    </p>
                                </div>
                            </div>
                            <div className="small-divs">
                                <div className="small-div-for-image">
                                    <i className="fa-solid fa-umbrella"></i>
                                </div>
                                <div className="small-div-for-text gap-3 ">
                                    <p className="text-2xl small-div-for-text-title">
                                        Peace On The Planet
                                    </p>
                                    <p className="text-xl small-div-for-text-title-descriptition">
                                        Ourr mission is to save children
                                    </p>
                                </div>
                            </div>
                            <div className="small-divs">
                                <div className="small-div-for-image">
                                    <i className="fa-regular fa-sun"></i>
                                </div>
                                <div className="small-div-for-text gap-3 ">
                                    <p className="text-2xl small-div-for-text-title">
                                        Care & Protection
                                    </p>
                                    <p className="text-xl small-div-for-text-title-descriptition">
                                        Ourr mission is to save children
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section className="latest-cause">
                <div className="latest-cause-content">
                    <p className="latest-cause-content-title">Latest Cause</p>
                    <p className="latest-cause-content-description">
                        At Helper, there are various charity causes and
                        projects, in which you can always take part. Feel free
                        to learn about them below or browse our website for more
                        information.
                    </p>
                </div>

                <div className="latest-cause-images-row">
                    <div className="latest-cause-image gap-2">
                        <Image
                            src={cause1}
                            alt="banner"
                            width={372}
                            height={396}
                        />
                        <p>Recycling for charity</p>
                        <p>$54684 of $65468 raised</p>
                    </div>
                    <div className="latest-cause-image gap-2">
                        <Image
                            src={cause2}
                            alt="banner"
                            width={372}
                            height={396}
                        />
                        <p>Recycling for charity</p>
                        <p>$54684 of $65468 raised</p>
                    </div>
                    <div className="latest-cause-image gap-2">
                        <Image
                            src={cause3}
                            alt="banner"
                            width={372}
                            height={396}
                        />
                        <p>Recycling for charity</p>
                        <p>$54684 of $65468 raised</p>
                    </div>
                </div>
            </section>

            <Helper />
            <HelpTheGlobe />
            <Partners />
            <Footer />
        </>
    );
}
