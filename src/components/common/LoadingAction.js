import React, { memo } from "react";
import LogoSpinner from "./LogoSpinner";
import LogoJumper from "./LogoJumper";

const LoadingAction = () => (
    <div className="loading-layer">
        {/*<LogoSpinner />*/}
        <LogoJumper />
    </div>
);

export default memo(LoadingAction);