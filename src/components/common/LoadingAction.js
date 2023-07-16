import React, { memo } from "react";
import LogoJumper from "./LogoJumper";

const LoadingAction = () => (
    <div className="loading-layer">
        <LogoJumper />
    </div>
);

export default memo(LoadingAction);