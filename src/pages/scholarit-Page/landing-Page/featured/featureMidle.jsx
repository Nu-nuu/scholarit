// import CardService from './CardService';
import data from "../../../../data/servicesSection.json";
import "./featureMidle.css"
import CardService from "../featured/featureMidleCard"

const featureMidle = () => {
    return (
        <section className="services" >
            <div className="header-services">
                <h2>{data.title}</h2>
            </div>
            <div className="container-services">
                <div className="grid-services">
                    {data.blocks.map(service =>
                        <CardService
                            id={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default featureMidle;