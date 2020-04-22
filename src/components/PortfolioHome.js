import React from 'react';
import PortfolioHomeNav from './PortfolioHomeNav';
import PortfolioItems from './PortfolioItems';

export default class Portfolio extends React.Component {
    render() {
        return (
            <>
                <PortfolioHomeNav />
                <main>
                    <section>
                        <h2>Bio</h2>
                        <p>
                            Michael is a Sydney Software Engineer with an unhealthy obsession with all things tech.<br />
                            He has an unhealthy obsession with reading about the minimisation of software project risks.
                        </p>
                        <p>
                            As a full-stack dev, it is fantastic to understand in detail how all software components connect together &amp; synergize them to deliver great products.<br />
                            Having exposure to very early releases of AngularJS &amp; ReactJS has resulted in a plotglot front-end framework background.<br />
                            The pragmatic application of strong programming practices are prioritized, since those will always have a direct effect on end products, &amp; persist even as software technologies change over time.
                        </p>
                        <p>
                            Feel free to check out some of his personal projects below, which were undertaken during free time.
                        </p>
                    </section>
                    <section>
                        <h2>Portfolio</h2>
                        <p>
                            This list covers personal programming projects undertaken after university graduation.<br />
                            Prior &amp; during university, many projects were created such as algorithmic trading software, mathematical formula algorithms &amp; GML video games.<br />
                            Feel free to check out the certifications &amp; additional work pieces listed on Michael&rsquo;s resume, which complement the list below.
                        </p>
                        <PortfolioItems />
                    </section>
                </main>
            </>
        );
    }
}
