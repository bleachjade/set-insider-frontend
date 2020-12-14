<template>
  <div class="container" id="Stock">
    <CandleStick/>
  </div>
</template>
<script>
import CandleStick from "@/components/CandleStick.vue";

export default {
  name: "Stock",
  components: {
    CandleStick
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


