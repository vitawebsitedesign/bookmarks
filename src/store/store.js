import {createStore} from 'redux';
import {addPortfolioItems} from '../actions/portfolio-items';
import AgileAES from '../portfolio-items/agile-aes';
import AsxMarketCapitalisation from '../portfolio-items/asx-market-capitalisation';
import BngCampaignXmlGenerator from '../portfolio-items/bng-campaign-xml-generator';
import FollowTheProcess from '../portfolio-items/follow-the-process';
import MachiKoro from '../portfolio-items/machi-koro';
import Mint from '../portfolio-items/mint';
import ModernBng from '../portfolio-items/modern-bng';
import RealestateVisualiser from '../portfolio-items/realestate-visualiser';
import SqlKeywordFormatter from '../portfolio-items/sql-keyword-formatter.js';
import portfolioItems from '../reducers/portfolio-items';

const store = createStore(portfolioItems);
store.dispatch(addPortfolioItems([
    AgileAES,
    AsxMarketCapitalisation,
    BngCampaignXmlGenerator,
    FollowTheProcess,
    MachiKoro,
    Mint,
    ModernBng,
    RealestateVisualiser,
    SqlKeywordFormatter
]));

export default store;
