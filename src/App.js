import useWebSocket, { ReadyState } from 'react-use-websocket';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import faker from 'faker/locale/ko';

import Table from './Table';
import WebSocketTest from './WebSocketTest';
import Chat from './Chat';
import Chart from './Chart';
import CandleStick from './CandleStick';

faker.seed(100);
function App() {
  const columns = useMemo(
    () => [
      {
        accessor: "name",
        Header: "Name",
      },
      {
        accessor: "email",
        Header: "Email",
      },
      {
        accessor: "phone",
        Header: "Phone",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      Array(53)
        .fill()
        .map(() => ({
          name: faker.name.lastName() + faker.name.firstName(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
        })),
    []
  );

  return (
    <div>
      <WebSocketTest />
      <Chat></Chat>
      {/* <Chart></Chart> */}
      <CandleStick></CandleStick>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;

// const App = () => {
//   //Public API that will echo messages sent to it back to the client
//   const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
//   // const [socketUrl, setSocketUrl] = useState('wss://api.upbit.com/websocket/v1');
//   const messageHistory = useRef([]);

//   const {
//     sendMessage,
//     lastMessage,
//     readyState,
//   } = useWebSocket(socketUrl);

//   messageHistory.current = useMemo(() =>
//     messageHistory.current.concat(lastMessage), [lastMessage]);

//   const handleClickChangeSocketUrl = useCallback(() =>
//     // setSocketUrl('wss://demos.kaazing.com/echo'), []);
//     setSocketUrl('wss://api.upbit.com/websocket/v1'), []);

//   const handleClickSendMessage = useCallback(() =>
//     sendMessage('[{"ticket":"test"},{"type":"ticker","codes":["KRW-BTC"]}]'), []);

//   const connectionStatus = {
//     [ReadyState.CONNECTING]: 'Connecting',
//     [ReadyState.OPEN]: 'Open',
//     [ReadyState.CLOSING]: 'Closing',
//     [ReadyState.CLOSED]: 'Closed',
//     [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
//   }[readyState];

//   return (
//     <div>
//       <button
//         onClick={handleClickChangeSocketUrl}
//       >
//         Click Me to change Socket Url
//       </button>
//       <button
//         onClick={handleClickSendMessage}
//         disabled={readyState !== ReadyState.OPEN}
//       >
//         Click Me to send 'Hello'
//       </button>
//       <span>The WebSocket is currently {connectionStatus}</span>
//       {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
//       <ul>
//         {/* {messageHistory.current
//           .map((message, idx) => <span key={idx}>{message.data}</span>)} */}
//         sendMessage: {JSON.stringify(sendMessage)}
//       </ul>
//       <div>
//         lastMessage: {JSON.stringify(lastMessage)}
//       </div>
//       <div>
//         readyState: {JSON.stringify(readyState)}
//       </div>
//     </div>
//   );
// };

// export default App;