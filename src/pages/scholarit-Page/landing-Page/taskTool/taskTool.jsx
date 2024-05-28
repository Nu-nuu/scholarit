import "./taskTool.css";
import tasktool from "../../../../assets/scholaritPics/tasktool.png";
import { useNavigate } from "react-router-dom";

const taskTool = () => {
    const navigate = useNavigate();
    return (
        <section className="hero-section">
            <div className="container-hero">
                <div className="content-hero">

                    <div className="right-side">
                        <img
                            src={tasktool}
                            alt="A beautiful image"
                        />
                    </div>
                    <div className="left-side">
                        <h1>SCHOLARIT</h1>
                        <h2>Welcome to our best math learning platform</h2>
                        <br />
                        <p>
                            Welcome to our website!
                            We are excited to have you here.
                            We are committed to providing you with the best possible experience, and we hope that you will find our website to be informative, helpful, and engaging.</p>
                        <form>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    onClick={() => navigate("/myTest")}
                                >
                                    Sign Up Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default taskTool;
