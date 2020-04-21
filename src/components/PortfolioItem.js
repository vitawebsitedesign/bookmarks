import React from 'react';
import Tag from './Tag';
import PortfolioItemUrls from './PortfolioItemUrls';

const getTagEles = tags => tags.map((t, idx) => <Tag key={idx} tag={t} />);
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

const PortfolioItem = props => {
    console.log(props.item);    // dm

    const item = props.item;
    const tagsProduct = getTagEles(item.tags.product);
    const tagsProgramming = getTagEles(item.tags.programming);

    return (
        <article>
            <header>
                <h2>{item.title}</h2>
            </header>
            <section>
                {tagsProduct}
            </section>
            <section>
                {tagsProgramming}
            </section>
            <section>
                {getOverviewParagraphs(item.overview)}
            </section>
            <section>
                <p>Developing this code built my character through the learning of:</p>
                <ul>
                    {getLearntListItems(item.learnt)}
                </ul>
            </section>
            <PortfolioItemUrls title="Source code" urls={item.urls.src} />
            <PortfolioItemUrls title="Library URLs" urls={item.urls.product} />
        </article>
    );
}

export default PortfolioItem;
