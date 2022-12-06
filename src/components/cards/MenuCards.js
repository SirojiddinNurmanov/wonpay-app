import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";

import { MenuButtons } from "../../constants/menuButtons";

import MenuItem from "../common/MenuItem";

const MenuCards = ({ app }) => {
    return (
        <div className={`${app}-menu`}>
            {MenuButtons[app].map(button => (
                <MenuItem key={button.id} {...button} />
            ))}
        </div>
    );
};

MenuCards.protoTypes = {
    app: PropTypes.string
};

export default memo(MenuCards);
