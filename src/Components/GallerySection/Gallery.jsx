import React from "react";
import Album from "./GalleryCards";
import Poster from "./Poster";

export default function Gallery() {

    return (
        <div className="px-16 h-screen">
            <div className="ms-44 ps-5 mb-14 text-4xl h-max font-semibold border-s-8 border-black">
                Gallery
            </div>
            <div className="mx-auto w-max flex mb-5">
                <div className="relative left-5 my-auto">
                    <button>
                        <img className="p-2 bg-white rounded-full border border-black transform scale-x-[-1]"
                            src="src/assets/imgs/gallery/arrow.png" width={50} height={50} />
                    </button>
                </div>
                <Album img={"LastOfUs"} />
                <span className="me-5"></span>
                <Album img={"rainbow"} />
                <div className="relative right-5 my-auto">
                    <button >
                        <img className="p-2 bg-white rounded-full border border-black" src="src\assets\imgs\gallery\arrow.png" alt="arrow icon"
                            width={50} height={50} />
                    </button>
                </div>
            </div>
            <div className="mx-auto px-3 w-8/12 flex">
                <Poster img={"hitman.png"} />
                <span className="me-5"></span>
                <Poster img={"ghost.png"} />
                <span className="me-5"></span>
                <Poster img={"farCry.jpg"} />
                <span className="me-5"></span>
                <Poster img={"AcVal.jpg"} />
            </div>
        </div>
    );
}