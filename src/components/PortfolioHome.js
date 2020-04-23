import React from 'react';
import PortfolioHomeBio from './PortfolioHomeBio';
import PortfolioHomeItemsIntro from './PortfolioHomeItemsIntro';
import PortfolioItems from './PortfolioItems';

export default class Portfolio extends React.Component {
    render() {
        return (
            <main>
                <section className="row py-4">
                    <PortfolioHomeBio />
                </section>
                <section className="row pt-3 pb-5 gallery">
                    <PortfolioHomeItemsIntro />
                    <PortfolioItems />                
                </section>
            </main>
        );
    }
}
