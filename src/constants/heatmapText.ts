export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const CHART_OPTIONS = {
  stroke: {
    width: 0,
  },
  tooltip: {
    enabled: true,
    x: {
      show: true,
      formatter: function (val: any) {
        return `Week ${val}`;
      },
    },
    // y: {
    //   formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
    //     console.log("🚀 ~ file: heatmapText.ts:25 ~ value:", value);
    //     console.log({ series, seriesIndex, dataPointIndex, w });
    //     return value;
    //   },
    // },
  },
  // title: {
  //   text: "HeatMap Chart with Color Range",
  // },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
    ],
  },
  // yaxis: {
  //   labels: {
  //     formatter: function (val: any, index: any) {
  //       const categories = [
  //         "Sunday",
  //         "Monday",
  //         "Tuesday",
  //         "Wednesday",
  //         "Thurday",
  //         "Friday",
  //         "Saturday",
  //       ];
  //       return categories[index] || val;
  //     },
  //   },
  // },
  legend: {
    // show: false,
    // horizontalAlign: "center",
    position: "bottom",
  },
  plotOptions: {
    heatmap: {
      // shadeIntensity: 1,
      radius: 5,
      enableShades: false,
      // useFillColorAsStroke: true,
      // distributed: true,
      colorScale: {
        ranges: [
          {
            from: -30,
            to: 0,
            color: "#808080",
            name: "None",
          },
          {
            from: 1,
            to: 20,
            color: "#0404cc",
            name: "Low",
          },
          {
            from: 21,
            to: 60,
            color: "#00008B",
            name: "Medium",
          },
          {
            from: 61,
            to: 100,
            color: "#000059",
            name: "High",
          },
        ],
      },
    },
  },
};
