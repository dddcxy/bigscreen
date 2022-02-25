<template>
  <div style="width:100%;height:100%">
    <div ref="pie" style="width:100%;height:100%"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
        myCharts:null,
    }   
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart(){
      let myCharts = echarts.init(this.$refs.pie)
      let options = this.initOptions()
      myCharts.setOption(options);
    },
    initOptions(){
        let data = [{
                value: 285,
                name: '黑名单查询'
            },
            {
                value: 410,
                name: '红名单查询'
            },
            {
                value: 274,
                name: '法人行政处罚'
            },
            {
                value: 235,
                name: '其它查询'
            }
        ]
        let tbName = ['红名单查询','其他查询']
        let tbValue = [410,235]
        return{
            
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    show: true,
                    icon: "circle",
                    top: "bottom",
                    left: "center",
                    data: tbName,
                    orient:'vertical',
                    formatter:function(tbName){
                        for(let i = 0;i<=tbName.length;i++){
                            return tbName[i]+'  '+tbValue[i]
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
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: ['10%','35%'],
                    center: ['50%', '40%'],
                    color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
                    data: data.sort(function(a, b) {
                        return a.value - b.value
                    }),
                    roseType: 'radius',

                    label: {
                        normal: {
                            formatter: ['{b|{b}}','{c|{c}次}'].join('\n'),
                            rich: {
                                c: {
                                    color: '#Fff',
                                    fontSize: 20,
                                    fontWeight:'bold',
                                    lineHeight: 5
                                },
                                b: {
                                    color: '#fff',
                                    fontSize: 15,
                                    height: 40
                                },
                            },
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgb(98,137,169)',
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20,

                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowBlur: 50,
                        }
                    }
                }]
            }
        }
  },
}
</script>

<style scoped>

</style>