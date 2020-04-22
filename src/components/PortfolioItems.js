import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const getLink = (story, idx) => {
    const to = `/story/${story.id}`;
    return (
        <li key={idx}>
            <Link to={to}>{story.title}</Link>
        </li>
    );
};

const PortfolioItems = props => (
    <div>
        <ul>
            {props.items.map(getLink)}
        </ul>
    </div>
);

const mapStateToProps = state => ({ items: state });
export default connect(mapStateToProps)(PortfolioItems);
