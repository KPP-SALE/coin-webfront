import React, { useEffect, useState } from 'react';
import { VictoryCandlestick, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import axios from 'axios';

export default function CandleStick() {
  // todo: fetching...
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.post('https://6854-118-32-89-72.ngrok.io/upbit/bitcoin');
        const newData = data.map(({ recentTradeAt, price }, idx) => ({
          x: new Date(2021, 8, idx + 1), open: price, close: price + 1000000, high: price + 2000000, low: price - 1000000
        }));

        /*
           TODO:

           1. 계산식 구하기 (그래프의 확대/축소)
            - 1분봉, 5분봉, 10분봉...

           2. open - close - high - low 계산식

           3. 웹소켓 -> 기존데이터 update

           4. 그래프 가로 스크롤 (기간 선택)

           5. 그래프 이쁘게 꾸미기

        */

        setGraphData(newData.slice(0, 5));
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, [])

  // const data =
  //   [
  //     { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
  //     { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
  //     { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
  //     { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
  //     { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 },
  //   ];

  return (
    <>
      <VictoryChart
        domainPadding={{ x: 25, y: 10 }}
        scale={{ x: "time" }}
        theme={VictoryTheme.material}
      >
        <VictoryAxis tickFormat={(t) => `${new Date(t).getMonth()}/${new Date(t).getDate()}`} />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={graphData}
        />
      </VictoryChart>
      {JSON.stringify(graphData)}
    </>
  )
}