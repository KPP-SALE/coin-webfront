import React, { useEffect, useRef, useState } from 'react';
import SockJsClient from 'react-stomp';

function StompTest() {

  const sendMessage = (msg) => {
    this.clientRef.sendMessage('/sub/fromclient', msg);
  }

  return (
    <div>
      {/* <SockJsClient url='http://localhost:61613/ws' topics={['/topics/all']} */}
      <SockJsClient url='http://localhost:4000/chat' topics={['/pub/toclient']}
        onMessage={(msg) => { console.log(msg); }}
        />
        {/* ref={(client) => { this.clientRef = client }} /> */}
    </div>
  );
}

export default StompTest;