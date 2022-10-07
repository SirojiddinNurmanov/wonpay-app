import React from 'react'

const Title = ({ text, amount = false, small = false }) => (
    <div className='main-title'>
        <div className="left">{text}</div>
        {amount && (
            <div className={"right" + (small ? "small" : "")}>{amount}</div>
        )}
    </div>
)

export default Title