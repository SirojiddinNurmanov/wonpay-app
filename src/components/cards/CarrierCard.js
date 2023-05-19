import React, { memo } from "react";
import { formatAmount } from "../../helpers";

const CarrierCard = ({ first_name, last_name, avatar, balance, role }) => {
    return (
        <div className="carrier-item">
            <div className="row carrier-card">
                <div className="col-3">
                    <img src={avatar ?? "/assets/img/icons/profile.png"} alt="Profile" />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col">
                            <h3>{first_name} {last_name}</h3>
                        </div>
                    </div>
                    <div className="row p-0">
                        <div className="col-7"></div>
                        <div className="col-5 text-left">
                            <span>{role === "carrier" ? "$" + formatAmount(balance, true) : (balance === 0 ? "$" : balance < 0 ? "-$" : "+$") + (balance ? formatAmount(balance < 0 ? balance * -1 : balance, true, true) : 0)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(CarrierCard);