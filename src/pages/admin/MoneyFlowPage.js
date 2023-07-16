import React, { memo, useState } from "react";
import Datepicker, { registerLocale } from "react-datepicker";
import uz from "date-fns/locale/uz";
import "react-datepicker/dist/react-datepicker.css";

import { common } from "../../constants/bottomButtons";

import Layout from "../../layout";

import MoneyFlowTable from "../../components/tables/admin/MoneyFlowTable";

registerLocale("uz", uz);


const MoneyFlowPage = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);

    const includeDates = () => {
        let includedMonths = [
            today.getTime()
        ];
        for (let i = 1673740800000; i < today.getTime(); i += 2592000000) {
            includedMonths.unshift(i);
        }

        return includedMonths;
    };

    common.middleButtons = [
        {
            text: "Pul Yechish",
            eventHandler: () => {
                console.log("Clicked!!!");
            }
        }
    ];
    return (
        <Layout buttons={common}>
            <div className="d-flex align-items-center justify-content-between">
                <span><strong>Oy:</strong></span>
                <Datepicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    locale="uz"
                    dateFormat="MMMM, Y"
                    showMonthYearPicker
                    showFullMonthYearPicker
                    includeDates={includeDates()}
                />
            </div>
            <hr />
            <MoneyFlowTable selectedDate={selectedDate} />
            <div className="spacer" />
        </Layout>
    );
};

export default memo(MoneyFlowPage);
