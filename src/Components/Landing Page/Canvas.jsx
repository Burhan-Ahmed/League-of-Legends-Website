import React from "react";
import "./HeaderStyle.css";
import Btm from "./BottomBar";

export default function Main({ title, subtitle, description }) {
    return (
        <>
            <div className="w-1/2 mt-44 ms-44 text-white">
                <div className="hideSides">
                    <span>
                        <h1 className="LandingTitle font-bold text-7xl">
                            {title}
                        </h1>
                    </span>
                    <h6 className="font-bold text-lg mt-3">
                        {subtitle}
                    </h6>
                </div>
                <div className="hideSides mt-5 text-xl">
                    <p className="descrip">
                        {description}
                    </p>
                </div>
            </div>
            <div className="ms-44 w-1/2 mt-5 flex justify-end">
                <button className="me-5 px-5 py-1 text-xl border-2 ease-in-out bg-opacity-60 border-black bg-red-700  hover:bg-black hover:text-white hover:border-white">
                    Download
                </button>
                <button className="me-7 px-5 py-1 text-xl border-2 ease-in-out bg-opacity-60 bg-gray-700  border-black  hover:bg-black hover:text-white hover:border-white">
                    More
                </button>
            </div>
            <Btm />
        </>
    );
}
