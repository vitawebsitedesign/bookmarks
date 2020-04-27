import React from 'react';
import PortfolioHomeBioBackground from './PortfolioHomeBioBackground';
import PortfolioHomeBio from './PortfolioHomeBio';
import PortfolioHomeItemsIntro from './PortfolioHomeItemsIntro';
import PortfolioItems from './PortfolioItems';

export default class Portfolio extends React.Component {
    render() {
        return (
            <main>
                <section className="row portfolio-home__bio-container">
                    <div className="d-none d-lg-block">
                        <PortfolioHomeBioBackground />
                    </div>
                    <PortfolioHomeBio />
                </section>
                <section className="row pt-3 pb-5 portfolio-home-content-background portfolio-home__gallery">
                    <PortfolioHomeItemsIntro />
                    <PortfolioItems />                
                </section>
            </main>
        );
    }
}
