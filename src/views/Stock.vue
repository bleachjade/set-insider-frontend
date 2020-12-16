<template>
  <div class="container" id="Stock">
    <CandleStick/>
    <NewsSocialData/>
  </div>
</template>
<script>
import CandleStick from "@/components/CandleStick.vue";
import NewsSocialData from "@/components/NewsData.vue";

export default {
  name: "Stock",
  components: {
    CandleStick,
    NewsSocialData
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
</style>


