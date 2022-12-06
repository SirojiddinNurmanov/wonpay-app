import React, { memo } from "react";

const Title = ({ text, amount = false, small = false, inContent = false }) => (
    <div className={"main-title " + (inContent && "in-content")}>
        <div className="left">{text}</div>
        {amount && (
            <div className={"right" + (small ? "small" : "")} dangerouslySetInnerHTML={{ __html: amount }} />
        )}
    </div>
);

export default memo(Title);