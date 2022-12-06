import React, { memo } from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingButton = () => (
    <div className="loading-button">
        <Spinner animation="border" />
    </div>
);

export default memo(LoadingButton);