import React from 'react';

import Header from '../../components/Header';
import Portfolio from '../../components/Portfolio';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Tracks from '../../components/Tracks';

export default class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Portfolio />
                <Projects />
                <Tracks />
                <Contact />
            </React.Fragment>
        );
    };

};