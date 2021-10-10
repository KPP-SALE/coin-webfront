import React, { useEffect, useState } from 'react';
// import { VictoryCandlestick, VictoryChart, VictoryTheme, VictoryAxis, VictoryZoomContainer } from 'victory';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
// import {ReactApexChart} from 'react-apexcharts';
// const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

import moment from 'moment';

export default function CandleStick() {
  // todo: fetching...
  const [graphData, setGraphData] = useState([]);
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});

  // const graphData =
  //   [
  //     { x: new Date(2021, 8, 21, 1), open: 5, close: 10, high: 15, low: 0 },
  //     { x: new Date(2021, 8, 21, 2), open: 10, close: 15, high: 20, low: 5 },
  //     { x: new Date(2021, 8, 21, 3), open: 15, close: 20, high: 22, low: 10 },
  //     { x: new Date(2021, 8, 21, 4), open: 20, close: 10, high: 25, low: 7 },
  //     { x: new Date(2021, 8, 21, 5), open: 10, close: 8, high: 15, low: 5 },
  //     { x: new Date(2021, 8, 21, 6), open: 5, close: 10, high: 15, low: 0 },
  //     { x: new Date(2021, 8, 21, 7), open: 10, close: 15, high: 20, low: 5 },
  //     { x: new Date(2021, 8, 21, 8), open: 15, close: 20, high: 22, low: 10 },
  //     { x: new Date(2021, 8, 21, 9), open: 20, close: 10, high: 25, low: 7 },
  //     { x: new Date(2021, 8, 21, 10), open: 10, close: 8, high: 15, low: 5 },
  //     { x: new Date(2021, 8, 21, 11), open: 5, close: 10, high: 15, low: 0 },
  //     { x: new Date(2021, 8, 21, 12), open: 10, close: 15, high: 20, low: 5 },
  //     { x: new Date(2021, 8, 21, 13), open: 15, close: 20, high: 22, low: 10 },
  //     { x: new Date(2021, 8, 21, 14), open: 20, close: 10, high: 25, low: 7 },
  //     { x: new Date(2021, 8, 21, 15), open: 10, close: 8, high: 15, low: 5 },
  //     { x: new Date(2021, 8, 21, 16), open: 5, close: 10, high: 15, low: 0 },
  //     { x: new Date(2021, 8, 21, 17), open: 10, close: 15, high: 20, low: 5 },
  //     { x: new Date(2021, 8, 21, 18), open: 15, close: 20, high: 22, low: 10 },
  //     { x: new Date(2021, 8, 21, 19), open: 20, close: 10, high: 25, low: 7 },
  //     { x: new Date(2021, 8, 21, 20), open: 10, close: 8, high: 15, low: 5 },
  //   ];

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://8f56-118-32-89-72.ngrok.io/rest2');
        console.log(data);

        // const newData = data.map(({ close, high, open, low, candleDateTimeKst }, idx) => ({
        //   x: new Date(candleDateTimeKst), open, close, high, low
        // }));
        const newData = data.map(({ close, high, open, low, candleDateTimeKst }, idx) => ({
          x: new Date(candleDateTimeKst), 
          y: [open, high, close, low]
        }));

        const seriesData = [{data: newData}];
        console.log(seriesData);

        /*
           TODO:

           1. 계산식 구하기 (그래프의 확대/축소)
            - 1분봉, 5분봉, 10분봉...

           2. open - close - high - low 계산식

           3. 웹소켓 -> 기존데이터 update

           4. 그래프 가로 스크롤 (기간 선택)

           5. 그래프 이쁘게 꾸미기

        */

        // setGraphData(newData.slice(0, 5));
        setGraphData(seriesData);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
    const optionsForCandle = {
              chart: {
                type: 'candlestick',
                height: 350
              },
              title: {
                text: 'CandleStick Chart',
                align: 'left'
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
            };
    setOptions(optionsForCandle);
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
      <div style={{ height: '40%', width: '80%' }}>
        <ReactApexChart options={options} series={graphData} type="candlestick" height={350} />
       </div>
    </>
  )
}