import React, { useEffect, useRef, useState } from 'react';

function WebSocketTest() {
  const [socketConnected, setsocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(false);
  const [data, setData] = useState([]);

  const webSocketUrl = 'wss://api.upbit.com/websocket/v1'
  const ws = useRef(null);

  useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      ws.current.onopen = function (e) {
        console.log('connected to ' + webSocketUrl);
        setsocketConnected(true);
      }

      ws.current.onclose = function (e) {
        console.log('disconnected from ' + webSocketUrl);
        console.log(e);
      }

      ws.current.onerror = function (e) {
        console.log('connection error ' + webSocketUrl);
        console.log(e);
      }
    }

    return () => {
      console.log('clean up');
      ws.current.close();
    }
  }, [])


  // useEffect(() => {
  //   if (socketConnected) {
  //     ws.current.send('[{"ticket":"test"},{"type":"ticker","codes":["KRW-BTC"]}]');
  //     setSendMsg(true);
  //   }
  // }, [socketConnected]);

  useEffect(() => {
    if (sendMsg) {
      ws.current.onmessage = function (e) {
        const reader = new FileReader();

        if (e.data instanceof Blob) {
          reader.onload = () => {
            setData((prevData) => [...prevData, reader.result]);
          }

          reader.readAsText(e.data);
        } else {
          console.log('Result: ' + reader.e.data);
        }
      }
    }
  }, [sendMsg]);

  const handleClickConnect = () => {
    ws.current = new WebSocket(webSocketUrl);
    setsocketConnected(true);
  }

  const handleClickStart = () => {
    if (ws.current && socketConnected) {
      ws.current.send('[{"ticket":"test"},{"type":"ticker","codes":["KRW-BTC"]}]');
      setSendMsg(true);
    }
  }

  const handleClickStop = () => {
    if (sendMsg) {
      ws.current.close();
      setsocketConnected(!socketConnected);
      setSendMsg(false);
    }
  }

  return (
    <div>
      <button type="button" onClick={() => handleClickConnect()}>연결!!</button>
      <button type="button" onClick={() => handleClickStart()}>시작!!</button>
      <button type="button" onClick={() => handleClickStop()}>멈춰!!</button>
      <p>
        socket connected : {socketConnected}
      </p>
      {JSON.stringify(data)}
    </div>
  );
}

export default WebSocketTest;