import React from 'react';
import Link from '../Link';

export default class Projects extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: [
                {
                    name: 'shopify-monitor',
                    description: 'Updates you on the latest drops, restocks, and much more for your favorite brands!',
                    href: 'https://github.com/dzt/shopify-monitor'
                },
                {
                    name: 'easy-proxy',
                    description: 'Create a mass of proxies within a matter of minutes utilizing the DigialOcean API.',
                    href: 'https://github.com/dzt/easy-proxy'
                }
            ]
        };
    };

    generateProject(item) {
        return(
            <Link
                href={item.href}
                name={item.name}
                description={item.description} />
        );
    }

    render() {

        let projects = this.state.projects.map(item => this.generateProject(item));

        return (
            <section className="normal" id="projects">
                <h3>Other projects</h3>
                <ul className="text-list">{projects}</ul>
            </section>
        );
    };
};