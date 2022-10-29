import React, { memo } from 'react'

const CarrierCard = ({ first_name, last_name, address, avatar, fromClients, toClients, toAdmin }) => {
    return (
        <div className="carrier-item">
            <div className="row carrier-card">
                <div className="col-3">
                    <img src={avatar ?? "/assets/img/icons/profile.png"} alt="Profile" />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-7">
                            <h3>{first_name} {last_name}</h3>
                        </div>
                        <div className="col-5 text-center">
                            <p>{address}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 text-center">
                            <span>{fromClients}</span>
                        </div>
                        <div className="col-4 text-center">
                            <span>{toClients}</span>
                        </div>
                        <div className="col-4 text-center">
                            <span>{toAdmin}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(CarrierCard)