import React from "react";
import "../pageStyles.css";

export default function Card({ cards, width = "1/3" }) {
    const BgImg = {
        backgroundImage: `url(src/assets/imgs/newsCard/${cards}.jpg)`
    };
    const cardClass = `card ps-5 w-${width}  text-white`

    return (
        <div className={cardClass} style={BgImg} >
            <div className="relative top-52 ">
                <h1 className="px-2 w-max bg-red-600">
                    Popular
                </h1>
                <p className="text-3xl">
                    Lorem ipsum dolor consectetutionem rporis distinctio odio deleniti .
                </p>
            </div>
        </div >
    );
}

