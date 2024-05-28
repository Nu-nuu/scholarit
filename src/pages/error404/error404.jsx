import "./error404.css";
import { Link } from "react-router-dom";

function Error404() {
    return (
        <div className="error404">
            <h1>Opps! Something is wrong</h1>
            <section className="error__container">
                <span className="four"><span className="screen__reader__text">4</span></span>
                <span className="zero"><span className="screen__reader__text">0</span></span>
                <span className="four"><span className="screen__reader__text">4</span></span>
            </section>
            <div className="link__container">
                <Link to={-1} className="more__link">Go back</Link>
                {/* <Link to="/" className="more__link">Go to home page</Link> */}
            </div>
        </div>
    )
}
export default Error404;