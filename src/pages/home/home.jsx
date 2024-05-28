import React from "react";
import { Outlet } from "react-router-dom";
import "./home.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Sidenav from "../../components/sidenav/sidenav";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
    return (
        <>
            <Header />

            <div className="body">
                <div className="nav">
                    <Sidenav />
                </div>
                <div className="component">
                    <Outlet />
                    <Analytics />
                </div>
            </div>

            <Footer />
        </>
    );
}
