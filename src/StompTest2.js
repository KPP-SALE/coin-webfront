import React, { useEffect, useRef, useState } from 'react';
import SockJsClient from 'react-stomp';

function StompTest2() {

  // const [state, setState] = useState('');
  // const entRef = useRef();

  // const sendMessage = (msg) => {
  //   this.clientRef.sendMessage('/symbol', msg);
  // }

  // <SockJsClient url='http://localhost:8080/ws' topics={['/topics/all']}
  //   onMessage={(msg) => { console.log(msg); }}
  //   ref={(client) => { this.clientRef = client }} />

  return (
    <div>
      {/* <SockJsClient url='https://14a1-124-61-155-176.ngrok.io/chat' topics={['/pub/toclient']} */}
      <SockJsClient url='http://localhost:4000/kppcoin' topics={['/topic/chart']}
        onMessage={(msg) => { console.log(msg); }} />
    </div>
  );
}

export default StompTest2;