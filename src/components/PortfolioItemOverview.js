import React from 'react';
import {AiOutlineTags} from 'react-icons/ai';
import PropTypes from 'prop-types';
import PortfolioItemTags from './PortfolioItemTags';
import PortfolioItemLessons from './PortfolioItemLessons';

const getOverviewParagraphs = overview => overview.trim().split('\n').map((o, idx) => 
    <p key={idx}>
        {o}
    </p>
);

const PortfolioItemOverview = ({item}) => (
    <section className="col-12">
        <div className="row flex-column mb-4">
            <div className="col-12">
                <header className="mb-3">
                    <div className="ml-1 portfolio-item__project-subheader text-uppercase">project</div>
                    <h2>{item.title}</h2>
                </header>
                {item.tagsByType && Object.keys(item.tagsByType).length && (
                    <div className="d-flex align-items-center">
                        <AiOutlineTags className="d-none d-lg-block mr-1 portfolio-item__tag-icon" />
                        <PortfolioItemTags tagsByType={item.tagsByType} />
                    </div>
                )}
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-lg-5 flex-column">
                <div>
                    {getOverviewParagraphs(item.overview)}
                </div>
            </div>
            <div className="d-none d-lg-block col-12 col-lg-5 offset-1">
                <PortfolioItemLessons lessons={item.learnt} />
            </div>
        </div>
    </section>
);

PortfolioItemOverview.propTypes = {
    item: PropTypes.object.isRequired
};

export default PortfolioItemOverview;
