import React from "react";
import helper1 from "../../assets/about-01-471x327.jpg";
import Image from "next/image";

function Helper() {
    return (
        <div className="helper-container">
            <div className="all-content">
                <div className="helper-image">
                    <Image
                        src={helper1}
                        height={327}
                        width={471}
                        alt="helper-image"
                    />
                </div>
                <div className="helper-content">
                    <p className="helper-title">About helper</p>
                    <p className="helper-description">
                        Our charity organization was founded in 1994 based on
                        the acute need to raise money for disadvantaged and
                        at-risk children. Helper Charity steps in where health
                        care ends, providing direct help to children with
                        special needs. For over 30 years, we have ensured that
                        children have the support to reach their potential and
                        thrive. Since our foundation, we have distributed more
                        than $30 million in funding to families and
                        organizations in communities.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Helper;
