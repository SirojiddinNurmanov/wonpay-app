import React, { memo } from "react";
import WON from "./won.png"
import USD from "./usd.png"

const LogoJumper = () => (
    <div className="logo-jumper">
        <div className="logo1">
            <img src={WON} alt="Won" width="40px"/>
        </div>
        <div className="logo2">
            <img src={USD} alt="USD" width="40px"/>
        </div>
        <div className="logo3">
            <img src={WON} alt="Won" width="40px"/>
        </div>
        <div className="logo4">
            <img src={USD} alt="USD" width="40px"/>
        </div>
        <div className="logo5">
            <img src={WON} alt="Won" width="40px"/>
        </div>
    </div>
);

export default memo(LogoJumper);