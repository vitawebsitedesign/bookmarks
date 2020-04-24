import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronCircleRight } from 'react-icons/fa';

const getLink = (story, idx) => {
    const to = `/story/${story.id}`;
    const style = {
        backgroundImage: `url(${story.preview.thumbnail})`
    };
    const caption = story.overview.trim().split('\n')[0];
    
    return (
        <div key={idx} className="col-12 col-lg-4">
            <Link to={to} className="d-flex d-lg-none align-items-center justify-content-between my-2 py-3 btn btn-primary text-left text-uppercase text-decoration-none button-primary">
                {story.title}
                <FaChevronCircleRight className="button-primary__icon" />
            </Link>
            <Link to={to} className="d-none d-lg-flex my-3 flex-column text-decoration-none portfolio-items__tile">
                <div className="w-100 portfolio-items__tile__thumbnail" style={style} />
                <div className="w-100 portfolio-items__tile__mask" />
                <div className="w-100 p-2 portfolio-items__tile__label">
                    <div>{story.title}</div>
                    <div className="portfolio-items__tile__caption">{caption}</div>
                </div>
            </Link>
        </div>
    );
};

const PortfolioItems = props => (
    <div className="d-flex flex-wrap w-100 portfolio-items">
        {props.items.map(getLink)}
    </div>
);

PortfolioItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({ items: state });
export default connect(mapStateToProps)(PortfolioItems);
