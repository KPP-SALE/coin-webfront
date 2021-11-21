import React from 'react';
import SockJsClient from 'react-stomp';

export default class StompTest extends React.Component {
    constructor(props) {
        super(props);
    }
    message = {from: "react client", text: "hello"};

    sendMessage = (msg) => {
        console.log('sendmessage work');
        // this.clientRef.sendMessage('/app/symbol', msg);
        this.clientRef.sendMessage('/app/symbol', JSON.stringify(this.message));
    }

    render() {
        return (
            <div>
                <SockJsClient url='http://localhost:4000/kppcoin' topics={['/topic/chart']}
                    onMessage={(msg) => { console.log(msg); }}
                    ref={(client) => { this.clientRef = client }} />
                <button onClick={() => this.sendMessage()}>
                    Activate Lasers
                </button>
            </div>
        );
    }
}