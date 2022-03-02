<template>
  <div style="width:100%;height: calc(100% - 40px);">
    <div ref="oneBarLine" style="width:100%;height:260px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myCharts: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let myCharts = echarts.init(this.$refs.oneBarLine);
      let options = this.initOptions();
      myCharts.setOption(options);
    },
    initOptions() {
      return {
        textStyle: {
          color: "#c0c3cd",
          fontSize: 14
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {
              backgroundColor: "#031245"
            },
            restore: {}
          },
          iconStyle: {
            borderColor: "#c0c3cd"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            crossStyle: {
              color: "#384757"
            }
          }
        },
        legend: {
          top: 10,
          itemWidth: 8,
          itemHeight: 8,
          icon: "circle",
          left: "center",
          padding: 0,
          textStyle: {
            color: "#f9f9f9",
            borderColor: "#fff"
          },
          data: [
            { name: "征缴总额", icon: "stack" },
            { name: "同比", icon: "line" }
          ]
        },
        color: ["#00D7E9", "rgba(0, 215, 233, 0.9)"],
        grid: {
          containLabel: true,
          left: 20,
          right: 20,
          bottom: 0,
          top: 40
        },
        xAxis: {
          nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 14
          },
          axisLabel: {
            color: "#c0c3cd",
            fontSize: 14,
            interval: 0
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#384267",
              width: 1
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#335971"
            },
            show: true
          },
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          type: "category"
        },
        yAxis: [
          {
            type: "value",
            nameTextStyle: {
              color: "#c0c3cd",
              padding: [0, 0, 0, 0],
              fontSize: 14
            },
            axisLabel: {
              color: "#c0c3cd",
              fontSize: 14
            },
            axisTick: {
              lineStyle: {
                color: "#668092",
                width: 1
              },
              show: true
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#335971"
                // "type": "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#668092",
                width: 1
                // "type": "dashed"
              },
              show: true
            },
            name: "金额(万元)"
          },
          {
            type: "value",
            min: 0,
            max: 100,
            nameTextStyle: {
              color: "#c0c3cd",
              padding: [0, 0, 0, 0],
              fontSize: 14
            },
            axisLabel: {
              color: "#c0c3cd",
              fontSize: 14,
              formatter: "{value}%"
            },
            axisTick: {
              lineStyle: {
                color: "#668092",
                width: 1
              },
              show: true
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#335971"
                // "type": "dashed"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#668092",
                width: 1
                // "type": "dashed"
              },
              show: true
            },
            name: "同比(%)"
          }
        ],
        series: [
          {
            data: [200, 85, 112, 275, 305, 415],
            type: "bar",
            name: "征缴总额",
            barMaxWidth: "auto",
            barWidth: 20,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                colorStops: [
                  {
                    offset: 0,
                    color: "#0D5EB1"
                  },
                  {
                    offset: 1,
                    color: "#00D7E9"
                  }
                ]
              }
            }
          },
          {
            data: [1, 1, 1, 1, 1, 1],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [20, 15],
            tooltip: {
              show: false
            }
          },
          {
            data: [200, 85, 112, 275, 305, 415],
            type: "pictorialBar",
            barMaxWidth: "20",

            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [20, 12],
            zlevel: 2,
            tooltip: {
              show: false
            }
          },
          {
            name: "同比",
            type: "line",
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 10,
            zlevel: 10,
            lineStyle: {
              normal: {
                color: "#00D7E9",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5
              }
            },

            itemStyle: {
              color: "#00ca95",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2
            },
            tooltip: {
              show: true
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14]
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
</style>