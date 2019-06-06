import React from 'react';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            emailAddress: 'me@petersoboyejo.com',
            headingText: 'I\'m Peter Soboyejo. I’m a developer, I\'ll be attending Worcester Polytechnic Institute in the Fall of 2019.'
        };
    };

    render() {
        return (
            <section id="hello" className="wide">
                <div id="bitmojiImage" style={{ 'backgroundImage': 'url(https://i.imgur.com/hxzbAzY.png)' }} />
                <div id="intro">
                    <h1>Hi there!</h1>
                    <p>{this.state.headingText}</p>
                    <p>Take a look around, or <a href={'mailto:' + this.state.emailAddress}>say hello!</a></p>
                </div>
            </section>
        );
    };
    
};