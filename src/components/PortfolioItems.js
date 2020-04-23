import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const getLink = (story, idx) => {
    const to = `/story/${story.id}`;
    return (
        <Link key={idx} to={to} className="my-2 py-3 btn btn-primary text-left text-uppercase text-decoration-none portfolio-items__item">
            {story.title}
        </Link>
    );
};

const PortfolioItems = props => (
    <div className="col-12 d-flex flex-column portfolio-items">
        {props.items.map(getLink)}
    </div>
);

PortfolioItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({ items: state });
export default connect(mapStateToProps)(PortfolioItems);
