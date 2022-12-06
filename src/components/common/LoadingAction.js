import React, { memo } from "react";
import LogoSpinner from "./LogoSpinner";

const LoadingAction = () => (
    <div className="loading-layer">
        <LogoSpinner />
    </div>
);

export default memo(LoadingAction);