import React, { memo } from "react";

import { common } from "../../constants/bottomButtons";

import Layout from "../../layout";

import MoneyFlowTable from "../../components/tables/admin/MoneyFlowTable";

const MoneyFlowPage = () => {
    common.middleButtons = [
        {
            text: "Pul Yechish",
            eventHandler: () => {
                console.log("Clicked!!!");
            }
        }
    ];
    return (
        <Layout buttons={common} title={{ text: "Mavjud mablag':", amount: "", small: true }}>
            <MoneyFlowTable />
        </Layout>
    );
};

export default memo(MoneyFlowPage);
