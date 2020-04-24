import React from 'react';
import PropTypes from 'prop-types';

const getLearntListItems = lessons => lessons.map((l, idx) => 
    <li key={idx}>
        {l}
    </li>
);

const PortfolioItemLessons = props => (
    <div className="col-12">
        <p>Developing this code built my character through the learning of:</p>
        <ul>
            {getLearntListItems(props.lessons)}
        </ul>
    </div>
);

PortfolioItemLessons.propTypes = {
    lessons: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PortfolioItemLessons;
