import React from 'react';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: [
                {
                    image: 'kleidi',
                    name: 'Kleidi',
                    description: 'Tool designed to simplify reccuring subscriptions in Discord groups for adminstrators and users.',
                    href: 'javascript:void(0)'
                },
                {
                    image: 'sscout',
                    name: 'sScout',
                    description: 'Provides multi-faceted checkout tools for some of the most coveted and sought after pieces in fashion.',
                    href: 'javascript:void(0)'
                }
            ]
        };
    };

    generateProject(item) {
        return (
            <div>
                <a href={item.href}>
                    <div className="pop">
                        <img src={require(`../../assets/img/${item.image}.png`)} />
                    </div>
                </a>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
        );
    }

    render() {

        let projects = this.state.projects.map(item => this.generateProject(item));

        return (
            <section id="portfolio" className="normal">
                <div className="grid">
                    {projects}
                </div>
            </section>
        );
    };
    
};