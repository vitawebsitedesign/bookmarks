import React from 'react';
import PropTypes from 'prop-types';

const HtmlVideo = props => (
    <video autoPlay muted loop>
        {props.webm && <source src={props.webm} type="video/webm" />}
        <source src={props.mp4} type="video/mp4" />
        <p>
            A video is not being shown because your browser doesn't support HTML5 video.
        </p>
    </video>
);

HtmlVideo.propTypes = {
    webm: PropTypes.string,
    mp4: PropTypes.string.isRequired
};

export default HtmlVideo;
