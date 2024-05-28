import React from "react";
import TasktoolLandingPage from "../taskTool/taskTool";
import FeatureLandingPage from "../featured/featureMidle";
import ManagementLandingPage from "../management/management";
import TrustUsSection from "../trustUsSection/trustUsSection";
import EndingLandingPage from "../endingLandingPage/endingLandingPage";
import "./finishedLandingPage.css";
import Logo from "../../../../assets/scholaritPics/logo2.png";
import Footer from "../../../../components/footer/footer";

function finishedLandingPage() {
    return (
        <div>
            <div className="AllofItBackground">
                <div className="Lp_header">
                    <img src={Logo} style={{ width: "30%" }} />
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#course">Course</a>
                    <a href="#contactUs">Contact Us</a>
                </div>
                <div id="home">
                    <TasktoolLandingPage />
                </div>
                <div id="about">
                    <FeatureLandingPage />
                </div>
                <div id="course">
                    <ManagementLandingPage />
                </div>
                <div id="contactUs">
                    <TrustUsSection />
                    <EndingLandingPage />
                </div>
            </div>
                <Footer />
        </div>
    );
}

export default finishedLandingPage;
