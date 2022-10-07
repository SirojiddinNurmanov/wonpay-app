import React, { useState } from "react";

import Layout from "../layouts/Layout";

import MenuCards from "../menu/MenuCards";

const AdminPage = () => {
    const [avatar] = useState("assets/img/icons/profile.png")
    const [toAmount] = useState("-$5 800")
    const [balance] = useState("$23 600")
    const [fromAmount] = useState("+$3 200")

    return (
        <Layout headerData={{ avatar, toAmount, balance, fromAmount }}>
            <div className="admin-page">
                <MenuCards app="admin" />
            </div>
        </Layout>
    );
};

export default AdminPage;
