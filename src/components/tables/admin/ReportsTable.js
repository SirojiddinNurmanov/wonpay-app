import React, { Fragment, memo, useState } from "react"
import { useSelector } from "react-redux"

import { changeNumberSign, formatAmount, getColor, groupByDate } from '../../../helpers'
import QueryProofModal from "../../modals/admin/QueryProofModal"

import TableLayout from "../TableLayout"

const ReportsTable = () => {
    const [queryInfoModal, showQueryProofModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()
    const { queries } = useSelector(state => state.app)
    const groupedQueries = groupByDate(queries)

    const openInfoModal = (process) => (e) => {
        if (process.status === 1) {
            showQueryProofModal(true)
            setModalInfo(process)
        }
    }

    const headers = [
        "Ism",
        "Summa",
        "Info",
        "Chek",
        "Foyda",
        "Holati"
    ]

    return (
        <TableLayout headers={headers}>
            <QueryProofModal show={queryInfoModal} onHide={() => showQueryProofModal(false)} {...modalInfo} />
            {groupedQueries && Object.entries(groupedQueries).map(queryGroup => (
                <Fragment key={queryGroup[0]}>
                    <tr>
                        <td colSpan="6" className="notification-date text-center">{queryGroup[0]}</td>
                    </tr>
                    {queryGroup[1].map(query => (
                        <tr key={query.id}>
                            <td>{query.client.first_name}</td>
                            <td>{"￦" + formatAmount(query.amount)}</td>
                            <td>{query.process_type === 1 ? "Kor>>Uzb" : "Uzb>>Kor"}</td>
                            <td onClick={openInfoModal(query)} className={"underlined" + (query.status !== 1 ? " red" : "")}>{query.status === 1 ? "Ko'rish" : "Kutilmoqda"}</td>
                            <td className={"text-bold " + getColor(query)}>
                                {
                                    query.assigned_offer ?  changeNumberSign(query) : ""
                                }
                            </td>
                            <td>
                                {
                                    query.status === 1 ? "Tasdiqlandi" : "----"
                                }
                            </td>
                        </tr>
                    ))}
                </Fragment>
            ))}
        </TableLayout>
    )
}

export default memo(ReportsTable)