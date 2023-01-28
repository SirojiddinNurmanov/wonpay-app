import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatAmount } from "../../../helpers";

import OfferRateModal from "../../modals/admin/OfferRateModal";
import TableLayout from "../TableLayout";
import NoData from "../../common/NoData";

const OfferTable = () => {
    const [offerRateModal, showOfferRateModal] = useState(false);
    const [modalInfo, setModalInfo] = useState();
    const { offers } = useSelector(state => state.app);

    const openRateModal = (process) => () => {
        if (process.assigned_queries.length === 0) {
            if (process.rate_status !== 1) {
                showOfferRateModal(true);
                setModalInfo(process);
            }
        }
    };

    const headers = [
        "Ism",
        "Summa",
        // "Turi",
        "Sotish",
        "Olish",
        // "Taqsim"
    ];

    let pendingOffers = offers?.length > 0 ? offers.filter(offer => offer.status !== 1) : [];

    return (
        <TableLayout headers={headers}>
            <OfferRateModal show={offerRateModal} onHide={() => showOfferRateModal(false)} {...modalInfo} />
            {pendingOffers?.length > 0 ? (
                <>
                    {pendingOffers?.map((process) => (
                        <tr key={process.id}>
                            <td>
                                <Link to={"/offers/" + process.id}>
                                    {(process.client.first_name ? process.client.first_name : "") + " " + (process.client.last_name ? process.client.last_name : "")}
                                </Link>
                            </td>
                            <td>{formatAmount(process.amount)}</td>
                            {/*<td>{process.payment_type === 1 ? "Karta" : "Naqd"}</td>*/}
                            <td onClick={openRateModal(process)}>{process.buy_rate > 0 ? process.buy_rate : process.rate_status === 1 ? "Kutilmoqda" : "Kiritish"}</td>
                            <td onClick={openRateModal(process)}>{process.sell_rate > 0 ? process.sell_rate : "Kiritish"}</td>
                            {/*<td>*/}
                            {/*    <Link to={"/offers/" + process.id}>*/}
                            {/*        {process.status === 1 ? (*/}
                            {/*            "Tugallangan"*/}
                            {/*        ) : (*/}
                            {/*            "Taqsimlash"*/}
                            {/*        )}*/}
                            {/*    </Link>*/}
                            {/*</td>*/}
                        </tr>
                    ))}
                </>
            ) : (
                <tr>
                    <td colSpan={6}>
                        <NoData row={true} />
                    </td>
                </tr>
            )}
        </TableLayout>
    );
};

export default memo(OfferTable);