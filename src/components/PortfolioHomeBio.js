import React from 'react';

const PortfolioHomeBio = () => (
    <>
        <h1 className="col-12 mobile-name">
            <span className="d-block d-sm-none text-center">
                <span className="mobile-name__given">Michael</span>
                <br />
                <span className="mobile-name__surname">Nguyen</span>
            </span>
            <span className="d-none d-sm-block">
                Michael Nguyen
            </span>
        </h1>
        <div className="col-12">
            <p>
                Mike is a Sydney Software Engineer with an unhealthy obsession with all things tech.
            </p>
            <p>
            He has an unhealthy obsession with reading about the minimisation of software project risks.
            </p>
            <p>
                As a full-stack dev, it is fantastic to understand in detail how all software components connect together &amp; synergize them to deliver great products.
            </p>
            <p>
                Having exposure to very early releases of AngularJS &amp; ReactJS has resulted in a plotglot front-end framework background.
            </p>
            <p>
                The pragmatic application of strong programming practices are prioritized, since those will always have a direct effect on end products, &amp; persist even as software technologies change over time.
            </p>
            <p>
                Feel free to check out some of his personal projects below, which were undertaken during free time.
            </p>
        </div>
    </>
);

export default PortfolioHomeBio;
