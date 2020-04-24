import React from 'react';

const PortfolioHomeBio = () => (
    <div className="col-12 col-lg-5 col-xl-3 offset-lg-6 offset-xl-7 px-lg-2 py-lg-4 portfolio-home-bio">
        <h1 className="col-12 portfolio-home-bio__header mobile-name">
            <span className="d-block d-lg-none text-center">
                Aww yeah!
            </span>
            <span className="d-none d-lg-block">
                Aww yeah!
            </span>
        </h1>
        <div className="col-12 portfolio-home-bio__description">
            <p>
                Michael is a Sydney Software Engineer with an unhealthy programming obsession.
            </p>
            <p>
                Achieving perfect code in unrealistic time frames is a prominent issue in the software world. This has driven a strong passion in reading software project risk management books such as “Rapid Development” & “The Pragmatic Programmer”.
            </p>
            <p>
                Maybe a business wants software delivered yesterday. Maybe there's project risks and/or unknown-unknowns. Maybe customers change their requirements after seeing prototypes. Over time, Michael has holistically observed numerous software deliveries with different outcomes, which has resulted in a humble, strong work ethic that propels an attitude to be better than yesterday, everyday.
            </p>
        </div>
    </div>
);

export default PortfolioHomeBio;
