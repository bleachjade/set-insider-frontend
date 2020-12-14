<template>
  <div class="container" id="Stock">
    <StockCard />
    <CandleStick/>
  </div>
</template>
<script>
import CandleStick from "@/components/CandleStick.vue";
import StockCard from "@/components/StockCard.vue";

export default {
  name: "Stock",
  components: {
    CandleStick,
    StockCard
  },
};
</script>

<style>
.chart {
  text-align: center;
}

.home {
  text-align: center;
}

.container {
  display: -moz-box;
}
</style>


