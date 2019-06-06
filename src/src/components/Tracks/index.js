import React from 'react';
import axios from 'axios'

export default class Tracks extends React.Component {

    constructor() {
        super();
        this.state = {
            headingText: 'Music has been a huge part of my life and I\'ve always recieved questions regarding the latest artists I\'ve been listening too so here you go! All the data here is dynamic and additional data can be found on my Last.fm account.',
            apiKey: 'b3e2fcf6728dc46aad126937b9f802b4',
            username: 'pxtvr',
            tracks: [],
            error: null
        }
    }

    async getTopTracks () {
        try {
            const response = await axios.get('http://ws.audioscrobbler.com/2.0/', {
                params: {
                    method: 'user.getRecentTracks',
                    user: this.state.username,
                    api_key: this.state.apiKey,
                    format: 'json',
                    period: '7day',
                    limit: '5'
                }
            })
            return response;
        } catch (e) {
            return null;
        }
    }

    componentWillMount () {
        this.getTopTracks()
            .then((res) => {
                this.setState({
                    tracks: res.data.recenttracks.track
                });
            })
    }

    generateTrack(item) {
        return(
            <div>
                <a href={item.url}>
                    <div class="pop">
                        <img src={item.image[3]['#text']}/>
                    </div>
                </a>
            </div>
        )
    }

    render() {

        if (this.state.error) return (<div>An error occurred while trying to fetch data from Last.fm</div>)

        return(
            <section className="normal" id="apps">
                <h3>Tracks</h3>
                <h4>{this.state.headingText}</h4>
                { this.state.tracks.length > 0 &&
                    this.state.tracks.map(item => this.generateTrack(item))
                }
            </section>
        );

    }

};