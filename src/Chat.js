import React, { useEffect, useState } from 'react';
import { Client, Message } from '@stomp/stompjs';


export default function Chat() {
  const [state, setState] = useState('');

  let client;

  // useEffect(() => {
  client = new Client({
    brokerURL: 'ws://localhost:15674/ws',
  });

  client.onConnect = function (frame) {
    client.subscribe('', (message) => {
      if (message.body) {
        alert('got message with body ' + message.body);
      } else {
        alert('got empty message');
      }
    }, {});
  };

  client.onStompError = function (frame) {
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
  };
  // }, []);

  function activateStomp() {
    client.activate();
  }

  function publishMessage(input) {
    client.publish({
      destination: '',
      body: input
    })
  }

  function handleChangeInput(e) {
    setState(e.target.value);
  }

  return (
    <div style={{ padding: 30 }}>
      <input type='text' value={state} onChange={(e) => handleChangeInput(e)}></input>
      <input type='button' value="Send" onClick={() => publishMessage()} />
      <input type='button' value="Activate" onClick={() => activateStomp()} />
    </div>
  )
}