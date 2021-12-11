import React from 'react';
import SockJsClient from 'react-stomp';

export default function StompTest({socketData, setSocketData}) {
    let clientRef;

    function sendMessage(msg){
        console.log('sendmessage work');
        // clientRef.sendMessage('/app/symbol', JSON.stringify(this.message));
        setSocketData([...socketData, 'msg']);
    }

    return (
        <div>
            <SockJsClient url='https://6ac3-1-229-199-94.ngrok.io/kppcoin' topics={['/topic/chart']}
                onMessage={(msg) => {
                    console.log('msg: ', msg);
                }}
                ref={(client) => { clientRef = client }} />
            <button onClick={() => sendMessage()}>
                Activate Lasers
            </button>
        </div>
    );
}

// export default class StompTest extends React.Component {
//     message = { from: "react client", text: "hello" };

//     sendMessage = (msg) => {
//         console.log('sendmessage work');
//         // this.clientRef.sendMessage('/topic/chart', JSON.stringify(this.message));
//         this.clientRef.sendMessage('/app/symbol', JSON.stringify(this.message));
//     }

//     render() {
//         return (
//             <div>
//                 <SockJsClient url='https://6ac3-1-229-199-94.ngrok.io/kppcoin' topics={['/topic/chart']}
//                     onMessage={(msg) => {
//                         console.log('msg: ', msg);
//                     }}
//                     ref={(client) => { this.clientRef = client }} />
//                 <button onClick={() => this.sendMessage()}>
//                     Activate Lasers
//                 </button>
//             </div>
//         );
//     }
// }