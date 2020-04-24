import React from 'react';
import {BsGem} from 'react-icons/bs';

const PortfolioHomeItemsIntro = () => (
    <>
        <h3 className="d-flex align-items-center col-12 my-3 text-uppercase portfolio-home__gallery__header">
            <BsGem className="portfolio-home-items-intro__header__icon mr-2" />
            Portfolio
        </h3>
        <p className="col-12">
            This list covers personal programming projects undertaken after university graduation.
        </p>
        <p className="col-12">
            Prior &amp; during university, many projects were created such as algorithmic trading software, mathematical formula algorithms &amp; GML video games.
        </p>
        <p className="col-12">
            Feel free to check out the certifications &amp; additional work pieces listed on Michael&rsquo;s resume, which complement the list below.
        </p>
    </>
);

export default PortfolioHomeItemsIntro;
