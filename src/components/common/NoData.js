import React, { memo } from "react";

const NoData = ({ row = false }) => (
    <div className="center">
        {!row && (
            <br />
        )}
        <strong><h6>Ma'lumot yo'q</h6></strong>
    </div>
);

export default memo(NoData);