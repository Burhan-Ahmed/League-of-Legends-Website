import React from "react";
import "../pageStyles.css";
import Reviews from "./review.jsx";

export default function Foot() {
    return (
        <div className="bgFooter">
            <div className="mx-52 flex opacity-70">
                <div className="mt-10 w-1/2 me-4  border py-12 rounded-xl bg-white">
                    <Reviews />
                </div>
                <div className="mt-10 w-1/2 border py-12 rounded-xl bg-white">
                    <Reviews />
                </div>
            </div>
            <div className="my-20 mx-52 canva px-28 py-24 rounded-xl">
                <div className="mb-5 flex justify-between font-semibold">
                    <div className="text-lg">
                        <h1 className="text-5xl pb-3">
                            Subscribe for our NewsLetter
                        </h1>
                        <input className="w-72 py-2 ps-3 rounded-s-lg focus:outline-none text-slate-900" type="email" placeholder="Enter Email" />
                        <button className="p-2 hover:bg-black hover:text-white rounded-e-lg border border-black" type="submit">Subscribe</button>
                    </div>
                    <div className="me-5">
                        <h1 className="text-5xl pb-2">
                            Get in Touch
                        </h1>
                        <div className="flex justify-evenly">
                            <span>
                                <a href="#">
                                    <img src="src/assets/imgs/footer/facebook.png" alt="Facebook Icon" width={50} height={50} />
                                </a>
                            </span>
                            <span>
                                <a href="#">
                                    <img src="src/assets/imgs/footer/instagram.png" alt="Instagram Icon" width={50} height={50} />
                                </a>
                            </span>
                            <span>
                                <a href="#">
                                    <img src="src/assets/imgs/footer/youtube.png" alt="Youtube Icon" width={50} height={50} />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-3">
                    <div className="flex ">
                        <div>
                            <h5 className="text-xl font-bold">Quick links</h5>
                            <ul class="text-lg">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Guide</a></li>
                            </ul>
                        </div>
                        <div class=" ms-52">
                            <h5 className="text-xl font-bold">Information</h5>
                            <ul class="text-lg">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Membership</a></li>
                                <li><a href="#">Downloads</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-4 text-md text-slate-300">
                        <p>&copy; 2023 Your Website. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div >
    );
}