import React from "react";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "../components/sidebar/page";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
    return (
        // <div className="flex">
            <Sidebar />
            // <div className="flex-1">{children}</div>
        // </div>
    );
}
