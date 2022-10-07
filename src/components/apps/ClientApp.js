import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "../profile/Profile";
import ClientPage from "../pages/ClientPage";
import KorUzb from "../misc/KorUzb";
import UzbKor from "../misc/UzbKor";
import Profilenext from "../profile/ProfileNext";
import Profile2 from "../profile/Profile-2";
// import Transactions from "../Transactions";
import Sale from "../misc/Sale";
import Notifications from "../misc/Notifications";
// import TransactionDetail from "../TransactionDetail";

function ClientApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClientPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile-2" element={<Profile2 />} />
                <Route path="/profilenext" element={<Profilenext />} />
                <Route path="/uzb-kor" element={<UzbKor />} />
                <Route path="/kor-uzb" element={<KorUzb />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/message" element={<Notifications />} />
            </Routes>
        </Router>
    );
}

export default ClientApp;