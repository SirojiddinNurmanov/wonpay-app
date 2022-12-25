import React, { memo } from "react";

import { common } from "../../constants/bottomButtons";

import Layout from "../../layout";

const ProfilePage = () => {
    common.middleButtons = false;

    return (<Layout buttons={common}>
        </Layout>);
};

export default memo(ProfilePage);