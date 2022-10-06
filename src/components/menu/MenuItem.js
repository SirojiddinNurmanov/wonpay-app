import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ link, image, alt, text }) => {
    return (
        <div className="category-card">
            <div key={"1" + link.toString()} className="home-category-img">
                <Link to={link} key={"2" + link.toString()}>
                    <img
                        src={image}
                        alt={alt}
                    />
                </Link>
            </div>
            <Link key={"3" + link.toString()} to={link}>
                <div className="home-category-text">
                    <span>{text}</span>
                </div>
            </Link>
        </div>
    )
};

export default MenuItem;
