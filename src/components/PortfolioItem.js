import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Gist from 'super-react-gist';
import PortfolioItemUrls from './PortfolioItemUrls';
import PortfolioItemLessons from './PortfolioItemLessons';
import PortfolioItemOverview from './PortfolioItemOverview';
import BackLink from './BackLink';
import HtmlVideo from './HtmlVideo';
import {getPortfolioItem} from '../selectors/portfolio-items';

const getPreviewImgs = imgs => imgs.map((img, idx) => 
    <figure key={idx} className="col-12 col-lg-6">
        <img src={img.src} alt={img.alt} />
        <figcaption className="p-2">{img.alt}</figcaption>
    </figure>
);

const getPreviewVids = vids => vids.map((v, idx) =>
    <div key={idx} className="col-12 col-lg-6">
        <HtmlVideo mp4s={[v.mp4]} />
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
        className="col-12 col-lg-6"
    />
);

const getEmbeddedCodeSnippets = urls => urls && urls.map((u, idx) => 
    <div key={idx} className="col-12 col-lg-6 gist-container">
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
            <article className="portfolio-item">
                <header className="row align-items-center portfolio-item__header">
                    <nav className="col-12 py-3">
                        <BackLink />
                    </nav>
                </header>
                <section className="row pt-4 pb-1 pb-lg-4">
                    <PortfolioItemOverview item={item} />
                </section>
                <section className="row mb-4 pt-4 pt-lg-5 align-items-start portfolio-item__assets">
                    {item.codeSnippets && item.codeSnippets.length && getEmbeddedCodeSnippets(item.codeSnippets)}
                    {item.preview.images && getPreviewImgs(item.preview.images)}
                    {item.preview.videos && getPreviewVids(item.preview.videos)}
                    {item.preview.youtubes && getPreviewYoutube(item.preview.youtubes)}
                </section>
                <section className="d-block d-lg-none row mb-4">
                    <PortfolioItemLessons lessons={item.learnt} />
                </section>
                <footer className="row text-center portfolio-item__footer">
                    {item.urlsByType && Object.keys(item.urlsByType).length && (
                        <div className="col-12 pb-4 portfolio-item__urls">
                            <PortfolioItemUrls urlsByType={item.urlsByType} />
                        </div>
                    )}
                    <nav className="d-flex justify-content-center col-12 py-3">
                        <BackLink>
                            back to home
                        </BackLink>
                    </nav>
                </footer>
            </article>
        );
    }
}

PortfolioItem.propTypes = {
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
    item: getPortfolioItem(state, props.match.params.id)
});

export default connect(mapStateToProps)(PortfolioItem);
