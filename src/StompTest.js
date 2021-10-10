import React, { useEffect, useRef, useState } from 'react';
import SockJsClient from 'react-stomp';

function StompTest() {

  const sendMessage = (msg) => {
    this.clientRef.sendMessage('/sub/fromclient', msg);
  }

  return (
    <div>
      {/* <SockJsClient url='http://localhost:61613/ws' topics={['/topics/all']} */}
      <SockJsClient url='https://14a1-124-61-155-176.ngrok.io/chat' topics={['/pub/toclient']}
        onMessage={(msg) => { console.log(msg); }}
        />
        {/* ref={(client) => { this.clientRef = client }} /> */}
    </div>
  );
}

export default StompTest;