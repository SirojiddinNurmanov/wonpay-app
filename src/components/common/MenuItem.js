import React, { memo } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ url, image, alt, text }) => {
    return (
        <Link to={url}>
            <div className="category-card">
                <div className="category-img">
                    <img src={image} alt={alt} />
                </div>
                <div className="category-text">
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        </Link>
    );
};

export default memo(MenuItem);
