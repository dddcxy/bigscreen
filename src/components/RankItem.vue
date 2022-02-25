<template>
  <div class="rank_area">
    <div v-for="(item,index) in rankData" class="rank_item" @click="clickItem(index)" :style="{background:currentIndex===index?'rgba(18,62,156,0.5)':''}">
      <div class="item_title">{{item.title}}</div>
      <div class="item_data">
        <span class="data_num"  :style="{backgroundImage:'-webkit-linear-gradient(bottom,'+colorList[index]+',#fff'}">{{item.num}}</span>
        <span class="data_unit">万人次</span>
      </div>
      <div class="item_index" :style="{borderTop:'30px solid '+colorList[index]}">
        <span class="index_num">{{index+1}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      rankData: {
        type: Array,
        default:()=>[
          {
            title:'循环系统疾病1',
            num:9.35
          },
          {
            title:'循环系统疾病2',
            num:9.35
          },
          {
            title:'循环系统疾病3',
            num:9.35
          },
          {
            title:'循环系统疾病4',
            num:9.35
          },
          {
            title:'循环系统疾病5',
            num:9.35
          },
          {
            title:'循环系统疾病6',
            num:9.35
          },
          {
            title:'循环系统疾病7',
            num:9.35
          },
          {
            title:'循环系统疾病8',
            num:9.35
          },
          {
            title:'循环系统疾病9',
            num:9.35
          },
          {
            title:'循环系统疾病10',
            num:9.35
          },
        ]
      },
    },
    data() {
      return {
        currentIndex:0,
        colorList:['#F54C78','#F88D10','#14B16D','#0783E2','#0783E2','#0783E2','#0783E2','#0783E2','#0783E2','#0783E2']
      }
    },
    methods: {
      clickItem(index){
        this.currentIndex=index
      }
    },
  }
</script>

<style lang="less" scoped>
  .rank_area{
    display: flex;
    flex-wrap: wrap;
    // width: 100%;
    width: 462px;
    justify-content: space-around;
    .rank_item{
      position: relative;
      width: 200px;
      height: 100px;
      background: transparent;
      border-style: solid;
      border-width: 1px;
      border-image-source: linear-gradient(0deg, 
        #4facfe 0%, 
        #00f2fe 100%);
      border-image-slice: 1;
      margin-bottom: 20px;
      .item_title{
        height: 50px;
        line-height: 50px;
        margin-left: 24px;
        font-family: MicrosoftYaHei;
	      font-size: 14px;
        color:#fff;
      }
      .item_data{
        height: 50px;
        padding-left: 77px;
        .data_num{
          font-family: TriumvirateCompressed;
          font-size: 32px;
          font-weight: bold;
          font-stretch: normal;
          line-height: 18px;
          letter-spacing: 0px;
          // color: #00aeff;
          background-image: -webkit-linear-gradient(bottom, #00aeff, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .data_unit{
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 18px;
          letter-spacing: 0px;
          color: #b9dfff;
          margin-left: -10px;
        }
      }
      .item_index{
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        border-top: 30px solid #F54C78;
        border-left: 30px solid transparent;
        height: 0px;
        .index_num{
          position:absolute;
          top:-30px;
          right:5px;
          font-size: 12px;
	        font-weight: normal;
          color: #ffffff;
        }
      }
    }
  }
</style>