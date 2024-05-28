import "./footer.css";
import FB from "../../assets/scholaritPics/fb.png";
import IG from "../../assets/scholaritPics/ig.png";
import YT from "../../assets/scholaritPics/yt.png";
import TW from "../../assets/scholaritPics/tw.png";
import LN from "../../assets/scholaritPics/ln.png";
import Logo from "../../assets/scholaritPics/logo2.png";
import { Grid } from "@mui/material";

export default function Footer() {
    return (
        <Grid container spacing={2} className="footer">
            <Grid item xs={4}>
                <img src={Logo} style={{ width: "80%" }} />
            </Grid>
            <Grid item xs={4} className="flex-start">
                <p className="title">LINKS</p>
                <div className="flex-center">
                    <p className="text">About Us</p>
                    <p className="text">Privacy Policy</p>
                </div>
                <p className="text">Terms of Use</p>
                <p className="text">Contact Us : scholarit@fpt.com</p>
            </Grid>
            <Grid item xs={4} className="flex-start">
                <p className="title">Follow Us On </p>
                <div className="flex-center">
                    <a href="#">
                        <img src={FB} />
                    </a>
                    <a href="#">
                        <img src={IG} />
                    </a>
                    <a href="#">
                        <img src={YT} />
                    </a>
                    <a href="#">
                        <img src={TW} />
                    </a>
                    <a href="#">
                        <img src={LN} />
                    </a>
                </div>
            </Grid>
        </Grid>
    );
}
