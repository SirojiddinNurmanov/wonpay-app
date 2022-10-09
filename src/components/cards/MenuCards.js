import React from "react"
import PropTypes from "prop-types"

import { MenuButtons } from "../../constants/menuButtons"

import MenuItem from "../common/MenuItem"

const MenuCards = ({ app }) => {
        return (
            <div className={`${app}-menu`}>
                {MenuButtons[app].map((button, index) => (
                    <MenuItem key={index} {...button}/>
                ))}
            </div>
        )
}

MenuCards.protoTypes = {
    app: PropTypes.string
}

export default MenuCards
