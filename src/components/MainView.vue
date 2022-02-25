<template>
  <screen-adapter>
    <div class="all">
      <div class="title">社保缴费分析</div>
      <div style="padding-left:40px">
        <top-item></top-item>
        <div class="center_item">
          <div class="center_1">
            <title-slot :titleMsg="'各险种缴费分布'">
              <div slot="definedSlot" class="slot">
                <select class="slot_select">
                  <option value="征缴总金额" selected = "selected">征缴总金额</option>
                </select>
              </div>
            </title-slot>
            <div class="center_1_chart">
              <pie-chart></pie-chart>
            </div>
          </div>
          <div class="center_2">
            <title-slot :titleMsg="'各险种缴费明细'">
              <div slot="definedSlot" class="slot">
              </div>
            </title-slot>
            <!-- <rank-item></rank-item> -->
          </div>
          <div class="center_1">
            <title-slot :titleMsg="'各险种补缴/退缴情况'">
              <div slot="definedSlot" class="slot">
              </div>
            </title-slot>
          </div>
        </div>
        <div class="bottom_item">
          <div class="bottom_1">
            <title-slot :titleMsg="'缴费趋势分析'">
              <div slot="definedSlot" class="slot">
              </div>
            </title-slot>
          </div>
          <div class="bottom_1">
            <title-slot :titleMsg="'征缴趋势分析'">
              <div slot="definedSlot" class="slot">
              </div>
            </title-slot>
          </div>
          <div class="bottom_1">
            <title-slot :titleMsg="'补缴/退缴趋势分析'">
              <div slot="definedSlot" class="slot">
              </div>
            </title-slot>
          </div>
        </div>
      </div>
    </div>
  </screen-adapter>
</template>

<script>
  import ScreenAdapter from './ScreenAdapter.vue'
  import TopItem from './TopItem.vue'
  import TitleSlot from './TitleSlot.vue'
  import PieChart from './PieChart.vue'

  // import RankItem from './RankItem.vue'

  export default {
    components:{
      ScreenAdapter,TopItem,TitleSlot,PieChart
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .all{
    width: 100%;
    height: 100%;
    background-color: #071018;
    /* padding: 40px; */
  }
  .title{
    height: 60px;
    width: 100%;
    border-bottom:1px solid #fff;
    margin-bottom: 40px;
    float: left;
    color: #fefefe;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    background: linear-gradient(to top,#306EEF,#fff)
  }
  /* 中间 */
  .center_item{
    width: 1840px;
    height: 490px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  .center_1{
    display: inline-block;
    width: 420px;
	  height: 489px;
    background:
            linear-gradient(to top, #306EEF, #306EEF) left top no-repeat,/*上左*/
            linear-gradient(to right, #306EEF, #306EEF) left top no-repeat,/*左上*/
            linear-gradient(to left, #306EEF, #306EEF) right top no-repeat,/*上右*/
            linear-gradient(to bottom, #306EEF, #306EEF) right top no-repeat,/*上右*/
            linear-gradient(to left, #306EEF, #306EEF) left bottom no-repeat,/*下左*/
            linear-gradient(to bottom, #306EEF, #306EEF) left bottom no-repeat,/*左下*/
            linear-gradient(to top, #306EEF, #306EEF) right bottom no-repeat,/*下右*/
            linear-gradient(to left, #306EEF, #306EEF) right bottom no-repeat;/*右下*/
    background-size: 2px 16px, 16px 2px, 2px 16px, 16px 2px;
    background-color: rgba(36,56,128,0.21);
  }
  .center_2{
    display: inline-block;
    width: 960px;
	  height: 489px;
    background:
            linear-gradient(to top, #306EEF, #306EEF) left top no-repeat,/*上左*/
            linear-gradient(to right, #306EEF, #306EEF) left top no-repeat,/*左上*/
            linear-gradient(to left, #306EEF, #306EEF) right top no-repeat,/*上右*/
            linear-gradient(to bottom, #306EEF, #306EEF) right top no-repeat,/*上右*/
            linear-gradient(to left, #306EEF, #306EEF) left bottom no-repeat,/*下左*/
            linear-gradient(to bottom, #306EEF, #306EEF) left bottom no-repeat,/*左下*/
            linear-gradient(to top, #306EEF, #306EEF) right bottom no-repeat,/*下右*/
            linear-gradient(to left, #306EEF, #306EEF) right bottom no-repeat;/*右下*/
    background-size: 2px 16px, 16px 2px, 2px 16px, 16px 2px;
    background-color: rgba(36,56,128,0.21);
  }
  /* 底部 */
  .bottom_item{
    width: 1840px;
    height: 320px;
    display: flex;
    justify-content: space-between;
  }
  .bottom_1{
    display: inline-block;
    width: 600px;
	  height: 320px;
    background:
            linear-gradient(to top, #306EEF, #306EEF) left top no-repeat,/*上左*/
            linear-gradient(to right, #306EEF, #306EEF) left top no-repeat,/*左上*/
            linear-gradient(to left, #306EEF, #306EEF) right top no-repeat,/*上右*/
            linear-gradient(to bottom, #306EEF, #306EEF) right top no-repeat,/*上右*/
            linear-gradient(to left, #306EEF, #306EEF) left bottom no-repeat,/*下左*/
            linear-gradient(to bottom, #306EEF, #306EEF) left bottom no-repeat,/*左下*/
            linear-gradient(to top, #306EEF, #306EEF) right bottom no-repeat,/*下右*/
            linear-gradient(to left, #306EEF, #306EEF) right bottom no-repeat;/*右下*/
    background-size: 2px 16px, 16px 2px, 2px 16px, 16px 2px;
    background-color: rgba(36,56,128,0.21);
  }
  .slot{
    /* display:flex;
    align-items:center;
    justify-content:center; */
    position: absolute;
    right:0;
    top: 50%;
    transform: translate(-10%,-70%);
  }
  .slot_select{
    width: 140px;
    height: 28px;
    background-color: #061524;
    border: solid 1px #134086;
    color: #fff;
    border: none;
  }
  .center_1_chart{
    width: 100%;
    height: 420px;
    background: url('../assets/03社保缴费分析/底部.png') no-repeat center 30%; 
  }
</style>