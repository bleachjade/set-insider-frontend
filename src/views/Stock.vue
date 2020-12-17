<template>
  <div class="container" id="Stock">
    <CandleStick/>

    <div>
      <div id='parent_div_1'>
        <NewsSocialData/>
      </div>

      <div id='parent_div_2'>
        <NewsStockData/>
      </div>
    </div>
  
  </div>
</template>
<script>
import CandleStick from "@/components/CandleStick.vue";
import NewsSocialData from "@/components/NewsSocialData.vue";
import NewsStockData from "@/components/NewsStockData.vue";
export default {
  name: "Stock",
  components: {
    CandleStick,
    NewsSocialData,
    NewsStockData
  }
};
</script>

<style>
.chart {
  text-align: center;
}

.home {
  text-align: center;
}

#parent_div_1{
    width:550px;
    height:auto;
    border:10px solid black;
    margin-left:0px;
    float:left;
    border-radius: 25px;
    background-color: silver;
}

#parent_div_2{
    width:550px;
    height:auto;
    border:10px solid black;
    margin-right:10px;
    float:right;
    border-radius: 25px;
    background-color: silver;
}

</style>


