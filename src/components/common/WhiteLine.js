import React from "react"

const WhiteLine = ({ modal = false }) => (
    <div className={"white-line" + (modal ? " modal-line" : "")}></div>
)

export default WhiteLine