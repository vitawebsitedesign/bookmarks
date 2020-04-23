import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PortfolioItemUrls from './PortfolioItemUrls';
import PortfolioItemTags from './PortfolioItemTags';
import BackLink from './BackLink';
import {getPortfolioItem} from '../selectors/portfolio-items';
import Gist from 'super-react-gist';

const getOverviewParagraphs = overview => overview.trim().split('\n').map((o, idx) => 
    <p key={idx} className="col-12">
        {o}
    </p>
);

const getLearntListItems = learnt => learnt.map((l, idx) => 
    <li key={idx}>
        {l}
    </li>
);

const getPreviewImgs = imgs => imgs.map((img, idx) => 
    <figure key={idx} className="col-12">
        <img src={img.src} alt={img.alt} />
        <figcaption className="px-1">{img.alt}</figcaption>
    </figure>
);

const getPreviewVids = vids => vids.map((v, idx) =>
    <div key={idx} className="col-12">
        <video autoPlay muted loop>
            <source src={v.webm} type="video/webm" />
            <source src={v.mp4} type="video/mp4" />
            <p>
                A preview video is not being shown because your browser doesn't support HTML5 video.
            </p>
        </video>
    </div>
);

const getPreviewYoutube = youtubes => youtubes.map((url, idx) =>
    <iframe
        key={idx}
        src={url}
        title={`Embedded youtube video for ${url}`}
        width="560"
        height="315"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="col-12"
    />
);

const getEmbeddedCodeSnippets = urls => urls && urls.map((u, idx) => 
    <div key={idx} className="my-2 gist-container">
        <Gist url={u} />
    </div>
);

class PortfolioItem extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const item = this.props.item;

        return (
            <article>
                <header className="row portfolio-item__header">
                    <nav className="col-12 py-3">
                        <BackLink />
                    </nav>
                </header>
                <header className="row pt-4">
                    <h2 className="col-12">{item.title}</h2>
                </header>
                {item.tagsByType && Object.keys(item.tagsByType).length && (
                    <section className="row mb-4">
                        <div className="col-12">
                            <PortfolioItemTags tagsByType={item.tagsByType} />
                        </div>
                    </section>
                )}
                <section className="row mb-2">
                    {getOverviewParagraphs(item.overview)}
                </section>
                {item.codeSnippets && item.codeSnippets.length && (
                    <section className="row mb-2">
                        {getEmbeddedCodeSnippets(item.codeSnippets)}
                    </section>
                )}
                {item.preview.images && (
                    <section className="row mb-2">
                        {getPreviewImgs(item.preview.images)}
                    </section>
                )}
                {item.preview.videos && (
                    <section className="row mb-2">
                        {getPreviewVids(item.preview.videos)}
                    </section>
                )}
                {item.preview.youtubes && (
                    <section className="row mb-2">
                        {getPreviewYoutube(item.preview.youtubes)}
                    </section>
                )}
                <section className="row mb-4">
                    <p className="col-12">Developing this code built my character through the learning of:</p>
                    <ul>
                        {getLearntListItems(item.learnt)}
                    </ul>
                </section>
                <footer className="row text-center portfolio-item__footer">
                    <nav className="col-12 mb-2 py-3">
                        <BackLink>
                            back to home
                        </BackLink>
                    </nav>
                    {item.urlsByType && Object.keys(item.urlsByType).length && (
                        <div className="col-12 py-4 portfolio-item__urls">
                            <PortfolioItemUrls urlsByType={item.urlsByType} />
                        </div>
                    )}
                </footer>
            </article>
        );
    }
}

PortfolioItem.propTypes = {
    item: PropTypes.object
};

const mapStateToProps = (state, props) => ({
    item: getPortfolioItem(state, props.match.params.id)
});

export default connect(mapStateToProps)(PortfolioItem);
