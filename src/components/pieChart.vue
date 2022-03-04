<template>
  <div ref="pie" style="width:100%;height:100%"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    data: {
      type: Array,
      default: () => [
        
      ]
    },
    tbName: {
      type: Array,
      default: () => ["机关养老", "城居养老"]
    },
    tbValue: {
      type: Array,
      default: () => [453, 453]
    },
    colorList:{
      type:Array,
      default:()=>["rgb(131,249,103)", "#FBFE27", "#FE5050", "#1DB7E5","#EE7942"]
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  //销毁示例
  beforeDestroy() {
    let myCharts = echarts.init(this.$refs.pie);
    myCharts.dispose();
  },
  methods: {
    //初始化示例
    initChart() {
      let myCharts = echarts.init(this.$refs.pie);
      let options = this.initOptions();
      myCharts.setOption(options);
    },
    initOptions() {
      let data = this.data;
      let tbName = this.tbName;
      let tbValue = this.tbValue;
      return {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          show: true,
          icon: "circle",
          bottom: "0%",
          left: "center",
          data: tbName,
          orient: "horizontal",
          textStyle: {
            color: "#fff",
            rich: {
              m: {
                fontSize: 13,
                lineHeight: 10,
                fontWeight: "bold",
                color: "#fft",
                padding: [65, 5, 30, 5]
              },
              title: {
                fontSize: 18,
                lineHeight: 10,
                fontWeight: "bold",
                color: "#fft",
                padding: [90, 5, 30, 5]
              },
              value: {
                fontSize: 14,
                lineHeight: 18,
                color: "#fff",
                padding: [70, 5, 0, 5]
              },
              unit: {
                fontSize: 10,
                lineHeight: 18,
                color: "#fff",
                padding: [70, 5, 0, -5]
              }
            }
          },
          formatter: function(p) {
            let m = ["缴费最多险种", "退费最多险种"];
            for (let i = 0; i < 2; i++) {
              return (
                "{m|" +
                m[i] +
                "}\n{title|" +
                p +
                "}\n\n" +
                "{value|" +
                tbValue[i] +
                "}{unit|万元   25%}"
              );
            }
          }
        },
        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["10%", "35%"],
            center: ["50%", "40%"],
            color: this.colorList, //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: data.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",

            label: {
              normal: {
                formatter: ["{b|{b}}", "{c|{c}次}"].join("\n"),
                rich: {
                  c: {
                    color: "#Fff",
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 5
                  },
                  b: {
                    color: "#fff",
                    fontSize: 15,
                    height: 40
                  }
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgb(98,137,169)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0, 0, 0.8)",
                shadowBlur: 50
              }
            }
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
</style>