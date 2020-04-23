import React from 'react';
import {connect} from 'react-redux';
import PortfolioItemUrls from './PortfolioItemUrls';
import PortfolioItemTags from './PortfolioItemTags';
import BackButton from './BackButton';
import {getPortfolioItem} from '../selectors/portfolio-items';
import Gist from 'super-react-gist';

const getOverviewParagraphs = overview => overview.trim().split('\n').map((o, idx) => 
    <p key={idx}>
        {o}
    </p>
);

const getLearntListItems = learnt => learnt.map((l, idx) => 
    <li key={idx}>
        {l}
    </li>
);

const getPreviewImgs = imgs => imgs.map((img, idx) => 
    <figure key={idx}>
        <img src={img.src} alt={img.alt} />
        <figcaption>{img.alt}</figcaption>
    </figure>
);

const getPreviewVids = vids => vids.map((v, idx) =>
    <video key={idx} autoPlay muted loop>
        <source src={v.webm} type="video/webm" />
        <source src={v.mp4} type="video/mp4" />
        <p>
            A preview video is not being shown because your browser doesn't support HTML5 video.
        </p>
    </video>
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
    />
);

const getEmbeddedCodeSnippets = urls => urls && urls.map((u, idx) => 
    <Gist key={idx} url={u} />
);

class PortfolioItem extends React.Component {
    render() {
        const item = this.props.item;

        return (
            <article>
                <nav>
                    <BackButton />
                </nav>
                <header>
                    <h2>{item.title}</h2>
                </header>
                {item.tagsByType && Object.keys(item.tagsByType).length && (
                    <section>
                        <ul>
                            <PortfolioItemTags tagsByType={item.tagsByType} />
                        </ul>
                    </section>
                )}
                <section>
                    {getOverviewParagraphs(item.overview)}
                    {getEmbeddedCodeSnippets(item.codeSnippets)}
                </section>
                <section>
                    {item.preview.images && getPreviewImgs(item.preview.images)}
                    {item.preview.videos && getPreviewVids(item.preview.videos)}
                    {item.preview.youtubes && getPreviewYoutube(item.preview.youtubes)}
                </section>
                <section>
                    <p>Developing this code built my character through the learning of:</p>
                    <ul>
                        {getLearntListItems(item.learnt)}
                    </ul>
                </section>
                {item.urlsByType && Object.keys(item.urlsByType).length && (
                    <section>
                        <PortfolioItemUrls urlsByType={item.urlsByType} />
                    </section>
                )}
            </article>
        );
    }
}

const mapStateToProps = (state, props) => ({
    item: getPortfolioItem(state, props.match.params.id)
});

export default connect(mapStateToProps)(PortfolioItem);
