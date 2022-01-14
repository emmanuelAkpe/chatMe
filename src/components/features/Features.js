import React, {useEffect} from 'react';
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import Feature from './Feature';
import { FeatureList } from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <section id="features">
            <div className="container features">
                <div className="u-title title" data-aos="fade-down">
                    <BsFillBookmarkStarFill color="orangered" size={30} />
                    <h2>Core Features</h2>
                    <p className="u-text-small ">
                       With ChatMe you'll get fast, simple, secure messaging an
                        calling for free*, available on phones all over the world.
                       Data charges may apply. Contact your provider for details.
                    </p>
                </div>
                <div className="features-content">
                    <div className="features-left" data-aos="fade-right">
                        <img src="./images/phone-features.png" alt=""  />
                    </div>
                    <div className="features-right" data-aos="fade-left">
                        {
                            FeatureList.map((feature)=>(
                                <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
