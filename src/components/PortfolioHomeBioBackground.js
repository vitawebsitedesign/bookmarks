import React from 'react';
import HtmlVideo from './HtmlVideo';

const PortfolioHomeBioBackground = () => (
    <>
        <div className="portfolio-home-bio-background__video">
            <HtmlVideo mp4="/bookmarks/build/portfolio-home-bio-bg.mp4" />
        </div>
        <div className="portfolio-home-bio-background__overlay" />
    </>
);

export default PortfolioHomeBioBackground;
