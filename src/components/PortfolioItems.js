import React from 'react';
import PortfolioItem from './PortfolioItem';
import AgileAES from '../portfolio-items/agile-aes.js';

export default class PortfolioItems extends React.Component {
    state = {
        portfolioItemsData: [AgileAES]
    };

    render() {
        return (
            <div>
                {this.state.portfolioItemsData.map((i, idx) => <PortfolioItem key={idx} item={i} />)}
            </div>
        );
    }
}
