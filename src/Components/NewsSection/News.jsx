import React from "react";
import Card from "./Cards";

export default function NewsUpdates() {
    return (
        <div className="p-16 me-44 h-screen">
            <h1 className="ms-44 ps-5 mb-24 text-4xl font-semibold border-s-8 border-black">
                Stories
            </h1>
            <div className="ms-44 flex">
                <Card cards={"card4"} />
                <span className="me-5"></span>
                <Card cards={"card1"} />
                <span className="me-5"></span>
                <Card cards={"card2"} />

            </div>
            <div className="ms-44 mt-5 flex">
                <Card cards={"card3"} width={"max"} />
                <span className="me-5"></span>
                <Card cards={"card5"} width={"max"} />
            </div>
        </div>
    );
}