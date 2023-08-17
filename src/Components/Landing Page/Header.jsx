import React from "react";
import "./HeaderStyle.css";

export default function Head() {
    return (
        <div className="ms-36 flex">
            <div className="w-52">
                <img src="src/assets/logos/logo-bg-remove.png" alt="Website Logo" />
            </div>
            <div className="text-3xl text-gray-600">
                <ul className="ms-16 mt-10 flex font-semibold">
                    <li className="me-24 text-pink-600">
                        Home
                    </li>
                    <li className="me-24">
                        News
                    </li>
                    <li className="me-24">
                        Gallery
                    </li>
                    <li>
                        Reviews

                    </li>
                </ul>
            </div>
        </div>
    );
}