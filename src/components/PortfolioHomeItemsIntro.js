import React from 'react';
import {BsGem} from 'react-icons/bs';

const PortfolioHomeItemsIntro = () => (
    <>
        <h3 className="d-flex align-items-center col-12 my-3 portfolio-home__header">
            <BsGem className="portfolio-home__icon portfolio-home-items-intro__header__icon mr-2" />
            Projects
        </h3>
        <div className="col-12 col-lg-5 col-xl-4 portfolio-home-items-intro__description">
            <p>
                The gallery below highlights Mike&rsquo;s personal projects undertaken after university graduation. Click one to view its details.
            </p>
            <p>
                Prior &amp; during university, many more projects were done such as algorithmic trading software, mathematical formula algorithms &amp; GML products.
            </p>
            <p>
                If you have Mike&rsquo;s resume, feel free to also check out his certifications &amp; additional work pieces, which complement the gallery below.
            </p>
        </div>
    </>
);

export default PortfolioHomeItemsIntro;
