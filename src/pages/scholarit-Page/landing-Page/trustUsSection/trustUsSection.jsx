// import Image from 'next/image';
import data from '../../../../data/trustUsSection.json';
import "./trustUsSection.css"

const TrustUs = () => {
    return (
        <section className="trustus">
            <div className="header-trustus">
                <h2>{data.title}</h2>
            </div>

            <div className="container-trustus">
                <div className="content-trustus">

                    <h3>{data.number}</h3>

                </div>
            </div>

        </section>
    )
};

export default TrustUs;