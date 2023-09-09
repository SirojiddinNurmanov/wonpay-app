import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfitTable from "../../components/tables/admin/ProfitTable";

import { common } from "../../constants/bottomButtons";
import { formatAmount } from "../../helpers";

import Layout from "../../layout";
import { getProfits } from "../../store/actions";

const ProfitPage = () => {
    const { profits } = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfits());

        // eslint-disable-next-line
    }, []);

    common.middleButtons = [
        {
            text: "Pul Yechish",
            eventHandler: () => {
                // console.log("Clicked!!!");
            }
        }
    ];

    return (
        <Layout buttons={common} title={{
            text: "Umumiy Foyda:",
            amount: "$" + formatAmount(profits.length > 0 ? profits?.map(profit => profit.amount)?.reduce((sum, amount) => sum + amount) : 0)
        }}>
            <ProfitTable />
        </Layout>
    );
};

export default memo(ProfitPage);
