import React, { memo } from "react"

// import { formatAmount } from "../../helpers"

const MoneyCard = (props) => {
    return (
        <div className="carrier-item">
            <div className="row">
                <div className="col-6 givemoney-item1">
                    <h3>Akmal Payziyev</h3>
                    <div className="carrier-item-footer">
                        <span>+99 899 400 12 00</span>
                    </div>
                </div>
                <div className="col-6 givemoney-item2 text-center">
                    <p>+2265$</p>
                    <span>11/02/2022 12:20</span>
                </div>
            </div>
        </div>
    )
}

export default memo(MoneyCard)