import React, { memo } from "react";

const LogoJumper = () => (
    <div className="logo-jumper">
        <div className="logo1">
            <img src="assets/img/icons/won.png" alt="Won" width="20px"/>
        </div>
        <div className="logo2">
            <img src="assets/img/icons/usd.png" alt="USD" width="20px"/>
        </div>
        <div className="logo3">
            <img src="assets/img/icons/won.png" alt="Won" width="20px"/>
        </div>
        <div className="logo4">
            <img src="assets/img/icons/usd.png" alt="USD" width="20px"/>
        </div>
        <div className="logo5">
            <img src="assets/img/icons/won.png" alt="Won" width="20px"/>
        </div>
    </div>
);

export default memo(LogoJumper);