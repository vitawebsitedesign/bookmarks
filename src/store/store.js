import {createStore} from 'redux';
import {addPortfolioItems} from '../actions/portfolio-items';
import AgileAES from '../portfolio-items/agile-aes';
import AsxMarketCapitalisation from '../portfolio-items/asx-market-capitalisation';
import BngCampaignXmlGenerator from '../portfolio-items/bng-campaign-xml-generator';
import BulkUrlShortener from '../portfolio-items/bulk-url-shortener';
import FollowTheProcess from '../portfolio-items/follow-the-process';
import MachiKoro from '../portfolio-items/machi-koro';
import Mint from '../portfolio-items/mint';
import ModernBng from '../portfolio-items/modern-bng';
import RealestateVisualiser from '../portfolio-items/realestate-visualiser';
import Sudoku from '../portfolio-items/sudoku';
import SqlKeywordFormatter from '../portfolio-items/sql-keyword-formatter';
import portfolioItems from '../reducers/portfolio-items';

const store = createStore(portfolioItems);
store.dispatch(addPortfolioItems([
    ModernBng,
    Sudoku,
    BngCampaignXmlGenerator,
    AgileAES,
    Mint,
    SqlKeywordFormatter,
    BulkUrlShortener,
    FollowTheProcess,
    MachiKoro,
    RealestateVisualiser,
    AsxMarketCapitalisation
]));

export default store;
