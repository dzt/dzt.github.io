import React from 'react';

export default class Projects extends React.Component {


    constructor() {
        super();
        this.state = {
            emailAddress: 'me@petersoboyejo.com',
            contacts: [
                {
                    icon: 'fa-github',
                    href: 'https://github.com/dzt'
                },
                {
                    icon: 'fa-youtube',
                    href: 'https://www.last.fm/user/pxtvr'
                },
                {
                    icon: 'fa-linkedin',
                    href: 'https://www.linkedin.com/in/peter-soboyejo-7573a898/'
                },
                {
                    icon: 'fa-lastfm',
                    href: 'https://www.last.fm/user/pxtvr'
                },
                {
                    icon: 'fa-twitch',
                    href: 'https://twitch.tv/pxtvr'
                },
            ]
        }
    }

    generateIcon(item) {
        return(
            <a href={item.href}><span className={`fa ${item.icon}`}></span></a>
        );
    }

    render() {
        let contacts = this.state.contacts.map(item => this.generateIcon(item));
        return(
            <section className="normal" id="contact">
                <h3>Contact</h3>
                <p>Send me emails! <a href={`mailto:${this.state.emailAddress}`}>{this.state.emailAddress}</a>.</p>
                <div>{contacts}</div>
            </section>
        );
    }


};