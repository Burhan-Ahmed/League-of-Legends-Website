import React from "react";

export default function Album({ img }) {
    const BgImg = {
        backgroundImage: `url(src/assets/imgs/gallery/${img}.jpg)`,
        height: '30vh',
        width: '30vw',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="h-max w-3/12 text-right rounded" style={BgImg}>
            <button className="me-8 mt-64 py-1 px-8 rounded text-xl font-semibold bg-white">
                Buy
            </button>
        </div>
    );
}