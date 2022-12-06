import React, { memo } from "react";

const LogoSpinner = () => (
    <div className="logo-spinner">
        <div className="logo-won">
            <img src="assets/img/icons/won.png" alt="Won" />
        </div>
        <div className="logo-usd">
            <img src="assets/img/icons/usd.png" alt="USD" />
        </div>
    </div>
);

export default memo(LogoSpinner);