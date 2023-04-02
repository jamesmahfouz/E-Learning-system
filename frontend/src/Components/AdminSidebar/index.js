import React, { useState, useEffect } from "react";

import logo from "../../images/logo.png";
import "../AdminSidebar/index.css";
import AddClasses from "../AddClasses"
import ListStudents from "../ListStudents"
import UploadFiles from "../UploadFiles"

const AdminSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selectedoption, setSelectedOption] = useState(<AddClasses />);

    const handleToggleSidebar = () => {
        if (screenWidth < 768) {
            setIsSidebarOpen(!isSidebarOpen);
        } else {
            setIsSidebarOpen(true);
        }
    };

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleOptions = (option) => {
        if (option === 1) {
            setSelectedOption(<AddClasses />)
        } else if (option === 2) {
            setSelectedOption(<ListStudents />)
        } else if (option === 3) {
            setSelectedOption(<UploadFiles />)
        }
    }


    return (
        <div className="admin-sidebar">
            <div className="sidebar" style={{ width: (isSidebarOpen || screenWidth >= 768) ? "250px" : "0" }}>
                <a className="close-button" onClick={handleToggleSidebar}> &times; </a>
                <img src={logo} alt="logo" className="logo"></img>
                <ul className="admin_option">
                    <li onClick={() => { handleOptions(1) }}>Add class</li>

                    <li onClick={() => { handleOptions(2) }}>List ListStudents</li>

                    <li onClick={() => { handleOptions(3) }}>Upload Files</li>

                    <li onClick={() => { handleOptions(4) }}>see Withdrawal</li>
                </ul>
            </div>
            <div className="main-content">
                <a className="open-button" onClick={handleToggleSidebar}>&#9776;</a>
                <div>{selectedoption} </div>
            </div>
        </div>
    );
}

export default AdminSidebar;