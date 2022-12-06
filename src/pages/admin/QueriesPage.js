import React, { memo } from "react";
import { useSelector } from "react-redux";

import { formatAmount, sumProcessAmount } from "../../helpers";

import Layout from "../../layout";

import { common } from "../../constants/bottomButtons";
import QueryTable from "../../components/tables/admin/QueryTable";

const QueriesPage = () => {
    const { queries } = useSelector(state => state.app);


    common.middleButtons = false;

    return (
        <Layout buttons={common} title={{
            text: "So'rovlar:",
            amount: "W" + (queries ? formatAmount(sumProcessAmount(queries.filter(query => query.assigned_offer === null).filter(query => query.status !== 1))) : "0")
        }}>
            <QueryTable />
        </Layout>
    );
};

export default memo(QueriesPage);
