import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
  VictoryPortal,
  VictoryAxis,
  VictoryGroup
} from 'victory-native';

const LineChart = ({ data = [], xKey='x', yKey='y', width = 50, height = 50, title = '',
  domainPadding = { x: 0, y: 15 }, tickValues = [], chartPadding = {left: 35, top:30, bottom:35, right:50 },
  dependentAxisOrientation = 'left'}) => {
  const { titleStyle, axisDateStyle, axisTempStyle } = styles;
  const startingTime = tickValues[0];

  let currentDate = 0;
  return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={domainPadding}
        width={width}
        height={height}
        padding={chartPadding}
      >
      <VictoryAxis
        scale="time"
        standalone={true}
        style={axisDateStyle}
        tickValues={tickValues}
        tickFormat={
          (x) => {
            return (`${x.getHours()}h`);
          }
        }
      />
      <VictoryAxis
        dependentAxis
        orientation={dependentAxisOrientation}
        scale="linear"
        style={axisTempStyle}
      />
        <VictoryPortal>
          <VictoryLine
            animate={{
              onEnter: {
                duration: 500,
                before: () => ({
                  _y: 0
                })
              },
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0
                })
              }

            }}
            standalone={false}
            interpolation="natural"
            style={{
              data: { stroke: "#c43a31", strokeWidth: 3 }
            }}
            data={data}
            x={xKey}
            y={yKey}
          />
        </VictoryPortal>

        <VictoryLabel textAnchor="middle" style={titleStyle} text={title} x={width*0.5} y={height*0.07} />
      </VictoryChart>
  );
};

const styles = {
  chartStyle: {
    parent: {
      borderWidth: 5,
      borderColor: 'red'
    }
  },
  titleStyle: {
    fontSize: "20px",
    stroke: "white",
    fill: "white"
  },
  axisDateStyle: {
    axis: { stroke: "white", strokeWidth: 2},
    tickLabels: { stroke: "white", fontSize: "8px" },
    grid: { stroke: "darkgrey" },
    ticks: {
      size: (tick) => {
        if (tick.getHours() % 4 === 0) {
          return 10;
        }
        return 3;
      },
      stroke: "white",
      strokeWidth: 2

    }

  },
  axisTempStyle: {
    axis: { stroke: "white", strokeWidth: 2},
    tickLabels: { stroke: "white", fontSize: "8px" },
    grid: { stroke: "darkgrey" },
    ticks: {
      size: (tick) => {
        return 4;
      },
      stroke: "white",
      strokeWidth: 2
    }
  }
};



export { LineChart };
