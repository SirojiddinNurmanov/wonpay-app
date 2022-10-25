import React, { memo } from "react"

const WhiteLine = ({ color = "white", modal = false }) => (
    <div className={"white-line" + (color ? " " + color + " " : "") + (modal ? " modal-line" : "")}></div>
)

export default memo(WhiteLine)