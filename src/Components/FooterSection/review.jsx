import React from "react";
import faker from 'faker';

export default function Reviews() {
    const count = faker.random.number({ min: 1, max: 5 });
    const final = () => {
        const stars = [];

        for (let i = 0; i < count; i++) {
            stars.push(
                <img
                    key={i}
                    className="ms-1"
                    width={18}
                    height={18}
                    src="src\assets\imgs\footer\star.png"
                    alt="star icon"
                />
            );
        }
        return stars;
    };
    return (
        <div className="border border-black rounded-xl px-10 py-8 mx-auto w-11/12 h-56 overflow-hidden">
            <div className="inline-flex">
                <img width={40} height={40} src="src\assets\imgs\footer\user_847969.png" alt="user icon" />
                <h1 className="ms-3 pt-1.5 font-semibold text-xl">{faker.name.findName()}</h1>
            </div>
            <div className="mt-2 flex items-center">
                {final()}
            </div>
            <p>{faker.lorem.paragraph().slice(0,250)}</p>
        </div>
    );
}