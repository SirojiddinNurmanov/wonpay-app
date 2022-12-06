import React, { memo } from "react";
import Spinner from "react-bootstrap/Spinner";

const Preloader = () => (
    <div className="loader">
        <Spinner animation="grow" />
    </div>
);

export default memo(Preloader);