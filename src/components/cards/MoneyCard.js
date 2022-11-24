import React, { memo } from "react"

import { formatAmount } from "../../helpers"

const MoneyCard = ({ client, assigned_queries, amount, process_type, exchange_rate, buy_rate, onClick }) => {
    let realAmount = assigned_queries?.length > 0 ? assigned_queries?.map(query => query.amount).reduce((sum, amount) => sum + amount) : amount 
    return (
        <div className="carrier-item money-card" onClick={onClick}>
            <div className="row">
                <div className="col-6 givemoney-item1">
                    <h3>{client.first_name + (client.last_name ? " " + client.last_name : "")}</h3>
                    {/* <div className="carrier-item-footer">
                        <span>{client.phone_number}</span>
                    </div> */}
                </div>
                <div className="col-6 givemoney-item2 text-center">
                    <p>{"$" + formatAmount(realAmount / (process_type === 0 ? exchange_rate : buy_rate), true, true)}</p>
                    {/* <span>11/02/2022 12:20</span> */}
                </div>
            </div>
        </div>
    )
}

export default memo(MoneyCard)