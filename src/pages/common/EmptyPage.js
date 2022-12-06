import React, { memo } from "react";

import { common } from "../../constants/bottomButtons";

import Layout from "../../layout";

import Logo from "../../components/common/Logo";

const EmptyPage = () => {
    common.middleButtons = false;
    return (
        <Layout buttons={common} empty={true}>
            <div className="empty-block">
                <Logo />
            </div>
        </Layout>
    );
};

export default memo(EmptyPage);
