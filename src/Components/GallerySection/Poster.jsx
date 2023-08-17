import React from "react";

export default function Poster({ img }) {
    const BgImg = {
        backgroundImage: `url(src/assets/imgs/gallery/${img})`,
        height: '50vh',
        width: '50vw',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className=" hover:blur-0 blur-sm text-center rounded" style={BgImg}>
            <button className="mt-96 px-3 py-2 border font-semibold border-black text-lg text-black bg-white rounded">
                Download
            </button>
        </div>

    );
}