import React from 'react';
import {FiHeart} from 'react-icons/fi';

const PortfolioHomeBio = () => (
    <div className="col-12 col-lg-5 col-xl-4 offset-lg-6 offset-xl-7 my-lg-5 px-lg-2 portfolio-home-bio">
        <div className="col-12 mobile-name">
            <h1 className="d-block d-lg-none text-center">
                Aww yeah!
            </h1>
            <h1 className="d-none d-lg-flex py-4 align-items-center portfolio-home__header portfolio-home-bio__header">
                <FiHeart className="mr-2 portfolio-home__icon" />
                Aww yeah!
            </h1>
        </div>
        <div className="col-12 portfolio-home-bio__description">
            <p>
                Michael is a Sydney Software Engineer with an unhealthy programmpoing obsession.
            </p>
            <p>
                Schedule overrun is a prominent issue in the software project world. This has driven a strong passion in reading software project risk management books such as <i>“Rapid Development”</i> &amp; <i>“The Pragmatic Programmer”</i>.
            </p>
            <p>
                Maybe a business wants software delivered yesterday. Maybe there's project risks and/or unknown-unknowns. Maybe customers change their requirements after seeing prototypes. Over time, Michael has holistically observed software deliveries across a broad range of outcomes, which has resulted in a humble, strong &amp; risk-oriented work ethic that propels an attitude to be better than yesterday, everyday.
            </p>
        </div>
    </div>
);

export default PortfolioHomeBio;
