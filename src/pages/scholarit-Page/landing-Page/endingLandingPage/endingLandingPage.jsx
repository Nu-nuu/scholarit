import data from '../../../../data/footerSection.json';
import "./endingLandingPage.css"
import { useNavigate } from "react-router-dom";
const endingLandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className='ending'>
            <div className="header-footer">
                <h3>{data.title}</h3>
                <h5>{data.description}</h5>
            </div>

            <form>
                <div className="form-group">
                    {/* <input type="email" placeholder="Name@company.com" /> */}
                    <button
                        type="submit"
                        onClick={() => navigate("/myTest")}
                    >
                        Sign Up Now
                    </button>
                </div>
            </form>
        </div>
    )
};

export default endingLandingPage;