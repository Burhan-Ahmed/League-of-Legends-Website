import React, { useContext } from "react";
import "./HeaderStyle.css";
import { imagesData } from "../DataSet";
import { specs } from "../../App";

export default function Btm() {
    const count = useContext(specs);
    return (
        <div className="p-14 w-1/2 absolute right-0 bottom-0 flex justify-evenly rounded-ss-full border-black bg-opacity-60 bg-white text-black">
            <div className="pe-8">
                <div className="font-bold text-2xl">
                    Recommanded System
                </div>
                <div className="btBox flex text-xl font-mono">
                    <div>CPU : </div>
                    <div className="cpu">
                        {imagesData[count].specs.cpu} <br />
                    </div>
                </div>
                <div className="btBox flex text-xl font-mono">
                    <div>GPU : </div>
                    <div className="cpu">
                        {imagesData[count].specs.gpu}
                    </div>
                </div>
            </div>
            <div className="pe-4">
                <div className="font-bold text-2xl">
                    Game Type
                </div>
                <div className="btBox font-mono">
                    <div className=" cpu type text-xl">
                        {imagesData[count].gametype}
                    </div>
                </div>
            </div>
            <div className="pe-10  border-black">
                <div className="font-bold text-2xl">
                    Developer
                </div>
                <div className="btBox font-mono">
                    <div className="cpu type text-xl">
                        {imagesData[count].developer}
                    </div>
                </div>
            </div>
        </div>
    );
}